"use client";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const page = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuth();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <p>Загрузка...</p>
      ) : user ? (
        <p>Добро пожаловать, {user.displayName}</p>
      ) : (
        <p>Вы должны войти в систему для просмотра этой страницы</p>
      )}
    </div>
  );
};

export default page;
