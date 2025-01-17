import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="nav-brand">
                <Link href="/">Aptech MovieApp</Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
            </ul>
        </header>
    )
}

export default Navbar