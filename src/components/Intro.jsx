import { WiHot } from "react-icons/wi";
import { RoughNotation } from "react-rough-notation";

export default function Intro() {
  return (
    <div
      id="Intro"
      className=" px-[10%] flex justify-center flex-col items-center h-[95vh]"
    >
      <h1 className="text-4xl font-bold text-center pb-3">
        Hi, my name is{" "}
        <span className="text-blue-300">
          <RoughNotation
            type="underline"
            show={true}
            animationDelay={500}
            color={"white"}
            strokeWidth={3}
            multiline={true}
          >
            Alan Khalili
          </RoughNotation>
        </span>
        👋
      </h1>
      <h2>
        It's my third year at The University of Tennessee studying Computer
        Science, and{" "}
        <RoughNotation
          type="highlight"
          show={true}
          color={"#bf9002"}
          animationDelay={2000}
          animationDuration={2000}
          multiline={true}
        >
          I love coding, coffee, and cooking
        </RoughNotation>
      </h2>
      <h2>
        Currently looking for Software Engineering Internship Opportunities!
        Feel free to{" "}
        <RoughNotation
          type="circle"
          show={true}
          color="white"
          animationDelay={4000}
          multiline={true}
        >
          <a href="#Contact" className="underline">
            reach out
          </a>
        </RoughNotation>
      </h2>
    </div>
  );
}
