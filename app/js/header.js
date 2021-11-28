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
                    le.classList.add('hide');
})
}
});