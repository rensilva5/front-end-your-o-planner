const Create = () => {
    return (
        <div className="create">
            <h1>Add review</h1>
            <form>
                <label>Add review</label>
                <input type="text" required/>
                <label>Form Body</label>
                <textarea required>
                </textarea>
                <label>Name person</label>
                <select>
                    <option value="see">Name</option>
                    <option value="see Again">Another Name</option>
                </select>
                <button>Add review</button>
            </form>
        </div>
    );
}
 
export default Create