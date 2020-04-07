import React from 'react';


const SimplePagination = ({ offset, limit, total, onClick }) => {

    const pageNumbers = Math.ceil(total / limit)
    return (
        <div className="pagination flex horizontal">
            {
                [...Array(pageNumbers).keys()].map((number, index) => {
                    const numberCurrentPage = number * limit
                    console.log(offset)
                    return (
                        <div 
                            className={`pagination-item ${numberCurrentPage === offset ? 'pagination-item-active' : "teste"}`}
                            key={index}
                            onClick={() => onClick(numberCurrentPage)}
                        >
                            { number + 1}

                        </div>
                    )
                })
            }
        </div>
    );
}

export default SimplePagination;
