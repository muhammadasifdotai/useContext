// without Destructing

// import React from 'react';
// import { View, Text } from 'react-native';

// export default function ChildComponent(props): JSX.Element {
//   return (
//     <View>
//       <Text>{props.title}</Text>
//       <Text>{props.description}</Text>
//     </View>
//   );
// };


// with destructing
// import React from 'react';
// import { View, Text } from 'react-native';

// export default function ChildComponent({ title, description }): JSX.Element{
//   return (
//     <View>
//       <Text>{title}</Text>
//       <Text>{description}</Text>
//     </View>
//   );
// };



// Example with PropTypes
// import React from 'react';
// import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';

// export default function ChildComponent({ title, description }): JSX.Element{
//   return (
//     <View>
//       <Text>{title}</Text>
//       <Text>{description}</Text>
//     </View>
//   );
// };

// ChildComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
// };



// Example with PropTypes
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// Define the type for the props
type ChildComponentProps = {
  title: string;
  description?: string;
};

// Use the type in the component
export default function ChildComponent({ title, description }: ChildComponentProps): JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

// Define propTypes for runtime type checking (optional with TypeScript)
ChildComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
