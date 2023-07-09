import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../pages/index.module.css";

export default function Home() {
  const [videoClicked, setVideoClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setVideoClicked(true);
  };

function handleBackClick() {
  window.location.reload();
}

  return (
    <div className={styles.container}>
      {!videoClicked ? (
        <video
          className={styles.fullscreenVideo}
          onClick={handleClick}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/landingPage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div>
          {videoClicked && <div className={styles.scanlinesOverlay}></div>}
          <div className={styles.browserWindow}>
            <h1 className={styles.title}>&gt;_ xtcy.love</h1>
            <div className={styles.buttonGrid}>
              <button
                className={styles.button}
                onClick={() => router.push("/art")}
              >
                <img src="/linkbutton.png" alt="Button" />
                <span>art</span>
              </button>
              <button
                className={styles.button}
                onClick={() => router.push("/music")}
              >
                <img src="/linkbutton.png" alt="Button" />
                <span>music</span>
              </button>
              <button
                className={styles.button}
                onClick={() => (window.location.href = "https://jyu.llc")}
              >
                <img src="/linkbutton.png" alt="Button" />
                <span>landing</span>
              </button>
              <button className={styles.button} onClick={handleBackClick}>
                <img src="/linkbutton.png" alt="Button" />
                <span>back</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          font-family: 'Pixel Operator', sans-serif;
        }
      `}</style>
    </div>
  );
}
