function Showcase(props) {
  return (
    <section className="min-h-[calc(100vh-6rem)] grid lg:grid-cols-3 grid-cols-1 items-center">
      <p className="lg:col-start-3 lg:col-span-1 lg:text-xl sm:text-lg lg:text-left text-center lg:-order-1 order-2">
        Наша компания известна своей способностью создавать уникальные и
        инновационные решения для своих клиентов
      </p>
      <h1 className="heading1 lg:col-span-3 lg:w-3/4 lg:text-left text-center">
        <span className="">Компания Creative Agency </span>
        <span className="font-normal">
          ваш надежный партнер в мире креатива
        </span>
      </h1>
    </section>
  );
}

export default Showcase;
