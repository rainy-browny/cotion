import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons/lib/components/Icon';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Title style={{ float: 'left', color: 'white' }} level={3}>COTION</Title>
          <Avatar style={{ float: 'right' }} icon='user' />
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>WORKSPACE</span>
                  </span>
                }
              >
                <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>TEAM 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='서브메뉴 테스트'>
                  <Menu.Item key='location1'> Programmer_Backend</Menu.Item>
                  <Menu.Item key='location2'> Programmer_Frontend</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>TEAM 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='서브메뉴 테스트'>
                  <Menu.Item key='location1'> Programmer_Backend</Menu.Item>
                  <Menu.Item key='location2'> Programmer_Frontend</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>


              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>TEAM 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='서브메뉴 테스트'>
                  <Menu.Item key='location1'> Programmer_Backend</Menu.Item>
                  <Menu.Item key='location2'> Programmer_Frontend</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>


              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>TEAM 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='서브메뉴 테스트'>
                  <Menu.Item key='location1'> Programmer_Backend</Menu.Item>
                  <Menu.Item key='location2'> Programmer_Frontend</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>


              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>TEAM 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='서브메뉴 테스트'>
                  <Menu.Item key='location1'> Programmer_Backend</Menu.Item>
                  <Menu.Item key='location2'> Programmer_Frontend</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>


              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout example Created by Shrideep</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
