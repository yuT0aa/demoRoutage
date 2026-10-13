import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Trainings from './Components/Trainings';
import TrainingDetails from './Components/TrainingDetails';
import Register from './Components/Register';
import NoPage from './Components/NoPage';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/trainings" element={<Trainings/>}/>
        <Route path="/trainings/:id" element={<TrainingDetails/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;