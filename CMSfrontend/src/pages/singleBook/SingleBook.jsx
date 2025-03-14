import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const navigate = useNavigate();
  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };

  const deleteBook = async () => {
    const response = await axios.delete(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      navigate("/");
    } else {
      console.log("Something went Wrong");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <NavBar />
      <div className="max-w-screen rounded overflow-hidden shadow-lg">
        <img
          className=" w-200"
          src={book.imageUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-9 py-9">
          <div className="font-bold text-xl mb-2"> {book.bookName}</div>
          <p className="text-gray-700 text-base">
            ISBN Number: {book.isbnNumber}
          </p>
          <p className="text-gray-700 text-base">Price: {book.bookPrice}</p>
          <p className="text-gray-700 text-base">
            Published At: {book.publishedAt}
          </p>
          <p className="text-gray-700 text-base">
            Publication : {book.publication}
          </p>
          <p className="text-gray-700 text-base">
            Author Name : {book.authorName}
          </p>
        </div>
        <div className="px-9 pt-9 pb-9">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
        <div className="flex flex-wrap space-x-5 ml-3">
          <p>
            <button
              onClick={deleteBook}
              className="bg-red-700 border-2 border-red-400 rounded-xl px-3 py-1 text-white"
            >
              Delete
            </button>
          </p>
          <p>
            <Link to={`/editBook/${book._id}`}>
              <button className="bg-lime-700 border-2 border-lime-400 rounded-xl px-3 py-1 text-white">
                Edit
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
