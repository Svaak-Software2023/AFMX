import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App =React.lazy(()=>import("./App.jsx"))
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from './components/Loader/Loader.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
      <Suspense fallback={<Loader/>}>
        <App/>
      </Suspense>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
