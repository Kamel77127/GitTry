
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
   if (window.scrollY > 0) {nav.classList.add('window-scroll', 'window-scroll-text')
    
   }

   else{nav.classList.remove('window-scroll', 'window-scroll-text')}
});





const questions = document.querySelectorAll('.question1');

questions.forEach(question1 => { question1.addEventListener('click', () => {
    question1.classList.toggle('open');

    const icon = question1.getElementsByTagName('i')[0];
    console.log(icon)

    if (icon.className === "uil uil-plus") { icon.className = "uil uil-minus"
        
    }
    else {icon.className = "uil uil-plus"};
    


})});



   
// const buttonsWrapper = document.querySelector(".map");

// const slides = document.querySelector(".course");

// buttonsWrapper.addEventListener("click", e => {
// //   if (e.target.nodeName === "i") {
// //     Array.from(buttonsWrapper.children).forEach(item =>
// //       item.classList.remove("active")
// //     );
//     if (e.target.classList.contains("next")) {
//     //   slides.style.transform = "translateX(150rem)";
//       slides.style.transform = "translateX(+97%)"
//       slides.classList.add = "papacito"
//     //   e.target.classList.add("active");
//     } else if (e.target.classList.contains("prev")) {
//       slides.style.transform = "translateX(-97%)"
//       slides.classList.add = "papacito"
//     //   e.target.classList.add("active");
//     // } else if (e.target.classList.contains('third')){
//     //   slides.style.transform = 'translatex(-66.6666666667%)';
//     // //   e.target.classList.add('active');
//     // }
//   }  })


// const gap = 48;

// const carousel = document.querySelector(".cour_pro"),
//   content = document.querySelector(".course"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next.addEventListener("click", e => {
//   carousel.scrollBy(width + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", e => {
//   carousel.scrollBy(-(width + gap), 0);
//   if (carousel.scrollLeft -width- gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
//     next.style.display = "flex";
//   }
// });

// let width = carousel.offsetWidth;
// window.addEventListener("resize", e => (width = carousel.offsetWidth));


let slider = document.querySelector(".course");
let item = document.getElementsByClassName("cour");
let button = document.getElementsByTagName("button");
let slide = true;




function next(){ 
    slider.append(item[0])
    
}

function prev() {
    slider.prepend(item[item.length - 1])
    
    }



    let navBarSlide = true;
document.querySelector("nav > i").addEventListener('click', function()


{let navbare = document.querySelector('.nav_menu');
console.log(navbare)
    
if(navBarSlide) {navbare.style.right = "0"
                 navBarSlide = false}
                 else {navbare.style.right = "-100%";
                      navBarSlide = true;}
});

