// custom transformation: scale header's title
var titleStyle = document.querySelector('.title').style;
addEventListener('core-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
    titleStyle.transform = titleStyle.webkitTransform =
    'scale(' + scale + ') translateZ(0)';
});

// Tab navigation
var mainNav = document.querySelector("#main-nav"),
    contentPages = document.querySelector("#content-pages");
if (mainNav && contentPages) {
    mainNav.addEventListener("core-select", function () {
        contentPages.selected = this.selected;
    });
}

// Quotes navigation
var quotes = document.querySelector("#quotes"),
    quoteNav = quotes.querySelectorAll("paper-fab"),
    quotesLength = quoteNav.length - 1;
// alert(quotes + ", " + quoteNav);
for (var i = 0, l = quoteNav.length, nextItem, selectedQuoteNext; i < l; i ++) {
    quoteNav[i].addEventListener("click", function () {
        selectedQuoteNext = parseInt(quotes.selected, 10) + 1;
        nextItem = (selectedQuoteNext > quotesLength)? 0 : selectedQuoteNext;
        //alert(quotesLength + ", " + nextItem);
        quotes.selected = nextItem;
    });
}

