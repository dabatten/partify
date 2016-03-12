$(document).ready(function () {

    var artists = []; //list that holds selected artists
    var tracks = []; //list that holds all popular tracks for the selected artists

    //add search method
    $('#search').on('click', function () {
        var artistName = $('#artistQuery').val();
        searchArtists(artistName, function (res1) {
            var artist = res1.artists.items[0];
            console.log('artist', artist);
            artists.push(artist); //add original artist to list
            //find similar artists
            similarArtists(artist.id, function (res2) {
                var similar = res2.artists;
                console.log('similar', res2.artists);
                for (var i = 0; i < similar.length; i++) {
                    var artist_i = similar[i];
                    artists.push(artist_i); //add artist to list
                }
                generatePlaylist();
                setTimeout(function(){
                    console.log(tracks);
                }, 1000);
            });
        });
    });


    var generatePlaylist = function () {
        var i;
        var req_count = 0;
        for (i in artists) {
            if (req_count < 15) {
                getTracks(artists[i]);
            } else {
                break;
            }
            req_count++;

        }

    }

    function getTracks(artist) {

        fetchTopTracks(artist.id, function (res) {
            var tracklist = res.tracks;
            var j;
            for (j in tracklist) {
                var track = tracklist[j];
                tracks.push(track);
            }
        });
    }

});
