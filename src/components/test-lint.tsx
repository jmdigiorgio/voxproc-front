import { useState, KeyboardEvent } from 'react';

interface TestComponentProps {
  title: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ title }) => {
  const [state, setState] = useState<number>(0);

  const handleClick = (): void => {
    setState(state + 1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${title} counter: ${state}`}
    >
      {title}: {state}
    </div>
  );
}; 