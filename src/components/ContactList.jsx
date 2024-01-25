import ContactItem from "./ContactItem";

function ContactList({ saveContacts, deleteHandler }) {
  console.log(saveContacts);
  return (
    <div className="w-full rounded-lg border-4 py-4 px-6 border-blue-600 mx-auto md:max-w-[1000px] bg-white mb-32">
      <h1 className="text-blue-600 text-xl font-bold w-full text-center border-b-4 pb-4 border-blue-600">
        List of Contacts
      </h1>
      {saveContacts.length ? (
        <ul className="w-full space-y-3">
          {saveContacts.map((item) => (
            <ContactItem
              key={item.id}
              item={item}
              id={item.id}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <div className="w-full bg-gray-300 text-center text-xl mt-5 py-6 rounded-lg">No Contact Yet</div>
      )}
    </div>
  );
}

export default ContactList;
