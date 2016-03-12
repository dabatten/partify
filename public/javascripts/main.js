$(document).ready(function(){

    //add search method
    $('#search').on('click', function(){
        var artistName = $('#artistQuery').val();
        searchArtists(artistName, function(response){
            console.log(response.artists.items[0]);
        });
    })
});
