import * as React from "react";
import { useIES } from "@modules/home-page/contexts/ies.context";

const IesCounter: React.VFC = () => {
  const [{ counter }] = useIES();

  if (!counter || counter < 1) return null;

  return (
    <span className="absolute left-6 top-6 bg-primary rounded-md px-4 py-2 text-white font-semibold">
      {counter} {counter > 1 ? "resultados" : "resultado"}
    </span>
  );
};

export default IesCounter;
