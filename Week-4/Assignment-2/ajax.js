function ajax(src, callback) {
  // your code here

  const getData = new XMLHttpRequest();
  getData.onreadystatechange = () => {
    if (getData.readyState === 4 && getData.status === 200) {
      // console.log(getData.response);
      // console.log(getData.responseText);
      // console.log(typeof getData.response);
      // console.log(typeof getData.responseText);
      // console.log(JSON.parse(getData.responseText));

      const response = JSON.parse(getData.responseText);
      callback(response);
    }
  };
  getData.open("GET", src);
  getData.send();
}

function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.

  for (i = 0; i < data.length; i++) {
    const dataElement = data[i];
    const main = document.querySelector("main");
    const list = document.createElement("ul");
    const listContent = `
        <caption>Product Name: ${dataElement.name}</caption>
        <li>Price: ${dataElement.price}</li>
        <li>Feature: ${dataElement.description}</li>
        <hr>
    `;
    list.innerHTML = listContent;
    main.append(list);
  }
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
);
// you should get product information in JSON format
// and render data in the page
