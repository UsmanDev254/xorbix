import videoFile from '../../assets/videos/videoplayback.mp4'; // Adjust path to your video file

function HomeBanner() {
    return (
        <div className="banner_main">
            <video 
                src={videoFile} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="banner_video" 
            />
            <div className="banner_overlay"></div>
            <div className="banner_child">
                <h1>Leading Artificial Intelligence and Machine Learning Software Development Company</h1>
            </div>
        </div>
    );
}

export default HomeBanner;
