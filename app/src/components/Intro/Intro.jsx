import React,{useEffect,useState} from 'react'
import axios from 'axios'
export default function Intro() {


  let [orders, setOrders] = useState([]);


  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if(this.readyState == 4 && this.status == 200){
  //     console.log(xhttp.responseText);
  //   } else {
  //     console.log("error");
  //   }
  // }
  //   xhttp.open("GET",'https://dev.mybundles.co.il/wp-json/api/v1/orders')
  //   xhttp.send();
    
    
    var config = {
      method: 'get',
      url: 'https://dev.mybundles.co.il/wp-json/api/v1/orders',
      headers: { 
        'content-Type': 'application/json',
        "Accept": "/",
        "Cache-Control": "no-cache",
      },
      credentials: "same-origin",

    };
    axios.defaults.withCredentials = true;

    
    axios.get('https://dev.mybundles.co.il/wp-json/api/v1/orders',config)    
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    


    return (
        <div>
          {/* {orders} */}
            hello world ;)
        </div>
    )
}
