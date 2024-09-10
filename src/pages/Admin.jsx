import { useSelector } from "react-redux";
import LoginForm from "./LoginForm.js";
import { createProductRequest } from "../api/Products.js";

import { useEffect } from "react";
export default function Admin() {
  // const shouldNavigate = useSelector((state) =>
  // state.auth);

  return (
    <>
      <div>
        <LoginForm />
      </div>
    </>
  );
}
