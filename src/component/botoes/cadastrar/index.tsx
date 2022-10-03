import  "react";
import  "./index.scss"
import {useNavigate} from 'react-router-dom'


function Botao_continuar (){

    const continuar = useNavigate();

    return(
        <div className="continuar">
            <button onClick={() => continuar('/home')}>
                Contnuar
            </button>
        </div>
    )
}

export default Botao_continuar