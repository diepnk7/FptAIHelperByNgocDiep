(() => {
  if(document.getElementById('download')==null){
    // where to clone 
    var elem = document.getElementsByClassName('form-ai-btn')[0].firstElementChild.firstElementChild;

    // Create a copy of it
    var clone = elem.cloneNode(true);
    var clone1 = elem.cloneNode(true);

    // Add a class
    clone.firstElementChild.firstElementChild.remove();
    clone.classList.add('order-xl-3')
    clone.firstElementChild.innerHTML = "<a href='#' class='btn' id='download'>Download</a>";
    
    clone1.firstElementChild.firstElementChild.remove();
    clone1.classList.add('order-xl-4')
    clone1.classList.add('hero-featured__btn')
    clone1.firstElementChild.innerHTML = "<a href='#' class='btn btn-outline' id='contactAuthor'>If error click ...</a>";

    // Inject it into the DOM
    elem.after(clone);
    elem.after(clone1);
    document.getElementById('download').addEventListener('click', function (e) { document.getElementById('tts-speak').click();setTimeout(function() {window.open(document.getElementById('tts-audio').src, '_blank');}, 2000);document.getElementsByClassName('play').click()});
    document.getElementById('contactAuthor').addEventListener('click', function (e) { window.open('https://yoyaldev.github.io/#contact', '_blank');});
    // Remove text 
    document.getElementsByClassName('form-ai-btn')[0].lastElementChild.firstElementChild.firstElementChild.remove()
  }
  else{
    // Insert text
    document.getElementsByClassName('container')[0].firstElementChild.firstElementChild.replaceChildren();
    document.getElementsByClassName('container')[0].firstElementChild.firstElementChild.innerHTML = '<h1 class="hero-featured__title">Ngon chưa =))<br>Gửi bạn code 1 ly café nhé.</h1><div class="hero-featured__btn"><a href="https://yoyaldev.github.io" target="_blank" class="btn">Chút tặng</a><a href="https://yoyaldev.github.io/index.html#donate" target="_blank" class="btn btn-outline">Ngon, tặng luôn</a></div>'
  }
})
();