import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navigation from './Component/Navigation/Navigation';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import PostDetails from './Component/PostDetails/PostDetails';
import Navmenu from './Component/Navmenu/Navmenu';
import ViewComment from './Component/ViewComment/ViewComment';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <Navmenu></Navmenu>

                <Routes>
                    <Route path="/" element={<Navigation />} />;
                    <Route path="/post" element={<Navigation />} />;
                    <Route path="/post/fullPost/:id" element={<PostDetails />} />;
                    <Route path="/post/fullPost/comment/:userId" element={<ViewComment />} />;
                    ''

                    <Route path="*" element={<PageNotFound />} />;
                </Routes>
            </BrowserRouter>
        </div>

    );
};

export default Home;