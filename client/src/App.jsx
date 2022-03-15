/* eslint-disable */ 

import './App.css';
import React,{useEffect} from 'react'
import { CreateFilter, Topbar, Intro, AllLines, Filter } from './components/compnentsIndex'
import { w3cwebsocket }  from 'websocket'
import { Route,Routes } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { fetchOrders, POST_ORDER , PUT_ORDER , DELETE_ORDER , SET_LOADING, TOGGLE } from './redux/slices/OrdersSlice';
import { GET_DATE, GET_TIME } from './redux/slices/DateSlice';
function App() {

  

let client = new w3cwebsocket("ws://54.229.46.214:8080");
client.onopen = console.log("React Connected to 8080");


  const SelectedData = useSelector((state) => state.Selected);
  const dispatch = useDispatch();
  
  // on mount fetch data
  useEffect(() => {

    dispatch(fetchOrders())
    dispatch(GET_DATE())
    dispatch(GET_TIME())
    clearInterval(dateInterval);
    clearInterval(timeInterval);
  }, [])

  //time interval

  let dateInterval = setInterval(function() {
    dispatch(GET_DATE())
    },60000 * 60)

  let timeInterval = setInterval(function() {
    dispatch(GET_TIME())
    },60000)

// webhooks dispatch to redux
client.onmessage = message => {
let msgData = message.data.split(", ");

if(msgData[2] == 'post'){
  dispatch(POST_ORDER(JSON.parse(msgData[0])))
  }

  if(msgData[2] == 'put'){
  dispatch(PUT_ORDER(JSON.parse(msgData[0])))
  }
  
  if(msgData[2] == 'delete'){
  dispatch(DELETE_ORDER(JSON.parse(msgData[0])))
  }
}


      

return (
  <div  className="App">
    <Topbar/>

    <Routes>
      <Route path='/' element={<Intro/>}/>
      <Route path='/mbs' element={<AllLines />}/>
      <Route path='/create' element={<CreateFilter/>}/>


      <Route path={'/' + SelectedData} element={<Filter/>}/>

    </Routes>
  </div>

    

);
}

export default App;

