import React from 'react';
import { links } from './../../config/nav';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Store } from './../../types/store';
import { signOut } from '../../actions/sign-out';
import { User } from '../../types/user';
import './nav.scss';

interface Props extends RouteComponentProps {
	user: User
	signOut: Function
};

const Navigation = (props: Props) => {
	const { location: { pathname }, user, signOut } = props;
    return (
        <nav className="nav">
			<Link to="/" className="nav__logo" />
			<div>
				<Link to={'/user'} className={`nav__link`}>my account</Link>
				<Link to={'/posts'} className={`nav__link icon--work`}>my work</Link>
				<Link to={'/'} className={`nav__link icon icon--home`}>home</Link>
				<Link to={'/sign-in'} className={`nav__link icon--login`}>sign in</Link>
			</div>
        </nav>
    );
};

const mapStateToProps = (store: Store) => ({
    user: store.user,
});

const mapDispatchToProps = {
	signOut,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))
