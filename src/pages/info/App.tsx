import React, { useState,useEffect,useRef } from 'react'
import { Button,notification } from 'antd';
import { Carousel } from 'antd';

import axios from "axios"
//import logo from './logo.svg'

import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [data, setData]:any = useState({});
  const refDemo:any=useRef();
  const countPlus = () => {
    setCount((count) => count + 1);  
    openNotificationWithIcon('success');  
  }
  if(!refDemo.current){
    refDemo.current=count;
  }
  useEffect(()=>{
    axios.get("/users/query").then(res=>{
      console.log(res.data)
      setData(res.data);
    });

  },[])
  const openNotificationWithIcon = (type:string) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <div className="App">
      
      <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
        </div>
      </Carousel>
        <p>这是一个info.html页面 {refDemo.current}</p>
        <p>
          <Button type="primary" onClick={countPlus}>
            count is: {count}
          </Button>
        </p>
          
        <p>
           {data.email}

        </p>
      
    </div>
  )
}

export default App
