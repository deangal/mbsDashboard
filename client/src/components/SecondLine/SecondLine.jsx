import React from 'react'
import { ReadyForDelivery, ReadyForGather, WaitingForDelivery, TodayPickup, Completed, InDelivery, } from './secondLineIndex'

export default function SecondLine({domain}) {
    return (
        <>
        <div className="secondLine">
        <Completed domain={domain}/>
        <InDelivery domain={domain}/>
        {/* <WaitingForDelivery domain={domain}/> */}
        <ReadyForDelivery domain={domain}/>
        <ReadyForGather domain={domain}/>
        <TodayPickup domain={domain}/>
        </div>
    </>
    )
}
