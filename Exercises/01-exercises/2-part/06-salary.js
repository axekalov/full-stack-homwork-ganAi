let programmer = {
  name: "David",
  salary: 25500
};
const calculateRaise = (employee) => {
  if(employee.salary * 1.10 <= 6000){
    console.log(`new salary for: ${employee.name} this :${employee.salary*1.10}`);
    

  }else{employee.salary *1.05 , console.log(`The new salary for ${employee.name} is: ${employee.salary * 1.05}`);
}}
 
calculateRaise(programmer);