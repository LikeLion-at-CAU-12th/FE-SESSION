import React, { useState } from "react";
import Introduction from "./Introduction";
import Modal from "./Modal";

const App = () => {
  const name = "이재욱";
  const hobby = "기타 치기";
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>나의 첫 리액트 세션</div>
      <br />
      <Introduction name={name} hobby={hobby} favoriteSports="축구" />
      <br />
      <div>제 소개를 더 보고싶다면 버튼을 눌러주세요</div>
      <button onClick={() => setModal(true)}>더보기</button>
      {modal && (
        <Modal
          name={name}
          hobby={hobby}
          favoriteSports="축구"
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default App;
