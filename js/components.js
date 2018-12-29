
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
        var last = -1;
        var animations = ['swag','Explain','Explain2'];
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                last = (last + 1) % animations.length;
                aEntity.setAttribute("animation-mixer", "clip", animations[last]);
                console.log('I was clicked at: ', ev.detail.intersection.point);
                console.log("Playing animation ", animations[last]);
            }
        });
        window.addEventListener('keydown', function(ev, target){
            if(ev.keyCode == 32){
                aEntity.setAttribute("animation-mixer", "clip","none"); //None Animation; WARING: There shouldn't be a animation called none because it'll be called;
            }
        });

}});