import { useEffect } from 'react';
import useCommittedRef from '@restart/hooks/useCommittedRef';

/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * @public
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */
function useInterval(fn: () => void, ms: number): void;

/**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * @public
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */
function useInterval(fn: () => void, ms: number, paused: boolean): void;

/**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * @public
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 */
function useInterval(
  fn: () => void,
  ms: number,
  paused: boolean,
  runImmediately: boolean
): void;

function useInterval(
  fn: () => void,
  ms: number,
  paused = false,
  runImmediately = false
): void {
  let handle: number;
  const fnRef = useCommittedRef(fn);
  // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
  const pausedRef = useCommittedRef(paused);
  const tick = () => {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  const schedule = () => {
    clearTimeout(handle);
    handle = setTimeout(tick, ms) as any;
  };

  useEffect(() => {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }
    return () => clearTimeout(handle);
  }, [paused, runImmediately]);
}

export default useInterval;
