import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Landing = lazy(async () => await import('pages/landing'))
const AboutUs = lazy(async () => await import('pages/aboutUs'))
const Currency = lazy(async () => await import('pages/currency'))
const Support = lazy(async () => await import('pages/support'))
const TermsPrivacy = lazy(async () => await import('pages/termsPrivacy'))
const DemoLink = lazy(async () => await import('pages/demoLink'))
const DemoGateway = lazy(async () => await import('pages/demoGateway'))

const Navigation = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/products" element={<Landing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-conditions" element={<TermsPrivacy />} />
          <Route path="/user-privacy" element={<TermsPrivacy />} />
          <Route path="/demo-link" element={<DemoLink />} />
          <Route path="/demo-gateway" element={<DemoGateway />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Navigation
