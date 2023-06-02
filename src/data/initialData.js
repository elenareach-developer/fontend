export  const initialData = {
   user:{
    id:5,
    email:"elena@reach.com",
    password:"pass",
    first_name:"elena",
    last_name: "reach",
   },
   exercise:[
   { user_id: 5, category: "Aerobics",timing: "34min",heartrate: "128"}, 
   { user_id: 5, category: "Aerobics",timing: "399min",heartrate: "156"},
   { user_id: 5, category: "Aerobics",timing: "399min",heartrate: "156"}],
   nutrition:[
    { user_id: 5, category: "Food",type: "Apple",call: "128"}, 
    { user_id: 5, category: "Drinc",type: "Coca-cola",call: "156"},
    { user_id: 5, category: "Food",type: "Meat",call: "417"}],
    sleep:[
        { user_id: 5, category: "Day",duration: "3h",feel:"good"}, 
        { user_id: 5, category: "Night",duration: "5h",feel: "tierd"},
        { user_id: 5, category: "Food",duration: "8h",call: "good"}],

}