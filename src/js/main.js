import "./slider";
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import timer from './modules/timer';
import images from './modules/images';
import changeModalState from './modules/changeModalState';
window.addEventListener('DOMContentLoaded', function () {

    let modalState = {};
    let deadline = '2022-12-12';
    changeModalState(modalState);
    modal();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();

});