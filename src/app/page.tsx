import Image from "next/image";
import madison from "./images/madison.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <Image src={madison} alt="Madison's Photo" width={1000}
        height={500} className="width-full h-auto shadow-xl"/>
      <div className="m-2 p-4">
        <p>My name is Madison, a second year student at the University of Chicago, studying
          chemical engineering and computer science. On campus I'm professionally envolved in:
        </p>
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-737555a2-2ed6-4c70-84fd-11d37f3c0809" data-elfsight-app-lazy></div>
        <ul>
            <li><span className="coolGrade">AIR Lab Participatory AI Climate Study</span>:a research group which partners with the Chatham community
            to build online applications to help the community monitor air quality and flooding.</li>
            <li><span className="coolGrade">SUPERgroup GDP-ARGH</span>:a research group which explores DSAR and GDP complience on the top 100 websites and applications. From this, we construct a websites which help everyday people access and understand their given data from these websites.</li>
            <li><span className="coolGrade">National Society of Black Engineers (N.S.B.E.)</span>: an organization which seeks to <Link href="https://nsbe.org/about/"><i>increase number of culturally responsible Black engineers who excel academically, succeed professionally and positively impact the community.</i></Link></li>
          </ul>
        <p>
          However, life's nothing without a little bit of fun and games! Socially, I'm apart of:
        </p>
        <ul>
            <li><span className="coolGrade">Interhouse Council</span>: A student run organization which plans events for students living on campus from my favorite random acts of kindness day to pajamapalooza! We also arrange housing wide competitions, arrange fundraisers, and organize blood drives.</li>
            <li><span className="coolGrade">Max Palevsky Residential Commons</span>: Serve the Max Palevsky Residential Commons as one of the two resident assistents for Flint House. My co-RA and I plan weekly study breaks ranging from art therapy to community baking sessions, group trips, and provide ongoing support, companionship, and mentorship to our 74 residents.</li>
            <li><span className="coolGrade">Tech Savvy Friends</span>: Assist senior citizens of the hyde park community with their technology needs and get to know each and every one of them on an individual level. Our workshops and one-on-one support includes training of avoiding online scams, computer set up, organizing an online cloud, and social media help.</li>
          </ul>

      </div>
    </div>
  );
}
