function ArticlesView() {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/3">
        <div>
          <input
            className="focus:outline-none rounded-full b-2 px-6 py-2 bg-dark-box"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}

export default ArticlesView;
