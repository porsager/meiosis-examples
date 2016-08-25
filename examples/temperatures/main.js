import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-react";
import meiosisTracer from "meiosis-tracer";
import Type from "union-type";

import FormComponent from "./form/main";

Type.check = false;

const renderRoot = run(renderer().intoId(document, "app"), FormComponent);
meiosisTracer(createComponent, renderRoot, "#tracer");