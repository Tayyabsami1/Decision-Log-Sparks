import { Route, Routes } from 'react-router'
import ProductPage from '@/pages/ProductPage'
import DemoPage from '@/pages/DemoPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/demo" element={<DemoPage />} />
    </Routes>
  )
}
