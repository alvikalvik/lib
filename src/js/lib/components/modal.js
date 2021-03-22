import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].dataset.target;       

        $(this[i]).click( (evt) => {            
            if (evt.target) {
                evt.preventDefault();                
            }
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });        
    }

    const closeElements = document.querySelectorAll('[data-close]');

    closeElements.forEach( (elem) => {
        $(elem).click( (evt) => {
            if (evt.target) {
                evt.preventDefault();                
            }

            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        });
    });

    $('.modal').click( function(evt) {
        if (evt.target === this) {            
            $(this).fadeOut(500);
            document.body.style.overflow = '';               
        }
    });
}

$('[data-toggle="modal"]').modal();