import Card from "../components/global/Card/Card";
import NavBar from "../components/global/NavBar/NavBar";

export default function Resume() {
  return (
    <div>
      <div className="flex justify-between py-20 mb-12 bg-project-bg bg-cover bg-center">
        <h1 className="text-3xl pl-12">
          William<span className="text-amber-600 text-4xl"> Chase </span>Little
        </h1>
        <p className="pr-12 text-lg font-mono">Software Engineer</p>
      </div>
      <div className="flex flex-col gap-4 px-12">
        {/* Summary */}
        <div className="font-bold">
          <h4 className="text-2xl underline underline-offset-2">Summary</h4>
          <p className="font-medium">
            Software Engineer with a drive for efficiency and excellence in
            cutting-edge technologies. Hardworking and collaborative. Passionate
            about developing and creating. Seeking to gain more knowledge and
            experience in Software Engineering.
          </p>
        </div>
        <div className="font-bold">
          <h4 className="text-2xl underline underline-offset-2">Experience</h4>
          <p className="font-medium">
            Software Engineer with a drive for efficiency and excellence in
            cutting-edge technologies. Hardworking and collaborative. Passionate
            about developing and creating. Seeking to gain more knowledge and
            experience in Software Engineering.
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {/*  TODO:  Leave feedback */}
    </div>
  );
}
