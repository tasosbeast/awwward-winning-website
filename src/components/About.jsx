const About = () => {
  return (
    <div id="about" className="min-h-screen min-w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to zentry
        </h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-8xl">
          Disc<b>o</b>ver The World&apos;s <br /> largest shared <b>a</b>
          dventure
        </div>

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
    </div>
  );
};

export default About;
