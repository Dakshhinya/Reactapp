
import Profilex from '../assets/images/profile.png'
import java from '../assets/images/java.png'
import react from '../assets/images/react.png'
import c from '../assets/images/letter-c.png'
import js from '../assets/images/js.png'
import node from '../assets/images/node-js.png'
import git from '../assets/images/github.png'
import pg from '../assets/images/postgre.png'

const Profile=()=>{
    return(
        <>
  <div className="h-[75vh] w-screen flex relative">
      <div className="w-1/2 flex flex-col justify-center items-start px-20 pb-5">
        <h1 className="text-4xl font-bold">Dakshinya Loganathan</h1>
        <h3 className="text-3xl italic mt-2">Full Stack Developer</h3>
        <p className="mt-4 max-w-[50vw]">
          Welcome to my digital workspace, where code meets creativity. I’m a passionate MERN stack developer dedicated to transforming ideas into innovative solutions. With a deep understanding of technology and a flair for design, I craft seamless, efficient, and impactful applications. Explore my portfolio to see how I bring visions to life through code.
        </p>
      </div>
      <div className="h-70 w-1/2 flex justify-center items-center ">
        <div className="flex justify-center items-center">
          <img src={Profilex} alt="profile" className="rounded-full h-[50vh]  shadow-lg shadow-red-500" />
        </div>
      </div>
  </div>
      <div className=" pb-6 flex justify-center items-center gap-6 ">
          <img src={java} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
          <img src={react} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
        <img src={c} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
        <img src={js} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
        <img src={node} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
        <img src={git} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
        <img src={pg} alt="icon" className=" h-[6vh] transition-transform duration-300 hover:scale-150" />
        </div>
      
     
        </>
    )
}
export default Profile