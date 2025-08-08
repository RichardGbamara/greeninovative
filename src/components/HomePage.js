import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      
      {/* Header */}
      <header className="bg-white border-t-2 border-blue-900 shadow-md fixed top-0 w-full z-50">
  <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
    <nav className="flex flex-1 items-center">
      <a href="#learn" className="flex-1 text-center text-gray-800 font-medium hover:text-orange-500">Learn</a>
      <Link to="/form" className="flex-1 text-center text-gray-800 font-medium hover:text-orange-500">Register</Link>
      <div className="flex-1 flex items-center justify-center">
        <img src="/images/Logo.png" alt="The Greennovative Lab Logo" className="w-[60px] h-[60px] object-contain" />
      </div>
      <a href="#translight" className="flex-1 text-center text-gray-800 font-medium hover:text-orange-500">Translight</a>
      <a href="#residential" className="flex-1 text-center text-gray-800 font-medium hover:text-orange-500">Residential</a>
      <a href="#commercial" className="flex-1 text-center text-gray-800 font-medium hover:text-orange-500">Commercial</a>
    </nav>
  </div>
</header>


      {/* Hero Section */}
      <section className="mt-[80px] h-[80vh] relative flex items-center justify-center text-center text-white overflow-hidden rounded-lg mt-30 m-10">
  <div className="absolute inset-0 z-10">
    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
      <source src="/images/solar-farm.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/40 rounded-md"></div>
  </div>
  <div className="relative z-20 max-w-[800px] px-8">
    <h1 className="text-5xl font-bold mb-8">Leading Africa's future energy needs and goals</h1>
    <div className="flex gap-4 flex-wrap justify-center">
      <Link to="/form" className="px-6 py-3 rounded-md font-bold bg-orange-500 text-white hover:bg-orange-600 transition transform hover:-translate-y-1">Register Now</Link>
      <Link to="/form" className="px-6 py-3 rounded-md font-bold bg-blue-900 text-white hover:bg-blue-800 transition transform hover:-translate-y-1">Contact Sales</Link>
    </div>
  </div>
