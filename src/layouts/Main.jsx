"use client";

import { Breadcrumb } from "flowbite-react";
import Sidebar from "../components/Widget/Sidebar";
import axios from "axios";
import { useEffect } from "react";

export default function Main() {
  return (
    <Breadcrumb aria-label='Default breadcrumb example'>
      <Breadcrumb.Item href='#'>
        <Sidebar />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
