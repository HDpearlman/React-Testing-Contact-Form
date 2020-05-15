import React from 'react'
import { render, fireEvent } from "@testing-library/react"
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils';
import App from './../App'
//input name 

test('inputs a name string', ()=>{
    
    
    // arrange grab input field
    const {getByPlaceholderText, getByLabelText, getByTestId} = render(<App/>);
    
    const firstName = getByPlaceholderText('Edd');
    const lastName = getByPlaceholderText('Burke')
    const email = getByPlaceholderText('bluebill1049@hotmail.com')
    const message = getByLabelText(/message/i)
    // act write in string

     fireEvent.change(firstName, {target:{value:'Frankie'}}) 
     fireEvent.change(lastName, {target: {value:'Vallie'}} )
     fireEvent.change(email, {target: {value:'frankVal@gmail.com'}})
      fireEvent.change(message, {target: {value:'hello from the tester'}})

    // asstert show that the field takes the string 
    const submitButton = getByTestId('tester')
    fireEvent.click(submitButton);
    
  })
  
  
  // maxlength wierd?
  
  
  //input last name

  // test('checks if form rendered', ()=>{
      
  //   const container = render(<ContactForm/>)

  //   expect(container)
  // })
  
  
  
  test('clicks submit button and checks submission for message', ()=>{
    const {getByTestId, getByText } = render(<ContactForm/>)
    const submitButton = getByTestId('tester')
    expect(submitButton)
    
   
    // fireEvent.click(submitButton)
   

    // const testMessage = getByText('hello from the tester');

    // expect(testMessage)
    
    

  //   act(()=>{
  //   fireEvent.click(submitButton);
  // });
  //   const testMessage = getByText('hello from the tester');

  //   expect(testMessage)

  })
  
  //see submition
  
 
  