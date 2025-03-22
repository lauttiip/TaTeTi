export const Square = ({ children, updateBoard, isSelectd, index }) => {
    const className = `square ${isSelectd ? "is-selected" : ""}`;
  
    const handleClick = () => {
      updateBoard(index);
    };
  
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    );
  };