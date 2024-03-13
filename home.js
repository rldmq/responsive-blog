import blogData from "./blogs/blog-data.js"
import { renderBlogsGrid, dateTimeHtml } from "./scripts.js"

// VARIABLES
let count = 3
const mostRecentBlog = blogData[0]
let restOfBlogs = [...blogData].slice(1, count+1)
const heroContainer = document.getElementById("hero-container")
const blogsContainer = document.getElementById("blogs-container")
const viewMoreBtn = document.getElementById("view-more-btn")

heroContainer.innerHTML = `
    <a class="hero-link" href="${mostRecentBlog.html}">
        <time class="hero-date" datetime="${dateTimeHtml(mostRecentBlog.date)}">${mostRecentBlog.date}</time>
        <h1 class="hero-title">${mostRecentBlog.title}</h1>
        <p class="hero-text">${mostRecentBlog.description}</p>
    </a>
    `

// FIX ISSUE WITH HERO IMAGE

renderBlogsGrid(blogsContainer,restOfBlogs)

// EVENT LISTENERS
window.addEventListener("load", heroImageSwap)
window.addEventListener("resize", heroImageSwap)

viewMoreBtn.addEventListener("click", showMoreBlogs)

// FUNCTIONS
function heroImageSwap(){
    const image = window.innerWidth >= 700 ? mostRecentBlog.imgLarge : mostRecentBlog.imgSmall

    heroContainer.style.background = `url("${image}")`
    heroContainer.style.backgroundRepeat = "no-repeat"
    heroContainer.style.backgroundSize = "cover"
    heroContainer.style.position = "center"
}

function showMoreBlogs(){
    count += 3
    
    restOfBlogs = [...blogData].splice(1, count)
    renderBlogsGrid(blogsContainer,restOfBlogs)

    if(count >= blogData.length-1){
        count = 0
        viewMoreBtn.innerText = "Hide"
    }else{
        viewMoreBtn.innerHTML = "View More"
    }
}

