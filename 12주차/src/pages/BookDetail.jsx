import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BookDetail = () => {
  const params = useParams();
  const id = params.id;
  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState(0);

  const updateLikes = () => {
    setLikes(likes + 1);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("/databases/books.json");
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    setLikes(0);
  }, [id]);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>찾는 책이 없습니다F</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <Button onClick={updateLikes}>
        <Icon>💙</Icon> {likes}
      </Button>
    </div>
  );
};

export default BookDetail;

const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;
