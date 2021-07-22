import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../app'

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/', (req, res, ctx) => {
    return res(ctx.json({ results: [{ name: "test" }] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing API effect', () => {
  test('app should fetch', async () => {
    render(<App />);

    let data = await waitFor(() => screen.getByTestId('method'));
    expect(data).toHaveTextContent('GET');
  });
});

describe('test the App component', () => {
  test('Assert that upon submitting the form will result in data being rendered in the output area', async () => {

    // See a UI, needs a form
    render(<App />);// show the UI on the screen

    // UI should have a submission button
    const button = screen.getByTestId('formSubmit');
    const data = screen.getByTestId('resultsData');
    
    // regardless of input, button is clicked and data is rendered
    fireEvent.click(button);
    expect(data).toHaveTextContent('');
  });
});
