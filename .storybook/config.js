import { addDecorator, addParameters } from '@storybook/react'; // <- or your view layer
import { configure } from "@storybook/react";
// import { themes } from '@storybook/theming';
// import { withTests } from '@storybook/addon-jest';
// import results from '../.jest-test-results.json';
import requireContext from 'require-context.macro';


// addParameters({
//   options: {
//     theme: themes.light
//   }
// })
 
// addParameters({isToolshown: true,});

const req = requireContext('../src/components', true, /\.stories\.js|mdx$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
//   addDecorator(
//     withTests({
//       results,
//     })
//   );


// configure([
//   requireContext('../src/components', true, /\.stories\.js$/)
// ], module);