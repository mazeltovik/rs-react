import React from 'react';
import Card from './card';
type Cards<T, N> = {
  [key: string]: T | N;
};
type ReqData = Cards<string, number>[];
type Props = {
  reqData: ReqData;
  category: string;
  isSuccsessReq: boolean;
  // isOpenModal: boolean;
  error: boolean;
  modalClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
};

function CardContent(props: Props) {
  const { reqData, isSuccsessReq, error, modalClickHandler, category } = props;
  return (
    <>
      {isSuccsessReq && (
        <div className="load">
          <div className="text">Loading...</div>
          <div className="ring"></div>
        </div>
      )}
      {error && <h5 className="error-message">Please enter correct data</h5>}
      <div className="cards-container" onClick={modalClickHandler}>
        {reqData?.map((v) => {
          return <Card key={String(v._id)} id={String(v._id)} name={String(v.name)} />;
        })}
      </div>
    </>
  );
}

export default CardContent;
