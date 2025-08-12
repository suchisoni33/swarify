// import React from 'react'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import DisplayHome from './DisplayHome'
// import DisplayAlbum from './DisplayAlbum'
// import { useRef, useEffect } from 'react'
// import { albumsData } from '../assets/assets'

// const Display = () => {
//   const displayRef=useRef();
//   const location =useLocation();
//   const isAlbum = location.pathname.includes("album");
//   const albumId = isAlbum ? location.pathname.split(-1):"";
//   const bgColor= albumData[Number(albumId)].bgColor;
//   useEffect(() => {
//     if (isAlbum) {
//       displayRef.current.style.backgroundColor = 'linear-gradient(${bgColor}, #121212)'
//     }
//     else{
//       displayRef.current.style.backgroundColor =' #121212'
//     }
//   });

//   return (
//     <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>

// <Routes>
//     <Route path='/' element={<DisplayHome/>} />
//      <Route path='/album/:id' element={<DisplayAlbum/>} />
// </Routes>

//     </div>
//   )
// }

// export default Display


import React, { useRef, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  // Get album ID from URL if it's an album route
  const albumId = isAlbum ? location.pathname.split('/').pop() : null;

  // Get background color safely
  const bgColor = albumId && albumsData[Number(albumId)] 
    ? albumsData[Number(albumId)].bgColor 
    : "#121212";

  useEffect(() => {
    if (isAlbum && displayRef.current) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else if (displayRef.current) {
      displayRef.current.style.background = '#121212';
    }
  }, [isAlbum, bgColor]);

  return (
    <div 
      ref={displayRef} 
      className='w-[100%] m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
