// // jub hum component bnaty hay to humay props denay prtay hay.

// // UseContext: ko use krtay hay fixed values ko bhejanay kay value zayada values ko manipulate nhi kr saktay hay.
// // ... phir dosara hook used krtay hay jis ka nam hay. reducer, phir jub or zayada complex ho jata hay to 
// // ... redux used krtay hay.


// // This example is get from engineerCode walla
// import React, { createContext } from "react";
// import { View } from "react-native";
// import ComponentA from "./src/components/common/ComponentA";

// let x = 'Alhamdulillah'
// // ya jo name rakha hay value ko create krnay kay leyee yahi same name use krain gay value ko get or use krnay kay leyee, is leyee hum is ko globally export kr lain gay.
// export const MyContext = createContext()
// // jub bhi humay value bhejani hay to humay createContext ka return may use kr kay context create krna pray ga.
// // us context ki help say hum provide krain gay value ko saray component kay ander.

// // myContext may aik method hota hay Provider wo saray view ko parent or child dono ko wrapup kr deta hay.
// // provider: value provide kray ga. jo kay ap puray component may used kr saktay hay.

// export default function App(): JSX.Element {
//   return (
//     <MyContext.Provider value={x}>
//       <View>
//       <ComponentA />
//     </View>
//     </MyContext.Provider>
//   )

// }

import React, { createContext } from "react";
import { View } from "react-native";
import ComponentA from "./src/components/common/ComponentA";

const x = 'Muhammad Asif'

export const myContext = createContext()

export default function App():JSX.Element {
  return (
    <myContext.Provider value={x}>
      <View>
      <ComponentA/>
    </View>
    </myContext.Provider>
  )
}