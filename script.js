import Spring from 'https://omar.dev/simple-performant-harmonic-oscillator/spho.mjs';

let zIndex = 1;

document.querySelectorAll('#image-row img').forEach(el => {
    const spring = new Spring({
        bounciness: 1.2,
        speed: 1.3
    }, {
        fromValue: 1,
        toValue: 1
    });
    spring.onUpdate(x => el.style.transform = 'scale(' + x + ')');

    el.addEventListener('mouseenter', e => {
        el.style.zIndex = zIndex;
        zIndex++;

        spring.setToValue(2.5);
    });

    el.addEventListener('mouseleave', e => {
        spring.setToValue(1);
    });
});