</section>


  <section className="bg-white m-20" >
    <div className="bg-[#1877C9] rounded-lg  text-white py-16 px-10">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 text-white">
        <h2 className="text-xl font-semibold mb-4">Renewable Energy Keynote</h2>
        <p className="text-base leading-relaxed mb-4">
          In 30 minutes, discover all you need to know as a corporate worker about the renewable energy ecosystem, ESG goals, solar offers available to you and your company, its impact and benefits
        </p>
        <p className="mb-6">Airing live on 25th August</p>
        <Link
          to="/form"
          className="inline-block px-5 py-2 rounded-full font-medium bg-white text-[#FF6B35] hover:bg-gray-100 transition"
        >
          Register now
        </Link>
      </div>
          <div className="rounded-lg overflow-hidden shadow-2xl h-[400px]">
            <img src="/images/ceo-picture.jpg" alt="CEO of Translight Solar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
  </section>
{/* Understand What Solar is */}
<section className="bg-white py-16">
  {/* Heading */}
  <div className="text-center mb-12">
    <p className="text-gray-600 mb-2">Learn</p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Understand What Solar is</h2>
  </div>

  {/* Content Grid */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {/* Left Column */}
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-medium mb-1">
        Learn in <span className="font-bold">120 seconds</span>
      </h3>
      <p className="mb-4 text-gray-700">
        How solar works, and saves you <span className="text-orange-500 font-medium">money</span>
      </p>
      <p className="text-sm text-blue-600 underline cursor-pointer mb-3">Watch now</p>
      <img
        src="/images/how-solar-works.jpg"
        alt="House with solar panels"
        className="w-36 h-28 object-cover rounded-lg"
      />
    </div>

    {/* Middle Column */}
    <div className="flex justify-center">
      <img
        src="/images/House.png"
        alt="Modern house with solar panels"
        className="rounded-xl  w-full object-cover"
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col">
      <img
        src="/images/read-solar guide.jpg"
        alt="Aerial view of solar panels"
        className="w-40 h-28 object-cover rounded-lg"
      />
      <h3 className="text-gray-800 text-lg font-medium mb-2">Read our solar guide</h3>
      <p className="text-sm text-gray-600">
        A lot of people know just about solar panels and have very limited idea of how solar works. 
        Lets walk you through how solar works, what it offers and the prospects of solar power!
      </p>
    </div>
  </div>
</section>


      
      <div className="bg-white text-black font-sans px-6 md:px-20 py-10">
      
      {/* Top Section */}
      <section className="text-center">
        <p className="text-lg">Your</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Renewable Energy Partner
        </h1>
      </section>



      {/* Partner Projects */}
<section className="flex flex-col md:flex-row gap-10 my-10">
  {/* Left Side */}
  <div className="flex-1 space-y-6">
    <div className="flex flex-col items-center md:items-start space-y-4">
      <img
        src="/images/rockstar.jpg"
        alt="Rockstars Roofing"
        className="rounded-lg shadow-md w-64 h-64"
      />
      <p className="text-sm">
        Translight is a leading energy service provider,<br /> innovating heavily
        around finance and tech to <br /> ease accessibility of medium and large scale <br />
        solutions in a bid to increase{" "}
        <span className="text-blue-500 font-semibold">cost savings</span>,{" "} <br />
        <span className="text-orange-500 font-semibold">efficiency</span>,{" "}
        <span className="text-green-500 font-semibold">sustainability goals</span>.
      </p>
    </div>
  </div>

  {/* Middle Section */}
  <div className="flex-1 flex justify-center items-start mt-0 md:mt-20">
    <img
      src="/images/middle.svg"
      alt="Solar Installation"
      className=" w-1080 h-84"
    />
  </div>

  {/* Right Side */}
  <div className="flex-1 space-y-6">
    <div className="flex flex-col items-center md:items-start space-y-4">
      <h2 className="text-lg font-medium">Our projects</h2>
      <p className="text-gray-700">
        We lead commercial and industrial{" "}
        <span className="text-green-500 font-semibold">green</span> goals
      </p>
      <img
        src="/images/rectangle.png"
        alt="Ashesi University"
        className="rounded-lg shadow-md w-64 h-64"
      />
      <p className="text-gray-700">
        Driving{" "}
        <span className="text-green-500 font-semibold">green</span> sustainability
        goals for Ashesi University
      </p>
    </div>
  </div>
</section>

 
 <section className="text-center">
        <p className="text-lg">You can</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Go Solar So Easily!
        </h1>
      </section>
      
      {/* Solar Offer Section */}
      <section className="flex flex-col md:flex-row gap-10 mt-10">
  {/* Left Side */}
  <div className="flex-1 space-y-6">
    <div className="flex flex-col items-center md:items-start space-y-4">
      <h2 className="text-lg font-medium">Get yourself a system</h2>
      <p className="text-gray-700">
        With very very, flexible{" "}
        <span className="text-orange-500 font-semibold">financing</span>
      </p>
      <img
        src="/images/Rectangle13.png"
        alt="Solar Installation"
        className="rounded-lg shadow-md w-64 max-w-sm"
      />
      <p className="text-gray-700">Our seasoned team</p>
    </div>
  </div>

  {/* Middle */}
  <div className="flex-1 flex justify-center items-center">
    <img
      src="/images/wifi.png"
      alt="Solar System"
      className=""
    />
  </div>

  {/* Right Side */}
  <div className="flex-1 text-center flex flex-col items-center justify-center">
    <img
      src="/images/system.png"
      alt="Smart Energy System"
      className="rounded-lg shadow-md  mx-auto"
    />
    <p className="text-gray-700 mt-2">
      Our smart energy management system
    </p>
  </div>
</section>
{/* Projects Section */}
<section className="py-10">
  <h2 className="text-center text-2xl font-semibold mb-6">Projects</h2>

  {/* Row 1 - 5 images */}
  <div className="flex justify-center gap-4 mb-4">
    <img src="/images/projects/project1.png" alt="Project 1" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project2.png" alt="Project 2" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project3.jpg" alt="Project 3" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project4.jpg" alt="Project 4" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project5.jpg" alt="Project 5" className="rounded-lg shadow-md w-56 h-32 object-cover" />
  </div>

  {/* Row 2 - 6 images */}
  <div className="flex justify-center gap-4 mb-4">
    <img src="/images/projects/project6.png" alt="Project 6" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project7.jpg" alt="Project 7" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project8.jpg" alt="Project 8" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project9.jpg" alt="Project 9" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project10.jpg" alt="Project 10" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project11.jpg" alt="Project 11" className="rounded-lg shadow-md w-56 h-32 object-cover" />
  </div>

  {/* Row 3 - 5 images */}
  <div className="flex justify-center gap-4">
    <img src="/images/projects/project12.jpg" alt="Project 12" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project13.jpg" alt="Project 13" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project14.jpg" alt="Project 14" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project15.jpg" alt="Project 15" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/projects/project16.jpg" alt="Project 16" className="rounded-lg shadow-md w-56 h-32 object-cover" />
  </div>
</section>


{/* Partners Section */}
<section className="py-10">
  <h3 className="text-center text-lg font-semibold">Top global companies trust and work with us.</h3>
  <p className="text-center text-gray-500 mb-8">Our partners and clients</p>
  
  {/* Partner Logos */}
 <div className="flex justify-center gap-4 mb-4">
    <img src="/images/partners/partner1.png" alt="Partner 1" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner2.png" alt="Partner 2" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner3.png" alt="Partner 3" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner4.png" alt="Partner 4" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner5.png" alt="Partner 5" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner6.png" alt="Partner 6" className="rounded-lg shadow-md w-56 h-32 object-cover" />
  </div>

  {/* Row 2 - 6 images */}
  <div className="flex justify-center gap-4 mb-4">
    <img src="/images/partners/partner7.png" alt="Partner 7" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner8.png" alt="Partner 8" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner9.png" alt="Partner 9" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner10.png" alt="Partner 10" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner11.png" alt="Partner 11" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner12.png" alt="Partner 12" className="rounded-lg shadow-md w-56 h-32 object-cover" />
  </div>

  {/* Row 3 - 6 images */}
  <div className="flex justify-center gap-4">
    <img src="/images/partners/partner13.png" alt="Partner 13" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner14.png" alt="Partner 14" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner15.png" alt="Partner 15" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner16.png" alt="Partner 16" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner17.png" alt="Partner 17" className="rounded-lg shadow-md w-56 h-32 object-cover" />
    <img src="/images/partners/partner18.png" alt="Partner 18" className="rounded-lg shadow-md w-56 h-32 object-cover" />
  </div>
</section>


    </div>
      <div className="font-sans">
      {/* Blue Section */}
      <section className="bg-[#1976A2] text-white py-28 px-4 text-center">
        {/* Partners Section */}
        <h2 className="text-3xl md:text-3xl font-semibold mb-6">
          Join the 4000+ partners and customers powered <br /> by Translight Solar
        </h2>

        <div className="flex justify-center gap-4 mb-28">
          <button className="px-6 py-2 border border-white rounded-md hover:bg-white hover:text-[#1976A2] transition">
            Register Now
          </button>
          <button className="px-6 py-2 bg-orange-500 rounded-md hover:bg-orange-600 transition">
            Contact Sales
          </button>
        </div>

        {/* Learn More Section */}
        <h3 className="text-xl md:text-2xl font-semibold">Learn more about Solar</h3>
        <p className="text-sm mb-6">Ask the solarman anything about solar</p>

        <div className="max-w-lg mx-auto">
          <textarea
            placeholder="Type your question here"
            className="w-full p-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="3"
          ></textarea>
          <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
            Ask translit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-8 px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-3">Pages</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Home</li>
              <li>Translight</li>
              <li>Projects</li>
              <li>Residential</li>
              <li>Comercial</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-semibold mb-3">Packages</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Eco</li>
              <li>Bronze</li>
              <li>Silver</li>
              <li>Gold</li>
              <li>Platinum</li>
              <li>Titanium</li>
            </ul>
          </div>

          {/* Videos */}
          <div>
            <h4 className="font-semibold mb-3">Videos</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Totalenergies partnership</li>
              <li>GFZA installation</li>
              <li>How solar works</li>
              <li>Translight Flexipay</li>
              <li>TSL Podcasts</li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="font-semibold mb-3">Reach us</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Phone</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500">Greennovative Labs 2025</p>
      </footer>
    </div>
    </div>
  );
};

export default HomePage;
