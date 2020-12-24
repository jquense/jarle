export default function createTimers() {
  let handles = new Map<number, () => void>();
  const clear = (fn: any) => (id: any) => {
    handles.delete(id);
    fn(id);
  };
  const set = (fn: any, fn2: any) => (...args: any[]) => {
    let handle = fn(...args);
    handles.set(handle, () => fn2(handle));
    return handle;
  };
  return [
    () => {
      handles.forEach((value) => value());
      handles.clear();
    },
    {
      setTimeout: set(setTimeout, clearTimeout),
      clearTimeout: clear(clearTimeout),
      setInterval: set(setInterval, clearInterval),
      clearInterval: clear(clearInterval),
      requestAnimationFrame: set(requestAnimationFrame, cancelAnimationFrame),
      cancelAnimationFrame: clear(cancelAnimationFrame),
    },
  ] as const;
}
