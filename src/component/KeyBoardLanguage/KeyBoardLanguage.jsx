import { FaKeyboard } from 'react-icons/fa';
import styles from './KeyBoardLanguage.module.css';

export const KeyBoardLanguage = (props) => {
    return (
        <div className={styles.languageAndIcons}>
            <select className={styles.chooseLanguage}>
                <option value="">portugues</option>
                <option value="">espanhol</option>
                <option value="">ingles</option>
                <option value="">alemao</option>
                <option value="">japones</option>
            </select>

            <button>
                <FaKeyboard size={50} alt='virtual keyboard'/>
            </button>
        </div>
    )
}

