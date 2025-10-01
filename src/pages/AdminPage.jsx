import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();
  const [userInfo, setUsetInfo] = useState({});

  const Logout = () => {
    sessionStorage.removeItem("jwt");
  };

  useEffect(() => {
    let jwt = sessionStorage.getItem("jwt");
    let domain = "http://82.112.241.233:1993";
    let endPoint = "/api/users/me";
    let url = domain + endPoint;

    if (!jwt) {
      navigate("/loginPage");
    } else {
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((res) => {
          setUsetInfo(res.data);
        })
        .catch((err) => {
          sessionStorage.clear;
          navigate("/loginPage");
          console.log(err);
        });
    }
  });

  return (
    <>
      <h1 className="flex flex-col gap-8 justify-center items-center h-screen text-9xl text-gray-600">
        Hallo {userInfo.username}
        <button
          onClick={Logout}
          className="btn btn-error"
        >
          Logout
        </button>
      </h1>
    </>
  );
}
