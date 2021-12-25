import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Impacts, Resources, News} from './pages';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impacts" element={<Impacts />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
        </Routes>
    </Router>, 
    document.getElementById('root')
);
