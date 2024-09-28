import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
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
      img: "https://th.bing.com/th/id/OIP.3D3UjTNp81qWR9pkmESbWwHaE6?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
      img: "https://th.bing.com/th/id/OIP.dYgvEuPuCHkepFEsa56NFwHaEQ?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
      img: "https://th.bing.com/th/id/OIP.7IfJlEVCJmxauF3kQljnxQHaEP?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      content: "Top 25 Real-Time Cybersecurity Project Ideas!",
      link: "https://www.guvi.in/blog/cybersecurity-project-ideas/",
      Author: "Archana",
      Date: "16 Apr, 2024",
      Read: "1 Min Read",
    },
    {
      course: "Cyber security",
      img: "https://th.bing.com/th/id/OIP.rnT3vEGjGq4b50VphfgmEQHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
      img: "https://th.bing.com/th/id/OIP.okzy9QQMYy-wbFQTrHX2gAHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      content: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      link: "https://www.guvi.in/blog/cybersecurity-certifications/",
      Author: "Tushar Vinochar",
      Date: "25 Mar, 2024",
      Read: "3 Min Read",
    },
    {
      course: "Data science",
      img: "https://th.bing.com/th/id/OIP.tt1YwwsTgGuUZaovQgYKYQHaFS?w=262&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      content: "What are Data Science Models? Types, Techniques, Process",
      link: "https://www.guvi.in/blog/data-science-models-types-and-techniques/",
      Author: "Jaishree Tomar",
      Date: "31 Jul, 2024",
      Read: "5 Min Read",
    },
    {
      course: "Data science",
      img: "https://th.bing.com/th/id/OIP.DKzXinIScievLKBVBlwhGAAAAA?w=298&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      content: "R for Data Science: A Complete Guide",
      link: "https://www.guvi.in/blog/guide-on-r-for-data-science/",
      Author: "Meghana D",
      Date: "31 Jul, 2024",
      Read: "6 Min Read",
    },
    {
      course: "Data science",
      img: "https://th.bing.com/th/id/OIP.me6Ct9ju1ZDEYxD8TBz2HgHaEo?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
      img: "https://th.bing.com/th/id/OIP.MRTjHNU9hk3RiOg_7-QeGwHaFj?w=250&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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
       img: "https://th.bing.com/th/id/OIP.ogRNXl8_dGotFP7dvFURRgHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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