import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { readBlog } from '../helpers/fireStore';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const BlogCard = () => {
  const { dataList } = useContext(BlogContext);
  readBlog();
  const { profileImgUrl } = useContext(BlogContext);

  let d = new Date();
  console.log(d);

  dataList && <h1>Loading</h1>;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        margin: 2,
      }}
    >
      {dataList?.map(({ title, content, url, uuid }) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="194" image={url} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
          <CardHeader
            avatar={
              <Avatar>
                <img src={profileImgUrl} alt="pp" width="50px" />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={`${String(d).slice(0, 16)}`}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default BlogCard;
