const allImages = document.querySelectorAll('.js-lazy-image');
let lazyImages = [...allImages];
let active = false;

const lazyLoading = () => {
    if (active === false) {
        active = true;

        setTimeout(() => {
            lazyImages.forEach((lazyImage) => {
                if (
                    lazyImage.getBoundingClientRect().top <= window.innerHeight &&
                    lazyImage.getBoundingClientRect().bottom >= 0 &&
                    getComputedStyle(lazyImage).display !== 'none'
                ) {
                    lazyImage.src = lazyImage.dataset.link;
                    lazyImages = lazyImages.filter((image) => {
                        return image !== lazyImage;
                    });
                }
            });

            const event = new CustomEvent('scrollEnd');
            window.dispatchEvent(event);
            active = false;
        }, 350);
    }
};

const scrollAnimationEnd = () => {
    allImages.forEach((image) => {
        image.classList.add('scrolling');
    });
};

const scrollAnimationStart = () => {
    allImages.forEach((image) => {
        image.classList.remove('scrolling');
    });
};

const turnOnListeners = () => {
    let timeout;

    if (lazyImages.length > 0) {

        document.addEventListener('scroll', () => {
            lazyLoading();
            clearTimeout(timeout);
            timeout = setTimeout(scrollAnimationStart, 400);
        });

        window.addEventListener('resize', () => {
            lazyLoading();
        });

        window.addEventListener('orientationchange', () => {
            lazyLoading();
        });

        window.addEventListener('scrollEnd', () => {
            scrollAnimationEnd();
        });
    }
};

turnOnListeners();
