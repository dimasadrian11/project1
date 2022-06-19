/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'
import kaos1 from './img/kaos1.jpeg'
import kaos2 from './img/kaos2.jpeg'
import kaos3 from './img/kaos3.jpeg'
import kaos4 from './img/kaos4.jpeg'
import Footer from './footer'


const products = [
  {
    id: 1,
    name1: 'Shirt Issolde Black Folk Store',
    href: '#',
    imageSrc1: {kaos1},
    imageAlt: "Front of men's Basic Tee in black.",
    price1: 'Rp. 350.000',
    color: 'Black',

    id: 1,
    name2: 'Shirt Fleurde Black Folk Store',
    href: '#',
    imageSrc: {kaos2},
    imageAlt: "Front of men's Basic Tee in black.",
    price2: 'Rp. 350.000',
    color: 'Black',

    id: 1,
    name3: 'Tshirt Taryn Black Folk Store',
    href: '#',
    imageSrc: {kaos3},
    imageAlt: "Front of men's Basic Tee in black.",
    price3: 'Rp. 150.000',
    color: 'Black',


    id: 1,
    name5: 'FAMILIAS - CARDIGAN KNIT - HUBE BC',
    href: '#',
    imageSrc: {kaos4},
    imageAlt: "Front of men's Basic Tee in black.",
    price5: 'Rp. 250.000',
    color5: 'Black',

    

  },
  // More products...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
    <div className="min-h-full">

    <Navbar/>

    {/* Isi */}
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-500">New Catalog!</h2>
        

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={kaos1}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name1}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price1}</p>
              </div>
            </div>
          ))}

{products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={kaos2}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name2}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price2}</p>
              </div>
            </div>
          ))}

{products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={kaos3}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name3}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price3}</p>
              </div>
            </div>
          ))}


{products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={kaos4}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name5}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color5}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price5}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
        
        


           
          </div>
    <Footer/>
        
      
    </>
  )
}
