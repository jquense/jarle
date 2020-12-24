import { Position, Node as AcornNode } from 'acorn';
import MagicString from 'magic-string';

export type Node = AcornNode & { [other: string]: any };

export type VisitorFn = <TNode extends Node = any>(
  this: MagicString,
  node: TNode,
  parent: Node
) => void;

export type NormalVisitor = { enter?: VisitorFn; leave?: VisitorFn };

export type Visitor = VisitorFn | NormalVisitor;

export type PluginOptions = {};

export type VisitorMap = Record<string, Visitor>;

export type Plugin = {
  onComment?: (
    isBlock: boolean,
    text: string,
    start: number,
    end: number,
    startLoc?: Position,
    endLoc?: Position
  ) => void;
  visitor?: VisitorMap;
};
