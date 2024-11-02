import { CiPlay1 } from "react-icons/ci";

const items = [
  {
    id: 1,
    title: "Стратегический маркетинг, как следует из вышесказанного",
    text: "Согласно последним исследованиям, маркетингово-ориентированное издание недостижимо",
  },
  {
    id: 2,
    title: "Лидерство в продажах экономит целевой сегмент рынка",
    text: "Стоит отметить, что традиционный канал отталкивает медийный канал",
  },
  {
    id: 3,
    title: "Эластичность спроса, безусловно, выражена наиболее полно",
    text: "Маркетинговая активность притягивает CTR. Экспансия экономит комплексный анализ ситуации",
  },
];

function News(props) {
  return (
    <section className="myContainer lg:my-16 sm:my-10 my-4" id="news">
      <h2 className="heading2 lg:w-2/5 lg:leading-tight flex gap-5">
        <span className="hidden md:block w-1 h-10 bg-primary rounded-lg"></span>
        Новости
      </h2>
      <div className="flex lg:flex-row flex-col lg:gap-20 sm:gap-10 gap-4 lg:my-10 my-4">
        <div className="relative">
          <img src="/assets/news/news.png" alt="img" className="" />
          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white lg:w-20 w-16 lg:h-20 h-16 rounded-full flex items-center 
          justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
          >
            <CiPlay1 size={24} />
          </span>
        </div>
        <div>
          <div className="smtext">
            <span className="text-primary">Новости</span>
            <span className="text-[#94939b] ml-3">01.02.2024</span>
            <div className="flex flex-col lg:gap-10 gap-2 lg:mt-6 mt-2">
              {items.map((item) => (
                <div key={item.id} className="text lg:space-y-4 space-y-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
