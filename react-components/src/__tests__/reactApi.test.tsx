import { render, screen, fireEvent, waitFor, findByText } from '@testing-library/react';
import App from '../App';

describe('API testing', () => {
  it('should return book response', async () => {
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'book' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(await screen.findByText('The Fellowship Of The Ring')).toBeInTheDocument();
  });
  it('should return movie response', async () => {
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'movie' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(await screen.findByText('The Lord of the Rings Series')).toBeInTheDocument();
  });
  it('should return character response', async () => {
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'character' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(await screen.findByText('Adanel')).toBeInTheDocument();
  });
  it('should return book modal response', async () => {
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'book' } });
    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter', code: 'Enter', charCode: 13 });
    const elem = document.querySelector('.cards-container') as HTMLDivElement;
    fireEvent.click(elem);
    expect(await screen.findByText('page')).toBeInTheDocument();
    screen.debug();
  });
});
export {};
