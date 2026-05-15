// ===== 物件データ管理（バックエンド同期型） =====
let PROPERTIES = [
  { "id":1,  "name":"大樋町 ジャストハウス",              "area":"金沢", "city":"石川県金沢市大樋町",   "type":"一棟アパート",   "price":3750,  "rent":28.1, "yield":9.0,  "access":"北鉄バス大樋町 徒歩3分",  "size":236.65, "year":1997, "rooms":8,  "vacancy":0,   "score":87, "tags":["new"],            "emoji":"🏠", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/koshinetsu/ishikawa/dim1002/3618394/show.html" },
  { "id":2,  "name":"一棟アパート 泉佐野市（駅徒歩4分）",  "area":"大阪", "city":"大阪府泉佐野市大宮町",  "type":"一棟アパート",   "price":12300, "rent":65.0, "yield":6.3,  "access":"南海線泉佐野駅 徒歩4分", "size":359.07, "year":2020, "rooms":9,  "vacancy":0,   "score":80, "tags":["new","bank-ok"],  "emoji":"🏠", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kansai/osaka/dim1002/3618390/show.html" },
  { "id":3,  "name":"クリスタル蓮根（RC造・2022年築）",   "area":"東京", "city":"東京都板橋区蓮根3丁目", "type":"一棟アパート",   "price":15000, "rent":59.6, "yield":4.8,  "access":"都営三田線西台駅 徒歩9分","size":187.77, "year":2022, "rooms":8,  "vacancy":0,   "score":78, "tags":["new","bank-ok"],  "emoji":"🏢", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/tokyo/dim1002/3618389/show.html" },
  { "id":4,  "name":"横須賀市 浦賀駅 想定利回り9.51%",   "area":"横須賀", "city":"神奈川県横須賀市鴨居",  "type":"一棟アパート",   "price":2280,  "rent":18.1, "yield":9.5,  "access":"京急本線浦賀駅 徒歩24分", "size":139.12, "year":1983, "rooms":4,  "vacancy":5.0, "score":71, "tags":["new","price-down"],"emoji":"🏡", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/kanagawa/dim1002/3618388/show.html" },
  { "id":5,  "name":"井上ビル（大塚駅北口 徒歩2分）",     "area":"東京", "city":"東京都豊島区北大塚2丁目","type":"一棟マンション", "price":39800, "rent":34.8, "yield":1.1,  "access":"JR山手線大塚駅 徒歩2分",  "size":272.71, "year":2001, "rooms":5,  "vacancy":0,   "score":60, "tags":["bank-ok"],         "emoji":"🏙", "source":"Kenbiya",   "url":"https://www.kenbiya.com/syuueki/tokyo/toshima-ku/1234567/" },
  { "id":6,  "name":"北久里浜駅 徒歩2分 商業ビル",       "area":"横須賀", "city":"神奈川県横須賀市根岸町", "type":"一棟マンション", "price":9480,  "rent":62.1, "yield":7.9,  "access":"京急久里浜線北久里浜駅 徒歩2分","size":213.72,"year":1989,"rooms":7,  "vacancy":0,   "score":82, "tags":["new","bank-ok"],  "emoji":"🏬", "source":"Rakumachi", "url":"https://www.rakumachi.jp/syuuekibukken/kanto/kanagawa/dim1003/3618384/show.html" },
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
];

async function fetchProperties() {
  try {
    const res = await fetch('/api/properties');
    if (res.ok) {
      PROPERTIES = await res.json();
      console.log('Backend sync successful:', PROPERTIES.length, 'properties loaded.');
    }
  } catch (err) {
    console.warn('Backend connection failed. Using fallback data.', err);
    // すでに初期値として full dataset が入っているので何もしなくてもOKですが、明示的に再設定も可能
  }
}



let favorites = JSON.parse(localStorage.getItem('prop-favs') || '[]');
let searchHistory = JSON.parse(localStorage.getItem('prop-search-history') || '[]');
let currentPage = 1;
const PAGE_SIZE = 6;
let filteredProps = [...PROPERTIES];
let isListView = false;

// ===== ユーティリティ =====
function showToast(title, msg, icon = 'ph-check-circle') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="ph ${icon}"></i><div class="toast-text"><strong>${title}</strong><span>${msg}</span></div>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('fade-out'); setTimeout(() => t.remove(), 300); }, 3000);
}

function updateFavBadge() {
  const el = document.getElementById('fav-badge');
  if (el) el.textContent = favorites.length;
}

// ===== 検索履歴の管理 =====
function saveSearchHistory(query) {
  // 条件がデフォルト（空）の場合は保存しない
  const isDefault = (!query.loc || query.loc === 'all') && (!query.yield || query.yield == 0) && (!query.price || query.price == 200 || query.price == 20000);
  if (isDefault) return;

  const locLabel = query.loc && query.loc !== 'all' ? query.loc : '全国';
  const yieldLabel = query.yield ? `${query.yield}%+` : '0%+';
  const priceLabel = query.price && query.price != 200 && query.price != 20000 ? `${(+query.price).toLocaleString()}万以下` : '上限なし';
  
  const label = `${locLabel} / ${yieldLabel} / ${priceLabel}`;
  
  // 重複排除
  searchHistory = searchHistory.filter(h => h.label !== label);
  searchHistory.unshift({ label, query });
  searchHistory = searchHistory.slice(0, 5); // 最大5件
  
  localStorage.setItem('prop-search-history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

function renderSearchHistory() {
  const container = document.getElementById('search-history-container');
  const tags = document.getElementById('search-history-tags');
  if (!container || !tags) return;

  if (searchHistory.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'flex';
  tags.innerHTML = searchHistory.map((h, i) => `
    <div class="history-chip" onclick="applyHistorySearch(${i})">
      ${h.label}
    </div>
  `).join('');
}

async function applyHistorySearch(index) {
  const h = searchHistory[index];
  if (!h) return;
  
  // UIに反映
  const locEl = document.getElementById('hero-location');
  const yieldEl = document.getElementById('hero-yield');
  const priceEl = document.getElementById('hero-price');
  
  if (locEl) locEl.value = h.query.loc || '';
  if (yieldEl) yieldEl.value = h.query.yield || '';
  if (priceEl) priceEl.value = h.query.price || '';
  
  // 検索実行演出
  document.getElementById('hero-search-btn').click();
}

function getYieldClass(y) {
  if (y >= 9) return 'yield-high';
  if (y >= 7) return 'yield-mid';
  return '';
}

function getScoreColor(s) {
  if (s >= 90) return '#34d399';
  if (s >= 80) return '#fbbf24';
  return '#94a3b8';
}

// ===== 物件追加情報（写真・URL）をlocalStorageで管理 =====
let propExtras = JSON.parse(localStorage.getItem('prop-extras') || '{}');

function savePropExtras() {
  localStorage.setItem('prop-extras', JSON.stringify(propExtras));
}

function getExtra(id) {
  return propExtras[id] || { photo: null, url: '', memo: '' };
}

function setExtra(id, key, value) {
  if (!propExtras[id]) propExtras[id] = { photo: null, url: '', memo: '' };
  propExtras[id][key] = value;
  savePropExtras();
}

// ===== 物件カード生成 =====
function renderCard(p) {
  const isFav = favorites.includes(p.id);
  const extra = getExtra(p.id);
  // データのurl（業待URL）とユーザー登録URLの両方を使用
  const activeUrl = extra.url || p.url || '';
  const badges = [];
  if (p.tags.includes('new'))        badges.push('<span class="badge badge-new">NEW</span>');
  if (p.tags.includes('price-down')) badges.push('<span class="badge badge-down">値下がり</span>');
  badges.push(`<span class="badge badge-type">${p.type}</span>`);
  // 出典元バッジのスタイル定義
  const sourceColors = {
    'Rakumachi': '#f59e0b',
    'Kenbiya': '#34d399',
    'SUUMO': '#84cc16',
    'AtHome': '#ef4444'
  };
  const sourceColor = sourceColors[p.source] || 'var(--primary)';
  if (p.source) badges.push(`<span class="badge" style="background:${sourceColor}20;border:1px solid ${sourceColor}40;color:${sourceColor};font-weight:700;"><i class="ph ph-globe"></i> ${p.source}</span>`);

  // 写真があれば表示、なければ絵文字プレースホルダー
  const imgContent = extra.photo
    ? `<img src="${extra.photo}" style="width:100%;height:100%;object-fit:cover;display:block;" alt="${p.name}">`
    : `<span style="font-size:3.5rem;">${p.emoji}</span>`;

  return `
  <div class="prop-card" data-id="${p.id}">
    <a href="${activeUrl}" target="_blank" rel="noopener" class="prop-img-link" onclick="event.stopPropagation()">
      <div class="prop-img-placeholder" style="background:linear-gradient(135deg,#0e1525,#1a2540);${extra.photo ? 'overflow:hidden;' : ''}">
        ${imgContent}
        <div class="prop-badges">${badges.join('')}</div>
        <div class="prop-score" style="color:${getScoreColor(p.score)}">★ ${p.score}</div>
      </div>
    </a>
    <div class="prop-body">
      <button class="prop-fav-btn ${isFav ? 'active' : ''}" data-id="${p.id}" onclick="toggleFav(event,${p.id})" style="top: 120px; right: 24px;">
        <i class="ph ${isFav ? 'ph-heart-fill' : 'ph-heart'}"></i>
      </button>
      <div class="prop-area"><i class="ph ph-map-pin"></i>${p.city}</div>
      <a href="${activeUrl}" target="_blank" rel="noopener" class="prop-name-link" onclick="event.stopPropagation()">
        <div class="prop-name">${p.name}</div>
      </a>
      <div class="prop-metrics">
        <div class="prop-metric">
          <div class="pm-label">表面利回り</div>
          <div class="pm-value ${getYieldClass(p.yield)}">${p.yield.toFixed(1)}%</div>
        </div>
        <div class="prop-metric">
          <div class="pm-label">価格</div>
          <div class="pm-value price">${p.price.toLocaleString()}万</div>
        </div>
        <div class="prop-metric">
          <div class="pm-label">月間家賃</div>
          <div class="pm-value">${p.rent}万円</div>
        </div>
        <div class="prop-metric">
          <div class="pm-label">築年数</div>
          <div class="pm-value">${2026 - p.year}年</div>
        </div>
      </div>
      <div class="prop-footer">
        <div class="prop-access"><i class="ph ph-train"></i> ${p.access}</div>
        <div style="display:flex;gap:6px;">
          ${activeUrl ? `<a href="${activeUrl}" target="_blank" rel="noopener" class="prop-detail-btn" style="display:flex;align-items:center;gap:4px;background:var(--primary);color:#000;" onclick="event.stopPropagation()"><i class="ph ph-arrow-square-out"></i>サイトを開く</a>` : ''}
          <button class="prop-detail-btn" onclick="openModal(${p.id})">詳細分析</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderGrid() {
  const grid = document.getElementById('property-grid');
  grid.className = 'property-grid' + (isListView ? ' list-view' : '');
  const start = (currentPage - 1) * PAGE_SIZE;
  const page = filteredProps.slice(start, start + PAGE_SIZE);
  grid.innerHTML = page.length ? page.map(renderCard).join('') : '<p style="color:var(--text2);text-align:center;padding:40px;grid-column:1/-1;">条件に合う物件が見つかりませんでした。</p>';
  document.getElementById('result-count').textContent = filteredProps.length;
  const totalPages = Math.max(1, Math.ceil(filteredProps.length / PAGE_SIZE));
  document.getElementById('page-info').textContent = `${currentPage} / ${totalPages}`;
}

// ===== フィルター（AI解析シミュレーション付き） =====
async function applyFilter() {
  // 読み込みオーバーレイを表示
  const overlay = document.getElementById('search-loader-overlay');
  if (overlay) {
    overlay.classList.add('active');
    const statusText = document.getElementById('loader-status');
    const statuses = [
      '主要サイトへのアクセスを確立中...',
      '楽待(Rakumachi)のデータベースをスキャン中...',
      '健美家(Kenbiya)の最新物件を抽出中...',
      'SUUMO・アットホームのデータを統合中...',
      '投資スコアを計算し、フィルタリングを適用中...'
    ];
    
    for (const s of statuses) {
      if (statusText) statusText.textContent = s;
      await new Promise(r => setTimeout(r, 600));
    }
  }

  const areaActive = document.querySelector('#area-tags .tag-btn.active')?.dataset.value || 'all';
  const typeActive = document.querySelector('#type-tags .tag-btn.active')?.dataset.value || 'all';
  const priceMin = +document.getElementById('price-min').value;
  const priceMax = +document.getElementById('price-max').value;
  const yieldMin = +document.getElementById('yield-min').value;
  const yieldMax = +document.getElementById('yield-max').value;
  const chkNew    = document.getElementById('chk-new-listing').checked;
  const chkDown   = document.getElementById('chk-price-down').checked;
  const chkVacant = document.getElementById('chk-vacant').checked;
  const chkBank   = document.getElementById('chk-bank-ok').checked;
  const keyword = (document.getElementById('filter-keyword')?.value || '').trim();

  filteredProps = PROPERTIES.filter(p => {
    if (areaActive !== 'all' && p.area !== areaActive) return false;
    if (typeActive !== 'all' && p.type !== typeActive) return false;
    if (p.price < priceMin || p.price > priceMax) return false;
    if (p.yield < yieldMin || p.yield > yieldMax) return false;
    if (chkNew    && !p.tags.includes('new'))        return false;
    if (chkDown   && !p.tags.includes('price-down')) return false;
    if (chkVacant && !p.tags.includes('vacant'))     return false;
    if (chkBank   && !p.tags.includes('bank-ok'))    return false;
    if (keyword && !`${p.name}${p.area}${p.city}${p.type}`.includes(keyword)) return false;
    
    // 出典元リンクがない物件は除外（ユーザー登録URLも考慮）
    const extra = getExtra(p.id);
    if (!p.url && !extra.url) return false;

    return true;
  });

  const sort = document.getElementById('sort-select').value;
  if      (sort === 'yield-desc') filteredProps.sort((a,b) => b.yield - a.yield);
  else if (sort === 'price-asc')  filteredProps.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') filteredProps.sort((a,b) => b.price - a.price);
  else if (sort === 'score-desc') filteredProps.sort((a,b) => b.score - a.score);
  else if (sort === 'new')        filteredProps.sort((a,b) => b.id - a.id);

  currentPage = 1;
  renderGrid();
  
  if (overlay) overlay.classList.remove('active');

  // 検索完了通知
  showToast('解析完了', `サイト横断検索の結果、${filteredProps.length}件の物件がヒットしました。`, filteredProps.length > 0 ? 'ph-check-circle' : 'ph-warning');

  // 検索履歴を保存（UI上の現在の値をキャプチャ）
  const historyQuery = {
    loc: document.getElementById('hero-location')?.value || document.querySelector('#area-tags .tag-btn.active')?.dataset.value || '',
    yield: document.getElementById('hero-yield')?.value || document.getElementById('yield-min')?.value || '',
    price: document.getElementById('hero-price')?.value || document.getElementById('price-max')?.value || ''
  };
  if (historyQuery.loc === 'all') historyQuery.loc = '';
  saveSearchHistory(historyQuery);
}

// ===== お気に入り =====
function toggleFav(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
    btn.classList.remove('active');
    btn.querySelector('i').className = 'ph ph-heart';
    showToast('削除しました', 'お気に入りから外しました。', 'ph-heart');
  } else {
    favorites.push(id);
    btn.classList.add('active');
    btn.querySelector('i').className = 'ph ph-heart-fill';
    showToast('追加しました', 'お気に入りに登録しました！', 'ph-heart-fill');
  }
  localStorage.setItem('prop-favs', JSON.stringify(favorites));
  updateFavBadge();
}

// ===== モーダル =====
function openModal(id) {
  const p = PROPERTIES.find(x => x.id === id);
  if (!p) return;
  const grossYield = p.yield.toFixed(1);
  const netYield = (p.yield * 0.82).toFixed(1);
  const extra = getExtra(p.id);

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-prop-header">
      <div style="font-size:2rem;margin-bottom:6px;">${p.emoji}</div>
      <div class="modal-prop-name">${p.name}</div>
      <div class="modal-prop-address"><i class="ph ph-map-pin"></i>${p.city} / ${p.access}</div>
    </div>

    <!-- 写真エリア -->
    <div class="modal-photo-area" id="modal-photo-area">
      ${extra.photo
        ? `<img src="${extra.photo}" id="modal-photo-preview" class="modal-photo-img" alt="物件写真">`
        : `<div class="modal-photo-placeholder" id="modal-photo-placeholder"><i class="ph ph-camera" style="font-size:2.5rem;color:var(--text3);"></i><p style="color:var(--text3);font-size:.85rem;margin-top:8px;">写真を追加</p></div>`
      }
      <div class="modal-photo-btns">
        <label class="btn-photo-upload" title="ファイルから選択">
          <i class="ph ph-image"></i> 画像を選択
          <input type="file" id="photo-file-input" accept="image/*" style="display:none;" onchange="handlePhotoUpload(event,${p.id})">
        </label>
        <label class="btn-photo-upload" title="カメラで撮影">
          <i class="ph ph-camera"></i> カメラで撮影
          <input type="file" id="photo-camera-input" accept="image/*" capture="environment" style="display:none;" onchange="handlePhotoUpload(event,${p.id})">
        </label>
        ${extra.photo ? `<button class="btn-photo-delete" onclick="deletePhoto(${p.id})"><i class="ph ph-trash"></i> 削除</button>` : ''}
      </div>
    </div>

    <div class="modal-metrics-grid">
      <div class="modal-metric"><div class="mm-label">価格</div><div class="mm-value blue">${p.price.toLocaleString()}万円</div></div>
      <div class="modal-metric"><div class="mm-label">表面利回り</div><div class="mm-value green">${grossYield}%</div></div>
      <div class="modal-metric"><div class="mm-label">実質利回り</div><div class="mm-value green">${netYield}%</div></div>
      <div class="modal-metric"><div class="mm-label">月間家賃</div><div class="mm-value">${p.rent}万円</div></div>
      <div class="modal-metric"><div class="mm-label">専有面積</div><div class="mm-value">${p.size}㎡</div></div>
      <div class="modal-metric"><div class="mm-label">築年数</div><div class="mm-value">${2026 - p.year}年（${p.year}年築）</div></div>
    </div>

    <!-- 外部サイトURL -->
    <div class="modal-url-section">
      <div class="modal-url-label"><i class="ph ph-link" style="color:var(--primary);"></i> 物件サイトのURL（SUUMO・アットホームなど）</div>
      <div class="modal-url-row">
        <input type="url" id="prop-url-input" class="modal-url-input"
          placeholder="https://suumo.jp/... など物件ページのURLを貼り付け"
          value="${extra.url || ''}">
        <button class="btn-url-save" onclick="saveUrl(${p.id})"><i class="ph ph-floppy-disk"></i> 保存</button>
      </div>
      ${extra.url ? `<a href="${extra.url}" target="_blank" rel="noopener" class="modal-url-link"><i class="ph ph-arrow-square-out"></i> 登録済みサイトを開く</a>` : ''}
    </div>

    <!-- メモ欄 -->
    <div class="modal-memo-section">
      <div class="modal-url-label"><i class="ph ph-note-pencil" style="color:var(--accent);"></i> メモ</div>
      <textarea id="prop-memo-input" class="modal-memo-input" placeholder="気になる点・現地確認事項などをメモ...">${extra.memo || ''}</textarea>
      <button class="btn-url-save" style="margin-top:8px;" onclick="saveMemo(${p.id})"><i class="ph ph-floppy-disk"></i> メモを保存</button>
    </div>

    <div class="modal-desc">
      ${p.city}に位置する${p.type}です。${p.access}の好立地で、表面利回り${grossYield}%・実質利回り${netYield}%を実現。
      空室率${p.vacancy}%と安定した収益が見込めます。投資スコア：<strong style="color:${getScoreColor(p.score)}">${p.score}点</strong>。
    </div>
    <div class="modal-actions">
      <button class="btn-modal-primary" onclick="loadToSimulator(${p.id})"><i class="ph ph-calculator"></i> シミュレーターで試算</button>
      <button class="btn-modal-secondary" onclick="toggleFav({stopPropagation:()=>{},currentTarget:document.createElement('button')},${p.id})"><i class="ph ph-heart"></i> お気に入り</button>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ===== 写真アップロード処理 =====
function handlePhotoUpload(event, id) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    showToast('エラー', 'ファイルサイズは5MB以下にしてください。', 'ph-warning');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    setExtra(id, 'photo', e.target.result);
    // プレビュー更新
    const area = document.getElementById('modal-photo-area');
    if (area) {
      const existing = area.querySelector('img, .modal-photo-placeholder');
      if (existing) existing.remove();
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'modal-photo-img';
      img.alt = '物件写真';
      area.prepend(img);
    }
    renderGrid();
    showToast('写真を保存しました', 'カードに写真が表示されます。', 'ph-image');
  };
  reader.readAsDataURL(file);
}

function deletePhoto(id) {
  if (!confirm('写真を削除しますか？')) return;
  setExtra(id, 'photo', null);
  openModal(id); // モーダルを再描画
  renderGrid();
  showToast('写真を削除しました', '', 'ph-trash');
}

// ===== URL保存 =====
function saveUrl(id) {
  const url = document.getElementById('prop-url-input')?.value.trim();
  setExtra(id, 'url', url);
  renderGrid();
  showToast('URLを保存しました', url ? '物件カードにリンクボタンが追加されます。' : 'URLを削除しました。', 'ph-link');
  // リンク表示を更新
  const linkEl = document.querySelector('.modal-url-link');
  if (url) {
    if (!linkEl) {
      const row = document.querySelector('.modal-url-row');
      if (row) {
        const a = document.createElement('a');
        a.href = url; a.target = '_blank'; a.rel = 'noopener';
        a.className = 'modal-url-link';
        a.innerHTML = '<i class="ph ph-arrow-square-out"></i> 登録済みサイトを開く';
        row.insertAdjacentElement('afterend', a);
      }
    } else { linkEl.href = url; }
  } else if (linkEl) { linkEl.remove(); }
}

// ===== メモ保存 =====
function saveMemo(id) {
  const memo = document.getElementById('prop-memo-input')?.value || '';
  setExtra(id, 'memo', memo);
  showToast('メモを保存しました', '', 'ph-note-pencil');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function loadToSimulator(id) {
  const p = PROPERTIES.find(x => x.id === id);
  if (!p) return;
  document.getElementById('sim-price').value = p.price;
  document.getElementById('sim-rent').value = p.rent;
  document.getElementById('sim-down').value = Math.round(p.price * 0.2);
  closeModal();
  document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' });
  setTimeout(calcSimulator, 400);
  showToast('シミュレーターに読込', `${p.name}のデータを反映しました。`);
}

// ===== シミュレーター =====
function calcSimulator() {
  const price = +document.getElementById('sim-price').value;
  const rent = +document.getElementById('sim-rent').value;
  const down = +document.getElementById('sim-down').value;
  const rate = +document.getElementById('sim-rate').value / 100 / 12;
  const n = +document.getElementById('sim-period').value * 12;
  const vacancy = +document.getElementById('sim-vacancy').value / 100;
  const cost = +document.getElementById('sim-cost').value;

  const loanAmount = price - down;
  const monthlyLoan = rate > 0 ? loanAmount * rate * Math.pow(1+rate,n) / (Math.pow(1+rate,n)-1) : loanAmount / n;
  const effectiveRent = rent * (1 - vacancy);
  const netRent = effectiveRent - cost;
  const cf = netRent - monthlyLoan;
  const grossYield = (rent * 12 / price * 100).toFixed(1);
  const netYield = (netRent * 12 / price * 100).toFixed(1);
  const payback = cf > 0 ? (down / (cf * 12)).toFixed(1) : '∞';
  const annualCF = (cf * 12).toFixed(1);

  document.getElementById('res-gross-yield').innerHTML = `${grossYield}<span class="unit">%</span>`;
  document.getElementById('res-net-yield').innerHTML = `${netYield}<span class="unit">%</span>`;
  document.getElementById('res-loan-payment').innerHTML = `${monthlyLoan.toFixed(1)}<span class="unit">万円</span>`;
  document.getElementById('res-payback').innerHTML = `${payback}<span class="unit">年</span>`;

  const cfEl = document.getElementById('res-cashflow');
  cfEl.innerHTML = `${cf >= 0 ? '+' : ''}${cf.toFixed(1)}<span class="unit">万円</span>`;
  cfEl.className = 'sim-metric-value ' + (cf >= 0 ? 'positive' : 'negative');

  const aCFEl = document.getElementById('res-annual-cf');
  aCFEl.innerHTML = `${cf >= 0 ? '+' : ''}${annualCF}<span class="unit">万円</span>`;
  aCFEl.className = 'sim-metric-value ' + (cf >= 0 ? 'positive' : 'negative');

  // バーチャート
  const bars = document.getElementById('cf-bars');
  const items = [
    { label:'家賃収入', value: effectiveRent, color:'#34d399' },
    { label:'諸経費', value: -cost, color:'#f87171' },
    { label:'ローン', value: -monthlyLoan, color:'#f59e0b' },
    { label:'CF', value: cf, color: cf >= 0 ? '#38bdf8' : '#f87171' },
  ];
  const max = Math.max(...items.map(i => Math.abs(i.value)));
  bars.innerHTML = items.map(item => {
    const h = Math.round(Math.abs(item.value) / max * 70) + 10;
    return `<div class="cf-bar" style="height:${h}px;background:${item.color}20;border:1px solid ${item.color};color:${item.color}" title="${item.label}: ${item.value.toFixed(1)}万">${item.label}</div>`;
  }).join('');

  // 判定
  const verdict = document.getElementById('invest-verdict');
  if (cf >= 3) {
    verdict.className = 'invest-verdict';
    verdict.innerHTML = `<div class="verdict-icon positive"><i class="ph ph-check-circle-fill"></i></div><div class="verdict-text"><strong>投資推奨</strong> 月${cf.toFixed(1)}万円の安定キャッシュフローが見込めます。</div>`;
  } else if (cf >= 0) {
    verdict.className = 'invest-verdict';
    verdict.innerHTML = `<div class="verdict-icon positive"><i class="ph ph-check-circle-fill"></i></div><div class="verdict-text"><strong>条件付き推奨</strong> キャッシュフローはプラスですが、余裕は少なめです。</div>`;
  } else {
    verdict.className = 'invest-verdict bad';
    verdict.innerHTML = `<div class="verdict-icon negative"><i class="ph ph-x-circle-fill"></i></div><div class="verdict-text"><strong>要再検討</strong> 現在の条件ではキャッシュフローがマイナスです。頭金・物件価格を見直しましょう。</div>`;
  }
}

// ===== シミュレーターのイベント登録（自動計算用） =====
function initSimulator() {
  const inputs = ['sim-price', 'sim-rent', 'sim-down', 'sim-rate', 'sim-period', 'sim-vacancy', 'sim-cost'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calcSimulator);
    }
  });
  
  const calcBtn = document.getElementById('sim-calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      calcSimulator();
      showToast('シミュレーション完了', '最新の入力値で再計算しました。');
    });
  }
}

// ===== タグボタン =====
function initTagGroups() {
  document.querySelectorAll('.tag-group').forEach(group => {
    group.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ===== スライダー =====
function initSliders() {
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const yieldMin = document.getElementById('yield-min');
  const yieldMax = document.getElementById('yield-max');

  function updatePriceLabels() {
    document.getElementById('price-min-val').textContent = (+priceMin.value).toLocaleString();
    document.getElementById('price-max-val').textContent = (+priceMax.value).toLocaleString();
  }
  function updateYieldLabels() {
    document.getElementById('yield-min-val').textContent = yieldMin.value;
    document.getElementById('yield-max-val').textContent = yieldMax.value;
  }
  priceMin.addEventListener('input', () => { if (+priceMin.value > +priceMax.value) priceMax.value = priceMin.value; updatePriceLabels(); });
  priceMax.addEventListener('input', () => { if (+priceMax.value < +priceMin.value) priceMin.value = priceMax.value; updatePriceLabels(); });
  yieldMin.addEventListener('input', () => { if (+yieldMin.value > +yieldMax.value) yieldMax.value = yieldMin.value; updateYieldLabels(); });
  yieldMax.addEventListener('input', () => { if (+yieldMax.value < +yieldMin.value) yieldMin.value = yieldMax.value; updateYieldLabels(); });
}

// ===== 市場動向の初期化 =====
function initMarketTrends() {
  const container = document.getElementById('market-cards-container');
  if (!container) return;

  // カードクリックでエリア検索実行
  container.querySelectorAll('.market-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const area = card.dataset.area;
      // ヒーロー検索に反映
      const locEl = document.getElementById('hero-location');
      if (locEl) locEl.value = area;
      document.getElementById('hero-search-btn').click();
      showToast('エリア検索連動', `${area}の物件を抽出しています...`, 'ph-magnifying-glass');
    });
  });

  // 市場解析ボタン
  const analyzeBtn = document.getElementById('btn-market-analyze');
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', async () => {
      analyzeBtn.disabled = true;
      analyzeBtn.innerHTML = '<i class="ph ph-spinner-gap spin"></i> 解析中...';
      
      // AI解析の演出
      showToast('AI市場解析', 'ビッグデータをスキャンしています...', 'ph-cpu');
      await new Promise(r => setTimeout(r, 1500));
      
      analyzeBtn.disabled = false;
      analyzeBtn.innerHTML = '<i class="ph ph-sparkle"></i> 最新の市場動向をAI解析';
      showToast('解析完了', '最新の投資指標データを更新しました。', 'ph-chart-line-up');
    });
  }
}

// ===== ナビバースクロール =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow = window.scrollY > 20 ? '0 2px 30px rgba(0,0,0,.5)' : 'none';
});

// ===== ページネーション =====
document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) { currentPage--; renderGrid(); window.scrollTo({ top: document.getElementById('search').offsetTop - 80, behavior: 'smooth' }); }
});
document.getElementById('next-page').addEventListener('click', () => {
  const total = Math.ceil(filteredProps.length / PAGE_SIZE);
  if (currentPage < total) { currentPage++; renderGrid(); window.scrollTo({ top: document.getElementById('search').offsetTop - 80, behavior: 'smooth' }); }
});

// ===== ビュー切替 =====
document.getElementById('view-grid').addEventListener('click', () => {
  isListView = false;
  document.getElementById('view-grid').classList.add('active');
  document.getElementById('view-list').classList.remove('active');
  renderGrid();
});
document.getElementById('view-list').addEventListener('click', () => {
  isListView = true;
  document.getElementById('view-list').classList.add('active');
  document.getElementById('view-grid').classList.remove('active');
  renderGrid();
});

// ===== ヒーロー検索同期 =====
document.getElementById('hero-search-btn').addEventListener('click', () => {
  const loc  = document.getElementById('hero-location').value.trim();
  const minY = document.getElementById('hero-yield').value;
  const maxP = document.getElementById('hero-price').value;

  // エリアの同期
  if (loc) {
    const areaBtn = document.querySelector(`#area-tags [data-value="${loc}"]`);
    if (areaBtn) {
      document.querySelectorAll('#area-tags .tag-btn').forEach(b => b.classList.remove('active'));
      areaBtn.classList.add('active');
    } else {
      const kwEl = document.getElementById('filter-keyword');
      if (kwEl) kwEl.value = loc;
    }
  }

  // 利回りの同期
  if (minY) {
    const yMinEl = document.getElementById('yield-min');
    const yMinValEl = document.getElementById('yield-min-val');
    if (yMinEl) yMinEl.value = minY;
    if (yMinValEl) yMinValEl.textContent = minY;
  }

  // 価格の同期 (ヒーローの値は万円、サイドバーは0-20000万円)
  if (maxP) {
    const pMaxEl = document.getElementById('price-max');
    const pMaxValEl = document.getElementById('price-max-val');
    if (pMaxEl) pMaxEl.value = maxP;
    if (pMaxValEl) pMaxValEl.textContent = (+maxP).toLocaleString();
  }

  applyFilter();
  
  // 検索結果位置へスクロール
  const searchEl = document.getElementById('search');
  if (searchEl) {
    window.scrollTo({
      top: searchEl.offsetTop - 80,
      behavior: 'smooth'
    });
  }
});

document.getElementById('btn-start-search').addEventListener('click', () => {
  document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
});

// ===== イベント登録 =====
document.getElementById('btn-apply-filter').addEventListener('click', applyFilter);
document.getElementById('btn-reset-filter').addEventListener('click', () => {
  document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tag-btn[data-value="all"]').forEach(b => b.classList.add('active'));
  document.getElementById('price-min').value = 0;
  document.getElementById('price-max').value = 20000;
  document.getElementById('yield-min').value = 0;
  document.getElementById('yield-max').value = 30;
  document.querySelectorAll('.checkbox-item input').forEach(c => c.checked = false);
  const kwEl = document.getElementById('filter-keyword');
  if (kwEl) kwEl.value = '';
  document.getElementById('price-min-val').textContent = '0';
  document.getElementById('price-max-val').textContent = '20,000';
  document.getElementById('yield-min-val').textContent = '0';
  document.getElementById('yield-max-val').textContent = '30';
  document.getElementById('hero-location').value = '';
  filteredProps = [...PROPERTIES];
  currentPage = 1;
  renderGrid();
  showToast('リセット完了', 'すべての条件をリセットしました。');
});
document.getElementById('sort-select').addEventListener('change', applyFilter);
// シミュレーターの初期化を async 内で行うため、ここは削除または移動
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

// ===== 初期化 =====
(async () => {
  initTagGroups();
  initSliders();
  initSimulator();
  initMarketTrends(); // 市場動向の連動機能を初期化
  updateFavBadge();
  renderSearchHistory();
  
  // 起動時にサーバーから物件データを同期
  await fetchProperties();
  
  applyFilter(); // 初回表示
  calcSimulator(); // 初回計算実行
  
  // ナビゲーションスクロール演出
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  });
})();

// カードのスポットライト効果（マウス追従）
const gridEl = document.getElementById('property-grid');
if (gridEl) {
  gridEl.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.prop-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
}


