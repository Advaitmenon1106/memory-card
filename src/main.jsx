import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { queryImage } from './GetImages'
import { RenderImages } from './RenderImages/RenderImages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderImages resPromise={queryImage('snow', 90)} />
  </React.StrictMode>,
)