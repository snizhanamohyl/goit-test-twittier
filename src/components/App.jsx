import { Routes, Route } from "react-router-dom";
// import TweetsPage from "pages/TweetsPage/TweetsPage";
import HomePage from "pages/HomePage/HomePage";
import Layout from "components/Layout/Layout";
import { lazy } from "react";

const TweetsPage = lazy(() => import('pages/TweetsPage/TweetsPage'));
console.log('lazy')

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
