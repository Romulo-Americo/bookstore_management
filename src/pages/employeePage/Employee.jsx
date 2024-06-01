import style from './employee.css'
import user from '../../assets/userBlack.png'
import activate from '../../assets/buttonBlue.png'
import blocked from '../../assets/buttonRed.png'


import SideBar from "../../components/SideBar";
import Table from '../../components/Table';
import Button from '../../components/Button';
import ActionsButtons from '../../components/ActionsButtons';


function Employee(){
    return(
        <div >
            <SideBar/>
            <main className="listEmployee">
                <h1 className='titlePages'>Lista de funcionarios</h1>
                <Button description='Adicionar Funcionário'/>
                <Table
                    col1=''
                    col2='Nome'
                    col3='Matricula'
                    col4='Situação'
                    col5='Ações'
                >
                    <tr>
                        <td><img src={user} alt="user"/></td>
                        <td>Teste</td>
                        <td>000.000-0</td>
                        <td><img className='situationUser' src={activate} alt="Ativo"/></td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='Ativar'/>
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} alt="user"/></td>
                        <td>Teste</td>
                        <td>000.000-0</td>
                        <td><img className='situationUser' src={activate} alt="Ativo"/></td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='Ativar'/>
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} alt="user"/></td>
                        <td>Teste</td>
                        <td>000.000-0</td>
                        <td><img className='situationUser' src={blocked} alt="Bloqueado"/></td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='Ativar'/>
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} alt="user"/></td>
                        <td>Teste</td>
                        <td>000.000-0</td>
                        <td><img className='situationUser' src={activate} alt="Ativo"/></td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='Ativar'/>
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={user} alt="user"/></td>
                        <td>Teste</td>
                        <td>000.000-0</td>
                        <td><img className='situationUser' src={blocked} alt="Bloqueado"/></td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='Ativar'/>
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                </Table>
            </main>
        </div>
    );
}

export default Employee;