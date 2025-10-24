import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import WhyChooseUs from './Pages/WhyChooseUs'
import Physiotherapy from './Pages/Physiotherapy'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from './components/ScrollToTop';
import Services from './components/Services'; 
import ServiceDetail from './components/ServiceDetail';
import PhysiotherapyDetail from './components/PhysiotherapyDetail';
import NeurologicalDetail from './components/NeurologicalDetail';
import CardiorespiratoryDetail from './components/CardiorespiratoryDetail';
import IastmDetail from './components/IastmDetails';
import GeneralDetail from './components/GeneralDetail';

function App() {


  return (
    <ScrollTop>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/whychooseus' element={<WhyChooseUs/>}/>
      <Route path='/physiotherapy' element={<Physiotherapy/>}/>
      <Route path="/" element={<Services />} />
        
      <Route path="/services/physiotherapy" element={<PhysiotherapyDetail />} />
      <Route path="/services/NeurologicalDetail" element={<NeurologicalDetail />} />
      <Route path="/services/:serviceTitle" element={<ServiceDetail />} />
      <Route path="/services/CardiorespiratoryDetail" element={<CardiorespiratoryDetail />} />
      <Route path="/services/IastmDetails" element={<IastmDetail />} />
      <Route path="/services/GeneralDetail" element={<GeneralDetail />} />
      
    </Routes>
    </ScrollTop>
    
  )
}

export default App