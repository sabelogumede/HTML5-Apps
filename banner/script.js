document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector("main");
    const logo = document.querySelector("#logo");

    setTimeout(function() {
        banner.className = "visible";
    }, 300);

    banner.addEventListener("mouseover", function() {
        banner.className = "over";
        logo.className = "upsidedown";
    });
    banner.addEventListener("mouseout", function() {
        banner.className = "visible";
        logo.className = "";
    });

});
