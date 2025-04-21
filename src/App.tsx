import {BrowserRouter, Routes, Route} from 'react-router-dom'
 /* PLOP_INJECT_IMPORT */
import Counter from './pages/Counter'
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
    {/* PLOP_INJECT_ROUTE */}
    <Route path="/" element={<Counter />} />
    </Routes>
    </BrowserRouter>
  );

}
export default App
