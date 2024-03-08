function saveFormData() {
    // Get form values
    var recipeName = document.getElementById("recipe-name").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("cat").value;
    var ingredients = document.getElementById("ingredients").value;
    var instruction = document.getElementById("instruction").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var image = document.getElementById("image").files[0];

    // Create an object to store form data
    var formData = {
        "recipe_name": recipeName,
        "description": description,
        "category": category,
        "ingredients": ingredients,
        "instruction": instruction,
        "name": name,
        "email": email,
        "contact": contact,
        "image": image
    };

    // Retrieve existing data from local storage or initialize an empty array
    var formDataArray = JSON.parse(localStorage.getItem('formData')) || [];

    // Push current form data into the array
    formDataArray.push(formData);

    // Save the updated array in local storage
    localStorage.setItem('formData', JSON.stringify(formDataArray));

    // Provide feedback to the user
    alert('Recipe details submitted successfully');
}

