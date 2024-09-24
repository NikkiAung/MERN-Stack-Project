import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
import { useContext } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const {name} = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {
      let res = await axios.post('/api/users/logout');
      if (res.status === 200) {
        navigate('/sign-in');
      }
  }
  return (
    <div>
        <nav className="flex justify-between items-center p-5 bg-white">
          <div>
            <h1 className="font-bold text-2xl text-orange-400">Recipility</h1>
          </div>
          <ul className="flex space-x-10">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            <li><Link to="/recipes/create" className="hover:text-orange-400">Create Recipe</Link></li>
            <li><Link to="/sign-in" className="hover:text-orange-400">Login</Link></li>
            <li><Link to="/sign-up" className="hover:text-orange-400">Register</Link></li>
            <li><button onClick={logout} className="hover:text-orange-400">Logout</button></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
