import { Spin } from "antd";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50%" }}>
      <Spin tip="Loading" size="large" />
    </div>
  );
};

export default Loading;
