import React,{useState,useEffect} from 'react'
import './App.css';
import firebase from './FIrebase'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Datetime from './components/Datetime'
import Form from "./components/Form"
import Balance from './components/Balance'

function App() {
  
  const[d,setd]=useState(new Date());
  const[date,setdate]=useState("");
  const[month,setmonth]=useState("");
  const[year,setyear]=useState("");
  const[hours,sethours]=useState("");
  const[minutes,setminutes]=useState("");
  const[tz,settz]=useState("");
  const[userData,setuserData]=useState([]);
   useEffect(()=>{
     var timerID=setInterval(()=>tick(),1000);
     return function cleanup(){
       clearInterval(timerID);
     }
   })
   function tick(){
     setd(new Date());
     if(parseInt(d.getDate())<10){
       setdate("0"+d.getDate());
     }
     else{
       setdate(d.getDate());
     }
     setmonth(d.getMonth()+1);
     setyear(d.getFullYear());
     let h=d.getHours();
     if(parseInt(h)===0){
       settz("am");
       sethours("12")
     }
     else if(parseInt(h)>12){
         settz("pm");
         sethours(parseInt(h)-12);
     }
     else if(parseInt(h)===12){
       settz("pm");
       sethours("12");
     }
     else{
       settz("am");
       sethours(h);
     }
     let m=d.getMinutes();
     if(parseInt(m)<10){
       setminutes("0"+m);
     }
     else{
       setminutes(m);
     }

   }
   useEffect(()=>{
const firestore=firebase.database().ref('/UserInfo');
firestore.on('value',(response)=>{
  const data=response.val();
  let userInfo=[];
  for(let id in data){
    userInfo.push({
      id:id,
      date:data[id].date,
      month:data[id].month,
      year:data[id].year,
      amount:data[id].amount,
      remarks:data[id].remarks,
      ttype:data[id].type
    })
  }
  setuserData(userInfo);
})

   },[])

  const[bal,setbal]=useState(0);
  const[amount,setamount]=useState("");
  const[remarks,setremarks]=useState(""); 
  const[ttype,setttype]=useState("");
  const handleamount=(e)=>{
    setamount(e.target.value);
  }
  const handleremarks=(e)=>{
     setremarks(e.target.value);
  }
  const handlettype=(e)=>{
     setttype(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    let a=parseInt(amount);
    if(ttype==="debit"){
      setbal(bal+a);
    }
    else{
      setbal(bal-a);
    }
    const firestore=firebase.database().ref("/UserInfo");
    let data={
        amount:amount,
        remarks:remarks,
        type:ttype,
        date:date,
        month:month,
        year:year,
        hours:hours,
        minutes:minutes,
        tz:tz
     
      }
      firestore.push(data);
      setamount("");
      setremarks("");
      setttype("");

  }



  
  return (
    <div>
        <Header/> 
        <Datetime date={date} month={month} year={year} hours={hours} minutes={minutes} tz={tz}/>
        <Form bal={bal} remarks={remarks} amount={amount} handleamount={handleamount}
          handleSubmit={handleSubmit} handleremarks={handleremarks}  ttype={ttype} handlettype={handlettype} 
           />
           <Balance date={date} month={month} year={year} bal={bal}/>
           
           <div className="table-responsive tb">
             <table className="table table-hover">
               <caption>Transacrtions</caption>
             <thead>
                 <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Type</th>
                  </tr>
              </thead>
              <tbody>
              {
                userData.map((data,index)=>{
                  return(
                    <tr>
                      <td>{data.date}/{data.month}/{data.year}</td>
                      <td>{data.amount}</td>
                      <td>{data.remarks}</td>
                      <td>{data.ttype}</td>
                    </tr>
                  )
                })
              }

              </tbody>

             </table>

           </div>
    </div>
  );
}

export default App;
