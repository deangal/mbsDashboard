import React from 'react'
import { useDispatch } from "react-redux";
import { addFilter } from '../../redux/actions/index'

export default function CreateFilter() {


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const FilterName = document.getElementById("name").value
        if(FilterName !== ""){
            dispatch(addFilter({name:FilterName,data:[]}));
        } else {
            alert("enter value")
        }
        document.getElementById("filterForm").reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="filterForm" action="post">
                <input type="text" id="name" />
                <input type="submit"  />
            </form>
        </div>
    )
}
