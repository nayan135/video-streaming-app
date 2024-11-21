import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
    return (<
        div style={
            { display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
        <
            ReactPlayer url={url}
            controls width="80%"
            height="auto" /
        >
        <
        /div>
        );
};

        export default VideoPlayer;