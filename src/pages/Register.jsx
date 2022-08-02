import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { Formik } from 'formik';
import { RegisterSchema } from '../components/RegisterSchema';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: '10rem', textAlign: 'center' }}>
      <Avatar
        sx={{
          backgroundColor: '#E8A87C',
          m: 'auto',
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <LockIcon size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="#41B3A3">
        Register
      </Typography>

      <Formik
        initialValues={{ fullName: '', email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <RegisterForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default Register;
