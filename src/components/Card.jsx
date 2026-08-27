import React from "react";
import logo13 from "../assets/kapad.png";
import logo14 from "../assets/bank.png";

import logo1 from "../assets/img 3.png";
import logo2 from "../assets/img 8.png";
import logo3 from "../assets/img 9.png";
import logo4 from "../assets/img 10.png";
import logo5 from "../assets/img 11.png";
import logo6 from "../assets/img 12.png";
import logo7 from "../assets/img 19.png";
import logo8 from "../assets/img 14.png";
import logo9 from "../assets/img 15.png";
import logo10 from "../assets/img 16.png";
import logo11 from "../assets/img 20.png";
import logo12 from "../assets/img 21.png";
import logo15 from "../assets/logo40.png";
import logo16 from "../assets/logo41.png";
export default function Card() {
  const cards = [
  {
    title: "Kapadya International",
    desc: "Designed and developed a modern, responsive website for Kapadya International, focusing on a clean visual experience, easy navigation, and a professional online presence. The website was built to present the brand and its services in an engaging way across desktop, tablet, and mobile devices.",
    img: logo13,
    link: "https://kapadya-international.vercel.app/",
  },

  {
    title: "Recreational Travel",
    desc: "Designed and developed a responsive travel website for a local business, creating an engaging platform for travel stories, destination guides, and useful updates. The project combines a clean layout, intuitive navigation, and responsive design to make exploring travel content enjoyable on every screen.",
    img: logo14,
    link: "https://recreational-travels.vercel.app/",
  },
{
  title: "Ember & Oak",
  desc: "A complete full-stack coffee website built with the MERN stack, featuring a modern and responsive frontend integrated with a functional backend. The project includes dynamic content, user interactions, database integration, and a smooth browsing experience. Every section is carefully designed to be fully responsive, delivering a consistent and engaging experience across desktop, tablet, and mobile devices.",
  img: logo15,
  link: "https://coffee-fawn-sigma.vercel.app/",
},
{
  title: "Meridian Estates",
  desc: "A complete full-stack real-estate rental platform built with the MERN stack, designed to make property discovery simple and engaging. The website allows users to explore residential rental properties, including homes available up to Rs. 600,000, through a modern and intuitive interface. With responsive design, dynamic property content, backend integration, and a smooth browsing experience, the platform is optimized for desktop, tablet, and mobile users.",
  img: logo16,
  link: "https://rental-website-wine.vercel.app/",
},
  {
    title: "API Fetch Task",
    desc: "A JavaScript project created to strengthen my understanding of working with APIs and dynamic data. I implemented API fetching, processed the received information, and displayed it dynamically through a simple and user-friendly interface.",
    img: logo11,
    link: "https://poetic-cassata-84c214.netlify.app/",
  },

  {
    title: "WebX",
    desc: "My first React-based project, built with React and Tailwind CSS to explore component-based development and modern UI styling. This project helped me build a stronger understanding of reusable components, responsive layouts, and creating clean interfaces with React.",
    img: logo12,
    link: "https://snazzy-longma-645bd6.netlify.app/",
  },

  {
    title: "Calculator",
    desc: "A simple and interactive calculator designed to perform everyday mathematical operations quickly and accurately. This project helped me practice JavaScript logic, user interactions, event handling, and building a functional interface with a clean and responsive layout.",
    img: logo1,
    link: "https://dashing-gnome-d807f5.netlify.app/",
  },

  {
    title: "Exclusive",
    desc: "A modern gadget-focused website designed and developed using React and Tailwind CSS. The project focuses on creating an attractive shopping-style interface with structured content, responsive layouts, and a smooth browsing experience across different screen sizes.",
    img: logo2,
    link: "https://youngcoderswebsite.netlify.app/",
  },

  {
    title: "Saylani Website",
    desc: "My first complete website project created using HTML, CSS, and JavaScript. This project gave me practical experience in structuring web pages, designing responsive layouts, adding interactive elements, and turning a basic idea into a functional website.",
    img: logo3,
    link: "https://jazzy-speculoos-550154.netlify.app",
  },

  {
    title: "To Do Task",
    desc: "A practical To-Do application created to improve my JavaScript fundamentals and understand how interactive web applications work. Users can manage their tasks through a simple interface while the project demonstrates DOM manipulation, event handling, and dynamic content updates.",
    img: logo4,
    link: "https://shiny-stardust-7f4dcd.netlify.app",
  },

  {
    title: "Fan Task",
    desc: "A creative animation project developed with HTML, CSS, and JavaScript to explore motion and interactive visual effects. The project focuses on combining styling, animations, and JavaScript interactions to create a more engaging web experience.",
    img: logo5,
    link: "https://imaginative-tulumba-4304dd.netlify.app",
  },

  {
    title: "Clock Task",
    desc: "One of my early UI-focused projects, created using HTML, CSS, and JavaScript. The project combines a clean visual design with JavaScript functionality and helped me improve my understanding of layouts, styling, real-time updates, and interactive interfaces.",
    img: logo6,
    link: "https://eloquent-cassata-f7e7ae.netlify.app",
  },

  {
    title: "Samsung Website",
    desc: "A team-based website project inspired by a modern technology brand experience. Built using HTML, CSS, and JavaScript, the project gave me valuable experience working with a team, organizing website sections, creating responsive layouts, and bringing a complete interface together.",
    img: logo7,
    link: "https://gregarious-unicorn-a62ac4.netlify.app",
  },

  {
    title: "Quiz App",
    desc: "An interactive quiz application built with HTML, CSS, JavaScript, and React. The project focuses on creating an engaging question-and-answer experience while practicing React components, application logic, user interactions, and responsive interface design.",
    img: logo8,
    link: "https://resplendent-seahorse-157a63.netlify.app",
  },

  {
    title: "Product Detail Page",
    desc: "A responsive product detail page designed to present product information in a clear and visually appealing way. The project focuses on structured content, clean UI design, responsive layouts, and creating a smooth experience for users viewing product details.",
    img: logo9,
    link: "https://genuine-jelly-29c2d0.netlify.app",
  },

  {
    title: "Contact Page",
    desc: "A clean and responsive contact page developed as part of the Exclusive website experience. The project focuses on organizing contact information and creating a simple, accessible interface that allows visitors to easily find the information they need.",
    img: logo10,
    link: "https://luminous-granita-9f40f3.netlify.app",
  },

  {
    title: "API Fetch Task",
    desc: "A JavaScript-based project created to practice fetching and displaying data from an external API. It helped me understand asynchronous JavaScript, working with API responses, handling dynamic data, and presenting information through a simple web interface.",
    img: logo11,
    link: "https://poetic-cassata-84c214.netlify.app/",
  },
];


  // First 3 cards = recent projects, rest = all other projects
  const recentCards = cards.slice(0, 2);
  const otherCards = cards.slice(2);

  const renderCard = (card, index) => (
    <div
      key={index} 
      style={{ animationDelay: `${index * 100}ms` }}
      className="opacity-0 animate-fadeInUp bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
      >
        {card.images ? (
          <div className="grid grid-cols-2 gap-1 p-2">
            {card.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`${card.title}-${i}`}
                className="w-full h-28 object-cover rounded-md hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        ) : (
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
          />
        )}
      </a>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
        <p className="text-gray-600 text-sm">{card.desc}</p>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

    <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center animate-fadeInUp opacity-0">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {recentCards.map((card, index) => renderCard(card, index))}
      </div>

<h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center animate-fadeInUp opacity-0">
        All Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {otherCards.map((card, index) => renderCard(card, index))}
      </div>
    </div>
  );
}