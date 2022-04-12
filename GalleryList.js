//Wine Gallery Display
$(document).ready(function () {
    $.getJSON('Menus/Wines.json', function (data) {
        var output = ' ';
        $.each(data.wine, function (key, value) {
            output = output +
                `<div class="card col-lg-2 col-md-2 mx-auto p-0 my-3"
                    <div class="mx-auto p-1">
                        <div class="card-body p-1">
                            <div class="row">
                                <img class="align-middle" id="wnImg" style="height:17vw" src="${value.pic}">
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <div class="row mx-auto h3">
                                <p class="text-center m-0 p-0" style="font-family:'Tangerine'; font-size: 2.3rem;">${value.name}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        $('#wineGallery').html(output);
    });
});

//Dessert Gallery Display
$(document).ready(function () {
    $.getJSON('Menus/Desert.json', function (data) {
        var output = ' ';
        $.each(data.desert, function (key, value) {
            output = output +
                `<div class="col-lg-5 col-md-5 col-sm-5 mx-auto">
            <div class="card my-3">
                <div class="card-body p-3">
                    <div class="row">
                        <img class="align-middle d-flex justify-content-center" style="height:15vw"
                            src="${value.pic}">
                    </div>
                </div>
                <div class="card-footer text-center">
                    <div class="row mx-auto h5">
                        <p class="text-center m-0 h1">${value.name}</p>
                        <p class="text-center m-0 fs-5" style="font-family: 'Gideon Roman'; color: rgb(156, 156, 156)">
                        ${value.desc}</p>
                    </div>
                </div>      
            </div>
        </div>`;
        });
        $('#DessertGallery').html(output);
    });
});

//Cocktail Gallery
$(document).ready(function () {
    $.getJSON('Menus/Drinks.json', function (data) {
        var output = ' ';
        $.each(data.cocktails, function (key, value) {
            output = output +
                `<div class="card col-lg-2 col-md-3 mx-auto p-0 my-2" style="height:fit-content;"
                    <div class="mx-auto p-1">
                        <div class="card-body p-1">
                            <div class="row">
                                <img class="align-middle" style="height:17vw;" src="${value.pic}">
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <div class="row mx-auto h3">
                                <p class="text-center m-0 p-0" style="font-family:'Tangerine'; font-size: 2rem;">${value.name}</p>
                            </div>
                            <p class="text-center h6 mx-auto" style="font-family:'Gideon Roman';">${value.description}</p>
                        </div>
                    </div>
                </div>`;
        });
        $('#cocktailGallery').html(output);
    });
});

//List beers
$(document).ready(function () {
    $.getJSON('Menus/Drinks.json', function (data) {
        var output = ' ';
        $.each(data.alco, function (key, value) {
            output = output +
                `<p class="h2 text-center m-3 p-0">${value.name}</p>`;
        });
        $('#beerlist').html(output);
    });
});

//List Non-Alcoholic Drinks
$(document).ready(function () {
    $.getJSON('Menus/Drinks.json', function (data) {
        var output = ' ';
        $.each(data.drink, function (key, value) {
            output = output +
                `<p class="h2 text-start m-0 p-0">${value.name}</p>`;
        });
        $('#nonAlcoList').html(output);
    });
});
