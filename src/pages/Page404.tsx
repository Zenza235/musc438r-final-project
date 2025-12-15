import { Header } from "../components";

function Page404() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="font-bold text-ivory text-center text-3xl">404</h1>
        <h2 className="text-ivory text-center text-2xl">Page Not Found</h2>
      </div>
    </>
  );
}

export default Page404;