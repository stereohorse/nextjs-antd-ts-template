import AntdHeader from "./antd-header";

import { Layout } from "antd";

export default ({ children }) => (
  <AntdHeader>
    <Layout>
      {children}
    </Layout>
  </AntdHeader>
);
