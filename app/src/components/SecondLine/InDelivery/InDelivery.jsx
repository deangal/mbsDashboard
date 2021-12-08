import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { useSelector,useDispatch } from "react-redux";
import { addFilterData, removeFilterData } from '../../../redux/actions';

export default function InDelivery() {

  let [active, setActive] = useState([false,false,false]);

  const DomainData = useSelector((state) => state.Domain);
  const SelectedData = useSelector((state) => state.Selected);
  const FiltersData = useSelector((state) => state.Filters);

  const dispatch = useDispatch();

//Load Data
useEffect(() => {
  FiltersData.forEach(element => {
    if(element.name == SelectedData){
      let result = element.data.filter( active => active == "InDelivery0" || active == "InDelivery1" || active == "InDelivery2" )
      result.forEach( filter => {
        if(filter == "InDelivery0"){
          active[0] = true
          setActive([...active])
        }

        if(filter == "InDelivery1"){
          active[1] = true
          setActive([...active])
        }

        if(filter == "InDelivery2"){
          active[2] = true
          setActive([...active])
        }
        
      })
    }

})
}, [SelectedData])

  const addHandle = (e) =>{
  if(DomainData.domain === "mbs"){
    active[DomainData.domainNumber] = !active[DomainData.domainNumber]
    setActive([...active])
    if(active[DomainData.domainNumber] == true){
      dispatch(addFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))
    }
    if(active[DomainData.domainNumber] == false){
      dispatch(removeFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))

    }

  }
  if(DomainData.domain === "hesed"){
    active[DomainData.domainNumber] = !active[DomainData.domainNumber]
    setActive([...active])
    if(active[DomainData.domainNumber] == true){
      dispatch(addFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))
    }
    if(active[DomainData.domainNumber] == false){
      dispatch(removeFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))

    }

  }
  if(DomainData.domain === "citysal"){
    active[DomainData.domainNumber] = !active[DomainData.domainNumber]
    setActive([...active])
    if(active[DomainData.domainNumber] == true){
      dispatch(addFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))
    }
    if(active[DomainData.domainNumber] == false){
      dispatch(removeFilterData({name: SelectedData, data: "InDelivery" + DomainData.domainNumber}))

    }
  }
}
  
  let addStyle = {
    transition: 'transform 150ms ease',
    transform: active[DomainData.domainNumber] ? 'rotate(45deg)' : '', 
    marginRight:'7px',
    fontSize:'xx-large',
    cursor:'pointer'
   }

  return (
    <Card id={DomainData.domain} sx={{ width: 275 , height:275, borderRadius:'50px' }}>
      <CardContent>
        
        <Typography style={{display:'flex',justifyContent:'center',alignItems:'center'}} variant="h5" component="div">
        <AddIcon onClick={addHandle} style={addStyle}/> הזמנות שכרגע בשליחות
        </Typography>
        
        <Typography variant="body">
          #
          <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}