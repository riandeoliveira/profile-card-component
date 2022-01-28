import styles from '../styles/Profile.module.css';
import img from '../assets/images/image-victor.jpg';

const Profile = () => {
    return (
        <div className={styles.container}>
            <img src={img} alt="User profile image" className={styles.profile_picture} />
            <div className={styles.user_info}>
                <h1 className={styles.user_name}>Victor Crest <span className={styles.user_age}>26</span></h1>
                <span className={styles.user_city}>London</span>
            </div>
        </div>
    );
}

export default Profile;