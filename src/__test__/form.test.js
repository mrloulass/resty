import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app'

test('Assert that upon submitting the form will result in data being rendered in the output area', async()=> {
render(<App/>);
const button = screen.getByTestId('formSubmit');
const data = screen.getByTestId('resultsData');
fireEvent.click(button);
expect(data).toHaveTextContent('')
})
