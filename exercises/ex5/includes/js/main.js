$(document).ready(function () {
    $.getJSON("data/MOCK_DATA.json" , function (data) {
    console.log(data)
    
    for (row of data) {
        var table_row = $(
            '<tr>' +
                '<th scope="row">' + row.id + '</th>' +
                '<td>' + row.date + '</td>' +
                '<td>' + row.country + '</td>' +
                '<td>' + row.city + '</td>' +
                '<td>' + row.temp_c+ '</td>' +
                '<td>' + row.temp_f + '</td>' +
            '</tr>'
        )
        var option = $(
            '<option>' + row.country + '</option>'
        )
        $('#country').append(option)
        $('tbody').append(table_row)
    }


    });
});