import { useRouter } from 'next/router';
import styles from './KnowledgeCard.module.css';

const Card = ({ description, name, slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/sections/${slug}`);
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
