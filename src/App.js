import Item from "./component/item";
import style from "./app.module.css";
import Header from "./component/header";
import { useSelector } from "react-redux";
import Style from "./app.module.css";
function App() {
  const data = [
    {
      id: 1,
      img: "img/kafsh1.jfif",
      name: "shoe 1",
      description: "this is the best you can buy 1",
      number: 1,
      price: 150,
    },
    {
      id: 2,
      img: "img/kafsh2.jfif",
      name: "shoe 2",
      description: "this is the best you can buy 2",
      number: 1,
      price: 80,
    },
    {
      id: 3,
      img: "img/kafsh3.jfif",
      name: "shoe 3",
      description: "this is the best you can buy 3",
      number: 1,
      price: 100,
    },
    {
      id: 4,
      img: "img/kafsh5.jfif",
      name: "shoe 4",
      description: "this is the best you can buy 4",
      number: 1,
      price: 280,
    },
    {
      id: 5,
      img: "img/kafsh6.jfif",
      name: "shoe 5",
      description: "this is the best you can buy 5",
      number: 1,
      price: 60,
    },
    {
      id: 6,
      img: "img/kafsh7.jfif",
      name: "shoe 6",
      description: "this is the best you can buy 6",
      number: 1,
      price: 200,
    },
    {
      id: 7,
      img: "img/kafsh8.jfif",
      name: "shoe 7",
      description: "this is the best you can buy 7",
      number: 1,
      price: 110,
    },
    {
      id: 8,
      img: "img/kafsh9.jfif",
      name: "shoe 8",
      description: "this is the best you can buy 8",
      number: 1,
      price: 130,
    },
    {
      id: 9,
      img: "img/kafsh10.jfif",
      name: "shoe 9",
      description: "this is the best you can buy 9",
      number: 1,
      price: 50,
    },
    {
      id: 10,
      img: "img/kafsh11.jfif",
      name: "shoe 10",
      description: "this is the best you can buy 10",
      number: 1,
      price: 95,
    },
    {
      id: 11,
      img: "img/kafsh12.jfif",
      name: "shoe 11",
      description: "this is the best you can buy 11",
      number: 1,
      price: 175,
    },
    {
      id: 12,
      img: "img/kafsh13.jfif",
      name: "shoe 12",
      description: "this is the best you can buy 12",
      number: 1,
      price: 190,
    },
  ];

  const Products = useSelector((state) => state.products.ProductsItem);

  // localStorage.setItem("Products", JSON.stringify(Products));
  // console.log(JSON.parse(localStorage.getItem("Products")));

  let items_shop = [];
  for (let i = 0; i < Products.length; i++) {
    items_shop.push(Products[i].id);
  }

  return (
    <div className={style.App}>
      <Header />
      <div className={style.containerItem}>
        {data.map((item) => (
          <div key={item.id}>
            <Item
              descraption_item={item.description}
              img_item={item.img}
              name_item={item.name}
              id_item={item.id}
              number_item={item.number}
              price_item={item.price}
              added_item={items_shop.includes(item.id) ? "added !!!" : ""}
              style_item={
                items_shop.includes(item.id)
                  ? { background: "rgb(160, 219, 160)" }
                  : { background: "" }
              }
              class_item={items_shop.includes(item.id) ? Style.animation : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
