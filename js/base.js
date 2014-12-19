// Custom transformation: scale header's title
var titleStyle = document.querySelector('.title').style;
addEventListener('core-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
    titleStyle.transform = titleStyle.webkitTransform = 'scale(' + scale + ') translateZ(0)';
});

// Tab navigation - alternate version if <template is="auto-binding"> and/or routing isn't used
/*
var mainNav = document.querySelector("#main-nav"),
    contentPages = document.querySelector("#content-pages");
if (mainNav && contentPages) {
    mainNav.addEventListener("core-select", function () {
        contentPages.selected = this.selected;
    });
}
*/

// Quotes navigation - takes core-animated-pages first transition into account
setTimeout(function () {
    var quotes = document.querySelectorAll(".quote-wrapper"),
        quotesNav = document.querySelector("#quotes-nav"),
        quotesNavSelectedIndex = 0;

    if (quotesNav) {
        quotesNav.addEventListener("click", function () {
            quotes[quotesNavSelectedIndex].classList.remove("selected");
            quotesNavSelectedIndex = (quotesNavSelectedIndex >= quotes.length - 1)? 0 : ++quotesNavSelectedIndex;
            quotes[quotesNavSelectedIndex].classList.add("selected");
        });
    }
}, 500);

// Get page template reference
var template = document.querySelector('template[is="auto-binding"]');

if (template) {
    // Add page data
    template.pages = [
        {name: "Virtual water footprint", hash: "home"},
        {name: "Water types & cost", hash: "water"},
        {name: "Help organizations", hash: "help-organizations"}
    ];

    // Add start default route
    template.addEventListener("template-bound", function(e) {
        // Use URL hash for initial route. Otherwise, use the first page.
        this.route = this.route || "home";
    });
}
