import { useState } from 'react';
import  './index.scss';
import Botao from '../../component/botoes/continuar';
import Input from '../../component/inouts/login';
import logoP from '../../assets/cadastro/logoB.svg'
import img_inicial from '../../assets/cadastro/img_inicial.png'


function Cadastro() {
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

        <Input />
        <Botao />
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