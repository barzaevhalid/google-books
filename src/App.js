import React, { useState } from 'react';
import Main from "./components/pages/main/Main";
import Book from './components/pages/book/Book'
import {Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import s from './app.module.css'
import BookInfo from './components/pages/bookInfo/BookInfo';

const App = () => {
    const [bookId, setBookId] = useState('')

    const infoId = (id) => {
    setBookId(id)
}
    return (
       <div className={s.container}>
           <Header/>
          <Routes>
              <Route path='' element={ <Main infoId={infoId} />}/>
              <Route path='bookInfo' element={ <BookInfo id={bookId}/>}/>
          </Routes>
       </div>
    );
};

export default App;
