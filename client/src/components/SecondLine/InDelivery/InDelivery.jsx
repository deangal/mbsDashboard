import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { useSelector,useDispatch } from "react-redux";

export default function InDelivery({filter}) {

  
  let [active, setActive] = useState([false,false,false]);
  
    const MbsOrdersData = useSelector((state) => state.MbsOrders.data);

  
  const dispatch = useDispatch();
  
  let filteredMbsOrders = MbsOrdersData.filter(element => element.status == 'deliveryout');
  
  
  
//Load Data
useEffect(() => {
//   FiltersData.forEach(element => {
//     if(element.name == SelectedData){
//       let result = element.data.filter( active => active == "InDelivery0" || active == "InDelivery1" || active == "InDelivery2" )
//       result.forEach( filter => {
//         if(filter == "InDelivery0"){
//           active[0] = true
//           setActive([...active])
//         }

//         if(filter == "InDelivery1"){
//           active[1] = true
//           setActive([...active])
//         }

//         if(filter == "InDelivery2"){
//           active[2] = true
//           setActive([...active])
//         }
        
//       })
//     }

// })
}, [filteredMbsOrders])

//   const addHandle = (e) =>{
//   if(DomainData.domain === "mbs"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))

//     }

//   }
//   if(DomainData.domain === "hesed"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))

//     }

//   }
//   if(DomainData.domain === "citysal"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))

//     }
//   }
// }
  
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
    <Card onClick={() => console.log(filteredMbsOrders)} id={'mbs'} sx={secondLine}>
      <CardContent style={{height:'30%'}}>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
        {/* <AddIcon  onClick={addHandle}  style={addStyle}/>  */}
        משלוחים שכרגע בשליחות
        </Typography>
        
        </CardContent>
      <Typography variant="body">
<div className='length'> {filteredMbsOrders.length} </div>
          <br/>
        </Typography>
     
    </Card>
  );
}