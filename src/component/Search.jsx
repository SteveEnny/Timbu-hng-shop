import styles from "./Search.module.css";
function Search() {
  return (
    <form action="#" className={styles.search}>
      <img className={styles.search__icon} src="/search-button.svg" alt="#" />

      <input
        id="1"
        type="search"
        className={styles.search__input}
        placeholder="Search name"
      />
    </form>
  );
}

export default Search;
