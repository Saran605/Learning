import {Link} from "react-router"

const logo = "https://mobilise.agency/wp-content/uploads/2023/08/ll-1.webp"

export const Header = () =>{
    return (
        <div className="nav-component-main">
            <div className="nav-component-inner-block-a">
                <div className="nav-component">
                    <div className="nav-block-a">
                        <img src={logo}></img>
                    </div>
                    <div className="nav-block-b">
                        <ul>
                            <Link to=""><li>Home</li></Link>
                            <Link to=""><li>Billboard Solutions</li></Link>
                            <Link to=""><li>Location</li></Link>
                            <Link to=""><li>Pricing</li></Link>
                            <Link to=""><li>About US</li></Link>
                            <Link to=""><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
