import { Link, Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeaders";
import { useEffect, useRef } from "react";
import { createProductRequest } from "../api/Products";
export default function AdministrationPanel() {
  const FileInputThumbnail = useRef(null);
  const FileInputImage = useRef(null);
  /*const add = () => {
    const data = new FormData();
    data.append("category", "66dd7ba7e2a8d4f9e4b209f6");
    data.append("subcategory", "66dd820fe2a8d4f9e4b209ff");
    data.append("name", "pride");
    data.append("price", "100000");
    data.append("quantity", "10");
    data.append("brand", "b");
    data.append("description", "good ");
    console.log(FileInputThumbnail.current.files[0]);
    data.append("thumbnail", FileInputThumbnail.current.files[0]);
    createProductRequest(data);
  };*/
  return (
    <div className='w-full bg-blue-500 p-2 flex '>
      <div className='p-2 underline text-white mr-20'>
        <Link to='/'>بازگشت به سایت</Link>
      </div>
      <AdminHeader />
      <div className='text-2xl font-bold absolute right-10'>
        پنل مدیریت فروشگاه
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
