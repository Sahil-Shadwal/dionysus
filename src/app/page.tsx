import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <div>
      <div className="-z-10 flex h-screen items-center justify-center bg-orange-200">
        <div className="text-center">
          <h1 className="mb-4 text-3xl">Hello World</h1>
          <Button className="px-5">Click away!</Button>
        </div>
      </div>
    </div>
  );
}
