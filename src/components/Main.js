import { useEffect } from "react";


const Main = () => {

    useEffect(() => {
        fetch("https://deploy-api-your-o-planner.web.app/main")
            .then((result) => result.json())
            .then((tasks) => setTasklist(tasks))
            .catch(console.error)
    }, [setTasklist])
    if (!setTasklist) {
        return <h2>No tasks done yet</h2>
    }
    return (
        <ul>
            {tasklist.map((task) => (
                <li key={task.id}>{task.task}
                </li>
            ))}
        </ul>
        // <h3>Getting my Main working also</h3>
    )
}
 
export default Main;

// https://deploy-api-your-o-planner.web.app/test