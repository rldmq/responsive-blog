import blogData from "./blogs/blog-data.js"
import { renderBlogsGrid, dateTimeHtml } from "./scripts.js"

// VARIABLES
const blogsContainer = document.getElementById("blogs-container")
const recentBlogs = blogData.slice(0,3)

renderBlogsGrid(blogsContainer,recentBlogs)