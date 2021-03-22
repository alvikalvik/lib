import $ from '../core';

$.prototype.modal = function(isCreated = false) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].dataset.target;       

        $(this[i]).click( (evt) => {            
            if (evt.target) {
                evt.preventDefault();                
            }
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });   
        
        const closeElements = document.querySelectorAll(`${target} [data-close]`);

        closeElements.forEach( (elem) => {
            $(elem).click( (evt) => {
                if (evt.target) {
                    evt.preventDefault();                
                }
    
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (isCreated) {
                    document.querySelector(target).remove();
                }                
            });
        });
    
        $(target).click( function(evt) {
            if (evt.target === this) {            
                $(this).fadeOut(500);
                document.body.style.overflow = '';
                if (isCreated) {
                    document.querySelector(target).remove();
                } 
            }
        });
    }
}

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        // btns = {count: num, settings = [ [text, classNames=[], close, cb], [...] ]}
        const buttons = [];

        for (let j = 0; j < btns.count; j++) {
            const btn = document.createElement('button');
            const btnSettings = btns.settings[j];
            btn.classList.add('btn', ...btnSettings[1]);
            btn.textContent = btnSettings[0];

            if (btnSettings[2]) {
                btn.setAttribute('data-close', 'true');
            }

            if (btnSettings[3] && typeof(btnSettings[3]) === 'function') {
                btn.addEventListener('click', btnSettings[3]);
            }
            
            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        modal.querySelector(".modal-footer").append(...buttons);
        document.body.append(modal);

        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};

$('[data-toggle="modal"]').modal();