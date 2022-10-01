import  "react";
import  "./index.scss"
import {useNavigate} from 'react-router-dom'


function Botao (){

    const navigate = useNavigate();

    return(
        <div className="continuar">
            <button onClick={() => navigate('/home')}>
                Contnuar
            </button>
        </div>
    )
}

export default Botao