import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    TextField,
    Typography,
    Grid,
    MenuItem,
    Box
} from '@mui/material';

const prueba = () => {
    let resultado = 0
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {

            resultado += i * j
        }

    }
    alert(resultado)
}


function Empresa() {
    const formik = useFormik({
        initialValues: {
            razonsocial: '',
            comercialname: '',
            typeDoc: '',
            numDoc: null,
            nameRL: '',
            typeDocRL: '',
            numDocRL: null,
            nameRLS: '',
            typeDocRLS: '',
            numDocRLS: null,
        },
        validationSchema: Yup.object({
            razonsocial: Yup
                .string()
                .max(255)
                .required('Nombre/Razón social es requerido'),
            comercialname: Yup
                .string()
                .max(255)
                .required('Nombre comercial es requerido'),
            typeDoc: Yup
                .string()
                .max(10)
                .required('Tipo de documento es requerido'),
            numDoc: Yup
                .number()
                .min(4000000, 'Número incorrecto')
                .required('Número de documento es requerido'),
            nameRL: Yup
                .string()
                .max(255)
                .required('Nombre es requerido'),
            typeDocRL: Yup
                .string()
                .max(10)
                .required('Tipo de documento es requerido'),
            numDocRL: Yup
                .number()
                .min(4000000, 'Número incorrecto')
                .required('Número de documento es requerido'),
            nameRLS: Yup
                .string()
                .max(255)
                .required('Nombre es requerido'),
            typeDocRLS: Yup
                .string()
                .max(10)
                .required('Tipo de documento es requerido'),
            numDocRLS: Yup
                .number()
                .min(4000000, 'Número incorrecto')
                .required('Número de documento es requerido'),
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
        {
            value: 5,
            label: 'NIT'
        },
    ]
    return (
        <Grid>
            {/* formulario Empresa */}
            <form
                noValidate
                onSubmit={formik.handleSubmit}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}

                >
                    <Grid xs={12}>
                        <Typography variant="h4" textAlign={"center"} >
                            Gestión de Empresas
                        </Typography>
                    </Grid>

                    <Grid xs={12}>
                        <Typography variant="h6" textAlign={"left"} >
                            Datos de la empresa
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={4} >
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
                    <Grid item xs={6} md={3} >
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
                            inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+', min: 4000000 }}
                        />
                    </Grid>


                    <Grid item xs={12} md={6} >
                        <TextField
                            error={!!(formik.touched.firstName && formik.errors.firstName)}
                            fullWidth
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            label="Nombre o razón social"
                            name="razonsocial"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.razonsocial}
                            required
                        />

                    </Grid>

                    <Grid item xs={12} md={6} >
                        <TextField
                            error={!!(formik.touched.firstLastName && formik.errors.firstLastName)}
                            fullWidth
                            helperText={formik.touched.firstLastName && formik.errors.firstLastName}
                            label="Nombre comercial"
                            name="comercialname"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.comercialname}
                            required
                        />

                    </Grid>

                    <Grid xs={12}>
                        <Typography variant="h6" textAlign={"left"} marginTop={2} >
                            Representante Legal principal
                        </Typography>
                    </Grid>


                    <Grid item xs={6} md={3} >
                        <TextField
                            error={!!(formik.touched.typeDoc && formik.errors.typeDoc)}
                            fullWidth
                            helperText={formik.touched.typeDoc && formik.errors.typeDoc}
                            label="Tipo de documento"
                            name="typeDocRL"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            select
                            value={formik.values.typeDocRL}
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
                    <Grid item xs={6} md={3} >
                        <TextField
                            error={!!(formik.touched.numDoc && formik.errors.numDoc)}
                            fullWidth
                            helperText={formik.touched.numDoc && formik.errors.numDoc}
                            label="Número de documento"
                            name="numDocRL"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="number"
                            value={formik.values.numDocRL}
                            required
                            inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+', min: 4000000 }}
                        />
                    </Grid>


                    <Grid item xs={12} md={6} >
                        <TextField
                            error={!!(formik.touched.firstName && formik.errors.firstName)}
                            fullWidth
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            label="Nombre completo"
                            name="nameRL"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.nameRL}
                            required
                        />

                    </Grid>
                    <Grid xs={12}>
                        <Typography variant="h6" textAlign={"left"} marginTop={2} >
                            Representante Legal suplente
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={3} >
                        <TextField
                            error={!!(formik.touched.typeDoc && formik.errors.typeDoc)}
                            fullWidth
                            helperText={formik.touched.typeDoc && formik.errors.typeDoc}
                            label="Tipo de documento"
                            name="typeDocRLS"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            select
                            value={formik.values.typeDocRLS}
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
                    <Grid item xs={6} md={3} >
                        <TextField
                            error={!!(formik.touched.numDoc && formik.errors.numDoc)}
                            fullWidth
                            helperText={formik.touched.numDoc && formik.errors.numDoc}
                            label="Número de documento"
                            name="numDocRLS"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="number"
                            value={formik.values.numDocRLS}
                            required
                            inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+', min: 4000000 }}
                        />
                    </Grid>


                    <Grid item xs={12} md={6} >
                        <TextField
                            error={!!(formik.touched.firstName && formik.errors.firstName)}
                            fullWidth
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            label="Nombre completo"
                            name="nameRLS"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type="text"
                            value={formik.values.nameRLS}
                            required
                        />

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
                    <Grid item xs={12}>
                        <Box textAlign='right' marginX={3}>
                            <Button
                                //fullWidth

                                size="large"
                                type="submit"
                                variant="contained"
                                onClick={() => prueba()}
                            >
                                Continuar
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}


export default Empresa;