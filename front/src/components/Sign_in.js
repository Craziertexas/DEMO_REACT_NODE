import React, { Component } from 'react';
import axios from "axios"; 

const API_URL_2=process.env.REACT_APP_API_URL_2;

console.log(API_URL_2);

class SIGNIN extends Component{
   constructor(){
      super();
      this.state={
         input_user:"",
         input_password:"",
         name:"",
         birthday:"",
         cellphone:"",
         visibility:"hidden"
      };
   }

   componentDidMount(){
      console.log("All components Mounted");
   }

   CallAPI_SignIn(){
      axios.post(API_URL_2,({
         user:this.state.input_user,
         password:this.state.input_password
      }))
      
      .then((res)=>{
         try{
         this.setState({
            name:res.data[0].name,
            birthday:new Date(res.data[0].birthday),
            cellphone:(res.data[0].cellphone).toString(),
            visibility:"visible"
         });
         }catch(err){
            console.error();
         }
      })
   }

   render(){return (
      <div>
         <div>
            <h1>Sign In</h1>
         </div>
         <form>
         <label
            style={{
               position:"absolute",
               left:"0%",
               top:"20%"
            }}>
            User:
         </label>
            <input 
               style={{
                  position:"absolute",
                  left:"5%",
                  top:"25%"
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
                  top:"30%"
               }}>
               Password:
            </label>
               <input 
                  style={{
                     position:"absolute",
                     left:"5%",
                     top:"35%"
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
                     this.CallAPI_SignIn();
                  }
               }
               style={{
                  position:"absolute",
                  left:"5%",
                  top:"40%"
               }}
            >
               Enter
         </button>
         <body style={{position:"absolute", top:"20%", left:"40%", visibility:this.state.visibility}}>{"Name: " + this.state.name}</body>
         <body style={{position:"absolute", top:"30%", left:"40%", visibility:this.state.visibility}}>{"CellPhone: " + this.state.cellphone}</body>
         <body style={{position:"absolute", top:"40%", left:"40%", visibility:this.state.visibility}}>{"BirthDay: " + this.state.birthday}</body>
      </div>
    );
   }
}
 
export default SIGNIN;