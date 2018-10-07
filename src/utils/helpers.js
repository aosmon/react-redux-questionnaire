export function formatQuestion ( question, author, authedUser ) {

  const { id, optionOne, optionTwo, timestamp } = question
  const { name, avatarURL } = author

  return {
    author: name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOne: {
      text: optionOne.text,
    },
    hasAnswered: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
  }
}