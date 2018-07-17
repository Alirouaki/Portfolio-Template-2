$(function () {
  "use strict";
  // Adjust Header Height
  var windowHeight = $(window).height(),
      navHeight =  $(".navbar").innerHeight();
  $("header, .overlay").height( windowHeight -  navHeight );
});

// Add Active Class, Remove Active Class From Navlinks
var btns = document.querySelectorAll(".nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Smooth Scrolling
//Setup a variable to capture your <a> tags
var scrollableLinks = document.querySelectorAll('.nav-link');

//For each of these links add an event listener to run our scrolling function on click
scrollableLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToLink);
});

//Our smooth scrolling function
function smoothScrollToLink(e) {
    //if the the href of the link does not equal a string, simply return
    if (typeof (this.href) !== 'string') {
        return;
    }

    //Get the index of the hash within the links href value // "Length to start to get from"
    let hashPos = this.href.indexOf('#');

    //If no hash character exists in the string, simply return
    if (hashPos === -1) {
        return;
    }

    //Get the #something value from the links href value
    let hash = this.href.substr(hashPos);

    //Find the element on the page using the #something value above // start from the "#" indeox of to return something like "#about" which is the id
    let el = document.querySelector(hash);

    //If no element contains and id with this hash, simply return
    if (!el) {
        return;
    }

    //Prevent default link behaviour
    e.preventDefault();

    //Call scrollIntoView on the element
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
