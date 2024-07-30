import MessageProps from "../Interfaces/MessageProps";
import styles from '../Styles/Message.module.scss';

const Message: React.FC<MessageProps> = ({ message , onClose}) => 
{
    return (
        <>
          <div className={styles.overlay} onClick={onClose}></div>
          <div className={styles.popup}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </>
      );
};  

export default Message;