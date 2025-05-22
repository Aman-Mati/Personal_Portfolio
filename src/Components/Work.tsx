import Card from "./Card";
const Work = () => {
  return (
    <section className="flex justify-center py-32 px-4">
      <div className="max-w-[1300px] mx-auto sm:px-[32px] w-full">
        <div>
          <h3 className="sm:text-[5rem] text-5xl leading-[3.5rem] heading-font uppercase sm:leading-[5rem] text-center mb-16">
            Work
          </h3>
        </div>
        <div className="flex flex-col justify-between md:flex-row gap-6">
          <div className="flex flex-col sm:flex-row justify-between gap-6 ">
            <Card
              title="Four Sigmatic"
              description="State of Kind is a modern e-commerce store built with Next.js, offering fast performance. Designed with Tailwind CSS, it provides a sleek, responsive layout. GSAP animations enhance user interaction, while powerful features like product filtering, advanced search, and efficient product management make browsing and purchasing seamless. Enjoy an intuitive, engaging shopping experience with State of Kind"
              image="/four_sigmatic.png"
              stack={["React", "Tailwind", "Redux"]}
              link="https://four-sigmatic.vercel.app/"
            />
            <Card
              title="Alpen Tesitin Resort"
              description="Prisma 🔗 for database management, the API will provide robust functionality for handling product data, customer orders, and more. It includes features like product listings, user authentication, and order processing. As development progresses, it will offer efficient and scalable solutions for the store backend needs. 🔥"
              stack={["React js", "TailwindCss", "Swiper Js"]}
              image="/alpen_tesitin.png"
              link="https://alpen-tesitin.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
