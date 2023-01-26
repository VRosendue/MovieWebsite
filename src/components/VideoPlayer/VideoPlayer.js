import React from 'react'

class VideoPlayer extends React.Component {
  state = {
    video: null,
    playing: false,
    currentTime: 0,
    dutation: 0,
    resolution: '720p'
  };

  componentDidMount() {
    axios.get(this.props.videoUrl)
    .then(response => {
        this.setState({ video: response.data });
    });
  //might need to call video in componentDidMount, videoData

    //this.setState({
       // video,
   // })
  }

  togglePlay = () => {
    this.setState({
        playing: !this.state.playing,
    });
  }

  togglePause = () => {
    this.setState({
        playing: this.state.playing,
    });
  }

  handleTimeUpdate = (event) => {
    this.setState({
        currentTime: event.target.currentTime,
    });
  };

  changeResolution = (resolution) => {
    this.setState({
        resolution,
    });
  };

  render() {
    const { video, playing, currentTime, resolution } = this.state;


  if (!video) {
    return <p>Loading video... Please wait</p>
  }

    return (
        <div>
        <video src={video.url[resolution]} 
        playing={playing} 
        onClick={this.togglePlay}
        onTimeUpdate={this.handleTimeUpdate} />
        <div>
            {playing? (
                <button onClick={this.togglePlay}>Play</button>
            ): (
                <button onClick={this.togglePlay}>Play</button>
            )}
            {video.resolution.map((res) => ())}

        </div>
        </div>
    );
  }
}





export default VideoPlayer;