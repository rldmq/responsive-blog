import blogData from "./blogs/blog-data.js"
import { renderBlogsGrid, dateTimeHtml } from "./scripts.js"

// VARIABLES
const blogsContainer = document.getElementById("blogs-container")
const recentBlogs = blogData.slice(0,3)

renderBlogsGrid(blogsContainer,recentBlogs, true)

document.getElementById("header").innerHTML = `
    <i class="logo fa-solid fa-book-journal-whills"></i>
    <h3 class="logo-title">Responsive Blog</h3>
    <nav class="nav">
        <a href="../home.html">Home</a>
        <a href="../about-me.html">About Me</a>
    </nav>
`