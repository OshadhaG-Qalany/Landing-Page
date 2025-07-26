// import React, { useEffect } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";
// import { 
//   ArrowRight, 
//   Shield, 
//   Zap, 
//   Users, 
//   Star,
//   ChevronDown,
//   Menu,
//   X,
//   Mail,
//   Phone,
//   MapPin,
//   Twitter,
//   Linkedin,
//   Github
// } from "lucide-react";
// import Oshadha from './assets/Oshadha2.png';
// import Tharindu from './assets/Tharindu2.png';

// // Hero Section Component
// const HeroSection = () => {
//   <style>
//   {`
//     .typing-effect {
//       overflow: hidden;
//       border-right: 0.15em solid orange; /* Cursor effect */
//       white-space: nowrap;
//       animation: typing 2s steps(12, end), blink 0.75s step-end infinite;
//       font-size: inherit;
//       line-height: 1.5;
//     }

//     @keyframes typing {
//       from { width: 0 }
//       to { width: 100% }
//     }

//     @keyframes blink {
//       from, to { border-color: transparent }
//       50% { border-color: orange; }
//     }
//   `}
// </style>


//   return (
//     <motion.section 
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
//         // style={{
//         //   backgroundImage: `url('https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
//         // }}
//       />
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-qalany-orange opacity-10 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-qalany-orange opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//             Take Control of Your
//             <span   style={{ lineHeight: '1.5' }} className="typing-effect block text-transparent bg-clip-text bg-gradient-to-r from-qalany-orange to-yellow-400">
//               Digital World
//             </span>
//           </h1>
//         </motion.div>

//         {/* <motion.p 
//           className="text-xl md:text-2xl font-bold text-qalany-light-gray mb-12 max-w-3xl mx-auto leading-relaxed"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           style={{color: "#14213D"}}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           We got this...
//         </motion.p> */}
//         <div style={{display:"flex", flexDirection:"column", rowGap:"80px"}}>

//         <motion.div 
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           <button className="group bg-qalany-orange hover:bg-yellow-400 text-qalany-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-glow-orange flex items-center">
//             Get Started
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//           </button>
//           {/* <button className="border-2 border-qalany-orange text-qalany-orange hover:bg-qalany-orange hover:text-qalany-black font-bold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm">
//             Learn More
//           </button> */}
//         </motion.div>

//         <motion.div 
//           className="relative bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           <ChevronDown className="text-qalany-orange w-8 h-8" />
//         </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// // About Section Component
// const AboutSection = () => {
// const founders = [
//   {
//     name: "Oshadha Goonathilaka",
//     title: "Founder",
//     image: Oshadha,
//     position:"-1rem 1px"
//   },
//   {
//     name: "Tharindu De Silva", 
//     title: "Co-Founder",
//     image: Tharindu,
//     position:"0px -60px"

//   }
// ];

