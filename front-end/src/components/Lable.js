import React from "react";

class Lable extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value === this.props.value ? false : true;
  }
  render() {
    return (
      <div>
        <input
          className="input"
          placeholder={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
          required
        />
      </div>
    );
  }
}
export default Lable;
