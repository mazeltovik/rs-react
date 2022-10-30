import React, { useRef, useState } from 'react';
import DeliveryContent from './deliveryContent';
type CardsObj<T, U> = {
  [key: string]: T | U;
};
export default function DeliveryParent() {
  const formRef = useRef<HTMLFormElement>(null);
  const [cards, setCards] = useState<CardsObj<string, boolean>[]>([]);
  const [validName, setValidName] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);
  const [saveData, isSaveData] = useState(false);
  function validateName(name: string) {
    const validName = /[\d+\+\=\-\*\/!@#$%^&*()?,."'\[\]]/;
    return !validName.test(name) && !!name;
  }
  function validateDate(date: Date) {
    return date > new Date();
  }
  function clearFormValues(options: CardsObj<HTMLInputElement, HTMLSelectElement>) {
    options.nameInputValue.value = '';
    options.dateInputDate.value = '';
    options.selectData.value = 'Germany';
    (options.isConsentData as HTMLInputElement).checked = false;
    (options.personalDataEmail as HTMLInputElement).checked = true;
    (options.personalDataPhone as HTMLInputElement).checked = false;
    (options.personalDataMail as HTMLInputElement).checked = false;
    options.file.value = '';
  }
  function showSaveData() {
    isSaveData(true);
    setTimeout(() => {
      isSaveData(false);
    }, 3000);
  }
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const arr = [...cards];
    const form = formRef.current;
    const nameInputValue = form![0] as HTMLInputElement;
    const dateInputDate = form![1] as HTMLInputElement;
    const selectData = form![2] as HTMLSelectElement;
    const isConsentData = form![3] as HTMLInputElement;
    const personalDataEmail = form![4] as HTMLInputElement;
    const personalDataPhone = form![5] as HTMLInputElement;
    const personalDataMail = form![6] as HTMLInputElement;
    const file = form![7] as HTMLInputElement;
    //Проверка валидации имени
    setValidName(validateName(nameInputValue.value));
    //Проверка валидации даты
    setValidDate(validateDate(new Date(dateInputDate.value)));
    if (validateName(nameInputValue.value) && validateDate(new Date(dateInputDate.value))) {
      setIsSubmitDisable(false);
      const stateProp = {
        nameInputValue: nameInputValue.value,
        dateInput: dateInputDate.value,
        selectData: selectData.value,
        isConsentData: isConsentData.checked,
        contactData: [personalDataEmail, personalDataPhone, personalDataMail].filter(
          (v) => v.checked
        )[0].value,
        file: file.value ? URL.createObjectURL(file.files![0]) : '',
      };
      arr.push(stateProp);
      setCards(arr);
      clearFormValues({
        nameInputValue,
        dateInputDate,
        selectData,
        isConsentData,
        personalDataEmail,
        personalDataPhone,
        personalDataMail,
        file,
      });
      showSaveData();
      setIsSubmitDisable(true);
    }
    setIsSubmit(true);
  }
  function onChangeInputHandler() {
    const form = formRef.current;
    const nameInputValue = form![0] as HTMLInputElement;
    nameInputValue.value ? setIsSubmitDisable(false) : setIsSubmitDisable(true);
  }
  return (
    <div className="delivery-container">
      <form ref={formRef} className="delivery-form" onSubmit={submitHandler}>
        <input
          onChange={onChangeInputHandler}
          type="text"
          className="search-input"
          placeholder="Enter your first name"
          name="nameInput"
        ></input>
        {!validName && isSubmit && <p className="danger">Don`t valid name</p>}
        <p>Choose your date of delivery:</p>
        <input type="date" className="delivery-date"></input>
        {!validDate && isSubmit && <p className="danger">Please enter correct date</p>}
        <p>Choose your country:</p>
        <select>
          <option value="Germany">Germany</option>
          <option value="Canada">Canada</option>
          <option value="Belarus">Belarus</option>
        </select>
        <p>
          <label htmlFor="delivery-checkbox">I consent to my personal data:</label>{' '}
          <input type="checkbox" id="delivery-checkbox" defaultChecked={false}></input>
        </p>
        <p>Please select your preferred contact method:</p>
        <div className="delivery-radio">
          <input
            type="radio"
            id="contactChoice1"
            name="contact"
            defaultValue={'Email'}
            defaultChecked
          ></input>
          <label htmlFor="contactChoice1">Email</label>
          <input type="radio" id="contactChoice2" name="contact" defaultValue={'Phone'}></input>
          <label htmlFor="contactChoice2">Phone</label>
          <input type="radio" id="contactChoice3" name="contact" defaultValue={'Mail'}></input>
          <label htmlFor="contactChoice3">Mail</label>
        </div>
        <input type="file" />
        <input
          type="submit"
          className="delivery-submit"
          defaultValue={'Submit'}
          disabled={isSubmitDisable ? true : false}
        ></input>
        {validName && validDate && isSubmit && saveData && (
          <p className="saveData">Data has saved</p>
        )}
      </form>
      <DeliveryContent cards={cards} />
    </div>
  );
}
