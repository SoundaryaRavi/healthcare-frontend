import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Subscription/Login'
import Register from './components/Subscription/Register'
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Dashboard />} />
      <Route path="/goals" element={<Dashboard />} />
      <Route path="/messages" element={<Dashboard />} />
      <Route path="/logout" element={<Dashboard />} />
    </Routes>
  </>;
}