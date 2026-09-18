function StudentCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
      )
    };
    export default StudentCard;