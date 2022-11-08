let knopki=document.getElementsByClassName("knopka");
let razdel=document.getElementsByClassName("razdel");
let map=document.getElementById("map"); 
let aboutUs=document.getElementById("about-us");
function getScroll(){
    console.log(window.pageYOffset);
    console.log(map.offsetTop);
    let pocazatel=window.pageYOffset;
    if(pocazatel>map.offsetTop)
    {
        for(let h=0; h<3; h++){
            knopki[h].classList.remove("active-tab");

        }
        knopki[2].classList.add("active-tab");
        // knopki[].classList.remove("active-tab");
    }
    else if(pocazatel>aboutUs.offsetTop)
    {
        for(let h=0; h<3; h++){
            knopki[h].classList.remove("active-tab");
        }
        knopki[1].classList.add("active-tab");
    }
    else
    {
        for(let h=0; h<3; h++){
            knopki[h].classList.remove("active-tab");
        }
        knopki[0].classList.add("active-tab");
    }
}
// console.log(knopki[1].innerHTML[6]);
// от 5 до 25 прибавляеться по 5
// for(let i=5; i<=25; i=i+5){
//     console.log(i);
// }
// // от 2 до 64 умножаеться на 2
// for(let p=2; p<=64; p=p*2){
//     console.log(p);
// }

// for(let y=1000; y>=0.1; y=y/10){
//     console.log(y);
// }