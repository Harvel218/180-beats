toggleDisability = () => {
    const searchInput = document.querySelector('.js-search');

    if (searchInput) {
        searchInput.disabled = !searchInput.disabled;
    }
};

turnOnListener = () => {
    const searchToggleBtn = document.querySelector('.js-search-toggler');

    if (searchToggleBtn) {
        searchToggleBtn.addEventListener('click', () => {
            toggleDisability();
        });
    }
};

turnOnListener();
