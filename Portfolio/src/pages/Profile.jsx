
import Profilex from '../assets/images/profile.png'
import Skills from '../components/Skills'

const Profile=()=>{
  const Skillsdata=[
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
  <div className="h-screen w-screen flex relative">
      <div className="w-1/2 flex flex-col justify-center items-start px-40 pb-10">
        <h1 className="text-4xl font-bold">Dakshinya Loganathan</h1>
        <h3 className="text-3xl italic mt-2">Full Stack Developer</h3>
        <p className="mt-4">
          Welcome to my digital workspace, where code meets creativity. I’m a passionate MERN stack developer dedicated to transforming ideas into innovative solutions. With a deep understanding of technology and a flair for design, I craft seamless, efficient, and impactful applications. Explore my portfolio to see how I bring visions to life through code.
        </p>
      </div>
      <div className="h-screen w-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={Profilex} alt="profile" className="rounded-full h-[50vh]  shadow-lg shadow-red-500" />
        </div>
      </div>
  </div>
  <Skills skill={Skillsdata}/>
  

        </>
    )
}
export default Profile