import React, { useContext } from 'react';

type Card<T, N> = {
  [key: string]: T | N;
};
type ReqData = Card<string, number>[];
type GlobalContent = {
  modalCtxData: ReqData;
  setModalCtxData: (docs: ReqData) => void;
  page: string;
  setPage: (v: string) => void;
};
export const GlobalContext = React.createContext<GlobalContent>({
  modalCtxData: [],
  setModalCtxData: (docs: ReqData) => {},
  page: '1',
  setPage: () => {},
});
export const useGlobalContext = () => useContext(GlobalContext);
