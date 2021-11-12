import React, { lazy } from 'react';
import Asm from './views/apps/Asm'
import About from './views/About'
import Demo from './views/Index'   //pro container
// import Layout from './views/Layout'
// const Demo = lazy(() => import('./views/Index'));
// const Layout = lazy(() => import('./views/Layout'));
function NoMatch() {
  return (
    <div>
      <p>It looks like you're lost 404...</p>
      <p>
        Go to the home page
      </p>
    </div>
  );
}
const routes:any = [
  {
    path: "/",
    key: 1,
    component: Asm
  },

  {
    path: "/demo",
    key: 2,
    component: Demo
  },
  {
    path: "/app/asm",
    key: 3,
    component: Asm
  },
  {
    path: "/app/about",
    key: 4,
    component: About
  },
  {
    path: "*",
    key: 404,
    component: NoMatch
  }
];

export default routes