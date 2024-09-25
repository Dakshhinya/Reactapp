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
              
              <li></li>
               </ul>
              
          </div>

        </div>
        
    </>
  )
}
export default Navbar