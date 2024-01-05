import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRouters, publicRouters} from '../routers'

const AppRouters = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRouters.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            {publicRouters.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
        </Routes>
    );
};

export default AppRouters;