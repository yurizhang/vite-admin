import { useState } from "react";
import { createModel } from 'hox';

/* 逻辑原样复制过来 */
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue ?? 0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return {
    count,
    decrement,
    increment
  };
}
/* 用 createModel 包一下就行 */
export default createModel(useCounter,10)
// const useCounterModelWithInitialValue = createModel(useCounter, 20);