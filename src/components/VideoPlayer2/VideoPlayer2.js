import React, {useEffect, useState} from 'react';

function VideoPlayer2() {
    const [videoData, setVideoData] = useState(null);
    const [resolution, setResolution] = useState('480p');
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {
        const url = 'http://min-server.dk/MyTube/api/v1/video/435'
        const fetchData = async () => {
            try {
                const reponse = await fetch(url);
                const json = await Response.json();
                console.log(json);
            } catch(error) {
                console.log("error", error);
            }
        };
        setVideoData(json);
    }, []);

    const changeResolution = (newResolution) => {
        setResolution(newResolution)
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };


  return (
    <div>
        {videoData && (
        <video src={videoData.url} controls />
        )}
        <label>
            Resolution:
            <select>
                {videoData.resolutions.map(resolution =>  (
                    <option value={resolution}></option>
                ))}
            </select>
        </label>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}
        </button>
    </div>
  );
}

export default VideoPlayer2