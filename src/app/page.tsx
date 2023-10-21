import dynamic from "next/dynamic";

const App = dynamic(() => import("@/app/App"), { ssr: false });

const Page = () => <App />;

export default Page;
