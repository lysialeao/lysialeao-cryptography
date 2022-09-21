import { Route, BrowserRouter, Routes as Router } from 'react-router-dom'

import Home from './views/Home/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route element={<Home />} path='/' exact />
            </Router>
        </BrowserRouter>
    )
}

export default Routes