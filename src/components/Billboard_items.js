import { useState,useEffect } from "react";

const dataURL = "https://mobilise-networking-default-rtdb.asia-southeast1.firebasedatabase.app/.json";


const Product = (data)=>{
    let {image,Cost_per_month,Locality} = data.data;
    return(
        <div className="product">
            <img src={image}></img>
            <div className="product-a">
                <h2>{Locality}</h2>
                <div className="product-a-1">
                    <img src="https://i.postimg.cc/zBYw2Xf8/location-pin-alt-1-svgrepo-com.png"></img>
                    <p>{Locality}</p>
                </div>
                 <div className="product-a-2">
                    <p> {"₹"+Cost_per_month} per month</p>
                    <a><button className="product-a-2-btn">View</button></a>
                </div>
            </div>
        </div>
    )
}



const Billboard_items = ()=>{
    const [products, setProducts] = useState([]);
   

    useEffect( ()=>{
        fetcturl();
    },[])


    const fetcturl = async ()=>{
        let dataA = await fetch(dataURL);
        let data = await dataA.json();
        let mainData =  data;
        setProducts(mainData);
    }
    


    return (
        <div className="products-item-section">
            {
                products.map((items,index) => <Product key={items.SL_No} data={items}/>)
            }
        </div>
    )
}


export default Billboard_items