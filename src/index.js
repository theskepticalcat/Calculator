import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';

import FurnitureStore from './store/furnitureStore';
import CurrencyStore from './store/currencyStore';
import RussianCitiesStore from './store/russianCitiesStore';
import ChineseCitiesStore from './store/сhineseSitiesStore';
import SelectedOptionsStore from './store/selectedOptionsStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    furniture: new FurnitureStore(),
    currency: new CurrencyStore(),
    russianCities: new RussianCitiesStore(),
    chineseCities: new ChineseCitiesStore(),
    options: new SelectedOptionsStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);