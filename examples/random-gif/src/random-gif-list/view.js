import m from "mithril";

export function view(components) {
  return function(state, actions) {
    const onAdd = evt => {
      evt.preventDefault();
      actions.addToRandomGifList();
    };

    const onRemove = id => evt => {
      evt.preventDefault();
      actions.removeFromRandomGifList(id);
    };

    const randomGif = id => {
      const component = components.randomGifComponents[id];

      return m("div", { key: id, style: "display: inline-block" }, [
        component.view(state),
        m("button.btn.btn-default.btn-xs", { onclick: onRemove(id) }, "Remove")
      ]);
    };

    return m("div", [
      m("div", [
        m("button.btn.btn-default.btn-xs", { onclick: onAdd }, "Add")
      ]),
      m("div", state.randomGifIds.map(randomGif))
    ]);
  };
}