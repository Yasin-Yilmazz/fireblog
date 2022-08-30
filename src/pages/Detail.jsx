import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { dataList } = useContext(BlogContext);
  const { state } = useLocation();
  console.log("state => ", state);

  const { title, content, url, uuid } = state;

  return (
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
        <CardActions sx={{}}>
          <Button size='small'>Delete</Button>
          <Button size='small'>Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
