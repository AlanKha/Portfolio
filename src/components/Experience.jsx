import ScrollAnimation from "./ScrollAnimation";

export default function Experience() {
  return (
    <div id="Experience" className="bg-none bg-white text-black px-8 lg:px-36 py-16">
      <div className="pt-12 px-3 text-2xl flex justify-between border-b pb-2 border-black">
        <h1 className="">Experience</h1>
        <h2 className="justify-end"></h2>
      </div>
      <ScrollAnimation>
        <div className="text-2xl pt-4 md:pt-0 md:h-40 flex flex-col md:flex-row items-center border-b pb-2 border-black">
          <div className="w-full md:w-16 mb-4 md:mb-0">
            <img
              src="https://brand.utk.edu/wp-content/uploads/2019/02/University-CenteredLogo-RGB.png"
              alt="mission of hope logo"
              className="object-scale-down w-full max-h-32 md:max-w-none"
            />
          </div>
          <div className="w-full md:w-[80%] px-2 flex flex-col gap-1 justify-end">
            <a
              href="https://tickle.utk.edu/asters-provides-safety-solution-for-school-shootings/"
              className="text-xl font-semibold"
            >
              Research Intern, University of Tennessee
            </a>
            <h3 className="text-lg">
              Implemented computer vision algorithms for shooter identification
              and tracking.
            </h3>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="text-2xl pt-4 md:pt-0 md:h-40 flex flex-col md:flex-row items-center border-b pb-2 border-black">
          <div className="w-full md:w-16 mb-4 md:mb-0">
            <img
              src="https://missionofhope.org/wp-content/uploads/2023/04/cropped-MOH-Logo-e1706121435496.png"
              alt="mission of hope logo"
              className="object-scale-down w-full max-h-32 md:max-w-none"
            />
          </div>
          <div className="w-full md:w-[80%] px-2 flex flex-col gap-1 justify-end">
            <a
              href="https://missionofhope.org/"
              className="text-xl font-semibold"
            >
              Fullstack Developer, Mission of Hope
            </a>
            <h3 className="text-lg">
              Increased operational efficiencies by creating internal systems
              for their donors and admins.
            </h3>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
