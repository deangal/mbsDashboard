import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { stringToDate } from '../../../utils';
import { useSelector,useDispatch } from "react-redux";

export default function FailedToDeliver({filter}) {

  let [active, setActive] = useState([false,false,false]);

  const MbsOrdersData = useSelector((state) => state.MbsOrders.data);
  let today = useSelector((state) => state.date.today);
  
  const dispatch = useDispatch();

  
  let nullFilterMbs = MbsOrdersData.filter(element => 
    (element.delivery_date != null) 
  ); 
    
  let filteredTodayMbsOrders = nullFilterMbs.filter(element => stringToDate(element.delivery_date).setHours(0,0,0,0) == stringToDate(today).setHours(0,0,0,0));


  let filteredMbsOrders = filteredTodayMbsOrders.filter(element => element.status == 'failed');



   //Load Data
useEffect(() => {
 
}, [filteredMbsOrders])


  
  
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
    <Card onClick={() => console.log(filteredMbsOrders)} id={'mbs'} sx={thirdLine}>

      <CardContent style={{height:'30%'}}>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
{/* <AddIcon   onClick={addHandle}  style={addStyle}/> */}
        הזמנות שנכשלו 
        </Typography>
        
      </CardContent>
        <Typography variant="body">
    <div className='length'> {filteredMbsOrders.length} </div>
          <br/>
        </Typography>
     
    </Card>
  );
}