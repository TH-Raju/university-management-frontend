import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "Account Profile",
          key: "account_profile",
          icon: <UserOutlined />,
        },
        {
          label: "Change Password",
          key: "change_password",
          icon: <UserOutlined />,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: "manage_students",
    },
  ];

  if (role === "student") return defaultSidebarItems;
  else if (role === "admin") return commonAdminSidebarItems;
};
