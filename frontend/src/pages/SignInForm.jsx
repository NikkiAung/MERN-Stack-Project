import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "../helpers/axios";
import { useNavigate } from "react-router-dom";
function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const submitLogin = async (e) => {
    try {
        e.preventDefault();
        setError(null);
        const userInfo = {
            email,
            password
        }
        const res = await axios.post('/api/users/login',userInfo, {
            withCredentials: true
        });
        if(res.status === 200) {
            navigate('/');
        }
    } catch (e) {
        setError(e.response.data.error);
    }
  } 
  return (
    <div className="w-full w- mx-auto max-w-lg">
        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitLogin}>
            <div className="mb-6">
                {/* Email */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Email
                </label>
                <input value={email} onChange={e=>setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>
                {!!(error)&& <p className="text-red-500 text-xs italic">{error}</p>}
                {/* Password */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input value={password} onChange={e=>setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Password" type="password" placeholder="*********"/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Login
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-orange-400 hover:text-orange-400" href="#">
                        Forgot Password?
                </a>
            </div>
        </form>
    </div>
  )
}

export default SignInForm
