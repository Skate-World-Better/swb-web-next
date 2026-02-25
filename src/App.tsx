import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop"
import ErrorBoundary from "./components/ErrorBoundary"

const Home = lazy(() => import("./pages/Home"))
const Mozambique = lazy(() => import("./pages/Mozambique"))
const Swaziland = lazy(() => import("./pages/Swaziland"))
const Zambia = lazy(() => import("./pages/Zambia"))
const Ethiopia = lazy(() => import("./pages/Ethiopia"))
const Lesotho = lazy(() => import("./pages/Lesotho"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/mozambique'} element={<Mozambique />} />
          <Route path={'/swaziland'} element={<Swaziland />} />
          <Route path={'/zambia'} element={<Zambia />} />
          <Route path={'/ethiopia'} element={<Ethiopia />} />
          <Route path={'/lesotho'} element={<Lesotho />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
