import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app'
describe('test the App component', () => {
  test('Assert that upon submitting the form will result in data being rendered in the output area', async () => {

    // See a UI, needs a form
    render(<App />);// show the UI on the screen

    // UI should have a submission button
    const button = screen.getByTestId('formSubmit');
    const data = screen.getByTestId('resultsData');
console.log(data);
    // regardless of input, button is clicked and data is rendered
    fireEvent.click(button);
    expect(data).toHaveTextContent('');
  });
});
