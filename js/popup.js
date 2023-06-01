document.querySelectorAll('.popBook').forEach(vid=> {
    vid.onclick = () => {
        document.querySelector('.popup-video').style.display = "block";
        document.querySelector('.popup-video video').src = "img/bookollectionV.mp4";
    }
})
document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = "none";
}
