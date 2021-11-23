import { Link } from 'react-router-dom';
import { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class Home extends Component {

  render() {
    return (
      <>
        <h2 className="text-center">Seja bem vindo(a)</h2>
      </>
    );
  }
}
