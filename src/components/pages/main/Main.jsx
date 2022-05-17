import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import s from './main.module.css'
import Book from '../book/Book'
import BookInfo from '../bookInfo/BookInfo'
const Main = ({ infoId }) => {
    const data = useSelector(state => state)
    return (
        <>
            <div className={s.wrapper}>
                {data.books ?
                    data.books.map((item) => {
                        return <div
                            key={item.id}>
                            <Link to={`/bookInfo/${item.id}`} onClick={() => infoId(item.id)}>{<Book item={item} />}</Link>
                        </div>
                    }) : null}
            </div>
            <button>load More</button>
        </>
    );
};

export default Main;
