if(document.getElementById('download')==null){
    // where to clone 
    var elem = document.getElementsByClassName('form-ai-btn')[0].firstElementChild.firstElementChild;

    // Create a copy of it
    var clone = elem.cloneNode(true);

    // Update the ID and add a class
    clone.firstElementChild.firstElementChild.remove();
    clone.firstElementChild.innerHTML = "<a href='#' class='btn' id='download'>Download</a>";

    // Inject it into the DOM
    elem.after(clone);
    document.getElementById('download').addEventListener('click', function (e) { window.open(document.getElementById('tts-audio').src, '_blank'); });
  
  }
  else
  {
    alert('#download')
  }




document.getElementById('tts-speak')[0].click()
document.getElementsByClassName('play').click()
// nhúng vô web
document.getElementsByClassName('form-ai-btn')[0].lastElementChild.firstElementChild.firstElementChild.remove()
document.getElementsByClassName('form-ai-btn')[0].lastElementChild.firstElementChild.innerHTML = 
'<div class="col-md-6"><h1 class="hero-featured__title">Ngon chưa =))<br>Gửi bạn code 1 ly café nhé.</h1><div class="hero-featured__btn"><a href="https://voicemaker.fpt.ai" class="btn">Chút tặng</a><a href="https://voicemaker.fpt.ai" class="btn btn-outline">Ngon, tặng luôn</a></div></div>'

//'<p style = "color:red">Chúc mừng</p><span>,</span><p>Bạn đã tải <span style = "color:green">thành công</span>, Công cụ này có giúp ích cho bạn nhiều không? có thì tặng bạn code 1 ly cafe để bạn ý làm thêm nhiều công cụ tốt nữa cho bạn dùng nha, cảm ơn bạn.</p>'



//setTimeout(function() {window.open(document.getElementById('tts-audio').src, '_blank');}, 1500);



//'<div class="col-md-6"><h1 class="hero-featured__title">Ngon chưa =))<br>Gửi bạn code 1 ly café nhé.</h1><div class="hero-featured__btn"><a href="https://voicemaker.fpt.ai" class="btn">Chút tặng</a><a href="https://voicemaker.fpt.ai" class="btn btn-outline">Ngon, tặng luôn</a></div></div>'


document.getElementsByClassName('container')[0].firstElementChild.firstElementChild.replaceChildren();
document.getElementsByClassName('container')[0].firstElementChild.firstElementChild.innerHTML = '<h1 class="hero-featured__title">Ngon chưa =))<br>Gửi bạn code 1 ly café nhé.</h1><div class="hero-featured__btn"><a href="https://voicemaker.fpt.ai" class="btn">Chút tặng</a><a href="https://voicemaker.fpt.ai" class="btn btn-outline">Ngon, tặng luôn</a></div>'

document.getElementsByClassName('container')[0].firstElementChild.firstElementChild.firstElementChild.remove()


//api QR google
//https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=TEXT-HERE&chld=L|1&choe=UTF-8
