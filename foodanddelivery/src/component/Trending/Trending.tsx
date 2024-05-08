// const Trending = () => {
//   return (
//     <main className="px-6">
//       <h2 className="text-center text-3xl font-bold mb-6">
//         Get more from your neighborhood
//       </h2>

//       <section>
//         <div className="flex justify-around gap-10 mb-2 ">
//           <button className="text-xl font-semibold"> Top Cities</button>
//           <button className="text-xl font-semibold"> Top Cities</button>
//           <button className="text-xl font-semibold"> Top Cities</button>
//         </div>
//         <hr />

//         <div className="grid grid-cols-5 px-8 py-8 gap-4 text-black font-semibold">
//           <div className="col-span-1 p-1">New York</div>
//           <div className="col-span-1 p-1">Yangon</div>
//           <div className="col-span-1 p-1">Taunggyi</div>
//           <div className="col-span-1 p-1">Mandaly</div>
//           <div className="col-span-1 p-1">Sagaing</div>

//           <div className="col-span-1 p-1">Taunggyi</div>
//           <div className="col-span-1 p-1">Taunggyi</div>
//           <div className="col-span-1 p-1">Taunggyi</div>
//           <div className="col-span-1 p-1">Taunggyi</div>
//           <div className="col-span-1 p-1">Taunggyi1</div>

//           <div className="col-span-1 p-1">Yangon</div>
//           <div className="col-span-1 p-1">Yangon</div>
//           <div className="col-span-1 p-1">Yangon</div>
//           <div className="col-span-1 p-1">Yangon</div>
//           <div className="col-span-1 p-1">Yangon</div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Trending;


const Trending = () => {
  return (
    <main className="px-6">
      <h2 className="text-center text-3xl font-bold mb-6 mt-6">
        Get more from your neighborhood
      </h2>

      <section>
        <div className="flex justify-around gap-10 mb-2">
          <button className="text-xl font-semibold">Top Foods</button>
          <button className="text-xl font-semibold">Top Shops</button>
          <button className="text-xl font-semibold">Top Cities</button>
        </div>
        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 py-8 gap-4 text-black font-semibold">
          <div className="p-1">New York</div>
          <div className="p-1">Yangon</div>
          <div className="p-1">Taunggyi</div>
          <div className="p-1">Mandalay</div>
          <div className="p-1">Sagaing</div>
          <div className="p-1">Monywa</div>
          <div className="p-1">Mogok</div>
          <div className="p-1">TaungTha</div>
          <div className="p-1">Myingyan</div>
          <div className="p-1">Aungban</div>
          <div className="p-1">Meikhtila</div>
          <div className="p-1">Wundwin</div>
          <div className="p-1">Pizza</div>
          <div className="p-1">Burger</div>
          <div className="p-1">Yangon</div>
        </div>
      </section>
    </main>
  );
};

export default Trending;

