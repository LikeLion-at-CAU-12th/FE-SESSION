const url = "./data/data.json";
const container = document.getElementById("container");

const fetchData = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.frontend);
      const datas = response.frontend;

      datas.map((data) => {
        const list = document.createElement("div");
        list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다~`;

        container.appendChild(list);
        console.log(data);
      });
    })
    .catch((error) => {
      console.log(error);
      container.innerText = "에러 발생~~";
    });
};
