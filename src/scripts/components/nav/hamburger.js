toggleClass = (target, className) => {
    target.classList.toggle(className);
};

turnOnListeners = () => {
    const hamburger = document.querySelector('.js-hamburger');
    const navigation = document.querySelector('.js-navigation');

    hamburger.addEventListener('click', () => {
        toggleClass(hamburger, 'is-active');
        toggleClass(navigation, 'is-active');
    });
};

turnOnListeners();
