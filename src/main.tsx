import '~/styles/index.css';

import { createRoot } from 'react-dom/client';

import('~/app').then(({ default: App }) =>
  createRoot(document.getElementById('root') as HTMLElement).render(<App />)
);
