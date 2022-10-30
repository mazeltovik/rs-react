type Props = {
  pageHandler: (e: React.MouseEvent<HTMLElement>) => void;
};
export default function Pagination(props: Props) {
  return (
    <div className="pages-container" onClick={props.pageHandler}>
      <a>1</a>
      <a>2</a>
      <a>3</a>
      <a>4</a>
      <a>5</a>
      <a>6</a>
      <a>7</a>
      <a>8</a>
      <a>9</a>
    </div>
  );
}
