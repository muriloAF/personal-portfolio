const body = document.body;
const video = document.getElementById("bg-video");

function updateBackgroundVideo() {
  const isLight = body.classList.contains("theme-light");

  const lightVideo = body.dataset.lightVideo;
  const darkVideo = body.dataset.darkVideo;

  const newSrc = isLight ? lightVideo : darkVideo;



  // Evita recarregar o mesmo vídeo
  if (video.getAttribute("src") !== newSrc) {
    video.src = newSrc;
    video.load();
    
  }
}

// roda ao carregar a página
updateBackgroundVideo();

// escuta mudanças de tema
const observer = new MutationObserver(updateBackgroundVideo);
observer.observe(body, { attributes: true, attributeFilter: ["class"] });

