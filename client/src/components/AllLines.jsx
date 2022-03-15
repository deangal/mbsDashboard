import React,{useEffect} from 'react'
import { FirstLine, SecondLine, ThirdLine } from './compnentsIndex'

import { useDispatch } from "react-redux";


export default function AllLines() {
    
    const dispatch = useDispatch();


    
 
    return (
        <>
        <FirstLine />
        <SecondLine/>
        <ThirdLine/>  
        </>
    )
}
