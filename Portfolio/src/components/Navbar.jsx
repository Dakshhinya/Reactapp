import '../assets/css/style.css'
import { SquareUserRound } from 'lucide-react';
import {NavLink} from 'react-router-dom'
import Logo from '../assets/images/logo.png'

 const Navbar = () => {
  const Navlinks=[
    {
      title:"Home",
      path:"/"
    },
    {
      title:"Projects",
      path:"/Project"
    },
    {
      title:"Contact",
      path:"/Contact"
    }
  ]
  // const emailref=useRef(null)
  // const passwordref=useRef(null)

  // const handleLogin=(e)=>{
  //   e.preventDefault()
  //   setvisible(false)
  //   nav('/content')
  //   console.log(emailRef.current.value, passwordref.current.value)
  // }
  // const [visible,setvisible]=useStste(false)
  return (
    <>
        <div className="bg-white shadow-lg w-full h-[10vh] flex drop-shadow-lg shadow-red-400 " >
        <div className="h-[80%] w-1/4 flex justify-center items-start p-4">
            <img src={Logo} alt="profile" className="rounded-full h-10 w-10 shadow-lg shadow-red-400 border-3 border-white" ></img>
            
        </div>
          <div className="flex justify-center flex-row w-[10vw] items-center font-semibold text-black"> 
          <h1 className="font-bold text-lg font-serif custom-font">Dakshinya Loganathan</h1>
          </div>
          <div className="w-full flex flex-row justify-end items-center text-black font-semibold px-10">

            <ul className="list-none flex flex-row gap-5">
              {
                 Navlinks.map((navdata,index)=>(
                  <NavLink key={index} to={navdata.path} >
                  <li className="text-black font-semibold transform hover:rotate-y-180 transition duration-300">{navdata.title}</li>
                  </NavLink>))
              }
              {/* <li >
<button
  type="submit"
  class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group pb-5"
>
  Resume
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>
</li> */}
              <li></li>
               </ul>
              {/* <Link to="/">
              <li className='active'>Home</li>
              </Link>
             <Link to="/Project">
             <li className='active'>Projects</li>
             </Link>
             <Link to="/Contact">
             <li className='active'>Contact</li>
             </Link>
              <li ><SquareUserRound size={20}/></li>
              <li></li> */}
          
          </div>

        </div>
    </>
  )
}
export default Navbar