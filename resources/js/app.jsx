import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Task from './components/Task';
import Header from './components/header';
import Create from './components/tasks/create';
import Edit from './components/tasks/edit';

ReactDOM.createRoot(document.getElementById('app')).render(
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' exact element={<Task />} />
                <Route path='/create' exact element={<Create />} />
                <Route path='/edit/:todoId' exact element={<Edit />} />
            </Routes>
        </BrowserRouter>
    </>
);