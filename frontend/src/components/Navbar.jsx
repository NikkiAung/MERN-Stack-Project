import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center p-5 bg-white">
          <div>
            <h1 className="font-bold text-2xl text-orange-400">Recipility</h1>
          </div>
          <ul className="flex space-x-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/recipes/create">Create Recipe</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
