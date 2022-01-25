

$(document).ready(function () {



    let numbersAdded = []; //array att samla tal

    function add() { //plusfunktion

        if ($('#sumP').html.length > 1) {
            $('#sumP').html('')
        }

        //lägger till array som gör uträkning

        let addNumber = parseFloat($('#text').val())

        if (numbersAdded == 0) { //tar bort uträkning för en ny uträkning
            $('#sumP').html('');
        }

        if (!isNaN(addNumber)) { //Checkar så att det är ett nummer innan det läggs till i arrayen
            numbersAdded.push(addNumber)

            if (numbersAdded.length > 1) {

                calcText = $('#text').val();
                $('#calc').append(' + ' + calcText);
                $('#text').val('')

            } else {

                //lägger till i HTML
                calcText = $('#text').val();
                $('#calc').append(calcText);
                $('#text').val('')
            }
        }


    }

    function sub() { //minusfunktion

        let addNumber = parseFloat($('#text').val())

        if (numbersAdded == 0) { //tar bort uträkning för en ny uträkning
            $('#sumP').html('');
        }

        if (!isNaN(addNumber)) { //Checkar så att det är ett nummer innan det läggs till i arrayen
            numbersAdded.push(-addNumber)

            if (numbersAdded.length > 0) {
                calcText = $('#text').val();
                $('#calc').append(' - ' + calcText);
                $('#text').val('')

            } else {

                //lägger till i HTML
                calcText = $('#text').val();
                $('#calc').append(calcText);
                $('#text').val('')

            }

        }

    }

    function sum() { //funktion att summera talet 
        let reduce = (a, b) => a + b;
        let sum = (numbersAdded.reduce(reduce));
        $('#sumP').html(sum)
        $('#calc').html('');
        numbersAdded = [];

    }

    $('#add').click(function () { //Plusknappen
        add()
    })

    $('#sub').click(function () { //Minusknappen
        sub()
    })

    $('#sum').click(function () { //Summeraknappen
        sum();
    })


    //keypress till tangentbordet
    $(document).keydown(function (e) {
        switch (e.which) {
            case 107: //Plustecken
                add()
                break;
            case 187: //Lika-med tecken
                sum()
                break;
            case 109: //Minustecken
                sub()
                break;
            case 13: //Enter triggar lika som lika-med tecken
                sum()
        }
    })


    //raderar texten i inputen
    $(document).keyup(function (e) {
        switch (e.which) {
            case 107:
                $('#text').val('')
                break;
            case 187:
                $('#text').val('')
                break;
            case 109:
                $('#text').val('')
                break;
            case 13:
                $('#text').val('')
        }
    })


});




//---------TODO--------//
/*
tömma all DOM efter uträkningen fixad

utseende fixad

Annat textsnitt på text i dom? 
andra finesser?

VG - uppgift fixad

Buggar:
går ej att få med decimaltal Fixad (parseFloat ist för parseInt)
Plus och minus blir med i #text-input fixad

*/

