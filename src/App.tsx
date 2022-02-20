import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import Layout from './routes/layout/layout';
import { lazy } from 'solid-js';

const Home = lazy(() => import('./routes/home'));

const App: Component = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
