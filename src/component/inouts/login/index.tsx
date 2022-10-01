import "react"
import "./index.scss"


function input(){
    return(
        <div className="inputs">
            <div className="usuario">
                <input className="usuario_email" type='email'  placeholder="Usuario" required></input>
            </div>
            
            <div className="senha">
                <input className="senha_password" type='password' placeholder="Senha" required></input>
            </div>


        </div>
    )
}


export default input;