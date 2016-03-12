//get top tracks for an artist
var fetchTopTracks = function (artistId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + artistId + "/top-tracks?country=US",
        success: function (response) {
            callback(response);
        }
    });
};

//search for an artist by name
var searchArtists = function (artistQuery, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: artistQuery,
            type: 'artist'
        },
        success: function (response) {
            console.log(response);
            callback(response);
        }
    });
};

//get similar artists
var similarArtists = function(artistId, callback){
    $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + artistId + '/related-artists',
        success: function(response) {
            callback(response);
        }
    });
}
