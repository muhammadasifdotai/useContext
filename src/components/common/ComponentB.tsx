// import React, { useContext } from "react";
// import { Text, View } from "react-native";
// import { MyContext } from "../../../App";

// export default function ComponentB(): JSX.Element {
//     const values = useContext(MyContext)
//     return (
//         <View>
//             <Text>First of all I wanna say: {values}</Text>
//         </View>
//     )
// }



// Test
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { myContext } from "../../../App";

export default function ComponentB(): JSX.Element {
    const values = useContext(myContext)

    return (
        <View>
            <Text>My name is Asif {values}</Text>
        </View>
    )
}