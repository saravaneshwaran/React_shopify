import React, { useState } from "react";
import Card from "./compontents/Card";
import NavBar from "./compontents/NavBar";
import Header from "./compontents/Header";


function App() {
  let[cartValue,setcartValue] = useState(0)
  return <>
   <NavBar cartValue={cartValue}/>
   <Header/>
   <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <Card setcartValue={setcartValue}/>
                  <Card setcartValue={setcartValue}/>
                  <Card setcartValue={setcartValue}/>
                  <Card setcartValue={setcartValue}/>
                  <Card setcartValue={setcartValue}/>
                  <Card setcartValue={setcartValue}/>
                
                </div>
            </div>
    </section>
  </>
}

export default App;
