# use-global-service

`use-global-service` is React hook.
This package aims to help users of React to use Singleton Service Class (implementing business logic)

## Installation

```shell
# npm
npm i use-global-service

# yarn
yarn add use-global-service
```

## Example

`App.js`

```jsx
import React from "react";
import { GlobalServiceProvider } from "use-global-service";

function App() {
  return (
    // Class stored by Map
    <GlobalServiceProvider>
      <div>hello world</div>
    </GlobalServiceProvider>
  );
}

export default App;
```

`businessClass.js or ts`

```js
class Business {
  constructor() {}

  work() {
    console.log("hello world");
  }
}

export default Business;
```

`AnyComponent.js`

```js
import { useEffect } from "react";
import { useGlobalService } from "use-global-service";
import Business from "./s";
function AnyComponent() {
  const business = useGlobalService(Business); // always singleton
  useEffect(() => {
    business.work();
  }, []);

  return <div></div>;
}
```
