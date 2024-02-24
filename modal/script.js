'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i=0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', function () {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
};

const closeModal = function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
