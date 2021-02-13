import ReactDOM from "react-dom";
import { setConfig } from "cosmic-ui";
import appStyles from "@styles";

setConfig({ spacing: appStyles.spacing });

const App = () => (
  <UI width="100vw" height="100vh" align="center" justify="center">
    <UI>Cosmic App white page</UI>
  </UI>
);

ReactDOM.render(<App />, document.getElementById("app"));
