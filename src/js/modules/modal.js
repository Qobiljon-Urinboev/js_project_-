const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, colseClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();
        windows.forEach(item => {
            item.style.display = "none";
        });


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
                // document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
            windows.forEach(item => {
                item.style.display = "none";
            });
            // document.body.style.overflow = '';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && colseClickOverlay) {
                modal.style.display = "none";
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
                windows.forEach(item => {
                    item.style.display = "none";
                });
                // document.body.style.overflow = '';
            }
        });
    }
    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = '';
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // showModalByTime('.popup', 60000);
};

export default modal;