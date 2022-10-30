import Menu from './menu';
const Shell = ({ children }: { children: JSX.Element }) => (
  <>
    <Menu />
    {children}
  </>
);

export default Shell;
