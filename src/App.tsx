import './App.scss'
import Header from "./components/Header/Header.tsx";
import { Converter } from "./components/Converter/Converter.tsx";
import { Footer } from "./components/Footer/Footer.tsx";

// ask if token written right

function App() {
  return (
    <>
      <Header />

      <main className={'page'}>
        <article className={'page__converter'}>
          <Converter />
        </article>
      </main>

      <Footer />
    </>
  )
}

export default App
