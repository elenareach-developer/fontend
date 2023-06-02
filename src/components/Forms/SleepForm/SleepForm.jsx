import * as React from "react"
import "./SleepForm.css"
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const getDate=(time=new Date())=>{

  const tomorrow = new Date(time)
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow;
}

const compareDate=(start_time,end_time)=>{
  let stt = new Date(start_time);
    stt = stt.getTime();

    let endt= new Date(end_time);
    endt = endt.getTime();
    return stt< endt
}

export default function SleepForm(props) {
  const [start_time, setStartTime] = React.useState(new Date());
  const [end_time, setEndTime] = React.useState(getDate());
  const [date_err, setDateErr] = React.useState("");
  const [state, setState] = React.useState({
    category: "",
    start_time:"",
    end_time:"",
    heartrate: "",
  });
React.useEffect(()=>{
  const compare = compareDate(start_time,end_time)
    if(compare){
      setState((prevProps) => ({
        ...prevProps,
        'start_time': start_time,
        'end_time':end_time,
      }));
      setDateErr("");
    }else{
      setDateErr("StartTime should be less then EndTime")
    }
  
},[start_time,end_time])
  
  const handleInputChange = (event) => {
   const { name, value } = event.target;
    setState((prevProps) => ({
       ...prevProps,
        [name]: value
     }));
     console.log(state );
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="SleepForm blue">
         <div className="box">
        <div className="form-control">
          <label>Category</label>
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
          <div class="red">{date_err}</div>
          <label>Start time</label>
          <DateTimePicker onChange={setStartTime} value={start_time} />
        </div>
        <div className="form-control">
          <label>End time</label>
          <DateTimePicker onChange={setEndTime} value={end_time} />
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
          <button onClick={handleSubmit}>Add Sleep</button>
        </div>
        </div>
    </div>
  );
}