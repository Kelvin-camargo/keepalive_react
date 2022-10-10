import 'react';
import "./index.scss";
import logop from '../../assets/home/logop.svg';
import Temperatura from '../../assets/home/temperatura.svg';
import bola_logo from '../../assets/home/bola_logo.svg';
import Botoes from '../../component/botoes/home/home_button';
import Time_refresh from '../../component/time_refresh';
import Time_date from '../../component/time_date';




function Home(){
    
    return(
        <body className="Home">
            <header className="home_header">
                <img src={logop} alt="logo compass"/>

                <div className="clock_time">
                    <Time_date />
                </div>
             
                <div className="temperature">
                    <img src={Temperatura} alt="" />
                </div>
            </header>


            <main  className="home_main">
                <div className="main_img">
                <img src={bola_logo} alt="logo uol" />
                </div>

                <div className="main_text">
                    <h2>Our mission is</h2>
                    <p>Nossa missão é</p>
                    
                    <h1>to transform the world</h1>
                    <p>transformar o mundo</p>

                    <h1>building digital experiences</h1>
                    <p>construindo experiências digitais</p>

                    <h1>that enable our client's growth</h1>
                    <p>que permitam o crescimento dos nossos clientes</p>

                </div>

                
            </main>
            
            
            
            <footer  className="home_footer">



                <div className="footer_texto">
                    <p>
                        Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a<br/>
                        aberta em segundo plano e abra uma nova janela para continuar a navegar.
                    </p>

                    <div className='barra_transversal'></div>
                </div>


                

                <div className='footer_time_reset'>
                   

                    <p className='time_reset_refresh'>
                        Application<br/>
                        refresh in
                    </p>
                    <div className='time_reset'>
                        <Time_refresh />
                    </div>
                
                
                    <Botoes />
                    </div>
            </footer>
        </body>
    )
}

export default Home