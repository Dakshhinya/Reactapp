import Navbar from "../components/Navbar";
import Cards from "../components/Cards"

const Project=()=>{
    const CardLayout=[
      {
        title:"Hospital Management"
      },
      {
        title:"Facial Recognition based Attendance System"
      },
      {
        title:"Portfolio with MERN"
      }
    ] 
    return(
        <>
<h1 className=" w-vh h-vh flex justify-center items-center text-3xl font-bold mb-10 pt-20">PROJECT SPACE</h1>
        <div className="w-vh h-vh flex flex-row justify-center items-center p-20 gap-10">

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
<Cards CardLayout={CardLayout}/>
</div> 
        </>
    )
}
export default Project