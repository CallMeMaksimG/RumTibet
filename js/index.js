const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItem = dropdownList.querySelectorAll('.dropdown__list-item');
const dropdownInput = document.querySelector('.dropdown__input-hidden');

dropdownBtn.addEventListener('click', function(){
    dropdownList.classList.toggle('dropdown__list--visible');
    dropdownBtn.classList.toggle('dropdown__btn--visible');
});

dropdownListItem.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownBtn.innerText = this.innerText;
        dropdownList.classList.remove('dropdown__list--visible');
        dropdownBtn.classList.remove('dropdown__btn--visible');
        dropdownInput.value = this.dataset.value;
    })
})


document.addEventListener('click', function(e) {
    if(e.target !== dropdownBtn) {
        dropdownList.classList.remove('dropdown__list--visible');
        dropdownList.classList.remove('dropdown__btn--visible');
    }
})

document.addEventListener('keydown', function(e) {
    if(e.key === 'Tab' || e.key === 'Escape') {
        dropdownList.classList.remove('dropdown__list--visible');
        dropdownBtn.classList.remove('dropdown__btn--visible');
    }
})