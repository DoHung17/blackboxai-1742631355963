import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Chip,
  Button,
  Divider,
  Skeleton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Sample blog post data (in a real app, this would come from an API)
const samplePost = {
  id: 1,
  title: "Introducing Material UI v5: The Next Generation of Design Systems",
  content: `
    Material-UI v5 brings a complete rewrite of the styling engine, a new custom engine (MUI System), 
    and many new components to help you build better UIs faster.

    The new styling solution in v5 is built on Emotion, a popular CSS-in-JS library. 
    This change brings numerous benefits:
    
    • Better performance
    • Smaller bundle size
    • Access to Emotion's powerful features
    • Enhanced developer experience
    
    The MUI System is a new powerful feature that allows you to quickly build custom designs 
    with a collection of CSS utilities. These utilities can be used as standalone components 
    or integrated into existing Material-UI components.
    
    Some key improvements in v5:
    
    1. New Styling Engine
    2. Improved Customization
    3. Better TypeScript Support
    4. New Components
    5. Enhanced Documentation
    
    The future of Material-UI looks bright with these changes, and we're excited to see 
    what developers will build with these new tools.
  `,
  coverImage: "https://images.unsplash.com/photo-1618788372246-79faff0c3742",
  category: "Design",
  author: {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Senior Frontend Developer and UI/UX enthusiast"
  },
  publishDate: "2023-07-15"
};

function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        // In a real app, this would be an API call using the id
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPost(samplePost);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Skeleton variant="rectangular" height={400} sx={{ mb: 4 }} />
        <Skeleton variant="text" height={80} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="60%" sx={{ mb: 4 }} />
        <Skeleton variant="rectangular" height={200} />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4">Post not found</Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>

        <Box
          component="img"
          src={post.coverImage}
          alt={post.title}
          sx={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 4
          }}
        />

        <Chip
          label={post.category}
          color="primary"
          size="small"
          sx={{ mb: 2 }}
        />

        <Typography variant="h2" component="h1" gutterBottom>
          {post.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          <Avatar src={post.author.avatar} alt={post.author.name} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {post.author.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.author.bio}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {post.content}
        </Typography>
      </Container>
    </Box>
  );
}

export default BlogPostPage;