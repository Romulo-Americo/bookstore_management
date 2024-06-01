import style from './addbooks.css'

import SideBar from '../../components/SideBar';
import Form from '../../components/Form';



function AddBook(){
    return(
        <div>
            <SideBar/>
            <main className='formToAddBook'>
                <h1 className='titlePages'>Adicionar um novo Livro</h1>
                <Form
                       label1='Título do Livro'
                       label2='Autor do Livro'
                       label3='Gênero'
                       label4='Ano de Publicação'
                       action='Criar'
                >
                    <label htmlFor="">Valor</label>
                    <input type="text"></input>
                </Form>
                
            </main>
        </div>
    )
}

export default AddBook;