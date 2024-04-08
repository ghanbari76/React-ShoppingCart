import { createQueryObject } from '../helper/function';
//style
import styles from "./SearchBox.module.css";

const SearchBox = ({search,setSearch,setQuery}) => {
    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { search }))
    };

    return (
        <div className={styles.search}>
            <input 
                type='text' 
                placeholder="I'm shopping for..." 
                value={search} 
                onChange={event => setSearch(event.target.value.toLowerCase().trim())} 
            />
            <button onClick={searchHandler}>Search</button>
        </div>
    );
};

export default SearchBox;