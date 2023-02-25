import './App.css';
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./components/signin/signin"
import Signup from "./components/signup/signup"
import Inputform from './components/form';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/form" element={<Inputform/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <div className="App">
      
    </div>
  ); */}