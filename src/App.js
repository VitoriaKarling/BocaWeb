import './App.css';
import { Component } from 'react';
import{List} from './Components/List';
import{Search} from './Components/Search';

class App extends Component{

  state = {
    search:'',
    odas: []  
  }
  componentDidMount(){
    this.carregaODAs();
    }

  carregaODAs(){
    const {search} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+search)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
   }
   searchODA=(evento) => {
    this.setState({search: evento.target.value});
    this.carregaODAs();
   }
  render(){
    const {search, odas} = this.state;
    return (
      <section className="container">
      <Search
        search = {this.state.search}
        searchODA = {this.searchODA} />
        {odas.map(oda => (
          <List
          key={oda._id}
          id={oda._id}
          nome={oda.nome}
          usuario={oda.usuario}
          descricao={oda.descricao}
          inclusao={oda.data_inclusao}
          palavra_chave={oda.palavras_chave} />))}
      </section>
    );
  }
}

export default App;
