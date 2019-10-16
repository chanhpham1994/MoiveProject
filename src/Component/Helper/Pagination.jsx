import React from 'react'

const Pagination = ({ soNgTrongTrang, tongSoNguoi , paginate }) => {

    const soTrang = [];

    for (let i = 1; i <= Math.ceil(tongSoNguoi / soNgTrongTrang); i++) {
        soTrang.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {soTrang.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={()=> paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Pagination