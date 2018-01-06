import React from 'react'

const TotalCount = ( {opinions} ) => {
  const sum = opinions.reduce((previous, current) => {
    return previous + current.agreementCount
  }, 0)
  return (
    <div>
      現在の総投票数は{sum}票です。
    </div>
  )
}

export default TotalCount