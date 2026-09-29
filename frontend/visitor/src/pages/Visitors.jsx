import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Visitors() {
  const [visitors, setVisitors] = useState([]);

  const getVisitors = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/visitors");
      const data = await response.json();

      setVisitors(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVisitors();
  }, []);

  const deleteVisitor = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this visitor?"
    );

    if (!confirmDelete) {
      return;
    }

    await fetch(`http://localhost:5000/api/visitors/${id}`, {
      method: "DELETE",
    });

    getVisitors();
  };

  return (
    <div className="container">
      <div className="visitor-section">

        <h2>Visitor Records</h2>

        {visitors.length === 0 ? (
          <p className="empty">No visitors found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Company</th>
                <th>Person to Meet</th>
                <th>Purpose</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {visitors.map((visitor) => (
                <tr key={visitor._id}>

                  <td>{visitor.name}</td>

                  <td>{visitor.mobile}</td>

                  <td>{visitor.email}</td>

                  <td>{visitor.company}</td>

                  <td>{visitor.personToMeet}</td>

                  <td>{visitor.purpose}</td>

                  <td>
                    {new Date(visitor.createdAt).toLocaleString()}
                  </td>

                  <td>{visitor.status}</td>

                  <td>
                    <Link to={`/edit/${visitor._id}`}>
                      <button>Edit</button>
                    </Link>

                    <button
                      className="delete"
                      onClick={() => deleteVisitor(visitor._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
}

export default Visitors;