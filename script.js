//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//Ketika Hamburger Menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    navbarNav.focus();
    e.preventDefault();
};



// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    shoppingCart.focus();
    e.preventDefault();
}



//Click di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const spbtn = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!spbtn.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// Modal Box
// Event delegation untuk tombol detail
document.addEventListener('click', function(e) {
    // cek apakah yang diklik adalah tombol dengan class 'item-detail-button'
    if (e.target.closest('.item-detail-button')) {
        const itemDetailModal = document.querySelector('#item-detail-modal');
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }

    // klik tombol close
    if (e.target.closest('.close-icon')) {
        const itemDetailModal = document.querySelector('#item-detail-modal');
        itemDetailModal.style.display = 'none';
        e.preventDefault();
    }
});

// klik di luar modal
window.addEventListener('click', function(e) {
    const itemDetailModal = document.querySelector('#item-detail-modal');
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
});

// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
    
//     btn.onclick = (e) => {
//         itemDetailModal.style.display = 'flex';
//         e.preventDefault();
//     };
// });


// // Click Tombol Close
// document.querySelector('.modal .close-icon').onclick = (e) => {
//     itemDetailModal.style.display = 'none';
//     e.preventDefault();
// }

// // Click Di Luar Modal
// window.onclick = (e) => {
//     if(e.target == itemDetailModal) {
//         itemDetailModal.style.display = 'none';
//     }
// }


