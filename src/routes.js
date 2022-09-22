import { Route, BrowserRouter, Routes as Router } from 'react-router-dom'


import OneTimePad from './partials/OneTimePad/OneTimePad'
import CifraDeCesar from './partials/CifraDeCesar'

import Home from './views/Home/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route element={<Home />} path='/' exact />
                <Route element={<OneTimePad />} path='/one-time-pad' exact />
                <Route element={<CifraDeCesar />} path='/cifra-de-cesar' exact />
            </Router>
        </BrowserRouter>
    )
}

export default Routes