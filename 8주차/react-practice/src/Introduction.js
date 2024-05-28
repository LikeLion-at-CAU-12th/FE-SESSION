import React from "react";

const Introduction = ({ name, hobby, favoriteSports }) => {
  return (
    <div>
      <div>저의 이름은 {name}입니다</div>
      <div>저의 취미는 {hobby}입니다</div>
      <div>제가 가장 즐겨보는 스포츠는 {favoriteSports}입니다</div>
    </div>
  );
};

export default Introduction;
