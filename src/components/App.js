// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

const posts = [
  { id: 1, title: "React Basics", date: "March 15, 2023", preview: "An introduction to React." },
  { id: 2, title: "State and Props", date: "April 5, 2023", preview: "Understanding state and props." },
  { id: 3, title: "Lifecycle Methods", preview: "Learn about React lifecycle methods." }
];

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About image="https://via.placeholder.com/215" about="This is my blog about React." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

