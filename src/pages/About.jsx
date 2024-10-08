import './About.scss'
import ImageGallery from '@/components/ImageGallery';
import '@/components/ImageGallery.jsx';
import AboutVideo from "@/assets/images/Video2.mp4";
import image1 from "@/assets/images/1.jpg";
import { motion } from "framer-motion"
import { useState } from 'react';

const About = () => {
  const images = [
    "https://res.cloudinary.com/dhk9t1bus/image/upload/v1728406488/1_c2nuxv.jpg", 
    "https://res.cloudinary.com/dhk9t1bus/image/upload/v1728406487/2_kedkdl.jpg", 
    "https://res.cloudinary.com/dhk9t1bus/image/upload/v1728406486/hs4u2cfp_oradhy.png",
    // "https://i.postimg.cc/GhHkwY9s/4.jpg",
  ];

  const [direction, setDirection] = useState(-100)

  function handleDirection() {
    setDirection(direction * (-1));
  }

  return (
    <div className="Aboutpage">

      <motion.div
        className="Aboutintro"
        initial={{ scale: 0.899 }}
        // whileInView={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <video controls autoPlay loop >
          <source src={AboutVideo} type="Video/mp4" />
        </video>
      </motion.div>

      <motion.div
        className="AboutCrescentexport"
        initial={{ translateX: direction, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        exit={{ translateX: direction, opacity: 0 }}
        transition={{ duration: 1 }}
        onViewportLeave={handleDirection}
      >
        <h1>About Crescent Export</h1>
        <div className="AboutCrescentexportcontent">
          <p>There are numerous bags manufacturers which produce bags as good as ours, yet we believe we stand apart from the rest because of the founding principles on which our business is based: “A customer is the most important visitor on our premises. He is not dependent on us. We are dependent on him. He is not an interruption in our work. He is the purpose of it. He is not an outsider in our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so”.</p>
        </div>
        <img src={image1} alt="Picture" />
      </motion.div>

      <div className="WhyChooseUs">
        <motion.h1 initial={{scale: 0.9}} whileInView={{scale: 1}} transition={{duration: 1}}>Why Choose Us</ motion.h1>
        <motion.div 
        className='aboutimages'
        initial={{translateX: -200}}
        whileInView={{translateX: 0}}
        exit={{translateX : -200}}
        transition={{duration: 1}}
        >
        </motion.div>
        <ImageGallery images={images} />
        <motion.p
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          The Management Team Achieved merits of high profile in the international market by its commitment for Absolute quality in every transaction, time-bounds delivery, irrespective of the volumes, Lasting Impressions in terms of work ethics, Affordable yet competitive pricing & Stunning display of World-class designs.</motion.p>
      </div>

    </div>
  )
}

export default About