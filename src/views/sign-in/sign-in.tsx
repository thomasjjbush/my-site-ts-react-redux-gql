import React, { Component } from 'react';
import { Input, InputTypes } from './../../components/text-input';
import { Store } from './../../types/store';
import { connect } from 'react-redux';
import { signIn } from './../../actions/sign-in';
import { Redirect } from 'react-router';

class SignIn extends Component<any, { email: string, password: string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            [InputTypes.EMAIL]: '',
            [InputTypes.PASSWORD]: '',
        }
        console.log('hello')
    };

    handleEmail = (email: string) => this.setState({ email });
    handlePassword = (password: string) => this.setState({ password });

    render() {
        const { email, password } = this.state;
        const { user } = this.props;
        if (user) return <Redirect to='/' />
        return (
            <main>
                <Input 
                    type={InputTypes.EMAIL}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <Input 
                    type={InputTypes.PASSWORD}
                    value={this.state.password}
                    onChange={this.handlePassword}
                />
                <button 
                    disabled={!this.state.email || !this.state.password} 
                    onClick={() => this.props.signIn(email, password)}
                >
                    sign in
                </button>
            </main>
        );
    }
};

const mapDispatchToProps = {
    signIn,
};

const mapStateToProps = (store: Store) => ({
    user: store.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)