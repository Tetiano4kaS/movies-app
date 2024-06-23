import React, {FC} from 'react';

interface IProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}
const totalPages = 500;
const PaginationComponent: FC<IProps> = ({currentPage, onPageChange}) => {
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages ) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        let startPage = Math.max(2, currentPage - 4); // починаємо з 2, щоб перша сторінка завжди була видима
        let endPage = Math.min(totalPages - 1, currentPage + 3); // закінчуємо за одну до останньої сторінки

        if (currentPage <= 5) {
            endPage = Math.min(9, totalPages - 1);
        } else if (currentPage + 3 >= totalPages) {
            startPage = Math.max(2, totalPages - 8);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <div>
            <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                Попередня
            </button>
            <button onClick={() => handlePageClick(1)} style={{fontWeight: currentPage === 1 ? 'bold' : 'normal'}}>
                1
            </button>
            {currentPage > 5 && <span>...</span>}
            {renderPageNumbers().map(page => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    style={{fontWeight: currentPage === page ? 'bold' : 'normal'}}
                >
                    {page}
                </button>
            ))}
            {currentPage + 3 < totalPages && <span>...</span>}
            <button onClick={() => handlePageClick(totalPages)}
                    style={{fontWeight: currentPage === totalPages ? 'bold' : 'normal'}}>
                {totalPages}
            </button>
            <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                Наступна
            </button>
        </div>
    );
};

export default PaginationComponent;
