import { useNavigate } from 'react-router-dom';
import React, { lazy,useEffect } from 'react';
import Asm from './views/apps/Asm'
import About from './views/About'
import Demo from './views/Index'   //pro container
// import Layout from './views/Layout'
// const Demo = lazy(() => import('./views/Index'));
// const Layout = lazy(() => import('./views/Layout'));
function Redirect(props:any){
    const navigate=useNavigate();
    console.log({props})

    useEffect(()=>{
      navigate(props.to)
    },[]);
    return (
      <p>
      Redirect...
    </p>
    )
  

}
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
    element: <Asm />
  },
  {
    path: "/app",
    children: [
      { index: true, element: <About /> },
      {
        path: "/app/about",
        key: 4,
        element: <About />
      },
      {
        path: "/app/demo",
        key: 4,
        element: <Demo />
      },      
    ]
  },
  {
    path: "/demo",
    key: 2,
    element:<Redirect to='/app/demo' />,
    navigator:'/app/demo',
    redirectTo: '/app/demo'
  },

  {
    path: "*",
    key: 404,
    element: <NoMatch />
  }
];

export default routes