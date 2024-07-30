import React from 'react';
import Card from './components/Card.js';
import './App.css';
import pic3 from './components/images/img1.jpg';
import pic2 from './components/images/img3.jpg';
import pic1 from './components/images/img4.jpg';



const App = () => {
  const cardsData = [
    {
      image: [pic1],
      title: 'Become Successful Data Analyst',
      date: 'Starts from 18th July, 2024',
      status: 'Upcoming',
    },
    {
      image: [pic2],
      title: 'Open your wings join Internvita',
      date: 'Starts from 18th July, 2024',
      status: 'Upcoming',
    },
    {
      image: [pic3],
      title: '3-Days VR Workshop',
      date: 'Starts from 18th July, 2024',
      status: 'Upcoming',
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;
