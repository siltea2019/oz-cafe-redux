import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import { useSelector } from "react-redux";

function Menu() {
  //useSelector로 상태 꺼내서 사용하기
  const menu = useSelector((state) => state.menuReducer);

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        {" "}
        메뉴 정보가 없어요!
      </div>
    );

  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} />
      ) : null}
    </>
  );
}

export default Menu;
