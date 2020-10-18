import React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";
import './CodeDiff.sass';

class DiffEditor extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { code, original } = this.props;
    return (
      <div>
        <hr />
        <MonacoDiffEditor
          width="1830"
          height="700"
          language="javascript"
          value={code}
          original={original}
        />
      </div>
    );
  }
}

export default DiffEditor;
