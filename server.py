import http.server
import socketserver
import json
import os

PORT = 8080

# 物件データの初期セット
PROPERTIES = [
  { "id":1,  "name":"大樋町 ジャストハウス",              "area":"金沢", "city":"石川県金沢市大樋町",   "type":"一棟アパート",   "price":3750,  "rent":28.1, "yield":9.0,  "access":"北鉄バス大樋町 徒歩3分",  "size":236.65, "year":1997, "rooms":8,  "vacancy":0,   "score":87, "tags":["new"],            "emoji":"🏠", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/koshinetsu/ishikawa/dim1002/3618394/show.html" },
  { "id":2,  "name":"一棟アパート 泉佐野市（駅徒歩4分）",  "area":"大阪", "city":"大阪府泉佐野市大宮町",  "type":"一棟アパート",   "price":12300, "rent":65.0, "yield":6.3,  "access":"南海線泉佐野駅 徒歩4分", "size":359.07, "year":2020, "rooms":9,  "vacancy":0,   "score":80, "tags":["new","bank-ok"],  "emoji":"🏠", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kansai/osaka/dim1002/3618390/show.html" },
  { "id":3,  "name":"クリスタル蓮根（RC造・2022年築）",   "area":"東京", "city":"東京都板橋区蓮根3丁目", "type":"一棟アパート",   "price":15000, "rent":59.6, "yield":4.8,  "access":"都営三田線西台駅 徒歩9分","size":187.77, "year":2022, "rooms":8,  "vacancy":0,   "score":78, "tags":["new","bank-ok"],  "emoji":"🏢", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/tokyo/dim1002/3618389/show.html" },
  { "id":4,  "name":"横須賀市 浦賀駅 想定利回り9.51%",   "area":"横浜", "city":"神奈川県横須賀市鴨居",  "type":"一棟アパート",   "price":2280,  "rent":18.1, "yield":9.5,  "access":"京急本線浦賀駅 徒歩24分", "size":139.12, "year":1983, "rooms":4,  "vacancy":5.0, "score":71, "tags":["new","price-down"],"emoji":"🏡", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/kanagawa/dim1002/3618388/show.html" },
  { "id":5,  "name":"井上ビル（大塚駅北口 徒歩2分）",     "area":"東京", "city":"東京都豊島区北大塚2丁目","type":"一棟マンション", "price":39800, "rent":34.8, "yield":1.1,  "access":"JR山手線大塚駅 徒歩2分",  "size":272.71, "year":2001, "rooms":5,  "vacancy":0,   "score":60, "tags":["bank-ok"],         "emoji":"🏙", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/tokyo/toshima-ku/1234567/" },
  { "id":6,  "name":"北久里浜駅 徒歩2分 商業ビル",       "area":"横浜", "city":"神奈川県横須賀市根岸町", "type":"一棟マンション", "price":9480,  "rent":62.1, "yield":7.9,  "access":"京急久里浜線北久里浜駅 徒歩2分","size":213.72,"year":1989,"rooms":7,  "vacancy":0,   "score":82, "tags":["new","bank-ok"],  "emoji":"🏬", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/kanagawa/dim1003/3618384/show.html" },
  { "id":7,  "name":"荒川区 2011年築 駅徒歩6分AP",       "area":"東京", "city":"東京都荒川区荒川3丁目", "type":"一棟アパート",   "price":8180,  "rent":33.7, "yield":5.0,  "access":"都電荒川線荒川区役所前駅 徒歩6分","size":105.11,"year":2011,"rooms":6,  "vacancy":0,   "score":79, "tags":["new","bank-ok"],  "emoji":"🏠", "source":"SUUMO",     "url":"https://suumo.jp/toushi/tokyo/sc_arakawa/jnc_12345678/" },
  { "id":8,  "name":"ニュー浜町ダイヤマンション 8階",     "area":"東京", "city":"東京都中央区日本橋浜町", "type":"区分マンション", "price":2780,  "rent":14.0, "yield":6.0,  "access":"東京メトロ水天宮前駅 徒歩6分","size":23.49,"year":1972,"rooms":1,   "vacancy":0,   "score":65, "tags":["bank-ok"],         "emoji":"🏢", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/tokyo/chuo-ku/2345678/" },
  { "id":9,  "name":"板橋区成増 区分マンション",          "area":"東京", "city":"東京都板橋区成増",     "type":"区分マンション", "price":1850,  "rent":12.5, "yield":8.1,  "access":"成増駅 徒歩5分",        "size":22.4,   "year":2014, "rooms":1,  "vacancy":0,   "score":85, "tags":["new"],            "emoji":"🏙", "source":"SUUMO",     "url":"https://suumo.jp/toushi/tokyo/sc_itabashi/jnc_34567890/" },
  { "id":10, "name":"横浜市金沢区 想定利回り9.89%",      "area":"横浜", "city":"神奈川県横浜市金沢区",  "type":"一棟アパート",   "price":4680,  "rent":38.5, "yield":9.9,  "access":"京急本線能見台駅 徒歩15分","size":198.52, "year":1972, "rooms":8,  "vacancy":0,   "score":76, "tags":["new"],            "emoji":"🏠", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/kanagawa/dim1002/3618370/show.html" },
  { "id":11, "name":"青木ハイツ（札幌南区）利回り10.58%","area":"札幌", "city":"北海道札幌市南区川沿",  "type":"一棟アパート",   "price":2550,  "rent":22.5, "yield":10.6, "access":"じょうてつバス藻岩小学校前 徒歩1分","size":189.54,"year":1977,"rooms":4,  "vacancy":0,   "score":78, "tags":["new","price-down"],"emoji":"🏡", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/hokkaido/hokkaido/dim1002/3618369/show.html" },
  { "id":12, "name":"立川駅 徒歩6分 一棟マンション",      "area":"東京", "city":"東京都立川市錦町2丁目", "type":"一棟マンション", "price":29795, "rent":138.9,"yield":5.6,  "access":"JR中央本線立川駅 徒歩6分","size":487.0,  "year":2003, "rooms":18, "vacancy":3.0, "score":83, "tags":["bank-ok"],         "emoji":"🏙", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/tokyo/tachikawa-shi/3456789/" },
  { "id":13, "name":"世田谷区 桜新町 テラスハウス",       "area":"東京", "city":"東京都世田谷区桜新町",  "type":"戸建て",         "price":8200,  "rent":38.0, "yield":5.5,  "access":"桜新町駅 徒歩8分",      "size":92.4,   "year":2018, "rooms":3,  "vacancy":0,   "score":81, "tags":["new","bank-ok"],  "emoji":"🏡", "source":"AtHome",    "url":"https://www.athome.co.jp/toushi/tokyo/setagaya-ku/detail/12345/" },
  { "id":14, "name":"名古屋 中区 大須 区分マンション",    "area":"名古屋","city":"名古屋市中区大須",     "type":"区分マンション", "price":1280,  "rent":9.2,  "yield":8.6,  "access":"大須観音駅 徒歩4分",    "size":20.5,   "year":2010, "rooms":1,  "vacancy":0,   "score":77, "tags":["new"],            "emoji":"🏢", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/chubu/aichi/dim1001/456789/" },
  { "id":15, "name":"福岡市早良区 一棟アパート",          "area":"福岡", "city":"福岡市早良区西新",     "type":"一棟アパート",   "price":5800,  "rent":42.5, "yield":8.8,  "access":"西新駅 徒歩10分",       "size":165.0,  "year":2005, "rooms":6,  "vacancy":0,   "score":84, "tags":["bank-ok"],         "emoji":"🏠", "source":"SUUMO",     "url":"https://suumo.jp/toushi/fukuoka/sc_sawara/jnc_56789012/" },
  { "id":16, "name":"大阪市淀川区 西中島 区分",           "area":"大阪", "city":"大阪市淀川区西中島",   "type":"区分マンション", "price":880,   "rent":7.5,  "yield":10.2, "access":"西中島南方駅 徒歩3分",   "size":18.4,   "year":1995, "rooms":1,  "vacancy":0,   "score":79, "tags":["price-down"],      "emoji":"🏙", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/osaka/yodogawa-ku/4567890/" },
  { "id":17, "name":"博多駅前一棟マンション",              "area":"福岡", "city":"福岡市博多区",           "type":"一棟マンション", "price":12000, "rent":95.0, "yield":9.5,  "access":"博多駅 徒歩8分",         "size":420.0,  "year":2005, "rooms":12, "vacancy":6.0, "score":91, "tags":["new","bank-ok"],  "emoji":"🏙", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kyushu/fukuoka/dim1003/567890/" },
  { "id":18, "name":"那覇市 首里 一棟アパート",           "area":"那覇", "city":"沖縄県那覇市首里",     "type":"一棟アパート",   "price":8500,  "rent":58.0, "yield":8.2,  "access":"首里駅 徒歩12分",       "size":240.0,  "year":2012, "rooms":8,  "vacancy":0,   "score":80, "tags":["new","bank-ok"],  "emoji":"🌴", "source":"AtHome",    "url":"https://www.athome.co.jp/toushi/okinawa/naha-shi/detail/67890/" },
  { "id":19, "name":"心斎橋駅 徒歩1分 区分マンション",   "area":"大阪", "city":"大阪市中央区",           "type":"区分マンション", "price":4200,  "rent":25.0, "yield":7.1,  "access":"心斎橋駅 徒歩1分",      "size":45.0,   "year":2016, "rooms":1,  "vacancy":2.5, "score":86, "tags":["bank-ok"],         "emoji":"🏢", "source":"SUUMO",     "url":"https://suumo.jp/toushi/osaka/sc_chuo/jnc_67890123/" },
  { "id":20, "name":"仙台市 青葉区 一棟マンション",       "area":"仙台", "city":"仙台市青葉区上杉",     "type":"一棟マンション", "price":16800, "rent":125.0,"yield":8.9,  "access":"北四番丁駅 徒歩5分",    "size":480.0,  "year":2008, "rooms":14, "vacancy":4.2, "score":88, "tags":["bank-ok"],         "emoji":"🏙", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/miyagi/aoba-ku/5678901/" },
  { "id":21, "name":"京都 下京区 区分マンション",         "area":"京都", "city":"京都市下京区",           "type":"区分マンション", "price":3200,  "rent":18.5, "yield":6.9,  "access":"京都駅 徒歩10分",       "size":30.4,   "year":2019, "rooms":1,  "vacancy":0,   "score":82, "tags":["new","bank-ok"],  "emoji":"🏯", "source":"AtHome",    "url":"https://www.athome.co.jp/toushi/kyoto/shimogyo-ku/detail/78901/" },
  { "id":22, "name":"金沢市 本多町 戸建て収益",           "area":"金沢", "city":"石川県金沢市本多町",   "type":"戸建て",         "price":1800,  "rent":15.0, "yield":10.0, "access":"バス本多町 徒歩4分",       "size":105.0,  "year":1988, "rooms":4,  "vacancy":0,   "score":74, "tags":["price-down"],      "emoji":"🏡", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/koshinetsu/ishikawa/dim1005/678901/" },
  { "id":23, "name":"横浜 中区 元町 区分",               "area":"横浜", "city":"横浜市中区元町",       "type":"区分マンション", "price":2980,  "rent":16.8, "yield":6.8,  "access":"元町・中華街駅 徒歩3分", "size":28.5,   "year":2015, "rooms":1,  "vacancy":0,   "score":83, "tags":["new"],            "emoji":"🏢", "source":"SUUMO",     "url":"https://suumo.jp/toushi/kanagawa/sc_naka/jnc_78901234/" },
  { "id":24, "name":"札幌 北区 北24条 AP",              "area":"札幌", "city":"札幌市北区北24条",     "type":"一棟アパート",   "price":4200,  "rent":36.5, "yield":10.4, "access":"北24条駅 徒歩8分",      "size":180.0,  "year":2002, "rooms":8,  "vacancy":0,   "score":79, "tags":["bank-ok"],         "emoji":"🏠", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/hokkaido/kita-ku/6789012/" },
]

class APIHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/properties':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(PROPERTIES).encode('utf-8'))
            return
        return super().do_GET()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), APIHandler) as httpd:
        print(f"太田不動産投資サーチ Server running at http://localhost:{PORT}")
        httpd.serve_forever()
