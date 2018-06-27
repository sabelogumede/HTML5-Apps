let restaurantName = "Indian Heaven";
let order = [];

// window.addEventListener("load", function()
window.addEventListener("DOMContentLoaded", function() {
    updateCart();

    //grab the element by id and attach a "Click" event listerner
    const lnkCancel = document.querySelector("#lnkStartOver");
    lnkCancel.addEventListener("click", function() {
        const areYouSure = confirm("Are you sure you want to cantel the order?");
        if (areYouSure) {
            order = [];
            updateCart();
        }
    });

    // Listen for meals click event
    const meals = document.querySelectorAll(".meal");
    for (const meal of meals) {
        meal.addEventListener("click", function() {
            const title = this.dataset.title;
            order.push(title);
            updateCart();
        });
    }

});

function updateCart() {
    let html = "";
    for (const meal of order) {
        html += "<li>" + meal + "</li>";
    }
    //get ul inside "cart parent"
    const ul = document.querySelector("#cart ul");
    ul.innerHTML = html;

    // change #cart css-color-on =empty-OR-hasItem
    const cart = document.querySelector("#cart");
    if (order.length==0) {
         cart.style.backgroundColor = "gray";
    } else {
         cart.style.backgroundColor = "#006";
    }
}
