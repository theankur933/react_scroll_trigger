import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center py-[15vh] gap-4 text-center text-white">
      <Card image="/images/1.png" />
      <Card image="/images/2.png" />
      <Card image="/images/3.png" />
      <Card image="/images/4.png" />
      <Card image="/images/5.png" />
      <Card image="/images/6.png" />
    </main>
  );
};

export default App;
