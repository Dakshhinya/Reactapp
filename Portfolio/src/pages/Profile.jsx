
import Profilex from '../assets/images/profile1.png'

const Profile=()=>{
    return(
        <>
        <div className="h-screen w-screen flex relative">
      <div className="w-1/2 flex flex-col justify-center items-start px-40 pb-10">
        <h1 className="text-4xl font-bold">Dakshinya Loganathan</h1>
        <h3 className="text-2xl italic mt-2">Full Stack Developer</h3>
        <p className="mt-4">
          Welcome to my digital workspace, where code meets creativity. I’m a passionate MERN stack developer dedicated to transforming ideas into innovative solutions. With a deep understanding of technology and a flair for design, I craft seamless, efficient, and impactful applications. Explore my portfolio to see how I bring visions to life through code.
        </p>
      </div>
      <div className="h-screen w-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={Profilex} alt="profile" className="rounded-full h-60 w-60 shadow-lg shadow-red-500" />
        </div>
      </div>
<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div id="k" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-center">
    <p id="prompt">HOVER OVER :D</p>
    <p id="prompt">HOVER OVER :D</p>
      <div class="title"></div>
      <div class="subtitle">
      </div>
      
    </div>
  </div>
</div>
    </div>
        </>
    )
}
export default Profile