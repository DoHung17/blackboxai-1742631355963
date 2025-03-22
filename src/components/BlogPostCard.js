import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Chip,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
});

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}));

function BlogPostCard({ post }) {
  const navigate = useNavigate();
  const {
    id,
    title,
    excerpt,
    coverImage,
    category,
    author,
    publishDate,
  } = post;

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <StyledCard>
      <CardActionArea onClick={handleClick}>
        <Box sx={{ position: 'relative' }}>
          <StyledCardMedia
            image={coverImage}
            title={title}
          />
          <CategoryChip
            label={category}
            size="small"
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {excerpt}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Avatar
              src={author.avatar}
              alt={author.name}
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography variant="subtitle2">
                {author.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default BlogPostCard;