$('#artist').submit(function(e){
    e.preventDefault();
    artist = $('#artistInput').val();
    urlNew = 'https://api.soundcloud.com/tracks/?q=' + artist + '&client_id=03e4633e2d85874a921380e47cac705d';
    console.log(urlNew);
    $('#artistInput').val('');
    $('#info').html(``);
    $.ajax({
        url: urlNew,
         success: function(responce){
          
    }});
})
