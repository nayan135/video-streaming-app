import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
  return (<
        div >
    <
        h1 style={
        { textAlign: 'center' }} > React Video Streaming App < /h1> <
        VideoPlayer url="https://your-video-url.mp4" />
      <
        /div>
      );
};

      export default App;