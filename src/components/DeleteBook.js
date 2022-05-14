import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const DeleteBook = () => {
  const URL = "https://61cbf244198df60017aebdbf.mockapi.io/library-management";
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state.id;


  // const handleDelete = () => {
  //   try {
  //     axios.delete(`${URL}/${id}`);
  //     alert("successfully deleted");
  //   } catch (err) {
  //     console.log(err);
  //     setCounter(counter+1);
  //   }
  // };

  // handleDelete();

  return (
    <>
      {/* <div>{() => handleDelete()}</div> */}
    </>
  );
};

export default DeleteBook;
