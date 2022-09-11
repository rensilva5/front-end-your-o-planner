import { Card } from "@mantine/core";
import { useEffect, useState } from "react";

const AddReviewForm = () => {  //{countryId}
    const [name, setName] = useState("")
    const [review, setReview] = useState("")
    const [addForm, setAddForm] = useState({})  //

    function addReview(e) {
        e.preventDefault()
        const reviews = {review}
        // useEffect(() => {
            // const result =
            fetch(`https://deploy-api-your-o-planner.web.app/countries`, {mode: "no-cors"}, {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(addForm)
        }).then(() => {
            console.log('New review added')
        })
        .catch(err => console.error(err));




            // .then((test) => console.log(JSON.stringify(test)))
        // }, [])
    }

    // function handleSubmitReview(e) {
    //     e.preventDefault()
    //     addReview()
    //     const reviews = {review}
    //     console.log("reviews", reviews)
    // }


    return (
        <Card>
        <div className="form">
            <form onSubmit={addReview}>
                <label>Name</label>
                <br/>
                <input name="person" onChange={(e) => {setAddForm({...addForm, person: e.target.value})}} type="text" required/>
                <br/>
                <label>Add your review</label>
                <br/>
                <textarea name="review" onChange={(e) => {setAddForm({...addForm, review: e.target.value})}} required>
                </textarea>
                <br/>
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
}
 
export default AddReviewForm