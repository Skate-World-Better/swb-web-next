import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Mozambique from "./pages/Mozambique";
import Swaziland from "./pages/Swaziland";
import Zambia from "./pages/Zambia";
import NotFound from "./pages/NotFound";
import Ethiopia from "./pages/Ethiopia";
import Lesotho from "./pages/Lesotho";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/mozambique'} element={<Mozambique />} />
        <Route path={'/swaziland'} element={<Swaziland />} />
        <Route path={'/zambia'} element={<Zambia />} />
        <Route path={'/ethiopia'} element={<Ethiopia />} />
        <Route path={'/lesotho'} element={<Lesotho />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
