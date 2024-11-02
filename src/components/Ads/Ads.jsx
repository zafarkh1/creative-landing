import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const items = [
  { id: 1, src: "/assets/ads/ads5.png" },
  { id: 2, src: "/assets/ads/ads2.png" },
  { id: 3, src: "/assets/ads/ads3.png" },
  { id: 4, src: "/assets/ads/ads4.png" },
  { id: 5, src: "/assets/ads/ads5.png" },
  { id: 6, src: "/assets/ads/ads6.png" },
  { id: 7, src: "/assets/ads/ads7.png" },
  { id: 8, src: "/assets/ads/ads8.png" },
  { id: 9, src: "/assets/ads/ads9.png" },
  { id: 10, src: "/assets/ads/ads10.png" },
];

function Ads(props) {
  const [isGradientEnabled, setIsGradientEnabled] = useState(true);

  useEffect(() => {
    // Function to toggle gradient based on screen size
    const handleResize = () => {
      setIsGradientEnabled(window.innerWidth >= 768); // Enable gradient for screens >=768px
    };

    // Set initial state
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="myContainer lg:my-12 sm:my-8 my-2" id="ads">
      <h2 className="heading2 lg:w-1/2 lg:leading-tight flex gap-5">
        <span className="hidden md:block w-2 h-10 bg-primary rounded-lg"></span>
        Creative Agency – лидер по производству реклам Центрально-Азиатском
        регионе.
      </h2>
      <div className="lg:my-10 sm:my-8 my-4 grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-5">
        <p className="text col-span-1">
          <span>
            Наши опытные и увлеченные инструкторы по йоге стремятся провести вас
            через целостную практику, которая охватывает разум, тело и дух.
          </span>
          <br />
          <br />
          <span>
            Наши опытные и увлеченные инструкторы по йоге стремятся провести вас
            через целостную практику, которая охватывает разум, тело и дух.
          </span>
        </p>
        <div className="col-span-2 space-y-6">
          <Marquee gradient={isGradientEnabled} direction="right">
            {items.map((item) => (
              <div key={item.id} className="mr-5">
                {" "}
                <img src={item.src} alt={`ads-${item.id}`} className=" " />
              </div>
            ))}
          </Marquee>

          <Marquee gradient={isGradientEnabled} direction="left">
            {items.map((item) => (
              <div key={item.id} className="mr-5">
                {" "}
                <img src={item.src} alt={`ads-${item.id}`} className="" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Ads;
