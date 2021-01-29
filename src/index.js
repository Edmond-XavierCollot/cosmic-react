import ReactDOM from "react-dom";

const Element = () => (
  <Grid width="100%">
    <UI justify="center" padding="m" size={1 / 2}>
      1 / 2
    </UI>
    <UI justify="center" padding="m" size={1 / 2}>
      1 / 2
    </UI>
  </Grid>
);

const App = () => (
  <UI padding={100}>
    <Element />
  </UI>
);

ReactDOM.render(<App />, document.getElementById("app"));
