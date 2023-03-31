import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import {RecoilRoot} from 'recoil'
// import App from './App';
// import Todo from './Todo'
// import MapingDelete from './MapingDelete'
import Timer from './Timer'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <RecoilRoot> */}
    <Timer/>
  
  {/* </RecoilRoot> */}
  </StrictMode>
);
