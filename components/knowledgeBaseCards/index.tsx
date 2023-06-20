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
        <p>Card content</p>
      </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>Talk to a Human?</h3>
        <p>Card content</p>
      </div>
    </div>
  </div>
);

export default KnowledgeCards;
