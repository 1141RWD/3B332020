
// ===== 商品資料定義 (已加入所有新照片，邏輯與 ID 保持原樣) =====
// ===== 商品資料定義 (已加入所有新照片，邏輯與 ID 保持原樣) =====
const allProducts = [
  // --- 男裝系列 ---
  { name: "男裝 兩穿寬褲(褲管可拆)", price: 490, img: "男裝 兩穿寬褲(褲管可拆).jpg", gender: "male", type: "pants" },
  { name: "男裝 牛仔超寬版工作褲", price: 890, img: "男裝 牛仔超寬版工作褲.jpg", gender: "male", type: "pants" },
  { name: "男裝 休閒上衣(經典內毛圈)", price: 590, img: "男裝 休閒上衣(經典內毛圈).jpg", gender: "male", type: "tops" },
  { name: "男裝 Heavy weight重磅內刷毛休閒褲", price: 790, img: "男裝 Heavy weight重磅內刷毛休閒褲.jpg", gender: "male", type: "pants" },
  { name: "男裝 休閒上衣Kirby2", price: 790, img: "男裝 休閒上衣Kirby2.jpg", gender: "male", type: "tops" },
  { name: "男裝 Heavy weight重磅內刷毛休閒上衣Honda", price: 990, img: "男裝 Heavy weight重磅內刷毛休閒上衣Honda.jpg", gender: "male", type: "tops" },
  { name: "男裝 Heavy weight重磅內刷毛休閒連帽上衣", price: 990, img: "男裝 Heavy weight重磅內刷毛休閒連帽上衣.jpg", gender: "male", type: "tops" },
  { name: "男裝 Jorts牛仔短褲(膝下長度)", price: 690, img: "男裝 Jorts牛仔短褲(膝下長度).jpg", gender: "male", type: "pants" },
  { name: "男裝 印花T恤COCHAE1", price: 390, img: "男裝 印花T恤COCHAE1.jpg", gender: "male", type: "tops" },
  { name: "男裝 男女適穿 水洗華夫格boxy T(寬版)", price: 590, img: "男裝 男女適穿 水洗華夫格boxy T(寬版).jpg", gender: "male", type: "tops" },

  // --- 女裝系列 ---
  { name: "女裝 Puff空氣感oversized休閒上衣", price: 690, img: "女裝 Puff空氣感oversized休閒上衣.jpg", gender: "female", type: "tops" },
  { name: "女裝 打褶寬褲(格紋)", price: 890, img: "女裝 打褶寬褲(格紋).jpg", gender: "female", type: "pants" },
  { name: "女裝 Heavy weight重磅短版休閒連帽上衣", price: 690, img: "女裝 Heavy weight重磅短版休閒連帽上衣.jpg", gender: "female", type: "tops" },
  { name: "女裝 合身喇叭牛仔褲", price: 990, img: "女裝 合身喇叭牛仔褲.jpg", gender: "female", type: "pants" },
  { name: "女裝 保暖羅紋圓領T恤(長袖)(吸濕發熱)(拇指洞設計)", price: 490, img: "女裝 保暖羅紋圓領T恤(長袖)(吸濕發熱)(拇指洞設計).jpg", gender: "female", type: "tops" },
  { name: "女裝 附腰帶輕型牛仔寬褲", price: 890, img: "女裝 附腰帶輕型牛仔寬褲.jpg", gender: "female", type: "pants" },
  { name: "女裝 百慕達短褲", price: 590, img: "女裝 百慕達短褲.jpg", gender: "female", type: "pants" },
  { name: "女裝 barrel leg錐形休閒褲", price: 790, img: "女裝 barrel leg錐形休閒褲.jpg", gender: "female", type: "pants" },
  { name: "女裝 bra-feel2WAY短版細肩帶背心格紋", price: 390, img: "女裝 bra-feel2WAY短版細肩帶背心格紋.jpg", gender: "female", type: "tops" },
  { name: "女裝 Puff蓬鬆柔軟寬版針織上衣Q(長版設計)", price: 890, img: "女裝 Puff蓬鬆柔軟寬版針織上衣Q(長版設計).jpg", gender: "female", type: "tops" },

  // --- 童裝系列 ---
  { name: "童裝 Heavy Weight重磅寬版休閒束口褲", price: 590, img: "童裝 Heavy Weight重磅寬版休閒束口褲.jpg", gender: "kids", type: "pants" },
  { name: "童裝 TEEN 絲絨迷你褲裙", price: 490, img: "童裝 TEEN 絲絨迷你褲裙.jpg", gender: "kids", type: "pants" },
  { name: "童裝 TEEN 絨毛條紋針織衫", price: 690, img: "童裝 TEEN 絨毛條紋針織衫.jpg", gender: "kids", type: "tops" },
  { name: "童裝 棉質休閒上衣(狗)", price: 490, img: "童裝 棉質休閒上衣(狗).jpg", gender: "kids", type: "tops" },
  { name: "童裝 V領針織衫Harry Potter1", price: 790, img: "童裝 V領針織衫Harry Potter1.jpg", gender: "kids", type: "tops" },
  { name: "童裝 Heavy weight重磅內刷毛休閒上衣", price: 690, img: "童裝 Heavy weight重磅內刷毛休閒上衣.jpg", gender: "kids", type: "tops" },
  { name: "童裝 TEEN Heavy weight重磅內刷毛休閒連帽上衣", price: 790, img: "童裝 TEEN Heavy weight重磅內刷毛休閒連帽上衣.jpg", gender: "kids", type: "tops" },
  { name: "童裝 Carrot牛仔褲", price: 690, img: "童裝 Carrot牛仔褲.jpg", gender: "kids", type: "pants" },
  { name: "童裝 DRY輕便短褲", price: 390, img: "童裝 DRY輕便短褲.jpg", gender: "kids", type: "pants" },
  { name: "童裝 TEEN DRY工作褲", price: 790, img: "童裝 TEEN DRY工作褲.jpg", gender: "kids", type: "pants" }
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];
let selectedSize=null, currentQty=1;

