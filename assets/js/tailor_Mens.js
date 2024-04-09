// In a real scenario, this data would come from a backend server or a database
const productsData = [
    { name: 'Shirt', price: 29.99, image: '../assets/images/dresses/Shirt men.jpeg', html:'Tailor_mens_form.html' },
    { name: 'Pants', price: 39.99, image: '../assets/images/dresses/Pants men.jpeg', html:'Tailor_mens_form.html' },
    { name: 'T-Shirts', price: 49.99, image: '../assets/images/dresses/T-Shirt men.jpeg', html:'Tailor_mens_form.html' },
    { name: 'Jeans', price: 59.99, image: '../assets/images/dresses/Jeans men.jpeg', html:'Tailor_mens_form.html' },
    { name: 'Sherwani', price: 69.99, image: '../assets/images/dresses/Sherwani men.jpeg', html:'Tailor_mens_form.html' },
    { name: 'Suit', price: 100.99, image: '../assets/images/dresses/Suit men.jpeg', html:'Tailor_mens_form.html' },
    { name: 'Kurta', price: 39.99, image: '../assets/images/dresses/Kurta men.jpeg', html:'Tailor_mens_form.html' },
  ];
  
  // Function to generate product HTML
  function generateProductHTML(product) {
    return `
    <div class="col">
    <div class="card_body" onclick="navigateToNextPage('${product.html}')">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img" src="${product.image}" alt="${product.name}">
          <div class="card-body">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  
  // Function to display products on the page
  function displayProducts() {
    const productsContainer = document.querySelector('.products .container .row');
    let productsHTML = '';
  
    productsData.forEach(product => {
      productsHTML += generateProductHTML(product);
    });
  
    productsContainer.innerHTML = productsHTML;
  }
  
  // Display products when the page loads
  window.addEventListener('load', displayProducts);
  
  function navigateToNextPage(pageUrl) {
    // Change the current page's URL to the specified page URL
    window.location.href = pageUrl;
  }

  const categoryData = [
    { name: 'Mens', image: '../assets/images/dresses/Mens.jpeg', html: 'Tailor_Mens.html' },
    { name: 'Womens', image: '../assets/images/dresses/Womens.jpg', html:'Tailor_Womens.html'},
  ];

  // Function to generate product HTML
  function generateCategoryHTML(category) {
    return `
    <div class="col">
      <div class="card card_body" onclick="navigateToNextPage('${category.html}')">
        <div class="card shadow-sm">
          <img class="card-img-top" src="${category.image}" alt="${category.name}">
          <div class="card-body">
            <h3>${category.name}</h3>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  // Function to display products on the page
  function displayCategory() {
    const categoryContainer = document.querySelector('.category .container .row');
    let categoryHTML = '';
  
    categoryData.forEach(category => {
      categoryHTML += generateCategoryHTML(category);
    });
  
    categoryContainer.innerHTML = categoryHTML;
  }
  
  // Display products when the page loads
  window.addEventListener('load', displayCategory);