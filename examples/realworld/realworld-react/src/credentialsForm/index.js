import { createActions } from "realworld-common/src/credentialsForm/actions";
import { createView } from "./view";

export const credentialsForm = {
  create: (update, options, callback) => {
    return createView(
      createActions(update, callback),
      options
    );
  }
};