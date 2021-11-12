import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Alert,Text,Flex,Button,FlatButton,Stack } from '@trendmicro/react-styled-ui';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';

import logo_tball from '@/assets/img/logo_tball.svg';
import tball from '@/assets/img/tball.svg';

import {HeartIcon, WorkbenchIcon} from '@/plugins/icon';

import App from './_App';
import Routes from './router';
import { useNavigate } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


  export default () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate=useNavigate();

    const onCollapse = (scollapsed:boolean) => {
        console.log(scollapsed);
        setCollapsed(scollapsed)
    };
    
    const onMenuClick=(obj:any)=>{
      console.log(obj);
      let router;
      // const Routes:any=routes;
      console.log(Routes);
      for(let item of Routes){
             //console.log(item);
            if(item.children){
                let children= item.children;
                router=children.find((item2: { key: any; })=>item2.key==obj.key);  
                if(router){
                    break;
                }
                if(item.name=='apps'){
                      for(let item2 of item.children){
                          if(item2.children){
                              router=item2.children.find((item3:any)=>item3.key==obj.key); 
                             // console.log('router3',router);
                              if(router){ break;}
                          }
                      }
                      if(router){ break;}
                }              
            }
            if(item.key == obj.key){
              router=item;
              break;
            }   
      }
      if (router) {
          if (router.link) {
            window.open(router.link);
            return;
          }
          navigate(router.path);
      }else{
          navigate('/404?t='+(new Date()).getTime(),{replace: true});
      }
      console.log({router}); 
    }

    return (
      <>
      <div id="layout-Alert">
            <Alert variant="solid" severity="warning" isClosable>
                <Flex justify="space-between">
                    <Text>This is a warning alert.</Text>
                    <Button size="sm" variant="ghost">Ghost Button</Button>
                    
                </Flex>
            </Alert>
            <Alert variant="solid" severity="error" isClosable>
                <Flex justify="space-between" mt={-1} mb={-2}>
                    <Text>This is an error alert.</Text>
                    <FlatButton  size="sm" variant="outline" variantColor="black:primary">Action Button</FlatButton>
   
                </Flex>
            </Alert>  
      </div>
      <Layout>
        <Sider collapsible width={240} collapsedWidth={64} collapsed={collapsed} onCollapse={onCollapse}>
          <div className={classNames('logo',{'collapsed':collapsed})}>                           
                 <img src={collapsed? tball: logo_tball} /> 
          </div>
          <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" onClick={onMenuClick}>
            <Menu.Item key="1" icon={<HeartIcon />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>

                       
          </Menu>
        </Sider>

        <Layout>
          <Header>
          <HeartIcon style={{ color: 'hotpink' }} />  <WorkbenchIcon style={{ fontSize: '32px' }} /> this is Header
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {/* <router-view/> */}
            
                {/* <iframe className="iframeAuth" id="__ASM_CONTAINER"  name="__ASM_CONTAINER" height='auto' scrolling="auto" src="https://rollupjs.org/guide/en/" frameBorder="0"></iframe> */}
                <App />
           
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by CDC FED</Footer> */}
        </Layout>
      </Layout>
      </>
    );
}

