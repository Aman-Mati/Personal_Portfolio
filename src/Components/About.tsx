import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="flex justify-center py-4 md:py-32">
      <div className="px-5 max-w-[1300px] m-auto md:px-[32px]">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between lg:gap-32">
          <div className="w-full md:w-1/2">
            <h3 className="text-[2.5rem] md:text-[4rem] heading-font max-w-[500px] leading-12 uppercase lg:leading-20">
              Hi, I'm,<span className="gradient-text">Aman</span>
              <span className="block">
                I'm a digital chef who cooks up creative solutions for the web.
              </span>
            </h3>
          </div>
          <div className="text-[18px] space-y-6 para-font w-full md:w-1/2">
            <p>
              I'm a passionate frontend developer from India, dedicated to
              crafting engaging and accessible web experiences. I specialize in
              using HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js to
              build solutions that are both functional and visually stunning.
            </p>
            <p>
              As someone who cooks things for the web, I enjoy blending design
              and engineering to build seamless and impactful projects.
            </p>
            <div>
              <Link
                to={"#"}
                onClick={(e) => e.preventDefault()}
                className="flex justify-start items-center gap-2 heading-font text-[24px]"
              >
                More About Me
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={4.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
