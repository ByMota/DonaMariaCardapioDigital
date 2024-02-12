import { Tabs } from "./components/tabs";
import cozinheiro from "./assets/cozinheiro-x-dicas-para-encontrar-o-profissional-ideal-20210422170036.jpg.jpg"

function App() {

  return (
    <main className="flex flex-col items-center m-auto min-w-96 max-w-3xl md:w-full my-5 ">
      <div className="relative ">
        <div className="space-y-5">
          <h1 className="text-white text-lg font-bold leading-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            Dona Maria Cozinha Artesanal
          </h1>
          <p className="text-white underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            Delícias servidas com paixão!
          </p>
        </div>
        <img src={cozinheiro} alt="" className="min-w-96 max-w-3xl md:w-full" />
      </div>
      <Tabs/>
    </main>
  )
}

export default App
