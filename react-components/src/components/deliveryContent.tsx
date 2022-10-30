import UserIcon from './userIcon';
type CardsObj<T, U> = {
  [key: string]: T | U;
};
type DeliveryContent = {
  cards: CardsObj<string, boolean>[];
};
export default function DeliveryContent(props: DeliveryContent) {
  return (
    <div>
      {props.cards.length > 0 ? (
        <div className="delivery-cards">
          {props.cards.map((v, i) => {
            return (
              <div key={i} className="delivery-content">
                {v.file ? <img src={String(v.file)}></img> : <UserIcon />}
                <p>Name: {v.nameInputValue}</p>
                <p>Date of delivery: {v.dateInput}</p>
                <p>Country: {v.selectData}</p>
                <p>Is providing data: {v.isConsentData ? 'Yes' : 'Nope'}</p>
                <p>Contact method: {v.contactData}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="empty-deliver">Empty deliveries</p>
      )}
    </div>
  );
}
