import React, { useState, useEffect, useReducer } from 'react';
import SearchBar from './searchBar';
import CardContent from './cardsContent';
import { headers, getUrl, getDataWithId } from '../services/urlManipulations';
import { useGlobalContext } from '../components/globalState';
import Pagination from '../components/pagination';
// type Props = {
//   [key: string]: string;
// };
// type States<S, R, B> = {
//   [key: string]: S | R | B;
// };
type Card<T, N> = {
  [key: string]: T | N;
};
type ReqData = Card<string, number>[];

enum ActionKind {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILURE = 'FETCH_FAILURE',
}

// An interface for our actions
interface FetchAction {
  type: ActionKind;
  payload: { category: string; data: ReqData };
}

// An interface for our state
interface InitialState {
  category: string;
  reqData: ReqData;
  isSuccsessReq: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  category: '',
  reqData: [],
  isSuccsessReq: false,
  isError: false,
};

// Our reducer function that uses a switch statement to handle our actions
function dataFetchReducer(state: InitialState, action: FetchAction) {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.FETCH_INIT:
      return {
        category: payload.category,
        isSuccsessReq: true,
        isError: false,
        reqData: payload.data,
      };
    case ActionKind.FETCH_SUCCESS:
      return {
        category: payload.category,
        isSuccsessReq: false,
        isError: false,
        reqData: payload.data,
      };
    case ActionKind.FETCH_FAILURE:
      return {
        category: payload.category,
        reqData: payload.data,
        isSuccsessReq: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}

function MainParent() {
  // State property
  const [inputValue, setInputValue] = useState(() => {
    const saved = localStorage.getItem('inputValue');
    return saved || 'book';
  });
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  const [query, setQuery] = useState(inputValue);
  const { setModalCtxData, page, setPage } = useGlobalContext();
  // Save data in localStorage
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: ActionKind.FETCH_INIT,
        payload: {
          category: '',
          data: [],
        },
      });
      try {
        const res = await fetch(getUrl(String(query), page), {
          headers: headers,
        });
        const { docs } = await res.json();
        console.log(docs);
        dispatch({ type: ActionKind.FETCH_SUCCESS, payload: { category: query, data: docs } });
      } catch (err) {
        dispatch({
          type: ActionKind.FETCH_FAILURE,
          payload: {
            category: '',
            data: [],
          },
        });
      }
    };
    fetchData();
  }, [query, page]);
  // Handling input value
  function setInputValueForm(e?: React.FormEvent<HTMLInputElement>) {
    if (e) {
      setInputValue(e.currentTarget.value);
    } else {
      setInputValue('');
      localStorage.setItem('inputValue', '');
    }
  }
  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInputValueForm(e);
  }
  function handleClick() {
    setInputValueForm();
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == 'Enter') {
      setQuery((e.target as HTMLInputElement).value);
    }
  }

  function modalClickHandler(e: React.MouseEvent<HTMLElement>) {
    const target = e.target;
    const div = (target as HTMLElement).closest('.card-container');
    if (div) {
      getDataWithId(String(state.category), String(div?.id)).then((data) => {
        const { docs } = data;
        setModalCtxData(docs);
      });
    }
  }
  function pageHandler(e: React.MouseEvent<HTMLElement>) {
    const target = e.target;
    const page = (target as HTMLAnchorElement).textContent;
    setPage(String(page));
  }
  return (
    <div className="products-container">
      <SearchBar
        inputValue={inputValue as string}
        handleChange={handleChange}
        handleClick={handleClick}
        onKeyDown={onKeyDown}
      />
      <CardContent
        category={state.category}
        modalClickHandler={modalClickHandler}
        reqData={state.reqData as ReqData}
        isSuccsessReq={!!state.isSuccsessReq}
        error={!!state.isError}
      />
      {state.category == 'character' && <Pagination pageHandler={pageHandler}></Pagination>}
    </div>
  );
}

export default MainParent;
