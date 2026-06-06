import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import GameDetails from './pages/DetailSection'
import NotFound from './pages/NotFoundScreen'


const App = () => {

  return (
    <div className="min-h-screen w-full bg-linear-to-tr from-zinc-950 via-purple-950/40 to-slate-950 text-zinc-100 relative selection:bg-cyan-500 selection:text-black pb-16">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_45%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] pointer-events-none"></div>

      <div className="relative z-10 w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<GameDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
