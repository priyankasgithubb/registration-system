import { useEffect, useState } from "react";

function SearchVisitor() {
  const [visitors, setVisitors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/visitors")
      .then((response) => response.json())
      .then((data) => setVisitors(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.name.toLowerCase().includes(search.toLowerCase()) ||
      visitor.mobile.includes(search)
  );

  return (
    <div className="container">
      <div className="visitor-section">

        <h2>Search Visitor</h2>

        <input
          className="search"
          placeholder="Search by name or mobile number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search === "" ? (
          <p className="empty">
            Enter a name or mobile number.
          </p>
        ) : filteredVisitors.length === 0 ? (
          <p className="empty">
            No visitors found.
          </p>
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
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredVisitors.map((visitor) => (
                <tr key={visitor._id}>
                  <td>{visitor.name}</td>
                  <td>{visitor.mobile}</td>
                  <td>{visitor.email}</td>
                  <td>{visitor.company}</td>
                  <td>{visitor.personToMeet}</td>
                  <td>{visitor.purpose}</td>
                  <td>{visitor.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
}

export default SearchVisitor;