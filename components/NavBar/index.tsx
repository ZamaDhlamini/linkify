import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
