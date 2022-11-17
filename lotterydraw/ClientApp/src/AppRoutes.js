import { LatestResults } from "./pages/LatestResults";
import { OpenDraw } from "./pages/OpenDraw";

// this component defines pages for navigation and routing
const AppRoutes = [
    {
        index: true,
        element: <LatestResults />
    },
    {
        path: '/OpenDraw',
        element: <OpenDraw />
    }
];

export default AppRoutes;
