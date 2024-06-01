import { useNavigate } from 'react-router-dom';

import styles from './loginPage.css'


function LoginPage(){
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate('/HomePage')
    }

    return(
    <div className='login'>
      <div >
        <div className='container'>
          <h1 className='welcome'>Bem vindo</h1>
          <form className='loginForm' action="" onSubmit={handleSubmit}>
                <label>Matricula</label>
                <input type="text" placeholder="000.000-0"/>
                <label>Senha</label>
                <input type="password"/>
                <button type='submit'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
    );
}

export default LoginPage;