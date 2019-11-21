import React from 'react';

export const TrailerPlayer = ({ youtubeId }) => {
  return (
    <div
      className='video'
      style={{
        position: "relative",
        paddingBottom: "53%",
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        title={youtubeId}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&controls=0&autoplay=1&iv_load_policy=3&&showinfo=0`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};
