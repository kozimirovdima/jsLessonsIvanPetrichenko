'use strict';

const modal = document.querySelector('.modal'), 
      btnModal = document.querySelector('.btn__modal');

function modalTrigger() {
    modal.classList.toggle('show');
    
}
function modalHide() {
    modal.classList.toggle('show');
}
btnModal.addEventListener('click', modalTrigger);
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        modalHide(); 
    }
})