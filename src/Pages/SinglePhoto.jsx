import React, { useEffect, useState } from "react";
import "../style/SinglePhoto.css";
import { useParams } from "react-router-dom";

export const SinglePhoto = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const getData = async () => {
    const resp = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const { photo } = await resp.json();
    setData(photo);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        id="singlePhoto"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          marginTop: "60px",
        }}
      >
        <img src={data?.url} alt="" />
        <br />

        <div>
          <h3 style={{color:"white",textAlign:"center"}} >{data?.title}</h3>
          <p style={{color:"white"}} >{data?.description}</p>
        </div>


      </div>
    </>
  );
};
