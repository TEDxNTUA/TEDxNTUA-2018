
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
 const tether = require('tether');
 const popper = require('popper.js');
 const tooltip = require('tooltip.js');

require('./bootstrap');

const WOW = require('wowjs');
window.WOW = new WOW.WOW({ live: false });


window.WOW.init();

/* DISABLE Vue.js until it is needed

window.Vue = require('vue');

 **
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 *

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

*/
require('./home');
require('./jquery.pjax');
require('./ajax-navigation');
require('./nav-scroll');
require('./contact');
require('./lang-switch');
require('./eu-cookie');
require('./team');
