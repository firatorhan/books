import React from 'react';
import './BookList.css';
import Book from './Book';
import  { BookContext } from '../contexts/BookContext';
import  { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {


    render() {
        return (

            <ThemeContext.Consumer>{(contextTheme) => (
                <BookContext.Consumer>
                    {contextBook => {
                    
                    const { books } = contextBook;
                    const { isDarkTheme, dark, light, changeTheme } = contextTheme;
                    const theme = isDarkTheme ? dark : light;
                
                    return (
                        <section className="page-section" style={{background: theme.bg}} id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase" style={{color:theme.txt}}>BookFolio</h2>
                                <h3 className="section-subheading text-muted" style={{color:theme.subTxt}}>Lorem ipsum dolor sit amet consectetur.</h3>
                                <button type='button' className='btn btn-sm btn-info' style={{marginTop: '-70px'}} onClick={changeTheme}> Change Theme</button>
                            </div>
                            <div className="row">
        
                                {books.map((book, i) => {
                                    return <Book book={book}
                                        key={i}
                                    />
                                })}
        
                            </div>
                        </div>
                    </section>
                    )
                }}
            </BookContext.Consumer>
            )}


            </ThemeContext.Consumer>




        )
    }

}

export default BookList;