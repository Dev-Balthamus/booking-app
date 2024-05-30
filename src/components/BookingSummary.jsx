import "../assets/css/BookingSummary.css";

export default function BookingSummary() {
  const info = {
    car: "Yellow Audi",
    model: "Yellow Audi R70",
    pickup: "24-03-2024, 17:00",
    return: "26-03-2024, 10:30",
    location: "125 South Canada",
    price: "$260/Day",
    tax: "$28/Day",
    total: "$288/Day",
  };

  return (
    <div className="orderDetails">
      <div className="outer">
        <h3>Order Details</h3>
        <div className="outerBox">
          <ul>
            <li>
              <span className="info-label">Car:</span>
              <span className="info-value">{info.car}</span>
            </li>
            <li>
              <span className="info-label">Car Model:</span>
              <span className="info-value">{info.model}</span>
            </li>
            <li>
              <span className="info-label">Pickup Date:</span>
              <span className="info-value">{info.pickup}</span>
            </li>
            <li>
              <span className="info-label">Return Date:</span>
              <span className="info-value">{info.return}</span>
            </li>
            <li>
              <span className="info-label">Location:</span>
              <span className="info-value">{info.location}</span>
            </li>
            <li>
              <span className="info-label">Price:</span>
              <span className="info-value">{info.price}</span>
            </li>
            <li>
              <span className="info-label">Tax:</span>
              <span className="info-value">{info.tax}</span>
            </li>
            <li>
              <span className="info-label">Total Payable:</span>
              <span className="info-value">{info.total}</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="horizontal-padding button-primary">
        Rent Car Now
      </button>
    </div>
  );
}
