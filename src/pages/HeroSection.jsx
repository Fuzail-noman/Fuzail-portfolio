import { Component } from "../components/Navbar";
import logo from "../assets/logo 2.png";
import { useEffect, useState } from "react";
import HeaderFooter from "../components/Footer";
import resume from "../assets/My Resume (3).pdf";

export default function Hero() {
const sentences = [
  "is a MERN Stack Developer",
  "with 6 months of freelancing experience",
  "Received and completed 2 freelance orders"
];

const [sentenceIndex, setSentenceIndex] = useState(0);
const [wordIndex, setWordIndex] = useState(0);
const [displayText, setDisplayText] = useState("");

useEffect(() => {
  const words = sentences[sentenceIndex].split(" ");

  if (wordIndex < words.length) {
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        prev ? prev + " " + words[wordIndex] : words[wordIndex]
      );
      setWordIndex(wordIndex + 1);
    }, 400); // typing speed

    return () => clearTimeout(timeout);
  } else {
    // wait then move to next sentence
    const timeout = setTimeout(() => {
      setDisplayText("");
      setWordIndex(0);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 1500);

    return () => clearTimeout(timeout);
  }
}, [wordIndex, sentenceIndex]);




  return (

<>



    <div className="min-h-screen bg-[rgb(0,0,0)] px-6 md:px-16 relative overflow-hidden">
      <Component />
<br /><br />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-white px-4 py-2 rounded-full text-sm mb-6">
            Hello There 😊
          </span>

     <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
  <span className="text-blue-500">Fuzail Raza</span>{" "}
  <span className="text-white">{displayText}</span>
  <span className="animate-pulse">|</span>
</h1>




      <p className="text-white mb-8 leading-relaxed">
  I am a passionate MERN Stack Developer with 6 months of freelancing experience building modern,
  responsive, and user-friendly web applications. During this time, I have successfully completed
  2 client projects for local businesses, gaining practical experience in full-stack web development.
  I focus on creating clean, efficient, and scalable applications that deliver a seamless user
  experience across desktops, tablets, and mobile devices.
</p>

          {/* BUTTON */}
          <div className="flex items-center gap-6 mb-10">
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 border border-blue-600 px-4 py-1.5 rounded-md font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-white hover:text-blue-600"
              >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
              </svg>
            </a>
          </div>
        </div>

       <div class="flex items-center gap-4">
  <img class="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left ..." src={logo} />
 
</div>
      </div>
      <br /><br />
<HeaderFooter/>
    </div>
 </>
  );
}
