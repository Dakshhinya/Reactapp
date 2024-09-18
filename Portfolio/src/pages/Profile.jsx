
import Profilex from '../assets/images/profile1.png'

const Profile=()=>{
    return(
        <>
        <div className="h-screen w-screen flex">
      <div className="w-1/2 flex justify-center items-center text-center px-8">
        <p>
          Welcome to my digital workspace, where code meets creativity. I’m a passionate software developer dedicated to transforming ideas into innovative solutions. With a deep understanding of technology and a flair for design, I craft seamless, efficient, and impactful applications. Explore my portfolio to see how I bring visions to life through code.
        </p>
      </div>
      <div className="h-[50vh] w-1/2 flex justify-center items-center">
        <div className="h-full w-full flex justify-center items-start pt-40">
          <img src={Profilex} alt="profile" className="rounded-full h-60 w-60" />
        </div>
      </div>
    </div>
        </>
    )
}
export default Profile