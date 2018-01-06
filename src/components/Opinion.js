import React from 'react'

const Opinion = ({opinion, onVoteClick}) => {
  return (
    <li>{opinion.description}
      <button onClick={onVoteClick}>{opinion.agreementCount}</button>
    </li>
  );
}

export default Opinion