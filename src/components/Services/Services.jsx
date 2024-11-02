function Services(props) {
  return (
    <div
      className="bg-[#33303f] text-white lg:py-16 sm:py-10 py-4"
      id="services"
    >
      <section className="myContainer">
        <h2 className="heading2 lg:w-2/5 lg:leading-tight flex gap-5">
          <span className="hidden md:block w-1 h-10 bg-primary rounded-lg"></span>
          Наши Cервисы
        </h2>
        <p className="text lg:my-8 my-4 xl:w-1/3 md:w-2/3 text-[#94939b]">
          Наши инновационные маркетинговые стратегии — это не просто ключ к
          успеху, это катализатор для вашего бизнеса. Мы разрабатываем и
          внедряем креативные{" "}
        </p>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 grid-cols-1 lg:gap-x-6 sm:gap-x-3 gap-x-0 lg:gap-y-6 gap-y-4 lg:my-10 my-6">
          <img
            src="/assets/service/service6.jpg"
            alt="service"
            className="lg:col-span-1 sm:col-span-2 lg:row-span-1 max-h-96 h-full object-cover w-full rounded-lg 
            transition-transform duration-300 lg:hover:scale-[1.02] lg:hover:shadow-lg cursor-pointer"
          />
          <img
            src="/assets/service/service7.jpg"
            alt="service"
            className="lg:col-span-1 lg:row-span-2 h-full rounded-lg 
            transition-transform duration-300 lg:hover:scale-[1.02] lg:hover:shadow-lg cursor-pointer"
          />
          <img
            src="/assets/service/service8.jpg"
            alt="service"
            className="lg:col-span-1 lg:row-span-1 max-h-96 h-full object-cover w-full rounded-lg
            transition-transform duration-300 lg:hover:scale-[1.02] lg:hover:shadow-lg cursor-pointer"
          />
          <img
            src="/assets/service/service9.jpg"
            alt="service"
            className="lg:col-span-1 lg:row-span-1 max-h-96 h-full object-cover w-full rounded-lg
            transition-transform duration-300 lg:hover:scale-[1.02] lg:hover:shadow-lg cursor-pointer"
          />
          <img
            src="/assets/service/service2.jpg"
            alt="service"
            className="lg:col-span-1 lg:row-span-1 max-h-96 h-full object-cover w-full rounded-lg
            transition-transform duration-300 lg:hover:scale-[1.02] lg:hover:shadow-lg cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
