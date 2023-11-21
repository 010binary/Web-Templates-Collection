// Declaration
const openButton = document.getElementById('open-btn');
const modal = document.getElementById('modal-container');
const closeButton = document.getElementById('close-btn');



openButton.addEventListener('click', () => modal.style.display = 'block')
closeButton.addEventListener('click', () => modal.style.display = 'none')
window.addEventListener('click', e =>{
if (e.target === modal){
    modal.style.display = 'none'
}
})