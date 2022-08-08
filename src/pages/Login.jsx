import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { Formik } from 'formik';
import { RegisterSchema } from '../components/RegisterSchema';
import { Form } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { logInUser, signInWithGoogle } from '../helpers/firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
          Login
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            logInUser(values.email, values.password, navigate);
          }}
        >
          {({ values, handleChange, errors, handleBlur, touched }) => (
            <Form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#E8A87C' }}
                >
                  Submit
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#C4402F' }}
                  onClick={() => {
                    signInWithGoogle(navigate);
                    console.log(currentUser);
                  }}
                >
                  g+ Sign in with Google+
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default LoginPage;
