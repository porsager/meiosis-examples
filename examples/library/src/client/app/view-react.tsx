import * as React from "react";
import { EventHandler, SyntheticEvent } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";

import { BookListModel, Model } from "./types";
import { circulationView } from "../circulation/view-react";
import { intents } from "./actions";

export const view = (model: Model): any => (
  <MuiThemeProvider>
    <div>
      <Tabs value="react" onChange={() => window.location.href="index-mithril.html"}>
        <Tab value="react" label="React + Material-UI version"/>
        <Tab value="mithril" label="Mithril + Bootstrap version"/>
      </Tabs>
      <Tabs value={model.tab} onChange={intents.tabChange}>
        <Tab value="circulation" label="Circulation">
          <div>Circulation</div>
          {circulationView(model.circulation)}
        </Tab>
        <Tab value="orders" label="Orders">
          <div>Orders</div>
        </Tab>
        <Tab value="repairs" label="Repairs">
          <div>Repairs</div>
        </Tab>
        <Tab value="books" label="All Books">
        </Tab>
        <Tab value="other" label="Something Else">
          <div>Coming soon</div>
          <div><a href="#/repairs">Repairs</a></div>
        </Tab>
      </Tabs>
      {/*views.progressDialog(model)*/}
    </div>
  </MuiThemeProvider>
);
