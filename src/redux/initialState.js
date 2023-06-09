const initialState = {
  posts: [
    {
      id: '1',
      title: 'Sky Rocket',
      shortDescription: 'Short description of the article...',
      content: 'Sky Rocket is a term that can refer to a few different things, depending on the context. Generally, the term refers to something that rises or increases quickly, often in a dramatic or impressive way...',
      publishedDate: '11-02-2022',
      author: 'John Doe',
      category: 'engineering',
    },
    {
      id: '2',
      title: 'New AI system',
      shortDescription: 'Short description of the article...',
      content: 'AI stands for Artificial Intelligence. It refers to the ability of machines or computer programs to perform tasks that would typically require human intelligence, such as understanding natural language...',
      publishedDate: '14-10-2023',
      author: 'Antony Stark',
      category: 'technology',
    },
    {
      id: '3',
      title: 'Best way to learn React',
      shortDescription: 'Short description of the article...',
      content: 'The best way to learn React depends on your learning style and goals. However, some common approaches include starting with the basics, such as learning the syntax and core concepts, and few other...',
      publishedDate: '20-12-2019',
      author: 'Will Kowalski',
      category: 'programming',
    },
  ],
  categories: ['engineering', 'technology', 'programming'],
};
export default initialState;
