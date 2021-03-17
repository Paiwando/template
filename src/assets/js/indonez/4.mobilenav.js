/* mobilenav.js | https://www.indonez.com | Indonez | MIT License */
const mainNav = document.querySelector('.uk-navbar-nav');

if (mainNav !== null) {    
    const mobileNav = mainNav.cloneNode(true);
    const mobileNavChild = mobileNav.querySelectorAll('ul.uk-nav');

    // Remove the current class in main navigation
    mobileNav.classList.remove('uk-navbar-nav','uk-visible@m');
    mobileNav.classList.add('uk-nav-default','uk-nav-parent-icon');
    mobileNav.setAttribute('data-uk-nav','');

    // Add uk-parent class to li that have children
    Array.from(mobileNav.children).forEach(function(e) {
        if (e.children.length == 2) {
            e.classList.add('uk-parent')
            e.querySelectorAll('.fa-chevron-down')[0].remove()  
        }
    });

    // Remove parent wrapper function
    const unwrap = node => node.replaceWith(...node.childNodes);

    // Remove the parent wrapper if have dropdown
    mobileNavChild.forEach(function(e) {    
        e.classList.remove('uk-nav','uk-navbar-dropdown-nav')
        e.classList.add('uk-nav-sub')
        unwrap(e.parentElement)

        if (e.querySelector('a.uk-disabled') !== null) {
            unwrap(e.parentElement.parentElement)
            unwrap(e.parentElement)
            e.querySelector('a.uk-disabled').parentElement.parentElement.remove()
        }  
    });

    // Optional, used if want add signin button
    const signinEle = document.querySelector('.in-optional-nav');
    let signinBtn = '';

    if (signinEle !== null && signinEle.children.length > 0) {
        signinBtn = `<a href="${signinEle.children[0].pathname.substr(1)}" class="uk-button uk-button-primary uk-border-rounded uk-align-center">${signinEle.children[0].innerText}<i class="fas fa-sign-in-alt uk-margin-small-left"></i></a>`;
    }

    // Mobile navigation wrapper
    const mobileNavWrap = `
    <div class="uk-navbar-item in-mobile-nav uk-hidden@m">
        <a class="uk-button" href="#modal-full" data-uk-toggle><i class="fas fa-bars"></i></a>
    </div>
    <div id="modal-full" class="uk-modal-full" data-uk-modal>
        <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>
            <a class="uk-modal-close-full uk-button"><i class="fas fa-times"></i></a>
            <div class="uk-width-large uk-padding-large">
                ${mobileNav.outerHTML}
                ${signinBtn}
            </div>
        </div>
    </div>
    `

    // Append mobileNavWrap into the end of uk-navbar-nav
    mainNav.insertAdjacentHTML('afterend', mobileNavWrap);
}