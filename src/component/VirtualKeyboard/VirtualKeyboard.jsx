import { KeyBoardLanguage } from '../KeyBoardLanguage/KeyBoardLanguage';
import styles from './VirtualKeyboard.module.css';

export const VirtualKeyboard = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.screenDiv}>
                <div className={styles.changeLayout}>
                    <KeyBoardLanguage/>
                </div>
            </div>
        </div>
    )
}