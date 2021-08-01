import React from 'react';
import NavBar from '../../components/NavBar';

const BasicLayout = ({ children }) => {
    return (<>
        <NavBar />
        {children}
    </>)
}
export default BasicLayout;