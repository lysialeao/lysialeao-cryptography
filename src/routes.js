import { Route, BrowserRouter, Routes as Router } from 'react-router-dom'


import OneTimePad from './partials/OneTimePad/OneTimePad'
import CaesarCipher from './partials/CaesarCipher/CaesarCipher'
import VigenereCipher from './partials/VigenereCipher/VigenereCipher'
import HillCipher from './partials/HillCipher/HillCipher'

import Home from './views/Home/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route element={<Home />} path='/' exact />
                <Route element={<OneTimePad />} path='/one-time-pad' exact />
                <Route element={<CaesarCipher />} path='/caesar-cipher' exact />
                <Route element={<VigenereCipher />} path='/vigenere-cipher' exact/>
                <Route element={<HillCipher />} path='/hill-cipher' exact />
            </Router>
        </BrowserRouter>
    )
}

export default Routes