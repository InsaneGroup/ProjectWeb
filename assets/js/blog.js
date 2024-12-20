const posts = [
    {
        image: "../images/roasting.jpg",
        title: "Discover Unique Vegetarian Dishes",
        description: "Try these delicious, creative vegetarian dishes.",
        link: "https://themodernproper.com/60-best-vegetarian-meals"
    },
    {
        image: "../images/sauteing.jpg",
        title: "How to Cook Authentic Pho",
        description: "Learn How to Cook Traditional Pho as Delicious as in a Restaurant.",
        link: "https://thewoksoflife.com/pho-vietnamese-noodle-soup/"
    },
    {
        image: "../images/steaming.jpg",
        title: "5 Easy Cooking Tips",
        description: "Useful Tips to Make Cooking Easier.",
        link: "https://thurmontkountrykitchen.com/top-5-cooking-tips-for-beginners/"
    },
    {
        image: "../images/steaming.jpg",
        title: "Sweet Desserts",
        description: "Enjoy Delicious Sweet Treats.",
        link: "https://www.taste.com.au/baking/galleries/top-50-desserts/rysx9rys"
    }
];

function loadPosts() {
    const container = document.getElementById("postContainer");
    container.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        postElement.innerHTML = `
            <div class="image-container">
                <img src="${post.image}" alt="${post.title}">
                <div class="image-text">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <a href="${post.link}" class="read-more" target="_blank">Đọc thêm</a>
                </div>
            </div>
        `;

        container.appendChild(postElement);
    });
}

window.addEventListener("DOMContentLoaded", loadPosts);
