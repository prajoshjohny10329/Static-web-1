const firstVideo = document.getElementById('intro-video');
const secondVideo = document.getElementById('second-video');

firstVideo.addEventListener('ended', function() {
    firstVideo.style.display = 'none';
    secondVideo.style.display = 'block';
    secondVideo.play();
});


