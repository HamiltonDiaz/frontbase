import React from 'react';
import {
    Alert,
    Box,
    Button,
    FormHelperText,
    Link,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography
} from '@mui/material';


function Login() {
    return (
        <Box
            sx={{
                backgroundColor: 'background.paper',
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    maxWidth: 550,
                    px: 3,
                    py: '100px',
                    width: '100%'
                }}>
                <div>
                    <Stack
                        spacing={1}
                        sx={{ mb: 3 }}
                    >
                        <Typography variant="h4">
                            Login
                        </Typography>
                        <Typography
                            color="text.secondary"
                            variant="body2"
                        >
                            ¿Tienes una cuenta?
                            &nbsp;
                            {/*   <Link
                                component={NextLink}
                                href="/auth/register"
                                underline="hover"
                                variant="subtitle2"
                            >
                                Register
                            </Link> */}
                        </Typography>
                    </Stack>

                    <Tabs
                        //onChange={handleMethodChange}
                        sx={{ mb: 3 }}
                    //value={method}
                    >
                        <Tab
                            label="Email"
                            value="email"
                        />
                        <Tab
                            label="Phone Number"
                            value="phoneNumber"
                        />
                    </Tabs>

                </div>

            </Box>
        </Box>
    );
}

export default Login;