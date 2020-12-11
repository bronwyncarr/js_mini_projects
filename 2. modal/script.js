'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.close-modal')
const openButton = document.querySelectorAll('.show-modal')

// Close button functionailty
const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// Open button functionality
const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// Open modal by clicking button
for (let i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener('click', openModal)
}

// Close modal with X button, clicking overlay or with escape key
closeButton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
document.addEventListener('keydown', (e) => {
   if (e.key === "Escape" && !modal.classList.contains('hidden')) closeModal()
})
