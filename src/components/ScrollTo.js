import {scrollTo} from '../utils/scroll';

const ScrollTo = ({ toId, toRef, duration = 1000, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });
  
  return <button onClick={handleClick}>{children}</button>;
};

export default ScrollTo;
