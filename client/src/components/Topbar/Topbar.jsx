import './Topbar.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate  } from 'react-router-dom';
import { useKey } from '../../utils';
import { fontWeight } from '@mui/system';
export default function Topbar() {

    let navigate = useNavigate();
    
    const [active, setActive] = useState(false)

    function handleClick(e) {
      e.preventDefault();
      navigate(e.target.name)
      
    }

    function handleEsc() {
        setActive(!active)
    }
    
      useKey("Escape",handleEsc)
    

    return (
        <div className={"Topbar" + (active ? ' active' : '')}>
            <Button variant="contained" name='/mbs' onClick={handleClick} sx={{ width: 150 , height:70, borderRadius:'20px', backgroundColor: '#6EB3CA', fontSize:'23px',fontWeight:'bolder' }}>מיי באנדלס</Button>

        </div>
    )
}


