import Link from "next/link";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuth();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Домой</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">О нас</Link>
        </li>
        {user && (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Профиль</Link>
          </li>
        )}
      </ul>
      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Вход
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Регистрация
          </li>
        </ul>
      ) : (
        <div>
          <p>Привет, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Выйти
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
