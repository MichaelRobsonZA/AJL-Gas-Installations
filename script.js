
// tlm.to('#SMOKE', { y: -100})
// tlm.to('#SMOKE2', { y: -100})


blackSmokeTlm = new gsap.timeline();
whiteSmokeTlm = new gsap.timeline();
flameTlm = new gsap.timeline();
mellowTlm = new gsap.timeline();

blackSmokeItemStart = {
    y: 0,
    x: 0,
    scale: 1.3
};
blackSmokeItemEnd = {
    y: 'random(-100, -200)',
    x: 'random(-10, 20)',
    stagger: {
        each: 0.1,
        repeat: -1,
        repeatRefresh: true,
    },
    duration: 'random(2, 3)',
    transformOrigin: '50% 50%',
    scale: 0,
    ease: 'none',
};

whiteSmokeItemStart = {
    y: 0,
    x: 'random(-10, 30)',
    scale: 0.5,
    opacity: 0.3
};
whiteSmokeItemEnd = {
    y: -600,
    x: 'random(-30, 40)',
    stagger: {
        each: 0.1,
        repeat: -1,
        repeatRefresh: true,
    },
    duration: 'random(5, 6)',
    transformOrigin: '50% 50%',
    scale: 'random(1, 2)',
    opacity: 0,
    ease: 'none'
};

flameItemStart = {
    x: 'random(-30, 30)',
    y: 0,
    scale: 'random(1, 3)',
    opacity: 1
}

flameItemEnd = {
    y: -150,
    ease: 'none',
    duration: 0.3,
    stagger: {
        each: 0.1,
        repeatRefresh: true,
        repeat: -1
    },
    opacity: 0
}

blackSmokeTlm.fromTo('#SMOKE1 > *', blackSmokeItemStart , blackSmokeItemEnd).seek(100);
blackSmokeTlm.fromTo('#SMOKE2 > *', blackSmokeItemStart , blackSmokeItemEnd, 0).seek(100);
whiteSmokeTlm.fromTo('#whitesmokes > *', whiteSmokeItemStart , whiteSmokeItemEnd, 0).seek(100);
flameTlm.fromTo('#flame > *', flameItemStart , flameItemEnd, 0).seek(100);
mellowTlm.fromTo(['#yellow', '#darken', '#burns'], { opacity: 0 }, { 
    opacity: 1, 
    stagger: 10, 
    duration: 10
});
