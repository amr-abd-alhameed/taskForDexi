const Messages = (props) => {
  const messagesMapper = {
    0: "Just Start And Just Do It ",
    1: "Keep Going",
    2: "Almost There",
    3: "You Just Finshed",
  };
  return <code> {messagesMapper[props.state]}</code>;
};

export default Messages;
