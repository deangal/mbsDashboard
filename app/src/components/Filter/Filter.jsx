import React,{useEffect} from 'react'
import { useSelector } from "react-redux";
import {  Today, Tomorrow, TwoDays } from '../FirstLine/firstLineIndex';
import { ReadyForDelivery, ReadyForGather, WaitingForDelivery, TodayPickup, Unfound, InDelivery, } from '../SecondLine/secondLineIndex'
import {LateTimeline, FailedToDeliver, OrderInLateToday, OrdersInLate} from '../ThirdLine/thirdLineIndex'
import { AllLines } from '../compnentsIndex'

export default function Filter() {

    const SelectedData = useSelector((state) => state.Selected);
    const FiltersData = useSelector((state) => state.Filters);

    // FiltersData.forEach(element => {
    //     if(element.name == SelectedData){
    //         console.log(element.data);

    //     }
    // });


   

    return (
        <div>
           <h1>{SelectedData}</h1> 
           {/* <AllLines domain={{domain:"mbs",domainNumber:0}}/>
        <AllLines domain={{domain:"hesed",domainNumber:1}}/>
        <AllLines domain={{domain:"citysal",domainNumber:2}}/> */}
        </div>
    )
}
