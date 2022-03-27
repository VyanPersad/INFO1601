//Appetizer Menu Display
$(document).ready(function() {
    $.getJSON('Menus/Appetizer.json', function(data) {
        var output = ' ';
        $.each(data.appetizer, function(key, value) {
            output = output+ 
            `<li class="card m-1 p-1"> 
                <div class="row p-3">
                    <div class="col-3">${value.item}</div>
                    <div class="col-3">${value.name} </div>
                    <div class="col-3">${value.serves}</div>
                    <div class="col-3">${value.price}</div>
                </div>
            </li>`;
        });$('#app').html(output);
    });
});

//Main Menu Display
$(document).ready(function() {
    $.getJSON('Menus/Main.json', function(data) {
        var output = ' ';
        $.each(data.main, function(key, value) {
            output = output+ 
            `<li class="card m-1 p-1"> 
                <div class="row p-3">
                    <div class="col-1">${value.item}</div>
                    <div class="col-2">${value.name}</div>
                    <div class="col-4">${value.desc}</div>
                    <div class="col-2">${value.serves}</div>
                    <div class="col-3">${value.price}</div>
                </div>
            </li>`;
        });
        $('#main').html(output);
    });
});

//Wine Display
$(document).ready(function() {
    $.getJSON('Menus/Wines.json', function(data) {
        var output = ' ';
        $.each(data.wine, function(key, value) {
            output = output+ 
            `<li class="card m-1 p-1"> 
                <div class="row p-3">
                    <div class="col-3">${value.item}</div>
                    <div class="col-3">${value.name}</div>
                    <div class="col-3">${value.serves}</div>
                    <div class="col-3">${value.price}</div>
                </div>
            </li>`;
        });
        $('#wine').html(output);
    });
});

//Desert Display
$(document).ready(function() {
    $.getJSON('Menus/Desert.json', function(data) {
        var output = ' ';
        $.each(data.desert, function(key, value) {
            output = output+ 
            `<li class="card m-1 p-1"> 
                <div class="row p-3">
                    <div class="col-3">${value.item}</div>
                    <div class="col-3">${value.name}</div>
                    <div class="col-3">${value.serves}</div>
                    <div class="col-3">${value.price}</div>
                </div>
            </li>`;
        });
        $('#desert').html(output);
    });
});