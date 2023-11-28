import './App.scss'
import Header from "./components/Header/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header />

      <main className={'page'}>
        <article className={'page__converter'}>
          <Outlet />
        </article>
      </main>

      <Footer />
    </>
  )
}

export default App
