import { Component } from 'react'
import './App.css';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import RouteList from './routes';

export default class App extends Component {
  render() {
    return (
      <>
        <RouteList />
      </>
    )
  }
}
