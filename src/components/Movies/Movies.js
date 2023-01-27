import React, { useEffect, useState } from "react";

function MovieComponent() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);

    handleMoviesClick = (movieId) => {
        history.push(`/video/${movieId}`);
    } 

   

    useEffect(() => {

        //Fetch Most popular
        //const apiKey =  'insert apikey here'; - If database is using swagger, a get request should be sufficient / check CORS
        //const urlPopular = `www.endpoint`;
        //const urlUpcoming = `www.endpoint`;
        //const urlLatest = `www.endpoint`;

        fetch(urlPopular) 
        .then(response => response.json())
        .then(data => setPopularMovies(data.results))
        .catch(error => console.log(error));


        //Fetch upcoming
        fetch(urlUpcoming)
        .then(response => response.json())
        .then(data => setUpcomingMovies(data.results))
        .catch(error => console.log(error));
        
        //Fetch latest
        fetch(urlLatest)
        .then(response => response.json())
        .then(data => setLatestMovies(data.results))
        .catch(error => console.log(error));

    }, []);
    return ( 
        <div>
            <h1>Latest</h1>
            {latestMovies.slice(0, 10).map(movie => (
                <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
                    <img src={`endpoint${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title}</p>
                    </div>
            ))}
            {/* <img src="https://www.imdb.com/title/tt9764362/mediaviewer/rm1001914881/?ref_=tt_ov_i" alt="imageTest" /> */}


            <h1> Most Popular</h1>
            {popularMovies.slice(0,10).map(movie => (
                <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
                    <img src={`endpoint${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title}</p>
                    </div>
            ))}
            <img src="" alt="" />

        
            <h1> Upcoming</h1>
            {upcomingMovies.slice(0, 10).map(movie => (
                <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
                    <img src={`endpoint${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title}</p>
                    </div>
            ))}
            <img src="" alt="" />
        </div>
    )
}

export default MovieComponent