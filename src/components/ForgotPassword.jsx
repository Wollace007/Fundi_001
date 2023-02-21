import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ForgotPassword() {
    const [state, setState] = React.useState({

        email: '',

    })
    const { email, } = state

    const handleInputChange = (evt) => {
        setState((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value

        }))
    }


    return (
        <div>
            <div className='form'>
                <div className='form-body'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} >

                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start !important' }}>
                                Email
                            </Grid>
                            <Grid item xs={6}>
                                <input
                                    className='form_input'
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={handleInputChange}
                                    style={{ width: '100%' }}
                                    
                                />
                            </Grid>
                        </Grid>

                        
                        {!email ? (
                        <div class="footer">
                            <button disabled type='Submit' class="btn btn-primary">Submit</button>
                        </div>
                    ) :
                        (
                            <div class="footer">
                                <button> <a class="btn btn_password" href="/Login">Submit</a> </button>
                            </div>
                        )
                    }
            
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
