//theaterApp.controller("MoviesCtrl", function ($scope){
 
    //static list of movies
    /*var movies =
        [
            {
                "id": "BVwi1",
                "name": "Bag It",
                "averageRating": 4.6,
                "releaseYear": 2010,
                "url": "http://www.netflix.com/Movie/Bag_It/70153545",
                "rating": "NR"
            },
            {
                "id": "BW1Ss",
                "name": "Lost Boy: The Next Chapter",
                "averageRating": 4.6,
                "releaseYear": 2009,
                "url": "http://www.netflix.com/Movie/Lost_Boy_The_Next_Chapter/70171826",
                "rating": "NR"
            }
        ];
 
    $scope.movies = movies;
});*/

/*theaterApp.controller("MoviesCtrl", function ($scope, $http){
    $http.get("/js/data/movies.json")
        .then(function(results){
            //Success;
            console.log("Succss: " + results.status);
            $scope.movies = results.data;
        }, function(results){
            //error
            console.log("Error: " + results.data + "; "
                                  + results.status);
        })
});*/

theaterApp.controller("MoviesCtrl", function ($scope, $http){
    $http.get("/js/data/movies.json")
        .then(function(results){
            //Success;
            console.log("Succss: " + results.status);
            $scope.movies = results.data;
        }, function(results){
            //error
            console.log("Error: " + results.data + "; "
                + results.status);
        });

    $scope.addNewMovie = function(movieName){
        var movie = {name: movieName};
        $scope.movies.splice(0, 0, movie);
    }
});

/*
theaterApp.controller("MoviesCtrl", function ($scope, moviesService){
    //Executes when the controller is created
    $scope.movies = moviesService.movies;
 
    moviesService.getMovies();
 
    $scope.addNewMovie = function(movieName){
        var movie = {name: movieName};
        moviesService.addNewMovie(movie);
    }
});*/