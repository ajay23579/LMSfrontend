import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      setBook(response.data.data);
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
      </div>
    </>
  );
};

export default SingleBook;
