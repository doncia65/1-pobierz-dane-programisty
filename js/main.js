'use strict';

$(document).ready(function () {

    $('button').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('body').append($('<div id="dane-programisty"></div>').text(data.imie + ' ' + data.nazwisko + '. ' + data.zawod + ', ' + data.firma));
        })
    })
});