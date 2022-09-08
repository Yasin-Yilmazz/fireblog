import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Form } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createBlog } from "../helpers/fireStore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const New = () => {
  const { currentUser } = useContext(AuthContext);
  const author = currentUser.email;
  let d = new Date();
  const navigate = useNavigate();
  console.log("date", String(d).slice(0, 16));
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ddd",
      }}
    >
      <Container
        maxWidth='sm'
        sx={{
          height: "500px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant='h4' marginBottom='2rem' textAlign='center'>
          ADD POST
        </Typography>
        <Formik
          initialValues={{
            title: "",
            content: "",
            url: "",
            author: author,
            date: String(d).slice(0, 16),
          }}
          onSubmit={({ title, content, url, author, date }, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            // export createblog function from firestore and use
            createBlog(title, content, url, author, date);
            navigate("/");
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label='Title'
                  name='title'
                  id='title'
                  type='text'
                  required
                  variant='outlined'
                  value={values.title}
                  onChange={handleChange}
                />
                <TextField
                  label='Content'
                  name='content'
                  id='content'
                  type='text'
                  required
                  fullWidth
                  multiline
                  rows={7}
                  value={values.content}
                  onChange={handleChange}
                />
                <TextField
                  label='Image URL'
                  name='url'
                  id='url'
                  type='text'
                  required
                  variant='outlined'
                  value={values.url}
                  onChange={handleChange}
                />
                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  sx={{ backgroundColor: "#3CA6A6" }}
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
