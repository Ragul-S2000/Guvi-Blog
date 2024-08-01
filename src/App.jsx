import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import CyberSecurity from './pages/CyberSecurity'
import Fsd from './pages/Fsd'
import DataScience from './pages/DataScience'
import All from './pages/All'
import Career from './pages/Career'

const App = () => {
  const datas = [
    {
      course: "FSD",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      content: "Best Full-Stack Development Project Ideas in 2024",
      link:"https://www.guvi.in/blog/full-stack-development-project-ideas/",
      Author:" Isha Sharma",
      Date: "23 Jul, 2024",
      Read:"4 Min Read",
    },
    {
      course: "FSD",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-1.webp",
      content: "5 Tips For Secure Coding Practices in Full Stack Development",
      link: "https://www.guvi.in/blog/tips-for-secure-coding-practices/",
      Author:"Lukesh S",
      Date: "27 May, 2024",
      Read: "5 Min Read",
    },
    {
      course: "FSD",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Influence-of-AI-and-Machine-Learning-in-Full-Stack-Development-.webp",
      content: "Exploring the Influence of AI and Machine Learning in Full Stack Development [2024]",
      link:"https://www.guvi.in/blog/ai-and-machine-learning-in-full-stack-development/",
      Author: "Jaishree Tomar ",
      Date: "23 May, 2024",
      Read: "6 Min Read",
    }, 
    {
      course: "FSD",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Transitioning-From-Front-End-to-Full-Stack_-A-Guide-for-Developers.png",
      content: "Transitioning From Front End to Full Stack Development: A Guide for Developers",
      link:"https://www.guvi.in/blog/front-end-to-full-stack-development/",
      Author: "Meghana D ",
      Date: "25 Apr, 2024",
      Read: "7 Min Read",
    }, 
    {
      course: "FSD",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Applying-Clean-Code-Principles-in-Full-Stack-Development.webp",
      content: "Applying Clean Code Principles in Full Stack Development: A Comprehensive Guide",
      link: "https://www.guvi.in/blog/how-to-write-clean-code/",
      Author: "Jaishree Tomar",
      Date: "23 May, 2024",
      Read: "7 Min Read",
    }, 
    {
      course: "Cyber security",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/03/real-time-Cybersecurity-projects-2.png",
      content: "Top 25 Real-Time Cybersecurity Project Ideas!",
      link: "https://www.guvi.in/blog/cybersecurity-project-ideas/",
      Author: "Archana",
      Date: "16 Apr, 2024",
      Read: "1 Min Read",
    },
    {
      course: "Cyber security",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      content: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      link: "https://www.guvi.in/blog/coding-for-cybersecurity/",
      Author: "Tushar Vinocha",
      Date: "25 Mar, 2024",
      Read: "4 Min Read",
    },
    {
      course: "Cyber security",
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      content: "The Ultimate Cybersecurity Roadmap for Beginners",
      link: "https://www.guvi.in/blog/cybersecurity-jobs-the-ultimate-beginners-guide-with-roadmap/",
      Author: "Srinithi Sankar",
      Date: "23 Mar, 2024",
      Read: "3 Min Read",
    },
    {
      course: "Cyber security",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
      link: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      Author: "Jaishree Tomar",
      Date: "26 Mar, 2024",
      Read: "4 Min Read",
    },
    {
      course: "Cyber security",
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      content: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      link: "https://www.guvi.in/blog/cybersecurity-certifications/",
      Author: "Tushar Vinochar",
      Date: "25 Mar, 2024",
      Read: "3 Min Read",
    },
    {
      course: "Data science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/07/What-are-Data-Science-Models_-Types-Techniques-and-Process-1.png",
      content: "What are Data Science Models? Types, Techniques, Process",
      link: "https://www.guvi.in/blog/data-science-models-types-and-techniques/",
      Author: "Jaishree Tomar",
      Date: "31 Jul, 2024",
      Read: "5 Min Read",
    },
    {
      course: "Data science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/07/R-for-Data-Science-A-Complete-Guide.png",
      content: "R for Data Science: A Complete Guide",
      link: "https://www.guvi.in/blog/guide-on-r-for-data-science/",
      Author: "Meghana D",
      Date: "31 Jul, 2024",
      Read: "6 Min Read",
    },
    {
      course: "Data science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/07/A-Guide-to-Probability-and-Statistics-for-Data-Science.png",
      content: "Top 10 Data science Courses in India",
      link: "https://www.guvi.in/blog/probability-and-statistics-for-data-science/",
      Author: "Jaishree Tomar",
      Date: "31 Jul, 2024",
      Read: "6 Min Read",
    },
    {
      course: "Data science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/07/Statistics-Interview-Questions-for-Data-Science.webp",
      content: "Top 20 Statistics Interview Questions for Data Science",
      link: "https://www.guvi.in/blog/statistics-interview-questions-for-data-science/",
      Author: "Meghana D",
      Date: "31 Jul, 2024",
      Read: "9 Min Read",
    },
    {
      course: "Data science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/07/What-is-Clustering-in-Data-Science_.png",
      content: "What is Clustering in Data Science? [2024]",
      link: "https://www.guvi.in/blog/clustering-in-data-science/",
      Author: "Lukesh S",
      Date: "31 Jul, 2024",
      Read: "5 Min Read",
    },
    {
      course: "Career",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      content: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      link: "https://www.guvi.in/blog/top-it-jobs-for-commerce-students/",
      Author: "Jaishree Tomar",
      Date: "23 Jul, 2024",
      Read: "5 Min Read",
    },
    {
      course: "Career",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp",
      content: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      link: "https://www.guvi.in/blog/top-technologies-to-learn-now/",
      Author: "Saakshi Priyadarshini",
      Date: "23 Jul, 2024",
      Read: "7 Min Read",
    },
     {
      course: "Career",
       img: "https://www.guvi.in/blog/wp-content/uploads/2020/12/tumbnail-img-2-2048x1033.jpg",
       content: "MEAN vs MERN: Career Growth & Salary",
       link: "https://www.guvi.in/blog/mean-vs-mern-stack-the-right-choice-for-me/",
      Author: "admin",
       Date: "29 Jul, 2024",
       Read: "5 Min Read",
    },
    {
      course: "Career",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Tips-to-Stay-Motivated-in-Your-Motion-Graphic-Design-Career.webp",
      content: "Top 10 Data Science Tools in 2024",
      link: "https://www.guvi.in/blog/tips-to-stay-motivated-for-motion-graphic-career/",
      Author: " Lukesh S",
      Date: "Jun 29, 2024",
      Read: "7 Min Read",
    },
    {
      course: "Career",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/9-Creative-Data-Engineering-Project-Ideas-To-Kickstart-Your-Career.webp",
      content: "9 Most Creative Data Engineering Project Ideas To Kickstart Your Career",
      link: "https://www.guvi.in/blog/most-creative-data-engineering-project-ideas/",
      Author: "Lukesh S",
      Date: "03 Jul, 2024",
      Read: "6 Min Read",
    }
  ]
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container-fluid '>
        <div className=' row  gx-0 justify-content-center gy-3'>
        <Routes>
          <Route path='/' element={<All  datas={datas} />} />
          <Route path='/career' element={<Career datas={datas} />} />
          <Route path='/cs' element={<CyberSecurity datas={datas} />} />
          <Route path='/fsd' element={<Fsd datas={datas} />} />
          <Route path='/ds' element={<DataScience datas={datas} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App