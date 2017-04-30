import m from "mithril";

export const createView = update => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return m("nav.navbar.navbar-light",
      m(".container",
        m("a.navbar-brand[href='index.html']", "conduit"),
        m("ul.nav.navbar-nav.pull-xs-right",
          // Add "active" class when you're on that page"
          m("li.nav-item.active",
            m("a.nav-link[href='/']", { oncreate: m.route.link }, "Home")
          ),
          m("li.nav-item",
            m("a.nav-link[href='']",
              m("i.ion-compose", m.trust("&nbsp;New Post"))
            )
          ),
          m("li.nav-item",
            m("a.nav-link[href='']",
              m("i.ion-gear-a", m.trust("&nbsp;Settings"))
            )
          ),
          m("li.nav-item",
            m("a.nav-link[href='/register']", { oncreate: m.route.link }, "Sign up")
          )
        )
      )
    );
  }
});