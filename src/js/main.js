import './lib/lib';
import $ from './lib/lib';

$('button').setAttribute('data-aaa', 'data-value');

$('button').on('click', function() {
    $(this).toggleAttribute('data-aaa', 'data-value');
});


