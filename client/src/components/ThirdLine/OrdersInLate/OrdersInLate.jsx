import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { stringToDate, currentTime } from '../../../utils';
import { useSelector,useDispatch } from "react-redux";

export default function OrdersInLate({filter,domain}) {
  
  let [active, setActive] = useState([false,false,false]);
  let time = useSelector((state) => state.date.time);

    const MbsOrdersData = useSelector((state) => state.MbsOrders.data);
    let today = useSelector((state) => state.date.today);

 
  const dispatch = useDispatch();


 
  //filter condition
    //mbs Filter
  let nullFilterMbs = MbsOrdersData.filter(element => 
    (element.delivery_time != null) 
  );   
  
let filteredMbsOrdersByStatus = nullFilterMbs.filter(element => 
  (( element.status != 'completed' && element.status != 'cancelled'  &&  element.status != 'sucssefulydeliver' && element.status != 'failed' && element.delivery_type != 'pickup') ) 
  );

  let filteredDateMbs = filteredMbsOrdersByStatus.filter(element => 
    (stringToDate(element.delivery_date) < stringToDate(today).setHours(0,0,0,0))

    );

    
    let filtered5MbsOrders = filteredMbsOrdersByStatus.filter(element => {
    if(element.delivery_time.length == 5){
      return (stringToDate(element.delivery_date) == stringToDate(today).setHours(0,0,0,0) && element.delivery_time.replace(':','') <= time)
    }
  });
    
  let filtered13MbsOrders = filteredMbsOrdersByStatus.filter(element => {
    if(element.delivery_time.length == 13){
      return (stringToDate(element.delivery_date) == stringToDate(today).setHours(0,0,0,0) && element.delivery_time.slice(0,5).replace(':','') <= time)
    }
  });

   let filteredMbsOrders = filtered13MbsOrders.length + filtered5MbsOrders.length + filteredDateMbs.length
   let mbs = [filtered13MbsOrders , filtered5MbsOrders , filteredDateMbs]
 
  

  



  
  let addStyle = {
  transition: 'transform 150ms ease',
  // transform: active[DomainData.domainNumber] ? 'rotate(45deg)' : '', 
  marginRight:'7px',
  fontSize:'xx-large',
  cursor:'pointer'
 }

let thirdLine = {
  fontSize:'50px',
  width: '33.333vw' ,
  height: '34.2vh' 
}

let filterStyles = {
  fontSize:'50px',
  height: '24.5vh', 
  width: '28.68vh'
}
  return (
    <Card onClick={() => console.log(mbs )} id={'mbs'} sx={thirdLine}>
      <CardContent style={{height:'30%'}}>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
<AddIcon  /* onClick={addHandle} */ style={addStyle}/>
        הזמנות קיימות באיחור מסירה
        </Typography>
        
        </CardContent>
      <Typography variant="body">
<div className='length'> {filteredMbsOrders} </div>
          <br/>
        </Typography>
     
    </Card>
  );
}