function checkLogin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("login") === "true";
  const memberLink = document.getElementById("memberLink");
  if (user && isLoggedIn && memberLink) {
    memberLink.innerText = `👤 ${user.lastname}`;
    memberLink.onclick = function(e) {
      e.preventDefault(); e.stopPropagation(); toggleMemberMenu();
    };
  } else if (memberLink) {
    memberLink.innerText = "登入 / 註冊";
  }
}

function toggleMemberMenu() {
  const menu = document.getElementById("memberMenu");
  const user = JSON.parse(localStorage.getItem("user"));
  const info = document.getElementById("userInfo");
  if (menu.style.display === "block") { menu.style.display = "none"; } 
  else {
    info.innerHTML = `
      <p><strong>姓氏</strong> <span>${user.lastname}</span></p>
      <p><strong>Email</strong> <span>${user.email}</span></p>
      <p><strong>地址</strong> <span>${user.address || '未填寫'}</span></p>
      <p><strong>生日</strong> <span>${user.birth || '未填寫'}</span></p>
      <p><strong>性別</strong> <span>${user.gender || '未填寫'}</span></p>
      <p><strong>電話</strong> <span>${user.phone || '未填寫'}</span></p>
    `;
    menu.style.display = "block";
  }
}

function logout() { localStorage.removeItem("login"); location.reload(); }

function render(list, title = "所有商品") {
  const titleEl = document.getElementById("displayTitle");
  if(titleEl) titleEl.innerText = title;
  const listEl = document.getElementById("products-list");
  if(!listEl) return;
  listEl.innerHTML = list.map(p => `
    <div class="card" onclick="openModal('${p.name}','${p.img}',${p.price})">
      <img src="${p.img}">
      <div class="card-body"><h3>${p.name}</h3><div class="price">$${p.price}</div></div>
    </div>`).join("");
}

function filterBy(gender, type) {
  document.getElementById("carousel").style.display = "none";
  const result = allProducts.filter(p => p.gender === gender && p.type === type);
  const label = (gender==='male'?'男裝':gender==='female'?'女裝':'童裝') + ' > ' + (type==='tops'?'上衣':'褲裝');
  render(result, label);
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function searchProducts(){
  const key = document.getElementById("searchInput").value.trim().toLowerCase();
  document.getElementById("carousel").style.display = key ? "none" : "block";
  const result = allProducts.filter(p => p.name.toLowerCase().includes(key));
  render(result, key ? `搜尋結果：${key}` : "所有商品");
}

function openModal(name, img, price) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = img;
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = "$" + price;
  const m = document.getElementById("modal");
  m.dataset.name = name; m.dataset.price = price;
  selectedSize = null; currentQty = 1;
  document.getElementById("qtyValue").innerText = 1;
  document.querySelectorAll("#sizeBtns button").forEach(b => b.style.borderColor = "#ddd");
}

function closeModal(){ document.getElementById("modal").style.display = "none"; }

function selectSize(s, btn) {
  selectedSize = s;
  document.querySelectorAll("#sizeBtns button").forEach(b => b.style.borderColor = "#ddd");
  btn.style.borderColor = "var(--btn)";
}

function changeQty(n) {
  currentQty = Math.max(1, currentQty + n);
  document.getElementById("qtyValue").innerText = currentQty;
}

function addModalToCart() {
  if(!selectedSize) { alert("請選擇尺寸"); return; }
  const m = document.getElementById("modal");
  cart.push({name: m.dataset.name, price: +m.dataset.price, size: selectedSize, qty: currentQty});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount(); alert("商品已加入購物車"); closeModal();
}

function updateCartCount(){
  const el = document.getElementById("cartCount");
  if(el) el.innerText = cart.reduce((s,i)=>s+i.qty, 0);
}

// 輪播
let current=0;
function showSlide(n){
  const imgs = document.querySelectorAll("#carousel img");
  if(!imgs.length) return;
  imgs.forEach(img => img.classList.remove("active"));
  imgs[n].classList.add("active");
  document.querySelectorAll(".dots span").forEach((dot, idx) => dot.classList.toggle("active", idx===n));
}
function nextSlide(){ 
  const imgs = document.querySelectorAll("#carousel img");
  if(!imgs.length) return;
  current=(current+1)%imgs.length; showSlide(current); 
}
function prevSlide(){
  const imgs = document.querySelectorAll("#carousel img");
  if(!imgs.length) return;
  current=(current-1+imgs.length)%imgs.length; showSlide(current);
}

// 初始化
if(document.getElementById("products-list")) {
  render(allProducts);
  checkLogin();
  updateCartCount();
  setInterval(nextSlide, 5000);
  
  // 點點生成
  const dotsContainer = document.getElementById("dots");
  const imgs = document.querySelectorAll("#carousel img");
  if(dotsContainer && imgs.length) {
    imgs.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.onclick = () => { current=i; showSlide(i); };
      dotsContainer.appendChild(dot);
    });
    showSlide(0);
  }
}

window.onclick = function() { 
  const menu = document.getElementById("memberMenu");
  if(menu) menu.style.display = "none"; 
};
const mMenu = document.getElementById("memberMenu");
if(mMenu) mMenu.onclick = function(e) { e.stopPropagation(); };