// this is the background code...

// listen for our browerAction to be clicked
// chrome.browserAction.onUpdated.addListener(function (tab) {
// 	// for the current tab, inject the "diep.js" file & execute it
	// chrome.tabs.executeScript(null, {
	// 	file: 'diep.js'
	// });
// });



// Inject js file to HTML
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete') {
//         // Execute some script when the page is fully (DOM) ready
//         chrome.tabs.executeScript(null, {code:"document.getElementById('tts-speak').addEventListener('click', function(e){window.open(document.getElementById('tts-audio').src , '_blank');});"});
//     }
// });

// Uncomment here to show download button have bug on reload ajax duplicate download button
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        // Execute some script when the page is fully (DOM) ready
        chrome.tabs.executeScript(null, {
            file: 'js/diep.js'
        });
    }
});