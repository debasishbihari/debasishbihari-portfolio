import HeroImg from "@/assets/images/hero.jpg";
//import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Developer
            {/* , Designer, Creator, Innovator */}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              {/* <p className="text-white">
                Hello! I'm Nazmul Hossain, a passionate JavaScript developer
                specializing in creating innovative web solutions and
                user-friendly interfaces.{" "}
                <span className="font-bold text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p> */}

              <p className="text-white">
                Hii, I’m{" "}
                <span className="font-semibold text-white">
                  Debasish Bihari
                </span>{" "}
                — a JavaScript developer with a love for building clean,
                intuitive, and impactful web experiences. I&apos;m someone who
                gets genuinely excited about turning ideas into real-world
                applications, whether that means designing smooth user
                interfaces or optimizing development workflows behind the
                scenes.
              </p>
              <p className="text-white">
                What drives me? A deep curiosity and the joy of creating things
                that make a difference. I believe in the power of code to solve
                problems, connect people, and bring ideas to life in beautiful,
                functional ways.
              </p>
              <p className="text-white">
                Right now, I'm on a mission to grow as a full-stack developer.
                While my heart has always been in frontend development, I’m
                diving into backend systems to build more complete, seamless
                solutions from top to bottom. My goal is simple: to make web
                development not just powerful, but also faster, smarter, and
                more accessible for everyone.
              </p>

              {/* <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nazmul Hossain, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div>
                  </div>
                </blockquote>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
