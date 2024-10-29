import './assets/main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot, Root } from 'react-dom/client';

export const API_URL = import.meta.env.VITE_API_URL; // to move somewhere else maybe ?
console.log('API_URL', API_URL);

// Check if the root already exists, create it only if necessary
const container = document.getElementById('root')!; // Get the root container

let root: Root;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(container as any)._reactRoot) {
  // Create the root only if it hasn't been created before
  root = createRoot(container);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (container as any)._reactRoot = root; // Store the root in the container for future use
} else {
  // Reuse the existing root if it has already been created
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  root = (container as any)._reactRoot;
}

// Render the app using the existing root instance
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
