import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders app.js and save', ()=>{
//   render(<App />);
//   const link = screen.getByText(/learn to relaod/i);
//   expect(link).toBeInTheDocument();
// });

test('check unordr list', () => { 
   render(<App />);
   const listitem = screen.getAllByRole('listitem');
   expect(listitem).toHaveLength(3);
 })


test("render title", ()=>{
  render(<App />);
  const sum= screen.getByTitle('sum');
  
  expect(sum.textContent).toBe("5");

})

test('render by testid', ()=>{
  render(<App />);
  const checkTest = screen.getByTestId('tests');
  expect(checkTest).toBeInTheDocument();
})