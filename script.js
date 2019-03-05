let zIndex = 1;

document.querySelectorAll('#image-row img').forEach(el => {
    let animation;
    el.addEventListener('mouseenter', e => {
        el.style.zIndex = zIndex;
        zIndex++;

        if(animation){
            animation.reverse();
        }
        else {
            animation = el.animate([
                {transform: 'scale(1)'},
                {transform: 'scale(2.5)'}
            ], {
                duration: 200,
                fill: 'both',
                ease: 'ease-in-out'
            });
        }
    });

    el.addEventListener('mouseleave', e => {
        animation.reverse();
    });

});