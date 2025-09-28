import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [userInfo, setUsetInfo] = useState({});

  useEffect(() => {
    let jwt = sessionStorage.getItem("jwt");
    if (!jwt) {
      navigate("/loginPage");
    } else {
      let domain = "http://82.112.241.233:1993/";
      let endPoint = "api/auth/Local";
      let url = domain + endPoint;

      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then((res) => {
          setUsetInfo(res.data);
          console.log(res);
        })
        .catch((err) => {
          sessionStorage.clear;
          // navigate("/loginPage");
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
