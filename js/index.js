// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach((dropDownWrapper)=> {
    const dropdownBtn = dropDownWrapper.querySelector('.dropdown__btn');
    const dropdownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropdownListItem = dropdownList.querySelectorAll('.dropdown__list-item');
    const dropdownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

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
    });


    document.addEventListener('click', function(e) {
        if(e.target !== dropdownBtn) {
            dropdownList.classList.remove('dropdown__list--visible');
            dropdownBtn.classList.remove('dropdown__btn--visible');
        }
    });

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Tab' || e.key === 'Escape') {
            dropdownList.classList.remove('dropdown__list--visible');
            dropdownBtn.classList.remove('dropdown__btn--visible');
        }
    });

});


$(function() {

    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        "autoApply": true,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });


const popularCards = document.querySelectorAll('.popular__card-item');
popularCards.forEach((card) => {
    card.addEventListener('mouseover', function() {
            this.querySelector('.overlay').classList.add('overlay--open');
    })
    card.addEventListener('mouseout', function() {
        this.querySelector('.overlay').classList.remove('overlay--open');
    })  
})

const galleryImages = document.querySelectorAll('.gallery__media-img');

galleryImages.forEach((image) => {
    image.addEventListener('mouseover', function() {
        this.querySelector('.gallery__zoom-icon').classList.add('gallery__zoom-icon--show');
    })
    image.addEventListener('mouseout', function() {
        this.querySelector('.gallery__zoom-icon').classList.remove('gallery__zoom-icon--show');
    })
})
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
galleryImages.forEach((image) => {
    image.addEventListener('click', function(){
        console.log(this.querySelector('img').src);
        console.log(this)
        console.log('click')
        
        modal.classList.add('modal--open');
        modalImg.src = this.querySelector('img').src;
    })
})
const closeModal = document.querySelector('.modal__close');
closeModal.addEventListener('click', function(){
    modal.classList.remove('modal--open');
})

