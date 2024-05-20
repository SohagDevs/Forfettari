let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".nav-item");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};

let button = document.querySelector(".button-group");
let link = document.querySelectorAll(".hover-button");
link.forEach(function(a){
     a.addEventListener("click", function(){
          button.querySelector(".active").classList.remove("active");
          a.classList.add("active");
     })
})