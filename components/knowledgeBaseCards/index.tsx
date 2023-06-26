import React from 'react';
import styles from './KnowlegdeBaseCards.module.css';

const KnowledgeCards: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>Card title</h3>
        <p>Card content</p>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>Popular Articles</h3>
        <p>How to apply for grant</p>
        <p>How to link my SASSA Card</p>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>Talk to a Human?</h3>
        <p>Can't Find the answer to your question? Talk to a human being</p>
        <p>+27 1166 63783 7833</p>
      </div>
    </div>
  </div>
);

export default KnowledgeCards;
