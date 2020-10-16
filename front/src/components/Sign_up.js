import React, { Component } from 'react';
import DateTimePicker from "react-datetime-picker"
import axios from "axios";

const API_URL_1=process.env.REACT_APP_API_URL_1;

class SIGNUP extends Component{
   constructor(){
      
      super()

      this.state={
         input_name:"",
         input_cellphone:0,
         input_birth:new Date(),
         input_user:"",
         input_password:"",
      };
      
   }

   CallAPI_Register(){
      axios.post(API_URL_1,({
         name:this.state.input_name,
         cellphone:this.state.input_cellphone,
         birth:this.state.input_birth.getTime(),
         user:this.state.input_user,
         password:this.state.input_password
      }))

      .then((res) => {
         console.log(res);
         if ((res.data)===(1)){
            alert("SUCCES");
         }else{
            alert("FAILED");
         }
      })
   }

   componentDidMount(){
      console.log("All components mounted")
   }

   render(){
      return(
         <div>
            <div>
               <h1>Registration  </h1>
            </div>

            <form>
               <label
                  style={{
                     position:"absolute",
                     left:"0%",
                     top:"20%"
                  }}>
                  Name:
               </label>
                  <input 
                     style={{
                        position:"absolute",
                        left:"5%",
                        top:"25%"
                     }}
                     type="text" 
                     name="Name"
                     value={this.state.input_name}
                     onChange={
                        (event)=>{  
                           this.setState({
                              input_name:event.target.value
                           });
                        }
                     }
                  />
               <label
                  style={{
                     position:"absolute",
                     left:"0%",
                     top:"30%"
                  }}>
                  Cellphone:
               </label>
                  <input
                     style={{
                        position:"absolute",
                        left:"5%",
                        top:"35%"
                           }}
                     type="number"
                     name="Cellphone"
                     value={this.state.input_cellphone}
                     onChange={
                        (event)=>{
                           this.setState({
                              input_cellphone:event.target.value
                           })
                        }
                     }
                  />
               <label
                  style={{
                     position:"absolute",
                     left:"0%",
                     top:"40%"
                  }}>
                  BirthDay
               </label>
               <div style={{
                     position:"absolute",
                     left:"5%",
                     top:"45%"
                  }}
               >
               <DateTimePicker
                  returnValue={"start"}
                  value={this.state.input_birth}
                  onChange={
                     (value)=>{
                        this.setState({
                           input_birth: value
                        });
                     }
                  }
               />
               </div>
               <label
                  style={{
                     position:"absolute",
                     left:"0%",
                     top:"50%"
                  }}>
                  User:
               </label>
                  <input 
                     style={{
                        position:"absolute",
                        left:"5%",
                        top:"55%"
                     }}
                     type="text" 
                     name="Name"
                     value={this.state.input_user}
                     onChange={
                        (event)=>{  
                           this.setState({
                              input_user:event.target.value
                           });
                        }
                     }
                  />
               <label
                  style={{
                     position:"absolute",
                     left:"0%",
                     top:"60%"
                  }}>
                  Password:
               </label>
                  <input 
                     style={{
                        position:"absolute",
                        left:"5%",
                        top:"65%"
                     }}
                     type="text" 
                     name="Name"
                     value={this.state.input_password}
                     onChange={
                        (event)=>{  
                           this.setState({
                              input_password:event.target.value
                           });
                        }
                     }
                  />
            </form>
            <button
               onClick={
                  ()=>{
                     this.CallAPI_Register();
                  }
               }
               style={{
                  position:"absolute",
                  left:"5%",
                  top:"75%"
               }}
            >
               Register
            </button>
         </div>
      );
   }
}
 
export default SIGNUP;