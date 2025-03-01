import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Subscription/Login'

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </>;
}