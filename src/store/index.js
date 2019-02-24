import Store from "./react-store";
const instance = new Store({});
export const store = {
  getState: instance.getState.bind(instance),
  dispatch: instance.dispatch.bind(instance),
  commit: instance.commit.bind(instance),
  registerModule: instance.registerModule.bind(instance),
  unregisterModule: instance.unregisterModule.bind(instance),
  addMutationHook: instance.addMutationHook.bind(instance),
  subscribe: instance.subscribe.bind(instance)
};
