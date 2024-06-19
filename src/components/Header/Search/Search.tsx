import { SearchIcon } from '../../../assets/Search';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
        <input type="text" placeholder="Поиск" className={styles['search__input']} />
        <button className={styles['search__button']} type='submit'>
            <SearchIcon />
        </button>
    </div>
  )
}

export default Search;
