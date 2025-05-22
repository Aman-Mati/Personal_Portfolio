const Contact = () => {
  return (
    <section className="flex justify-center py-32 px-5">
      <div className="max-w-[1300px] mx-auto relative w-full md:mx-8">
        <h3 className="heading-font text-5xl leading-14 md:text-7xl md:leading-20 font-extrabold text-center mb-3">
          Let's Build Something great
        </h3>
        <p className="para-font text-2xl text-[#fffaf5] max-w-3xl text-center mb-5 sm:mx-auto">
          I'm always open to new opportunities, collaborations, and connections.
          Feel free to reach out to ask a question, share your project idea,
          talk about cats or the meaning of life.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2.5">
          <h3 className="heading-font text-4xl md:text-5xl text-center leading-[56px] text-[#fffaf5]">
            amant6910@gmail.com
          </h3>
          <div className="text-lg w-full text-center sm:w-fit para-font h-fit py-2 px-6 rounded-lg cursor-pointer  bg-gradient-to-b from-[#610000] to-[#fd511d]">
            copy
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
