const users = [
  { username: 'artem', email: 'artem@gmail.com' },
  { username: 'bird', email: 'bird123@gmail.com' },
  { username: 'doctor', email: 'alex.doctor@mail.com' },
]

const reactions = [
  { reactionBody: 'Yeah', username: 'artem' },
  { reactionBody: 'Probably', username: 'bird' },
  { reactionBody: 'I hope it\'s correct', username: 'doctor' },
]

const thoughts = [
  { thoughtText: 'This is an amazing day!', username: 'artem', reactions: [reactions[0]] },
  { thoughtText: 'I like frontend more than backend', username: 'bird', reactions: [reactions[1]] },
  { thoughtText: 'Ypu need to define this variable', username: 'doctor', reactions: [reactions[2]] },
]

module.exports = { users, thoughts }