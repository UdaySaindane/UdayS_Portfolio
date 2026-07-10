import { motion } from "framer-motion";
import "./Resume.css";


const Resume = () => {


const skills = [
 "React.js",
 "Node.js",
 "Express.js",
 "Django",
 "MySQL",
 "MongoDB",
 "Java",
 "Python",
 "Git",
 "Docker"
];


return (

<div className="resume-container">


<motion.h1
className="page-title"
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
>

Resume

<div className="title-underline"></div>

</motion.h1>



<div className="resume-header">


<div>

<h2>
Uday Saindane
</h2>

<p>
Full Stack Developer | Computer Engineer
</p>


</div>


{/* <a 
href="/https://drive.google.com/file/d/1F6r2624898g1Yc4rIWgs6WoO7Qr-jXYo/view?usp=drive_link"
  target="_blank"
    rel="noopener noreferrer"


className="download-btn"
>
View Resume 📄
</a> */}


</div>




<div className="resume-grid">



<motion.div 
className="resume-card summary"
initial={{opacity:0,x:-30}}
animate={{opacity:1,x:0}}
>


<h3>About Me ✏️</h3>


<p>
Computer Engineering student skilled in Full Stack Web
Development with experience in building scalable web
applications using React.js, Node.js, Express.js,
Django and databases.
</p>


</motion.div>






<motion.div 
className="resume-card"
initial={{opacity:0,x:30}}
animate={{opacity:1,x:0}}
>


<h3>Tech Stack 💻</h3>


<div className="skill-cloud">

{
skills.map(skill=>(

<span key={skill}>
{skill}
</span>

))
}


</div>


</motion.div>







<motion.div 
className="resume-card"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
>


<h3>Education 🎓</h3>


<div className="timeline">

<p>
<b>BE Computer Engineering</b>
<br/>
SNJB College Of Engineering
<br/>
SGPA : 9.10
</p>


<p>
<b>HSC</b>
<br/>
78.17 %
</p>


<p>
<b>SSC</b>
<br/>
92.40 %
</p>


</div>


</motion.div>







<motion.div 
className="resume-card"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
>


<h3>Projects 🚀</h3>


<div className="project-note">

<h4>
ScholarNest
</h4>

<p>
React • Node • Express • MySQL
</p>

<ul>

<li>
Multi-role scholarship platform
</li>

<li>
JWT Authentication & RBAC
</li>

<li>
15+ REST APIs
</li>

</ul>


</div>



<div className="project-note">

<h4>
E-Learning Platform
</h4>

<p>
Django • PostgreSQL
</p>


<ul>

<li>
Role based LMS
</li>

<li>
CI/CD deployment
</li>

</ul>

</div>



</motion.div>








<motion.div 
className="resume-card"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
>


<h3>Experience 💼</h3>


<p>

<b>
Full Stack Developer Intern
</b>

<br/>

NewGen Tech Pvt Ltd


<br/><br/>

Built Student Management System using Java Servlets,
JSP, JDBC and MySQL.

</p>



</motion.div>







<motion.div 
className="resume-card"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
>


<h3>Certification 🏆</h3>


<p>
AICTE EduSkills Full Stack Web Development
</p>


</motion.div>




</div>



</div>

)

}


export default Resume;