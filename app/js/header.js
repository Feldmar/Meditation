// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)

// require('~/app/libs/mmenu/js/jquery.mmenu.all.min.js') // import vendor jQuery plugin example (not module)
window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  
}


const headerNav = document.querySelectorAll(".header__navigation");
const headerLogo = document.querySelectorAll(".header__logo");
headerLogo.forEach((el) => {
            el.onclick = () => {
                headerNav.forEach((le) => {
                    le.classList.toggle("hide");
})
}
});