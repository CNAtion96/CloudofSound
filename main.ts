var songURL = '';


$('#artist').submit(function(e){
    e.preventDefault();
    var artist = $('#artistInput').val();
    var urlNew = 'https://api.soundcloud.com/tracks/?q=' + artist + '&client_id=03e4633e2d85874a921380e47cac705d';
    console.log(urlNew);
    $('#artistInput').val('');
    $('#artistOutput').html(``);
    $.ajax({
        url: urlNew,
         success: function(responce){
            console.log(responce);
            responce.forEach(function(song){
                var sId = song.id;
                songURL = 'http://api.soundcloud.com/tracks/'+ sId +'/stream?client_id=03e4633e2d85874a921380e47cac705d';
                if(song.artwork_url === null){
                     $('#artistOutput').append(`<div class="col-md-3 song">
                            <div class="songImage" style="background-image: url(not-found.jpg);">
                                <div class="play"><img src="arrow.svg"></div>
                            </div>
                            <p>${song.title}<p>
                        </div>`);
                } else {
                    $('#artistOutput').append(`<div class="col-md-3 song">
                            <div class="songImage" style="background-image: url(${song.artwork_url})">
                                <div class="play"><img src="arrow.svg"></div>
                            </div>
                            <p>${song.title}<p>
                        </div>`);
                }
                return songURL;
             })
            
         }
    });
})

$('body').on('click','.play' ,function(){
    console.log(songURL);
    var id = $(this).data('id');
    $('#audio').attr('src', songURL);
})