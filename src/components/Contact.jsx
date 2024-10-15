import React from 'react'
import {motion} from 'framer-motion';
import emailjs from 'emailjs-com';
import {styles} from '../styles';
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion';
const Contact = () => {
  const formRef= React.useRef();
  const [form,setForm]=React.useState({
    name:'',
    email:'',
    message:''
  });
  const [loading,setLoading]=React.useState(false);
  const handleChange = (e)=>{
     const {name,value}=e.target
     setForm({...form,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_ctwae0s','template_4k8tx4n',
      {
        from_name:form.name,
        to_name:'aida',
        from_email:form.email,
        to_email:"aida.ms0097@gmail.com",
        message:form.message
      },
      'JJsLQIXT5guokDKSf'
    ).then(()=>{
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible');
      setForm({
        name:'',
        email:'',
        message:''
      })
    },
  error=>{
    setLoading(false)
    console.log(error)
    alert('Something with wrong')
  })
  }
  return (
    <div className='xl:mt-12 xl:flex-row
     flex-col-reverse flex 
    gap-10 overflow-hidden'>
      <motion.div
       variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2x1'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' action="">
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your name</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             type="text" name='name' value={form.name} onChange={handleChange} placeholder='What is your name?'/>
          </label>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your email</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             type="email" name='email' value={form.email} onChange={handleChange} placeholder='Your email?'/>
          </label>
          <label className='flex flex-col' htmlFor="">
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea rows = '7' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
             type="message" name='message' value={form.message} onChange={handleChange} placeholder='Your message?'/>
          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' type='submit'>
            {loading ?'Sending...' :'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper (Contact,"contact")