/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'
import celana1 from './img/celana1.jpeg'
import celana2 from './img/celana2.jpeg'
import celana3 from './img/celana3.jpeg'
import celana4 from './img/celana4.jpeg'
import celana5 from './img/celana5.jpeg'
import celana6 from './img/celana6.jpeg'
import celana7 from './img/celana7.jpeg'
import celana8 from './img/celana8.jpeg'
import Footer from './footer'


const products = [
  {
    id: 1,
    name1: 'Folk Store - WASHED JEANS - GLOSO',
    href: '#',
    imageSrc1: {celana1},
    imageAlt: "Front of men's Basic Tee in black.",
    price1: 'Rp. 250.000',
    color: 'Black',

    id: 1,
    name2: 'Folk Store - SHORT - KONA YL',
    href: '#',
    imageSrc: {celana2},
    imageAlt: "Front of men's Basic Tee in black.",
    price2: 'Rp. 250.000',
    color: 'Black',

    id: 1,
    name3: 'Folk Store - SHORT - KONA GN',
    href: '#',
    imageSrc: {celana3},
    imageAlt: "Front of men's Basic Tee in black.",
    price3: 'Rp. 225.000',
    color: 'Black',


    id: 1,
    name4: 'Folk Store - SHORT - LEON GR',
    href: '#',
    imageSrc: {celana4},
    imageAlt: "Front of men's Basic Tee in black.",
    price4: 'Rp. 250.000',
    color4: 'Black',

    id: 1,
    name5: 'Folk Store - CARDIGAN KNIT - HUBE BC',
    href: '#',
    imageSrc: {celana5},
    imageAlt: "Front of men's Basic Tee in black.",
    price5: 'Rp. 250.000',
    color5: 'Black',

    id: 1,
    name6: 'Folk Store - SHORT - BOY BC',
    href: '#',
    imageSrc: {celana6},
    imageAlt: "Front of men's Basic Tee in black.",
    price6: 'Rp. 250.000',
    color6: 'Black',

    id: 1,
    name7: 'FOLK Store - SHORT - LORD BC',
    href: '#',
    imageSrc: {celana7},
    imageAlt: "Front of men's Basic Tee in black.",
    price7: 'Rp. 250.000',
    color7: 'Black',

    id: 1,
    name8: 'FOLK Store - SHORT - WIZARD BC',
    href: '#',
    imageSrc: {celana8},
    imageAlt: "Front of men's Basic Tee in black.",
    price8: 'Rp. 150.000',
    color8: 'Black',





    

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
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-500">New Release!</h2>
        

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={celana1}
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
                  <p className="mt-1 text-sm text-gray-500">{product.color1}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price1}</p>
              </div>
            </div>
          ))}

{products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={celana2}
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
                  src={celana3}
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
                  src={celana4}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name4}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price5}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={celana5}
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
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price5}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={celana6}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name6}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price5}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={celana7}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name7}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price5}</p>
              </div>
            </div>
          ))}
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                <img
                  src={celana8}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name8}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price8}</p>
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
