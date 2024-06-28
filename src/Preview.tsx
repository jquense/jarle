import ErrorBoundary from './ErrorBoundary.js';
import { useElement, useError } from './Provider.js';

/**
 * The component that renders the user's code.
 */
const Preview = ({
  className,
  showLastValid = true,
  preventLinks = true,
  ...props
}: {
  className?: string;
  /**
   * Whether an error should reset the preview to an empty state or keep showing the last valid code result.
   */
  showLastValid?: boolean;
  /**
   * Prevent links from navigating when clicked.
   */
  preventLinks?: boolean;
}) => {
  const element = useElement();
  const error = useError();

  // prevent links in examples from navigating
  const handleClick = (e: any) => {
    if (preventLinks && (e.target.tagName === 'A' || e.target.closest('a')))
      e.preventDefault();
  };

  const previewProps = {
    role: 'region',
    'aria-label': 'Code Example',
    ...props,
  };

  return !showLastValid && error ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <div className={className} onClick={handleClick} {...previewProps}>
      <ErrorBoundary element={element} showLastValid={showLastValid} />
    </div>
  );
};

export default Preview;
