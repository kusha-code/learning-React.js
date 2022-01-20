import * as React from 'react';
import Count from './Count';
import './App.css';

interface Props {}
interface State {
    count: number
}

class App extends React.Component<Props, State> {

    state: State = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    }

    decrement = () => {
        this.setState({
            count: (this.state.count > 0 ? this.state.count - 1 : 0)
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React + TypeScript</h1>
                    <Count count={this.state.count} />
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </header>
            </div>
        );
    }
}


export default App;
