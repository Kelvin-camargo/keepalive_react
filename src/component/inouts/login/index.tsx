import "react";
import "./index.scss";
import icon_user from '../../../assets/cadastro/icon_user.svg';
import icon_password from '../../../assets/cadastro/icon_password.svg';



function input({email,senha,setEmail,setSenha}:any){
    return(
        <div className="inputs">
            <div className="usuario">
                <input value={email} onChange={(event: any) => setEmail(event.target.value)} className="usuario_email" type='email'  placeholder="Usuario" required></input>
              
                <div className="icon_user">
                <img src={icon_user}/>
                </div>
            </div>
            
            <div className="senha">
                
                <input value={senha} onChange={(event: any) => setSenha(event.target.value)} className="senha_password" type='password' placeholder="Senha" required></input>
                <div className="icon_password">
                <img src={icon_password} alt="icon password"/>
                </div>
            </div>


        </div>
    )
}


export default input;