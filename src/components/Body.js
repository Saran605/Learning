import { useState,useEffect } from "react";


const dataURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";


const Product = ()=>{
    return(
        <div className="product">
            <img></img>
            
        </div>
    )
}



const Billboard_Products = ()=>{
    const [products, setProducts] = useState([]);
    console.log("Working")


    const fetcturl = async ()=>{
        let dataA = await fetch(dataURL);
        let data = await dataA.json();
        let mainData =  data?.data?.cards;
        setProducts(mainData);
    }
    fetcturl();


    return (
        <div>
            <h1>Billboard Products</h1>
        </div>
    )
}


export const Body = ()=>{
    return(
        <div>
            <Billboard_Products/>
        </div>
    )
}