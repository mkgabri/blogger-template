import AOS from './vendor/aos.js';
import style from './styles/style.scss';
//import owl from './vendor/owl.carousel.min.js';

import $ from 'jquery';

$(document).ready(function(){
//  $nav = $('.nav');
//  $toggleCollapse = $('.toggle-collapse');
  
  /* click event on toggle menu */
  $('.toggle-collapse').click(function(){
    $('.nav').toggleClass('collapse');
  })
  
  // owl carousel for blog
//  $('.owl-carousel').owlCarousel();
  
  
  // click rto scroll up
  $('.move-up span').click(function() {
    console.log($('body').scrollTop());
    $('body').scrollTop(0);
  })
  
  AOS.init();
  
});
