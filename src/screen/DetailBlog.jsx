import React from "react";

const DetailBlog = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="p-5 bg-white w-full rounded shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1648941902569-0132563ee5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="img"
            className="w-full h-96 object-cover"
          />
          <div className="m-3">
            <h3 className="text-2xl font-medium mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              quaerat rem quisquam doloribus consequuntur nisi, laudantium, at
              natus quibusdam dolore quasi veritatis ipsa nesciunt illum
              voluptate cupiditate, labore ullam hic adipisci explicabo veniam
              reprehenderit. Perferendis enim aliquid porro vel temporibus atque
              aut aspernatur sapiente iusto, adipisci sed inventore cumque nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
