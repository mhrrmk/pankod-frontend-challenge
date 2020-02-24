This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Build the project:

```bash
npm run build
```

Then start a local server for production build

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## File Structure (roughly)
```
-pages
-public
-src
  |-Components
  | |-MyComponent       -> Component's own folder
  | | |-MyComponent.js  -> Component code
  | | |-Styled.js       -> [styled-component]'s for the component
  | | |-index.js
  | :
  | |-Styled -> Shared [styled-component]'s
  | | |-MyStyledComponent
  | | | |-MyStyledComponent.js
  | | | |-index.js
  | | :
  |-Constants
  |-Utils
  |-State                 -> Custom hooks for state management
  | |-useDataState.js     -> Manages state for data fetching
  | |-useContentState.js  -> Manages state for showing data
```

## Custom hooks

```javascript
export  function  useContentState(){
	const [state, dispatch] =  useReducer(reducer, initialState)
	return [state, dispatch, actions, sortOptions]
}
```

### actions
A collection of possible values to be used in an action as `type` property
### sortOptions
A collection of possible values to be used in an action as `payload` property