const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const home2_content = $('.home2-content')
const leftBtn = $('#left')
const rightBtn = $('#right')
const home2_contentChild = $$('.home2-content-container')
const templateDot = $('#dot-template')
const dot_container = $('.dot-container')
const templateRecipe = $('#recipe-template')
const main_row = $$('.main-row')
const nav_tabs = $$('.nav-tab')

console.log(nav_tabs);




nav_tabs.forEach((tab, index)=>
{
    tab.addEventListener('click', function()
    {
        $('.nav-tab.active').classList.remove('active')
        
        this.classList.add('active')
    })
})




for(let i=0; i<home2_contentChild.length; i++)
{
    const dot = templateDot.content.cloneNode(true)
    dot_container.appendChild(dot)
}


let cnt = 0
let index = 0
const firstChild = home2_contentChild[0].cloneNode(true)
home2_content.appendChild(firstChild)



leftBtn.addEventListener('click', ()=>
{
    if(cnt === 0)
    {
        cnt += 100;
        home2_content.style.transition = '0.5s ease';
        home2_content.style.transform = `translateX(${cnt}%)`;

        
        setTimeout(() => {
            cnt = home2_contentChild.length * 100 * -1 + 100
            home2_content.style.transition = 'none'; 
            home2_content.style.transform = `translateX(${cnt}%)`;
        }, 500); 

        index = home2_contentChild.length - 1; 
        slideDot();
        return;
    }
    cnt+=100
    index--
    // console.log(index);
    home2_content.style.transition = '0.5s ease'
    home2_content.style.transform = `translateX(${cnt}%)`
    slideDot()
})
rightBtn.addEventListener('click', ()=>
{
    if(cnt === (home2_contentChild.length * 100 * -1 + 100))
    {
        
        cnt-=100
        home2_content.style.transition = '0.5s ease'
        home2_content.style.transform = `translateX(${cnt}%)`

        setTimeout(()=>
        {
            cnt=0;
            home2_content.style.transition = 'none'
            home2_content.style.transform = `translateX(${cnt}%)`
        }, 500)
        index = 0
        slideDot()
       return;
    }
    cnt-=100
    index++
    // console.log(index);
    // console.log(home_contentChild.length * 100 * -1);
    home2_content.style.transition = '0.5s ease'
    home2_content.style.transform = `translateX(${cnt}%)`
    slideDot()
})

const dots = dot_container.querySelectorAll('.dot')
dots[0].style.backgroundColor = 'rgb(11, 4, 22)'

const slideDot = ()=>
{
        if(dots) 
        {
            dots.forEach(function(dot, dotIndex)
            {
                dot.style.backgroundColor = 'rgb(150, 150, 150)'
                if(dotIndex === index)
                {        
                    dot.style.backgroundColor = 'rgb(11, 4, 22)'
                }
            })    
        }
}










async function  getMeal(name) 
{
   try
   {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name)
        const data = await response.json()
       
   }catch(err)
   {
        console.log(err.message);
        
   }
}

async function  showRecipeInHome3() 
{
    try
   {
        for(const row of main_row)
        {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            const data = await response.json()

            const recipe = templateRecipe.content.cloneNode(true) 
            recipe.querySelector('.recipe').style.backgroundImage = `url(${data.meals[0].strMealThumb})`
            recipe.querySelector('#recipe-title').innerText = data.meals[0].strMeal
            recipe.querySelector('#recipe-info').innerText = data.meals[0].strTags
            
            row.appendChild(recipe)
            
        }
        
       
   }catch(err)
   {
        console.log(err.message);
   }
}


showRecipeInHome3()
