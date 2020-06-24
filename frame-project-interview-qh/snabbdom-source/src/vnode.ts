import {Hooks} from "./hooks";
import {AttachData} from "./helpers/attachto";
import {VNodeStyle} from "./modules/style";
import {On} from './modules/eventlisteners';
import {Attrs} from "./modules/attributes";
import {Classes} from "./modules/class";
import {Props} from "./modules/props";
import {Dataset} from "./modules/dataset";
import {Hero} from "./modules/hero";
import {VNodeData} from "../../../frame-project-interview/snabbdom-source/src/vnode";

export type key = string | number;
export interface VNode {
  sel:string | undefined;
  data:VNodeData | undefined;
  children:Array<VNode | string> | undefined;
  elm:Node | undefined;
  text:string | undefined;
  key: key | undefined;
}

export interface VNodeData {
  props?:Props;
  attrs?:Attrs;
  class?:Classes;
  style?:VNodeStyle;
  dataset?:Dataset;
  on?:On;
  hero?:Hero;
  ns?:string;// for SVGs
  fn?:() => VNode;// for thunks
  args?:any[];// for thunks
  [key:string]:any;// for any other 3rd party module
}

export function vnode(sel:string | undefined,
                      data:any|undefined,
                      children:Array<VNode | string> | undefined,
                      text:string | undefined,
                      elm:Element | Text | undefined):VNode {
  let key = data  === undefined ? undefined:data.key;
  return {sel,data,children,text,elm,key}
}

export default vnode;
