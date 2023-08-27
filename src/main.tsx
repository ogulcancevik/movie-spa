import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from './Router';
import { store } from './store';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
