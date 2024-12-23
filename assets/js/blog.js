


//declare variables
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const recipe_category_template = $('#category-template')
const category = $('.category')
const category_section = $('#category-section')
const categoryName = JSON.parse(localStorage.getItem("categoryName")) || []

const recipe_info = $('#recipe-info')

const category_container = $('.category-container')

const recipeName = JSON.parse(localStorage.getItem('recipeName')) || []

const table_body = $('#table-body')
const table_row_template = $('#table-row-template')
const recipe_img_container = $('.recipe-img-container')
let imgRecipe, nameRecipe, areaRecipe, cateRecipe

const recipe_content = $('.recipe-content')


const instruction_section = $('#instruction-section')
const instruction_container = $('.instruction-container')
const left_instruction = $('#left-instruction')
const right_instruction = $('#right-instruction')
const inputRecipe = $('#input-find')
const searchButton = $('#search-button')

const loginButton = $('#login-btn')
const userBtn = $('#user')
let loginState = JSON.parse(localStorage.getItem('loginState')) || false




function checkLogin()
{
        if(loginState)
        {
            loginButton.classList.add('active')
            userBtn.classList.add('active')
        }else
        {
            loginButton.classList.remove('active')
            userBtn.classList.remove('active')
        }
}
checkLogin()


if(userBtn)
{
    userBtn.addEventListener('click', ()=>
    {
       if(confirm('Log out?'))
       {
            localStorage.setItem('loginState', JSON.stringify(loginState=false))
            checkLogin()
       }
    })
}


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