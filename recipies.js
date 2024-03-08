
document.getElementById("Csearch").addEventListener("click", function() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

var buttons = document.getElementsByClassName("Rsearch");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // Scroll to the top of the page
        if (searchListTitle) {
            searchListTitle.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}

// Recipe buttons

                                        //Breakfast Recipies 
//aloo-paratha
document.getElementById("r1").addEventListener("click", function() {
    // Close all recipe divs
    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }
    // Show the selected recipe div
    document.getElementById("aloo-paratha").style.display = "block";

    // Scroll to the recipe section
    document.getElementById("aloo-paratha").scrollIntoView({ behavior: "smooth" });
});

//chole-bhature
document.getElementById("r2").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("chole-bhature").style.display = "block";

    document.getElementById("chole-bhature").scrollIntoView({ behavior: "smooth" });
});

//poha
document.getElementById("r3").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("poha").style.display = "block";

    document.getElementById("poha").scrollIntoView({ behavior: "smooth" });
});

//sandwich
document.getElementById("r4").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("sandwich").style.display = "block";

    document.getElementById("sandwich").scrollIntoView({ behavior: "smooth" });
});

//sweet-dalia
document.getElementById("r5").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("sweet-dalia").style.display = "block";

    document.getElementById("sweet-dalia").scrollIntoView({ behavior: "smooth" });
});


//cheela
document.getElementById("r6").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("cheela").style.display = "block";

    document.getElementById("cheela").scrollIntoView({ behavior: "smooth" });
});


//                              Snacks Recipies

//cheese bread rolls
document.getElementById("r7").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("cheese-bread-rolls").style.display = "block";

    document.getElementById("cheese-bread-rolls").scrollIntoView({ behavior: "smooth" });
});

//onion pakora
document.getElementById("r8").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("onion-pakora").style.display = "block";

    document.getElementById("onion-pakora").scrollIntoView({ behavior: "smooth" });
});

//dhokla
document.getElementById("r9").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("dhokla").style.display = "block";

    document.getElementById("dhokla").scrollIntoView({ behavior: "smooth" });
});
                        
//bread pizza
document.getElementById("r10").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("bread-pizza").style.display = "block";

    document.getElementById("bread-pizza").scrollIntoView({ behavior: "smooth" });
});

//french fries
document.getElementById("r11").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("french-fries").style.display = "block";

    document.getElementById("french-fries").scrollIntoView({ behavior: "smooth" });
});

//veg cutlet
document.getElementById("r12").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("veg-cutlet").style.display = "block";

    document.getElementById("veg-cutlet").scrollIntoView({ behavior: "smooth" });
});

//                              Dessert Recipies

//chocolate brownie
document.getElementById("r13").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("chocolate-brownie").style.display = "block";

    document.getElementById("chocolate-brownie").scrollIntoView({ behavior: "smooth" });
});

//lemon bars
document.getElementById("r14").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("lemon-bars").style.display = "block";

    document.getElementById("lemon-bars").scrollIntoView({ behavior: "smooth" });
});

//banoffee-pie
document.getElementById("r15").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("banoffee-pie").style.display = "block";

    document.getElementById("banoffee-pie").scrollIntoView({ behavior: "smooth" });
});

//fruit-tart
document.getElementById("r16").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("fruit-tart").style.display = "block";

    document.getElementById("fruit-tart").scrollIntoView({ behavior: "smooth" });
});

//panna-cotta
document.getElementById("r17").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("panna-cotta").style.display = "block";

    document.getElementById("panna-cotta").scrollIntoView({ behavior: "smooth" });
});

//                              Beverage

//mint-mojito
document.getElementById("r18").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("mint-mojito").style.display = "block";

    document.getElementById("mint-mojito").scrollIntoView({ behavior: "smooth" });
});

//mango-lassi
document.getElementById("r19").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("mango-lassi").style.display = "block";

    document.getElementById("mango-lassi").scrollIntoView({ behavior: "smooth" });
});

