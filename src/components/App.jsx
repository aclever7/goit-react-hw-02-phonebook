import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import Contact from './Contact';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = ({ name, number }) => {
    // const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleContactFilter = e => {
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contact handleContactFilter={this.state.contacts}></Contact>
        </Section>
      </>
    );
  }
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework template
  //   </div>
  // );
}
