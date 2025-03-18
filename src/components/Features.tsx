import Bentodemo from './bentogrid';

export const Features = () => {
  return (

    <div className="bg-black text-white py-[72px] sm:py-24 ">

      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything you need </h2>
        <div className="max-w-xl mx-auto">
  <p className="text-center mt-5 text-xl text-white/90 leading-relaxed">
    Unlock the power of customizable lists, collaborative tools, and smart tracking—all in one place. Set tasks, get reminders. 
    <span className="block mt-3">Easily track your progress. Plus, supercharge your productivity .................................................................</span>
  </p>
</div>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
          

        </div>

      </div>


    </div>
  )
}
