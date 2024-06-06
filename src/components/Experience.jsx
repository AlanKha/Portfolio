import { AiFillGithub } from "react-icons/ai";
import ScrollAnimation from '../ScrollAnimation';

export default function Experience() {
  return (
    <div
      id="Experience"
      className="bg-none bg-white text-black px-[10%] py-[5%]"
    >
      <div className="pt-[5vh] px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Experience</h1>
        <h2 className="justify-end"></h2>
      </div>
      <ScrollAnimation>
      <div className="text-2xl pt-4 sm:pt-0 sm:h-40 flex flex-col sm:flex-row items-center border-b pb-2 border-black">
        <div className="w-full sm:w-[10%] mb-4 sm:mb-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/659e4311ac6cd11a2526443d/6b580ce4-fd34-4057-8313-5cabdeff928e/image+16.png"
            alt="mission of hope logo"
            className="object-scale-down w-full max-w-[100px] sm:max-w-none"
          />
        </div>
        <div className="w-full sm:w-[80%] px-2 flex flex-col gap-1 justify-end">
          <a href="https://hack4impact.org/" className="text-xl font-semibold">
            Hack4Impact
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
      </ScrollAnimation>
    </div>
  );
}
