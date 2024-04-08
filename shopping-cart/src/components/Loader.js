import { RotatingLines }from "react-loader-spinner";

//style
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <RotatingLines 
                width="100px" 
                heigth="100px" 
                strokeWidth="3" 
                strokeColor="#fe5d42" 
            />
        </div>
    );
};

export default Loader;