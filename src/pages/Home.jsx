import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [userInfo, setUsetInfo] = useState({});

  useEffect(() => {
    let jwt = sessionStorage.getItem("jwt");
    let domain = 'http://82.112.241.233:1993';
    let endPoint = '/api/users/me';
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
      <h1 className="flex justify-center items-center h-screen text-9xl text-gray-600">
        Hallo {userInfo.username}
      </h1>
    </>
  );
}
