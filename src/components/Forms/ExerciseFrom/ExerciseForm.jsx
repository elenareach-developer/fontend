import * as React from "react"
import Select from 'react-select';
import "./ExerciseForm.css"

const   Category= [ { name:"category",label: "Aerobics", value: 355 },
{ name:"category", label: "Pilates", value: 54 },
{ name:"category",label: "Aqua Aerobics", value: 43 },]

export default function ExerciseForm(props) {
  const [state, setState] = React.useState({
    category: "",
    timing: "",
    heartrate: "",
  });

  const handleInputChange = (event) => {
   const { name, value } = event.target;
    setState((prevProps) => ({
       ...prevProps,
        [name]: value
     }));
     console.log(state);
  };
  const handleSelectChange = (event) => {
     const { name, value } = event;
      setState((prevProps) => ({
         ...prevProps,
         [name]: value
       }));
       console.log(state);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="ExerciseForm green">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Category</label>
          <Select options={Category} name="category" onChange={(e)=>handleSelectChange(e)} />
        </div>
        <div className="form-control">
          <label>Timing</label>
          <input
            type="text"
            name="timing"
            onKeyUp={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Heart rating</label>
          <input
            type="text"
            name="heartrate"
            onKeyUp={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Add plane</button>
        </div>
      </form>
    </div>
  );
}