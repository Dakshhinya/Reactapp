import '../assets/css/style.css'
import { SquareUserRound } from 'lucide-react';
import {Link} from 'react-router-dom'
import Logo from '../assets/images/logo.png'

 const Navbar = () => {
  return (
    <>
        <div className="bg-white shadow-lg w-full h-[10vh] flex drop-shadow-lg shadow-red-400 ">
        <div className="h-[80%] w-1/4 flex justify-center items-start p-4">
            <img src={Logo} alt="profile" className="rounded-full h-10 w-10 shadow-lg shadow-red-500 border-3 border-white" ></img>
            
        </div>
          <div className="flex justify-center flex-row w-[10vw] items-center font-bold text-black"> 
            Dakshinya Loganathan
          </div>
          <div className="w-full flex flex-row justify-end items-center text-black font-semibold ">

            <ul className="list-none flex flex-row gap-8">
              <Link to="/">
              <li className='active'>Home</li>
              </Link>
             <Link to="/Project">
             <li className='active'>Projects</li>
             </Link>
             <Link to="/Contact">
             <li className='active'>Contact</li>
             </Link>
              <li ><SquareUserRound size={20}/></li>
              <li></li>
            </ul>
          </div>

        </div>
    </>
  )
}
export default Navbar