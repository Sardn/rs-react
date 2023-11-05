import styles from './Pagination.module.css';

interface IPaginationProps {
  currentPage: number;
  allPage: number | null;
  nextPage(): void;
  prevPage(): void;
}

export default function Pagination({
  currentPage,
  allPage,
  nextPage,
  prevPage,
}: IPaginationProps) {
  return (
    <div className={styles.pagination}>
      <button
        className={
          currentPage === 1
            ? styles.button && styles.disablButton
            : styles.button
        }
        onClick={prevPage}
        disabled={currentPage === 1}
      >{`<`}</button>
      <h4 className={styles.page}>
        {currentPage} / {allPage ? allPage : currentPage}
      </h4>
      <button
        className={
          currentPage === allPage
            ? styles.button && styles.disablButton
            : styles.button
        }
        onClick={nextPage}
        disabled={currentPage === allPage}
      >{`>`}</button>
    </div>
  );
}
