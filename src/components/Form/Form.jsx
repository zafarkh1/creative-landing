import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Message from "../../utils/Message";
import "./form.css";

const items = [
  {
    id: 1,
    icon: <BsFillInfoCircleFill />,
    title: "info@agency.uz",
  },
  {
    id: 2,
    icon: <FaPhoneFlip />,
    title: "+998 90 999 09 90",
  },
  {
    id: 3,
    icon: <IoLocationOutline />,
    title: "г.Ташкент, Юнусабадский район ул Амира Темура, дом 9",
  },
];

function Form(props) {
  const { sendMessage, loading } = Message();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [msg, setMsg] = useState("");
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [msgError, setMsgError] = useState("");

  const validateName = () => {
    if (!name) {
      setNameError("Имя обязательно для заполнения");
      return false;
    }
    if (name.length < 3) {
      setNameError("Имя должно содержать не менее 3-х символов");
      return false;
    }
    if (!isNaN(name)) {
      setNameError("Имя должно содержать только буквы");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateTel = () => {
    if (!tel) {
      setTelError("Телефон обязателен для заполнения");
      return false;
    }
    setTelError("");
    return true;
  };

  const validateMsg = () => {
    if (!msg) {
      setMsgError("Сообщение обязательно для заполнения");
      return false;
    }
    setMsgError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isTelValid = validateTel();
    const isMsgValid = validateMsg();

    if (isNameValid && isTelValid && isMsgValid) {
      try {
        await sendMessage({ name, tel, msg });

        toast.success("Сообщение успешно отправлено");

        setName("");
        setTel("");
        setMsg("");
      } catch (err) {
        toast.error("Произошла ошибка при отправке сообщения");
      }
    }
  };

  return (
    <section className="myContainer relative lg:my-16 sm:my-10 my-4" id="form">
      <h2 className="heading2 lg:w-2/5 lg:leading-tight flex gap-5">
        Форма обратной связи
      </h2>
      <div className="lg:my-10 sm:my-8 my-4 lg:space-y-6 sm:space-y-4 space-y-2">
        {items.map((item) => (
          <div className="flex items-center lg:gap-5 gap-2" key={item.id}>
            <span className="text-primary">{item.icon}</span>
            <span className="text">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#33303f] text-white lg:w-2/5 lg:py-8 md:py-6 py-4 lg:px-10 px-8 rounded-lg md:absolute z-10 lg:top-10 lg:right-10 top-0 right-0">
        <h5 className="heading5">У вас появились вопросы?</h5>
        <form
          onSubmit={handleSubmit}
          className="lg:mt-10 mt-4 flex flex-col lg:gap-3 gap-2"
        >
          <div className="space-y-2">
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={validateName}
              className="lg:px-4 lg:py-4 px-2 py-2 w-full rounded-lg outline-none bg-[#565470] text-[#e0e0e0]"
            />
            {nameError && <p className="text-red-600 text-sm">{nameError}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="tel">Номер телефона</label>
            <PhoneInput
              country={"uz"}
              value={tel}
              onChange={(phone) => setTel(phone)}
              inputProps={{ id: "tel", required: true }}
              containerStyle={{ width: "100%" }}
              inputStyle={{
                width: "100%",
                borderRadius: "0.4rem",
                border: "0",
                backgroundColor: "#565470",
                color: "#e0e0e0",
              }}
              containerClass="input-container"
              inputClass="input"
            />
            {telError && <p className="text-red-600 text-sm">{telError}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="msg">Тема</label>
            <textarea
              name="msg"
              id="msg"
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onBlur={validateMsg}
              className="bg-[#565470] text-[#e0e0e0] w-full rounded-lg lg:px-4 lg:py-4 px-2 py-2 outline-none"
            />
            {msgError && <p className="text-red-600 text-sm">{msgError}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary lg:py-4 py-2 rounded-lg cursor-pointer mt-4"
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default Form;
