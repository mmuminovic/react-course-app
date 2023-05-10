import React from 'react';
import logo from './logo.svg';
import './App.css';
import Classnames from './App.module.css';
import getMyName from './getMyName';
import { gender, getMyAge } from './getProfileInfo';
import MyName from './NameComponent';
import LogoComponent from './components/LogoComponent';
import NameText from './components/NameText';

class App extends React.Component {
    state = {
        myAge: getMyAge(1995),
        city: 'Novi Pazar',
        name: 'Muhamed',
    };

    render() {
        console.log('render', this.state);
        return (
            <div className={[Classnames.App, Classnames.Nesto]}>
                <header className="App-header">
                    <LogoComponent
                        logo={logo}
                        name={this.state.name}
                        date={new Date()}
                    ></LogoComponent>
                    <NameText name={'Kenan'} />
                    <p>I am {this.state.myAge} years old</p>
                    <button
                        onClick={() => {
                            // myAge = myAge + 1;
                            this.setState({ myAge: this.state.myAge + 1 });
                            // this.setState((prevState) => {
                            //     return {
                            //         ...prevState,
                            //         myAge: this.state.myAge + 1,
                            //     };
                            // });
                        }}
                        style={{
                            height: 50,
                            width: 300,
                            fontSize: 30,
                        }}
                    >
                        Make me older
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
