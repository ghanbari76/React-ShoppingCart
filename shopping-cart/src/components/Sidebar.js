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
                <img width="64" height="64" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/external-menu-multimedia-kiranshastry-gradient-kiranshastry-1.png" alt="external-menu-multimedia-kiranshastry-gradient-kiranshastry-1"/>
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