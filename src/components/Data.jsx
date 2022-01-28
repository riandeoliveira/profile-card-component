import styles from '../styles/Data.module.css';

const Data = props => {
    return (
        <div className={styles.container}>
            <span className={styles.user_data_name}>{props.userDataName}</span>
            <span className={styles.user_data_numbers}>{props.userDataNumbers}</span>
        </div>
    );
}

export default Data;