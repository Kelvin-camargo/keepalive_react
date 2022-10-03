import 'react';
import './index.scss';
import {useNavigate} from 'react-router-dom'




export default function home_button(){
    const home_button = useNavigate();
    return(
        <div className='button'>
            <button className='continuar_navegando'onClick={() => window.open("https://compass.uol/")}>
                continuar<br/>
                navegando
            </button>

            <button className='logout'onClick={() => home_button('/')}>
                Logout
            </button>
        </div>
    )
}