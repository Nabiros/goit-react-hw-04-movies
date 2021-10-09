import Spinner from "./components/Spinner/Spinner";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Navigation = lazy(() =>
  import(
    "./components/Navigation/Navigation" /* webpackChunkName: "Navigation" */
  )
);
const HomePage = lazy(() =>
  import("./Views/HomePageDetails" /* webpackChunkName: "HomePage" */)
);
const SearchBar = lazy(() =>
  import("./Views/SearchBarPage" /* webpackChunkName: "SearchBar" */)
);
const MoviesPageDetails = lazy(() =>
  import(
    "./Views/MoviesPageDetails" /* webpackChunkName: "MoviesPageDetails" */
  )
);
const NotFoundPage = lazy(() =>
  import("./Views/NotFoundPage" /* webpackChunkName: "NotFoundPage" */)
);

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:slug" component={MoviesPageDetails} />
          <Route path="/movies" component={SearchBar} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
