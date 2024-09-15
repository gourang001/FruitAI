// List of fruits and their details
const fruits = [
    {
        name: "Apple",
        description: "An apple is an edible fruit produced by an apple tree. Apples are high in fiber, vitamins, and minerals.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/120px-Red_Apple.jpg",
        price: 2
    },
    {
        name: "Banana",
        description: "Bananas are one of the world's most appealing fruits. They contain essential nutrients that help the body maintain health.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background.jpg/120px-Bananas_white_background.jpg",
        price: 1
    },
    {
        name: "Orange",
        description: "Oranges are rich in vitamin C and are among the most popular fruits around the world. They are juicy and sweet.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/120px-Orange-Fruit-Pieces.jpg",
        price: 3
    },
    {
        name: "Strawberry",
        description: "Strawberries are bright red, juicy, and sweet. They are an excellent source of vitamin C and manganese.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Strawberries.jpg/120px-Strawberries.jpg",
        price: 4
    },
    {
        name: "Pineapple",
        description: "Pineapple is a tropical fruit that is rich in vitamins, enzymes, and antioxidants. It can help boost the immune system.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/120px-Pineapple_and_cross_section.jpg",
        price: 5
    },
    {
        name: "Mango",
        description: "Mango is known as the king of fruits, and it's rich in vitamins, minerals, and antioxidants, making it a healthy and delicious tropical fruit.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/120px-Hapus_Mango.jpg",
        price: 6
    }
];

let selectedFruit = null;
let cart = [];

// Function to display fruit cards
function displayFruitCards() {
    const cardContainer = document.getElementById('card-container');

    fruits.forEach(fruit => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${fruit.name}</h3>`;
        card.onclick = () => showFruitDetails(fruit);
        cardContainer.appendChild(card);
    });
}

// Function to show individual fruit details
function showFruitDetails(fruit) {
    selectedFruit = fruit;
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('fruit-details').classList.remove('hidden');
    document.getElementById('fruit-details').classList.add('visible');

    document.getElementById('fruit-name').innerText = fruit.name;
    document.getElementById('fruit-description').innerText = fruit.description;
    document.getElementById('fruit-image').src = fruit.image;
}

// Function to go back to fruit list
function showFruitList() {
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('fruit-details').classList.add('hidden');
}

// Function to add a fruit to the cart
function addToCart() {
    if (selectedFruit) {
        cart.push(selectedFruit);
        updateCart();
    }
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = `Total: $${total}`;
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCart();
}

// Initialize the fruit cards display when the page loads
window.onload = displayFruitCards;
