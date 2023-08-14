import Main from "@/components/main";
import About from '@/components/about';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Skills from "@/components/skills";

export default function HomePage() {
  return ( <>
  <Main/>

  <About/>

  <Projects/>

  <Contact/>

  <Skills/>

  <div className='item_hover' id='scrollTop'>
    <button><i className="fa-solid fa-arrow-up"/></button>
  </div>
  </> )
};