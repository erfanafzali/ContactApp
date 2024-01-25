import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="contauner mx-auto">
      <Header />
      <ContactForm />
      <ContactList />
      <Footer />
    </div>
  );
}

export default App;

export function Header() {
  return (
    <div className="w-full flex justify-center items-center gap-y-1 mt-16 flex-col">
      <h1 className="text-3xl text-blue-600 font-bold mb-2  ">Contact App</h1>
      <p className="text-base font-semibold text-blue-900">Erfan Recat Course</p>
    </div>
  );
}

export function Footer() {
  return <div></div>;
}
