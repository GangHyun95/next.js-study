import CartItem from "./CartItem";

export default function Cart() {
  let basket = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {basket.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}
