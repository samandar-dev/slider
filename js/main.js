let elLeftBtn = document.getElementById("btn-left");
let elRightBtn = document.getElementById("btn-right");

let elSection = document.getElementById("section")
let elItem1 = document.getElementById("item1");
let elItem2 = document.getElementById("item2");
let elItem3 = document.getElementById("item3");
let elItem4 = document.getElementById("item4");
let elItem5 = document.getElementById("item5");

let nat = 1

elRightBtn.addEventListener("click", () => {
  if (nat == 1) {
    elItem1.style.transform = "translateX(-100%)";
    elItem1.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe9.jpg')";
    elSection.style.transition = "all .9s ease";
    nat += 1
  } else if (nat == 2) {
    elItem2.style.transform = "translateY(-100%)";
    elItem2.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe2.jpg')";
    elSection.style.transition = "all .9s ease";
    nat += 1
  } else if (nat == 3) {
    elItem3.style.transform = "translateX(100%)";
    elItem3.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe6.jpg')";
    elSection.style.transition = "all .9s ease";
    nat += 1
  } else if (nat == 4) {
    elItem4.style.transform = "translateY(100%)";
    elItem4.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe7.jpg')";
    elSection.style.transition = "all .9s ease";
    nat += 1
  }
})

elLeftBtn.addEventListener("click", () => {
  if (nat == 6) {
    elItem5.style.transform = "translateX(0)";
    elItem5.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe7.jpg')";
    elSection.style.transition = "all .9s ease";
    nat -= 1
  } else if (nat == 5) {
    elItem4.style.transform = "translateY(0)";
    elItem4.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe6.jpg')";
    elSection.style.transition = "all .9s ease";
    nat -= 1
  } else if (nat == 4) {
    elItem3.style.transform = "translateX(0)";
    elItem3.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe2.jpg')";
    elSection.style.transition = "all .9s ease";
    nat -= 1
  } else if (nat == 3) {
    elItem2.style.transform = "translateY(0)";
    elItem2.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe9.jpg')";
    elSection.style.transition = "all .9s ease";
    nat -= 1
  } else if (nat == 2) {
    elItem1.style.transform = "translateX(0)";
    elItem1.style.transition = "all .5s ease";
    elSection.style.backgroundImage = "url('/images/spe4.jpg')";
    elSection.style.transition = "all .9s ease";
    nat -= 1
  }
})

