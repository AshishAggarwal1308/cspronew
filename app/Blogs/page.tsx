"use client"

import Link from "next/link";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Page() {
  return (
    <div>
      <title>Explore CSProTechnology Latest Blog Posts</title>
      <meta name="description" content="Discover the latest insights and updates from CSProTechnology. Stay informed with our comprehensive range of blog posts covering technology trends, tutorials, and industry news." />
      <div className="flex items-center justify-center w-[98.9vw] lg:h-[94vh] bg-cover bg-center relative" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/wooden-blocks-with-text-blog-wood-table-copy-space-white-background_1009751-3484.jpg?w=900)', backgroundPosition: 'center center', backgroundSize: 'cover' }} />
      <h3 style={{ paddingLeft: '50px', marginTop: '40px', fontSize: '32px' }}>Popular Blogs</h3>
      <div style={{ padding: '50px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 345, boxShadow: '6px 6px 16px black' }}>
          <CardMedia
            sx={{ height: 240 }}
            image="/robot.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              AI vs Humans
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humans tend to be superior to AI in contexts and at tasks that require empathy. Human intelligence encompasses the ability to understand and relate to the feelings...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: '#AF1E3B' }}>Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: '6px 6px 16px black' }}>
          <CardMedia
            sx={{ height: 240 }}
            image="/ant.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mind into machines
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Artificial intelligence (AI) involves creating intelligent computer programs and machines that can interact with the real world similarly to humans. AI uses techniques like...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: '#AF1E3B' }}>Read More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, boxShadow: '6px 6px 16px black' }}>
          <CardMedia
            sx={{ height: 240 }}
            image="/chip.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Every byte counts matters
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Bytes are enormously important in Computer Science, they are utilised to measure everything from the amount of storage a drive can hold to the amount of memory in a console...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ color: '#AF1E3B' }}>Read More</Button>
          </CardActions>
        </Card>
      </div>

    </div>
  );
}
