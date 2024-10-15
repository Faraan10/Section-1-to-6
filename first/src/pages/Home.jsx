import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("https://fakestoreapi/products")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Hello</h2>
    </>
  );
};

export default Home;
