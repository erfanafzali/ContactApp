import { useState } from "react";
import InputForm from "../utils/InputForm";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const subnitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    //...form braye save data hamoneh
    // event.target.name bray tashkhis input mored nazare

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <div className="w-full px-6 mt-3">
      <form
        // vaghti enter mizanim
        onSubmit={subnitHandler}
        action=""
        className="placeholder:text-base  w-full flex flex-col gap-y-4 justify-center items-center shadow-md shadow-blue-600 rounded-xl py-4 px-4 mx-auto max-w-xl">
        <div className="flex w-full justify-between items-center gap-x-4">
          <InputForm
            //handel input function
            onChange={changeHandler}
            //matn labelmone
            label="Name"
            //props placeholder
            placeholder="Name"
            //be ham marbotan bayad name hashon mesl hambashe
            name="name"
            value={form.name}
            // id === htmlfor yeki bayad bashan
            id="name"
            // props type inputemone
            type="text"
          />
          <InputForm
            name="lastName"
            onChange={changeHandler}
            label="Last Name"
            placeholder="Last Name"
            value={form.lastName}
            id="last name"
            type="text"
          />
        </div>

        <div className="flex w-full justify-between items-center gap-x-4">
          <InputForm
            onChange={changeHandler}
            label="Email"
            placeholder="Email"
            name="email"
            value={form.email}
            id="email"
            type="email"
          />
          <InputForm
            name="phone"
            onChange={changeHandler}
            label="Phone"
            placeholder="Phone"
            value={form.phone}
            id="phone"
            type="number"
          />
        </div>
        <button
          // type bayad submit bashe ta handlesubmit kar kone
          type="submit"
          className="bg-blue-600 w-full text-white px-3 pb-0.5 rounded-xl text-base font-bold md:py-1 md:px-4 md:mt-5 md:pb-2 border-2 border-white hover:bg-blue-300 hover:text-blue-700 transition-all duration-300">
          submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
