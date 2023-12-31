import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from './components/ACCUEIL/Accueil';
import Galerie from './components/GALERIE/Galerie';
import Tarifs from './components/TARIFS/Tarifs';
import Contact from './components/CONTACT/Contact';
import Nav from './components/UI/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <>
      <header className="fixed w-full mt-0 bg-white">
        <Nav />
      </header>
      <main className="flex m-auto flex-col pt-[10vh] ">
        <Routes>
          <Route exact path="/galerie" element={<Galerie />} />
          <Route exact path="/tarifs" element={<Tarifs />} />
          <Route
            exact
            path="/contact"
            element={
              <GoogleReCaptchaProvider reCaptchaKey="6LdYXZEnAAAAAKi9xVkp1g_8Zwh8Hj2sfFk8I7rh">
                <Contact />
              </GoogleReCaptchaProvider>
            }
          />
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/*" element={<Accueil />} />
        </Routes>
      </main>
      <footer className="bg-white w-full flex items-center h-[10vh] pl-4">
        <div className="rounded bg-white">
          <a
            className="text-gray-700 font-medium px-3 py-1 rounded shadow bg-sky-50 border-sky-700 p-6 ring-2 ring-sky-600 hover:bg-sky-700 hover:text-white "
            href="https://be.contentful.com/login"
            target="_blank"
            rel="noreferrer"
          >
            Se connecter
          </a>
        </div>
      </footer>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
