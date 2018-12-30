import React from "react";
import PropTypes from "prop-types";
import { transformChoices, formatChoices, findAnswer } from "./utils";

const propTypes = {
  choices: PropTypes.array.isRequired,
  answer: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

class Choices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choices: transformChoices(props.choices, props.answer)
    };
  }

  handleChoiceChange = index => e => {
    const newChoices = this.state.choices.map((choice, sidx) => {
      if (index !== sidx) return choice;
      return { ...choice, name: e.target.value };
    });
    this.setState({ choices: newChoices });
  };

  handleRemoveChoice = index => () => {
    if (this.state.choices[index].isActive) {
      return;
    }
    this.setState({
      choices: this.state.choices.filter((choice, sidx) => index !== sidx)
    });
  };

  handleAddChoice = () => {
    this.setState({
      choices: this.state.choices.concat([{ name: "", isActive: false }])
    });
  };

  handleAnswerChange = index => () => {
    const newChoices = this.state.choices.map((choice, sidx) => {
      if (index === sidx) {
        choice.isActive = true;
        return choice;
      }
      choice.isActive = false;
      return choice;
    });

    this.setState({
      choices: newChoices
    });
  };

  render() {
    const { handleSubmit } = this.props;
    const { choices } = this.state;

    return (
      <form>
        {choices.map((choice, index) => (
          <div key={["choice", index].join("__")}>
            <input
              name="choice"
              type="radio"
              checked={choice.isActive}
              value={index}
              onChange={this.handleAnswerChange(index)}
            />
            {String.fromCharCode(65 + index)}
            <input
              type="text"
              value={choice.name}
              onChange={this.handleChoiceChange(index)}
            />
            <button type="button" onClick={this.handleRemoveChoice(index)}>
              delete
            </button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddChoice}>
          add choice
        </button>
        <div>
          <button
            type="submit"
            onClick={handleSubmit(formatChoices(choices), findAnswer(choices))}
          >
            submit
          </button>
        </div>
      </form>
    );
  }
}

Choices.propTypes = propTypes;

export default Choices;
