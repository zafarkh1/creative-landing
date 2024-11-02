import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const items = [
  {
    id: 1,
    text: "Категорий электроприборов марки, пренебрегая",
    number: 20,
  },
  {
    id: 2,
    text: "Категорий электроприборов марки, пренебрегая",
    number: 100,
  },
  {
    id: 3,
    text: "Категорий электроприборов марки, пренебрегая",
    number: 60,
  },
  {
    id: 4,
    text: "Категорий электроприборов марки, пренебрегая",
    number: 9000,
  },
];

function Achievements() {
  const [counterOn, setCounterOn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current; // Store the current ref value

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setCounterOn(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="myContainer" id="achievements">
      <h2 className="heading2 lg:w-2/5 lg:leading-tight flex gap-5">
        <span className="hidden md:block w-2 h-10 bg-primary rounded-lg"></span>
        Наши достижения которые мы успели до сегодня
      </h2>
      <div className="lg:my-10 sm:my-6 my-3 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-[#f9f9f9] lg:p-4 p-2 rounded-lg">
            <p className="text font-medium">{item.text}</p>
            <p className="text-[#2e1690] lg:text-5xl sm:text-3xl text-2xl font-bold lg:mt-4 mt-2">
              {counterOn && (
                <>
                  <span>{" +"}</span>
                  <CountUp start={0} end={item.number} duration={4} />
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
