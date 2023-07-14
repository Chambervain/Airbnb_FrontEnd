import "./App.css";
import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    authed: false,
    asHost: false,
  };

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    );
  }
}

export default App;
