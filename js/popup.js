function showUrl() {
    chrome.tabs.create({
        url: "https://fpt.ai/tts"
    });
}
function showCoffee() {
    chrome.tabs.create({
        url: "https://yoyaldev.github.io/index.html#donate"
    });
}

document.getElementById('url').addEventListener("click", showUrl);
document.getElementById('giftCoffee').addEventListener("click", showCoffee);