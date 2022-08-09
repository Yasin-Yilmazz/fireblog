import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Formik } from 'formik';
import { Form } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { writeUserData } from '../helpers/firebase';

const New = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ddd',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          height: '500px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" marginBottom="2rem" textAlign="center">
          ADD POST
        </Typography>
        <Formik
          initialValues={{}}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            writeUserData(values.title, values.content, values.url);
          }}
        >
          {({ values, handleChange, errors, handleBlur, touched }) => (
            <Form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Title"
                  name="title"
                  id="title"
                  type="text"
                  required
                  variant="outlined"
                  value={values.title}
                  onChange={handleChange}
                />
                <TextField
                  label="Content"
                  name="content"
                  type="text"
                  id="content"
                  required
                  fullWidth
                  multiline
                  rows={7}
                  value={values.content}
                  onChange={handleChange}
                />
                <TextField
                  label="Image URL"
                  name="image URL"
                  id="image URL"
                  type="text"
                  required
                  variant="outlined"
                  value={values.url}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#3CA6A6' }}
                >
                  add post
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default New;
