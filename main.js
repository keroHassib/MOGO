let firstcolapseArrow = document.getElementById("s5_firstI");
let firstcolapseDiv = document.querySelector(`.${"photo"}`);
firstcolapseArrow.style.transform = "rotate(180deg)";
firstcolapseDiv.style.height = "200px";

let secondcolapseArrow = document.getElementById("s5_secondI");
let secondcolapseDiv = document.querySelector(`.${"photo1"}`);

let thirdcolapseArrow = document.getElementById("s5_thirdI");
let thirdcolapseDiv = document.querySelector(`.${"photo2"}`);

function s5_Scroll(elemDIV, elemID) {
  let elemI = document.getElementById(elemID);
  let elemD = document.querySelector(`.${elemDIV}`);
  if (elemD.offsetHeight < 65) {
    elemI.style.transform = "rotate(180deg)";
    elemD.style.height = "200px";
  } else {
    elemI.style.transform = "rotate(0deg)";
    elemD.style.height = "60px";
  }
  if (elemI == firstcolapseArrow) {
    secondcolapseArrow.style.transform = "rotate(0deg)";
    secondcolapseDiv.style.height = "60px";

    thirdcolapseArrow.style.transform = "rotate(0deg)";
    thirdcolapseDiv.style.height = "60px";
  }
  if (elemI == secondcolapseArrow) {
    firstcolapseArrow.style.transform = "rotate(0deg)";
    firstcolapseDiv.style.height = "60px";

    thirdcolapseArrow.style.transform = "rotate(0deg)";
    thirdcolapseDiv.style.height = "60px";
  }
  if (elemI == thirdcolapseArrow) {
    secondcolapseArrow.style.transform = "rotate(0deg)";
    secondcolapseDiv.style.height = "60px";

    firstcolapseArrow.style.transform = "rotate(0deg)";
    firstcolapseDiv.style.height = "60px";
  }
}
let curr = document.getElementById("s5_curr");
let prev = document.getElementById("s5_prev");
let next = document.getElementById("s5_next");
let staticCurr;

function forward() {
  curr.style.display = "none";
  next.style.display = "flex";
  staticCurr = curr;
  curr = next;
  next = prev;
  prev = staticCurr;
}

function back() {
  curr.style.display = "none";
  prev.style.display = "flex";
  staticCurr = curr;
  curr = prev;
  prev = next;
  next = staticCurr;
}

let curr2 = document.getElementById("s5_curr2");
let prev2 = document.getElementById("s5_prev2");
let next2 = document.getElementById("s5_next2");
let staticCurr2;

function forward2() {
  curr2.style.display = "none";
  next2.style.display = "flex";
  staticCurr2 = curr2;
  curr2 = next2;
  next2 = prev2;
  prev2 = staticCurr2;
}

function back2() {
  curr2.style.display = "none";
  prev2.style.display = "flex";
  staticCurr2 = curr2;
  curr2 = prev2;
  prev2 = next2;
  next2 = staticCurr2;
}
let headr = document.getElementById("s1_Header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    headr.style.backgroundColor = "#000000d7";
    headr.style.color = "#f05353b0";
  }
  if (window.scrollY < 20) {
    headr.style.backgroundColor = "transparent";
    headr.style.color = "#000";
  }
});
let Arrow = document.getElementById("Arrow");
// window.onscroll = function () {
//   if (scrollY > 150) {
//     Arrow.style.display = "";
//   } else {
//     Arrow.style.display = "none";
//   }
// };


let section2 = document.querySelector(`.section2`);
let section3 = document.querySelector(`.section3`);
let section4 = document.querySelector(`.section4`);
let section5 = document.querySelector(`.section5`);
let section6 = document.getElementById("section6");
let section7 = document.querySelector(`.section7`);
let section8 = document.querySelector(`.section8`);
let section9 = document.querySelector(`.section9`);
let section10 = document.querySelector(`.section10`);
let section11 = document.querySelector(`.section11`);

window.onscroll = function () {
  if (scrollY > 150) {
    Arrow.style.display = "block";
  } else {
    Arrow.style.display = "none";
  }
  if (scrollY > 233 && scrollY < 1431) {
    section2.style.opacity = "1";
  } else {
    section2.style.opacity = "0";
  }
  if (scrollY > 896 && scrollY < 1986) {
    section3.style.opacity = "1";
  } else {
    section3.style.opacity = "0";
  }
  if (scrollY > 1583 && scrollY < 2811) {
    section4.style.opacity = "1";
  } else {
    section4.style.opacity = "0";
  }
  if (scrollY > 2318 && scrollY < 3617) {
    section5.style.opacity = "1";
  } else {
    section5.style.opacity = "0";
  }
  if (scrollY > 3177 && scrollY < 4535) {
    section6.style.opacity = "1";
  } else {
    section6.style.opacity = "0";
  }
  if (scrollY > 4101 && scrollY < 5910) {
    section7.style.opacity = "1";
  } else {
    section7.style.opacity = "0";
  }
  if (scrollY > 5496 && scrollY < 6632) {
    section8.style.opacity = "1";
  } else {
    section8.style.opacity = "0";
  }
  if (scrollY > 6144 && scrollY < 7239) {
    section9.style.opacity = "1";
  } else {
    section9.style.opacity = "0";
  }
  if (scrollY > 6791 && scrollY < 7509) {
    section10.style.opacity = "1";
  } else {
    section10.style.opacity = "0";
  }
  if (scrollY > 7039 && scrollY < 8055) {
    section11.style.opacity = "1";
  } else {
    section11.style.opacity = "0";
  }
};
Arrow.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
let dark=document.getElementById("dark");
let darkMode=document.getElementById("dark-mode");
let P=document.getElementsByTagName("h1");
const paragraphs = document.querySelectorAll('p');
const head1 = document.querySelectorAll('h1');
const head2 = document.querySelectorAll('h2');
const head3 = document.querySelectorAll('h3');
const head4 = document.querySelectorAll('h4');
const head5 = document.querySelectorAll('h5');
const span = document.querySelectorAll('span');
const bold = document.querySelectorAll('b');




darkMode.addEventListener("click", function(){
section2.style.backgroundColor= "black";
section3.style.backgroundColor= "black";
section4.style.backgroundColor= "black";
section5.style.backgroundColor= "black";
section6.style.backgroundColor= "black";
section7.style.backgroundColor= "black";
section8.style.backgroundColor= "black";
section9.style.backgroundColor= "black";
section10.style.backgroundColor= "black";
section11.style.backgroundColor= "black";
paragraphs.forEach(paragraph => {
  paragraph.style.color = 'white';
});
head1.forEach(head11 => {
  head11.style.color = 'white';
});
head2.forEach(head22 => {
  head22.style.color = 'white';
});
head3.forEach(head33 => {
  head33.style.color = 'white';
});
head4.forEach(head44 => {
  head44.style.color = 'white';
});
head5.forEach(head55 => {
  head55.style.color = 'white';
});
span.forEach(spann => {
  spann.style.color = 'white';
});
bold.forEach(boldd => {
  boldd.style.color = 'white';
});
section6.style.color = 'black';
section8.style.color = 'black';
});