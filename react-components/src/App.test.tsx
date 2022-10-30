import { render } from '@testing-library/react';
import App from './App';
describe('App testing', () => {
  it('should rendering app', () => {
    const { container } = render(<App />);
    container.querySelector('nav');
    expect(container).toBeInTheDocument();
  });
});
export {};
