import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import {
  Contact,
  Dashboard,
  Home,
  Skills
} from './page'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>
    </Layout>
  )
}