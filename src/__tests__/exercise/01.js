// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<Counter />, div)

  const [decrement, increment] = div.querySelectorAll('button')

  const mouseEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: false,
    button: 0,
  })

  const messageDiv = div.firstChild.querySelector('div')

  expect(messageDiv.textContent).toBe('Current count: 0')

  increment.dispatchEvent(mouseEvent)

  expect(messageDiv.textContent).toBe('Current count: 1')

  decrement.dispatchEvent(mouseEvent)

  expect(messageDiv.textContent).toBe('Current count: 0')

  div.remove()
})

/* eslint no-unused-vars:0 */
