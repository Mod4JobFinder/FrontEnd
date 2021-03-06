import { useContext } from 'react';
import './Landing.css';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import {ThemeContext} from '../../Context/ThemeContext.js';

function Landing() {
  const { color } = useContext(ThemeContext)

  return (
    <main className={`LandingLayout ${color}`} style={color.pageBackGround}>
      <Header hidden={'hidden'}/>
      <LoginForm />
    </main>
  );
}

export default Landing;
