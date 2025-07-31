

const logo = "https://mobilise.agency/wp-content/uploads/2023/08/ll-1.webp"

export const Header = () =>{
    return (
        <div className="nav-component">
            <div className="nav-block-a">
                <img src={logo}></img>
            </div>
            <div className="nav-block-b">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}
