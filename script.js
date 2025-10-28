
document.addEventListener("DOMContentLoaded", function() {
  var redSlider = document.getElementById("red");
  var greenSlider = document.getElementById("green");
  var blueSlider = document.getElementById("blue");

  redSlider.addEventListener("input", updateBackgroundColor);
  greenSlider.addEventListener("input", updateBackgroundColor);
  blueSlider.addEventListener("input", updateBackgroundColor);

  function updateBackgroundColor() {
    var redValue = redSlider.value;
    var greenValue = greenSlider.value;
    var blueValue = blueSlider.value;

    var body = document.querySelector("body");
    body.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
  }
});

const products = [
  { title: "Macbook Pro", category: "Teknologi", image: "laptop.png", description: "Price: $600,00"},
  { title: "Virtual Reality", category: "Teknologi", image: "Vr.png", description: "Price: $50,00"},
  { title: "Iphone 14 Pro Max", category: "Teknologi", image: "iphone.png", description: "Price: $100,00"},
  { title: "Jacket", category: "Fashion", image: "jacket.png", description: "Price: $30,00"},
  { title: "Celana", category: "Fashion", image: "celana.png", description: "Price: $15,00"},
  { title: "Topi", category: "Fashion", image: "topi.png", description: "Price: $6,00"},
  { title: "Alat Gym", category: "Sport", image: "gym.png", description: "Price: $10,00"},
  { title: "Bola Futball", category: "Sport", image: "bola.png", description: "Price: $19,00"},
  { title: "Sepatu Air Jordan", category: "Sport", image: "sepatu.png", description: "Price: $243,00"},
  { title: "Sofa", category: "Furniture", image: "sofa.png", description: "Price: $180,00"},
  { title: "Meja", category: "Furniture", image: "meja.png", description: "Price: $200,00"},
  { title: "Cermin Made in Thailand", category: "Furniture", image: "cermin.png", description: "Price: $196,00"},
  { title: "Helm Classic", category: "Automotive", image: "helm.png", description: "Price: $76,00"},
  { title: "Ban", category: "Automotive", image: "ban.png", description: "Price: $100,00"},
  { title: "Yamaha R1M", category: "Automotive", image: "motor.png", description: "Price: $100,00"},
  // Tambahkan produk lainnya
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productResult = document.getElementById("productResult");

searchButton.addEventListener("click", function() {
  const category = searchInput.value.toLowerCase();

  // Filter produk berdasarkan kategori
  const filteredProducts = products.filter(function(product) {
    return product.category.toLowerCase() === category;
  });

  // Tampilkan hasil pencarian
  productResult.innerHTML = "";

  if (filteredProducts.length > 0) {
    filteredProducts.forEach(function(product) {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;
      
      const productTitle = document.createElement("h2");
      productTitle.textContent = product.title;
      
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      
      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy";
      buyButton.addEventListener("click", function() {
        alert("Terima Kasih Sudah Memesan Produk : " + product.title);
      });
      
      
      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productDescription);
      productCard.appendChild(buyButton);
      
      productResult.appendChild(productCard);
    });
    
  } else {
    productResult.textContent = "Tidak ada produk dengan kategori tersebut";
  }

  // Reset input pencarian
  searchInput.value = "";
});

filteredProducts.forEach(function(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  
  // ...

  productResult.appendChild(productCard);
});

const productImage = document.createElement("img");
productImage.src = product.image;
productImage.alt = product.title;



  