import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

// Data for our sections and cards
const sectionsData = [
  {
    title: 'Cummulative Views',
    cards: [
      {
        icon: '✅',
        title: 'Event List By Status',
        description: 'All the upcomming events in Master calendar, grouped by their status',
        link: 'https://sharing.clickup.com/90132059689/l/h/6-901316860692-1/8f7544b0b5d9241',
      },
      {
        icon: '👥',
        title: 'Event List by Team',
        description: 'Set clear objectives and track your progress with measurable targets.',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-893/697acd6252dc213',
      },
      {
        icon: '🗓️',
        title: 'Calender View',
        description: 'Visualize your project timelines and strategic initiatives effortlessly.',
        link: 'https://sharing.clickup.com/90132059689/c/h/6-901316860692-5/b90696a917d88e8',
      },
    ],
  },
  {
    title: 'Individual Views',
    cards: [
      {
        icon: '👤',
        title: 'Carolina',
        description: 'Events where Carolina is the assignee',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-953/f91a4ae309bcbbf',
      },
      {
        icon: '👤',
        title: 'Niasia',
        description: 'Events where Niasia is the assignee',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-973/d1cd72b1ba45f1a',
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="app-container">
        {sectionsData.map((section, index) => (
          <Section key={index} title={section.title} cards={section.cards} />
        ))}
      </main>
    </>
  );
}

export default App;