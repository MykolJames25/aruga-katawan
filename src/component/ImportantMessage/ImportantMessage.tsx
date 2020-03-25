import React from 'react';
import './importantMessage.css';

class ImportantMessage extends React.Component {
  render() {
    return (
        <div className="imContainer">
            <div className="imTitle">Important Message</div>
            <div className="imText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</div>
        </div>
    );
  }
}

export default ImportantMessage;
