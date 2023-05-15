

let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes)

checkBoxes();


function checkBoxes(){
    //console.log(window.innerHeight * 0.8);
    let triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box =>{
        let boxTop = box.getBoundingClientRect().top;

       // console.log(box.getBoundingClientRect().top);

        if(boxTop < triggerBottom){
            box.classList.add("box_show")
        } else {
            box.classList.remove("box_show")
        }
    })
}