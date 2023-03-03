import EventManagement from './component/event.';
import Addevent from './component/addevent';
import Deleteevent from './component/deleteevent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHome from './component/AdminHome';
import Register from './component/Register';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/fetchevent" element={<EventManagement />} />
          <Route path="/addevent" element={<Addevent />} />
          <Route path="/deleteevent" element={<Deleteevent />} />
          <Route path="/adminhome" element={<AdminHome/>} />
          <Route path="/" element={<Register/>} />
        </Routes>
      </BrowserRouter>

     {/* <Addevent/> */}

      
    </div>
  );
}

export default App;