//pineapple-coconut-smoothie
document.getElementById("r20").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("pineapple-coconut-smoothie").style.display = "block";

    document.getElementById("pineapple-coconut-smoothie").scrollIntoView({ behavior: "smooth" });
});

//                              Other

//pizza
document.getElementById("r21").addEventListener("click", function() {

    var recipeDivs = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipeDivs.length; i++) {
        recipeDivs[i].style.display = "none";
    }

    document.getElementById("veg-pizza").style.display = "block";

    document.getElementById("veg-pizza").scrollIntoView({ behavior: "smooth" });
});


//                  Boxes Category Show


const categoryIds = ["c1", "c2", "c3", "c4", "c5"]; // IDs of category elements
const recipeIds = ["breakfast", "snacks", "dessert", "beverage", "pizza"]; // IDs of corresponding recipe divs

// Loop through category elements
categoryIds.forEach((categoryId, index) => {
    const recipeId = recipeIds[index];
    document.getElementById(categoryId).addEventListener("click", function() {
        // Hide all other recipe divs
        recipeIds.forEach(id => {
            if (id !== recipeId) {
                document.getElementById(id).style.display = "none";
            }
        });

        // Show the corresponding recipe div
        document.getElementById(recipeId).style.display = "block";

        // Scroll to the corresponding recipe div
        document.getElementById(recipeId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Hiding the previously opened recipe
function displayRecipe(categoryId) {
    // Hide all recipe divs
    var recipes = document.getElementsByClassName("recipe");
    for (var i = 0; i < recipes.length; i++) {
        recipes[i].style.display = "none";
    }

    // Display the selected category
    var categoryDiv = document.getElementById(categoryId);
    categoryDiv.style.display = "block";

    // Scroll to the selected category
    categoryDiv.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Attach click event listeners to category elements
document.getElementById("c1").addEventListener("click", function() {
    displayRecipe("breakfast");
});

document.getElementById("c2").addEventListener("click", function() {
    displayRecipe("snacks");
});

document.getElementById("c3").addEventListener("click", function() {
    displayRecipe("dessert");
});

document.getElementById("c4").addEventListener("click", function() {
    displayRecipe("beverage");
});

document.getElementById("c5").addEventListener("click", function() {
    displayRecipe("pizza");
});

// Close all recipe sections when a new category is clicked
var categoryLinks = document.querySelectorAll(".category p");
categoryLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        var recipes = document.getElementsByClassName("recipe");
        for (var i = 0; i < recipes.length; i++) {
            recipes[i].style.display = "none";
        }
    });
});



//Search Msearch

// Event listener for search button
document.getElementById("Bsearch").addEventListener("click", function() {
    var searchTerm = document.getElementById("Msearch").value.toLowerCase();
    var recipes = document.getElementsByClassName("recipe");
    
    // Hide all recipe divs
    for (var i = 0; i < recipes.length; i++) {
        recipes[i].style.display = "none";
    }

    // Display the matched recipe and scroll to it if a search term is present
    for (var i = 0; i < recipes.length; i++) {
        var recipeName = recipes[i].querySelector("h2").textContent.toLowerCase();
        if (recipeName.includes(searchTerm)) {
            recipes[i].style.display = "block";
            if (searchTerm !== "") {
                recipes[i].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
            return;
        }
    }
});



//share button
function shareRecipe(recipeTitle) {
    const title = recipeTitle.trim();
    const url = window.location.href;
  
    if (navigator.share) {
        navigator.share({
            title: title,
            text: 'Check out this delicious recipe: ' + title,
            url: url
        }).then(() => {
            console.log('Recipe shared successfully');
        }).catch((error) => {
            console.error('Error sharing recipe:', error);
        });
    } else {
        alert('Web Share API is not supported in this browser. You can manually share the recipe.');
    }
}
