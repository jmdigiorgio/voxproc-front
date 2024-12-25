import { render, screen } from '@testing-library/react';

describe('Example Test', () => {
  it('should pass', () => {
    render(<div>Hello Test</div>);
    expect(screen.getByText('Hello Test')).toBeInTheDocument();
  });
});
