import ErrorBoundary from './ErrorBoundary.js';
import { useElement, useError } from './Provider.js';

/**
 * The component that renders the user's code.
 */
const Preview = ({
  className,
  showLastValid = true,
  ...props
}: {
  className?: string;
  /**
   * Whether an error should reset the preview to an empty state or keep showing the last valid code result.
   */
  showLastValid?: boolean;
}) => {
  const element = useElement();
  const error = useError();

  // prevent links in examples from navigating
  const handleClick = (e: any) => {
    if (e.target.tagName === 'A' || e.target.closest('a')) e.preventDefault();
  };

  const previewProps = {
    role: 'region',
    'aria-label': 'Code Example',
    ...props,
  };

  return !showLastValid && error ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <div className={className} onClick={handleClick} {...previewProps}>
      <ErrorBoundary element={element} />
    </div>
  );
};

export default Preview;
