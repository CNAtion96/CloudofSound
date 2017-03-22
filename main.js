var songURL = '';
$('#artist').submit(function (e) {
    e.preventDefault();
    var artist = $('#artistInput').val();
    var urlNew = 'https://api.soundcloud.com/tracks/?q=' + artist + '&client_id=03e4633e2d85874a921380e47cac705d';
    console.log(urlNew);
    $('#artistInput').val('');
    $('#artistOutput').html("");
    $.ajax({
        url: urlNew,
        success: function (responce) {
            console.log(responce);
            responce.forEach(function (song) {
                var sId = song.id;
                if (song.artwork_url === null) {
                    $('#artistOutput').append("<div class=\"col-md-3 song\">\n                            <div class=\"songImage\" style=\"background-image: url(not-found.jpg);\">\n                                <div class=\"play\" data-id=\"" + sId + "\"><img src=\"arrow.svg\"></div>\n                            </div>\n                            <p>" + song.title + "<p>\n                        </div>");
                }
                else {
                    $('#artistOutput').append("<div class=\"col-md-3 song\">\n                            <div class=\"songImage\"  style=\"background-image: url(" + song.artwork_url + ")\">\n                                <div class=\"play\" data-id=\"" + sId + "\"><img src=\"arrow.svg\"></div>\n                            </div>\n                            <p>" + song.title + "<p>\n                        </div>");
                }
            });
        }
    });
});
$('body').on('click', '.play', function () {
    var id = $(this).data('id');
    console.log(id);
    var urlSource = "http://api.soundcloud.com/tracks/" + id + "/stream?client_id=03e4633e2d85874a921380e47cac705d";
    $('#audio').attr('src', urlSource);
});
