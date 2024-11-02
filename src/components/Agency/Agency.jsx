import { MdOutlineArrowOutward } from "react-icons/md";

function Agency(props) {
  return (
    <section className="myContainer lg:my-16 sm:my-10 my-4" id="agency">
      <h2 className="heading2 lg:w-2/5 lg:leading-tight flex gap-5">
        <span className="hidden md:block w-1 h-10 bg-primary rounded-lg"></span>
        Наши агентство
      </h2>
      <p className="text lg:my-8 my-4 lg:w-2/5">
        Наши инновационные маркетинговые стратегии — это не просто ключ к
        успеху, это катализатор для вашего бизнеса. Мы разрабатываем и внедряем
        креативные решения, которые не только привлекают внимание, но и
        гарантируют рост вашего
      </p>
      <div className="lg:my-10 grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="lg:col-span-2 relative">
          <img
            src="/assets/agency/agency1.png"
            alt="agency"
            className="rounded-lg w-full"
          />
          <a href="#agency">
            <span className="absolute bottom-4 right-4 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer h-10 w-10 rounded-full flex items-center justify-center">
              <MdOutlineArrowOutward />
            </span>
          </a>
        </div>
        <div className="lg:col-span-1 relative">
          <img
            src="/assets/agency/agency2.png"
            alt="agency"
            className="rounded-lg w-full"
          />
          <a href="#agency">
            <span className="absolute bottom-4 right-4 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer h-10 w-10 rounded-full flex items-center justify-center">
              <MdOutlineArrowOutward />
            </span>
          </a>
        </div>
        <div className="lg:col-span-1 relative">
          <img
            src="/assets/agency/agency3.png"
            alt="agency"
            className="rounded-lg w-full"
          />
          <a href="#agency">
            <span className="absolute bottom-4 right-4 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer h-10 w-10 rounded-full flex items-center justify-center">
              <MdOutlineArrowOutward />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Agency;
