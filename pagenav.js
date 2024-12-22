function navigateToHome(){
        window.location.href = 'index.html'
}

function navigateToLesson(){
        window.location.href = 'lessons.html'
}

function navigateToSource(){
        window.location.href = 'sources.html'
}

function navigateToEvent(){
        window.location.href = 'event.html'
}

function navigateToAbout(){
        window.location.href = 'about.html'
}

function navigateToContact(){
        window.location.href = 'contact.html'
}


const scrollToTopBtn = document.getElementsByClassName('');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
