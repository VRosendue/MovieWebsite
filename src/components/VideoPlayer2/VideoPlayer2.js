import React, {useEffect, useState} from 'react';


const PlayableVideo = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const fetchAndPlayVideo = async () => {
        try {
          const mediaBlobUrl = 'ENDPOINT fra fnug'; 
  
          // Fetch the media blob
          const mediaBlob = await fetch(mediaBlobUrl).then(response => response.blob());
  
          // Create a File object
          const myFile = new File([mediaBlob], "demo.mp4", { type: 'video/mp4' });
  
          // Set the File object as the source of the video element
          videoRef.current.src = URL.createObjectURL(myFile);
  
          // Play the video
          videoRef.current.play();
        } catch (error) {
          console.error('Error fetching or playing video:', error);
        }
      };
  
      fetchAndPlayVideo();
  
      // Cleanup URL object when the component unmounts
      return () => {
        URL.revokeObjectURL(videoRef.current.src);
      };
    }, []);
  // todo event listener for clicking title id. 
    return (
        <div>
        {latestMovies.slice(0, 10).map(movie => (
          <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
            {/* fix end point here and setup path corectly */}
            <img src={`endpoint${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <video controls width="600" height="400">
                {/*url path for movie. */}
              <source src={`your_video_url_for_movie_${movie.id}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    );
  };
  
  export default PlayableVideo;


