import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './bookInfo.module.css'
const BookInfo = () => {
    const data = useSelector(state => state)
    const id = useParams('id')
    console.log(id.id);

    const book = data.books.find(person => person.id === id.id);
    const { thumbnail = 'https://englex.ru/app/uploads/ways-to-say-no-in-english.png' } = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : 'Нет данных';
    const { description = 'Нет данных', title = 'Нет данных', authors = ['Нет данных'], categories = ['Нет данных'] } = book.volumeInfo

    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.img__wrapper} ><img className={s.img} src={thumbnail} alt="" /></div>
                <div className={s.content__wrapper}>
                    <div className="categories">Art / {categories.map(item => `${item}. `)}</div>
                    <h2 className="title">{title}</h2>
                    <div className={s.author}>{authors.map(item => `${item}. `)}</div>
                    <p className={s.description}>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default BookInfo;