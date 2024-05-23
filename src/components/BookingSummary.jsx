import "../assets/css/BookingSummary.css";

export default function BookingSummary({ info }) {
  return (
    <div className="orderDetails">
      <h3>Order Details</h3>
      <ul>
        <li>{info}</li>
        <li>Car Model :</li>
        <li>Pickup Date :</li>
        <li>Return Date :</li>
        <li>Location :</li>
        <li>Price :</li>
        <li>Tax :</li>
        <li>Total Payable :</li>
      </ul>
    </div>
  );
}
