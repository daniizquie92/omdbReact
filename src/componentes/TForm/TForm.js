import React from "react";

class TForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    this.setState( {[name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //envio de dato al estado padre, llamando a metodo
    this.props.adddato(this.state.nombre);
    //inicializa el form
    this.setState({
        nombre: "",
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nombre:<input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange}/></label>

        <input type="submit" value="Añadir" />
      </form>
    );
  }
}

export default TForm;
