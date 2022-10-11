import * as React from "react";
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

/**
 * Create a client which is accessible all over the app.
 */
const client = new QueryClient();

/**
 * Prepare the skeleton with client for the provider.
 */
const appSkeleton = <React.StrictMode>
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
</React.StrictMode>;

ReactDOM.render(
  appSkeleton,
  document.getElementById("app")
);
