import './App.css';
import { CreateFilter, Topbar, Intro, AllLines, Filter } from './components/compnentsIndex'

import { Route,Routes } from 'react-router-dom'
import { useSelector } from "react-redux";

function App() {


  const SelectedData = useSelector((state) => state.Selected);
  return (
    <div className="App">
      <Topbar/>

      <Routes>
        <Route path='/' element={<Intro/>}/>

        <Route path='/mbs' element={<AllLines domain={{domain:"mbs",domainNumber:0}}/>}/>
        <Route path='/hesed' element={<AllLines domain={{domain:"hesed",domainNumber:1}}/>}/>
        <Route path='/citysal' element={<AllLines domain={{domain:"citysal",domainNumber:2}}/>}/>
        <Route path='/create' element={<CreateFilter/>}/>


        <Route path={'/' + SelectedData} element={<Filter/>}/>

      </Routes>
    </div>

      

  );
}

export default App;