//   return (
//     <section className="py-24 bg-white" style={{paddingTop:"0rem"}}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-qalany-black mb-6">
//             About Qalany
//           </h2>
//           <div className="w-24 h-1 bg-qalany-orange mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Our mission is simple yet powerful: <strong className="text-qalany-navy">Helping you take control of your digital world.</strong> 
//             We envision a future where technology empowers you to live fully, making your digital world work seamlessly for you.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-3xl font-bold text-qalany-navy mb-6">Our Vision</h3>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               We believe that technology should serve humanity, not the other way around. 
//               At Qalany, it’s all about putting you in control, so your digital world feels easy, powerful, and truly yours.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
//                 <span className="text-gray-700">Digital empowerment for everyone</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
//                 <span className="text-gray-700">Innovation with purpose</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
//                 <span className="text-gray-700">User-centric design philosophy</span>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div 
//             className="grid sm:grid-cols-2 gap-8"
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             {founders.map((founder, index) => (
//               <motion.div 
//                 key={index}
//                 className="text-center group"
//                 whileHover={{ y: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="relative mb-6">
//                   <img 
//                     src={founder.image}
//                     alt={founder.name}
//                     style={{objectPosition: founder.position, background: "rgba(252, 163, 17, 0.09)"}}
//                     className=".img-founders w-40 h-40 rounded-full object-cover mx-auto shadow-premium group-hover:shadow-glow-navy transition-all duration-300"
//                   />
//                   <div className="absolute inset-0 rounded-full bg-qalany-navy opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </div>
//                 <h4 className="text-xl font-bold text-qalany-black mb-2">{founder.name}</h4>
//                 <p className="text-qalany-orange font-semibold">{founder.title}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Features Section Component
// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: Shield,
//       title: "Digital Security",
//       description: "Advanced protection for your digital assets with enterprise-grade security measures."
//     },
//     {
//       icon: Zap,
//       title: "Instant Automation",
//       description: "Streamline your workflow with intelligent automation that learns and adapts."
//     },
//     {
//       icon: Users,
//       title: "Collaborative Control",
//       description: "Seamlessly manage digital resources across teams with intuitive collaboration tools."
//     }
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-qalany-light-gray to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-qalany-black mb-6">
//             Powerful Features
//           </h2>
//           <div className="w-24 h-1 bg-qalany-orange mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             You’re in charge now. Our tools do the heavy lifting so you can chill and get things done your way.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div 
//               key={index}
//               className="group bg-white p-8 rounded-2xl shadow-premium hover:shadow-glow-orange transition-all duration-500 backdrop-blur-sm border border-gray-100"
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//             >
//               <div className="mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-qalany-navy mb-4 group-hover:text-qalany-orange transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="mt-16 relative"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div 
//             className="rounded-3xl overflow-hidden shadow-premium h-64 bg-cover bg-center relative"
//             // style={{
//             //   backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
//             // }}
//           >
//             <div className="absolute inset-0 bg-qalany-navy bg-opacity-80 flex items-center justify-center">
//               <div className="text-center text-white">
//                 <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Experience?</h3>
//                 <button className="bg-qalany-orange hover:bg-yellow-400 text-qalany-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
//                   Start Your Journey
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Testimonials Section Component
// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       title: "Tech Director",
//       company: "Innovation Labs",
//       content: "Qalany transformed how we manage our digital workflows. The level of control and automation is unprecedented.",
//       rating: 5
//     },
//     {
//       name: "Michael Chen",
//       title: "Startup Founder", 
//       company: "NextGen Solutions",
//       content: "Finally, a platform that puts users first. Qalany's approach to digital empowerment is exactly what we needed.",
//       rating: 5
//     },
//     {
//       name: "Emily Rodriguez",
//       title: "Operations Manager",
//       company: "Global Dynamics",
//       content: "The collaborative features and intuitive design make Qalany an essential tool for our distributed team.",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="py-24 bg-qalany-navy relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center opacity-10"
//         // style={{
//         //   backgroundImage: `url('https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
//         // }}
//       />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             What Our Users Say
//           </h2>
//           <div className="w-24 h-1 bg-qalany-orange mx-auto mb-8"></div>
//           <p className="text-xl text-qalany-light-gray max-w-3xl mx-auto">
//             Join thousands of satisfied users who have taken control of their digital world with Qalany.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div 
//               key={index}
//               className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 group hover:bg-opacity-20 transition-all duration-300"
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-qalany-orange text-qalany-orange" />
//                 ))}
//               </div>
//               <p className="text-white mb-6 leading-relaxed italic">
//                 "{testimonial.content}"
//               </p>
//               <div>
//                 <h4 className="font-bold text-white">{testimonial.name}</h4>
//                 <p className="text-qalany-orange">{testimonial.title}</p>
//                 <p className="text-qalany-light-gray text-sm">{testimonial.company}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-qalany-black text-white">
//       {/* Pre-footer CTA */}
//       <div className="bg-gradient-to-r from-qalany-navy to-qalany-black py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
//             <p className="text-xl text-qalany-light-gray mb-8 max-w-2xl mx-auto">
//               Join the digital revolution and take control of your digital world today.
//             </p>
//             <button className="bg-qalany-orange hover:bg-yellow-400 text-qalany-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-glow-orange">
//               Start Free Trial
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="col-span-2">
//               <h3 className="text-2xl font-bold mb-4">Qalany</h3>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Empowering you to live fully, by making your digital world work for you. 
//                 Take control of your digital future with Qalany.
//               </p>
//               <div className="flex space-x-4">
//                 <Twitter className="w-6 h-6 text-gray-400 hover:text-qalany-orange transition-colors cursor-pointer" />
//                 <Linkedin className="w-6 h-6 text-gray-400 hover:text-qalany-orange transition-colors cursor-pointer" />
//                 <Github className="w-6 h-6 text-gray-400 hover:text-qalany-orange transition-colors cursor-pointer" />
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-qalany-orange transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-qalany-orange transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-qalany-orange transition-colors">Press</a></li>
//                 <li><a href="#" className="hover:text-qalany-orange transition-colors">Blog</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Contact</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li className="flex items-center">
//                   <Mail className="w-4 h-4 mr-2" />
//                   hello@qalany.com
//                 </li>
//                 <li className="flex items-center">
//                   <Phone className="w-4 h-4 mr-2" />
//                   +1 (555) 123-4567
//                 </li>
//                 <li className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2" />
//                   San Francisco, CA
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 Qalany. All rights reserved. | Privacy Policy | Terms of Service</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // Main Landing Page Component
// const LandingPage = () => {
//   return (
//     <div className="overflow-hidden">
//       <HeroSection />
//       <AboutSection />
//       <FeaturesSection />
//       {/* <TestimonialsSection /> */}
//       <Footer />
//     </div>
//   );
// };

// // Main App Component
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  Star,
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";
import Oshadha from './assets/Oshadha2.png';
import Tharindu from './assets/Tharindu2.png';
import Logo from './assets/logo.png';

// Navigation Header Component
const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <motion.header 
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled 
    //       ? 'bg-white/90 backdrop-blur-md shadow-lg' 
    //       : 'bg-transparent'
    //   }`}
        <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}

      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-align max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{marginLeft:"10px"}}>
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-qalany-navy' : 'text-white'
              }`}>
                <div className="brand-main">
                <img style={{width:"4rem", height:"4rem"}} src={Logo}></img> <span style={{color:"#14213D"}} className="logo-name">Qal</span><span style={{color:"#FCA311"}} className="logo-name">any</span>
                  </div>

                </span>
              {/* <span className="text-qalany-orange">any</span> */}
            </div>
          </motion.div>

          {/* Right side - could add navigation menu here later */}
          <div className="flex items-center">
            {/* Space for future navigation menu */}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <>
      <style>
        {`
          .typing-effect {
            overflow: hidden;
            border-right: 0.15em solid orange; /* Cursor effect */
            white-space: nowrap;
            animation: typing 2s steps(12, end), blink 0.75s step-end infinite;
            font-size: inherit;
            line-height: 1.5;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: orange; }
          }
        `}
      </style>

      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          // style={{
          //   backgroundImage: `url('https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          // }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-qalany-orange opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-qalany-orange opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Take Control of Your
              <span style={{ lineHeight: '1.5' }} className="block text-transparent bg-clip-text bg-gradient-to-r from-qalany-orange to-yellow-400">
                Digital World
              </span>
            </h1>
          </motion.div>

          <div style={{display:"flex", flexDirection:"column", rowGap:"80px"}}>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="group bg-qalany-orange hover:bg-yellow-400 text-qalany-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-glow-orange flex items-center">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              className="relative bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <ChevronDown className="text-qalany-orange w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

// About Section Component
const AboutSection = () => {
const founders = [
  {
    name: "Oshadha Goonathilaka",
    title: "Founder",
    image: Oshadha,
    position:"-1rem 1px"
  },
  {
    name: "Tharindu De Silva", 
    title: "Co-Founder",
    image: Tharindu,
    position:"0px -60px"

  }
];

  return (
    <section className="py-24 bg-white" style={{paddingTop:"0rem"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-qalany-black mb-6">
            About Qalany
          </h2>
          <div className="w-24 h-1 bg-qalany-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission is simple yet powerful: <strong className="text-qalany-navy">Helping you take control of your digital world.</strong> 
            We envision a future where technology empowers you to live fully, making your digital world work seamlessly for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-qalany-navy mb-6">Our Vision</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that technology should serve humanity, not the other way around. 
              At Qalany, it's all about putting you in control, so your digital world feels easy, powerful, and truly yours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
                <span className="text-gray-700">Digital empowerment for everyone</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
                <span className="text-gray-700">Innovation with purpose</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
                <span className="text-gray-700">User-centric design philosophy</span>
              </div>
                <div className="flex items-center">
                <div className="w-3 h-3 bg-qalany-orange rounded-full mr-4"></div>
                <span className="text-gray-700"> What you see is what you get</span>
              </div>

            </div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {founders.map((founder, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    style={{objectPosition: founder.position, background: "rgba(252, 163, 17, 0.09)"}}
                    className=".img-founders w-40 h-40 rounded-full object-cover mx-auto shadow-premium group-hover:shadow-glow-navy transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-qalany-navy opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-qalany-black mb-2">{founder.name}</h4>
                <p className="text-qalany-orange font-semibold">{founder.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Digital Security",
      description: "Advanced protection for your digital assets with enterprise-grade security measures."
    },
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Streamline your workflow with intelligent automation that learns and adapts."
    },
    {
      icon: Users,
      title: "Collaborative Control",
      description: "Seamlessly manage digital resources across teams with intuitive collaboration tools."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-qalany-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-qalany-black mb-6">
            Powerful Features
          </h2>
          <div className="w-24 h-1 bg-qalany-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're in charge now. Our tools do the heavy lifting so you can chill and get things done your way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-premium hover:shadow-glow-orange transition-all duration-500 backdrop-blur-sm border border-gray-100"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-qalany-navy mb-4 group-hover:text-qalany-orange transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 relative"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div 
            className="rounded-3xl overflow-hidden shadow-premium h-64 bg-cover bg-center relative"
            // style={{
            //   backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
            // }}
          >
            <div className="absolute inset-0 bg-qalany-navy bg-opacity-80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Experience?</h3>
                <button className="bg-qalany-orange hover:bg-yellow-400 text-qalany-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Tech Director",
      company: "Innovation Labs",
      content: "Qalany transformed how we manage our digital workflows. The level of control and automation is unprecedented.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Startup Founder", 
      company: "NextGen Solutions",
      content: "Finally, a platform that puts users first. Qalany's approach to digital empowerment is exactly what we needed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Operations Manager",
      company: "Global Dynamics",
      content: "The collaborative features and intuitive design make Qalany an essential tool for our distributed team.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-qalany-navy relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        // }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <div className="w-24 h-1 bg-qalany-orange mx-auto mb-8"></div>
          <p className="text-xl text-qalany-light-gray max-w-3xl mx-auto">
            Join thousands of satisfied users who have taken control of their digital world with Qalany.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 group hover:bg-opacity-20 transition-all duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-qalany-orange text-qalany-orange" />
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-qalany-orange">{testimonial.title}</p>
                <p className="text-qalany-light-gray text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-qalany-black text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-qalany-navy to-qalany-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-qalany-light-gray mb-8 max-w-2xl mx-auto">
              Join the digital revolution and take control of your digital world today.
            </p>
            <button className="bg-qalany-orange hover:bg-yellow-400 text-qalany-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-glow-orange">
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Qalany</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering you to live fully, by making your digital world work for you. 
                Take control of your digital future with Qalany.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-qalany-orange transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-qalany-orange transition-colors cursor-pointer" />
                <Github className="w-6 h-6 text-gray-400 hover:text-qalany-orange transition-colors cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-qalany-orange transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-qalany-orange transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-qalany-orange transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-qalany-orange transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@qalany.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Qalany. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;