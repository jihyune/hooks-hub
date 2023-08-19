import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

import { AsyncBoundary } from './hocs/hoc-error-boundary';

const MainPage = lazy(() => import('./pages/main'));

const RouteWrapper = tw.main`relative w-full h-full`;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <AsyncBoundary>
          <RouteWrapper>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </RouteWrapper>
        </AsyncBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
