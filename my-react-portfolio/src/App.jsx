import { Intro } from "./components/Intro/Intro.jsx";
import { Tech } from "./components/Tech/Tech.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

export const App = () => {
  return (
    <>
      <Intro />
      <Tech />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};
