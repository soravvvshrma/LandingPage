import React, {useState} from "react";
import { ChevronLeft, ChevronRight, Plus, Check, Menu, X } from "lucide-react";

const LandingPage = () => {
  const conditions = [
    { name: "Diabetes", link: "#" },
    { name: "Heart Health", link: "#" },
    { name: "Gastrointestinal", link: "#" },
    { name: "Mental Health", link: "#" },
    { name: "Pain Management", link: "#" },
    { name: "Blood Pressure", link: "#" }
  ];

  const pressArticles = [
    {
      logo: "WSJ",
      title: "Mark Cuban Has a New Job: Working at an Online Discount Pharmacy",
      description: "Founded by a radiologist-math prodigy, the startup aims to lower drug costs by eliminating middlemen—and eventually to manufacture...",
      link: "#"
    },
    {
      logo: "CBS",
      title: "Entrepreneur Mark Cuban joined CBS News to discuss his new low-cost online...",
      description: "Entrepreneur and owner of the Dallas Mavericks Mark Cuban joined CBS News to discuss his new low-cost online ...",
      link: "#"
    },
    {
      logo: "CNN",
      title: "Prescription drugs are too expensive for many Americans. These companies are...",
      description: "It's an experience millions of Americans have had: you go to the doctor, get a prescription, take it to the pharmacy and...",
      link: "#"
    },
    {
      logo: "NBC NEWS",
      title: "Medicare could save billions buying generic drugs at Mark Cuban's prices",
      description: "Researchers compared what the U.S. government pays for prescription drugs to the prices of generic drugs sold at the...",
      link: "#"
    },
    {
      logo: "SPECTRUM",
      title: "Billionaire Mavericks owner Mark Cuban launches online company offering prescription drugs",
      description: "Billionaire and Mavericks owners Mark Cuban has opened up an online company offering prescription drugs at cheaper prices...",
      link: "#"
    },
    {
      logo: "NPR",
      title: "Businessman and Mavs owner Mark Cuban launches an online company for generic drugs",
      description: "Billionaire investor and Dallas Mavericks owner Mark Cuban has launched an online company for generic drugs...",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "How does Vite work?",
      answer: "Vite is a modern build tool that provides fast and optimized development and build processes.",
    },
    {
      question: "How do I create a Vite project?",
      answer: "You can create a Vite project using the command `npm create vite@latest`.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= conditions.length ? 0 : prevIndex + 3
    );
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, conditions.length - 3) : prevIndex - 3
    );
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <img
          src="https://images.ctfassets.net/fcvih6iivo6z/2XOP3uce2yTaTX6WSbNPbd/365d0c23506a0710f3a4e5aa0342ddaf/MCCP-wordmark-denim.svg"
          alt="Logo"
          className="w-[40%] sm:w-[15%]"
        />
        <button
          className="sm:hidden text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white sm:static sm:flex sm:w-auto sm:space-x-6 text-gray-600 font-medium mt-4 py-4 px-2 sm:px-0 sm:py-0 sm:mt-0 shadow-md sm:shadow-none`}
        >
          <a
            href="#providers"
            className="block px-6 py-2  hover:text-blue-600 font-bold"
          >
            For Providers
          </a>
          <a
            href="#medications"
            className="block px-6 py-2  hover:text-blue-600 font-bold"
          >
            Medications
          </a>
          <a
            href="#contact"
            className="block px-6 py-2  hover:text-blue-600 font-bold"
          >
            Contact Doctor
          </a>
          <a
            href="#mission"
            className="block px-6 py-2  hover:text-blue-600 font-bold"
          >
            Our Mission
          </a>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
            <a
              href="#signin"
              className="block px-6 py-2  text-gray-600 hover:text-blue-600 font-bold"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="block px-6 py-2 sm:px-4 sm:py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white font-bold"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      {/* Main Banner */}
      <main className="text-center py-16 px-4">
        <h2 className="text-6xl font-bold text-gray-800">
          No middlemen. No price games.
        </h2>
        <p className="text-4xl text-gray-700 mt-2">Huge drug savings.</p>
      </main>

      {/* Cards Section */}
      <section className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              name: "Abiraterone Acetate",
              description: "Generic for Zytiga",
              price: "$23.69",
              retailPrice: "$1,093.20",
            },
            {
              name: "Invokana (Canagliflozin)",
              description: "",
              price: "$245.92",
              retailPrice: "$723.50",
            },
            {
              name: "Mesalamine",
              description: "Generic for Canasa",
              price: "$28.46",
              retailPrice: "$766.80",
            },
            {
              name: "Lisinopril",
              description: "Generic for Prinivil",
              price: "$5.59",
              retailPrice: "$33.90",
            },
            {
              name: "Fluoxetine",
              description: "Generic for Prozac",
              price: "$5.37",
              retailPrice: "$22.80",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-2xl font-bold text-orange-500 mt-4">
                {item.price}
              </p>
              <p className="text-gray-500 text-sm">
                Retail Price: {item.retailPrice}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex flex-col items-center bg-blue-100 py-10 px-4">
        <div className="flex flex-col md:flex-row items-center bg-[rgb(220,242,249)] shadow-md rounded-3xl p-6 max-w-4xl">
          <img
            src="https://images.ctfassets.net/fcvih6iivo6z/3JAYtAAiSS2w4YclK2Zl0a/cefb78b8573d19726faff80d20bf4e29/image__1_.png?fm=webp" // Replace with the actual image URL
            alt="Mark Cuban"
            className="w-40 h-40 rounded-full md:mr-6"
          />
          <div className="mt-4 md:mt-0">
            <p className="text-xl italic text-gray-700">
              "Everyone should have safe, affordable medicines with transparent prices."
            </p>
            <p className="text-lg font-bold text-gray-800 mt-2">– Mark Cuban</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800">How Cost Plus Drugs works</h2>
        <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">
          With all medications listed on our site, you will need to request a new prescription
          from your U.S.-based provider to place an order.
        </p>
      </section>

       {/* New Section */}
       <section className="flex flex-col items-center py-16 bg-[rgb(220,242,249)]">
        <div className="relative flex justify-center  items-center w-64 h-64 rounded-full border-4 border-blue-300">
          <div className="absolute top-2 left-30 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
            1
          </div>
          <div className="text-center ">
            <h3 className="text-lg font-semibold text-blue-900 my-8">
              Find your medication
            </h3>
            <img
              src="https://www.costplusdrugs.com/magnifying-glass-icon.png"
              alt="Medication Icon"
              className="mt-4 mx-auto"
            />
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-full text-lg font-semibold hover:bg-blue-700">
          Get started now
        </button>
      </section>

      <section className="py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Here's exactly how we price your drugs
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-8">
          We think you should know how much your medications cost and why. For example, a
          <span className="font-bold"> 30 count supply of 400mg Imatinib</span> will cost:
        </p>

        {/* Price Comparison Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-blue-900">Your drug cost with us</h3>
            <span className="text-3xl font-bold text-orange-500">$34.50</span>
          </div>
          
          <div className="bg-orange-400 text-white p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-2">+</span>
              <p className="text-lg">
                You save <span className="font-bold">$9,622.80</span> on your medication
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-blue-900">Retail price at other companies</h3>
            <span className="text-2xl font-bold text-gray-700">$9,657.30</span>
          </div>
        </div>

        <p className="text-center text-gray-600 italic mb-12">
          Your final cost will include shipping and taxes, which vary by location.
        </p>

        {/* Cost Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: "🏭",
              title: "Manufacturing",
              cost: "$25.65",
              extraClass: "",
            },
            {
              icon: "📊",
              title: "15% Markup",
              cost: "$3.85",
              extraClass: "",
            },
            {
              icon: "⏱️",
              title: "Pharmacy Labor",
              cost: "$5.00",
              extraClass: "",
            },
            {
              icon: "📦",
              title: "Shipping",
              cost: "$5.00",
              extraClass: "border-2 border-blue-200 rounded-lg p-4",
              note: "*Additional cost at checkout",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center ${item.extraClass}`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-blue-900 font-semibold mb-2">{item.title}</h4>
              <p className="text-xl font-bold text-blue-900">{item.cost}</p>
              {item.note && (
                <p className="text-sm text-gray-600 mt-2">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 bg-white">
  <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-4">
    Affordable medication is your right.
  </h2>
  <p className="text-center text-gray-600 mb-8 max-w-lg md:max-w-3xl mx-auto">
    At Mark Cuban Cost Plus Drug Company, we offer hundreds of common (and often life-saving) medications at the lowest possible prices.
  </p>

  <div className="relative max-w-full md:max-w-5xl mx-auto">
    <button 
      onClick={showPrev}
      className="absolute sm:-left-8 left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>

    <div className="flex overflow-x-scroll md:overflow-hidden gap-4 md:gap-20 px-2 md:px-0">
      {conditions.slice(currentIndex, currentIndex + 3).map((condition, index) => (
        <div key={index} className=" md:flex-grow flex flex-col items-center w-64 md:w-auto">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-blue-100 flex items-center justify-center mb-4 bg-white">
            <div className="p-4 rounded-full bg-orange-400">
              <Plus className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 text-center">{condition.name}</h3>
          <a href={condition.link} className="text-blue-600 underline hover:text-blue-800">
            See medications
          </a>
        </div>
      ))}
    </div>

    <button 
      onClick={showNext}
      className="absolute sm:-right-8 right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  </div>

  <div className="text-center mt-8 md:mt-12">
    <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-blue-800">
      View all conditions
    </button>
  </div>
</section>


    <div className="bg-blue-900 text-white pt-20 pb-2 px-6 relative overflow-hidden">
      {/* Decorative plus signs */}
      <div className="absolute top-10 left-10">
        <div className="text-orange-400 text-6xl">+</div>
      </div>
      <div className="absolute top-20 left-32">
        <div className="text-blue-300 text-4xl">+</div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We offer safe, affordable medicines at the lowest possible price.
          </h1>
          
          <div className="space-y-4 mb-8">
            {[
              "Find and afford the drugs you need",
              "Know what your medication costs",
              "Track your order in real time"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-orange-400 rounded-full p-1">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
          
          <button className="px-8 py-3 bg-orange-400 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors">
            Our Mission
          </button>
        </div>
        
        <div className="hidden md:block">
          <img
            src="https://images.ctfassets.net/fcvih6iivo6z/7xXc4YC2ST5fh2QxzYwoW8/092c9db09ad392d4cbadcbf1cc389d27/woman-scarf.png"
            alt="Smiling person with glasses"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>

    <section className="py-16 px-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">In the press</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressArticles.map((article, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-4">
                <span className="text-xl font-bold text-gray-800">{article.logo}</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {article.description}
              </p>
              <a 
                href={article.link}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Read Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
            >
              {faq.question}
              <span>
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Footer*/ }
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
          <img
            src="https://images.ctfassets.net/fcvih6iivo6z/6QBd63yfMwDmlvNt8WsHxb/37ece7e59f9f6c48e969e13777a476d7/MCCP-wordmark-white.svg"
            alt="Logo"
            className="w-[25%] h-[25%]"
          />
            <p className="mt-2 font">
              COST PLUS DRUGS™ offers hundreds of common (and often life-saving) medications
              at the lowest possible prices.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Stay Up to Date Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Newsletter Signup */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Stay up to date</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter to receive special offers, notifications of new
              products, and company updates.
            </p>
            <div className="sm:flex text-center mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md border-none focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md">
                Sign up
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              For press or investor inquiries, please email{" "}
              <a href="mailto:press@costplusdrugs.com" className="underline">
                press@costplusdrugs.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Browse</h4>
              <ul>
                <li>Browse Medications</li>
                <li>Our Mission</li>
                <li>For Providers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul>
                <li>Contact Doctor</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>HIPAA Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-x-twitter"></i> {/* Replace with actual icon */}
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © 2024 Mark Cuban Cost Plus Drug Company, PBC. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
    
  );
};

export default LandingPage;
