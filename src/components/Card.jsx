import styles from '../styles/Card.module.css';
import Header from './Header';
import Main from './Main';

const Card = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
        </div>
    );
}

export default Card;