import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import visitorImage from "../assets/visitor.png";

function Dashboard() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/visitors")
      .then((response) => response.json())
      .then((data) => setVisitors(data))
      .catch((error) => console.log(error));
  }, []);

  const today = new Date().toDateString();

  const todayVisitors = visitors.filter(
    (visitor) => new Date(visitor.createdAt).toDateString() === today
  );

  return (
    <div className="container">
      <div className="dashboard-layout">

        <div className="dashboard-left">
          <h1>Visitor Management System</h1>
          <p className="subtitle">Reception Desk</p>

          <div className="dashboard">
            <div className="card">
              <h3>Total Visitors</h3>
              <h2>{visitors.length}</h2>
            </div>

            <div className="card">
              <h3>Today's Visitors</h3>
              <h2>{todayVisitors.length}</h2>
            </div>
          </div>

          <div className="dashboard-buttons">
            <Link to="/add">
              <button>Add New Visitor</button>
            </Link>

            <Link to="/visitors">
              <button>View All Visitors</button>
            </Link>
          </div>
        </div>

        <div className="dashboard-image">
          <img src={visitorImage} alt="Visitor Management" />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;