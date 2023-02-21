import React, { useState } from 'react'
import './registration.css'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { db } from './firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,


}));

function RegistrationForm() {
  
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [newName, setNewName] = useState("");
  const usersCollectionRef = collection(db, "Registered");

  const { firstName, lastName, email, password, confirmPassword } = state

  const auth = getAuth();
  // const db = getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      addDoc(collection(db, "New"), {
        uid: user.uid,
        firstName: state.firstName,
        lastName: state.lastName,
        password,
        authProvider: "local",
        email,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  // const registerWithEmailAndPassword = async ( email, password) => {
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = res.user;
  //     console.log("User ==> ", user);

  //     await addDoc(collection(db, "New"), {
  //       uid: user.uid,
  //       firstName: state.firstName,
  //       password,
  //       authProvider: "local",
  //       email,
  //     });

  //     console.log("Added");
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };

  const handleInputChange = (evt) => {
    setState((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value

    }))
  }
  // const registerWithEmailAndPassword = async (name, email, password) => {
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = res.user;
  //     console.log("User", user);
  //     await addDoc(collection(db, "registered_users_new"), {
  //       uid: user.uid,
  //       name,
  //       authProvider: "local",
  //       email,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };

  // const handleSubmit = async (evt) => {
  //   evt.preventDefault()
  //   console.log("registration values", state)
  //   navigate ('/login')
  //   try {
  //     const res = await axios.post('https://78c6-102-217-126-10.in.ngrok.io/register', state)
  //     console.log(res.data)
  //   } catch (e) {
  //     alert(e)
  //   }   
  // }
  
  const registerPartner = async () => {
 
    axios.post(`http://localhost:5000/register`, ({
      "firstname": firstName,
      "password": password,
      "email": email,
      "lastname": lastName,
    })
    ).then((response) => {
      console.log("respo",response.data)
      navigate('/login')
    }).error((error) => {
      console.log("error", error)
    })
  }

  return (

    <>
      {/* <div className='form'>
        <div className='form-body'>
          <div className='username'>
            <label className='form_lable' for='firstName'>First Name</label>
            <input
              className='form_input'
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className='lastname'>
            <label className='form_lable' for='lastName'>Last Name</label>
            <input
              className='form_input'
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className='email'>
            <label className='form_lable' for='email'>Email</label>
            <input
              className='form_input'
              type='email' name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className='password  form-group row'>
            <label className='form_lable' for='password'>Password</label>
            <input
              className='form_input'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className='confirm password form-group row'>
            <label className='form_lable' for='confirmpassword'>Confirm Password</label>
            <input
              className='form_input'
              type='password'
              name='confirmpassword'
              id='confirmpassword'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>

        </div>
        <div class="footer">
          <button type='Submit' class="btn btn-primary">Register</button>

        </div>
      </div> */}

      <div className='form'>
        <div className='form-body'>
        <h1 class="MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter ">Sign Up</h1>
          <Box component='form'
          // sx={{ flexGrow: 1, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          // noValidate
          // autoComplete="off"
          >
        
            <Grid container spacing={2} style={{ display: 'flex', alignItems: "center" }} >
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                First Name
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  type='text'
                  id="firstName"
                  label="First Name"
                  name='firstName'
                  variant="outlined"
                  value={firstName}
                  onChange={handleInputChange}
                  style={{ width: '100%' }}
                />
              </Grid>


              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                Last Name
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  type='text'
                  name='lastName'
                  id='lastName'
                  variant="outlined"
                  label="Last Name"
                  value={lastName}
                  onChange={handleInputChange}
                  style={{ width: '100%' }}
                />
              </Grid>

              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                Email
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  type='email' name='email'
                  id='email'
                  label="E-mail"
                  variant="outlined"
                  value={email}
                  onChange={handleInputChange}
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                password
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  type='password'
                  name='password'
                  id='password'
                  variant="outlined"
                  label="Password"
                  value={password}
                  onChange={handleInputChange}
                  style={{ width: '100%' }}
                />
              </Grid>


              <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                Confirm Password
              </Grid>
              <Grid item xs={6}>
                <TextField
                  // size='small'
                  required
                  type='password'
                  name='confirmPassword'
                  variant="outlined"
                  id='confirmPassword'
                  label="Confrim Password"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  style={{ width: '100%' }}
                />
              </Grid>
            </Grid>
            {/* <div class="footer">
              <button
                class="btn btn-primary"
                type="submit"
                onSubmit={createUserWithEmailAndPassword} 
                >
                
                Register
              </button>
            </div> */}
          </Box>
          <div class="footer">
            <button
              class="btn btn-primary"
              type="submit"
              onClick={registerPartner}
            >

              Register
            </button>
          </div>
        </div>
      </div>
    </>



  )
}

export default RegistrationForm