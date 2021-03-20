import './lib/lib';
import $ from './lib/lib';

// $('button').setAttribute('data-aaa', 'data-value');

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').eq(1).siblings());

// console.log($('button').html('1223'));

// console.log($('div').eq(4));

$('button').fadeOut(1800, () => {$('button').fadeIn(1800);});