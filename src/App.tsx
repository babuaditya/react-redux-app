import {BrowserRouter, Routes, Route} from 'react-router-dom'
 /* PLOP_INJECT_IMPORT */
import Login from './pages/Login'
import Counter from './pages/Counter'
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
    {/* PLOP_INJECT_ROUTE */}
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Counter />} />
    </Routes>
    </BrowserRouter>
  );

}
export default App
