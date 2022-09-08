import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteBlog } from "../helpers/fireStore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Detail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { currentUser } = useContext(AuthContext);
  const { title, content, url, uuid, author, date } = state;
  console.log("state ", state);

  return currentUser ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 70,
        textAlign: "center",
      }}
    >
      <Card sx={{ minWidth: "500px", maxWidth: "1000px", textAlign: "center" }}>
        <CardMedia
          sx={{ maxWidth: "350px", margin: "auto" }}
          component='img'
          height='310'
          image={url}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {author}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {date}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {content}
          </Typography>
        </CardContent>
        <CardActions sx={{}}>
          <Button
            onClick={() => {
              deleteBlog(uuid);
              navigate("/");
            }}
            size='small'
          >
            Delete
          </Button>
          <Button size='small'>Edit</Button>
        </CardActions>
      </Card>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 70,
        textAlign: "center",
      }}
    >
      <Card sx={{ minWidth: "500px", maxWidth: "1000px", textAlign: "center" }}>
        <CardMedia
          sx={{ maxWidth: "350px", margin: "auto" }}
          component='img'
          height='310'
          image={url}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
