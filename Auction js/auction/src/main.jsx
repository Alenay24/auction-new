import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'

import NAVBAR from './component/layout/NAVBAR.jsx'
import App from './App.jsx'
import FOOTER from './component/layout/FOOTER.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <NAVBAR/>
   
   
    <App />
<FOOTER/>
    
  </StrictMode>,
)
