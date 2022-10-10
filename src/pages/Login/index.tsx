import { useState } from 'react';
import  './index.scss';

import Input from '../../component/inouts/login';
import logoP from '../../assets/cadastro/logop.svg';
import img_inicial from '../../assets/cadastro/img_inicial.png';
import { useNavigate } from 'react-router-dom';



function Cadastro() {

const continuar = useNavigate();

const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [invalidError, setInvalidError] = useState<boolean>(false);
    const [focus, setFocus] = useState({
      username: false,
      password: false,
  });
    const usernameref:any = (null)
    const passwordref:any = (null)


function validation (){

  let Regex = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/


  if (Regex.test(email) && senha.length > 3) {
    setInvalidError(false)
    continuar('/home')
} else {
  setInvalidError(true)
}
 
}

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='cadastro_login'>

        <h1>Olá,</h1>
        <p> 
            Para continuar navegando de forma<br/>
            segura, efetue o login na rede.
        </p>

        <h2>Login</h2>

        
        <Input email={email} senha={senha} setEmail={setEmail} setSenha={setSenha}/>
        {invalidError? <span style={{color:'#E9B425'}}>Ops, usuário ou senha inválidos.<br/> Tente novamente!</span>:<span></span>}
        

        <div className="continuar">
          <button onClick={ validation }>continuar</button>
        </div>

        <p className='pagina_cadastro'>
            se ja posue cadastro click aqui
        </p>
        
      </div>

      <div className='cadastro_imagem'>
          <div className='imagem_logoP'>
              <img className="logoP" src={logoP} alt="logo compass"/>
          </div>

          <div className='imagem__img_inicial'>
              <img className="img_inicial"src={img_inicial} alt="imagem de um notbook"/>
          </div>
      </div>

    </div>
  )
}

export default Cadastro;