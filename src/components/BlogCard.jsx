import { Box } from "@mui/material";
import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { readBlog } from "../helpers/fireStore";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
  const navigate = useNavigate();
  const { dataList } = useContext(BlogContext);
  const { profileImgUrl } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  readBlog();

  let d = new Date();

  dataList && <h1>Loading</h1>;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 5,
        margin: 2,
      }}
    >
      {dataList?.map(({ title, content, url, uuid }) => (
        <Card
          key={uuid}
          sx={{ maxWidth: 345, cursor: "pointer" }}
          onClick={() =>
            currentUser
              ? navigate("detail/" + uuid, {
                  state: { title, content, url, uuid },
                })
              : navigate("login")
          } // onclick to card navigate spesific blog
        >
          <CardMedia component='img' height='194' image={url} />
          <CardContent>
            <Typography variant='h6'>{title}</Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
              }}
            >
              {content}
            </Typography>
          </CardContent>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label='blog'>
                <img src={profileImgUrl} alt={currentUser} width='50px' />
              </Avatar>
            }
            title={currentUser.email}
            subheader={`${String(d).slice(0, 16)}`}
          />
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default BlogCard;
