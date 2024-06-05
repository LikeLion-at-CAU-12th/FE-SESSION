import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("/databases/books.json");
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <MenuDom>
      <BookListDom>
        <Title onClick={goToHome}>🏠</Title>
        <Title>Book List 🦁</Title>
        <ul>
          {books.map((book, idx) => (
            <Link key={idx} to={`/books/${book.id}`}>
              <li>{book.title}</li>
            </Link>
          ))}
        </ul>
      </BookListDom>
      <BookDetailDom>
        <Outlet />
      </BookDetailDom>
    </MenuDom>
  );
};

export default BookList;

const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const BookDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;
