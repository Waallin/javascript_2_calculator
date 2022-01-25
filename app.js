

$(document).ready(function () {
    let numbersAdded = []; //array att samla tal


    $('#add').click(function () { //Plusknappen

        let calcText = '';


        //lägger till array som gör uträkning
        let addNumber = parseInt($('#text').val())
        numbersAdded.push(addNumber)

        if (numbersAdded.length > 1) {
            calcText = $('#text').val();
            $('#calc').append(' + ' + calcText);
            calcText = '';

        } else {

            //lägger till i HTML
            calcText = $('#text').val();
            $('#calc').append(calcText);
            calcText = '';

        }


    })

    $('#sub').click(function () { //Minusknappen


        let addNumber = parseInt($('#text').val())
        numbersAdded.push(-addNumber)

        if (numbersAdded.length > 1) {
            calcText = $('#text').val();
            $('#calc').append(' - ' + calcText);
            calcText = '';

        } else {

            //lägger till i HTML
            calcText = $('#text').val();
            $('#calc').append(calcText);
            calcText = '';

        }

    })

    $('#sum').click(function () { //Summeraknappen

        let reduce = (a, b) => a + b;
        let sum = (numbersAdded.reduce(reduce));
        $('#sumP').html(sum)
    })
});


//---------TODO--------//
/*
tömma all DOM efter uträkningen

VG - uppgift
*/

