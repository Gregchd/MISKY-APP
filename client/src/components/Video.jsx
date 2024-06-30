import React from 'react'

function Video({videoLink}) {

    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : null;
    };

    const videoId = getYouTubeId(videoLink);

    return (
        <div className="video-responsive">
            <iframe
                width="1280"
                height="720"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            ></iframe>
        </div>
    )
}

export default Video