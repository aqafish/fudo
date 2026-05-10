// ===== モックデータ =====
const PROPERTIES = [
  { id:1,  name:'グランドール錦糸町 302号室',   area:'東京',  city:'墨田区錦糸町',    type:'区分マンション', price:2480,  rent:14.5, yield:7.0,  access:'錦糸町駅 徒歩5分',   size:28.4,  year:2008, rooms:1,  vacancy:2.1, score:88, tags:['new','bank-ok'],         emoji:'🏢' },
  { id:2,  name:'アーバンヴィラ天神南',           area:'福岡',  city:'福岡市中央区',    type:'区分マンション', price:980,   rent:8.5,  yield:10.4, access:'天神南駅 徒歩3分',   size:22.0,  year:2015, rooms:1,  vacancy:1.8, score:94, tags:['new'],                   emoji:'🏙' },
  { id:3,  name:'南森町一棟アパート',             area:'大阪',  city:'大阪市北区',      type:'一棟アパート',   price:5800,  rent:42.0, yield:8.7,  access:'南森町駅 徒歩7分',   size:180.0, year:2001, rooms:6,  vacancy:5.2, score:82, tags:['price-down'],            emoji:'🏠' },
  { id:4,  name:'栄ウィング 1004号室',            area:'名古屋',city:'名古屋市中区栄',  type:'区分マンション', price:1580,  rent:10.8, yield:8.2,  access:'栄駅 徒歩2分',       size:25.6,  year:2012, rooms:1,  vacancy:3.5, score:80, tags:['bank-ok'],               emoji:'🏬' },
  { id:5,  name:'北24条戸建て収益物件',           area:'札幌',  city:'札幌市北区',      type:'戸建て',         price:680,   rent:7.2,  yield:12.7, access:'北24条駅 徒歩10分', size:95.0,  year:1998, rooms:4,  vacancy:0,   score:78, tags:['price-down','vacant'],   emoji:'🏡' },
  { id:6,  name:'横浜関内レジデンス 508',         area:'横浜',  city:'横浜市中区',      type:'区分マンション', price:3200,  rent:17.0, yield:6.4,  access:'関内駅 徒歩4分',     size:35.2,  year:2019, rooms:1,  vacancy:4.1, score:75, tags:['bank-ok'],               emoji:'🏢' },
  { id:7,  name:'博多駅前一棟マンション',         area:'福岡',  city:'福岡市博多区',    type:'一棟マンション', price:12000, rent:95.0, yield:9.5,  access:'博多駅 徒歩8分',     size:420.0, year:2005, rooms:12, vacancy:6.0, score:91, tags:['new','bank-ok'],         emoji:'🏙' },
  { id:8,  name:'京都西陣町家収益物件',           area:'京都',  city:'京都市上京区',    type:'戸建て',         price:2800,  rent:19.5, yield:8.4,  access:'今出川駅 徒歩12分', size:120.0, year:1975, rooms:5,  vacancy:0,   score:70, tags:['vacant'],                emoji:'🏯' },
  { id:9,  name:'大阪心斎橋区分',                 area:'大阪',  city:'大阪市中央区',    type:'区分マンション', price:4200,  rent:25.0, yield:7.1,  access:'心斎橋駅 徒歩1分',   size:45.0,  year:2016, rooms:1,  vacancy:2.5, score:86, tags:['bank-ok'],               emoji:'🏢' },
  { id:10, name:'仙台長町南アパート',             area:'仙台',  city:'仙台市太白区',    type:'一棟アパート',   price:3400,  rent:28.0, yield:9.9,  access:'長町南駅 徒歩6分',   size:210.0, year:2003, rooms:8,  vacancy:7.5, score:76, tags:['price-down'],            emoji:'🏠' },
  { id:11, name:'池袋西口スタジオ 201',           area:'東京',  city:'豊島区池袋',      type:'区分マンション', price:3600,  rent:19.0, yield:6.3,  access:'池袋駅 徒歩6分',     size:20.5,  year:2020, rooms:1,  vacancy:1.0, score:83, tags:['new','bank-ok'],         emoji:'🏢' },
  { id:12, name:'那覇リゾート投資物件',           area:'那覇',  city:'那覇市松山',      type:'区分マンション', price:1850,  rent:15.0, yield:9.7,  access:'旭橋駅 徒歩8分',     size:30.0,  year:2010, rooms:1,  vacancy:8.0, score:73, tags:[],                        emoji:'🌴' },
  { id:13, name:'新宿三丁目ワンルーム 805',       area:'東京',  city:'新宿区三丁目',    type:'区分マンション', price:4500,  rent:22.0, yield:5.9,  access:'新宿三丁目駅 徒歩2分',size:18.8, year:2021, rooms:1,  vacancy:1.2, score:79, tags:['new','bank-ok'],         emoji:'🏢' },
  { id:14, name:'梅田北一棟アパート',             area:'大阪',  city:'大阪市北区梅田',  type:'一棟アパート',   price:7200,  rent:56.0, yield:9.3,  access:'梅田駅 徒歩9分',     size:260.0, year:1999, rooms:9,  vacancy:4.8, score:84, tags:['bank-ok'],               emoji:'🏠' },
  { id:15, name:'金沢兼六園そば戸建て',           area:'金沢',  city:'金沢市本多町',    type:'戸建て',         price:1200,  rent:9.8,  yield:9.8,  access:'兼六園口駅 徒歩15分',size:88.0,  year:1985, rooms:4,  vacancy:0,   score:66, tags:['price-down','vacant'],   emoji:'🏡' },
  { id:16, name:'広島本通り区分マンション',       area:'広島',  city:'広島市中区本通',  type:'区分マンション', price:1350,  rent:10.0, yield:8.9,  access:'本通駅 徒歩3分',     size:24.0,  year:2009, rooms:1,  vacancy:3.0, score:77, tags:[],                        emoji:'🏢' },
  { id:17, name:'川崎駅前一棟マンション',         area:'横浜',  city:'川崎市川崎区',    type:'一棟マンション', price:18000, rent:130.0,yield:8.7,  access:'川崎駅 徒歩5分',     size:580.0, year:2002, rooms:18, vacancy:5.5, score:89, tags:['bank-ok'],               emoji:'🏙' },
  { id:18, name:'天王寺ガーデン 403',             area:'大阪',  city:'大阪市天王寺区',  type:'区分マンション', price:2950,  rent:18.5, yield:7.5,  access:'天王寺駅 徒歩4分',   size:32.0,  year:2014, rooms:1,  vacancy:2.8, score:81, tags:['bank-ok'],               emoji:'🏬' },
  { id:19, name:'名東区戸建て賃貸',               area:'名古屋',city:'名古屋市名東区',  type:'戸建て',         price:2100,  rent:15.5, yield:8.9,  access:'藤が丘駅 徒歩12分',  size:105.0, year:1993, rooms:4,  vacancy:0,   score:72, tags:['price-down'],            emoji:'🏡' },
  { id:20, name:'すすきのビジネスホテル型物件',   area:'札幌',  city:'札幌市中央区',    type:'区分マンション', price:850,   rent:7.8,  yield:11.0, access:'すすきの駅 徒歩6分', size:19.5,  year:2006, rooms:1,  vacancy:6.0, score:71, tags:['price-down'],            emoji:'🏙' },
  { id:21, name:'千葉稲毛一棟アパート',           area:'千葉',  city:'千葉市稲毛区',    type:'一棟アパート',   price:4800,  rent:40.0, yield:10.0, access:'稲毛駅 徒歩8分',     size:220.0, year:2000, rooms:10, vacancy:8.0, score:74, tags:['price-down'],            emoji:'🏠' },
  { id:22, name:'福岡東区一棟アパート',           area:'福岡',  city:'福岡市東区',      type:'一棟アパート',   price:3200,  rent:26.0, yield:9.8,  access:'香椎駅 徒歩10分',    size:190.0, year:2004, rooms:8,  vacancy:5.0, score:80, tags:['bank-ok'],               emoji:'🏠' },
  { id:23, name:'渋谷区松濤ヴィンテージ',         area:'東京',  city:'渋谷区松濤',      type:'区分マンション', price:8500,  rent:42.0, yield:5.9,  access:'渋谷駅 徒歩12分',    size:65.0,  year:1988, rooms:2,  vacancy:0,   score:68, tags:['vacant'],                emoji:'🏢' },
  { id:24, name:'神戸三宮駅前収益マンション',     area:'神戸',  city:'神戸市中央区',    type:'一棟マンション', price:9800,  rent:78.0, yield:9.6,  access:'三宮駅 徒歩3分',     size:350.0, year:2007, rooms:14, vacancy:4.2, score:87, tags:['new','bank-ok'],         emoji:'🏙' },
];

