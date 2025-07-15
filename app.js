const express = require('express');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  // Sample data - replace with your actual data
  const recentContent = [
    {
      type: 'interview',
      title: 'Voices of Little Havana',
      neighborhood: 'Little Havana, Miami',
      excerpt: 'Residents share stories of community and change in this historic neighborhood.',
      date: 'May 15, 2023',
      image: 'little-havana.jpg'
    },
    {
      type: 'article',
      title: 'The Evolution of Harlem',
      neighborhood: 'Harlem, NYC',
      excerpt: 'From the Harlem Renaissance to today, explore this cultural hub\'s rich history.',
      date: 'April 28, 2023',
      image: 'harlem.jpg'
    }
  ];
  
  res.render('index', { recentContent });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/archives', (req, res) => {
  // Sample data - replace with your actual data
  const allContent = [
    {
      type: 'interview',
      title: 'Voices of Little Havana',
      neighborhood: 'Little Havana, Miami',
      date: 'May 15, 2023'
    },
    {
      type: 'article',
      title: 'The Evolution of Harlem',
      neighborhood: 'Harlem, NYC',
      date: 'April 28, 2023'
    },
    {
      type: 'interview',
      title: 'Chinatown Stories',
      neighborhood: 'Chinatown, San Francisco',
      date: 'March 10, 2023'
    }
  ];
  
  res.render('archives', { allContent });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});