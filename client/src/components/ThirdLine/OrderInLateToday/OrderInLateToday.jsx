import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { currentTime, stringToDate } from '../../../utils';

import { useSelector,useDispatch } from "react-redux";

export default function OrderInLateToday({filter,domain}) {
  
  let [active, setActive] = useState([false,false,false]);


    const MbsOrdersData = useSelector((state) => state.MbsOrders.data);
    let today = useSelector((state) => state.date.today);
    let time = useSelector((state) => state.date.time);



  const dispatch = useDispatch();

 
//filters
//mbs filter
let nullFilterMbs = MbsOrdersData.filter(element => 
  (element.delivery_time != null) 
); 

let filteredPickupMbsOrders = nullFilterMbs.filter(element => element.delivery_type != 'pickup');

let filteredMbsOrdersByStatus = filteredPickupMbsOrders.filter(element => 
(( element.status == 'processing' || element.status == 'deliveryout' ) ) 
);


  let filtered5MbsOrders = filteredMbsOrdersByStatus.filter(element => {
  if(element.delivery_time.length == 5){

    return (stringToDate(element.delivery_date).setHours(0,0,0,0) == stringToDate(today).setHours(0,0,0,0) && element.delivery_time.replace(':','') <= time)
  }
});
  
let filtered13MbsOrders = filteredMbsOrdersByStatus.filter(element => {
  if(element.delivery_time.length == 13){
    return (stringToDate(element.delivery_date) == stringToDate(today).setHours(0,0,0,0) && element.delivery_time.slice(0,5).replace(':','') <= time)
  }
});
 let filteredMbsOrders = filtered13MbsOrders.length + filtered5MbsOrders.length 
 let mbs = [filtered13MbsOrders , filtered5MbsOrders]


  // <style> for mui
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
    <Card onClick={() => console.log(mbs)} id={'mbs'} sx={thirdLine}>
      <CardContent style={{height:'30%'}}>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
        {/* <AddIcon   onClick={addHandle}  style={addStyle}/> */}
        סך ההזמנות באיחור היום
        </Typography>
        
        </CardContent>
      <Typography variant="body">
        <div className='length'> {filteredMbsOrders} </div>
          <br/>
        </Typography>
     
    </Card>
  );
}