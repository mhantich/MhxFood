import { Play } from 'lucide-react'

function AboutSer() {
  return (
    <div>
            <div className="relative h-[70vh] flex items-center justify-center object-cover"    style={{
        backgroundImage: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/80/29/f2/terraza-aire-cuenta-con.jpg?w=900&h=500&s=1)`,
        transformOrigin: "center center",
      }}>
      <div
       
      >
        <div className="absolute inset-0 bg-black/30 z-10" />


        {/* Content */}
        <div className="  z-20 flex h-full relative  items-center justify-center text-center">
          <div className="max-w-3xl px-4 flex flex-col items-center justify-center gap-2"> 
            <Play className='text-black  h-10 w-10 bg-white rounded-full p-2 text-center'/>
            <h1
              className={`mb-6 lg:text-4xl text-2xl   font-extrabold text-white transform transition-all duration-1000 ease-out
                 `}
            >
                Lorem ipsum dolor sit <br /> amet consectetur
            </h1>
     
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutSer