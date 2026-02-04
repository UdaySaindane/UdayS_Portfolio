// import { motion } from 'framer-motion';
// import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './Contact.css';

// const Contact = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState({ type: '', message: '' });

//   // 🔑 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
//   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // e.g., 'service_abc123'
//   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
//   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g., 'abcdefghijk123456'

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Map EmailJS field names to state
//     const fieldMap = {
//       'from_name': 'name',
//       'from_email': 'email',
//       'message': 'message'
//     };
    
//     setFormData({
//       ...formData,
//       [fieldMap[name]]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus({ type: '', message: '' });

//     try {
//       // Send email using EmailJS
//       const result = await emailjs.sendForm(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         form.current,
//         EMAILJS_PUBLIC_KEY
//       );

//       console.log('Email sent successfully:', result.text);
      
//       // Success state
//       setStatus({
//         type: 'success',
//         message: '🎉 Thanks for reaching out! I\'ll get back to you soon!'
//       });
      
//       // Clear form
//       setFormData({ name: '', email: '', message: '' });
      
//     } catch (error) {
//       console.error('Email send failed:', error);
      
//       // Error state
//       setStatus({
//         type: 'error',
//         message: '😔 Oops! Something went wrong. Please try again or email me directly.'
//       });
//     } finally {
//       setLoading(false);
      
//       // Clear status message after 5 seconds
//       setTimeout(() => {
//         setStatus({ type: '', message: '' });
//       }, 5000);
//     }
//   };

//   return (
//     <div className="contact-container">
//       <motion.h1 
//         className="page-title"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Let's Connect!
//         <div className="title-underline"></div>
//       </motion.h1>

//       <div className="contact-content">
//         <motion.div 
//           className="contact-info"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="sticky-note-info">
//             <div className="info-tape"></div>
//             <h3 className="info-heading">Get in Touch~</h3>
//             <p className="info-text">
//               Have a project in mind? Want to collaborate? Or just want to say 
//               hi? Feel free to drop me a message!
//             </p>
            
//             <div className="contact-details">
//               <div className="contact-item">
//                 <span className="contact-icon">📧</span>
//                 <div>
//                   <div className="contact-label">Email</div>
//                   <a href="mailto:your.email@example.com" className="contact-link">
//                     your.email@example.com
//                   </a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <span className="contact-icon">💼</span>
//                 <div>
//                   <div className="contact-label">LinkedIn</div>
//                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
//                     linkedin.com/in/yourprofile
//                   </a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <span className="contact-icon">💻</span>
//                 <div>
//                   <div className="contact-label">GitHub</div>
//                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
//                     github.com/yourusername
//                   </a>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <span className="contact-icon">🐦</span>
//                 <div>
//                   <div className="contact-label">Twitter</div>
//                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link">
//                     @yourhandle
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <motion.div 
//               className="doodle-bottom"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               <svg width="120" height="40" viewBox="0 0 120 40">
//                 <path d="M 10 20 Q 40 5, 60 20 T 110 20" 
//                   stroke="#667eea" 
//                   strokeWidth="2" 
//                   fill="none"
//                   strokeDasharray="3,3"
//                 />
//               </svg>
//             </motion.div>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="contact-form-wrapper"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <form className="contact-form" onSubmit={handleSubmit} ref={form}>
//             <div className="form-header">
//               <span className="form-icon">✉️</span>
//               <h3>Send me a message</h3>
//             </div>

//             {/* Status message */}
//             {status.message && (
//               <motion.div 
//                 className={`status-message ${status.type}`}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//               >
//                 {status.message}
//               </motion.div>
//             )}

//             <div className="form-group">
//               <label htmlFor="name" className="form-label">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="from_name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="form-input"
//                 placeholder="John Doe"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email" className="form-label">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="from_email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="form-input"
//                 placeholder="john@example.com"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message" className="form-label">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="form-textarea"
//                 placeholder="Write your message here..."
//                 rows="6"
//                 required
//                 disabled={loading}
//               ></textarea>
//             </div>

//             <motion.button
//               type="submit"
//               className="submit-button"
//               whileHover={{ scale: loading ? 1 : 1.05, boxShadow: loading ? "" : "4px 4px 0 rgba(118, 75, 162, 0.3)" }}
//               whileTap={{ scale: loading ? 1 : 0.95 }}
//               disabled={loading}
//             >
//               {loading ? '✈️ Sending...' : 'Send Message 🚀'}
//             </motion.button>
//           </form>

//           <div className="form-decoration">
//             <span className="star-deco">✨</span>
//             <span className="star-deco">✨</span>
//             <span className="star-deco">✨</span>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon! 😊');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect!
        <div className="title-underline"></div>
      </motion.h1>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sticky-note-info">
            <div className="info-tape"></div>
            <h3 className="info-heading">Get in Touch~</h3>
            <p className="info-text">
              Have a project in mind? Want to collaborate? Or just want to say 
              hi? Feel free to drop me a message!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <div className="contact-label">Email</div>
                  <a href="mailto:udaysaindane3421@gmail.com" className="contact-link">
                    udaysaindane3421@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/udaysaindane07/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    linkedin.com/in/udaysaindane07
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div>
                  <div className="contact-label">GitHub</div>
                  <a href="https://github.com/UdaySaindane" target="_blank" rel="noopener noreferrer" className="contact-link">
                    github.com/UdaySaindane
                  </a>
                </div>
              </div>

              {/* <div className="contact-item">
                <span className="contact-icon">🐦</span>
                <div>
                  <div className="contact-label">Twitter</div>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                    @yourhandle
                  </a>
                </div>
              </div> */}
            </div>

            <motion.div 
              className="doodle-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <svg width="120" height="40" viewBox="0 0 120 40">
                <path d="M 10 20 Q 40 5, 60 20 T 110 20" 
                  stroke="#667eea" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="3,3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <span className="form-icon">✉️</span>
              <h3>Send me a message</h3>
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Write your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05, boxShadow: "4px 4px 0 rgba(118, 75, 162, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message 🚀
            </motion.button>
          </form> */}

          <div className="form-decoration">
            <span className="star-deco">✨</span>
            <span className="star-deco">✨</span>
            <span className="star-deco">✨</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

