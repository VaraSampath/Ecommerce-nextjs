"use client";
import Image from "next/image";
import React from "react";
import store from "@/store/store";
import { readUsers } from "@/store/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
type AppDispatch = typeof store.dispatch;
const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(readUsers());
  }, []);
  const { userDetails, loading, error } = useSelector(
    (state: any) => state.users
  );
  return (
    <nav className="flex flex-row justify-between px-6 md:px-12 py-6">
      <Image
        src="/logo.png"
        alt=""
        width={60}
        height={60}
      />
      <ul className="flex flex-row gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Products</Link>
        </li>
        <li>
          <Link href="/">Whishlist</Link>
        </li>
        <li>
          <Link href="/">Cart</Link>
        </li>
      </ul>
      <p>{userDetails.userDetails.fullname}</p>
    </nav>
  );
};

export default Navbar;
