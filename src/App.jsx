import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import {
  education,
  about,
  courses,
  jobs,
  skills,
  projects,
} from "./assets/constants.js";

function App() {
  return (
    <div className="wrapper h-full w-full p-8 dark:bg-darkColor dark:text-liteColor text-darkColor bg-liteColor">
      <div className="do-not-break">
        <Header />
        <Section section={about} />
        <Section section={jobs} />
        <div className="flex flex-row  gap-4">
          <Section section={skills} extraMargin={true} />
          <Section section={education} extraMargin={true} />
        </div>
        <Section section={courses} />
        <Section section={projects} />
      </div>
      <div className="do-not-break"></div>
    </div>
  );
}

export default App;
