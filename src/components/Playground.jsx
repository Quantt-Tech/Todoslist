import { useState } from "react";
import StudentCard from "./StudentCard";
function Playground(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const students =[
        {
            id: 1,
            name: "Abhinav",
            Age: 20,
        },
        {
            id: 2,
            name: "Mansi",
            Age: 22
        },      
        {
            id: 3,
            name: "John",
            Age: 25
        },
    ]
    return (
  <div>
    <h1>React Playground</h1>

    <h2>Counter: {count}</h2>

    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setCount(0)}>Reset</button>

    {students.length === 0 ? (
  <p>No students found</p>
) : (
  students.map((student) => (
    <StudentCard
      key={student.id}
      name={student.name}
      age={student.age}
    />
  ))
)}.
  </div>
);
}
 
export default Playground;