/* eslint-disable one-var, react/no-multi-comp, react/jsx-filename-extension, comma-dangle, capitalized-comments */

import {Provider, connect} from "react-redux";
import Layout from "../components/layout";
// import PropTypes from "prop-types";
import React from "react";
import {createStore} from "redux";

// import {Link} from "gatsby";

const pluralize = (entity, count) => count === 1 // eslint-disable-line
  ? `${count} ${entity}`
  : `${count} ${entity}s`;

const titleize = key => `${key[0].toUpperCase()}${key.slice(1)}`;

const Table = connect(store => store)(props => (
  <table>
    <tbody>
      {Object.entries(props.attributes).map(pair => (
        <tr key={pair[0]}>
          <td>
            {titleize(pair[0])}
          </td>
          <td>
            {pair[1]}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
));

const buttons = {
  "clean poop": () => null,
  "feed": () => null,
};

const Interface = connect(() => null)(() => (
  <section>
    {Object.entries(buttons).map((pair) => {
      const [
        action,
        handler
      ] = pair;
      return (
        <button
          key={action}
          onClick={handler}
          type="button"
        >
          {titleize(action)}
        </button>
      );
    })}
  </section>
));

class App extends React.Component {
  constructor (props) {
    super(props);

    const initialState = {
      "attributes": {
        "age": 0,
        "energy": 10,
        "food": 10,
        "happiness": 5,
        "name": "Meepea",
        "poop": 0,
      }
    };

    this.store = createStore(prevState => prevState, initialState);
  }

  render () {
    const {store} = this;
    return (
      <Layout>
        <Provider store={store}>
          <React.Fragment>
            <Table />
            <Interface />
          </React.Fragment>
        </Provider>
      </Layout>
    );
  }
}

export default App;
