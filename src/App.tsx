
import { Suspense } from 'react'
import './App.css'
import Hero from './components/hero'
import Navbar from './components/nav'
import ReceiveData from './components/receiveData'

import type { IData } from './type'
import Footer from './components/footer'


const userPromise= async():Promise<IData[]>=>{
const res= await fetch('data.json')
const data =await res.json()

return  data
}

function App() {
  

  return(
    <>
    <Navbar></Navbar>
    <Hero></Hero>
   <Suspense fallback= {
    <div className="flex items-center justify-center py-20 gap-3">
      <div className="w-6 h-6 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-gray-600 font-medium">Loading data...</span>
    </div>
  }>
     <ReceiveData userPromise={userPromise()}></ReceiveData>
   </Suspense>
    <Footer></Footer>
    </>
  )
    
}   

export default App
