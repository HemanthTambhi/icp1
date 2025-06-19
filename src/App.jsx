import { Provider } from 'react-redux';
import AppRoutes from './base/routes/Approutes.jsx';
import store from './base/store/store.js';

function App() {

  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
