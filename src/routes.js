import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Book from './pages/Book';
import HomePage from './pages/Home';
const Routes = ({ children }) => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/book/:bookId">
                    <Book />
                </Route>
            </Switch>
            {children}
        </>
    )
}
export default Routes;