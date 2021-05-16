import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import Login from './components/loginButton';
import "./App.css";

class App extends React.Component {
    state = {
        profile: {}
    }
    componentDidMount() {
        this.getProfile = this.getProfile.bind(this);
    }
    getProfile = (profile) => {
        this.setState({ profile });
    }
    render() {
        return (
            <HashRouter>
                <Navigation />
                <Login getProfile={this.getProfile} />
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie/:id" render={(routeProps) => <Detail {...routeProps} profile={this.state.profile} />} />
            </HashRouter>
        );
    }

}

export default App;