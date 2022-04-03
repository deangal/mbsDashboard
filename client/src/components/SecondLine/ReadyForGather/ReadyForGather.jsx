import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { useSelector,useDispatch } from "react-redux";

export default function ReadyForGather({filter}) {

  let [active, setActive] = useState([false,false,false]);

    const MbsOrdersData = useSelector((state) => state.MbsOrders.data);


  const dispatch = useDispatch();

let filteredMbsOrders = MbsOrdersData.filter(element => element.status == 'processing');




  //Load Data
useEffect(() => {
//   FiltersData.forEach(element => {

//     if(element.name == SelectedData){
//     let result = element.data.filter( active => active == "ReadyForGather0" || active == "ReadyForGather1" || active == "ReadyForGather2" )

//       result.forEach( filter => {
//         if(filter == "ReadyForGather0"){
//           active[0] = true
//           setActive([...active])
//         }

//         if(filter == "ReadyForGather1"){
//           active[1] = true
//           setActive([...active])
//         }

//         if(filter == "ReadyForGather2"){
//           active[2] = true
//           setActive([...active])
//         }
        
//       })
//     }

// })
}, [filteredMbsOrders])

  
  
  let addStyle = {
  transition: 'transform 150ms ease',
//   transform: active[DomainData.domainNumber] ? 'rotate(45deg)' : '', 
  marginRight:'7px',
  fontSize:'xx-large',
  cursor:'pointer'
 }

let secondLine = {
  fontSize:'50px',
  width: '25vw' ,
  height: '33.333vh' 
}

let filterStyles = {
  fontSize:'50px',
  height: '24.5vh', 
  width: '28.68vh'
}
  return (
    <Card onClick={() => console.log(filteredMbsOrders) } id={'mbs'} sx={secondLine}>
      <CardContent style={{height:'30%'}}>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
{/* <AddIcon  onClick={addHandle}  style={addStyle}/> */}
         הזמנות לליקוט
        </Typography>
        
        </CardContent>
      <Typography variant="body">
<div className='length'> {filteredMbsOrders.length} </div>
          <br/>
        </Typography>
     
    </Card>
  );
}