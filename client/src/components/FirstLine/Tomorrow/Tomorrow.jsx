import React,{useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { dateSlicer } from '../../../utils';

import { useSelector,useDispatch } from "react-redux";

export default function Tomorrow() {

  let [active, setActive] = useState([false,false,false]);
  let [didMount, setDidMount] = useState(false);


  const MbsOrdersData = useSelector((state) => state.MbsOrders.data);
  const tommarow = useSelector((state) => state.date.tommarow);

  const dispatch = useDispatch();
  


let filteredMbsOrders = MbsOrdersData.filter(element => element.delivery_date == tommarow);



//Load Data
useEffect(() => {
  

setDidMount(true)

}, [MbsOrdersData])


//   const addHandle = (e) =>{
//   if(DomainData.domain === "mbs"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "Tomorrow" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "Tomorrow" + DomainData.domainNumber}))

//     }

//   }
//   if(DomainData.domain === "hesed"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "Tomorrow" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "Tomorrow" + DomainData.domainNumber}))

//     }

//   }
//   if(DomainData.domain === "citysal"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "Tomorrow" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "Tomorrow" + DomainData.domainNumber}))

//     }
//   }
// }
  
  let addStyle = {
  transition: 'transform 150ms ease',
  // transform: active[DomainData.domainNumber] ? 'rotate(45deg)' : '', 
  marginRight:'7px',
  fontSize:'xx-large',
  cursor:'pointer'
 }

let firstLine = {
  fontSize:'50px',
  width: '33.333vw' ,
  height: '33.333vh' 
}

let filterStyles = {
  fontSize:'50px',
  height: '24.5vh', 
  width: '28.68vh'
}

  return (
    <Card onClick={() => console.log(filteredMbsOrders )} id={'mbs'} sx={firstLine}>
      <CardContent style={{height:'30%'}}>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
        {/* <AddIcon   onClick={addHandle} style={addStyle}/> */}
        ???????????? ????????
        </Typography>
        
       
      </CardContent>
      <Typography variant="body">
<div className='length'> {filteredMbsOrders.length} </div>
          <br/>
        </Typography>
    </Card>
  );
}