import { FaListUl } from "react-icons/fa"
import { createQueryObject } from '../helper/function';
import { categories } from '../constant/list';

//style
import styles from "./Sidebar.module.css";

const Sidebar = ({ query, setQuery }) => {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();

        if (tagName !== "LI") return;
        setQuery(query => createQueryObject(query, { category }))
    }
    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {categories.map((item) => 
                    <li 
                        key={item.id} 
                        className={item.type.toLowerCase() === query.category ? styles.selected : null }>
                            {item.type}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;