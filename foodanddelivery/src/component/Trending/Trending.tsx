const Trending = () => {
  return (
    <main className="px-6">
      <h2 className="text-center text-3xl font-bold mb-6">
        Get more from your neighborhood
      </h2>

      <section>
        <div className="flex justify-around gap-10 mb-2 ">
          <button className="text-xl font-semibold"> Top Cities</button>
          <button className="text-xl font-semibold"> Top Cities</button>
          <button className="text-xl font-semibold"> Top Cities</button>
        </div>
        <hr />

        <div className="grid grid-cols-5 px-8 py-8 gap-4 text-black font-semibold">
          <div className="col-span-1 p-1">New York</div>
          <div className="col-span-1 p-1">Yangon</div>
          <div className="col-span-1 p-1">Taunggyi</div>
          <div className="col-span-1 p-1">Mandaly</div>
          <div className="col-span-1 p-1">Sagaing</div>

          <div className="col-span-1 p-1">Taunggyi</div>
          <div className="col-span-1 p-1">Taunggyi</div>
          <div className="col-span-1 p-1">Taunggyi</div>
          <div className="col-span-1 p-1">Taunggyi</div>
          <div className="col-span-1 p-1">Taunggyi1</div>

          <div className="col-span-1 p-1">Yangon</div>
          <div className="col-span-1 p-1">Yangon</div>
          <div className="col-span-1 p-1">Yangon</div>
          <div className="col-span-1 p-1">Yangon</div>
          <div className="col-span-1 p-1">Yangon</div>
        </div>
      </section>
    </main>
  );
};

export default Trending;
