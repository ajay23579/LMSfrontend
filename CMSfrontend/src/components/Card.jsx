import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg mt-20"
        key={book._id}
      >
        <img
          className=" h-[50px] w-[50px]"
          src={book.imageUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
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
        <div className="px-6 pt-4 pb-2">
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
        <Link to={`/book/${book._id}`}>See More</Link>
      </div>
    </>
  );
};

export default Card;
