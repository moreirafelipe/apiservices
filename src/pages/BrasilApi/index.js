import { Component } from 'react'
import ApiBrasil from '../../services/ApiBrasil';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export default class BrasilApi extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: []
    }
  }

  /*   async componentDidMount() {
      this.handleSubmit({ nomeUsuario: 'MarianaDCL' });
    } */

  handleSubmit = async ({ cep }) => {
    try {
      const response = await ApiBrasil.get(`/api/cep/v1/${cep}`);
      this.setState({ repositorios: response.data })
      console.log(response);
    } catch (error) {
      /*       Swal.fire({
              title: error.response.status,
              icon: 'error',
              text: error.response.data.message
            }); */
    }
  }


  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Pesquise endereço a partir do serviço Brasil API</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o cep" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.repositorios && (
              <ul className="list-group list-style-none my-3">
                <li className="fw-bold">
                  Estado
                </li>
                <li>
                  {this.state.repositorios.state}
                </li>
                <li className="fw-bold">
                  Cidade
                </li>
                <li>
                  {this.state.repositorios.city}
                </li>
                <li className="fw-bold">
                  Bairro
                </li>
                <li>
                  {this.state.repositorios.neighborhood}
                </li>
                <li className="fw-bold">
                  Rua
                </li>
                <li>
                  {this.state.repositorios.street}
                </li>
              </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}
