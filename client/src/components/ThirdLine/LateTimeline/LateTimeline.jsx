// import React,{useState,useEffect} from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';
// import { currentTime, stringToDate } from '../../../utils';

// import { useSelector,useDispatch } from "react-redux";

// export default function OrderInLateToday({filter,domain}) {
  
//   let [active, setActive] = useState([false,false,false]);
//   let [sTime, setTime] = useState('');

//     const MbsOrdersData = useSelector((state) => state.MbsOrders.data);



//   const dispatch = useDispatch();

//  //time interval
//   setInterval(function() {

//     setTime(currentTime())
      
//     },35000)

//     useEffect(() => {
      
//       console.log("Time: " + sTime);

//     }, [sTime])
  
 

 
// //filters
// //mbs filter
//   let nullFilterMbs = MbsOrdersData.filter(element => 
//     (element.delivery_time != null) 
//   );

// let filteredMbsOrdersByStatus = nullFilterMbs.filter(element =>         
//   (( element.status != 'completed' && element.status != 'cancelled'  &&  element.status != 'sucssefulydeliver' && element.status != 'failed' && element.delivery_type != 'pickup') ) 
//   );


//   let filtered5MbsOrders = filteredMbsOrdersByStatus.filter(element => {
//     if(element.delivery_time.length == 5){
//       return (stringToDate(element.delivery_date) == today.setHours(0,0,0,0) && element.delivery_time.replace(':','') <= sTime)
//     }
//   });
    
//   let filtered13MbsOrders = filteredMbsOrdersByStatus.filter(element => {
//     if(element.delivery_time.length == 13){
//       return (stringToDate(element.delivery_date) == today.setHours(0,0,0,0) && element.delivery_time.slice(0,5).replace(':','') <= sTime)
//     }
//   });


// let filteredMbsOrders = filtered5MbsOrders.length + filtered13MbsOrders.length
  


//    //Load Data
// useEffect(() => {
//   FiltersData.forEach(element => {
//     if(element.name == SelectedData){
//       let result = element.data.filter( active => active == "OrderInLateToday0" || active == "OrderInLateToday1" || active == "OrderInLateToday2" )
//       result.forEach( filter => {
//         if(filter == "OrderInLateToday0"){
//           active[0] = true
//           setActive([...active])
//         }

//         if(filter == "OrderInLateToday1"){
//           active[1] = true
//           setActive([...active])
//         }

//         if(filter == "OrderInLateToday2"){
//           active[2] = true
//           setActive([...active])
//         }
        
//       })
//     }

// })

// setTime(currentTime())

// }, [SelectedData])


//   const addHandle = (e) =>{
//   if(DomainData.domain === "mbs"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "OrderInLateToday" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "OrderInLateToday" + DomainData.domainNumber}))

//     }

//   }
//   if(DomainData.domain === "hesed"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "OrderInLateToday" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "OrderInLateToday" + DomainData.domainNumber}))

//     }

//   }
//   if(DomainData.domain === "citysal"){
//     active[DomainData.domainNumber] = !active[DomainData.domainNumber]
//     setActive([...active])
//     if(active[DomainData.domainNumber] == true){
//       dispatch(addFilterData({name: SelectedData, data: "OrderInLateToday" + DomainData.domainNumber}))
//     }
//     if(active[DomainData.domainNumber] == false){
//       dispatch(removeFilterData({name: SelectedData, data: "OrderInLateToday" + DomainData.domainNumber}))

//     }
//   }
// }
  
//   let addStyle = {
//   transition: 'transform 150ms ease',
//   transform: active[DomainData.domainNumber] ? 'rotate(45deg)' : '', 
//   marginRight:'7px',
//   fontSize:'xx-large',
//   cursor:'pointer'
//  }

// let firstLine = {
//   fontSize:'50px',
//   width: '33.333vw' ,
//   height: '33.333vh' 
// }

// let filterStyles = {
//   fontSize:'50px',
//   height: '24.5vh', 
//   width: '28.68vh'
// }
//   return (
//     <Card onClick={() => console.log(filteredMbsOrders)} id={'mbs'} sx={thirdLine}>
//       <CardContent style={{height:'33.333%'}}>
        
//         <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h4" component="div">
// <AddIcon  /* onClick={addHandle} */ style={addStyle}/>
//        ??????
//         </Typography>
        
//         </CardContent>
//       <Typography variant="body">
// <div className='length'> {filteredMbsOrders} </div>
//           <br/>
//         </Typography>
     
//     </Card>
//   );
// }