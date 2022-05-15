import React from "react";
import { useLocation } from "react-router-dom";

export const DisplayBook = () => {
  const location = useLocation();
  const book = location.state.book;

  return (
    <>
      <div
        className="table-container d-flex align-items-center justify-content-center"
        style={{ height: "85vh" }}
      >
        <div className="table-outer">
          <table className="m-5">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{book.book_name}</td>
              </tr>
              <tr>
                <td>Author</td>
                <td>{book.author}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{book.price}</td>
              </tr>
              <tr>
                <td>Quantities</td>
                <td>{book.quantities}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
