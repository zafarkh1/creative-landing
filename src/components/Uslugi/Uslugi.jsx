const items = [
  {
    id: 1,
    title: "Стратегия",
    text: "Вдохновляемся вашими амбициями и превращаем их в долгосрочные стратегии роста.",
    color: "#473860",
  },
  {
    id: 2,
    title: "Перформанс",
    text: "Вдохновляемся вашими амбициями и превращаем их в долгосрочные стратегии роста.",
    color: "#693f35",
  },
  {
    id: 3,
    title: "Ретайл",
    text: "Вдохновляемся вашими амбициями и превращаем их в долгосрочные стратегии роста.",
    color: "#463569",
  },
  {
    id: 4,
    title: "Медиа",
    text: "Вдохновляемся вашими амбициями и превращаем их в долгосрочные стратегии роста.",
    color: "#463569",
  },
  {
    id: 5,
    title: "Дизайн",
    text: "Вдохновляемся вашими амбициями и превращаем их в долгосрочные стратегии роста.",
    color: "#693f35",
  },
  {
    id: 6,
    title: "Данные",
    text: "Вдохновляемся вашими амбициями и превращаем их в долгосрочные стратегии роста.",
    color: "#473860",
  },
];

function Uslugi(props) {
  return (
    <div className="bg-[#33303f] text-white" id="uslugi">
      <section className="myContainer lg:py-16 sm:py-8 py-6">
        <h2 className="heading2 lg:w-2/5 lg:leading-tight flex gap-5">
          <span className="hidden md:block w-1 h-10 bg-primary rounded-lg"></span>
          Наши услуги
        </h2>
        <p className="text lg:my-8 my-4 lg:w-1/3 text-[#94939b]">
          Наши инновационные маркетинговые стратегии — это не просто ключ к
          успеху, это катализатор для вашего бизнеса. Мы разрабатываем и
          внедряем креативные{" "}
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-4 gap-2 lg:my-10 my-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#2a2441] rounded-lg lg:p-6 sm:p-4 p-3 flex lg:gap-6 gap-4"
            >
              <p
                style={{ backgroundColor: item.color }}
                className={`lg:w-40 h-10 w-24 px-1 flex items-center justify-center rounded-lg smtext`}
              >
                {item.title}
              </p>
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Uslugi;
