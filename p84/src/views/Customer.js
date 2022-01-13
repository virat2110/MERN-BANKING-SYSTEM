import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import c2 from './c2.png';
import { Link } from "react-router-dom";
import {
  TextField,
  FormControl,
  RadioGroup as MuiRadioGroup,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  Button,
  Select,
} from "@material-ui/core";
import "./Customer.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import { multiStepContext } from "../Context/StepContext";
import { Alert } from "@material-ui/lab";

export default function Customer() {
  const { id } = useParams();
  const [id2, setId2] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);
  // const { transferData ,setTransferData, sendMoney } = useContext(multiStepContext);
  const history = useHistory();
  useEffect(async () => {
    getData(id);
    await axios.get("/customers").then((res) => {
      setUser(res.data);
    });
  }, [id]);

  console.log(data);

  const getData = async (id) => {
    console.log(id);
    const response = await axios.get(`/customers/${id}`);
    if (response) {
      setData(response.data);
    }
  };

  async function sendMoney() {
    console.log(transferData);
   
    await axios.put("/customer/money", transferData);
    await axios.post("/transactions", transferData);
    history.push('/customers');

    
  }

  const count = Number(amount);


  const transferData = {
    count,
    id,
    id2,
  };

  return (
    <div>
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img
              src={c2}
            
              style={{ width: "70%" }}
            
            />
          </div>
          <div className="box">
            <div className="row">
              <h4>
                {data.name}
                <h6>
                  ₹{data.amount}
                </h6>
              </h4>

              <span>
                {data.accountType}
                <i></i> {data.gender}
              </span>
            </div>
            <div className="row">
              <FormControl>
                <InputLabel id="countrySelectLabel">Transfer to</InputLabel>
                <Select
                  labelId="countrySelectLabel"
                  id="countrySelect"
                  onChange={(e) => setId2(e.target.value)}
                  value={id2}
                >
                  {user.map((code, index) =>
                    data.name !== code.name ? (
                      <MenuItem key={index} value={code._id}>
                       NAME:- {code.name}   A/C BALANCE:- {code.amount}
                      </MenuItem>
                    ) : null
                  )}
                </Select>
              </FormControl>
              <TextField
                label="Transfer Amount"
                id="standard-start-adornment"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                error={amount > data.amount}
                helperText={
                  (console.log(amount),
                  console.log(data.amount),
                  amount > data.amount
                    ? "The amount is greater than your balance"
                    : " ")
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              {amount > data.amount ? (
                <Button variant="contained" disabled>
                  Send
                </Button>
              ) : (
                <Button variant="contained" color="primary" 
                
                onClick={sendMoney}
                component={Link} to="/"
                
                >
                  Send
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
