import { useState } from 'react';
import Link from 'next/link';
import styles from '../pages/art.module.css';

const collections = [
  {
    name: 'xtcy.opium',
    art: [
      { src: 'collections/c1/1.png', description: '1' },
      { src: 'collections/c1/2.png', description: '2' },
      // Add more art here...
    ],
  },
  {
    name: 'xtcy.paint',
    art: [
      { src: 'collections/c2/1.png', description: '1' },
      { src: 'collections/c2/2.png', description: '2' },
      { src: 'collections/c2/3.png', description: '3' },
      { src: 'collections/c2/4.png', description: '4' },
      // Add more art here...
    ],
  },
  {
    name: 'xtcy.love',
    art: [
      { src: 'collections/c3/1.png', description: '1' },
      { src: 'collections/c3/2.png', description: '2' },
      { src: 'collections/c3/3.png', description: '3' },
      { src: 'collections/c3/4.png', description: '4' },
      // Add more art here...
    ],
  },
  // Add more collections here...
];

export default function Art() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        &lt; back
      </Link>

      <div className={styles.tabs}>
        {collections.map((collection, index) => (
          <button
            key={index}
            className={styles.tab}
            onClick={() => setActiveTab(index)}
          >
            {collection.name}
          </button>
        ))}
      </div>

      <div className={styles.art}>
        {collections[activeTab].art.map((art, index) => (
          <div key={index} className={styles.artPiece}>
            <img src={art.src} alt={art.description} />
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}