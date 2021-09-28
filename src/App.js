import React from 'react';
import './style.css';
import { ColorBoxes } from './ColorBoxes';

export default function App() {
  return (
    <div>
      <ColorBoxes seriesOfBoxes={32} />
    </div>
  );
}
