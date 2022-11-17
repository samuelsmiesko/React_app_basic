import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../my-style.module.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hocvn5f', 'template_7c1nulg', form.current, 'HCLR6C8EwQiLrAqt5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className={styles.Form} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label >Message</label>
      <textarea className={styles.Massage} name="message" />
      <input className={styles.ButtomSubmit} type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;




// import { useState } from "react";
// import styles from '../my-style.module.css'

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form className={styles.Form} onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your surname:
//       <input 
//         type="text" 
//         name="Surname" 
//         value={inputs.surname || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your email:
//         <input 
//           type="email" 
//           name="email" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input className={styles.ButtomSubmit} type="submit" ></input>
//     </form>
//   )
// }



// import styles from '../my-style.module.css'
// import React from 'react';

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
    
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {    this.setState({value: event.target.value});  }
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     console.log(this.state.value,"this.state.value")
//     event.preventDefault();
//   }

//   render() {
//     return (
//         <form  className={styles.Form} onSubmit={this.handleSubmit}>
//           <label>Name:</label>
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//           <label>Surname:</label>
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//           <label>Email:</label>
//           <input type="email" value={this.state.value} onChange={this.handleChange} />
          
//           <input className={styles.ButtomSubmit} type="submit" value="Submit" />
          
//         </form>
     
//     );
//   }
// }



//   export default NameForm;