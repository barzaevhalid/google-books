import React from 'react';
import s from './book.module.css'
const Book = ({ item }) => {

    const {
        authors = ['Нет данных'],
        categories = 'Нет данных',
        title = 'Нет данных'
    } = item.volumeInfo

    const { thumbnail = null, smallThumbnail = null } = item.volumeInfo.imageLinks || ''
    const img = thumbnail || smallThumbnail || 'https://englex.ru/app/uploads/ways-to-say-no-in-english.png'
    const shortTitle = title.length > 15 ? title.slice(0, 20) : title || ''
    const author = authors.map(item => {
        return `${item}. `
    })
    return (
        <div className={s.book}>
            <div>
                <div className={s.img}><img src={img} alt="" /></div>
                <div className={s.categories}>{categories}</div>
                <div className={s.title}>{shortTitle}...</div>
                <div className={s.author}>{author}</div>
            </div>
        </div>
    );
};

export default Book;
