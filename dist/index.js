"use strict";
const cardShare = document.querySelector('div.card-share');
const shareButtons = document.getElementsByClassName('btn-share');
for (let button of shareButtons) {
    button.addEventListener('click', () => {
        const toggleClass = window.matchMedia('(max-width: 768px)').matches ? 'card-share-margin-show' : 'visible';
        cardShare === null || cardShare === void 0 ? void 0 : cardShare.classList.toggle(toggleClass);
    });
}
//# sourceMappingURL=index.js.map