import styles from '../styles/Header.module.css';
import img from '../assets/images/bg-pattern-card.svg';

const Header = () => {
    return (
        <img src={img} alt="Header image" className={styles.header_image} />
    );
}

export default Header;