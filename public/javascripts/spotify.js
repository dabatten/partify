/* Functions for using the Spotify API */

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

//remove all explicit songs from a list of tracks
var filterExplicit = function(tracklist){
    tracklist.filter(function(t){
        return !(t.explicit)
    })
}

//sort tracks most-popular to least-popular
var sortTrackByPopularity = function(tracklist){
    tracklist.sort(function(a,b){
        return b.popularity - a.popularity;
    })
}

//sort tracks least-to-most popular
var sortTrackByDeepCuts = function(tracklist){
    tracklist.sort(function(a,b){
        return a.popularity - b.popularity;
    })
}


