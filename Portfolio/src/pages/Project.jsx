import Navbar from "../components/Navbar";
import { useEffect,useState } from "react";
import {getProjects} from '../services/api'
import AddComponents from '../components/AddComponents'
import Cards from "../components/Cards"
import {MessageCircleWarning} from 'lucide-react'
import { toast,Toaster } from "sonner";


const Project=()=>{
  const [projectdata,setProjectdata]=useState(null)
  const fetchprojects=async()=>{
    try{
      const {data}=await getProjects()
      setProjectdata(data)
    }catch(error){
      console.warn(error);
      toast('Error',{
        className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon:<MessageCircleWarning />,
      });
    }
  }
  // console.log(projectdata)

  useEffect(()=>{
    fetchprojects()
  }, [])
  if(!projectdata || projectdata.length===0){
    return(
      <div className="w-full h[10%] flex justify-center items-end">
        <AddComponents/>
      </div>
    )
  }
  return(
    <>
    <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
    <div className="w-full h-[10%] flex justify-end items-end px-10">
    <AddComponents fetchprojects={fetchprojects}/>
    </div>
    {
      projectdata.map((data,index)=>(
        <Cards title={data.title} desc={data.desc} key={index} pid={index} kid={index + 1} cover={data.coverimg} id={data.id} link={data.link} fetchprojects={fetchprojects} />
      ))
    }
    </div>
    <Toaster richColors/>
    </>
  )
}
export default Project
    // const CardLayout=[
    //   {
    //     title:"Hospital Management"
    //   },
    //   {
    //     title:"Facial Recognition based Attendance System"
    //   },
    //   {
    //     title:"Portfolio with MERN"
    //   }
    // ] 

//     return(
//         <>
// <h1 className=" w-vh h-vh flex justify-center items-center text-3xl font-bold mb-10 pt-20">PROJECT SPACE</h1>
//         <div className="w-vh h-vh flex flex-row justify-center items-center p-20 gap-10">

{/* <div class="box flex justify-center items-center space -x-8">
  <span></span>
  <div class="content">
    <h2>Hospital Management</h2>
  </div>
</div>
<div class="box">
  <span></span>
  <div class="content">
    <h2>Facial Recognition based Attendance System</h2>
  </div>
</div>
<div class="box">
  <span></span>
  <div class="content">
    <h2>Portfolio with MERN</h2>
  </div>
</div>*/}
{/* <Cards CardLayout={CardLayout}/>
</div>  */}
//         </>
//     )
// }
