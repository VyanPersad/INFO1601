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
                                <img class="align-middle" src="${value.pic}">
                            </div>
                        </div>
                        <div class="card-footer text-center">
                            <div class="row mx-auto h3">
                                <p class="text-center m-0 p-0" style="font-family:'Tangerine'; font-size: 2.3rem;">${value.name}</p>
                            </div>
                        </div>
                    </div>
                </div> `;
        });
        $('#wineGallery').html(output);
    });
});