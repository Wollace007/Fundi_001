
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Link } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Login() {
    const navigate = useNavigate();
    const [state, setState] = useState({

        email: '',
        password: '',
        rememberme: '',
    })
    const { email, password } = state

    const handleInputChange = (evt) => {
        setState((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value

        }))
    }

    const loginPartner = async () => {
        axios.post(`http://localhost:5000/login`, ({
            "email": email,
            "password": password
        })
        ).then((response) => {
            console.log("respo", response.data.status)
          
            if (response.data.status === 200) {
                navigate('/home')
            }
        }).error((error) => {
            console.log("error", error)
        })

    }

    return (

        <div className='form'>
            <div className='form-body'>
            <h1 class="MuiTypography-root MuiTypography-h4 MuiTypography-alignCenter ">Login</h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} >

                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                            Email
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                size="small"
                                required
                                type='email'
                                name='email'
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
                                size="small"
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

                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                            </FormGroup>
                        </Grid>

                    </Grid>
                    {/* <Grid item xs={12}>
                        {!password ? (
                            <div class="footer">
                                <button style={{ width: '100%' }} disabled type='Submit' class="btn btn-primary">Login</button>
                            </div>
                        ) :
                            (
                                <div class="footer">
                                    <button class="btn btn_password" href="/home">Login </button>
                                </div>
                            )
                        }
                    </Grid> */}

                    <Grid container sx={{ mt: 2 }}>
                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                            <Link
                                href="/forgotpassword"
                                variant="body2">
                                Forgot Password?
                            </Link>

                        </Grid>
                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <Link
                                href="/registrationform"
                                variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <div class="footer">
                    <button
                        class="btn btn-primary"
                        type="submit"
                        onClick={loginPartner}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
