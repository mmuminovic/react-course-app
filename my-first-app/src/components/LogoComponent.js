import React from 'react';

class LogoComponent extends React.Component {
    state = { name: 'Muhamed' };

    render() {
        console.log('props', this.props);
        return (
            <div>
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <button
                    onClick={() => {
                        this.setState({ name: 'Kenan' });
                    }}
                >
                    Change Name
                </button>
            </div>
        );
    }
}

export default LogoComponent;
