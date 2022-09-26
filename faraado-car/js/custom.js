jQuery(document).ready(function($) {
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav : false
    });

    var slideNodeList = document.querySelectorAll('.owl-item');
    var slideArray = Array.from(slideNodeList);

    for(let i = 0; i < slideArray.length; i++) {
        // //console.log(slideArray[i].children[0])
        // var obj = window.getComputedStyle(slideArray[i].children[0], '::after');
        // obj.content = "1";
        // //console.log(window.getComputedStyle(document.querySelector('.slide', ':after')));
        const beforeSpan = document.createElement("span");
        beforeSpan.classList = "slide-before";
        beforeSpan.innerText = `0${i}`;

        const afterSpan = document.createElement("span");
        afterSpan.classList = "slide-after";
        afterSpan.innerText = `0${i+1}`;

        slideArray[i].children[0].insertAdjacentElement("afterbegin", beforeSpan);
        slideArray[i].children[0].insertAdjacentElement("beforeend", afterSpan)
    }

    // slide naviagtion
    var slideBox = document.getElementById("slide-navigation");
    document.querySelector(".menu-btn").addEventListener("click", function() {
        
        var body = document.querySelector("body");

        if(body.classList.contains("menuActive")){
            body.classList.remove("menuActive");
        }else {
            body.classList.add("menuActive");
        }
        
    })

});