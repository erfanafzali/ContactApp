function ContactItem({ item, deleteHandler }) {
  return (
    <div
      className="flex w-full flex-col justify-center items-start bg-slate-300 mt-5 rounded-lg px-4 py-3"
      key={item.id}>
      <div className="w-full md:flex flex-col md:flex-row justify-between items-center ">
        <div className="w-full">
          <span className="font-bold text-sm md:text-xl text-blue-600">
            😎Name:
          </span>
          <span className="text-sm md:text-lg pl-2 font-bold text-slate-600">
            {item.name} {item.lastName}
          </span>
        </div>
        <div className="w-full">
          <span className="font-bold text-sm md:text-xl text-blue-600">
            📞Phone:
          </span>
          <span className="text-sm md:text-lg pl-1.5 font-bold text-slate-600">
            {item.phone}
          </span>
        </div>
      </div>
      <h2 className="md:pt-3 md:pb-5 mb-3 ">
        <span className="font-bold text-sm md:text-xl text-blue-600">
          📝Email:
        </span>
        <span className="text-sm md:text-lg pl-2 font-bold text-slate-600">
          {item.email}
        </span>
      </h2>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={() => deleteHandler(item.id)}
          className="w-[92%] md:w-[96%] rounded-lg bg-red-600 text-white font-bold text-base py-1 md:text-2xl">
          <span>Delete</span>
          <span>💥</span>
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
