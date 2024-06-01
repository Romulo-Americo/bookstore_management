import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/loginPage/loginPage';
import HomePage from './pages/home/HomePage';
import Book from './pages/book/Book';
import Employee from './pages/employeePage/Employee';
import Clients from './pages/clients/Client';
import AddBook from './pages/addBook/AddBook';
import AddClient from './pages/addClient/AddClient';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/employees' element={<Employee/>}/>
        <Route path='/books' element={<Book/>}/>
        <Route path='/addBooks' element={<AddBook/>}/>
        <Route path='/addClients' element={<AddClient/>}/>
        <Route path='/clients' element={<Clients/>}/>
      </Routes>
    </Router>
  );
}

export default App;
