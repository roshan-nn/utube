import React from 'react';

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "pablo",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "ben",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "abel",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "john",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className='flex my-2'>
      <img
        className='w-8 h-8'
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies.length > 0 && (
        <div className='pl-5 ml-5 border-l border-black'>
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
