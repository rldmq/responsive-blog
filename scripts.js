// Create header for all pages
document.getElementById("header").innerHTML = `
    <i class="logo fa-solid fa-book-journal-whills"></i>
    <h3 class="logo-title">Responsive Blog</h3>
    <nav class="nav">
        <a href="./home.html">Home</a>
        <a href="./about-me.html">About Me</a>
    </nav>
`

// Create footer for all pages
document.getElementById("footer").innerHTML = `
    <p>Responsive Blog</p>
    <span class="copyright">Copyright &copy;Ramon Quiambao ${(new Date()).getFullYear()}</span>
`

// Google fonts for all pages
document.querySelector("head").innerHTML += `
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
`

// Blogs for all
export function renderBlogsGrid(element,blogArray, pathIssue = false){
    element.innerHTML = blogArray.map(e => {

        const path = pathIssue ? "." + e.imgSmall : e.imgSmall

        return `
            <a href="${e.working ? e.html : "#"}" class="${e.working ? "" : "noclick" }">
                <div class="blog-container">
                    <img class="blog-img" src="${path}" />
                    <time class="blog-date" datetime="${dateTimeHtml(e.date)}">${e.date}</time>
                    <p class="blog-title">${e.title}</p>
                    <p class="blog-text">${e.description}</p>
                </div>
            </a>
        `

    }).join('')
}

// Functions
export function dateTimeHtml(date){
    return new Date(date).toLocaleDateString().split("/").reverse().map(e => e.length < 2 ? "0" + e : e).join("-")
}

// STRETCH
// Hamburger menu on mobile/smaller screens
// Display other posts (view more button)

// Required
// Relative units, mobile-first design, media queries, viewport meta tag