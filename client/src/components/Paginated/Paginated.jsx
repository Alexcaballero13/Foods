import React from "react";
import styles from './Paginated.module.css'

export default function Paginated({ recipesPerPage, recipe, paginated, current }) {
    const totalPages = Math.ceil(recipe / recipesPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <footer className={styles.Pages}>
            {current !== 1 && (
                <button className={styles.buttonPages} onClick={() => paginated(current - 1)} disabled={current === 1}>{'prev'}</button>
            )}
            {pageNumbers.map(number => (
                <button
                    key={number}
                    className={styles.buttonPages}
                    onClick={() => paginated(number)}
                    disabled={current === number}
                >
                    {number}
                </button>
            ))}
            {current < totalPages && (
                <button className={styles.buttonPages} onClick={() => paginated(current + 1)}>{'next'}</button>
            )}
        </footer>
    );
}