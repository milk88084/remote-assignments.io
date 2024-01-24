// Request 1: Click to Change Text.

       function clickToW() {
        let clickItem1 = document.querySelector("#clickItem1")
        let clickItem2 = document.querySelector("#clickItem2")
        clickItem1.style.display="none";
        clickItem2.style.display="flex";
       }

       function clickToH() {
        let clickItem1 = document.querySelector("#clickItem1")
        let clickItem2 = document.querySelector("#clickItem2")
        clickItem1.style.display="flex";
        clickItem2.style.display="none";
       }

// Request 2: Click to Show/Close Menu.
    
    document.querySelector('.item').addEventListener('click', function(){
        if(window.innerWidth <= 800){
            clickMenuIcon.style.display = 'block';
        }       
    });


    document.getElementById('hideX').addEventListener('click', function () {
        clickMenuIcon.style.display = 'none'; /* Hide the menu when X is clicked */
    });


// Request 3: Click to Show More Content Boxes.


        document.querySelector("#buttonClick").addEventListener("click", function() {
            let buttonShow = document.querySelector("#buttonShow");
            buttonShow.style.display = "block";
            });