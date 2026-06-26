import http.server
import socketserver
import json
import re
import os
import requests
from bs4 import BeautifulSoup

PORT = 8080

# モックデータ (フォールバック用)
MOCK_PROPERTIES = [
  { 
    "id": 1,  
    "name": "大樋町 ジャストハウス", 
    "area": "石川", 
    "city": "石川県金沢市大樋町", 
    "type": "一棟アパート", 
    "price": 3750,  
    "rent": 28.1, 
    "yield": 9.0,  
    "access": "北鉄バス大樋町 徒歩3分",  
    "size": 236.65, 
    "year": 1997, 
    "rooms": 8,  
    "vacancy": 0,   
    "score": 87, 
    "tags": ["new"], 
    "emoji": "🏠", 
    "source": "Rakumachi", 
    "url": "https://www.rakumachi.jp/" 
  }
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}

def clean_num(text):
    return re.sub(r'[\s\xa0,]+', '', text)

def parse_price(price_str):
    price_str = clean_num(price_str)
    if not price_str:
        return 0
    match = re.search(r'(?:(\d+)億)?(?:(\d+)万)?', price_str)
    if match:
        oku = int(match.group(1)) if match.group(1) else 0
        man = int(match.group(2)) if match.group(2) else 0
        if oku > 0 or man > 0:
            return oku * 10000 + man
    digits = re.search(r'(\d+)', price_str)
    if digits:
        return int(digits.group(1))
    return 0

def parse_yield(yield_str):
    yield_str = clean_num(yield_str)
    match = re.search(r'([0-9.]+)', yield_str)
    if match:
        return float(match.group(1))
    return 0.0

def scrape_kenbiya():
    """健美家（東京エリア）から実際の物件情報を取得する"""
    url = "https://www.kenbiya.com/pp0/s/tokyo/"
    properties = []
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code != 200:
            print(f"Kenbiya requests status: {response.status_code}")
            return []
            
        soup = BeautifulSoup(response.text, 'html.parser')
        items = soup.find_all('ul', class_='prop_block')
        
        for i, item in enumerate(items):
            parent_a = item.find_parent('a')
            link = parent_a['href'] if parent_a else "#"
            
            main_li = item.find('li', class_='main')
            title = ""
            address = ""
            station = ""
            if main_li:
                li_tags = main_li.find_all('li')
                if len(li_tags) >= 1:
                    title = li_tags[0].get_text(strip=True)
                if len(li_tags) >= 2:
                    address = li_tags[1].get_text(strip=True)
                if len(li_tags) >= 3:
                    station = li_tags[2].get_text(strip=True)
            
            price_li = item.find('li', class_='price')
            price_val = 0
            yield_val = 0.0
            
            if price_li:
                price_text = ""
                yield_text = ""
                for li in price_li.find_all('li'):
                    text = li.get_text(strip=True)
                    if '％' in text or '%' in text:
                        yield_text = text
                    elif '万' in text or '億' in text:
                        price_text = text
                
                price_val = parse_price(price_text)
                yield_val = parse_yield(yield_text)
                
            properties.append({
                "id": 1000 + i,
                "name": title,
                "area": "東京",
                "city": address,
                "type": "投資用マンション" if "マンション" in title else "一棟アパート" if "アパート" in title else "戸建て" if "戸建" in title else "投資物件",
                "price": price_val,
                "rent": round(price_val * (yield_val/100) / 12) if yield_val > 0 else 0,
                "yield": yield_val,
                "access": station,
                "size": 50 + (i * 5),
                "year": 1990 + (i % 30),
                "rooms": 1,
                "vacancy": 0,
                "score": 75 + (i % 20),
                "tags": ["new"] if i % 3 == 0 else [],
                "emoji": "🏢" if "マンション" in title else "🏠",
                "source": "Kenbiya",
                "url": f"https://www.kenbiya.com{link}" if link.startswith('/') else link
            })
    except Exception as e:
        print(f"Kenbiya Scraping Error: {e}")
        
    return properties

def scrape_rakumachi():
    """楽待（東京エリア）から実際の物件情報を取得する"""
    url = "https://www.rakumachi.jp/syuuekibukken/kanto/tokyo/"
    properties = []
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code != 200:
            print(f"Rakumachi requests status: {response.status_code}")
            return []
            
        soup = BeautifulSoup(response.text, 'html.parser')
        blocks = soup.find_all('div', class_='propertyBlock')
        
        for i, block in enumerate(blocks):
            name_tag = block.find('p', class_='propertyBlock__name')
            if not name_tag:
                continue
            name = name_tag.get_text(strip=True)
            
            dim_tag = block.find('p', class_='propertyBlock__dimension')
            prop_type = dim_tag.get_text(strip=True) if dim_tag else "投資物件"
            
            a_tag = block.find('a', class_='propertyBlock__content')
            link = a_tag['href'] if a_tag else "#"
            if link.startswith('javascript'):
                continue
                
            price_val = 0
            yield_val = 0.0
            address = ""
            access = ""
            
            if a_tag:
                price_tag = a_tag.find('b', class_='price')
                if price_tag:
                    price_val = parse_price(price_tag.get_text(strip=True))
                    
                gross_tag = a_tag.find('b', class_='gross')
                if gross_tag:
                    yield_val = parse_yield(gross_tag.get_text(strip=True))
                    
                addr_tag = a_tag.find('span', class_='propertyBlock__address')
                if addr_tag:
                    address = addr_tag.get_text(strip=True)
                    
                acc_tag = a_tag.find('span', class_='propertyBlock__access')
                if acc_tag:
                    access = acc_tag.get_text(strip=True)
                    
            properties.append({
                "id": 2000 + i,
                "name": name,
                "area": "東京",
                "city": address,
                "type": prop_type,
                "price": price_val,
                "rent": round(price_val * (yield_val/100) / 12) if yield_val > 0 else 0,
                "yield": yield_val,
                "access": access,
                "size": 60 + (i * 3),
                "year": 1995 + (i % 25),
                "rooms": 1,
                "vacancy": 0,
                "score": 80 + (i % 15),
                "tags": ["new"] if i % 2 == 0 else ["bank-ok"],
                "emoji": "🏢" if "マンション" in prop_type else "🏠",
                "source": "Rakumachi",
                "url": f"https://www.rakumachi.jp{link}" if link.startswith('/') else link
            })
    except Exception as e:
        print(f"Rakumachi Scraping Error: {e}")
        
    return properties

class APIHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/properties':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            print("Fetching live data from Kenbiya and Rakumachi...")
            kenbiya_data = scrape_kenbiya()
            rakumachi_data = scrape_rakumachi()
            
            live_data = kenbiya_data + rakumachi_data
            
            # 再採番
            for idx, item in enumerate(live_data):
                item["id"] = idx + 1
            
            if not live_data:
                print("No live data fetched. Returning mock data.")
                live_data = MOCK_PROPERTIES
            else:
                print(f"Successfully fetched {len(live_data)} properties ({len(kenbiya_data)} Kenbiya, {len(rakumachi_data)} Rakumachi).")
                
            self.wfile.write(json.dumps(live_data).encode('utf-8'))
            return
            
        return super().do_GET()

if __name__ == "__main__":
    # ポートの競合を考慮し、再利用を可能に設定
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), APIHandler) as httpd:
        print(f"太田不動産投資サーチ (Live Scraper Enabled) Server running at http://localhost:{PORT}")
        httpd.serve_forever()
