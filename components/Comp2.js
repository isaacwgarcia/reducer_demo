import React from "react";
import { Box } from "@material-ui/core";

import { useAppContext } from "../components/state/AppContext";
import { useDispatchContext } from "../components/state/AppContext";

export default function Comp2() {
  const context_app = useAppContext();
  const dispatch_app = useDispatchContext();
  return (
    <>
      <Box>
        Comp 2
        <button
          onClick={() => {
            dispatch_app({
              type: "ADD",
            });
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            dispatch_app({
              type: "MINUS",
            });
          }}
        >
          MINUS
        </button>
      </Box>
      <br />
      {context_app.value} {/*  ACCESING GLOBAL STATE USING context_app */}
    </>
  );
}
