import SideBar from "@/components/ui/Sidebar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      {children}
    </Layout>
  );
};

export default DashboardLayout;
