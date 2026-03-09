import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

// Data for our sections and cards
const sectionsData = [
  {
    title: 'Requesting an Event',
    cards: [
      {
        icon: '➕',
        title: 'Request Form',
        description: 'Form to request an event from NJIT CDS',
        link: 'https://forms.clickup.com/90132059689/f/2ky4m5h9-593/NBBTUYY56HJ9TLEW0N',
      },
    ],
  },
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
        description: 'All the upcoming events in MAster Calendar grouped by Hosting Team',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-893/697acd6252dc213',
      },
      {
        icon: '🗓️',
        title: 'Calendar View',
        description: 'Calendar View for all the Upcoming Events logged in Master Calendar.',
        link: 'https://sharing.clickup.com/90132059689/c/h/6-901316860692-5/b90696a917d88e8',
      },
      {
        icon: '🕰️',
        title: 'After Hour Coverage Events',
        description: 'List of Events needing After Hour Coverage.',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-993/88bf173bf7e8f51',
      },
      {
        icon: '🧑🏻‍🎓',
        title: 'Mentor Support Events',
        description: 'List of Events requesting Mentors Support.',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-1493/0f34c3cafc1ee00',
      },
    ],
  },
  {
    title: 'Individual Views',
    cards: [
      {
        icon: '👤',
        title: 'Carolina Barba Granda',
        description: 'Events where Carolina is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-953/f91a4ae309bcbbf',
      },
      {
        icon: '👤',
        title: 'Niasia Kennedy',
        description: 'Events where Niasia is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-973/d1cd72b1ba45f1a',
      }, 
      {
        icon: '👤',
        title: 'Christine Cervelli',
        description: 'Events where Christine is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-1013/cd4a0502363eb06',
      },
      {
        icon: '👤',
        title: 'Dominque Clarke',
        description: 'Events where Dominque is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-1033/26b4a43a9cc4992',
      },
      {
        icon: '👤',
        title: 'Nayelli Perez',
        description: 'Events where Nayelli is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-1053/f67baff84974ee6',
      },
      {
        icon: '👤',
        title: 'Deborah Sims',
        description: 'Events where Deborah is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-1073/6fed3a14b6daeff',
      },
      {
        icon: '👤',
        title: 'Janelle Pyar',
        description: 'Events where Janelle is involved / volunteering',
        link: 'https://sharing.clickup.com/90132059689/l/h/2ky4m5h9-1093/68efa8b8cb36072',
      },
    ],
  },
];

function App() {
  // State to hold the current theme. It checks localStorage first,
  // then defaults to 'dark-mode'.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-mode');

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
  };

  // useEffect hook to update the body class and localStorage when the theme changes
  useEffect(() => {
    document.body.className = theme; // Apply theme class to the body
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  return (
    // We remove the fragment <> and use a div to ensure the theme class can be applied if needed,
    // though applying to document.body is more robust.
    <>
      {/* Pass the theme and toggle function to the Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="app-container">
        {sectionsData.map((section, index) => (
          <Section key={index} title={section.title} cards={section.cards} />
        ))}
      </main>
    </>
  );
}

export default App;