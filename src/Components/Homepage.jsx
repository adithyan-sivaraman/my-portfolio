import MenuBar from "./Menu";
import { skills } from "./Skill";

const HomePage = () => {
  return (
    <section
      className="flex flex-col  w-screen h-screen  relative items-center justify-center"
      id="home"
    >
      <MenuBar />

      <div
        className="flex flex-col h-1/4 sm:h-1/3  items-center justify-center  gap-10 w-screen"
        id="about_center"
      >
        <h1 className="font-extrabold text-3xl tracking-widest uppercase px-2">
          Adithyan Sivaraman
        </h1>
        <h2 className="text-lg sm:text-sm lg:text-xl font-bold tracking-wider px-4">
          Fullstack Developer and Finance Professional
        </h2>
      </div>

      <div
        className="flex-1 flex justify-center items-center flex-col sm:flex-row gap-4"
        id="about_skills"
      >
        <div className="flex flex-col w-full  lg:w-1/2 px-4 gap-5 justify-between">
          <p className="font-bold text-3xl tracking-widest px-2">About Me</p>
          <span className="text-base lg:text-lg mt-4">
            I&apos;m an aspiring<b> Full Stack Developer </b>interested in
            building progressive web, mobile and desktop applications
          </span>
          <span className="text-base lg:text-lg mt-4">
            I&apos;m also a <b>Finance Professional </b>and{" "}
            <b>Chartered Accountant Student</b> with experience in Accounts,
            Audit and Taxation
          </span>
          <span className="text-base lg:text-lg mt-4">
            I currently work at <b>Assetbot Solutions LLP</b> developing web
            application for real estate sector Audit and Taxation
          </span>
        </div>
        <div className="flex flex-col flex-wrap gap-5 w-full lg:w-1/2 px-4">
          <p className="font-bold text-3xl tracking-widest px-2">My Skills</p>
          <div className="flex flex-wrap gap-5">
            {skills.map((item, index) => (
              <span key={index} className="skill-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
