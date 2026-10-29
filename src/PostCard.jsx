import React, { useState } from "react";

function PostCard(props) {
  const { title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`${
        clicked ? "bg-blue-100" : "bg-white"
      } p-6 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer`}
    >
      <h2 className="font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

export default PostCard;

