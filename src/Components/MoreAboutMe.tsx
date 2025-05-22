import { Link, Links } from "react-router-dom";
const MoreAboutMe = () => {
  return (
    <section className="py-32 px-5">
      <div className="max-w-[1300px] mx-auto md:px-[32px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
          <div className="flex-1">
            <h2 className="text-[2.5rem] leading-12 sm:text-[4rem] max-w-[500px] heading-font uppercase sm:leading-[77px]">
              Redefining Web Development with{" "}
              <span className="gradient-text">Curiosity and Code</span>
            </h2>
          </div>
          <div className="flex-1 para-font">
            <p className="mb-6 text-lg leading-6">
              I'm currently focused on learning and building projects using
              React.js and JavaScript (or TypeScript). I'm also exploring
              Next.js to deepen my understanding of modern frontend frameworks,
              and will soon begin my journey into backend development.
            </p>
            <p className=" mb-6 text-lg leading-6">
              As a frontend developer, I enjoy crafting responsive, accessible,
              and user-friendly interfaces. I'm constantly learning about
              performance optimization, component-based architecture, and UI/UX
              best practices to create seamless web experiences.
            </p>
            <div className="para-font text-xl text-indigo-500 font-semibold">
              <Link
                to={"https://github.com/amandeep000"}
                target="_blank"
                className="cursor-pointer flex justify-start items-center gap-2 "
              >
                <h3>Github Link</h3>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="#f43f5e"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
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

export default MoreAboutMe;
