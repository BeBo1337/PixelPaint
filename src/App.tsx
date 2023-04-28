import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'
import './App.css'
import GridLayout from './components/gridLayout'

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <GridLayout random={true}/>
      <GridLayout />
    </div>
  )
}

export default App
