import {BrowserRouter, Routes, Route} from 'react-router-dom'
 /* PLOP_INJECT_IMPORT */
import TaskList from './pages/TaskList'
import Login from './pages/Login'
import Counter from './pages/Counter'
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
    {/* PLOP_INJECT_ROUTE */}
    <Route path="/task" element={<TaskList />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Counter />} />
    </Routes>
    </BrowserRouter>
  );

}
export default App
