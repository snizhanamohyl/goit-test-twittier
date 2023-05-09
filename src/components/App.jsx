import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";

const TweetsPage = lazy(() => import('pages/TweetsPage/TweetsPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<HomePage/>} />
        <Route path='tweets' element={<TweetsPage/>}/>
        </Route>
    </Routes>
  )
}

export default App;
