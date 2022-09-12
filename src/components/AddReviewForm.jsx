import { Card } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";

const AddReviewForm = () => {
  const { destination, setDestination } = useContext(DestinationsContext);
  console.log(destination.reviews);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [addForm, setAddForm] = useState({});

  function addReview(e) {
    e.preventDefault();
    const reviews = [...destination.reviews, addForm];
    const destinationId = destination.id;
    // console.log(reviews)
    // useEffect(() => {
    // const result =
    // fetch(`https://deploy-api-your-o-planner.web.app/destination/${destinationId}`, {
    fetch(`http://localhost:5556/destination/${destinationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then(() => {
        console.log("New review added");
      })
      .catch((err) => console.error(err));
  }

  console.log({ addForm });

  return (
    <Card>
      <div className="form">
        <form onSubmit={addReview}>
          {/* <label>Name</label>
          <br />
          <input
            name="person"
            onChange={(e) => {
              setAddForm({ ...addForm, person: e.target.value });
            }}
            type="text"
            required
          /> */}
          <br />
          <label>Add Review</label>
          <br />
          <textarea
            name="review"
            onChange={(e) => {
              setAddForm(e.target.value);
            }}
            required
          ></textarea>
          <br />
          {/* <label>Name person</label> */}
          {/* <select>
                    <option value="see">Name</option>
                <option value="see Again">Another Name</option> */}
          {/* </select> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </Card>
  );
};

export default AddReviewForm;