let favorites = JSON.parse(localStorage.getItem('prop-favs') || '[]');
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
  document.getElementById('fav-badge').textContent = favorites.length;
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
  const badges = [];
  if (p.tags.includes('new')) badges.push('<span class="badge badge-new">NEW</span>');
  if (p.tags.includes('price-down')) badges.push('<span class="badge badge-down">値下がり</span>');
  badges.push(`<span class="badge badge-type">${p.type}</span>`);
  if (extra.url) badges.push('<span class="badge" style="background:rgba(56,189,248,.2);border:1px solid rgba(56,189,248,.4);color:var(--primary);"><i class="ph ph-link"></i> リンクあり</span>');

  // 写真があれば表示、なければ絵文字プレースホルダー
  const imgContent = extra.photo
    ? `<img src="${extra.photo}" style="width:100%;height:100%;object-fit:cover;display:block;" alt="${p.name}">`
    : `<span style="font-size:3.5rem;">${p.emoji}</span>`;

  return `
  <div class="prop-card" data-id="${p.id}">
    <div class="prop-img-placeholder" style="background:linear-gradient(135deg,#0e1525,#1a2540);${extra.photo ? 'overflow:hidden;' : ''}">
      ${imgContent}
      <div class="prop-badges">${badges.join('')}</div>
      <button class="prop-fav-btn ${isFav ? 'active' : ''}" data-id="${p.id}" onclick="toggleFav(event,${p.id})">
        <i class="ph ${isFav ? 'ph-heart-fill' : 'ph-heart'}"></i>
      </button>
      <div class="prop-score" style="color:${getScoreColor(p.score)}">★ ${p.score}</div>
    </div>
    <div class="prop-body">
      <div class="prop-area"><i class="ph ph-map-pin"></i>${p.city}</div>
      <div class="prop-name">${p.name}</div>
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
          ${extra.url ? `<a href="${extra.url}" target="_blank" rel="noopener" class="prop-detail-btn" style="display:flex;align-items:center;gap:4px;" onclick="event.stopPropagation()"><i class="ph ph-arrow-square-out"></i>サイトへ</a>` : ''}
          <button class="prop-detail-btn" onclick="openModal(${p.id})">詳細・編集</button>
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

// ===== フィルター =====
function applyFilter() {
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
  // キーワード検索（物件名・エリア・都市を対象）
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
  // 結果件数をアニメーション
  const cnt = document.getElementById('result-count');
  cnt.style.transition = 'color .3s';
  cnt.style.color = filteredProps.length === 0 ? 'var(--red)' : 'var(--primary)';
  showToast('検索完了', `${filteredProps.length}件の物件が見つかりました。`, filteredProps.length > 0 ? 'ph-check-circle' : 'ph-warning');
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

// ===== ヒーロー検索 =====
document.getElementById('hero-search-btn').addEventListener('click', () => {
  const loc  = document.getElementById('hero-location').value.trim();
  const minY = document.getElementById('hero-yield').value;
  const maxP = document.getElementById('hero-price').value;

  if (loc) {
    // 完全一致のタグを探す
    const areaBtn = document.querySelector(`#area-tags [data-value="${loc}"]`);
    if (areaBtn) {
      document.querySelectorAll('#area-tags .tag-btn').forEach(b => b.classList.remove('active'));
      areaBtn.classList.add('active');
    } else {
      // タグにない場合はキーワード検索欄に入力
      const kwEl = document.getElementById('filter-keyword');
      if (kwEl) kwEl.value = loc;
      document.querySelectorAll('#area-tags .tag-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('#area-tags [data-value="all"]').classList.add('active');
    }
  }
  if (minY) { document.getElementById('yield-min').value = minY; document.getElementById('yield-min-val').textContent = minY; }
  if (maxP) { document.getElementById('price-max').value = maxP * 100; document.getElementById('price-max-val').textContent = (+maxP * 100).toLocaleString(); }

  applyFilter();
  document.getElementById('search').scrollIntoView({ behavior: 'smooth' });
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
document.getElementById('sim-calc-btn').addEventListener('click', calcSimulator);
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

// ===== 初期化 =====
initTagGroups();
initSliders();
renderGrid();
calcSimulator();
updateFavBadge();
