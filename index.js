import React from "react";
import { render } from "react-dom";
import { MonacoDiffEditor } from "react-monaco-editor";

class DiffEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      code: `function statement(invoice, plays) {
        let totalAmount = 0;
        let volumeCredits = 0;
        let result = \`Statement for \${invoice.customer}\\n\`;
        const format = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
          minimumFractionDigits: 2 }).format();
    }`,
      original: 'const a = "Hello World"',
    };
  }

  onChange = (newValue) => {
    console.log("onChange", newValue); // eslint-disable-line no-console
  };

  render() {
    const { code, original } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ code })} type="button">
          Reset
        </button>
        <hr />
        <MonacoDiffEditor
          width="1830"
          height="300"
          language="javascript"
          value={code}
          original={original}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const App = () => (
  <div>
    <h2>Another editor (showing a diff)</h2>
    <DiffEditor />
  </div>
);

render(<App />, document.getElementById("root"));
