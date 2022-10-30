import { render, screen } from '@testing-library/react';
import DeliveryParent from '../components/deliveryParent';
describe('React forms testing', () => {
  it('should delivery page rendering', () => {
    const { container } = render(<DeliveryParent />);
    container.querySelector('.delivery-container');
    expect(container).toBeInTheDocument();
  });
  it('should form rendering', () => {
    const { container } = render(<DeliveryParent />);
    container.querySelector('.delivery-form');
    expect(container).toBeInTheDocument();
  });
  it('should render input in form', () => {
    const { container } = render(<DeliveryParent />);
    container.querySelector('.search-input');
    expect(container).toBeInTheDocument();
  });
  it('should render date input', () => {
    const { container } = render(<DeliveryParent />);
    container.querySelector('.delivery-date');
    expect(container).toBeInTheDocument();
  });
  it('should render select ', () => {
    render(<DeliveryParent />);
    expect(screen.getAllByRole('option').length).toBe(3);
  });
});
