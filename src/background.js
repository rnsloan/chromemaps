// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Search on Google Maps";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "id": "context" + context
    });
});


function onClickHandler(info) {
    var sText = info.selectionText;
    var url = "https://maps.google.com/maps?hl=en&q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
}

chrome.contextMenus.onClicked.addListener(onClickHandler);