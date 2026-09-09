import { Route, Routes } from 'react-router'
import ProductPage from '@/pages/ProductPage'
import DemoPage from '@/pages/DemoPage'
import { RouteEffects } from '@/components/RouteEffects'

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </>
  )
}
