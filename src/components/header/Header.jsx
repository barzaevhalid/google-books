import React, { useEffect, useState } from 'react';
import s from './header.module.css'
import { searchAction, categoriesAction, searchPending } from "../../actions/searchAction";
import { useDispatch, useSelector } from "react-redux";

const key = process.env.REACT_APP_API_KEY


const Header = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const href = window.location.href.split('#')[0]

    const params = href.split('?')[1]?.split('&')?.reduce((acc, str) => {
        const values = str.split('=')
        acc[values[0]] = values[1]

        return acc
    }, {})

    const [select, setSelect] = useState(params?.select || 'all')

    useEffect(() => {
        dispatch(searchPending())
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${params?.select || 'all'}&${search}&key=${key}&maxResults=40`)
            .then(data => data.json())
            .then(data => dispatch(searchAction(data)))
            .then(data => console.log(data))
            .catch(e => console.log(e))
        setSelect(params?.select || 'all')



    }, [])





    const handleSelect = (e) => {
        dispatch(categoriesAction(select))

        window.location.href = `/?select=${e.target.value}`

    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const onSearch = (e) => {
        e.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${select}&${search}&key=${key}&maxResults=40`)
            .then(data => data.json())
            .then(data => dispatch(searchAction(data)))
            .catch(e => console.log(e))
    }
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <h1>Search Books</h1>

                <form className={s.header__form} onSubmit={onSearch}>
                    <input
                        type="text"
                        className={s.search__input}
                        onChange={(e) => { handleSearch(e) }}
                        value={search}
                        placeholder='Введите текст'
                    />
                    <button type='submit' className={s.btn__search}>Поиск</button>
                    <div className={s.sort}>
                        <div >
                            <span>Categories</span>
                            <select className={s.sort_item}
                                onChange={(e) => handleSelect(e)}
                                selected value={select}>
                                <option>all</option>
                                <option>art</option>
                                <option>computers</option>
                                <option>history</option>
                                <option>medical</option>
                                <option >poetry</option>
                            </select>
                        </div>
                        {/* <div>
                            <span>Sorting by</span>
                            <select
                                className={s.sort_item}
                            >
                                <option></option>
                            </select>
                        </div> */}
                    </div>
                </form>
            </div>


        </header>

    );
};

export default Header;
