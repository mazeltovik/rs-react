import { Link } from 'react-router-dom';

type Cards<T, N> = {
  [key: string]: T | N;
};

type Props = {
  page: string;
  modalContent: Cards<number, string>;
};

export default function ModalContent(props: Props) {
  const { modalContent, page } = props;
  const contentArr = Object.entries(modalContent).filter((v) => v[0] != '_id');
  return (
    <div>
      <div className="global-page">
        <h3>Current page is {page}</h3>
        <Link to="/">Back Home</Link>
      </div>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-left">
            <img className="modal-img"></img>
          </div>
          <div className="modal-right">
            {contentArr.map((v, i) => {
              return (
                <p key={i}>
                  {v[0]}: {v[1]}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
