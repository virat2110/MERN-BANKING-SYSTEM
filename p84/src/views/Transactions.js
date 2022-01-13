import React, { useEffect, useState } from "react";
import axios from "axios";
import MaterialTable from 'material-table';


export default function Transactions() {

const [transactions, setTransactions] = useState([]);
const columns =[
{title:"TRANSFERRED FROM", field: "userOne",},


{title:"TRANSFERRED TO", field: "userTwo",},
  {title:"TRANSFERRED AMOUNT", field: "amount" },
  {title:"TRANSFER DATE", field: "timestamp" },
] 



  useEffect(async () => {
    await axios.get("/gettransactions").then((res) => {
      setTransactions(res.data);
    });
  }, []);
  return (
    <div>
      <MaterialTable 
      title="TRANSCATION HISTORY"
      data={transactions}
      columns={columns}
      options={{
        exportButton: true,
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        rowStyle: {
          backgroundColor: '#adb5bd',
        }
      }}
      
      
      
      />
    </div>
      
  );
}
