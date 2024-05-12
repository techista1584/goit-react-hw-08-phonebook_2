import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import { authSelectors } from '../redux/auth';
import { Logo } from '../Logo/Logo';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';


class ContactsView extends Component {
    componentDidMount(){
      if(!this.props.isAuthenticated){
        this.props.history.replace('/login')
        return
      }
        this.props.onFetchContacts();
      }
    componentDidUpdate(){
      if(!this.props.isAuthenticated){
        this.props.history.replace('/login')
        return
      }
    }  
    render(){
    return(
    <>
        <Logo name={'Phonebook'}/>
        <ContactForm/>
        <Filter/>
        <ContactList/>
    </>)}
}

const mapStateToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
    isAuthenticated: authSelectors.isAuthenticated(state)
  })
  
  const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView)