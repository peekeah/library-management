import {
  Backdrop,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Dashboard() {
  const URL = "https://61cbf244198df60017aebdbf.mockapi.io/library-management";
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => response)
      .then(({ data }) => setData(data));
  }, []);

  const handleEdit = (book) => {
    navigate(`/edit-book/${book.id}`, {
      state: { bookData: book },
    });
  };

  const handleDelete = (book) => {
    axios.delete(`${URL}/${book.id}`);
    alert("deleted successfully");
    setCounter(counter + 1);
  };

  return (
    <>
      {data ? (
        <div className="container d-flex text-center justify-content-center flex-column mt-3">
          <h1>Library Management</h1>

          <div className="d-flex justify-content-center mt-5">
            <Button
              variant="contained"
              style={{ backgroundColor: "Black" }}
              onClick={() => navigate("/add-book")}
            >
              Add Book
            </Button>
          </div>
          <div className="mt-5">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Sr No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">quantitiy</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((book, index) => (
                    <TableRow
                      key={book.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell>{book.book_name}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell align="center">{book.price}</TableCell>
                      <TableCell align="center">{book.quantities}</TableCell>
                      <TableCell align="center">
                        <EditIcon onClick={() => handleEdit(book)} />
                        <DeleteIcon onClick={() => handleDelete(book)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default Dashboard;
