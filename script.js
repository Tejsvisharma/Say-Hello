
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const helloButton = document.getElementById('helloButton');
    const initialScreen = document.getElementById('initialScreen');
    const digitalWorldScreen = document.getElementById('digitalWorldScreen');
    const imag = document.getElementById('imag');
    const word = document.getElementById('hello-world-text');
    const dot = document.getElementById('dot');
    // Add an event listener to the button
    helloButton.addEventListener('click', () => {
        imag.load();
        imag.play();

        // 1. Start the transition to hide the initial screen.
        initialScreen.classList.add('hidden');
        initialScreen.style.setProperty("opacity", 0);
        initialScreen.setAttribute('aria-hidden', 'true');
        imag.style.cssText = "scale:1";
        // word.style.scale = '3';
        word.style.fontSize = '10vw';



        // 3. Activate the digital world screen.
        digitalWorldScreen.classList.add('active');
        digitalWorldScreen.setAttribute('aria-hidden', 'false');
        imag.playbackRate = 0.5;
    });
});
