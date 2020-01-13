const bgColors = [
  'aliceblue',
  'aquamarine',
  'azure',
  'darkorange',
  'gold',
  'honeydew',
  'lavender',
  'lightgreen',
  'lightsalmon',
  'mediumaquamarine',
  'mediumspringgreen',
  'springgreen',
  'tomato',
  'wheat',
  'whitesmoke',
]

export default {
  black: '#000',
  bgColor: bgColors[Math.floor(Math.floor(Math.random() * bgColors.length))],
  white: '#FFF',
}
