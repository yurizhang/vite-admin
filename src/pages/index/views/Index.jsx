import React, { useState, useEffect, useRef } from 'react'

import { Button  as Abutton, notification } from 'antd';
import { Button, Stack } from '@trendmicro/react-styled-ui';
import { Carousel } from 'antd';

import axios from "axios"
import useCounterModel from "../model/useCounterModel";
import About from "./About";
import logo from '@/assets/img/logo_tball.svg';



function App() {
    const [data, setData] = useState({});
    // Parameters can be omitted for performance optimization
    const counter = useCounterModel(model => [model.count, model.decrement, model.increment]);
    const refDemo = useRef();
    const countPlus = () => {
        counter.increment();
        openNotificationWithIcon('success');
    }
    if (!refDemo.current) {
        refDemo.current = counter.count;
    }
    useEffect(() => {
        axios.get("/users/query").then(res => {
            console.log(res.data)
            setData(res.data);
        });

    }, [])
    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: 'Success',
            description: `Count updated: ${counter.count}`,
        });
    };

    return (
        <div className="App">
             <img src={logo} className="App-logo" alt="logo" />
            <Carousel autoplay>
                <div>
                    <h3>
                        Vite + React + Router + Hox + Tonic UI + AntD (TypeScript)
                    </h3>
                </div>
                <div>
                    <h3>Vite配置如开发端口、 proxy 代理、 alias 别名等</h3>
                </div>
                <div>
                    <h3>
                        配置打包时和运行时的环境变量[env]/打包静态资源的路径/Axios 二次封装
                    </h3>
                </div>
                <div>
                    <h3>
                        配置 Ant Design 按需引入/主题色 
                    </h3>
                </div>
            </Carousel>
            <p>userRef(.current): {refDemo.current}</p>
            <p>
                <Abutton type="primary" onClick={countPlus}>
                    count ++ is: {counter.count}
                </Abutton>
                
            </p>
            <Stack direction="row" spacing="2x" justifyContent="center" mt="20px">
                    <Button variant="emphasis" onClick={counter.decrement}>Tonic button Count-- is: {counter.count}</Button>
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="default">Default Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
            </Stack>
            <p>
               Axios demo:  {data.email}
            </p>
            <p>
               <a href="/info.html" target="_blank">多页示例</a> <a href="index.html/#/about" target="_blank">about路由</a>
            </p> 

            <About />           
        </div>
    )
}

export default App