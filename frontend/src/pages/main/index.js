import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
  state = {
    persons : [],
  }

  componentDidMount() {
    this.loadPersons()
  }

  loadPersons = async () => {
    const response = await api.get('/person')

    this.setState({ persons: response.data})
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.celular}</td>
              <td>{person.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      // <div className="showPersons">
      //   {this.state.persons.map(person => (
      //     <h2 key={person.id}>{person.name}</h2>
      //   ))}
      // </div>
    )
  }
}