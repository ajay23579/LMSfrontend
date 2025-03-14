import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: null,
    authorName: "",
    isbnNumber: "",
    publishedAt: "",
    publication: "",
    imageUrl: null,
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("image", image);

    const response = await axios.patch(
      `http://localhost:3000/book/${id}`,
      formData
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went Worng");
    }
  };

  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      setData(response.data.data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 my-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Edit A Book
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="bookName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Title of book
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="bookName"
                  id="bookName"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handleChange}
                  value={data.bookName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="authorName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Author of the book
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="authorName"
                  id="authorName"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handleChange}
                  value={data.authorName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="isbnNumber"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add ISBN Number of book
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="isbnNumber"
                  id="isbnNumber"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handleChange}
                  value={data.isbnNumber}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="publishedAt"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Published Date of book
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="publishedAt"
                  id="publishedAt"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handleChange}
                  value={data.publishedAt}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bookPrice"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Price of book
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="bookPrice"
                  id="bookPrice"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handleChange}
                  value={data.bookPrice}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="publication"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Publication of book
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="publication"
                  id="publication"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={handleChange}
                  value={data.publication}
                />
              </div>
            </div>

            <div className="mt-4">
              <img
                src={data.imageUrl}
                alt="Current Book Cover"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="bookImage"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Image of book
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="image"
                  id="bookImage"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditBook;
