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
 
// New projects — replace these with your actual screenshot/logo files in /assets
import logo17 from "../assets/hospital.png"; // Meridian Hospital
import logo18 from "../assets/galaxy.png"; // Galaxy Motors
import logo19 from "../assets/salts.png"; // Ember & Salt
 
export default function Card() {
  const cards = [
    {
      title: "Meridian Hospital",
      desc: "A hospital and healthcare booking platform designed to make finding a doctor and scheduling an appointment simple. Features consultant listings across specialties, department browsing, and a clean, trustworthy interface built for both patients and staff.",
      img: logo17,
      link: "https://meridian-hospital-one.vercel.app/",
    },
    {
      title: "Galaxy Motors",
      desc: "A private car dealership and rental platform with a bold, cinematic design. Users can browse a curated fleet to buy or rent, with a smooth, high-end browsing experience across devices.",
      img: logo18,
      link: "https://car-dealarship-website-1-k694.vercel.app/",
    },
    {
      title: "Ember & Salt",
      desc: "A restaurant ordering platform for a char-grill bistro, letting customers browse the full menu with filters and categories, view dish details and ratings, and place orders online with the same menu shown in the dining room.",
      img: logo19,
      link: "https://resturant-website-lake.vercel.app/",
    },
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
      desc: "A complete full-stack coffee website built with the MERN stack, featuring a modern and responsive frontend integrated with a functional backend. The project includes dynamic content, user interactions, database integration, and a smooth browsing experience.",
      img: logo15,
      link: "https://coffee-fawn-sigma.vercel.app/",
    },
    {
      title: "Meridian Estates",
      desc: "A complete full-stack real-estate rental platform built with the MERN stack, designed to make property discovery simple and engaging. The website allows users to explore residential rental properties through a modern, intuitive interface.",
      img: logo16,
      link: "https://rental-website-wine.vercel.app/",
    },
    {
      title: "API Fetch Task",
      desc: "A JavaScript project created to strengthen my understanding of working with APIs and dynamic data. I implemented API fetching, processed the received information, and displayed it dynamically through a simple, user-friendly interface.",
      img: logo11,
      link: "https://poetic-cassata-84c214.netlify.app/",
    },
    {
      title: "WebX",
      desc: "My first React-based project, built to explore component-based development and modern UI styling — reusable components, responsive layouts, and clean interfaces.",
      img: logo12,
      link: "https://snazzy-longma-645bd6.netlify.app/",
    },
    {
      title: "Calculator",
      desc: "A simple, interactive calculator for everyday mathematical operations. Built to practice JavaScript logic, user interactions, event handling, and a clean, responsive layout.",
      img: logo1,
      link: "https://dashing-gnome-d807f5.netlify.app/",
    },
    {
      title: "Exclusive",
      desc: "A modern gadget-focused website with an attractive shopping-style interface, structured content, and a smooth browsing experience across screens.",
      img: logo2,
      link: "https://youngcoderswebsite.netlify.app/",
    },
    {
      title: "Saylani Website",
      desc: "My first complete website project — structuring pages, designing responsive layouts, adding interactive elements, and shipping a working site end to end.",
      img: logo3,
      link: "https://jazzy-speculoos-550154.netlify.app",
    },
    {
      title: "To Do Task",
      desc: "A practical to-do application for sharpening JavaScript fundamentals. Users manage tasks through a simple interface, demonstrating DOM manipulation, event handling, and dynamic updates.",
      img: logo4,
      link: "https://shiny-stardust-7f4dcd.netlify.app",
    },
    {
      title: "Fan Task",
      desc: "A creative animation project exploring motion and interactive visual effects — combining styling, animation, and JavaScript to create a more engaging web experience.",
      img: logo5,
      link: "https://imaginative-tulumba-4304dd.netlify.app",
    },
    {
      title: "Clock Task",
      desc: "An early UI-focused project pairing clean visual design with real-time functionality — layout, styling, and interactive interfaces.",
      img: logo6,
      link: "https://eloquent-cassata-f7e7ae.netlify.app",
    },
    {
      title: "Samsung Website",
      desc: "A team-based website inspired by a modern technology brand experience — organizing sections, building responsive layouts, and assembling a complete interface.",
      img: logo7,
      link: "https://gregarious-unicorn-a62ac4.netlify.app",
    },
    {
      title: "Quiz App",
      desc: "An interactive quiz application — an engaging question-and-answer experience while practicing components, application logic, and responsive interface design.",
      img: logo8,
      link: "https://resplendent-seahorse-157a63.netlify.app",
    },
    {
      title: "Product Detail Page",
      desc: "A responsive product detail page presenting product information clearly — structured content, clean UI, and a smooth viewing experience.",
      img: logo9,
      link: "https://genuine-jelly-29c2d0.netlify.app",
    },
    {
      title: "Contact Page",
      desc: "A clean, responsive contact page from the Exclusive website experience — organizing contact information into a simple, accessible interface.",
      img: logo10,
      link: "https://luminous-granita-9f40f3.netlify.app",
    },
    {
      title: "API Fetch Task",
      desc: "A JavaScript-based project practicing fetching and displaying data from an external API — asynchronous JavaScript, API responses, and dynamic data presentation.",
      img: logo11,
      link: "https://poetic-cassata-84c214.netlify.app/",
    },
  ];
 
  const recentCards = cards.slice(0, 3);
  const otherCards = cards.slice(3);
 
  const FeaturedCard = ({ card, index }) => (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 120}ms` }}
      className="group opacity-0 animate-riseIn grid grid-cols-1 sm:grid-cols-5 items-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#6EE7B7]/40"
    >
      <div className="sm:col-span-2 overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-full"
        />
      </div>
      <div className="sm:col-span-3 flex flex-col justify-center gap-3 p-6 sm:p-8">
        <h3 className="font-display text-2xl text-white sm:text-[1.75rem]">
          {card.title}
        </h3>
        <p className="max-w-[60ch] text-[0.95rem] leading-relaxed text-white/60">
          {card.desc}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-white">
          View project
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
 
  const ProjectCard = ({ card, index }) => (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 60}ms` }}
      className="group opacity-0 animate-riseIn flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#6EE7B7]/40"
    >
      <div className="overflow-hidden">
        <img
          src={card.img}
          alt={card.title}
          className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg text-white">{card.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-white/60">
          {card.desc}
        </p>
        <span className="mt-auto pt-2 inline-flex items-center gap-1 text-sm font-medium text-white">
          View project
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
 
  return (
    <div className="min-h-screen bg-[rgb(0,0,0)] px-6 md:px-16 py-14 md:py-20 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&display=swap');
 
        .font-display {
          font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
 
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-riseIn {
          animation: riseIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
 
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
 
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section: Recent work */}
        <div className="mb-8 flex items-baseline justify-between border-b border-white/10 pb-5">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            Recent work
          </h2>
          <span className="hidden text-sm text-white/50 sm:block">
            {String(recentCards.length).padStart(2, "0")} projects
          </span>
        </div>
        <div className="mb-16 grid grid-cols-1 gap-5 sm:mb-24">
          {recentCards.map((card, index) => (
            <FeaturedCard card={card} index={index} key={index} />
          ))}
        </div>
 
        {/* Section: All projects */}
        <div className="mb-8 flex items-baseline justify-between border-b border-white/10 pb-5">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            All projects
          </h2>
          <span className="hidden text-sm text-white/50 sm:block">
            {String(otherCards.length).padStart(2, "0")} projects
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherCards.map((card, index) => (
            <ProjectCard card={card} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
 