// import { render, screen, waitFor } from '@testing-library/react';
// import App from '../App';
// import SearchBar from '../components/searchBar';
// import SearchIcon from '../components/searchIcon';
// import SearchDelete from '../components/searchDelete';
// import CardContent from '../components/cardsContent';
// import { FormEvent, KeyboardEvent } from 'react';
// import { MouseEvent } from 'react';
// Object.defineProperty(window, 'localStorage', {
//   value: {
//     getItem: jest.fn(() => null),
//     setItem: jest.fn(() => null),
//   },
//   writable: true,
// });
// describe('React components testing', () => {
//   it('should rendering search bar component', () => {
//     render(
//       <SearchBar
//         inputValue={''}
//         handleChange={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         handleClick={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         onKeyDown={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );

//     expect(screen.getByPlaceholderText(/Please enter something/i)).toBeInTheDocument();
//   });
//   it('should rendering seacrh icon component', () => {
//     const { container } = render(<SearchIcon />);
//     const svgElem = container.querySelector('.search-icon') as SVGSVGElement;
//     expect(svgElem.classList.toString()).toBe('search-icon');
//   });
//   it('should rendering search delete component', () => {
//     const { container } = render(
//       <SearchDelete
//         clickHandler={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     const svgElem = container.querySelector('.search-delete') as SVGSVGElement;
//     expect(svgElem.classList.toString()).toBe('search-delete');
//   });
//   it('should rendering cards from api request', async () => {
//     render(
//       <CardContent
//         reqData={[]}
//         category={''}
//         isSuccsessReq={false}
//         isOpenModal={false}
//         error={false}
//         modalClickHandler={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         modalContent={[]}
//       />
//     );
//     await waitFor(() => expect(screen.getByText(/accent chair/i)).toBeInTheDocument());
//   });
//   it('should rendering menu component', () => {
//     render(<App />);
//     const [elem] = screen.getAllByRole('navigation');
//     expect(elem).toBeInTheDocument();
//   });
//   it('local storage mock', async () => {
//     render(
//       <SearchBar
//         inputValue={''}
//         handleChange={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         handleClick={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//         onKeyDown={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
//   });
// });
