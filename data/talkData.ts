interface Talk {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const talkData: Talk[] = [
  {
    title: 'Hello World Project',
    description: `This is a simple hello world program. It prints "Hello, World!" to the console.
    It is a simple program that demonstrates the basic syntax of a programming language.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Hello World Project 2',
    description: `This is a simple hello world program. It prints "Hello, World!" to the console.
    It is a simple program that demonstrates the basic syntax of a programming language.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default talkData
