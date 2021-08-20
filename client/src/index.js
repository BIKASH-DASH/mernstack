import { create } from 'domain';
import reactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'

const store = createStore(reducers,compose(applyMiddleware(thunk)))


reactDOM.render(
<Provider>
    <App/>
</Provider>
,document.getElementById("root"));
