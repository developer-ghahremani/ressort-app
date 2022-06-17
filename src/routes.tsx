import { Bucket, Home, ResortDetail } from "./pages";

import { pageNames } from "./constant";

const routes: { path: string; element: JSX.Element }[] = [
  { element: <Home />, path: pageNames.home },
  { element: <Bucket />, path: pageNames.bucket },
  { element: <ResortDetail />, path: pageNames.resortDetail },
];
export default routes;
