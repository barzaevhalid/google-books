import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './bookInfo.module.css'
const BookInfo = (props) => {

    const key = process.env.REACT_APP_API_KEY
    const data = useSelector(state => state)
    const id = useParams('id')
    const [bookInf, setBookInf] = useState(null)
    console.log(bookInf)

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id.id}?key=${key}`)
            .then(data => data.json())
            .then(data => setBookInf(data))
            .catch(e => console.log(e))

    }, [])
    if (bookInf) {
        const {
            title = 'Нет заголовка',
            authors = ['Нет авторов'],
            categories = ['Нет категорий'],
            description = 'Нет текста'
        } = bookInf.volumeInfo

        const { thumbnail } = bookInf.volumeInfo.imageLinks

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
    } else {
        return <div>Ничего нет</div>
    }



};

export default BookInfo;