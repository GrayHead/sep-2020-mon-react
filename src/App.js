import React, {Component} from 'react';


class App extends Component {
	myForm = React.createRef();

	state = {inputValue: ''};

	render() {

		return (
			<div>
				<form action={'/savedata'} onSubmit={this.send} ref={this.myForm}>
					<input type='number' onInput={this.commitState} value={this.state.inputValue}/>
					<button>send</button>
				</form>

			</div>
		);
	}

	send = (e) => {
		e.preventDefault();
		// console.log(this.myForm.current[0].value);
		console.log(e.target.children[0].value);

	};

	commitState = (e) => {
		this.setState({inputValue: e.target.value});

	};
}

export default App;
