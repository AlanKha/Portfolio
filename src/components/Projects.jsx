import { AiFillGithub } from "react-icons/ai";

export default function Experience() {
  return (
    <div
      id="Projects"
      className="bg-none bg-white text-black px-[10%] pb-[10%]"
    >
      <div className="px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Featured Work</h1>
        <h2 className="justify-end"></h2>
      </div>
      <div className="text-2xl pt-4 sm:pt-0 sm:h-40 flex flex-col sm:flex-row items-center border-b pb-2 border-black">
        <div className="w-full sm:w-[10%] mb-4 sm:mb-0">
          <img
            src="https://missionofhope.org/wp-content/uploads/2023/04/cropped-MOH-Logo-e1706121435496.png"
            alt="mission of hope logo"
            className="object-scale-down w-full max-w-[100px] sm:max-w-none"
          />
        </div>
        <div className="w-full sm:w-[80%] px-2 flex flex-col gap-1 justify-end">
          <a
            href="https://missionofhope.org/"
            className="text-xl font-semibold"
          >
            Mission of Hope
          </a>
          <h3 className="text-lg">
            Delivered a user-centric inventory management system to a local
            non-profit.
          </h3>
        </div>
        <div className="invisible sm:visible w-full sm:w-[10%] ml-auto flex items-center justify-end">
          <a
            href="https://github.com/hack4impact-utk/mission-of-hope"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-3xl" size={50} />
          </a>
        </div>
      </div>
      <div className="text-2xl pt-4 sm:pt-0 sm:h-40 flex flex-col sm:flex-row items-center border-b pb-2 border-black">
        <div className="w-full sm:w-[10%] mb-4 sm:mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/DijkstraDemo.gif"
            alt="Dijkstra's Algorithm Demo"
            className="object-scale-down w-full max-w-[100px] sm:max-w-none"
          />
        </div>
        <div className="w-full sm:w-[80%] px-2 flex flex-col gap-1 justify-end">
          <a
            href="https://github.com/AlanKha/Routing-Application"
            className="text-xl font-semibold"
          >
            Routing App
          </a>
          <h3 className="text-lg">
            A high-performance application to find the optimal route between
            cities using Dijkstra's Algorithm.
          </h3>
        </div>
        <div className="invisible sm:visible w-full sm:w-[10%] ml-auto flex items-center justify-end">
          <a
            href="https://github.com/AlanKha/Routing-Application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-3xl" size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
