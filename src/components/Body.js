import { useState,useEffect } from "react";


const dataURL = "https://mobilise-networking-default-rtdb.asia-southeast1.firebasedatabase.app/.json";
const videobgUrl = "https://www.azero.in/videos/background4.mp4"

const HeroSection = ()=>{
    return(
        <div className="hero-section">
            <div>
                <video autoPlay loop muted className="bg-video">
                    <source src={videobgUrl} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}


const Product = (data)=>{
    console.log(data.data)
    let {image,Cost_per_month,Locality} = data.data;
    console.log(image)
    return(
        <div className="product">
            <img src={image}></img>
            <h2>{Locality}</h2>
            <p>{Cost_per_month}</p>
        </div>
    )
}



const Billboard_Products = ()=>{
    const [products, setProducts] = useState([]);
    console.log("Working")

    useEffect( ()=>{
        fetcturl();
    },[])


    const fetcturl = async ()=>{
        let dataA = await fetch(dataURL);
        let data = await dataA.json();
        let mainData =  data;
        console.log(mainData)
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


export const Body = ()=>{
    return(
        <div className="home-section-body">
            <HeroSection/>
            <Billboard_Products/>
        </div>
    )
}