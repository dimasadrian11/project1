import Navbar from './Navbar'
import Footer from './footer'
import kaos1 from './img/kaos1.jpeg'
import logo from './img/logo.png'
import SALE from './img/new Sale.png'
import Carousel from './carousel'
export default function Example() {
  return (

    <>
    <Navbar /> 
    <Carousel /> 
  
    
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7x1 mx-auto">
        <div className="relative z-10 pb-8 bg-white 0 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 100 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* Main */}
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-700 sm:text-5xl md:text-6xl">
              <span class="bg-clip-text-gray-400">
                New Drops <h2>New Collections</h2>
                </span>{''}
              </h1>
             
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="about"
                    className="shadow-lg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-100 bg-stone-900 md:py-4 md:text-lg md:px-10"
                  >
                    ABOUT US
                  </a>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-1 w-1 mt-20 object-cover sm:h-40 md:h-30 lg:w-auto lg:h-auto"
          src= {SALE}
          alt=""
        />
      </div>
    </div>

    <Footer/>
    </>
  )
}



