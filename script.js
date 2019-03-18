import Spring from 'https://omar.dev/simple-performant-harmonic-oscillator/spho.mjs';

let zIndex = 1;

document.querySelectorAll('#image-row img').forEach(el => {
    const spring = new Spring({
        mass: 1,
        damping: 10,
        stiffness: 200,
        restVelocityThreshold: 0.00001,
        restDisplacementThreshold: 0.00001
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