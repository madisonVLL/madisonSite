import Image from "next/image"; 
import Link from "next/link";

//Links to Images 
import blokus from "../images/portfolio/blokus.png";
import ptp from "../images/portfolio/PTPhome.png";
import ml from  "../images/portfolio/eventsPlanning.png";

const projects = [{title: "Passion T Plates Website", url: "https://github.com/madisonVLL/passiontplates", description: "Created a website for Passion T Plates LLC resturant including google reviews, instagram links, videos, updated menus, google maps APIs, and more.", image: ptp}, 
  {title: "Blokus Game", url: "https://github.com/madisonVLL/Blokus-School-Project", description: "Created a version of the Blokus boardgame using Python. This application is a text user interface  design with multiple different game modes including customization for game board size and amount of players.", image: blokus}, 
  {title: "Events AI", url: "https://github.com/madisonVLL/event-ai/tree/main/events-ai", description: "Tensor flow and web scrapping to create a full-stack web application using JavaScript, Next.js, HTML, CSS for front end and Python on back end to create an event planning timeline using an event type (wedding, baby shower, birthday party, etc.) and an event date.", image: ml}]

const Portfolio = () => {
  return (
    <div className="p-4">
        <div className='m-2'>
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <br></br>
          <p className="text-2xl italic py-2">Something that guides me show much in this world is the drive to create, in addition to combining my passions for hospitality and event planning. <br></br><br></br>This inticed me to design websites for local resturants, first starting with Passion T Plates LLC. I was driven to create this site as I was driven to support small, minority owned businesses in the Chicagoland area to help them gain their full potential, translating the love they give their customers to the web. <br></br><br></br>
          In my personal life, I'm a huge event planner! Whether it be from Thanksgiving dinner to a theme party, I love hosting my friends and family to bring them together for a memorable expirence. However, the common theme that I noticed is how difficult it is to put these events together, which is why I'm in the process of creating a full stack application with uses machine learning insights to help event planners like myself plan their events and create timelines to keep themselves on track to host an unforgetable expirence. <br></br><br></br>
          Acedemically, I've had the pleasure of working on a Blokus game project in Computer Science course 142. I learned how to organize my time, collaberate on small, yet signifigant pieces of code, and most importantly, how to keep a GitHub repository organized! </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 w-full">
          {projects.map((category) => (
            <Link href={category.url} target="_blank" key={category.title}>
              <div className="bg-white shadow-xl rounded-lg p-6 text-center m-2 flex flex-col h-full">
                <h1 className="text-xl font-bold">{category.title}</h1>
                <div className="flex-grow content-center">
                  <Image src={category.image} alt={category.title} className="w-full h-auto" />
                </div>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Portfolio