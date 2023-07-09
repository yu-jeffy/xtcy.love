import React from "react";
import Link from "next/link";
import styles from "./music.module.css";

const Music = () => (
  <div className={styles.musicContainer}>
    <Link href="/" className={styles.backLink}>
      &lt; back
    </Link>

    <div className={styles.playlist}>
      <iframe
        className={styles.spotifyIframe}
        src="https://open.spotify.com/embed/playlist/2StKPmSEQp3qAxWvQfP9jN?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div className={styles.playlist}>
      <iframe
        className={styles.spotifyIframe}
        src="https://open.spotify.com/embed/playlist/14s5BhP0StfWq5JNaZc9gE?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

    <div className={styles.playlist}>
      <iframe
        className={styles.spotifyIframe}
        src="https://open.spotify.com/embed/playlist/6oVCnLfOi3FUUbRFu512ff?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

  </div>
);

export default Music;
