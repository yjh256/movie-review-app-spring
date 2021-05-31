import react from 'react';
import './css/loginButton.css';
import axios from 'axios';

class Login extends react.Component {

    constructor() {
        super();
        this.state = { token: '', profile: {} };
    }

    componentDidMount() {
        this.googleSDK();
    }

    prepareLoginButton() {
        this.auth2.attachClickHandler(document.getElementById("loginBtn"), {},
            (googleUser) => {
                this.setState({ token: googleUser.getAuthResponse().id_token });
                let profile = googleUser.getBasicProfile();
                const data = {
                    id: profile.getId(),
                    name: profile.getName(),
                    email: profile.getEmail(),
                    imageUrl: profile.getImageUrl(),
                    token: googleUser.getAuthResponse().id_token
                };
                this.setState({ profile: data });
                this.props.getProfile(this.state.profile);
                axios.post("/api/v1/user", data)
                .catch(error => console.log(error));
            },
            (error) => {
                alert(JSON.stringify(error, undefined, 2));
            }
        )
    }

    logout = (e: any) => {
        this.setState({ token: '', profile: {} });
        this.auth2.disconnect();
        window.location.reload();
    }

    googleSDK = () => {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '464472530155-gu2lsk21hp9nsfnag40neka4hghvaqru.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                this.prepareLoginButton();
            });
        }

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }

    render() {
        return (
            <div className="login-session">
            {this.state.token ? (
                <div>
                    {this.state.profile.name} 님 환영합니다. <button className="logoutBtn loginBtn--google" onClick={this.logout}>Logout</button>
                </div>
            ) : (
                <button className="loginBtn loginBtn--google" id="loginBtn">Login with Google</button>
            )}
            </div>
        );
    }
}

export default Login;