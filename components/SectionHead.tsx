import React from 'react'
import ButtonUI from './ButtonUI';
import { poppins, playfair_display } from '@/styles/fonts';

const SectionHead = () => {
  return (
    <section className=' h-auto md:h-[80dvh] overflow-x-hidden p-4 md:pb-4 md:pt-8 md:px-8 flex flex-col items-start justify-end '>
        <div style={{lineHeight:0.9}} className={`${poppins.className}  pt-44 font-extrabold leading-[3rem]  text-[32px] md:text-[5.5rem]  `} >Fostering A Legacy of <span className={`${playfair_display.className}`}>Learning</span> and <span className={`${playfair_display.className}`}>Leadership</span></div>
        <ButtonUI actionlink='/about' actiontext='' />
    </section>
  )
}

export default SectionHead