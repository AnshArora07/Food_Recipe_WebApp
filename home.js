// Hamburger menu toggle 

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menuList = document.querySelector('.menu1');

    menuList.style.display = 'none';

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (menuList.style.display === 'none') {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        var targetElement = event.target;
        if (targetElement !== menuToggle && !menuList.contains(targetElement)) {
            menuList.style.display = 'none';
        }
    });
});
// Nav Bar

//category
document.getElementById('mainCat').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    
    var trendTitleElement = document.getElementById('recipeCategory');
    trendTitleElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element with id="trendTitle"
});

//trending recipes
document.getElementById('trend').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    
    var trendTitleElement = document.getElementById('trendTitle');
    trendTitleElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element with id="trendTitle"
});


// Automatic slider 

//redirect to about us page
document.getElementById('slide1').addEventListener('click', ()=> {
    window.location.href = 'about.html'; 
});

//redirect to recipes page
document.getElementById('slide2').addEventListener('click', ()=> {
    window.location.href = 'recipies.html'; 
});

//redirect to recipe form
document.getElementById('slide3').addEventListener('click', ()=> {
    window.location.href = 'form.html'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var slides = slider.querySelectorAll('img');
    var navButtons = document.querySelectorAll('.slider-nav a');

    function showSlide(index) {
        slides.forEach(function(slide, i) {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });

        // Highlight the corresponding navigation button
        navButtons.forEach(function(button, i) {
            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function autoSlide() {
        var slideIndex = 0; // Set initial slide index to 0 (first slide)
        setInterval(function() {
            showSlide(slideIndex);
            slideIndex = (slideIndex + 1) % slides.length;
        }, 3000); // Change slide every 3 seconds

        // Show the first slide initially
        showSlide(slideIndex);
    }

    // Handle navigation button clicks
    navButtons.forEach(function(button, i) {
        button.addEventListener('click', function() {
            showSlide(i);
        });
    });

    // Start automatic sliding
    autoSlide();
});

//Blur function
function applyBlur(element) {
    element.style.filter = "blur(5px)";
}
function removeBlur(element) {
    element.style.filter = "none";
}

//breakfast
let cat1 = document.getElementById("cat1");
let text1 = document.getElementById("text1");
text1.addEventListener("mouseover", function() {
    removeBlur(cat1);
});

text1.addEventListener("mouseout", function() {
    applyBlur(cat1);
});

//snacks
let cat2 = document.getElementById("cat2");
let text2 = document.getElementById("text2");
text2.addEventListener("mouseover", function() {
    removeBlur(cat2);
});

text2.addEventListener("mouseout", function() {
    applyBlur(cat2);
});

//dessert
let cat3 = document.getElementById("cat3");
let text3 = document.getElementById("text3");
text3.addEventListener("mouseover", function() {
    removeBlur(cat3);
});

text3.addEventListener("mouseout", function() {
    applyBlur(cat3);
});

//beverage
let cat4 = document.getElementById("cat4");
let text4 = document.getElementById("text4");
text4.addEventListener("mouseover", function() {
    removeBlur(cat4);
});

text4.addEventListener("mouseout", function() {
    applyBlur(cat4);
});