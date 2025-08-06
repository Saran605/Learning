

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
                            <li>About</li>
                            <li>Our Network</li>
                            <li>Content & Creativity</li>
                            <li>Get in Touch</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
