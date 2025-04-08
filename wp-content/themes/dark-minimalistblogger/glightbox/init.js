const lightbox = GLightbox({
touchNavigation: true,
loop: true,
autoplayVideos: true,
zoomable: true
});
standardLightbox.on('slide_after_load', (data) => {

    const { slideIndex, slideNode, slideConfig, player, trigger } = data;
   
    var btnClicked = document.getElementById(trigger.id);
    var posterimage = btnClicked.getAttribute('data-html5videoposter');
    var videoid = btnClicked.getAttribute('data-videoid');

    // use the index
    var getVideoTag = document.getElementById(videoid);
    getVideoTag.setAttribute('poster', posterimage);

});