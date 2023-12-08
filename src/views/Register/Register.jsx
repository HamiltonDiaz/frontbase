import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Alert,
    Box,
    Button,
    FormHelperText,
    Link,
    Stack,
    TextField,
    Typography,
    Avatar,
    Grid,
    MenuItem
} from '@mui/material';

const prueba =()=>{
    let resultado=0
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
        
            resultado+= i*j
        }
        
    }
    alert(resultado)
}


function Register() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            secondName: '',
            firstLastName: '',
            secondLastName: '',
            typeDoc: '',
            numDoc: null,
            submit: null,
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .max(255)
                .required('Primer nombre es requerido'),
            firstLastName: Yup
                .string()
                .max(255)
                .required('Primer apellido es requerido'),
            typeDoc: Yup
                .string()
                .max(10)
                .required('Tipo de documento es requerido'),
            numDoc: Yup
                .number()
                .min(4000000 , 'Número incorrecto')
                .required('Número de documento es requerido'),
            secondName: Yup
                .string()
                .max(255),
            seconLastdName: Yup
                .string()
                .max(255),
            email: Yup
                .string()
                .email('¡Email incorrecto!')
                .max(255)
                .required('Email es requerido'),
            password: Yup
                .string()
                .max(255)
                .required('Clave es requerida'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                // await auth.signIn(values.email, values.password);
                // router.push('/');
            } catch (err) {
                // helpers.setStatus({ success: false });
                // helpers.setErrors({ submit: err.message });
                // helpers.setSubmitting(false);
            }
        }
    });

    const tpDocs = [
        {
            value: 1,
            label: 'Cedula de ciudadanía'
        },
        {
            value: 2,
            label: 'Tarjeta de identidad'
        },
        {
            value: 3,
            label: 'Registro Civil'
        },
        {
            value: 4,
            label: 'Pasaporte'
        },
    ]
    return (


        <Box
            sx={{
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
                    py: '20px',
                    width: '100%'
                }}
            >
                <Stack
                    spacing={1}
                    sx={{ mb: 3, justifyContent: 'center', alignItems: 'center', }}
                >
                    <Avatar
                        sx={{ width: 80, height: 80 }}
                        alt="LogoEmpresa" src="data:image/png;base64,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" />

                    <Typography variant="h4">
                        Registro
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        ¿Ya estás regstrado?
                        &nbsp;
                        <Link
                            // component={NextLink}
                            //href="/auth/register"
                            underline="hover"
                            variant="subtitle2"
                        >
                            Ir al Login
                        </Link>
                    </Typography>
                </Stack>

                {/* formulario Register */}
                <form
                    noValidate
                    onSubmit={formik.handleSubmit}
                >

                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="stretch"
                        spacing={1}
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                        >
                            <Grid item xs={12} md={6} >
                                <TextField
                                    error={!!(formik.touched.typeDoc && formik.errors.typeDoc)}
                                    fullWidth
                                    helperText={formik.touched.typeDoc && formik.errors.typeDoc}
                                    label="Tipo de documento"
                                    name="typeDoc"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    select
                                    value={formik.values.typeDoc}
                                    required                                    
                                >
                                    {
                                        tpDocs.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <TextField
                                    error={!!(formik.touched.numDoc && formik.errors.numDoc)}
                                    fullWidth
                                    helperText={formik.touched.numDoc && formik.errors.numDoc}
                                    label="Número de documento"
                                    name="numDoc"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.numDoc}
                                    required
                                    inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+', min:4000000 }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                        >
                            <Grid item xs={12} md={6} >
                                <TextField
                                    error={!!(formik.touched.firstName && formik.errors.firstName)}
                                    fullWidth
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                    label="Primer Nombre"
                                    name="firstName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.firstName}
                                    required
                                />

                            </Grid>
                            <Grid item xs={12} md={6} >
                                <TextField
                                    error={!!(formik.touched.secondName && formik.errors.secondName)}
                                    fullWidth
                                    helperText={formik.touched.secondName && formik.errors.secondName}
                                    label="Otros Nombres"
                                    name="secondName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.secondName}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={1}
                        >
                            <Grid item xs={12} md={6} >
                                <TextField
                                    error={!!(formik.touched.firstLastName && formik.errors.firstLastName)}
                                    fullWidth
                                    helperText={formik.touched.firstLastName && formik.errors.firstLastName}
                                    label="Primer Apellido"
                                    name="firstLastName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.firstLastName}
                                    required
                                />

                            </Grid>
                            <Grid item xs={12} md={6} >
                                <TextField
                                    error={!!(formik.touched.secondLastName && formik.errors.secondLastName)}
                                    fullWidth
                                    helperText={formik.touched.secondLastName && formik.errors.secondLastName}
                                    label="Segundo Apellido"
                                    name="secondLastName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.secondLastName}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                error={!!(formik.touched.email && formik.errors.email)}
                                fullWidth
                                helperText={formik.touched.email && formik.errors.email}
                                label="Email"
                                name="email"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email"
                                value={formik.values.email}
                                required
                            />

                        </Grid>
                        <Grid item>
                            <TextField
                                error={!!(formik.touched.password && formik.errors.password)}
                                fullWidth
                                helperText={formik.touched.password && formik.errors.password}
                                label="Contraseña*"
                                name="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password"
                                value={formik.values.password}
                                required
                            />
                        </Grid>
                    </Grid>

                    {formik.errors.submit && (
                        <Typography
                            color="error"
                            sx={{ mt: 3 }}
                            variant="body2"
                        >
                            {formik.errors.submit}
                        </Typography>
                    )}
                    <Button
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        type="submit"
                        variant="contained"
                        onClick={()=>prueba()}
                    >
                        Continuar
                    </Button>

                    {/* <Alert
                            color="primary"
                            severity="info"
                            sx={{ mt: 3 }}
                        >
                            <div>
                                You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                            </div>
                        </Alert> */}
                </form>

            </Box>

        </Box>

    );
}


export default Register;