import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import { fadeIn,textVariant } from '../utils/motion';
import { projects } from '../constants';
import { a } from 'maath/dist/objectSpread2-284232a6.esm';
const ProjectCard=({index,name,description,tags,image,repo,showDemo})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index* 0.5,0.75)}>
      <Tilt 
      options={{
        max:45,
        scale:1,
        speed:450
      }} className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>
          <img src={image} alt = {name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <a href={repo}><img src={github} className='w-1/2 h-1/2 object-contain' alt="" /></a>
            </div>
          </div>
        </div>
        <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        {showDemo && (
          <a style={{color:"#f00c93"}} href="https://appliancech.vercel.app/">Website Demo</a>
        )}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My Work</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
   </motion.div>
   <div className='w-full flex'>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      </motion.p>
   </div>
   <div className='mt-20 flex flex-wrap gap-7'>
    {
      projects.map((project,index)=>(
        <ProjectCard key = {`project-${index}`}
        index={index} 
        showDemo={index === 0}
        {...project}/>
      ))
    }
    <a style={{display:"block",margin:"0 auto"}} href="https://github.com/aidokkaa?tab=repositories"><div style={{width:"145px",textAlign:"center",borderRadius:"10px",backgroundColor:"white",padding:"10px"}}><h2 style={{color:"black"}}>Other projects</h2></div></a>
   </div>
   </>
  )
}

export default SectionWrapper( Works,"")