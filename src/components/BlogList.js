import React from 'react';
import { Grid, Container, Typography, Box, Skeleton } from '@mui/material';
import BlogPostCard from './BlogPostCard';

const samplePosts = [
  {
    id: 1,
    title: 'Introducing Material UI v5: The Next Generation of Design Systems',
    excerpt: 'Material-UI v5 brings a complete rewrite of the styling engine, a new custom engine (MUI System), and many new components to help you build better UIs faster.',
    coverImage: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742',
    category: 'Design',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    publishDate: '2023-07-15'
  },
  {
    id: 2,
    title: 'Building Responsive Layouts with MUI Grid System',
    excerpt: 'Learn how to create beautiful, responsive layouts using Material-UI\'s powerful Grid component. We\'ll cover everything from basic layouts to complex grid arrangements.',
    coverImage: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f',
    category: 'Development',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    publishDate: '2023-07-14'
  },
  {
    id: 3,
    title: 'Mastering Theme Customization in Material-UI',
    excerpt: 'Deep dive into Material-UI\'s theming capabilities. Learn how to create and customize themes to match your brand identity while maintaining consistency across your application.',
    coverImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
    category: 'Styling',
    author: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    publishDate: '2023-07-13'
  },
  {
    id: 4,
    title: 'Performance Optimization Techniques for React Applications',
    excerpt: 'Explore advanced techniques for optimizing your React application\'s performance. From code splitting to memoization, learn how to make your app blazing fast.',
    coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Performance',
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    publishDate: '2023-07-12'
  }
];

function BlogList() {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(samplePosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Latest Posts
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Discover the latest insights in web development and design
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {loading
          ? Array.from(new Array(4)).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ width: '100%', marginRight: 0.5, my: 5 }}>
                  <Skeleton variant="rectangular" width="100%" height={118} />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              </Grid>
            ))
          : posts.map((post) => (
              <Grid item xs={12} sm={6} md={3} key={post.id}>
                <BlogPostCard post={post} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default BlogList;