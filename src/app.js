import style from './styles/style.scss';
//import bg-title from './images/Background-image.png';

import $ from 'jquery';

$(document).ready(function(){
//  $nav = $('.nav');
//  $toggleCollapse = $('.toggle-collapse');
  
  /* click event on toggle menu */
  $('.toggle-collapse').click(function(){
    $('.nav').toggleClass('collapse');
  })
});

//$('.site-title').css("background-image", "url(bt-title)");  