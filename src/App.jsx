import React, { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./pages/Error"
import HomeSkeleton from "./components/Loader/HomeSkeleton"
import Skeleton from "./components/Loader/Skeleton"

const Home = lazy(() => import("./pages/Home"))
const Airing = lazy(() => import("./pages/Airing"))
const Genre = lazy(() => import("./pages/Genre"))
const Main = lazy(() => import("./pages/Main"))
const Movies = lazy(() => import("./pages/Movies"))
const Popular = lazy(() => import("./pages/Popular"))
const Series = lazy(() => import("./pages/Series"))
const Watch = lazy(() => import("./pages/Watch"))
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Skeleton />}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/tv-series"
          element={
            <Suspense fallback={<Skeleton />}>
              <Series />
            </Suspense>
          }
        />
        <Route
          path="/most-popular"
          element={
            <Suspense fallback={<Skeleton />}>
              <Popular />
            </Suspense>
          }
        />
        <Route
          path="/top-airing"
          element={
            <Suspense fallback={<Skeleton />}>
              <Airing />
            </Suspense>
          }
        />
        <Route
          path="/watch/:animeName"
          element={
            <Suspense fallback={<Skeleton />}>
              <Watch />
            </Suspense>
          }
        />
        <Route
          path="/genre/:genreName"
          element={
            <Suspense fallback={<Skeleton />}>
              <Genre />
            </Suspense>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
