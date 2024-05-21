import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Achievement = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="">
      <h1
        className="text-center md:text-6xl text-3xl font-bold py-10"
      >
        Our Achievement
      </h1>
      <div className=" text-center md:text-left ">
        <div className="p-3">
          <div>
            <h2 className="text-3xl font-bold my-5">Lorem ipsum dolor sit.</h2>
            <p className="md:mb-10 md:text-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore quis amet architecto laudantium in eos, minus deserunt dolor sit odio pariatur reprehenderit minima molestias eligendi voluptatibus. Numquam, alias eligendi! Eaque ipsum molestiae, non commodi totam deserunt eveniet harum ad sint veritatis fugit maiores earum explicabo atque fugiat maxime. Pariatur?
            </p>
          </div>
          <div className="md:flex justify-evenly space-y-8 md:space-y-0 text-center gap-20 py-5">
            <div>
              <div className="md:text-6xl text-4xl">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={0}
                    end={105}
                    duration={4}
                  />
                ) : null}
              </div>
              <div className="md:text-lg text-sm tracking-[2px]">
                Teachers
              </div>
            </div>

            <div>
              <div className="md:text-6xl text-4xl">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={0}
                    end={50}
                    duration={4}
                  />
                ) : null}
                +
              </div>
              <div className="md:text-lg text-sm tracking-[2px]">
                Students
              </div>
            </div>

            <div>
              <div className="md:text-6xl text-4xl">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={50}
                    end={100}
                    duration={4}
                  />
                ) : null}
                +
              </div>
              <div className="md:text-lg text-sm tracking-[2px]">
                Lorem, ipsum.
              </div>
            </div>

            <div>
              <div className="md:text-6xl text-4xl">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={50}
                    end={100}
                    duration={4}
                  />
                ) : null}
                +
              </div>
              <div className="md:text-lg text-sm tracking-[2px]">
                Lorem, ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;