import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditVisitor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    personToMeet: "",
    purpose: "",
    status: "Checked In",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/visitors/${id}`)
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateVisitor = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/visitors/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    alert("Visitor updated successfully");

    navigate("/visitors");
  };

  return (
    <div className="container">
      <div className="form-section">

        <h2>Edit Visitor</h2>

        <form onSubmit={updateVisitor}>

          <input
            name="name"
            placeholder="Visitor Name"
            value={form.name || ""}
            onChange={handleChange}
            required
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile || ""}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email || ""}
            onChange={handleChange}
            required
          />

          <input
            name="company"
            placeholder="Company / College Name"
            value={form.company || ""}
            onChange={handleChange}
            required
          />

          <input
            name="personToMeet"
            placeholder="Person to Meet"
            value={form.personToMeet || ""}
            onChange={handleChange}
            required
          />

          <input
            name="purpose"
            placeholder="Purpose of Visit"
            value={form.purpose || ""}
            onChange={handleChange}
            required
          />

          <select
            name="status"
            value={form.status || "Checked In"}
            onChange={handleChange}
          >
            <option value="Checked In">
              Checked In
            </option>

            <option value="Checked Out">
              Checked Out
            </option>
          </select>

          <button type="submit">
            Update Visitor
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditVisitor;