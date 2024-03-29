import type { MenuProps } from "antd";
import {
  UserOutlined,
  AccountBookOutlined,
  KeyOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `${role}/profile`,
          icon: <AccountBookOutlined />,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `${role}/change-password`,
          icon: <KeyOutlined />,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: `/${role}/manage-student`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      key: `/${role}/manage-faculty`,
      icon: <TableOutlined />,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage academic",
      key: `manage academic`,
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: `management`,
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester Registration
            </Link>
          ),
          key: `${role}/semester-registration`,
        },
        {
          label: <Link href={`/${role}/offered-course`}>Offered Courses</Link>,
          key: `${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>Course Section</Link>
          ),
          key: `${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course Schedule
            </Link>
          ),
          key: `${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `${role}/user`,
    },
    {
      label: "Manage permissions",
      key: `manage-permissions`,
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/permission`}>View Permission</Link>,
          key: `${role}/permission`,
        },
      ],
    },
    {
      label: "Management",
      key: `management`,
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `${role}/department`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `${role}/courses`,
    },
  ];

  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `${role}/courses`,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course Schedule</Link>,
      key: `${role}/courses/schedule`,
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      key: `${role}/registration`,
      icon: <ThunderboltOutlined />,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      key: `${role}/payment`,
      icon: <CreditCardOutlined />,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
      key: `${role}/academic-report`,
      icon: <FileTextOutlined />,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
