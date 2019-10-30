import React from 'react';
import classes from'./App.scss';
import Layout from './components/Layout/Layout'
import Card from './containers/Card/Card'

function App() {
  return (
    <div>
      <Layout>
        <Card/>
      </Layout>
    </div>
  );
}

export default App;
