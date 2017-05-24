import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const assoc = (prop, value) => model => {
  model[prop] = value;
  return model;
};

const merge = source => target => Object.assign(target, source);

const home = {
  name: "Home",
  create: update => model => (
    <div>Home Page</div>
  )
};

const login = {
  name: "Login",
  create: update => model => (
    <div>Login Page</div>
  )
};

const item = {
  name: "Item",
  create: update => model => (
    <div>Item Page - viewing item {model.params.id}</div>
  )
};

const app = {
  model: () => ({
  }),

  create: update => {
    const pages = {
      [home.name]: {
        view: home.create(update),
        handler: () => update(assoc("page", home.name))
      },
      [login.name]: {
        view: login.create(update),
        handler: () => update(assoc("page", login.name))
      },
      [item.name]: {
        view: item.create(update),
        handler: params => update(merge({ page: item.name, params }))
      },
      defaultPage: home.name
    };

    return model => {
      const currentPage = pages[model.page] ? model.page : pages.defaultPage;
      const page = pages[currentPage];
      const isActive = pageName => pageName === currentPage ? "active" : "";

      return (
        <div>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className={isActive("Home")}>
                <a href="#" onClick={pages.Home.handler}>Home</a>
              </li>
              <li className={isActive("Login")}>
                <a href="#" onClick={pages.Login.handler}>Login</a>
              </li>
              <li className={isActive("Item")}>
                <a href="#" onClick={() => pages.Item.handler({ id: "42" })}>Item 42</a>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Home.handler}>Home</button>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={pages.Login.handler}>Login</button>
              </li>
              <li className="btn">
                <button className="btn btn-default" onClick={() => pages.Item.handler({ id: 42 })}>Item 42</button>
              </li>
            </ul>
          </nav>
          {page.view(model)}
        </div>
      );
    };
  }
};

const initialModel = app.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
