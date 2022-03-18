import styles from "../styles/Main.module.css";
import Profile from "./Profile";
import Data from "./Data";

const Main = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <div className={styles.userData}>
        <Data userDataNumbers="80K" userDataName="Followers" />
        <Data userDataNumbers="803K" userDataName="Likes" />
        <Data userDataNumbers="1.4K" userDataName="Photos" />
      </div>
    </div>
  );
};

export default Main;
