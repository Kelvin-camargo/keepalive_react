import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import Home from './pages/home';



export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Cadastro />} />
            <Route path='/home' element={<Home/>} />
        </Routes>
        </BrowserRouter>
        
    )
}