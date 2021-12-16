import './App.css';
import Header from './componentes/Header';
import React from 'react';
import Table from './componentes/Table';
import TForm from './componentes/TForm';
import axios from 'axios'
import TBody from './componentes/TBody';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cabecera: ['Titulo','Año','Tipo','Poster'],
      datos: [],
      datosPelicula: null,
      peliculaClicada: null,
      peliculaBuscada: null
    }
    this.clicarPelicula = this.clicarPelicula.bind(this);
    this.buscarTitulo = this.buscarTitulo.bind(this);
  }

  clicarPelicula(i) {
    const url = "http://www.omdbapi.com/?apikey=8798f58b&i="+i;
    console.log(url);
    axios.get(url).then((r)=>{
      this.setState({datosPelicula: r.data});
      console.log(this.state.datosPelicula);
    }).catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
      this.setState({peliculaClicada: false});
    });
  }

  buscarTitulo(dato) {
    const url = "http://www.omdbapi.com/?apikey=8798f58b&s="+dato;
    axios.get(url).then((response)=>{
      this.setState({datos: response.data.Search, peliculaBuscada: true, peliculaClicada: false, datosPelicula: null});
      console.log(this.state.datos);
    }).catch((error) => {
      console.log(error); //Logs a string: Error: Request failed with status code 404
      this.setState({peliculaBuscada: false});
    });

  }

  render(){
    if(this.state.datosPelicula){
      return(      
        <div className="App">
          <TBody datos={this.state.datosPelicula}></TBody>
          <TForm adddato={this.buscarTitulo}></TForm>
        </div>);
    }
    else if(this.state.datos && this.state.peliculaBuscada){
      return(
        <div className="App">
          <Header ejercicio="OMDB"></Header>
          <TForm adddato={this.buscarTitulo}></TForm>
          <Table columnas={this.state.cabecera} filas={this.state.datos} evento={this.clicarPelicula}></Table>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <Header ejercicio="OMDB"></Header>
          <TForm adddato={this.buscarTitulo}></TForm>
        </div>
      );
    }
  }
}

export default App;
