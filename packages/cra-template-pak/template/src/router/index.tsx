import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Show from '../pages/show';
// const Home = React.lazy(() => import(/*webpackChunkName:'Home' */'../pages/home'));
// const Show = React.lazy(() => import(/*webpackChunkName:'Home' */'../pages/show'));

const App = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="show" element={<Show />} />
    </Routes>
)


export default App;