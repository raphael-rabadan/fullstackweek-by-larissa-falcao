import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css"
import ListaPessoas from "./components/ListaPessoas"

const { Header, Content, Footer } = Layout

export default function App() {
  return (
    <div>
      <Layout classname="layout">
        <Header>
          <div classname="logo">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Home</Menu.Item>
            </Menu>
          </div>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <div classname="site-layout-content">
            <ListaPessoas></ListaPessoas>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>eVaccine - Fullstact Week</Footer>
      </Layout>
    </div>
  );
}
