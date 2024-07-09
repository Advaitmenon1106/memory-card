import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { queryImage } from './GetImages'
import { RenderImages } from './RenderImages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderImages resPromise={queryImage('nature', 90)} />
  </React.StrictMode>,
)