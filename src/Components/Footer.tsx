import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center pt-4 px-5 md:pt-32">
      <div className="overflow-hidden">
        <div className="md:px-[32px] max-w-[1300px] mx-auto relative w-full">
          <div className="flex flex-col gap-8 justify-between w-full md:flex-row ">
            <div className="">
              <h3 className="para-font uppercase text-xl font-semibold mb-4">
                Aman Deep Singh
              </h3>
              <p className="para-font text-[#fefce899]">
                Frontend Developer - open for collaboration & work
              </p>
            </div>
            <div className="flex gap-32">
              <div>
                <h3 className="text-lg leading-6 mb-4">Me</h3>
                <div className="flex flex-col gap-3">
                  <Link to={"#"}>About</Link>
                  <Link to={"#"}>Work</Link>
                  <Link to={"#"}>Uses</Link>
                  <Link to={"#"}>Contact</Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg leading-6 mb-4">Connect</h3>
                <div className="flex flex-col gap-3">
                  <Link to={"#"}>Github</Link>
                  <Link to={"#"}>LinkedIn</Link>
                  <Link to={"#"}>Email</Link>
                  <Link to={"#"}>Instagram</Link>
                </div>
              </div>
            </div>
            {/* bottom  footer */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
