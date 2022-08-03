import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { Formik } from 'formik';
import { RegisterSchema } from '../components/RegisterSchema';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://picsum.photos/1400/1000)`,
        height: '100vh',
        display: 'flex',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          height: '500px',
          backgroundColor: 'rgba(3, 62, 140, .7)',
          margin: 'auto',
          borderRadius: '1rem',
          boxShadow: '5px 8px 5px 5px #090000d6',
          padding: '2rem',
        }}
      >
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
    </div>
  );
};

export default Register;
