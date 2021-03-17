/* breadcrumb.js | https://www.indonez.com | Indonez | MIT License */
(function() {
    const homeTitle = 'Home',    
        currentActive = document.querySelectorAll('.uk-navbar-nav li.uk-active'),
        breadWrapper = document.getElementsByClassName('uk-breadcrumb');

    // Check if breadcrumb present and run the element iterable
    if (breadWrapper.length > 0 && location.pathname.slice(location.pathname.lastIndexOf('/') + 1) != 'blog-article.html') {
        const homePath = document.querySelectorAll('.uk-navbar-nav li')[0].getElementsByTagName('a')[0].pathname;
        breadWrapper[0].innerHTML = `<li><a href="${homePath.slice(location.pathname.lastIndexOf('/') + 1)}">${homeTitle}</a></li>`;

        currentActive.forEach(function(el) {
            const createLi = document.createElement('li');

            // Create global variable named breadTitle
            breadTitle = el.childNodes[0].innerText;

            // Create href of breadTitle, wrap with li and insert to breadcrumb element
            createLi.innerHTML = `<a href="${el.children[0].attributes[0].textContent}">${breadTitle}</a>`; 
            breadWrapper[0].insertBefore(createLi, breadWrapper[0].firstElementChild.previousSibling);
        })

        breadWrapper[0].lastChild.innerHTML = `<span>${breadTitle}</span>`;
    }
})();