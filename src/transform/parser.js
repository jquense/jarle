var ContextualKeyword$1; (function (ContextualKeyword) {
  const NONE = 0; ContextualKeyword[ContextualKeyword["NONE"] = NONE] = "NONE";
  const _abstract = NONE + 1; ContextualKeyword[ContextualKeyword["_abstract"] = _abstract] = "_abstract";
  const _accessor = _abstract + 1; ContextualKeyword[ContextualKeyword["_accessor"] = _accessor] = "_accessor";
  const _as = _accessor + 1; ContextualKeyword[ContextualKeyword["_as"] = _as] = "_as";
  const _assert = _as + 1; ContextualKeyword[ContextualKeyword["_assert"] = _assert] = "_assert";
  const _asserts = _assert + 1; ContextualKeyword[ContextualKeyword["_asserts"] = _asserts] = "_asserts";
  const _async = _asserts + 1; ContextualKeyword[ContextualKeyword["_async"] = _async] = "_async";
  const _await = _async + 1; ContextualKeyword[ContextualKeyword["_await"] = _await] = "_await";
  const _checks = _await + 1; ContextualKeyword[ContextualKeyword["_checks"] = _checks] = "_checks";
  const _constructor = _checks + 1; ContextualKeyword[ContextualKeyword["_constructor"] = _constructor] = "_constructor";
  const _declare = _constructor + 1; ContextualKeyword[ContextualKeyword["_declare"] = _declare] = "_declare";
  const _enum = _declare + 1; ContextualKeyword[ContextualKeyword["_enum"] = _enum] = "_enum";
  const _exports = _enum + 1; ContextualKeyword[ContextualKeyword["_exports"] = _exports] = "_exports";
  const _from = _exports + 1; ContextualKeyword[ContextualKeyword["_from"] = _from] = "_from";
  const _get = _from + 1; ContextualKeyword[ContextualKeyword["_get"] = _get] = "_get";
  const _global = _get + 1; ContextualKeyword[ContextualKeyword["_global"] = _global] = "_global";
  const _implements = _global + 1; ContextualKeyword[ContextualKeyword["_implements"] = _implements] = "_implements";
  const _infer = _implements + 1; ContextualKeyword[ContextualKeyword["_infer"] = _infer] = "_infer";
  const _interface = _infer + 1; ContextualKeyword[ContextualKeyword["_interface"] = _interface] = "_interface";
  const _is = _interface + 1; ContextualKeyword[ContextualKeyword["_is"] = _is] = "_is";
  const _keyof = _is + 1; ContextualKeyword[ContextualKeyword["_keyof"] = _keyof] = "_keyof";
  const _mixins = _keyof + 1; ContextualKeyword[ContextualKeyword["_mixins"] = _mixins] = "_mixins";
  const _module = _mixins + 1; ContextualKeyword[ContextualKeyword["_module"] = _module] = "_module";
  const _namespace = _module + 1; ContextualKeyword[ContextualKeyword["_namespace"] = _namespace] = "_namespace";
  const _of = _namespace + 1; ContextualKeyword[ContextualKeyword["_of"] = _of] = "_of";
  const _opaque = _of + 1; ContextualKeyword[ContextualKeyword["_opaque"] = _opaque] = "_opaque";
  const _out = _opaque + 1; ContextualKeyword[ContextualKeyword["_out"] = _out] = "_out";
  const _override = _out + 1; ContextualKeyword[ContextualKeyword["_override"] = _override] = "_override";
  const _private = _override + 1; ContextualKeyword[ContextualKeyword["_private"] = _private] = "_private";
  const _protected = _private + 1; ContextualKeyword[ContextualKeyword["_protected"] = _protected] = "_protected";
  const _proto = _protected + 1; ContextualKeyword[ContextualKeyword["_proto"] = _proto] = "_proto";
  const _public = _proto + 1; ContextualKeyword[ContextualKeyword["_public"] = _public] = "_public";
  const _readonly = _public + 1; ContextualKeyword[ContextualKeyword["_readonly"] = _readonly] = "_readonly";
  const _require = _readonly + 1; ContextualKeyword[ContextualKeyword["_require"] = _require] = "_require";
  const _satisfies = _require + 1; ContextualKeyword[ContextualKeyword["_satisfies"] = _satisfies] = "_satisfies";
  const _set = _satisfies + 1; ContextualKeyword[ContextualKeyword["_set"] = _set] = "_set";
  const _static = _set + 1; ContextualKeyword[ContextualKeyword["_static"] = _static] = "_static";
  const _symbol = _static + 1; ContextualKeyword[ContextualKeyword["_symbol"] = _symbol] = "_symbol";
  const _type = _symbol + 1; ContextualKeyword[ContextualKeyword["_type"] = _type] = "_type";
  const _unique = _type + 1; ContextualKeyword[ContextualKeyword["_unique"] = _unique] = "_unique";
  const _using = _unique + 1; ContextualKeyword[ContextualKeyword["_using"] = _using] = "_using";
})(ContextualKeyword$1 || (ContextualKeyword$1 = {}));

// Generated file, do not edit! Run "yarn generate" to re-generate this file.
/* istanbul ignore file */
/**
 * Enum of all token types, with bit fields to signify meaningful properties.
 */
var TokenType$1; (function (TokenType) {
  // Precedence 0 means not an operator; otherwise it is a positive number up to 12.
  const PRECEDENCE_MASK = 0xf; TokenType[TokenType["PRECEDENCE_MASK"] = PRECEDENCE_MASK] = "PRECEDENCE_MASK";
  const IS_KEYWORD = 1 << 4; TokenType[TokenType["IS_KEYWORD"] = IS_KEYWORD] = "IS_KEYWORD";
  const IS_ASSIGN = 1 << 5; TokenType[TokenType["IS_ASSIGN"] = IS_ASSIGN] = "IS_ASSIGN";
  const IS_RIGHT_ASSOCIATIVE = 1 << 6; TokenType[TokenType["IS_RIGHT_ASSOCIATIVE"] = IS_RIGHT_ASSOCIATIVE] = "IS_RIGHT_ASSOCIATIVE";
  const IS_PREFIX = 1 << 7; TokenType[TokenType["IS_PREFIX"] = IS_PREFIX] = "IS_PREFIX";
  const IS_POSTFIX = 1 << 8; TokenType[TokenType["IS_POSTFIX"] = IS_POSTFIX] = "IS_POSTFIX";
  const IS_EXPRESSION_START = 1 << 9; TokenType[TokenType["IS_EXPRESSION_START"] = IS_EXPRESSION_START] = "IS_EXPRESSION_START";

  const num = 512; TokenType[TokenType["num"] = num] = "num"; // num startsExpr
  const bigint = 1536; TokenType[TokenType["bigint"] = bigint] = "bigint"; // bigint startsExpr
  const decimal = 2560; TokenType[TokenType["decimal"] = decimal] = "decimal"; // decimal startsExpr
  const regexp = 3584; TokenType[TokenType["regexp"] = regexp] = "regexp"; // regexp startsExpr
  const string = 4608; TokenType[TokenType["string"] = string] = "string"; // string startsExpr
  const name = 5632; TokenType[TokenType["name"] = name] = "name"; // name startsExpr
  const eof = 6144; TokenType[TokenType["eof"] = eof] = "eof"; // eof
  const bracketL = 7680; TokenType[TokenType["bracketL"] = bracketL] = "bracketL"; // [ startsExpr
  const bracketR = 8192; TokenType[TokenType["bracketR"] = bracketR] = "bracketR"; // ]
  const braceL = 9728; TokenType[TokenType["braceL"] = braceL] = "braceL"; // { startsExpr
  const braceBarL = 10752; TokenType[TokenType["braceBarL"] = braceBarL] = "braceBarL"; // {| startsExpr
  const braceR = 11264; TokenType[TokenType["braceR"] = braceR] = "braceR"; // }
  const braceBarR = 12288; TokenType[TokenType["braceBarR"] = braceBarR] = "braceBarR"; // |}
  const parenL = 13824; TokenType[TokenType["parenL"] = parenL] = "parenL"; // ( startsExpr
  const parenR = 14336; TokenType[TokenType["parenR"] = parenR] = "parenR"; // )
  const comma = 15360; TokenType[TokenType["comma"] = comma] = "comma"; // ,
  const semi = 16384; TokenType[TokenType["semi"] = semi] = "semi"; // ;
  const colon = 17408; TokenType[TokenType["colon"] = colon] = "colon"; // :
  const doubleColon = 18432; TokenType[TokenType["doubleColon"] = doubleColon] = "doubleColon"; // ::
  const dot = 19456; TokenType[TokenType["dot"] = dot] = "dot"; // .
  const question = 20480; TokenType[TokenType["question"] = question] = "question"; // ?
  const questionDot = 21504; TokenType[TokenType["questionDot"] = questionDot] = "questionDot"; // ?.
  const arrow = 22528; TokenType[TokenType["arrow"] = arrow] = "arrow"; // =>
  const template = 23552; TokenType[TokenType["template"] = template] = "template"; // template
  const ellipsis = 24576; TokenType[TokenType["ellipsis"] = ellipsis] = "ellipsis"; // ...
  const backQuote = 25600; TokenType[TokenType["backQuote"] = backQuote] = "backQuote"; // `
  const dollarBraceL = 27136; TokenType[TokenType["dollarBraceL"] = dollarBraceL] = "dollarBraceL"; // ${ startsExpr
  const at = 27648; TokenType[TokenType["at"] = at] = "at"; // @
  const hash = 29184; TokenType[TokenType["hash"] = hash] = "hash"; // # startsExpr
  const eq = 29728; TokenType[TokenType["eq"] = eq] = "eq"; // = isAssign
  const assign = 30752; TokenType[TokenType["assign"] = assign] = "assign"; // _= isAssign
  const preIncDec = 32640; TokenType[TokenType["preIncDec"] = preIncDec] = "preIncDec"; // ++/-- prefix postfix startsExpr
  const postIncDec = 33664; TokenType[TokenType["postIncDec"] = postIncDec] = "postIncDec"; // ++/-- prefix postfix startsExpr
  const bang = 34432; TokenType[TokenType["bang"] = bang] = "bang"; // ! prefix startsExpr
  const tilde = 35456; TokenType[TokenType["tilde"] = tilde] = "tilde"; // ~ prefix startsExpr
  const pipeline = 35841; TokenType[TokenType["pipeline"] = pipeline] = "pipeline"; // |> prec:1
  const nullishCoalescing = 36866; TokenType[TokenType["nullishCoalescing"] = nullishCoalescing] = "nullishCoalescing"; // ?? prec:2
  const logicalOR = 37890; TokenType[TokenType["logicalOR"] = logicalOR] = "logicalOR"; // || prec:2
  const logicalAND = 38915; TokenType[TokenType["logicalAND"] = logicalAND] = "logicalAND"; // && prec:3
  const bitwiseOR = 39940; TokenType[TokenType["bitwiseOR"] = bitwiseOR] = "bitwiseOR"; // | prec:4
  const bitwiseXOR = 40965; TokenType[TokenType["bitwiseXOR"] = bitwiseXOR] = "bitwiseXOR"; // ^ prec:5
  const bitwiseAND = 41990; TokenType[TokenType["bitwiseAND"] = bitwiseAND] = "bitwiseAND"; // & prec:6
  const equality = 43015; TokenType[TokenType["equality"] = equality] = "equality"; // ==/!= prec:7
  const lessThan = 44040; TokenType[TokenType["lessThan"] = lessThan] = "lessThan"; // < prec:8
  const greaterThan = 45064; TokenType[TokenType["greaterThan"] = greaterThan] = "greaterThan"; // > prec:8
  const relationalOrEqual = 46088; TokenType[TokenType["relationalOrEqual"] = relationalOrEqual] = "relationalOrEqual"; // <=/>= prec:8
  const bitShiftL = 47113; TokenType[TokenType["bitShiftL"] = bitShiftL] = "bitShiftL"; // << prec:9
  const bitShiftR = 48137; TokenType[TokenType["bitShiftR"] = bitShiftR] = "bitShiftR"; // >>/>>> prec:9
  const plus = 49802; TokenType[TokenType["plus"] = plus] = "plus"; // + prec:10 prefix startsExpr
  const minus = 50826; TokenType[TokenType["minus"] = minus] = "minus"; // - prec:10 prefix startsExpr
  const modulo = 51723; TokenType[TokenType["modulo"] = modulo] = "modulo"; // % prec:11 startsExpr
  const star = 52235; TokenType[TokenType["star"] = star] = "star"; // * prec:11
  const slash = 53259; TokenType[TokenType["slash"] = slash] = "slash"; // / prec:11
  const exponent = 54348; TokenType[TokenType["exponent"] = exponent] = "exponent"; // ** prec:12 rightAssociative
  const jsxName = 55296; TokenType[TokenType["jsxName"] = jsxName] = "jsxName"; // jsxName
  const jsxText = 56320; TokenType[TokenType["jsxText"] = jsxText] = "jsxText"; // jsxText
  const jsxEmptyText = 57344; TokenType[TokenType["jsxEmptyText"] = jsxEmptyText] = "jsxEmptyText"; // jsxEmptyText
  const jsxTagStart = 58880; TokenType[TokenType["jsxTagStart"] = jsxTagStart] = "jsxTagStart"; // jsxTagStart startsExpr
  const jsxTagEnd = 59392; TokenType[TokenType["jsxTagEnd"] = jsxTagEnd] = "jsxTagEnd"; // jsxTagEnd
  const typeParameterStart = 60928; TokenType[TokenType["typeParameterStart"] = typeParameterStart] = "typeParameterStart"; // typeParameterStart startsExpr
  const nonNullAssertion = 61440; TokenType[TokenType["nonNullAssertion"] = nonNullAssertion] = "nonNullAssertion"; // nonNullAssertion
  const _break = 62480; TokenType[TokenType["_break"] = _break] = "_break"; // break keyword
  const _case = 63504; TokenType[TokenType["_case"] = _case] = "_case"; // case keyword
  const _catch = 64528; TokenType[TokenType["_catch"] = _catch] = "_catch"; // catch keyword
  const _continue = 65552; TokenType[TokenType["_continue"] = _continue] = "_continue"; // continue keyword
  const _debugger = 66576; TokenType[TokenType["_debugger"] = _debugger] = "_debugger"; // debugger keyword
  const _default = 67600; TokenType[TokenType["_default"] = _default] = "_default"; // default keyword
  const _do = 68624; TokenType[TokenType["_do"] = _do] = "_do"; // do keyword
  const _else = 69648; TokenType[TokenType["_else"] = _else] = "_else"; // else keyword
  const _finally = 70672; TokenType[TokenType["_finally"] = _finally] = "_finally"; // finally keyword
  const _for = 71696; TokenType[TokenType["_for"] = _for] = "_for"; // for keyword
  const _function = 73232; TokenType[TokenType["_function"] = _function] = "_function"; // function keyword startsExpr
  const _if = 73744; TokenType[TokenType["_if"] = _if] = "_if"; // if keyword
  const _return = 74768; TokenType[TokenType["_return"] = _return] = "_return"; // return keyword
  const _switch = 75792; TokenType[TokenType["_switch"] = _switch] = "_switch"; // switch keyword
  const _throw = 77456; TokenType[TokenType["_throw"] = _throw] = "_throw"; // throw keyword prefix startsExpr
  const _try = 77840; TokenType[TokenType["_try"] = _try] = "_try"; // try keyword
  const _var = 78864; TokenType[TokenType["_var"] = _var] = "_var"; // var keyword
  const _let = 79888; TokenType[TokenType["_let"] = _let] = "_let"; // let keyword
  const _const = 80912; TokenType[TokenType["_const"] = _const] = "_const"; // const keyword
  const _while = 81936; TokenType[TokenType["_while"] = _while] = "_while"; // while keyword
  const _with = 82960; TokenType[TokenType["_with"] = _with] = "_with"; // with keyword
  const _new = 84496; TokenType[TokenType["_new"] = _new] = "_new"; // new keyword startsExpr
  const _this = 85520; TokenType[TokenType["_this"] = _this] = "_this"; // this keyword startsExpr
  const _super = 86544; TokenType[TokenType["_super"] = _super] = "_super"; // super keyword startsExpr
  const _class = 87568; TokenType[TokenType["_class"] = _class] = "_class"; // class keyword startsExpr
  const _extends = 88080; TokenType[TokenType["_extends"] = _extends] = "_extends"; // extends keyword
  const _export = 89104; TokenType[TokenType["_export"] = _export] = "_export"; // export keyword
  const _import = 90640; TokenType[TokenType["_import"] = _import] = "_import"; // import keyword startsExpr
  const _yield = 91664; TokenType[TokenType["_yield"] = _yield] = "_yield"; // yield keyword startsExpr
  const _null = 92688; TokenType[TokenType["_null"] = _null] = "_null"; // null keyword startsExpr
  const _true = 93712; TokenType[TokenType["_true"] = _true] = "_true"; // true keyword startsExpr
  const _false = 94736; TokenType[TokenType["_false"] = _false] = "_false"; // false keyword startsExpr
  const _in = 95256; TokenType[TokenType["_in"] = _in] = "_in"; // in prec:8 keyword
  const _instanceof = 96280; TokenType[TokenType["_instanceof"] = _instanceof] = "_instanceof"; // instanceof prec:8 keyword
  const _typeof = 97936; TokenType[TokenType["_typeof"] = _typeof] = "_typeof"; // typeof keyword prefix startsExpr
  const _void = 98960; TokenType[TokenType["_void"] = _void] = "_void"; // void keyword prefix startsExpr
  const _delete = 99984; TokenType[TokenType["_delete"] = _delete] = "_delete"; // delete keyword prefix startsExpr
  const _async = 100880; TokenType[TokenType["_async"] = _async] = "_async"; // async keyword startsExpr
  const _get = 101904; TokenType[TokenType["_get"] = _get] = "_get"; // get keyword startsExpr
  const _set = 102928; TokenType[TokenType["_set"] = _set] = "_set"; // set keyword startsExpr
  const _declare = 103952; TokenType[TokenType["_declare"] = _declare] = "_declare"; // declare keyword startsExpr
  const _readonly = 104976; TokenType[TokenType["_readonly"] = _readonly] = "_readonly"; // readonly keyword startsExpr
  const _abstract = 106000; TokenType[TokenType["_abstract"] = _abstract] = "_abstract"; // abstract keyword startsExpr
  const _static = 107024; TokenType[TokenType["_static"] = _static] = "_static"; // static keyword startsExpr
  const _public = 107536; TokenType[TokenType["_public"] = _public] = "_public"; // public keyword
  const _private = 108560; TokenType[TokenType["_private"] = _private] = "_private"; // private keyword
  const _protected = 109584; TokenType[TokenType["_protected"] = _protected] = "_protected"; // protected keyword
  const _override = 110608; TokenType[TokenType["_override"] = _override] = "_override"; // override keyword
  const _as = 112144; TokenType[TokenType["_as"] = _as] = "_as"; // as keyword startsExpr
  const _enum = 113168; TokenType[TokenType["_enum"] = _enum] = "_enum"; // enum keyword startsExpr
  const _type = 114192; TokenType[TokenType["_type"] = _type] = "_type"; // type keyword startsExpr
  const _implements = 115216; TokenType[TokenType["_implements"] = _implements] = "_implements"; // implements keyword startsExpr
})(TokenType$1 || (TokenType$1 = {}));
function formatTokenType$1(tokenType) {
  switch (tokenType) {
    case TokenType$1.num:
      return "num";
    case TokenType$1.bigint:
      return "bigint";
    case TokenType$1.decimal:
      return "decimal";
    case TokenType$1.regexp:
      return "regexp";
    case TokenType$1.string:
      return "string";
    case TokenType$1.name:
      return "name";
    case TokenType$1.eof:
      return "eof";
    case TokenType$1.bracketL:
      return "[";
    case TokenType$1.bracketR:
      return "]";
    case TokenType$1.braceL:
      return "{";
    case TokenType$1.braceBarL:
      return "{|";
    case TokenType$1.braceR:
      return "}";
    case TokenType$1.braceBarR:
      return "|}";
    case TokenType$1.parenL:
      return "(";
    case TokenType$1.parenR:
      return ")";
    case TokenType$1.comma:
      return ",";
    case TokenType$1.semi:
      return ";";
    case TokenType$1.colon:
      return ":";
    case TokenType$1.doubleColon:
      return "::";
    case TokenType$1.dot:
      return ".";
    case TokenType$1.question:
      return "?";
    case TokenType$1.questionDot:
      return "?.";
    case TokenType$1.arrow:
      return "=>";
    case TokenType$1.template:
      return "template";
    case TokenType$1.ellipsis:
      return "...";
    case TokenType$1.backQuote:
      return "`";
    case TokenType$1.dollarBraceL:
      return "${";
    case TokenType$1.at:
      return "@";
    case TokenType$1.hash:
      return "#";
    case TokenType$1.eq:
      return "=";
    case TokenType$1.assign:
      return "_=";
    case TokenType$1.preIncDec:
      return "++/--";
    case TokenType$1.postIncDec:
      return "++/--";
    case TokenType$1.bang:
      return "!";
    case TokenType$1.tilde:
      return "~";
    case TokenType$1.pipeline:
      return "|>";
    case TokenType$1.nullishCoalescing:
      return "??";
    case TokenType$1.logicalOR:
      return "||";
    case TokenType$1.logicalAND:
      return "&&";
    case TokenType$1.bitwiseOR:
      return "|";
    case TokenType$1.bitwiseXOR:
      return "^";
    case TokenType$1.bitwiseAND:
      return "&";
    case TokenType$1.equality:
      return "==/!=";
    case TokenType$1.lessThan:
      return "<";
    case TokenType$1.greaterThan:
      return ">";
    case TokenType$1.relationalOrEqual:
      return "<=/>=";
    case TokenType$1.bitShiftL:
      return "<<";
    case TokenType$1.bitShiftR:
      return ">>/>>>";
    case TokenType$1.plus:
      return "+";
    case TokenType$1.minus:
      return "-";
    case TokenType$1.modulo:
      return "%";
    case TokenType$1.star:
      return "*";
    case TokenType$1.slash:
      return "/";
    case TokenType$1.exponent:
      return "**";
    case TokenType$1.jsxName:
      return "jsxName";
    case TokenType$1.jsxText:
      return "jsxText";
    case TokenType$1.jsxEmptyText:
      return "jsxEmptyText";
    case TokenType$1.jsxTagStart:
      return "jsxTagStart";
    case TokenType$1.jsxTagEnd:
      return "jsxTagEnd";
    case TokenType$1.typeParameterStart:
      return "typeParameterStart";
    case TokenType$1.nonNullAssertion:
      return "nonNullAssertion";
    case TokenType$1._break:
      return "break";
    case TokenType$1._case:
      return "case";
    case TokenType$1._catch:
      return "catch";
    case TokenType$1._continue:
      return "continue";
    case TokenType$1._debugger:
      return "debugger";
    case TokenType$1._default:
      return "default";
    case TokenType$1._do:
      return "do";
    case TokenType$1._else:
      return "else";
    case TokenType$1._finally:
      return "finally";
    case TokenType$1._for:
      return "for";
    case TokenType$1._function:
      return "function";
    case TokenType$1._if:
      return "if";
    case TokenType$1._return:
      return "return";
    case TokenType$1._switch:
      return "switch";
    case TokenType$1._throw:
      return "throw";
    case TokenType$1._try:
      return "try";
    case TokenType$1._var:
      return "var";
    case TokenType$1._let:
      return "let";
    case TokenType$1._const:
      return "const";
    case TokenType$1._while:
      return "while";
    case TokenType$1._with:
      return "with";
    case TokenType$1._new:
      return "new";
    case TokenType$1._this:
      return "this";
    case TokenType$1._super:
      return "super";
    case TokenType$1._class:
      return "class";
    case TokenType$1._extends:
      return "extends";
    case TokenType$1._export:
      return "export";
    case TokenType$1._import:
      return "import";
    case TokenType$1._yield:
      return "yield";
    case TokenType$1._null:
      return "null";
    case TokenType$1._true:
      return "true";
    case TokenType$1._false:
      return "false";
    case TokenType$1._in:
      return "in";
    case TokenType$1._instanceof:
      return "instanceof";
    case TokenType$1._typeof:
      return "typeof";
    case TokenType$1._void:
      return "void";
    case TokenType$1._delete:
      return "delete";
    case TokenType$1._async:
      return "async";
    case TokenType$1._get:
      return "get";
    case TokenType$1._set:
      return "set";
    case TokenType$1._declare:
      return "declare";
    case TokenType$1._readonly:
      return "readonly";
    case TokenType$1._abstract:
      return "abstract";
    case TokenType$1._static:
      return "static";
    case TokenType$1._public:
      return "public";
    case TokenType$1._private:
      return "private";
    case TokenType$1._protected:
      return "protected";
    case TokenType$1._override:
      return "override";
    case TokenType$1._as:
      return "as";
    case TokenType$1._enum:
      return "enum";
    case TokenType$1._type:
      return "type";
    case TokenType$1._implements:
      return "implements";
    default:
      return "";
  }
}

class Scope$1 {
  
  
  

  constructor(startTokenIndex, endTokenIndex, isFunctionScope) {
    this.startTokenIndex = startTokenIndex;
    this.endTokenIndex = endTokenIndex;
    this.isFunctionScope = isFunctionScope;
  }
}

class StateSnapshot$1 {
  constructor(
     potentialArrowAt,
     noAnonFunctionType,
     inDisallowConditionalTypesContext,
     tokensLength,
     scopesLength,
     pos,
     type,
     contextualKeyword,
     start,
     end,
     isType,
     scopeDepth,
     error,
  ) {this.potentialArrowAt = potentialArrowAt;this.noAnonFunctionType = noAnonFunctionType;this.inDisallowConditionalTypesContext = inDisallowConditionalTypesContext;this.tokensLength = tokensLength;this.scopesLength = scopesLength;this.pos = pos;this.type = type;this.contextualKeyword = contextualKeyword;this.start = start;this.end = end;this.isType = isType;this.scopeDepth = scopeDepth;this.error = error;}
}

class State$1 {constructor() { State$1.prototype.__init.call(this);State$1.prototype.__init2.call(this);State$1.prototype.__init3.call(this);State$1.prototype.__init4.call(this);State$1.prototype.__init5.call(this);State$1.prototype.__init6.call(this);State$1.prototype.__init7.call(this);State$1.prototype.__init8.call(this);State$1.prototype.__init9.call(this);State$1.prototype.__init10.call(this);State$1.prototype.__init11.call(this);State$1.prototype.__init12.call(this);State$1.prototype.__init13.call(this); }
  // Used to signify the start of a potential arrow function
  __init() {this.potentialArrowAt = -1;}

  // Used by Flow to handle an edge case involving function type parsing.
  __init2() {this.noAnonFunctionType = false;}

  // Used by TypeScript to handle ambiguities when parsing conditional types.
  __init3() {this.inDisallowConditionalTypesContext = false;}

  // Token store.
  __init4() {this.tokens = [];}

  // Array of all observed scopes, ordered by their ending position.
  __init5() {this.scopes = [];}

  // The current position of the tokenizer in the input.
  __init6() {this.pos = 0;}

  // Information about the current token.
  __init7() {this.type = TokenType$1.eof;}
  __init8() {this.contextualKeyword = ContextualKeyword$1.NONE;}
  __init9() {this.start = 0;}
  __init10() {this.end = 0;}

  __init11() {this.isType = false;}
  __init12() {this.scopeDepth = 0;}

  /**
   * If the parser is in an error state, then the token is always tt.eof and all functions can
   * keep executing but should be written so they don't get into an infinite loop in this situation.
   *
   * This approach, combined with the ability to snapshot and restore state, allows us to implement
   * backtracking without exceptions and without needing to explicitly propagate error states
   * everywhere.
   */
  __init13() {this.error = null;}

  snapshot() {
    return new StateSnapshot$1(
      this.potentialArrowAt,
      this.noAnonFunctionType,
      this.inDisallowConditionalTypesContext,
      this.tokens.length,
      this.scopes.length,
      this.pos,
      this.type,
      this.contextualKeyword,
      this.start,
      this.end,
      this.isType,
      this.scopeDepth,
      this.error,
    );
  }

  restoreFromSnapshot(snapshot) {
    this.potentialArrowAt = snapshot.potentialArrowAt;
    this.noAnonFunctionType = snapshot.noAnonFunctionType;
    this.inDisallowConditionalTypesContext = snapshot.inDisallowConditionalTypesContext;
    this.tokens.length = snapshot.tokensLength;
    this.scopes.length = snapshot.scopesLength;
    this.pos = snapshot.pos;
    this.type = snapshot.type;
    this.contextualKeyword = snapshot.contextualKeyword;
    this.start = snapshot.start;
    this.end = snapshot.end;
    this.isType = snapshot.isType;
    this.scopeDepth = snapshot.scopeDepth;
    this.error = snapshot.error;
  }
}

var charCodes$1; (function (charCodes) {
  const backSpace = 8; charCodes[charCodes["backSpace"] = backSpace] = "backSpace";
  const lineFeed = 10; charCodes[charCodes["lineFeed"] = lineFeed] = "lineFeed"; //  '\n'
  const tab = 9; charCodes[charCodes["tab"] = tab] = "tab"; //  '\t'
  const carriageReturn = 13; charCodes[charCodes["carriageReturn"] = carriageReturn] = "carriageReturn"; //  '\r'
  const shiftOut = 14; charCodes[charCodes["shiftOut"] = shiftOut] = "shiftOut";
  const space = 32; charCodes[charCodes["space"] = space] = "space";
  const exclamationMark = 33; charCodes[charCodes["exclamationMark"] = exclamationMark] = "exclamationMark"; //  '!'
  const quotationMark = 34; charCodes[charCodes["quotationMark"] = quotationMark] = "quotationMark"; //  '"'
  const numberSign = 35; charCodes[charCodes["numberSign"] = numberSign] = "numberSign"; //  '#'
  const dollarSign = 36; charCodes[charCodes["dollarSign"] = dollarSign] = "dollarSign"; //  '$'
  const percentSign = 37; charCodes[charCodes["percentSign"] = percentSign] = "percentSign"; //  '%'
  const ampersand = 38; charCodes[charCodes["ampersand"] = ampersand] = "ampersand"; //  '&'
  const apostrophe = 39; charCodes[charCodes["apostrophe"] = apostrophe] = "apostrophe"; //  '''
  const leftParenthesis = 40; charCodes[charCodes["leftParenthesis"] = leftParenthesis] = "leftParenthesis"; //  '('
  const rightParenthesis = 41; charCodes[charCodes["rightParenthesis"] = rightParenthesis] = "rightParenthesis"; //  ')'
  const asterisk = 42; charCodes[charCodes["asterisk"] = asterisk] = "asterisk"; //  '*'
  const plusSign = 43; charCodes[charCodes["plusSign"] = plusSign] = "plusSign"; //  '+'
  const comma = 44; charCodes[charCodes["comma"] = comma] = "comma"; //  ','
  const dash = 45; charCodes[charCodes["dash"] = dash] = "dash"; //  '-'
  const dot = 46; charCodes[charCodes["dot"] = dot] = "dot"; //  '.'
  const slash = 47; charCodes[charCodes["slash"] = slash] = "slash"; //  '/'
  const digit0 = 48; charCodes[charCodes["digit0"] = digit0] = "digit0"; //  '0'
  const digit1 = 49; charCodes[charCodes["digit1"] = digit1] = "digit1"; //  '1'
  const digit2 = 50; charCodes[charCodes["digit2"] = digit2] = "digit2"; //  '2'
  const digit3 = 51; charCodes[charCodes["digit3"] = digit3] = "digit3"; //  '3'
  const digit4 = 52; charCodes[charCodes["digit4"] = digit4] = "digit4"; //  '4'
  const digit5 = 53; charCodes[charCodes["digit5"] = digit5] = "digit5"; //  '5'
  const digit6 = 54; charCodes[charCodes["digit6"] = digit6] = "digit6"; //  '6'
  const digit7 = 55; charCodes[charCodes["digit7"] = digit7] = "digit7"; //  '7'
  const digit8 = 56; charCodes[charCodes["digit8"] = digit8] = "digit8"; //  '8'
  const digit9 = 57; charCodes[charCodes["digit9"] = digit9] = "digit9"; //  '9'
  const colon = 58; charCodes[charCodes["colon"] = colon] = "colon"; //  ':'
  const semicolon = 59; charCodes[charCodes["semicolon"] = semicolon] = "semicolon"; //  ';'
  const lessThan = 60; charCodes[charCodes["lessThan"] = lessThan] = "lessThan"; //  '<'
  const equalsTo = 61; charCodes[charCodes["equalsTo"] = equalsTo] = "equalsTo"; //  '='
  const greaterThan = 62; charCodes[charCodes["greaterThan"] = greaterThan] = "greaterThan"; //  '>'
  const questionMark = 63; charCodes[charCodes["questionMark"] = questionMark] = "questionMark"; //  '?'
  const atSign = 64; charCodes[charCodes["atSign"] = atSign] = "atSign"; //  '@'
  const uppercaseA = 65; charCodes[charCodes["uppercaseA"] = uppercaseA] = "uppercaseA"; //  'A'
  const uppercaseB = 66; charCodes[charCodes["uppercaseB"] = uppercaseB] = "uppercaseB"; //  'B'
  const uppercaseC = 67; charCodes[charCodes["uppercaseC"] = uppercaseC] = "uppercaseC"; //  'C'
  const uppercaseD = 68; charCodes[charCodes["uppercaseD"] = uppercaseD] = "uppercaseD"; //  'D'
  const uppercaseE = 69; charCodes[charCodes["uppercaseE"] = uppercaseE] = "uppercaseE"; //  'E'
  const uppercaseF = 70; charCodes[charCodes["uppercaseF"] = uppercaseF] = "uppercaseF"; //  'F'
  const uppercaseG = 71; charCodes[charCodes["uppercaseG"] = uppercaseG] = "uppercaseG"; //  'G'
  const uppercaseH = 72; charCodes[charCodes["uppercaseH"] = uppercaseH] = "uppercaseH"; //  'H'
  const uppercaseI = 73; charCodes[charCodes["uppercaseI"] = uppercaseI] = "uppercaseI"; //  'I'
  const uppercaseJ = 74; charCodes[charCodes["uppercaseJ"] = uppercaseJ] = "uppercaseJ"; //  'J'
  const uppercaseK = 75; charCodes[charCodes["uppercaseK"] = uppercaseK] = "uppercaseK"; //  'K'
  const uppercaseL = 76; charCodes[charCodes["uppercaseL"] = uppercaseL] = "uppercaseL"; //  'L'
  const uppercaseM = 77; charCodes[charCodes["uppercaseM"] = uppercaseM] = "uppercaseM"; //  'M'
  const uppercaseN = 78; charCodes[charCodes["uppercaseN"] = uppercaseN] = "uppercaseN"; //  'N'
  const uppercaseO = 79; charCodes[charCodes["uppercaseO"] = uppercaseO] = "uppercaseO"; //  'O'
  const uppercaseP = 80; charCodes[charCodes["uppercaseP"] = uppercaseP] = "uppercaseP"; //  'P'
  const uppercaseQ = 81; charCodes[charCodes["uppercaseQ"] = uppercaseQ] = "uppercaseQ"; //  'Q'
  const uppercaseR = 82; charCodes[charCodes["uppercaseR"] = uppercaseR] = "uppercaseR"; //  'R'
  const uppercaseS = 83; charCodes[charCodes["uppercaseS"] = uppercaseS] = "uppercaseS"; //  'S'
  const uppercaseT = 84; charCodes[charCodes["uppercaseT"] = uppercaseT] = "uppercaseT"; //  'T'
  const uppercaseU = 85; charCodes[charCodes["uppercaseU"] = uppercaseU] = "uppercaseU"; //  'U'
  const uppercaseV = 86; charCodes[charCodes["uppercaseV"] = uppercaseV] = "uppercaseV"; //  'V'
  const uppercaseW = 87; charCodes[charCodes["uppercaseW"] = uppercaseW] = "uppercaseW"; //  'W'
  const uppercaseX = 88; charCodes[charCodes["uppercaseX"] = uppercaseX] = "uppercaseX"; //  'X'
  const uppercaseY = 89; charCodes[charCodes["uppercaseY"] = uppercaseY] = "uppercaseY"; //  'Y'
  const uppercaseZ = 90; charCodes[charCodes["uppercaseZ"] = uppercaseZ] = "uppercaseZ"; //  'Z'
  const leftSquareBracket = 91; charCodes[charCodes["leftSquareBracket"] = leftSquareBracket] = "leftSquareBracket"; //  '['
  const backslash = 92; charCodes[charCodes["backslash"] = backslash] = "backslash"; //  '\    '
  const rightSquareBracket = 93; charCodes[charCodes["rightSquareBracket"] = rightSquareBracket] = "rightSquareBracket"; //  ']'
  const caret = 94; charCodes[charCodes["caret"] = caret] = "caret"; //  '^'
  const underscore = 95; charCodes[charCodes["underscore"] = underscore] = "underscore"; //  '_'
  const graveAccent = 96; charCodes[charCodes["graveAccent"] = graveAccent] = "graveAccent"; //  '`'
  const lowercaseA = 97; charCodes[charCodes["lowercaseA"] = lowercaseA] = "lowercaseA"; //  'a'
  const lowercaseB = 98; charCodes[charCodes["lowercaseB"] = lowercaseB] = "lowercaseB"; //  'b'
  const lowercaseC = 99; charCodes[charCodes["lowercaseC"] = lowercaseC] = "lowercaseC"; //  'c'
  const lowercaseD = 100; charCodes[charCodes["lowercaseD"] = lowercaseD] = "lowercaseD"; //  'd'
  const lowercaseE = 101; charCodes[charCodes["lowercaseE"] = lowercaseE] = "lowercaseE"; //  'e'
  const lowercaseF = 102; charCodes[charCodes["lowercaseF"] = lowercaseF] = "lowercaseF"; //  'f'
  const lowercaseG = 103; charCodes[charCodes["lowercaseG"] = lowercaseG] = "lowercaseG"; //  'g'
  const lowercaseH = 104; charCodes[charCodes["lowercaseH"] = lowercaseH] = "lowercaseH"; //  'h'
  const lowercaseI = 105; charCodes[charCodes["lowercaseI"] = lowercaseI] = "lowercaseI"; //  'i'
  const lowercaseJ = 106; charCodes[charCodes["lowercaseJ"] = lowercaseJ] = "lowercaseJ"; //  'j'
  const lowercaseK = 107; charCodes[charCodes["lowercaseK"] = lowercaseK] = "lowercaseK"; //  'k'
  const lowercaseL = 108; charCodes[charCodes["lowercaseL"] = lowercaseL] = "lowercaseL"; //  'l'
  const lowercaseM = 109; charCodes[charCodes["lowercaseM"] = lowercaseM] = "lowercaseM"; //  'm'
  const lowercaseN = 110; charCodes[charCodes["lowercaseN"] = lowercaseN] = "lowercaseN"; //  'n'
  const lowercaseO = 111; charCodes[charCodes["lowercaseO"] = lowercaseO] = "lowercaseO"; //  'o'
  const lowercaseP = 112; charCodes[charCodes["lowercaseP"] = lowercaseP] = "lowercaseP"; //  'p'
  const lowercaseQ = 113; charCodes[charCodes["lowercaseQ"] = lowercaseQ] = "lowercaseQ"; //  'q'
  const lowercaseR = 114; charCodes[charCodes["lowercaseR"] = lowercaseR] = "lowercaseR"; //  'r'
  const lowercaseS = 115; charCodes[charCodes["lowercaseS"] = lowercaseS] = "lowercaseS"; //  's'
  const lowercaseT = 116; charCodes[charCodes["lowercaseT"] = lowercaseT] = "lowercaseT"; //  't'
  const lowercaseU = 117; charCodes[charCodes["lowercaseU"] = lowercaseU] = "lowercaseU"; //  'u'
  const lowercaseV = 118; charCodes[charCodes["lowercaseV"] = lowercaseV] = "lowercaseV"; //  'v'
  const lowercaseW = 119; charCodes[charCodes["lowercaseW"] = lowercaseW] = "lowercaseW"; //  'w'
  const lowercaseX = 120; charCodes[charCodes["lowercaseX"] = lowercaseX] = "lowercaseX"; //  'x'
  const lowercaseY = 121; charCodes[charCodes["lowercaseY"] = lowercaseY] = "lowercaseY"; //  'y'
  const lowercaseZ = 122; charCodes[charCodes["lowercaseZ"] = lowercaseZ] = "lowercaseZ"; //  'z'
  const leftCurlyBrace = 123; charCodes[charCodes["leftCurlyBrace"] = leftCurlyBrace] = "leftCurlyBrace"; //  '{'
  const verticalBar = 124; charCodes[charCodes["verticalBar"] = verticalBar] = "verticalBar"; //  '|'
  const rightCurlyBrace = 125; charCodes[charCodes["rightCurlyBrace"] = rightCurlyBrace] = "rightCurlyBrace"; //  '}'
  const tilde = 126; charCodes[charCodes["tilde"] = tilde] = "tilde"; //  '~'
  const nonBreakingSpace = 160; charCodes[charCodes["nonBreakingSpace"] = nonBreakingSpace] = "nonBreakingSpace";
  // eslint-disable-next-line no-irregular-whitespace
  const oghamSpaceMark = 5760; charCodes[charCodes["oghamSpaceMark"] = oghamSpaceMark] = "oghamSpaceMark"; // ' '
  const lineSeparator = 8232; charCodes[charCodes["lineSeparator"] = lineSeparator] = "lineSeparator";
  const paragraphSeparator = 8233; charCodes[charCodes["paragraphSeparator"] = paragraphSeparator] = "paragraphSeparator";
})(charCodes$1 || (charCodes$1 = {}));

let isJSXEnabled;
let isTypeScriptEnabled;
let isFlowEnabled;
let state$1;
let input;
let nextContextId;

function getNextContextId() {
  return nextContextId++;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function augmentError(error) {
  if ("pos" in error) {
    const loc = locationForIndex(error.pos);
    error.message += ` (${loc.line}:${loc.column})`;
    error.loc = loc;
  }
  return error;
}

class Loc {
  
  
  constructor(line, column) {
    this.line = line;
    this.column = column;
  }
}

function locationForIndex(pos) {
  let line = 1;
  let column = 1;
  for (let i = 0; i < pos; i++) {
    if (input.charCodeAt(i) === charCodes$1.lineFeed) {
      line++;
      column = 1;
    } else {
      column++;
    }
  }
  return new Loc(line, column);
}

function initParser(
  inputCode,
  isJSXEnabledArg,
  isTypeScriptEnabledArg,
  isFlowEnabledArg,
) {
  input = inputCode;
  state$1 = new State$1();
  nextContextId = 1;
  isJSXEnabled = isJSXEnabledArg;
  isTypeScriptEnabled = isTypeScriptEnabledArg;
  isFlowEnabled = isFlowEnabledArg;
}

// ## Parser utilities

// Tests whether parsed token is a contextual keyword.
function isContextual$1(contextualKeyword) {
  return state$1.contextualKeyword === contextualKeyword;
}

function isLookaheadContextual$1(contextualKeyword) {
  const l = lookaheadTypeAndKeyword$1();
  return l.type === TokenType$1.name && l.contextualKeyword === contextualKeyword;
}

// Consumes contextual keyword if possible.
function eatContextual$1(contextualKeyword) {
  return state$1.contextualKeyword === contextualKeyword && eat$1(TokenType$1.name);
}

// Asserts that following token is given contextual keyword.
function expectContextual$1(contextualKeyword) {
  if (!eatContextual$1(contextualKeyword)) {
    unexpected$1();
  }
}

// Test whether a semicolon can be inserted at the current position.
function canInsertSemicolon$1() {
  return match$1(TokenType$1.eof) || match$1(TokenType$1.braceR) || hasPrecedingLineBreak$1();
}

function hasPrecedingLineBreak$1() {
  const prevToken = state$1.tokens[state$1.tokens.length - 1];
  const lastTokEnd = prevToken ? prevToken.end : 0;
  for (let i = lastTokEnd; i < state$1.start; i++) {
    const code = input.charCodeAt(i);
    if (
      code === charCodes$1.lineFeed ||
      code === charCodes$1.carriageReturn ||
      code === 0x2028 ||
      code === 0x2029
    ) {
      return true;
    }
  }
  return false;
}

function hasFollowingLineBreak$1() {
  const nextStart = nextTokenStart$1();
  for (let i = state$1.end; i < nextStart; i++) {
    const code = input.charCodeAt(i);
    if (
      code === charCodes$1.lineFeed ||
      code === charCodes$1.carriageReturn ||
      code === 0x2028 ||
      code === 0x2029
    ) {
      return true;
    }
  }
  return false;
}

function isLineTerminator$1() {
  return eat$1(TokenType$1.semi) || canInsertSemicolon$1();
}

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.
function semicolon$2() {
  if (!isLineTerminator$1()) {
    unexpected$1('Unexpected token, expected ";"');
  }
}

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error at given pos.
function expect$1(type) {
  const matched = eat$1(type);
  if (!matched) {
    unexpected$1(`Unexpected token, expected "${formatTokenType$1(type)}"`);
  }
}

/**
 * Transition the parser to an error state. All code needs to be written to naturally unwind in this
 * state, which allows us to backtrack without exceptions and without error plumbing everywhere.
 */
function unexpected$1(message = "Unexpected token", pos = state$1.start) {
  if (state$1.error) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = new SyntaxError(message);
  err.pos = pos;
  state$1.error = err;
  state$1.pos = input.length;
  finishToken$1(TokenType$1.eof);
}

// https://tc39.github.io/ecma262/#sec-white-space
const WHITESPACE_CHARS = [
  0x0009,
  0x000b,
  0x000c,
  charCodes$1.space,
  charCodes$1.nonBreakingSpace,
  charCodes$1.oghamSpaceMark,
  0x2000, // EN QUAD
  0x2001, // EM QUAD
  0x2002, // EN SPACE
  0x2003, // EM SPACE
  0x2004, // THREE-PER-EM SPACE
  0x2005, // FOUR-PER-EM SPACE
  0x2006, // SIX-PER-EM SPACE
  0x2007, // FIGURE SPACE
  0x2008, // PUNCTUATION SPACE
  0x2009, // THIN SPACE
  0x200a, // HAIR SPACE
  0x202f, // NARROW NO-BREAK SPACE
  0x205f, // MEDIUM MATHEMATICAL SPACE
  0x3000, // IDEOGRAPHIC SPACE
  0xfeff, // ZERO WIDTH NO-BREAK SPACE
];

const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

const IS_WHITESPACE = new Uint8Array(65536);
for (const char of WHITESPACE_CHARS) {
  IS_WHITESPACE[char] = 1;
}

function computeIsIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code < 128) return false;
  throw new Error("Should not be called with non-ASCII char code.");
}

const IS_IDENTIFIER_CHAR = new Uint8Array(65536);
for (let i = 0; i < 128; i++) {
  IS_IDENTIFIER_CHAR[i] = computeIsIdentifierChar(i) ? 1 : 0;
}
for (let i = 128; i < 65536; i++) {
  IS_IDENTIFIER_CHAR[i] = 1;
}
// Aside from whitespace and newlines, all characters outside the ASCII space are either
// identifier characters or invalid. Since we're not performing code validation, we can just
// treat all invalid characters as identifier characters.
for (const whitespaceChar of WHITESPACE_CHARS) {
  IS_IDENTIFIER_CHAR[whitespaceChar] = 0;
}
IS_IDENTIFIER_CHAR[0x2028] = 0;
IS_IDENTIFIER_CHAR[0x2029] = 0;

const IS_IDENTIFIER_START = IS_IDENTIFIER_CHAR.slice();
for (let numChar = charCodes$1.digit0; numChar <= charCodes$1.digit9; numChar++) {
  IS_IDENTIFIER_START[numChar] = 0;
}

// Generated file, do not edit! Run "yarn generate" to re-generate this file.

// prettier-ignore
const READ_WORD_TREE$1 = new Int32Array([
  // ""
  -1, 27, 783, 918, 1755, 2376, 2862, 3483, -1, 3699, -1, 4617, 4752, 4833, 5130, 5508, 5940, -1, 6480, 6939, 7749, 8181, 8451, 8613, -1, 8829, -1,
  // "a"
  -1, -1, 54, 243, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 432, -1, -1, -1, 675, -1, -1, -1,
  // "ab"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 81, -1, -1, -1, -1, -1, -1, -1,
  // "abs"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 108, -1, -1, -1, -1, -1, -1,
  // "abst"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 135, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstr"
  -1, 162, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstra"
  -1, -1, -1, 189, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstrac"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 216, -1, -1, -1, -1, -1, -1,
  // "abstract"
  ContextualKeyword$1._abstract << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ac"
  -1, -1, -1, 270, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "acc"
  -1, -1, -1, -1, -1, 297, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "acce"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 324, -1, -1, -1, -1, -1, -1, -1,
  // "acces"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 351, -1, -1, -1, -1, -1, -1, -1,
  // "access"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 378, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "accesso"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 405, -1, -1, -1, -1, -1, -1, -1, -1,
  // "accessor"
  ContextualKeyword$1._accessor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "as"
  ContextualKeyword$1._as << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 459, -1, -1, -1, -1, -1, 594, -1,
  // "ass"
  -1, -1, -1, -1, -1, 486, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asse"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 513, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asser"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 540, -1, -1, -1, -1, -1, -1,
  // "assert"
  ContextualKeyword$1._assert << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 567, -1, -1, -1, -1, -1, -1, -1,
  // "asserts"
  ContextualKeyword$1._asserts << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asy"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 621, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asyn"
  -1, -1, -1, 648, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "async"
  ContextualKeyword$1._async << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "aw"
  -1, 702, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "awa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 729, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "awai"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 756, -1, -1, -1, -1, -1, -1,
  // "await"
  ContextualKeyword$1._await << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "b"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 810, -1, -1, -1, -1, -1, -1, -1, -1,
  // "br"
  -1, -1, -1, -1, -1, 837, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "bre"
  -1, 864, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "brea"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 891, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "break"
  (TokenType$1._break << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "c"
  -1, 945, -1, -1, -1, -1, -1, -1, 1107, -1, -1, -1, 1242, -1, -1, 1350, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ca"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 972, 1026, -1, -1, -1, -1, -1, -1,
  // "cas"
  -1, -1, -1, -1, -1, 999, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "case"
  (TokenType$1._case << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cat"
  -1, -1, -1, 1053, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "catc"
  -1, -1, -1, -1, -1, -1, -1, -1, 1080, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "catch"
  (TokenType$1._catch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ch"
  -1, -1, -1, -1, -1, 1134, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "che"
  -1, -1, -1, 1161, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "chec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1188, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "check"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1215, -1, -1, -1, -1, -1, -1, -1,
  // "checks"
  ContextualKeyword$1._checks << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cl"
  -1, 1269, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cla"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1296, -1, -1, -1, -1, -1, -1, -1,
  // "clas"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1323, -1, -1, -1, -1, -1, -1, -1,
  // "class"
  (TokenType$1._class << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "co"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1377, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "con"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1404, 1620, -1, -1, -1, -1, -1, -1,
  // "cons"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1431, -1, -1, -1, -1, -1, -1,
  // "const"
  (TokenType$1._const << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1458, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1485, -1, -1, -1, -1, -1,
  // "constru"
  -1, -1, -1, 1512, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "construc"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1539, -1, -1, -1, -1, -1, -1,
  // "construct"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1566, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constructo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1593, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constructor"
  ContextualKeyword$1._constructor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cont"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1647, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "conti"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1674, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "contin"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1701, -1, -1, -1, -1, -1,
  // "continu"
  -1, -1, -1, -1, -1, 1728, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "continue"
  (TokenType$1._continue << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "d"
  -1, -1, -1, -1, -1, 1782, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2349, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "de"
  -1, -1, 1809, 1971, -1, -1, 2106, -1, -1, -1, -1, -1, 2241, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "deb"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1836, -1, -1, -1, -1, -1,
  // "debu"
  -1, -1, -1, -1, -1, -1, -1, 1863, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debug"
  -1, -1, -1, -1, -1, -1, -1, 1890, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugg"
  -1, -1, -1, -1, -1, 1917, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugge"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1944, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugger"
  (TokenType$1._debugger << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "dec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1998, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "decl"
  -1, 2025, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "decla"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2052, -1, -1, -1, -1, -1, -1, -1, -1,
  // "declar"
  -1, -1, -1, -1, -1, 2079, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "declare"
  ContextualKeyword$1._declare << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "def"
  -1, 2133, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "defa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2160, -1, -1, -1, -1, -1,
  // "defau"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2187, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "defaul"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2214, -1, -1, -1, -1, -1, -1,
  // "default"
  (TokenType$1._default << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "del"
  -1, -1, -1, -1, -1, 2268, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "dele"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2295, -1, -1, -1, -1, -1, -1,
  // "delet"
  -1, -1, -1, -1, -1, 2322, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "delete"
  (TokenType$1._delete << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "do"
  (TokenType$1._do << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "e"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2403, -1, 2484, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2565, -1, -1,
  // "el"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2430, -1, -1, -1, -1, -1, -1, -1,
  // "els"
  -1, -1, -1, -1, -1, 2457, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "else"
  (TokenType$1._else << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "en"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2511, -1, -1, -1, -1, -1,
  // "enu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2538, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "enum"
  ContextualKeyword$1._enum << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ex"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2592, -1, -1, -1, 2727, -1, -1, -1, -1, -1, -1,
  // "exp"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2619, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "expo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2646, -1, -1, -1, -1, -1, -1, -1, -1,
  // "expor"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2673, -1, -1, -1, -1, -1, -1,
  // "export"
  (TokenType$1._export << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2700, -1, -1, -1, -1, -1, -1, -1,
  // "exports"
  ContextualKeyword$1._exports << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ext"
  -1, -1, -1, -1, -1, 2754, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "exte"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2781, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "exten"
  -1, -1, -1, -1, 2808, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "extend"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2835, -1, -1, -1, -1, -1, -1, -1,
  // "extends"
  (TokenType$1._extends << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "f"
  -1, 2889, -1, -1, -1, -1, -1, -1, -1, 2997, -1, -1, -1, -1, -1, 3159, -1, -1, 3213, -1, -1, 3294, -1, -1, -1, -1, -1,
  // "fa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2916, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fal"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2943, -1, -1, -1, -1, -1, -1, -1,
  // "fals"
  -1, -1, -1, -1, -1, 2970, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "false"
  (TokenType$1._false << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3024, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fin"
  -1, 3051, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fina"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3078, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "final"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3105, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "finall"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3132, -1,
  // "finally"
  (TokenType$1._finally << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3186, -1, -1, -1, -1, -1, -1, -1, -1,
  // "for"
  (TokenType$1._for << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3240, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3267, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "from"
  ContextualKeyword$1._from << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fun"
  -1, -1, -1, 3348, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "func"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3375, -1, -1, -1, -1, -1, -1,
  // "funct"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 3402, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "functi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3429, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "functio"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3456, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "function"
  (TokenType$1._function << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "g"
  -1, -1, -1, -1, -1, 3510, -1, -1, -1, -1, -1, -1, 3564, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ge"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3537, -1, -1, -1, -1, -1, -1,
  // "get"
  ContextualKeyword$1._get << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "gl"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3591, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "glo"
  -1, -1, 3618, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "glob"
  -1, 3645, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "globa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3672, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "global"
  ContextualKeyword$1._global << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "i"
  -1, -1, -1, -1, -1, -1, 3726, -1, -1, -1, -1, -1, -1, 3753, 4077, -1, -1, -1, -1, 4590, -1, -1, -1, -1, -1, -1, -1,
  // "if"
  (TokenType$1._if << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "im"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3780, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "imp"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3807, -1, -1, 3996, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impl"
  -1, -1, -1, -1, -1, 3834, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "imple"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3861, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "implem"
  -1, -1, -1, -1, -1, 3888, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impleme"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3915, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "implemen"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3942, -1, -1, -1, -1, -1, -1,
  // "implement"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3969, -1, -1, -1, -1, -1, -1, -1,
  // "implements"
  ContextualKeyword$1._implements << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4023, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impor"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4050, -1, -1, -1, -1, -1, -1,
  // "import"
  (TokenType$1._import << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "in"
  (TokenType$1._in << 1) + 1, -1, -1, -1, -1, -1, 4104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4185, 4401, -1, -1, -1, -1, -1, -1,
  // "inf"
  -1, -1, -1, -1, -1, 4131, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "infe"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4158, -1, -1, -1, -1, -1, -1, -1, -1,
  // "infer"
  ContextualKeyword$1._infer << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ins"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4212, -1, -1, -1, -1, -1, -1,
  // "inst"
  -1, 4239, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "insta"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4266, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instan"
  -1, -1, -1, 4293, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanc"
  -1, -1, -1, -1, -1, 4320, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instance"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4347, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanceo"
  -1, -1, -1, -1, -1, -1, 4374, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanceof"
  (TokenType$1._instanceof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "int"
  -1, -1, -1, -1, -1, 4428, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "inte"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4455, -1, -1, -1, -1, -1, -1, -1, -1,
  // "inter"
  -1, -1, -1, -1, -1, -1, 4482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interf"
  -1, 4509, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interfa"
  -1, -1, -1, 4536, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interfac"
  -1, -1, -1, -1, -1, 4563, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interface"
  ContextualKeyword$1._interface << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "is"
  ContextualKeyword$1._is << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "k"
  -1, -1, -1, -1, -1, 4644, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ke"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4671, -1,
  // "key"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4698, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "keyo"
  -1, -1, -1, -1, -1, -1, 4725, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "keyof"
  ContextualKeyword$1._keyof << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "l"
  -1, -1, -1, -1, -1, 4779, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "le"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4806, -1, -1, -1, -1, -1, -1,
  // "let"
  (TokenType$1._let << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "m"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 4860, -1, -1, -1, -1, -1, 4995, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4887, -1, -1,
  // "mix"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 4914, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mixi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4941, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mixin"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4968, -1, -1, -1, -1, -1, -1, -1,
  // "mixins"
  ContextualKeyword$1._mixins << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mo"
  -1, -1, -1, -1, 5022, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mod"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5049, -1, -1, -1, -1, -1,
  // "modu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5076, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "modul"
  -1, -1, -1, -1, -1, 5103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "module"
  ContextualKeyword$1._module << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "n"
  -1, 5157, -1, -1, -1, 5373, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5427, -1, -1, -1, -1, -1,
  // "na"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nam"
  -1, -1, -1, -1, -1, 5211, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "name"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5238, -1, -1, -1, -1, -1, -1, -1,
  // "names"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5265, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namesp"
  -1, 5292, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespa"
  -1, -1, -1, 5319, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespac"
  -1, -1, -1, -1, -1, 5346, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespace"
  ContextualKeyword$1._namespace << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ne"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5400, -1, -1, -1,
  // "new"
  (TokenType$1._new << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5454, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nul"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5481, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "null"
  (TokenType$1._null << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "o"
  -1, -1, -1, -1, -1, -1, 5535, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5562, -1, -1, -1, -1, 5697, 5751, -1, -1, -1, -1,
  // "of"
  ContextualKeyword$1._of << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "op"
  -1, 5589, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5616, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opaq"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5643, -1, -1, -1, -1, -1,
  // "opaqu"
  -1, -1, -1, -1, -1, 5670, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opaque"
  ContextualKeyword$1._opaque << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ou"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5724, -1, -1, -1, -1, -1, -1,
  // "out"
  ContextualKeyword$1._out << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ov"
  -1, -1, -1, -1, -1, 5778, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ove"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5805, -1, -1, -1, -1, -1, -1, -1, -1,
  // "over"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5832, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 5859, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overri"
  -1, -1, -1, -1, 5886, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overrid"
  -1, -1, -1, -1, -1, 5913, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "override"
  ContextualKeyword$1._override << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "p"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5967, -1, -1, 6345, -1, -1, -1, -1, -1,
  // "pr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 5994, -1, -1, -1, -1, -1, 6129, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pri"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6021, -1, -1, -1, -1,
  // "priv"
  -1, 6048, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "priva"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6075, -1, -1, -1, -1, -1, -1,
  // "privat"
  -1, -1, -1, -1, -1, 6102, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "private"
  ContextualKeyword$1._private << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6156, -1, -1, -1, -1, -1, -1,
  // "prot"
  -1, -1, -1, -1, -1, 6183, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6318, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "prote"
  -1, -1, -1, 6210, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6237, -1, -1, -1, -1, -1, -1,
  // "protect"
  -1, -1, -1, -1, -1, 6264, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protecte"
  -1, -1, -1, -1, 6291, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protected"
  ContextualKeyword$1._protected << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "proto"
  ContextualKeyword$1._proto << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pu"
  -1, -1, 6372, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pub"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6399, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "publ"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 6426, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "publi"
  -1, -1, -1, 6453, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "public"
  ContextualKeyword$1._public << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "r"
  -1, -1, -1, -1, -1, 6507, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "re"
  -1, 6534, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6696, -1, -1, 6831, -1, -1, -1, -1, -1, -1,
  // "rea"
  -1, -1, -1, -1, 6561, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "read"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6588, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "reado"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6615, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "readon"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6642, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "readonl"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6669, -1,
  // "readonly"
  ContextualKeyword$1._readonly << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "req"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6723, -1, -1, -1, -1, -1,
  // "requ"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 6750, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "requi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6777, -1, -1, -1, -1, -1, -1, -1, -1,
  // "requir"
  -1, -1, -1, -1, -1, 6804, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "require"
  ContextualKeyword$1._require << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ret"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6858, -1, -1, -1, -1, -1,
  // "retu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6885, -1, -1, -1, -1, -1, -1, -1, -1,
  // "retur"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6912, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "return"
  (TokenType$1._return << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "s"
  -1, 6966, -1, -1, -1, 7182, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7236, 7371, -1, 7479, -1, 7614, -1,
  // "sa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6993, -1, -1, -1, -1, -1, -1,
  // "sat"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7020, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sati"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7047, -1, -1, -1, -1, -1, -1, -1,
  // "satis"
  -1, -1, -1, -1, -1, -1, 7074, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisf"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisfi"
  -1, -1, -1, -1, -1, 7128, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisfie"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7155, -1, -1, -1, -1, -1, -1, -1,
  // "satisfies"
  ContextualKeyword$1._satisfies << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "se"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7209, -1, -1, -1, -1, -1, -1,
  // "set"
  ContextualKeyword$1._set << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "st"
  -1, 7263, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sta"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7290, -1, -1, -1, -1, -1, -1,
  // "stat"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7317, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "stati"
  -1, -1, -1, 7344, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "static"
  ContextualKeyword$1._static << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "su"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7398, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sup"
  -1, -1, -1, -1, -1, 7425, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "supe"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7452, -1, -1, -1, -1, -1, -1, -1, -1,
  // "super"
  (TokenType$1._super << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sw"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7506, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "swi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7533, -1, -1, -1, -1, -1, -1,
  // "swit"
  -1, -1, -1, 7560, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "switc"
  -1, -1, -1, -1, -1, -1, -1, -1, 7587, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "switch"
  (TokenType$1._switch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sy"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7641, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sym"
  -1, -1, 7668, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symb"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7695, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symbo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7722, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symbol"
  ContextualKeyword$1._symbol << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "t"
  -1, -1, -1, -1, -1, -1, -1, -1, 7776, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7938, -1, -1, -1, -1, -1, -1, 8046, -1,
  // "th"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7803, -1, -1, -1, -1, -1, -1, -1, -1, 7857, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7830, -1, -1, -1, -1, -1, -1, -1,
  // "this"
  (TokenType$1._this << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7884, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7911, -1, -1, -1,
  // "throw"
  (TokenType$1._throw << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "tr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7965, -1, -1, -1, 8019, -1,
  // "tru"
  -1, -1, -1, -1, -1, 7992, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "true"
  (TokenType$1._true << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "try"
  (TokenType$1._try << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ty"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8073, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typ"
  -1, -1, -1, -1, -1, 8100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "type"
  ContextualKeyword$1._type << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8127, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typeo"
  -1, -1, -1, -1, -1, -1, 8154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typeof"
  (TokenType$1._typeof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "u"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8208, -1, -1, -1, -1, 8343, -1, -1, -1, -1, -1, -1, -1,
  // "un"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8235, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "uni"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8262, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "uniq"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8289, -1, -1, -1, -1, -1,
  // "uniqu"
  -1, -1, -1, -1, -1, 8316, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "unique"
  ContextualKeyword$1._unique << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "us"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8370, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "usi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8397, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "usin"
  -1, -1, -1, -1, -1, -1, -1, 8424, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "using"
  ContextualKeyword$1._using << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "v"
  -1, 8478, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8532, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "va"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8505, -1, -1, -1, -1, -1, -1, -1, -1,
  // "var"
  (TokenType$1._var << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "vo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8559, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "voi"
  -1, -1, -1, -1, 8586, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "void"
  (TokenType$1._void << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "w"
  -1, -1, -1, -1, -1, -1, -1, -1, 8640, 8748, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "wh"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8667, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "whi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8694, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "whil"
  -1, -1, -1, -1, -1, 8721, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "while"
  (TokenType$1._while << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "wi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8775, -1, -1, -1, -1, -1, -1,
  // "wit"
  -1, -1, -1, -1, -1, -1, -1, -1, 8802, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "with"
  (TokenType$1._with << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "y"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8856, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yi"
  -1, -1, -1, -1, -1, 8883, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yie"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8910, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yiel"
  -1, -1, -1, -1, 8937, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yield"
  (TokenType$1._yield << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
]);

/**
 * Read an identifier, producing either a name token or matching on one of the existing keywords.
 * For performance, we pre-generate big decision tree that we traverse. Each node represents a
 * prefix and has 27 values, where the first value is the token or contextual token, if any (-1 if
 * not), and the other 26 values are the transitions to other nodes, or -1 to stop.
 */
function readWord$2() {
  let treePos = 0;
  let code = 0;
  let pos = state$1.pos;
  while (pos < input.length) {
    code = input.charCodeAt(pos);
    if (code < charCodes$1.lowercaseA || code > charCodes$1.lowercaseZ) {
      break;
    }
    const next = READ_WORD_TREE$1[treePos + (code - charCodes$1.lowercaseA) + 1];
    if (next === -1) {
      break;
    } else {
      treePos = next;
      pos++;
    }
  }

  const keywordValue = READ_WORD_TREE$1[treePos];
  if (keywordValue > -1 && !IS_IDENTIFIER_CHAR[code]) {
    state$1.pos = pos;
    if (keywordValue & 1) {
      finishToken$1(keywordValue >>> 1);
    } else {
      finishToken$1(TokenType$1.name, keywordValue >>> 1);
    }
    return;
  }

  while (pos < input.length) {
    const ch = input.charCodeAt(pos);
    if (IS_IDENTIFIER_CHAR[ch]) {
      pos++;
    } else if (ch === charCodes$1.backslash) {
      // \u
      pos += 2;
      if (input.charCodeAt(pos) === charCodes$1.leftCurlyBrace) {
        while (pos < input.length && input.charCodeAt(pos) !== charCodes$1.rightCurlyBrace) {
          pos++;
        }
        pos++;
      }
    } else if (ch === charCodes$1.atSign && input.charCodeAt(pos + 1) === charCodes$1.atSign) {
      pos += 2;
    } else {
      break;
    }
  }
  state$1.pos = pos;
  finishToken$1(TokenType$1.name);
}

/* eslint max-len: 0 */

var IdentifierRole$1; (function (IdentifierRole) {
  const Access = 0; IdentifierRole[IdentifierRole["Access"] = Access] = "Access";
  const ExportAccess = Access + 1; IdentifierRole[IdentifierRole["ExportAccess"] = ExportAccess] = "ExportAccess";
  const TopLevelDeclaration = ExportAccess + 1; IdentifierRole[IdentifierRole["TopLevelDeclaration"] = TopLevelDeclaration] = "TopLevelDeclaration";
  const FunctionScopedDeclaration = TopLevelDeclaration + 1; IdentifierRole[IdentifierRole["FunctionScopedDeclaration"] = FunctionScopedDeclaration] = "FunctionScopedDeclaration";
  const BlockScopedDeclaration = FunctionScopedDeclaration + 1; IdentifierRole[IdentifierRole["BlockScopedDeclaration"] = BlockScopedDeclaration] = "BlockScopedDeclaration";
  const ObjectShorthandTopLevelDeclaration = BlockScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandTopLevelDeclaration"] = ObjectShorthandTopLevelDeclaration] = "ObjectShorthandTopLevelDeclaration";
  const ObjectShorthandFunctionScopedDeclaration = ObjectShorthandTopLevelDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandFunctionScopedDeclaration"] = ObjectShorthandFunctionScopedDeclaration] = "ObjectShorthandFunctionScopedDeclaration";
  const ObjectShorthandBlockScopedDeclaration = ObjectShorthandFunctionScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandBlockScopedDeclaration"] = ObjectShorthandBlockScopedDeclaration] = "ObjectShorthandBlockScopedDeclaration";
  const ObjectShorthand = ObjectShorthandBlockScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthand"] = ObjectShorthand] = "ObjectShorthand";
  // Any identifier bound in an import statement, e.g. both A and b from
  // `import A, * as b from 'A';`
  const ImportDeclaration = ObjectShorthand + 1; IdentifierRole[IdentifierRole["ImportDeclaration"] = ImportDeclaration] = "ImportDeclaration";
  const ObjectKey = ImportDeclaration + 1; IdentifierRole[IdentifierRole["ObjectKey"] = ObjectKey] = "ObjectKey";
  // The `foo` in `import {foo as bar} from "./abc";`.
  const ImportAccess = ObjectKey + 1; IdentifierRole[IdentifierRole["ImportAccess"] = ImportAccess] = "ImportAccess";
})(IdentifierRole$1 || (IdentifierRole$1 = {}));

/**
 * Extra information on jsxTagStart tokens, used to determine which of the three
 * jsx functions are called in the automatic transform.
 */
var JSXRole$1; (function (JSXRole) {
  // The element is self-closing or has a body that resolves to empty. We
  // shouldn't emit children at all in this case.
  const NoChildren = 0; JSXRole[JSXRole["NoChildren"] = NoChildren] = "NoChildren";
  // The element has a single explicit child, which might still be an arbitrary
  // expression like an array. We should emit that expression as the children.
  const OneChild = NoChildren + 1; JSXRole[JSXRole["OneChild"] = OneChild] = "OneChild";
  // The element has at least two explicitly-specified children or has spread
  // children, so child positions are assumed to be "static". We should wrap
  // these children in an array.
  const StaticChildren = OneChild + 1; JSXRole[JSXRole["StaticChildren"] = StaticChildren] = "StaticChildren";
  // The element has a prop named "key" after a prop spread, so we should fall
  // back to the createElement function.
  const KeyAfterPropSpread = StaticChildren + 1; JSXRole[JSXRole["KeyAfterPropSpread"] = KeyAfterPropSpread] = "KeyAfterPropSpread";
})(JSXRole$1 || (JSXRole$1 = {}));

function isDeclaration$1(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole$1.TopLevelDeclaration ||
    role === IdentifierRole$1.FunctionScopedDeclaration ||
    role === IdentifierRole$1.BlockScopedDeclaration ||
    role === IdentifierRole$1.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole$1.ObjectShorthandFunctionScopedDeclaration ||
    role === IdentifierRole$1.ObjectShorthandBlockScopedDeclaration
  );
}

function isNonTopLevelDeclaration$1(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole$1.FunctionScopedDeclaration ||
    role === IdentifierRole$1.BlockScopedDeclaration ||
    role === IdentifierRole$1.ObjectShorthandFunctionScopedDeclaration ||
    role === IdentifierRole$1.ObjectShorthandBlockScopedDeclaration
  );
}

function isTopLevelDeclaration$1(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole$1.TopLevelDeclaration ||
    role === IdentifierRole$1.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole$1.ImportDeclaration
  );
}

function isBlockScopedDeclaration$1(token) {
  const role = token.identifierRole;
  // Treat top-level declarations as block scope since the distinction doesn't matter here.
  return (
    role === IdentifierRole$1.TopLevelDeclaration ||
    role === IdentifierRole$1.BlockScopedDeclaration ||
    role === IdentifierRole$1.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole$1.ObjectShorthandBlockScopedDeclaration
  );
}

function isFunctionScopedDeclaration$1(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole$1.FunctionScopedDeclaration ||
    role === IdentifierRole$1.ObjectShorthandFunctionScopedDeclaration
  );
}

function isObjectShorthandDeclaration$1(token) {
  return (
    token.identifierRole === IdentifierRole$1.ObjectShorthandTopLevelDeclaration ||
    token.identifierRole === IdentifierRole$1.ObjectShorthandBlockScopedDeclaration ||
    token.identifierRole === IdentifierRole$1.ObjectShorthandFunctionScopedDeclaration
  );
}

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.
class Token$1 {
  constructor() {
    this.type = state$1.type;
    this.contextualKeyword = state$1.contextualKeyword;
    this.start = state$1.start;
    this.end = state$1.end;
    this.scopeDepth = state$1.scopeDepth;
    this.isType = state$1.isType;
    this.identifierRole = null;
    this.jsxRole = null;
    this.shadowsGlobal = false;
    this.isAsyncOperation = false;
    this.contextId = null;
    this.rhsEndIndex = null;
    this.isExpression = false;
    this.numNullishCoalesceStarts = 0;
    this.numNullishCoalesceEnds = 0;
    this.isOptionalChainStart = false;
    this.isOptionalChainEnd = false;
    this.subscriptStartIndex = null;
    this.nullishStartIndex = null;
  }

  
  
  
  
  
  
  
  
  // Initially false for all tokens, then may be computed in a follow-up step that does scope
  // analysis.
  
  // Initially false for all tokens, but may be set during transform to mark it as containing an
  // await operation.
  
  
  // For assignments, the index of the RHS. For export tokens, the end of the export.
  
  // For class tokens, records if the class is a class expression or a class statement.
  
  // Number of times to insert a `nullishCoalesce(` snippet before this token.
  
  // Number of times to insert a `)` snippet after this token.
  
  // If true, insert an `optionalChain([` snippet before this token.
  
  // If true, insert a `])` snippet after this token.
  
  // Tag for `.`, `?.`, `[`, `?.[`, `(`, and `?.(` to denote the "root" token for this
  // subscript chain. This can be used to determine if this chain is an optional chain.
  
  // Tag for `??` operators to denote the root token for this nullish coalescing call.
  
}

// ## Tokenizer

// Move to the next token
function next$1() {
  state$1.tokens.push(new Token$1());
  nextToken$1();
}

// Call instead of next when inside a template, since that needs to be handled differently.
function nextTemplateToken$1() {
  state$1.tokens.push(new Token$1());
  state$1.start = state$1.pos;
  readTmplToken$1();
}

// The tokenizer never parses regexes by default. Instead, the parser is responsible for
// instructing it to parse a regex when we see a slash at the start of an expression.
function retokenizeSlashAsRegex$1() {
  if (state$1.type === TokenType$1.assign) {
    --state$1.pos;
  }
  readRegexp$1();
}

function pushTypeContext$1(existingTokensInType) {
  for (let i = state$1.tokens.length - existingTokensInType; i < state$1.tokens.length; i++) {
    state$1.tokens[i].isType = true;
  }
  const oldIsType = state$1.isType;
  state$1.isType = true;
  return oldIsType;
}

function popTypeContext$1(oldIsType) {
  state$1.isType = oldIsType;
}

function eat$1(type) {
  if (match$1(type)) {
    next$1();
    return true;
  } else {
    return false;
  }
}

function eatTypeToken$1(tokenType) {
  const oldIsType = state$1.isType;
  state$1.isType = true;
  eat$1(tokenType);
  state$1.isType = oldIsType;
}

function match$1(type) {
  return state$1.type === type;
}

function lookaheadType$1() {
  const snapshot = state$1.snapshot();
  next$1();
  const type = state$1.type;
  state$1.restoreFromSnapshot(snapshot);
  return type;
}

class TypeAndKeyword$1 {
  
  
  constructor(type, contextualKeyword) {
    this.type = type;
    this.contextualKeyword = contextualKeyword;
  }
}

function lookaheadTypeAndKeyword$1() {
  const snapshot = state$1.snapshot();
  next$1();
  const type = state$1.type;
  const contextualKeyword = state$1.contextualKeyword;
  state$1.restoreFromSnapshot(snapshot);
  return new TypeAndKeyword$1(type, contextualKeyword);
}

function nextTokenStart$1() {
  return nextTokenStartSince$1(state$1.pos);
}

function nextTokenStartSince$1(pos) {
  skipWhiteSpace.lastIndex = pos;
  const skip = skipWhiteSpace.exec(input);
  return pos + skip[0].length;
}

function lookaheadCharCode$1() {
  return input.charCodeAt(nextTokenStart$1());
}

// Read a single token, updating the parser object's token-related
// properties.
function nextToken$1() {
  skipSpace$1();
  state$1.start = state$1.pos;
  if (state$1.pos >= input.length) {
    const tokens = state$1.tokens;
    // We normally run past the end a bit, but if we're way past the end, avoid an infinite loop.
    // Also check the token positions rather than the types since sometimes we rewrite the token
    // type to something else.
    if (
      tokens.length >= 2 &&
      tokens[tokens.length - 1].start >= input.length &&
      tokens[tokens.length - 2].start >= input.length
    ) {
      unexpected$1("Unexpectedly reached the end of input.");
    }
    finishToken$1(TokenType$1.eof);
    return;
  }
  readToken$1(input.charCodeAt(state$1.pos));
}

function readToken$1(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (
    IS_IDENTIFIER_START[code] ||
    code === charCodes$1.backslash ||
    (code === charCodes$1.atSign && input.charCodeAt(state$1.pos + 1) === charCodes$1.atSign)
  ) {
    readWord$2();
  } else {
    getTokenFromCode$1(code);
  }
}

function skipBlockComment$1() {
  while (
    input.charCodeAt(state$1.pos) !== charCodes$1.asterisk ||
    input.charCodeAt(state$1.pos + 1) !== charCodes$1.slash
  ) {
    state$1.pos++;
    if (state$1.pos > input.length) {
      unexpected$1("Unterminated comment", state$1.pos - 2);
      return;
    }
  }
  state$1.pos += 2;
}

function skipLineComment$1(startSkip) {
  let ch = input.charCodeAt((state$1.pos += startSkip));
  if (state$1.pos < input.length) {
    while (
      ch !== charCodes$1.lineFeed &&
      ch !== charCodes$1.carriageReturn &&
      ch !== charCodes$1.lineSeparator &&
      ch !== charCodes$1.paragraphSeparator &&
      ++state$1.pos < input.length
    ) {
      ch = input.charCodeAt(state$1.pos);
    }
  }
}

// Called at the start of the parse and after every token. Skips
// whitespace and comments.
function skipSpace$1() {
  while (state$1.pos < input.length) {
    const ch = input.charCodeAt(state$1.pos);
    switch (ch) {
      case charCodes$1.carriageReturn:
        if (input.charCodeAt(state$1.pos + 1) === charCodes$1.lineFeed) {
          ++state$1.pos;
        }

      case charCodes$1.lineFeed:
      case charCodes$1.lineSeparator:
      case charCodes$1.paragraphSeparator:
        ++state$1.pos;
        break;

      case charCodes$1.slash:
        switch (input.charCodeAt(state$1.pos + 1)) {
          case charCodes$1.asterisk:
            state$1.pos += 2;
            skipBlockComment$1();
            break;

          case charCodes$1.slash:
            skipLineComment$1(2);
            break;

          default:
            return;
        }
        break;

      default:
        if (IS_WHITESPACE[ch]) {
          ++state$1.pos;
        } else {
          return;
        }
    }
  }
}

// Called at the end of every token. Sets various fields, and skips the space after the token, so
// that the next one's `start` will point at the right position.
function finishToken$1(
  type,
  contextualKeyword = ContextualKeyword$1.NONE,
) {
  state$1.end = state$1.pos;
  state$1.type = type;
  state$1.contextualKeyword = contextualKeyword;
}

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
function readToken_dot$1() {
  const nextChar = input.charCodeAt(state$1.pos + 1);
  if (nextChar >= charCodes$1.digit0 && nextChar <= charCodes$1.digit9) {
    readNumber$1(true);
    return;
  }

  if (nextChar === charCodes$1.dot && input.charCodeAt(state$1.pos + 2) === charCodes$1.dot) {
    state$1.pos += 3;
    finishToken$1(TokenType$1.ellipsis);
  } else {
    ++state$1.pos;
    finishToken$1(TokenType$1.dot);
  }
}

function readToken_slash$1() {
  const nextChar = input.charCodeAt(state$1.pos + 1);
  if (nextChar === charCodes$1.equalsTo) {
    finishOp$1(TokenType$1.assign, 2);
  } else {
    finishOp$1(TokenType$1.slash, 1);
  }
}

function readToken_mult_modulo$1(code) {
  // '%*'
  let tokenType = code === charCodes$1.asterisk ? TokenType$1.star : TokenType$1.modulo;
  let width = 1;
  let nextChar = input.charCodeAt(state$1.pos + 1);

  // Exponentiation operator **
  if (code === charCodes$1.asterisk && nextChar === charCodes$1.asterisk) {
    width++;
    nextChar = input.charCodeAt(state$1.pos + 2);
    tokenType = TokenType$1.exponent;
  }

  // Match *= or %=, disallowing *=> which can be valid in flow.
  if (
    nextChar === charCodes$1.equalsTo &&
    input.charCodeAt(state$1.pos + 2) !== charCodes$1.greaterThan
  ) {
    width++;
    tokenType = TokenType$1.assign;
  }

  finishOp$1(tokenType, width);
}

function readToken_pipe_amp$1(code) {
  // '|&'
  const nextChar = input.charCodeAt(state$1.pos + 1);

  if (nextChar === code) {
    if (input.charCodeAt(state$1.pos + 2) === charCodes$1.equalsTo) {
      // ||= or &&=
      finishOp$1(TokenType$1.assign, 3);
    } else {
      // || or &&
      finishOp$1(code === charCodes$1.verticalBar ? TokenType$1.logicalOR : TokenType$1.logicalAND, 2);
    }
    return;
  }

  if (code === charCodes$1.verticalBar) {
    // '|>'
    if (nextChar === charCodes$1.greaterThan) {
      finishOp$1(TokenType$1.pipeline, 2);
      return;
    } else if (nextChar === charCodes$1.rightCurlyBrace && isFlowEnabled) {
      // '|}'
      finishOp$1(TokenType$1.braceBarR, 2);
      return;
    }
  }

  if (nextChar === charCodes$1.equalsTo) {
    finishOp$1(TokenType$1.assign, 2);
    return;
  }

  finishOp$1(code === charCodes$1.verticalBar ? TokenType$1.bitwiseOR : TokenType$1.bitwiseAND, 1);
}

function readToken_caret$1() {
  // '^'
  const nextChar = input.charCodeAt(state$1.pos + 1);
  if (nextChar === charCodes$1.equalsTo) {
    finishOp$1(TokenType$1.assign, 2);
  } else {
    finishOp$1(TokenType$1.bitwiseXOR, 1);
  }
}

function readToken_plus_min$1(code) {
  // '+-'
  const nextChar = input.charCodeAt(state$1.pos + 1);

  if (nextChar === code) {
    // Tentatively call this a prefix operator, but it might be changed to postfix later.
    finishOp$1(TokenType$1.preIncDec, 2);
    return;
  }

  if (nextChar === charCodes$1.equalsTo) {
    finishOp$1(TokenType$1.assign, 2);
  } else if (code === charCodes$1.plusSign) {
    finishOp$1(TokenType$1.plus, 1);
  } else {
    finishOp$1(TokenType$1.minus, 1);
  }
}

function readToken_lt$1() {
  const nextChar = input.charCodeAt(state$1.pos + 1);

  if (nextChar === charCodes$1.lessThan) {
    if (input.charCodeAt(state$1.pos + 2) === charCodes$1.equalsTo) {
      finishOp$1(TokenType$1.assign, 3);
      return;
    }
    // We see <<, but need to be really careful about whether to treat it as a
    // true left-shift or as two < tokens.
    if (state$1.isType) {
      // Within a type, << might come up in a snippet like `Array<<T>() => void>`,
      // so treat it as two < tokens. Importantly, this should only override <<
      // rather than other tokens like <= . If we treated <= as < in a type
      // context, then the snippet `a as T <= 1` would incorrectly start parsing
      // a type argument on T. We don't need to worry about `a as T << 1`
      // because TypeScript disallows that syntax.
      finishOp$1(TokenType$1.lessThan, 1);
    } else {
      // Outside a type, this might be a true left-shift operator, or it might
      // still be two open-type-arg tokens, such as in `f<<T>() => void>()`. We
      // look at the token while considering the `f`, so we don't yet know that
      // we're in a type context. In this case, we initially tokenize as a
      // left-shift and correct after-the-fact as necessary in
      // tsParseTypeArgumentsWithPossibleBitshift .
      finishOp$1(TokenType$1.bitShiftL, 2);
    }
    return;
  }

  if (nextChar === charCodes$1.equalsTo) {
    // <=
    finishOp$1(TokenType$1.relationalOrEqual, 2);
  } else {
    finishOp$1(TokenType$1.lessThan, 1);
  }
}

function readToken_gt$1() {
  if (state$1.isType) {
    // Avoid right-shift for things like `Array<Array<string>>` and
    // greater-than-or-equal for things like `const a: Array<number>=[];`.
    finishOp$1(TokenType$1.greaterThan, 1);
    return;
  }

  const nextChar = input.charCodeAt(state$1.pos + 1);

  if (nextChar === charCodes$1.greaterThan) {
    const size = input.charCodeAt(state$1.pos + 2) === charCodes$1.greaterThan ? 3 : 2;
    if (input.charCodeAt(state$1.pos + size) === charCodes$1.equalsTo) {
      finishOp$1(TokenType$1.assign, size + 1);
      return;
    }
    finishOp$1(TokenType$1.bitShiftR, size);
    return;
  }

  if (nextChar === charCodes$1.equalsTo) {
    // >=
    finishOp$1(TokenType$1.relationalOrEqual, 2);
  } else {
    finishOp$1(TokenType$1.greaterThan, 1);
  }
}

/**
 * Reinterpret a possible > token when transitioning from a type to a non-type
 * context.
 *
 * This comes up in two situations where >= needs to be treated as one token:
 * - After an `as` expression, like in the code `a as T >= 1`.
 * - In a type argument in an expression context, e.g. `f(a < b, c >= d)`, we
 *   need to see the token as >= so that we get an error and backtrack to
 *   normal expression parsing.
 *
 * Other situations require >= to be seen as two tokens, e.g.
 * `const x: Array<T>=[];`, so it's important to treat > as its own token in
 * typical type parsing situations.
 */
function rescan_gt$1() {
  if (state$1.type === TokenType$1.greaterThan) {
    state$1.pos -= 1;
    readToken_gt$1();
  }
}

function readToken_eq_excl$1(code) {
  // '=!'
  const nextChar = input.charCodeAt(state$1.pos + 1);
  if (nextChar === charCodes$1.equalsTo) {
    finishOp$1(TokenType$1.equality, input.charCodeAt(state$1.pos + 2) === charCodes$1.equalsTo ? 3 : 2);
    return;
  }
  if (code === charCodes$1.equalsTo && nextChar === charCodes$1.greaterThan) {
    // '=>'
    state$1.pos += 2;
    finishToken$1(TokenType$1.arrow);
    return;
  }
  finishOp$1(code === charCodes$1.equalsTo ? TokenType$1.eq : TokenType$1.bang, 1);
}

function readToken_question$1() {
  // '?'
  const nextChar = input.charCodeAt(state$1.pos + 1);
  const nextChar2 = input.charCodeAt(state$1.pos + 2);
  if (
    nextChar === charCodes$1.questionMark &&
    // In Flow (but not TypeScript), ??string is a valid type that should be
    // tokenized as two individual ? tokens.
    !(isFlowEnabled && state$1.isType)
  ) {
    if (nextChar2 === charCodes$1.equalsTo) {
      // '??='
      finishOp$1(TokenType$1.assign, 3);
    } else {
      // '??'
      finishOp$1(TokenType$1.nullishCoalescing, 2);
    }
  } else if (
    nextChar === charCodes$1.dot &&
    !(nextChar2 >= charCodes$1.digit0 && nextChar2 <= charCodes$1.digit9)
  ) {
    // '.' not followed by a number
    state$1.pos += 2;
    finishToken$1(TokenType$1.questionDot);
  } else {
    ++state$1.pos;
    finishToken$1(TokenType$1.question);
  }
}

function getTokenFromCode$1(code) {
  switch (code) {
    case charCodes$1.numberSign:
      ++state$1.pos;
      finishToken$1(TokenType$1.hash);
      return;

    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.

    case charCodes$1.dot:
      readToken_dot$1();
      return;

    // Punctuation tokens.
    case charCodes$1.leftParenthesis:
      ++state$1.pos;
      finishToken$1(TokenType$1.parenL);
      return;
    case charCodes$1.rightParenthesis:
      ++state$1.pos;
      finishToken$1(TokenType$1.parenR);
      return;
    case charCodes$1.semicolon:
      ++state$1.pos;
      finishToken$1(TokenType$1.semi);
      return;
    case charCodes$1.comma:
      ++state$1.pos;
      finishToken$1(TokenType$1.comma);
      return;
    case charCodes$1.leftSquareBracket:
      ++state$1.pos;
      finishToken$1(TokenType$1.bracketL);
      return;
    case charCodes$1.rightSquareBracket:
      ++state$1.pos;
      finishToken$1(TokenType$1.bracketR);
      return;

    case charCodes$1.leftCurlyBrace:
      if (isFlowEnabled && input.charCodeAt(state$1.pos + 1) === charCodes$1.verticalBar) {
        finishOp$1(TokenType$1.braceBarL, 2);
      } else {
        ++state$1.pos;
        finishToken$1(TokenType$1.braceL);
      }
      return;

    case charCodes$1.rightCurlyBrace:
      ++state$1.pos;
      finishToken$1(TokenType$1.braceR);
      return;

    case charCodes$1.colon:
      if (input.charCodeAt(state$1.pos + 1) === charCodes$1.colon) {
        finishOp$1(TokenType$1.doubleColon, 2);
      } else {
        ++state$1.pos;
        finishToken$1(TokenType$1.colon);
      }
      return;

    case charCodes$1.questionMark:
      readToken_question$1();
      return;
    case charCodes$1.atSign:
      ++state$1.pos;
      finishToken$1(TokenType$1.at);
      return;

    case charCodes$1.graveAccent:
      ++state$1.pos;
      finishToken$1(TokenType$1.backQuote);
      return;

    case charCodes$1.digit0: {
      const nextChar = input.charCodeAt(state$1.pos + 1);
      // '0x', '0X', '0o', '0O', '0b', '0B'
      if (
        nextChar === charCodes$1.lowercaseX ||
        nextChar === charCodes$1.uppercaseX ||
        nextChar === charCodes$1.lowercaseO ||
        nextChar === charCodes$1.uppercaseO ||
        nextChar === charCodes$1.lowercaseB ||
        nextChar === charCodes$1.uppercaseB
      ) {
        readRadixNumber$1();
        return;
      }
    }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case charCodes$1.digit1:
    case charCodes$1.digit2:
    case charCodes$1.digit3:
    case charCodes$1.digit4:
    case charCodes$1.digit5:
    case charCodes$1.digit6:
    case charCodes$1.digit7:
    case charCodes$1.digit8:
    case charCodes$1.digit9:
      readNumber$1(false);
      return;

    // Quotes produce strings.
    case charCodes$1.quotationMark:
    case charCodes$1.apostrophe:
      readString$1(code);
      return;

    // Operators are parsed inline in tiny state machines. '=' (charCodes.equalsTo) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case charCodes$1.slash:
      readToken_slash$1();
      return;

    case charCodes$1.percentSign:
    case charCodes$1.asterisk:
      readToken_mult_modulo$1(code);
      return;

    case charCodes$1.verticalBar:
    case charCodes$1.ampersand:
      readToken_pipe_amp$1(code);
      return;

    case charCodes$1.caret:
      readToken_caret$1();
      return;

    case charCodes$1.plusSign:
    case charCodes$1.dash:
      readToken_plus_min$1(code);
      return;

    case charCodes$1.lessThan:
      readToken_lt$1();
      return;

    case charCodes$1.greaterThan:
      readToken_gt$1();
      return;

    case charCodes$1.equalsTo:
    case charCodes$1.exclamationMark:
      readToken_eq_excl$1(code);
      return;

    case charCodes$1.tilde:
      finishOp$1(TokenType$1.tilde, 1);
      return;
  }

  unexpected$1(`Unexpected character '${String.fromCharCode(code)}'`, state$1.pos);
}

function finishOp$1(type, size) {
  state$1.pos += size;
  finishToken$1(type);
}

function readRegexp$1() {
  const start = state$1.pos;
  let escaped = false;
  let inClass = false;
  for (;;) {
    if (state$1.pos >= input.length) {
      unexpected$1("Unterminated regular expression", start);
      return;
    }
    const code = input.charCodeAt(state$1.pos);
    if (escaped) {
      escaped = false;
    } else {
      if (code === charCodes$1.leftSquareBracket) {
        inClass = true;
      } else if (code === charCodes$1.rightSquareBracket && inClass) {
        inClass = false;
      } else if (code === charCodes$1.slash && !inClass) {
        break;
      }
      escaped = code === charCodes$1.backslash;
    }
    ++state$1.pos;
  }
  ++state$1.pos;
  // Need to use `skipWord` because '\uXXXX' sequences are allowed here (don't ask).
  skipWord$1();

  finishToken$1(TokenType$1.regexp);
}

/**
 * Read a decimal integer. Note that this can't be unified with the similar code
 * in readRadixNumber (which also handles hex digits) because "e" needs to be
 * the end of the integer so that we can properly handle scientific notation.
 */
function readInt$1() {
  while (true) {
    const code = input.charCodeAt(state$1.pos);
    if ((code >= charCodes$1.digit0 && code <= charCodes$1.digit9) || code === charCodes$1.underscore) {
      state$1.pos++;
    } else {
      break;
    }
  }
}

function readRadixNumber$1() {
  state$1.pos += 2; // 0x

  // Walk to the end of the number, allowing hex digits.
  while (true) {
    const code = input.charCodeAt(state$1.pos);
    if (
      (code >= charCodes$1.digit0 && code <= charCodes$1.digit9) ||
      (code >= charCodes$1.lowercaseA && code <= charCodes$1.lowercaseF) ||
      (code >= charCodes$1.uppercaseA && code <= charCodes$1.uppercaseF) ||
      code === charCodes$1.underscore
    ) {
      state$1.pos++;
    } else {
      break;
    }
  }

  const nextChar = input.charCodeAt(state$1.pos);
  if (nextChar === charCodes$1.lowercaseN) {
    ++state$1.pos;
    finishToken$1(TokenType$1.bigint);
  } else {
    finishToken$1(TokenType$1.num);
  }
}

// Read an integer, octal integer, or floating-point number.
function readNumber$1(startsWithDot) {
  let isBigInt = false;
  let isDecimal = false;

  if (!startsWithDot) {
    readInt$1();
  }

  let nextChar = input.charCodeAt(state$1.pos);
  if (nextChar === charCodes$1.dot) {
    ++state$1.pos;
    readInt$1();
    nextChar = input.charCodeAt(state$1.pos);
  }

  if (nextChar === charCodes$1.uppercaseE || nextChar === charCodes$1.lowercaseE) {
    nextChar = input.charCodeAt(++state$1.pos);
    if (nextChar === charCodes$1.plusSign || nextChar === charCodes$1.dash) {
      ++state$1.pos;
    }
    readInt$1();
    nextChar = input.charCodeAt(state$1.pos);
  }

  if (nextChar === charCodes$1.lowercaseN) {
    ++state$1.pos;
    isBigInt = true;
  } else if (nextChar === charCodes$1.lowercaseM) {
    ++state$1.pos;
    isDecimal = true;
  }

  if (isBigInt) {
    finishToken$1(TokenType$1.bigint);
    return;
  }

  if (isDecimal) {
    finishToken$1(TokenType$1.decimal);
    return;
  }

  finishToken$1(TokenType$1.num);
}

function readString$1(quote) {
  state$1.pos++;
  for (;;) {
    if (state$1.pos >= input.length) {
      unexpected$1("Unterminated string constant");
      return;
    }
    const ch = input.charCodeAt(state$1.pos);
    if (ch === charCodes$1.backslash) {
      state$1.pos++;
    } else if (ch === quote) {
      break;
    }
    state$1.pos++;
  }
  state$1.pos++;
  finishToken$1(TokenType$1.string);
}

// Reads template string tokens.
function readTmplToken$1() {
  for (;;) {
    if (state$1.pos >= input.length) {
      unexpected$1("Unterminated template");
      return;
    }
    const ch = input.charCodeAt(state$1.pos);
    if (
      ch === charCodes$1.graveAccent ||
      (ch === charCodes$1.dollarSign && input.charCodeAt(state$1.pos + 1) === charCodes$1.leftCurlyBrace)
    ) {
      if (state$1.pos === state$1.start && match$1(TokenType$1.template)) {
        if (ch === charCodes$1.dollarSign) {
          state$1.pos += 2;
          finishToken$1(TokenType$1.dollarBraceL);
          return;
        } else {
          ++state$1.pos;
          finishToken$1(TokenType$1.backQuote);
          return;
        }
      }
      finishToken$1(TokenType$1.template);
      return;
    }
    if (ch === charCodes$1.backslash) {
      state$1.pos++;
    }
    state$1.pos++;
  }
}

// Skip to the end of the current word. Note that this is the same as the snippet at the end of
// readWord, but calling skipWord from readWord seems to slightly hurt performance from some rough
// measurements.
function skipWord$1() {
  while (state$1.pos < input.length) {
    const ch = input.charCodeAt(state$1.pos);
    if (IS_IDENTIFIER_CHAR[ch]) {
      state$1.pos++;
    } else if (ch === charCodes$1.backslash) {
      // \u
      state$1.pos += 2;
      if (input.charCodeAt(state$1.pos) === charCodes$1.leftCurlyBrace) {
        while (
          state$1.pos < input.length &&
          input.charCodeAt(state$1.pos) !== charCodes$1.rightCurlyBrace
        ) {
          state$1.pos++;
        }
        state$1.pos++;
      }
    } else {
      break;
    }
  }
}

/**
 * Determine information about this named import or named export specifier.
 *
 * This syntax is the `a` from statements like these:
 * import {A} from "./foo";
 * export {A};
 * export {A} from "./foo";
 *
 * As it turns out, we can exactly characterize the syntax meaning by simply
 * counting the number of tokens, which can be from 1 to 4:
 * {A}
 * {type A}
 * {A as B}
 * {type A as B}
 *
 * In the type case, we never actually need the names in practice, so don't get
 * them.
 *
 * TODO: There's some redundancy with the type detection here and the isType
 * flag that's already present on tokens in TS mode. This function could
 * potentially be simplified and/or pushed to the call sites to avoid the object
 * allocation.
 */
function getImportExportSpecifierInfo$2(
  tokens,
  index = tokens.currentIndex(),
) {
  let endIndex = index + 1;
  if (isSpecifierEnd$1(tokens, endIndex)) {
    // import {A}
    const name = tokens.identifierNameAtIndex(index);
    return {
      isType: false,
      leftName: name,
      rightName: name,
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd$1(tokens, endIndex)) {
    // import {type A}
    return {
      isType: true,
      leftName: null,
      rightName: null,
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd$1(tokens, endIndex)) {
    // import {A as B}
    return {
      isType: false,
      leftName: tokens.identifierNameAtIndex(index),
      rightName: tokens.identifierNameAtIndex(index + 2),
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd$1(tokens, endIndex)) {
    // import {type A as B}
    return {
      isType: true,
      leftName: null,
      rightName: null,
      endIndex,
    };
  }
  throw new Error(`Unexpected import/export specifier at ${index}`);
}

function isSpecifierEnd$1(tokens, index) {
  const token = tokens.tokens[index];
  return token.type === TokenType$1.braceR || token.type === TokenType$1.comma;
}

// Use a Map rather than object to avoid unexpected __proto__ access.
var XHTMLEntities = new Map([
  ["quot", "\u0022"],
  ["amp", "&"],
  ["apos", "\u0027"],
  ["lt", "<"],
  ["gt", ">"],
  ["nbsp", "\u00A0"],
  ["iexcl", "\u00A1"],
  ["cent", "\u00A2"],
  ["pound", "\u00A3"],
  ["curren", "\u00A4"],
  ["yen", "\u00A5"],
  ["brvbar", "\u00A6"],
  ["sect", "\u00A7"],
  ["uml", "\u00A8"],
  ["copy", "\u00A9"],
  ["ordf", "\u00AA"],
  ["laquo", "\u00AB"],
  ["not", "\u00AC"],
  ["shy", "\u00AD"],
  ["reg", "\u00AE"],
  ["macr", "\u00AF"],
  ["deg", "\u00B0"],
  ["plusmn", "\u00B1"],
  ["sup2", "\u00B2"],
  ["sup3", "\u00B3"],
  ["acute", "\u00B4"],
  ["micro", "\u00B5"],
  ["para", "\u00B6"],
  ["middot", "\u00B7"],
  ["cedil", "\u00B8"],
  ["sup1", "\u00B9"],
  ["ordm", "\u00BA"],
  ["raquo", "\u00BB"],
  ["frac14", "\u00BC"],
  ["frac12", "\u00BD"],
  ["frac34", "\u00BE"],
  ["iquest", "\u00BF"],
  ["Agrave", "\u00C0"],
  ["Aacute", "\u00C1"],
  ["Acirc", "\u00C2"],
  ["Atilde", "\u00C3"],
  ["Auml", "\u00C4"],
  ["Aring", "\u00C5"],
  ["AElig", "\u00C6"],
  ["Ccedil", "\u00C7"],
  ["Egrave", "\u00C8"],
  ["Eacute", "\u00C9"],
  ["Ecirc", "\u00CA"],
  ["Euml", "\u00CB"],
  ["Igrave", "\u00CC"],
  ["Iacute", "\u00CD"],
  ["Icirc", "\u00CE"],
  ["Iuml", "\u00CF"],
  ["ETH", "\u00D0"],
  ["Ntilde", "\u00D1"],
  ["Ograve", "\u00D2"],
  ["Oacute", "\u00D3"],
  ["Ocirc", "\u00D4"],
  ["Otilde", "\u00D5"],
  ["Ouml", "\u00D6"],
  ["times", "\u00D7"],
  ["Oslash", "\u00D8"],
  ["Ugrave", "\u00D9"],
  ["Uacute", "\u00DA"],
  ["Ucirc", "\u00DB"],
  ["Uuml", "\u00DC"],
  ["Yacute", "\u00DD"],
  ["THORN", "\u00DE"],
  ["szlig", "\u00DF"],
  ["agrave", "\u00E0"],
  ["aacute", "\u00E1"],
  ["acirc", "\u00E2"],
  ["atilde", "\u00E3"],
  ["auml", "\u00E4"],
  ["aring", "\u00E5"],
  ["aelig", "\u00E6"],
  ["ccedil", "\u00E7"],
  ["egrave", "\u00E8"],
  ["eacute", "\u00E9"],
  ["ecirc", "\u00EA"],
  ["euml", "\u00EB"],
  ["igrave", "\u00EC"],
  ["iacute", "\u00ED"],
  ["icirc", "\u00EE"],
  ["iuml", "\u00EF"],
  ["eth", "\u00F0"],
  ["ntilde", "\u00F1"],
  ["ograve", "\u00F2"],
  ["oacute", "\u00F3"],
  ["ocirc", "\u00F4"],
  ["otilde", "\u00F5"],
  ["ouml", "\u00F6"],
  ["divide", "\u00F7"],
  ["oslash", "\u00F8"],
  ["ugrave", "\u00F9"],
  ["uacute", "\u00FA"],
  ["ucirc", "\u00FB"],
  ["uuml", "\u00FC"],
  ["yacute", "\u00FD"],
  ["thorn", "\u00FE"],
  ["yuml", "\u00FF"],
  ["OElig", "\u0152"],
  ["oelig", "\u0153"],
  ["Scaron", "\u0160"],
  ["scaron", "\u0161"],
  ["Yuml", "\u0178"],
  ["fnof", "\u0192"],
  ["circ", "\u02C6"],
  ["tilde", "\u02DC"],
  ["Alpha", "\u0391"],
  ["Beta", "\u0392"],
  ["Gamma", "\u0393"],
  ["Delta", "\u0394"],
  ["Epsilon", "\u0395"],
  ["Zeta", "\u0396"],
  ["Eta", "\u0397"],
  ["Theta", "\u0398"],
  ["Iota", "\u0399"],
  ["Kappa", "\u039A"],
  ["Lambda", "\u039B"],
  ["Mu", "\u039C"],
  ["Nu", "\u039D"],
  ["Xi", "\u039E"],
  ["Omicron", "\u039F"],
  ["Pi", "\u03A0"],
  ["Rho", "\u03A1"],
  ["Sigma", "\u03A3"],
  ["Tau", "\u03A4"],
  ["Upsilon", "\u03A5"],
  ["Phi", "\u03A6"],
  ["Chi", "\u03A7"],
  ["Psi", "\u03A8"],
  ["Omega", "\u03A9"],
  ["alpha", "\u03B1"],
  ["beta", "\u03B2"],
  ["gamma", "\u03B3"],
  ["delta", "\u03B4"],
  ["epsilon", "\u03B5"],
  ["zeta", "\u03B6"],
  ["eta", "\u03B7"],
  ["theta", "\u03B8"],
  ["iota", "\u03B9"],
  ["kappa", "\u03BA"],
  ["lambda", "\u03BB"],
  ["mu", "\u03BC"],
  ["nu", "\u03BD"],
  ["xi", "\u03BE"],
  ["omicron", "\u03BF"],
  ["pi", "\u03C0"],
  ["rho", "\u03C1"],
  ["sigmaf", "\u03C2"],
  ["sigma", "\u03C3"],
  ["tau", "\u03C4"],
  ["upsilon", "\u03C5"],
  ["phi", "\u03C6"],
  ["chi", "\u03C7"],
  ["psi", "\u03C8"],
  ["omega", "\u03C9"],
  ["thetasym", "\u03D1"],
  ["upsih", "\u03D2"],
  ["piv", "\u03D6"],
  ["ensp", "\u2002"],
  ["emsp", "\u2003"],
  ["thinsp", "\u2009"],
  ["zwnj", "\u200C"],
  ["zwj", "\u200D"],
  ["lrm", "\u200E"],
  ["rlm", "\u200F"],
  ["ndash", "\u2013"],
  ["mdash", "\u2014"],
  ["lsquo", "\u2018"],
  ["rsquo", "\u2019"],
  ["sbquo", "\u201A"],
  ["ldquo", "\u201C"],
  ["rdquo", "\u201D"],
  ["bdquo", "\u201E"],
  ["dagger", "\u2020"],
  ["Dagger", "\u2021"],
  ["bull", "\u2022"],
  ["hellip", "\u2026"],
  ["permil", "\u2030"],
  ["prime", "\u2032"],
  ["Prime", "\u2033"],
  ["lsaquo", "\u2039"],
  ["rsaquo", "\u203A"],
  ["oline", "\u203E"],
  ["frasl", "\u2044"],
  ["euro", "\u20AC"],
  ["image", "\u2111"],
  ["weierp", "\u2118"],
  ["real", "\u211C"],
  ["trade", "\u2122"],
  ["alefsym", "\u2135"],
  ["larr", "\u2190"],
  ["uarr", "\u2191"],
  ["rarr", "\u2192"],
  ["darr", "\u2193"],
  ["harr", "\u2194"],
  ["crarr", "\u21B5"],
  ["lArr", "\u21D0"],
  ["uArr", "\u21D1"],
  ["rArr", "\u21D2"],
  ["dArr", "\u21D3"],
  ["hArr", "\u21D4"],
  ["forall", "\u2200"],
  ["part", "\u2202"],
  ["exist", "\u2203"],
  ["empty", "\u2205"],
  ["nabla", "\u2207"],
  ["isin", "\u2208"],
  ["notin", "\u2209"],
  ["ni", "\u220B"],
  ["prod", "\u220F"],
  ["sum", "\u2211"],
  ["minus", "\u2212"],
  ["lowast", "\u2217"],
  ["radic", "\u221A"],
  ["prop", "\u221D"],
  ["infin", "\u221E"],
  ["ang", "\u2220"],
  ["and", "\u2227"],
  ["or", "\u2228"],
  ["cap", "\u2229"],
  ["cup", "\u222A"],
  ["int", "\u222B"],
  ["there4", "\u2234"],
  ["sim", "\u223C"],
  ["cong", "\u2245"],
  ["asymp", "\u2248"],
  ["ne", "\u2260"],
  ["equiv", "\u2261"],
  ["le", "\u2264"],
  ["ge", "\u2265"],
  ["sub", "\u2282"],
  ["sup", "\u2283"],
  ["nsub", "\u2284"],
  ["sube", "\u2286"],
  ["supe", "\u2287"],
  ["oplus", "\u2295"],
  ["otimes", "\u2297"],
  ["perp", "\u22A5"],
  ["sdot", "\u22C5"],
  ["lceil", "\u2308"],
  ["rceil", "\u2309"],
  ["lfloor", "\u230A"],
  ["rfloor", "\u230B"],
  ["lang", "\u2329"],
  ["rang", "\u232A"],
  ["loz", "\u25CA"],
  ["spades", "\u2660"],
  ["clubs", "\u2663"],
  ["hearts", "\u2665"],
  ["diams", "\u2666"],
]);

function getJSXPragmaInfo$2(options) {
  const [base, suffix] = splitPragma$1(options.jsxPragma || "React.createElement");
  const [fragmentBase, fragmentSuffix] = splitPragma$1(options.jsxFragmentPragma || "React.Fragment");
  return {base, suffix, fragmentBase, fragmentSuffix};
}

function splitPragma$1(pragma) {
  let dotIndex = pragma.indexOf(".");
  if (dotIndex === -1) {
    dotIndex = pragma.length;
  }
  return [pragma.slice(0, dotIndex), pragma.slice(dotIndex)];
}

class Transformer$2 {
  // Return true if anything was processed, false otherwise.
  

  getPrefixCode() {
    return "";
  }

  getHoistedCode() {
    return "";
  }

  getSuffixCode() {
    return "";
  }
}

class JSXTransformer$2 extends Transformer$2 {
  
  
  

  // State for calculating the line number of each JSX tag in development.
  __init() {this.lastLineNumber = 1;}
  __init2() {this.lastIndex = 0;}

  // In development, variable name holding the name of the current file.
  __init3() {this.filenameVarName = null;}
  // Mapping of claimed names for imports in the automatic transform, e,g.
  // {jsx: "_jsx"}. This determines which imports to generate in the prefix.
  __init4() {this.esmAutomaticImportNameResolutions = {};}
  // When automatically adding imports in CJS mode, we store the variable name
  // holding the imported CJS module so we can require it in the prefix.
  __init5() {this.cjsAutomaticModuleNameResolutions = {};}

  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     nameManager,
     options,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.nameManager = nameManager;this.options = options;JSXTransformer$2.prototype.__init.call(this);JSXTransformer$2.prototype.__init2.call(this);JSXTransformer$2.prototype.__init3.call(this);JSXTransformer$2.prototype.__init4.call(this);JSXTransformer$2.prototype.__init5.call(this);    this.jsxPragmaInfo = getJSXPragmaInfo$2(options);
    this.isAutomaticRuntime = options.jsxRuntime === "automatic";
    this.jsxImportSource = options.jsxImportSource || "react";
  }

  process() {
    if (this.tokens.matches1(TokenType$1.jsxTagStart)) {
      this.processJSXTag();
      return true;
    }
    return false;
  }

  getPrefixCode() {
    let prefix = "";
    if (this.filenameVarName) {
      prefix += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`;
    }
    if (this.isAutomaticRuntime) {
      if (this.importProcessor) {
        // CJS mode: emit require statements for all modules that were referenced.
        for (const [path, resolvedName] of Object.entries(this.cjsAutomaticModuleNameResolutions)) {
          prefix += `var ${resolvedName} = require("${path}");`;
        }
      } else {
        // ESM mode: consolidate and emit import statements for referenced names.
        const {createElement: createElementResolution, ...otherResolutions} =
          this.esmAutomaticImportNameResolutions;
        if (createElementResolution) {
          prefix += `import {createElement as ${createElementResolution}} from "${this.jsxImportSource}";`;
        }
        const importSpecifiers = Object.entries(otherResolutions)
          .map(([name, resolvedName]) => `${name} as ${resolvedName}`)
          .join(", ");
        if (importSpecifiers) {
          const importPath =
            this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
          prefix += `import {${importSpecifiers}} from "${importPath}";`;
        }
      }
    }
    return prefix;
  }

  processJSXTag() {
    const {jsxRole, start} = this.tokens.currentToken();
    // Calculate line number information at the very start (if in development
    // mode) so that the information is guaranteed to be queried in token order.
    const elementLocationCode = this.options.production ? null : this.getElementLocationCode(start);
    if (this.isAutomaticRuntime && jsxRole !== JSXRole$1.KeyAfterPropSpread) {
      this.transformTagToJSXFunc(elementLocationCode, jsxRole);
    } else {
      this.transformTagToCreateElement(elementLocationCode);
    }
  }

  getElementLocationCode(firstTokenStart) {
    const lineNumber = this.getLineNumberForIndex(firstTokenStart);
    return `lineNumber: ${lineNumber}`;
  }

  /**
   * Get the line number for this source position. This is calculated lazily and
   * must be called in increasing order by index.
   */
  getLineNumberForIndex(index) {
    const code = this.tokens.code;
    while (this.lastIndex < index && this.lastIndex < code.length) {
      if (code[this.lastIndex] === "\n") {
        this.lastLineNumber++;
      }
      this.lastIndex++;
    }
    return this.lastLineNumber;
  }

  /**
   * Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is
   * the primary transformation for the automatic transform.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * jsxs('div', {a: 1, children: ["Hello", x]}, 2)
   */
  transformTagToJSXFunc(elementLocationCode, jsxRole) {
    const isStatic = jsxRole === JSXRole$1.StaticChildren;
    // First tag is always jsxTagStart.
    this.tokens.replaceToken(this.getJSXFuncInvocationCode(isStatic));

    let keyCode = null;
    if (this.tokens.matches1(TokenType$1.jsxTagEnd)) {
      // Fragment syntax.
      this.tokens.replaceToken(`${this.getFragmentCode()}, {`);
      this.processAutomaticChildrenAndEndProps(jsxRole);
    } else {
      // Normal open tag or self-closing tag.
      this.processTagIntro();
      this.tokens.appendCode(", {");
      keyCode = this.processProps(true);

      if (this.tokens.matches2(TokenType$1.slash, TokenType$1.jsxTagEnd)) {
        // Self-closing tag, no children to add, so close the props.
        this.tokens.appendCode("}");
      } else if (this.tokens.matches1(TokenType$1.jsxTagEnd)) {
        // Tag with children.
        this.tokens.removeToken();
        this.processAutomaticChildrenAndEndProps(jsxRole);
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
      // If a key was present, move it to its own arg. Note that moving code
      // like this will cause line numbers to get out of sync within the JSX
      // element if the key expression has a newline in it. This is unfortunate,
      // but hopefully should be rare.
      if (keyCode) {
        this.tokens.appendCode(`, ${keyCode}`);
      }
    }
    if (!this.options.production) {
      // If the key wasn't already added, add it now so we can correctly set
      // positional args for jsxDEV.
      if (keyCode === null) {
        this.tokens.appendCode(", void 0");
      }
      this.tokens.appendCode(`, ${isStatic}, ${this.getDevSource(elementLocationCode)}, this`);
    }
    // We're at the close-tag or the end of a self-closing tag, so remove
    // everything else and close the function call.
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType$1.jsxTagEnd)) {
      this.tokens.removeToken();
    }
    this.tokens.replaceToken(")");
  }

  /**
   * Convert the current JSX element to a createElement call. In the classic
   * runtime, this is the only case. In the automatic runtime, this is called
   * as a fallback in some situations.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * React.createElement('div', {a: 1, key: 2}, "Hello", x)
   */
  transformTagToCreateElement(elementLocationCode) {
    // First tag is always jsxTagStart.
    this.tokens.replaceToken(this.getCreateElementInvocationCode());

    if (this.tokens.matches1(TokenType$1.jsxTagEnd)) {
      // Fragment syntax.
      this.tokens.replaceToken(`${this.getFragmentCode()}, null`);
      this.processChildren(true);
    } else {
      // Normal open tag or self-closing tag.
      this.processTagIntro();
      this.processPropsObjectWithDevInfo(elementLocationCode);

      if (this.tokens.matches2(TokenType$1.slash, TokenType$1.jsxTagEnd)) ; else if (this.tokens.matches1(TokenType$1.jsxTagEnd)) {
        // Tag with children and a close-tag; process the children as args.
        this.tokens.removeToken();
        this.processChildren(true);
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
    }
    // We're at the close-tag or the end of a self-closing tag, so remove
    // everything else and close the function call.
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType$1.jsxTagEnd)) {
      this.tokens.removeToken();
    }
    this.tokens.replaceToken(")");
  }

  /**
   * Get the code for the relevant function for this context: jsx, jsxs,
   * or jsxDEV. The following open-paren is included as well.
   *
   * These functions are only used for the automatic runtime, so they are always
   * auto-imported, but the auto-import will be either CJS or ESM based on the
   * target module format.
   */
  getJSXFuncInvocationCode(isStatic) {
    if (this.options.production) {
      if (isStatic) {
        return this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime");
      } else {
        return this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime");
      }
    } else {
      return this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
    }
  }

  /**
   * Return the code to use for the createElement function, e.g.
   * `React.createElement`, including the following open-paren.
   *
   * This is the main function to use for the classic runtime. For the
   * automatic runtime, this function is used as a fallback function to
   * preserve behavior when there is a prop spread followed by an explicit
   * key. In that automatic runtime case, the function should be automatically
   * imported.
   */
  getCreateElementInvocationCode() {
    if (this.isAutomaticRuntime) {
      return this.claimAutoImportedFuncInvocation("createElement", "");
    } else {
      const {jsxPragmaInfo} = this;
      const resolvedPragmaBaseName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.base) || jsxPragmaInfo.base
        : jsxPragmaInfo.base;
      return `${resolvedPragmaBaseName}${jsxPragmaInfo.suffix}(`;
    }
  }

  /**
   * Return the code to use as the component when compiling a shorthand
   * fragment, e.g. `React.Fragment`.
   *
   * This may be called from either the classic or automatic runtime, and
   * the value should be auto-imported for the automatic runtime.
   */
  getFragmentCode() {
    if (this.isAutomaticRuntime) {
      return this.claimAutoImportedName(
        "Fragment",
        this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime",
      );
    } else {
      const {jsxPragmaInfo} = this;
      const resolvedFragmentPragmaBaseName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.fragmentBase) ||
          jsxPragmaInfo.fragmentBase
        : jsxPragmaInfo.fragmentBase;
      return resolvedFragmentPragmaBaseName + jsxPragmaInfo.fragmentSuffix;
    }
  }

  /**
   * Return code that invokes the given function.
   *
   * When the imports transform is enabled, use the CJSImportTransformer
   * strategy of using `.call(void 0, ...` to avoid passing a `this` value in a
   * situation that would otherwise look like a method call.
   */
  claimAutoImportedFuncInvocation(funcName, importPathSuffix) {
    const funcCode = this.claimAutoImportedName(funcName, importPathSuffix);
    if (this.importProcessor) {
      return `${funcCode}.call(void 0, `;
    } else {
      return `${funcCode}(`;
    }
  }

  claimAutoImportedName(funcName, importPathSuffix) {
    if (this.importProcessor) {
      // CJS mode: claim a name for the module and mark it for import.
      const path = this.jsxImportSource + importPathSuffix;
      if (!this.cjsAutomaticModuleNameResolutions[path]) {
        this.cjsAutomaticModuleNameResolutions[path] =
          this.importProcessor.getFreeIdentifierForPath(path);
      }
      return `${this.cjsAutomaticModuleNameResolutions[path]}.${funcName}`;
    } else {
      // ESM mode: claim a name for this function and add it to the names that
      // should be auto-imported when the prefix is generated.
      if (!this.esmAutomaticImportNameResolutions[funcName]) {
        this.esmAutomaticImportNameResolutions[funcName] = this.nameManager.claimFreeName(
          `_${funcName}`,
        );
      }
      return this.esmAutomaticImportNameResolutions[funcName];
    }
  }

  /**
   * Process the first part of a tag, before any props.
   */
  processTagIntro() {
    // Walk forward until we see one of these patterns:
    // jsxName to start the first prop, preceded by another jsxName to end the tag name.
    // jsxName to start the first prop, preceded by greaterThan to end the type argument.
    // [open brace] to start the first prop.
    // [jsxTagEnd] to end the open-tag.
    // [slash, jsxTagEnd] to end the self-closing tag.
    let introEnd = this.tokens.currentIndex() + 1;
    while (
      this.tokens.tokens[introEnd].isType ||
      (!this.tokens.matches2AtIndex(introEnd - 1, TokenType$1.jsxName, TokenType$1.jsxName) &&
        !this.tokens.matches2AtIndex(introEnd - 1, TokenType$1.greaterThan, TokenType$1.jsxName) &&
        !this.tokens.matches1AtIndex(introEnd, TokenType$1.braceL) &&
        !this.tokens.matches1AtIndex(introEnd, TokenType$1.jsxTagEnd) &&
        !this.tokens.matches2AtIndex(introEnd, TokenType$1.slash, TokenType$1.jsxTagEnd))
    ) {
      introEnd++;
    }
    if (introEnd === this.tokens.currentIndex() + 1) {
      const tagName = this.tokens.identifierName();
      if (startsWithLowerCase$1(tagName)) {
        this.tokens.replaceToken(`'${tagName}'`);
      }
    }
    while (this.tokens.currentIndex() < introEnd) {
      this.rootTransformer.processToken();
    }
  }

  /**
   * Starting at the beginning of the props, add the props argument to
   * React.createElement, including the comma before it.
   */
  processPropsObjectWithDevInfo(elementLocationCode) {
    const devProps = this.options.production
      ? ""
      : `__self: this, __source: ${this.getDevSource(elementLocationCode)}`;
    if (!this.tokens.matches1(TokenType$1.jsxName) && !this.tokens.matches1(TokenType$1.braceL)) {
      if (devProps) {
        this.tokens.appendCode(`, {${devProps}}`);
      } else {
        this.tokens.appendCode(`, null`);
      }
      return;
    }
    this.tokens.appendCode(`, {`);
    this.processProps(false);
    if (devProps) {
      this.tokens.appendCode(` ${devProps}}`);
    } else {
      this.tokens.appendCode("}");
    }
  }

  /**
   * Transform the core part of the props, assuming that a { has already been
   * inserted before us and that a } will be inserted after us.
   *
   * If extractKeyCode is true (i.e. when using any jsx... function), any prop
   * named "key" has its code captured and returned rather than being emitted to
   * the output code. This shifts line numbers, and emitting the code later will
   * correct line numbers again. If no key is found or if extractKeyCode is
   * false, this function returns null.
   */
  processProps(extractKeyCode) {
    let keyCode = null;
    while (true) {
      if (this.tokens.matches2(TokenType$1.jsxName, TokenType$1.eq)) {
        // This is a regular key={value} or key="value" prop.
        const propName = this.tokens.identifierName();
        if (extractKeyCode && propName === "key") {
          if (keyCode !== null) {
            // The props list has multiple keys. Different implementations are
            // inconsistent about what to do here: as of this writing, Babel and
            // swc keep the *last* key and completely remove the rest, while
            // TypeScript uses the *first* key and leaves the others as regular
            // props. The React team collaborated with Babel on the
            // implementation of this behavior, so presumably the Babel behavior
            // is the one to use.
            // Since we won't ever be emitting the previous key code, we need to
            // at least emit its newlines here so that the line numbers match up
            // in the long run.
            this.tokens.appendCode(keyCode.replace(/[^\n]/g, ""));
          }
          // key
          this.tokens.removeToken();
          // =
          this.tokens.removeToken();
          const snapshot = this.tokens.snapshot();
          this.processPropValue();
          keyCode = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot);
          // Don't add a comma
          continue;
        } else {
          this.processPropName(propName);
          this.tokens.replaceToken(": ");
          this.processPropValue();
        }
      } else if (this.tokens.matches1(TokenType$1.jsxName)) {
        // This is a shorthand prop like <input disabled />.
        const propName = this.tokens.identifierName();
        this.processPropName(propName);
        this.tokens.appendCode(": true");
      } else if (this.tokens.matches1(TokenType$1.braceL)) {
        // This is prop spread, like <div {...getProps()}>, which we can pass
        // through fairly directly as an object spread.
        this.tokens.replaceToken("");
        this.rootTransformer.processBalancedCode();
        this.tokens.replaceToken("");
      } else {
        break;
      }
      this.tokens.appendCode(",");
    }
    return keyCode;
  }

  processPropName(propName) {
    if (propName.includes("-")) {
      this.tokens.replaceToken(`'${propName}'`);
    } else {
      this.tokens.copyToken();
    }
  }

  processPropValue() {
    if (this.tokens.matches1(TokenType$1.braceL)) {
      this.tokens.replaceToken("");
      this.rootTransformer.processBalancedCode();
      this.tokens.replaceToken("");
    } else if (this.tokens.matches1(TokenType$1.jsxTagStart)) {
      this.processJSXTag();
    } else {
      this.processStringPropValue();
    }
  }

  processStringPropValue() {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start + 1, token.end - 1);
    const replacementCode = formatJSXTextReplacement$1(valueCode);
    const literalCode = formatJSXStringValueLiteral$1(valueCode);
    this.tokens.replaceToken(literalCode + replacementCode);
  }

  /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */
  processAutomaticChildrenAndEndProps(jsxRole) {
    if (jsxRole === JSXRole$1.StaticChildren) {
      this.tokens.appendCode(" children: [");
      this.processChildren(false);
      this.tokens.appendCode("]}");
    } else {
      // The parser information tells us whether we will see a real child or if
      // all remaining children (if any) will resolve to empty. If there are no
      // non-empty children, don't emit a children prop at all, but still
      // process children so that we properly transform the code into nothing.
      if (jsxRole === JSXRole$1.OneChild) {
        this.tokens.appendCode(" children: ");
      }
      this.processChildren(false);
      this.tokens.appendCode("}");
    }
  }

  /**
   * Transform children into a comma-separated list, which will be either
   * arguments to createElement or array elements of a children prop.
   */
  processChildren(needsInitialComma) {
    let needsComma = needsInitialComma;
    while (true) {
      if (this.tokens.matches2(TokenType$1.jsxTagStart, TokenType$1.slash)) {
        // Closing tag, so no more children.
        return;
      }
      let didEmitElement = false;
      if (this.tokens.matches1(TokenType$1.braceL)) {
        if (this.tokens.matches2(TokenType$1.braceL, TokenType$1.braceR)) {
          // Empty interpolations and comment-only interpolations are allowed
          // and don't create an extra child arg.
          this.tokens.replaceToken("");
          this.tokens.replaceToken("");
        } else {
          // Interpolated expression.
          this.tokens.replaceToken(needsComma ? ", " : "");
          this.rootTransformer.processBalancedCode();
          this.tokens.replaceToken("");
          didEmitElement = true;
        }
      } else if (this.tokens.matches1(TokenType$1.jsxTagStart)) {
        // Child JSX element
        this.tokens.appendCode(needsComma ? ", " : "");
        this.processJSXTag();
        didEmitElement = true;
      } else if (this.tokens.matches1(TokenType$1.jsxText) || this.tokens.matches1(TokenType$1.jsxEmptyText)) {
        didEmitElement = this.processChildTextElement(needsComma);
      } else {
        throw new Error("Unexpected token when processing JSX children.");
      }
      if (didEmitElement) {
        needsComma = true;
      }
    }
  }

  /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */
  processChildTextElement(needsComma) {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start, token.end);
    const replacementCode = formatJSXTextReplacement$1(valueCode);
    const literalCode = formatJSXTextLiteral$1(valueCode);
    if (literalCode === '""') {
      this.tokens.replaceToken(replacementCode);
      return false;
    } else {
      this.tokens.replaceToken(`${needsComma ? ", " : ""}${literalCode}${replacementCode}`);
      return true;
    }
  }

  getDevSource(elementLocationCode) {
    return `{fileName: ${this.getFilenameVarName()}, ${elementLocationCode}}`;
  }

  getFilenameVarName() {
    if (!this.filenameVarName) {
      this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName");
    }
    return this.filenameVarName;
  }
}

/**
 * Spec for identifiers: https://tc39.github.io/ecma262/#prod-IdentifierStart.
 *
 * Really only treat anything starting with a-z as tag names.  `_`, `$`, `é`
 * should be treated as component names
 */
function startsWithLowerCase$1(s) {
  const firstChar = s.charCodeAt(0);
  return firstChar >= charCodes$1.lowercaseA && firstChar <= charCodes$1.lowercaseZ;
}

/**
 * Turn the given jsxText string into a JS string literal. Leading and trailing
 * whitespace on lines is removed, except immediately after the open-tag and
 * before the close-tag. Empty lines are completely removed, and spaces are
 * added between lines after that.
 *
 * We use JSON.stringify to introduce escape characters as necessary, and trim
 * the start and end of each line and remove blank lines.
 */
function formatJSXTextLiteral$1(text) {
  let result = "";
  let whitespace = "";

  let isInInitialLineWhitespace = false;
  let seenNonWhitespace = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === " " || c === "\t" || c === "\r") {
      if (!isInInitialLineWhitespace) {
        whitespace += c;
      }
    } else if (c === "\n") {
      whitespace = "";
      isInInitialLineWhitespace = true;
    } else {
      if (seenNonWhitespace && isInInitialLineWhitespace) {
        result += " ";
      }
      result += whitespace;
      whitespace = "";
      if (c === "&") {
        const {entity, newI} = processEntity$1(text, i + 1);
        i = newI - 1;
        result += entity;
      } else {
        result += c;
      }
      seenNonWhitespace = true;
      isInInitialLineWhitespace = false;
    }
  }
  if (!isInInitialLineWhitespace) {
    result += whitespace;
  }
  return JSON.stringify(result);
}

/**
 * Produce the code that should be printed after the JSX text string literal,
 * with most content removed, but all newlines preserved and all spacing at the
 * end preserved.
 */
function formatJSXTextReplacement$1(text) {
  let numNewlines = 0;
  let numSpaces = 0;
  for (const c of text) {
    if (c === "\n") {
      numNewlines++;
      numSpaces = 0;
    } else if (c === " ") {
      numSpaces++;
    }
  }
  return "\n".repeat(numNewlines) + " ".repeat(numSpaces);
}

/**
 * Format a string in the value position of a JSX prop.
 *
 * Use the same implementation as convertAttribute from
 * babel-helper-builder-react-jsx.
 */
function formatJSXStringValueLiteral$1(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "\n") {
      if (/\s/.test(text[i + 1])) {
        result += " ";
        while (i < text.length && /\s/.test(text[i + 1])) {
          i++;
        }
      } else {
        result += "\n";
      }
    } else if (c === "&") {
      const {entity, newI} = processEntity$1(text, i + 1);
      result += entity;
      i = newI - 1;
    } else {
      result += c;
    }
  }
  return JSON.stringify(result);
}

/**
 * Starting at a &, see if there's an HTML entity (specified by name, decimal
 * char code, or hex char code) and return it if so.
 *
 * Modified from jsxReadString in babel-parser.
 */
function processEntity$1(text, indexAfterAmpersand) {
  let str = "";
  let count = 0;
  let entity;
  let i = indexAfterAmpersand;

  if (text[i] === "#") {
    let radix = 10;
    i++;
    let numStart;
    if (text[i] === "x") {
      radix = 16;
      i++;
      numStart = i;
      while (i < text.length && isHexDigit$1(text.charCodeAt(i))) {
        i++;
      }
    } else {
      numStart = i;
      while (i < text.length && isDecimalDigit$1(text.charCodeAt(i))) {
        i++;
      }
    }
    if (text[i] === ";") {
      const numStr = text.slice(numStart, i);
      if (numStr) {
        i++;
        entity = String.fromCodePoint(parseInt(numStr, radix));
      }
    }
  } else {
    while (i < text.length && count++ < 10) {
      const ch = text[i];
      i++;
      if (ch === ";") {
        entity = XHTMLEntities.get(str);
        break;
      }
      str += ch;
    }
  }

  if (!entity) {
    return {entity: "&", newI: indexAfterAmpersand};
  }
  return {entity, newI: i};
}

function isDecimalDigit$1(code) {
  return code >= charCodes$1.digit0 && code <= charCodes$1.digit9;
}

function isHexDigit$1(code) {
  return (
    (code >= charCodes$1.digit0 && code <= charCodes$1.digit9) ||
    (code >= charCodes$1.lowercaseA && code <= charCodes$1.lowercaseF) ||
    (code >= charCodes$1.uppercaseA && code <= charCodes$1.uppercaseF)
  );
}

function getNonTypeIdentifiers$2(tokens, options) {
  const jsxPragmaInfo = getJSXPragmaInfo$2(options);
  const nonTypeIdentifiers = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (
      token.type === TokenType$1.name &&
      !token.isType &&
      (token.identifierRole === IdentifierRole$1.Access ||
        token.identifierRole === IdentifierRole$1.ObjectShorthand ||
        token.identifierRole === IdentifierRole$1.ExportAccess) &&
      !token.shadowsGlobal
    ) {
      nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
    }
    if (token.type === TokenType$1.jsxTagStart) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
    }
    if (
      token.type === TokenType$1.jsxTagStart &&
      i + 1 < tokens.tokens.length &&
      tokens.tokens[i + 1].type === TokenType$1.jsxTagEnd
    ) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
      nonTypeIdentifiers.add(jsxPragmaInfo.fragmentBase);
    }
    if (token.type === TokenType$1.jsxName && token.identifierRole === IdentifierRole$1.Access) {
      const identifierName = tokens.identifierNameForToken(token);
      // Lower-case single-component tag names like "div" don't count.
      if (!startsWithLowerCase$1(identifierName) || tokens.tokens[i + 1].type === TokenType$1.dot) {
        nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return nonTypeIdentifiers;
}

/**
 * Class responsible for preprocessing and bookkeeping import and export declarations within the
 * file.
 *
 * TypeScript uses a simpler mechanism that does not use functions like interopRequireDefault and
 * interopRequireWildcard, so we also allow that mode for compatibility.
 */
class CJSImportProcessor$2 {
   __init() {this.nonTypeIdentifiers = new Set();}
   __init2() {this.importInfoByPath = new Map();}
   __init3() {this.importsToReplace = new Map();}
   __init4() {this.identifierReplacements = new Map();}
   __init5() {this.exportBindingsByLocalName = new Map();}

  constructor(
     nameManager,
     tokens,
     enableLegacyTypeScriptModuleInterop,
     options,
     isTypeScriptTransformEnabled,
     keepUnusedImports,
     helperManager,
  ) {this.nameManager = nameManager;this.tokens = tokens;this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;this.options = options;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.keepUnusedImports = keepUnusedImports;this.helperManager = helperManager;CJSImportProcessor$2.prototype.__init.call(this);CJSImportProcessor$2.prototype.__init2.call(this);CJSImportProcessor$2.prototype.__init3.call(this);CJSImportProcessor$2.prototype.__init4.call(this);CJSImportProcessor$2.prototype.__init5.call(this);}

  preprocessTokens() {
    for (let i = 0; i < this.tokens.tokens.length; i++) {
      if (
        this.tokens.matches1AtIndex(i, TokenType$1._import) &&
        !this.tokens.matches3AtIndex(i, TokenType$1._import, TokenType$1.name, TokenType$1.eq)
      ) {
        this.preprocessImportAtIndex(i);
      }
      if (
        this.tokens.matches1AtIndex(i, TokenType$1._export) &&
        !this.tokens.matches2AtIndex(i, TokenType$1._export, TokenType$1.eq)
      ) {
        this.preprocessExportAtIndex(i);
      }
    }
    this.generateImportReplacements();
  }

  /**
   * In TypeScript, import statements that only import types should be removed.
   * This includes `import {} from 'foo';`, but not `import 'foo';`.
   */
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = getNonTypeIdentifiers$2(this.tokens, this.options);
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      if (
        importInfo.hasBareImport ||
        importInfo.hasStarExport ||
        importInfo.exportStarNames.length > 0 ||
        importInfo.namedExports.length > 0
      ) {
        continue;
      }
      const names = [
        ...importInfo.defaultNames,
        ...importInfo.wildcardNames,
        ...importInfo.namedImports.map(({localName}) => localName),
      ];
      if (names.every((name) => this.shouldAutomaticallyElideImportedName(name))) {
        this.importsToReplace.set(path, "");
      }
    }
  }

  shouldAutomaticallyElideImportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.nonTypeIdentifiers.has(name)
    );
  }

   generateImportReplacements() {
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      const {
        defaultNames,
        wildcardNames,
        namedImports,
        namedExports,
        exportStarNames,
        hasStarExport,
      } = importInfo;

      if (
        defaultNames.length === 0 &&
        wildcardNames.length === 0 &&
        namedImports.length === 0 &&
        namedExports.length === 0 &&
        exportStarNames.length === 0 &&
        !hasStarExport
      ) {
        // Import is never used, so don't even assign a name.
        this.importsToReplace.set(path, `require('${path}');`);
        continue;
      }

      const primaryImportName = this.getFreeIdentifierForPath(path);
      let secondaryImportName;
      if (this.enableLegacyTypeScriptModuleInterop) {
        secondaryImportName = primaryImportName;
      } else {
        secondaryImportName =
          wildcardNames.length > 0 ? wildcardNames[0] : this.getFreeIdentifierForPath(path);
      }
      let requireCode = `var ${primaryImportName} = require('${path}');`;
      if (wildcardNames.length > 0) {
        for (const wildcardName of wildcardNames) {
          const moduleExpr = this.enableLegacyTypeScriptModuleInterop
            ? primaryImportName
            : `${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName})`;
          requireCode += ` var ${wildcardName} = ${moduleExpr};`;
        }
      } else if (exportStarNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName(
          "interopRequireWildcard",
        )}(${primaryImportName});`;
      } else if (defaultNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName(
          "interopRequireDefault",
        )}(${primaryImportName});`;
      }

      for (const {importedName, localName} of namedExports) {
        requireCode += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom",
        )}(${primaryImportName}, '${localName}', '${importedName}');`;
      }
      for (const exportStarName of exportStarNames) {
        requireCode += ` exports.${exportStarName} = ${secondaryImportName};`;
      }
      if (hasStarExport) {
        requireCode += ` ${this.helperManager.getHelperName(
          "createStarExport",
        )}(${primaryImportName});`;
      }

      this.importsToReplace.set(path, requireCode);

      for (const defaultName of defaultNames) {
        this.identifierReplacements.set(defaultName, `${secondaryImportName}.default`);
      }
      for (const {importedName, localName} of namedImports) {
        this.identifierReplacements.set(localName, `${primaryImportName}.${importedName}`);
      }
    }
  }

  getFreeIdentifierForPath(path) {
    const components = path.split("/");
    const lastComponent = components[components.length - 1];
    const baseName = lastComponent.replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${baseName}`);
  }

   preprocessImportAtIndex(index) {
    const defaultNames = [];
    const wildcardNames = [];
    const namedImports = [];

    index++;
    if (
      (this.tokens.matchesContextualAtIndex(index, ContextualKeyword$1._type) ||
        this.tokens.matches1AtIndex(index, TokenType$1._typeof)) &&
      !this.tokens.matches1AtIndex(index + 1, TokenType$1.comma) &&
      !this.tokens.matchesContextualAtIndex(index + 1, ContextualKeyword$1._from)
    ) {
      // import type declaration, so no need to process anything.
      return;
    }

    if (this.tokens.matches1AtIndex(index, TokenType$1.parenL)) {
      // Dynamic import, so nothing to do
      return;
    }

    if (this.tokens.matches1AtIndex(index, TokenType$1.name)) {
      defaultNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
      if (this.tokens.matches1AtIndex(index, TokenType$1.comma)) {
        index++;
      }
    }

    if (this.tokens.matches1AtIndex(index, TokenType$1.star)) {
      // * as
      index += 2;
      wildcardNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
    }

    if (this.tokens.matches1AtIndex(index, TokenType$1.braceL)) {
      const result = this.getNamedImports(index + 1);
      index = result.newIndex;

      for (const namedImport of result.namedImports) {
        // Treat {default as X} as a default import to ensure usage of require interop helper
        if (namedImport.importedName === "default") {
          defaultNames.push(namedImport.localName);
        } else {
          namedImports.push(namedImport);
        }
      }
    }

    if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword$1._from)) {
      index++;
    }

    if (!this.tokens.matches1AtIndex(index, TokenType$1.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.defaultNames.push(...defaultNames);
    importInfo.wildcardNames.push(...wildcardNames);
    importInfo.namedImports.push(...namedImports);
    if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0) {
      importInfo.hasBareImport = true;
    }
  }

   preprocessExportAtIndex(index) {
    if (
      this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1._var) ||
      this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1._let) ||
      this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1._const)
    ) {
      this.preprocessVarExportAtIndex(index);
    } else if (
      this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1._function) ||
      this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1._class)
    ) {
      const exportName = this.tokens.identifierNameAtIndex(index + 2);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches3AtIndex(index, TokenType$1._export, TokenType$1.name, TokenType$1._function)) {
      const exportName = this.tokens.identifierNameAtIndex(index + 3);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1.braceL)) {
      this.preprocessNamedExportAtIndex(index);
    } else if (this.tokens.matches2AtIndex(index, TokenType$1._export, TokenType$1.star)) {
      this.preprocessExportStarAtIndex(index);
    }
  }

   preprocessVarExportAtIndex(index) {
    let depth = 0;
    // Handle cases like `export let {x} = y;`, starting at the open-brace in that case.
    for (let i = index + 2; ; i++) {
      if (
        this.tokens.matches1AtIndex(i, TokenType$1.braceL) ||
        this.tokens.matches1AtIndex(i, TokenType$1.dollarBraceL) ||
        this.tokens.matches1AtIndex(i, TokenType$1.bracketL)
      ) {
        depth++;
      } else if (
        this.tokens.matches1AtIndex(i, TokenType$1.braceR) ||
        this.tokens.matches1AtIndex(i, TokenType$1.bracketR)
      ) {
        depth--;
      } else if (depth === 0 && !this.tokens.matches1AtIndex(i, TokenType$1.name)) {
        break;
      } else if (this.tokens.matches1AtIndex(1, TokenType$1.eq)) {
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        i = endIndex - 1;
      } else {
        const token = this.tokens.tokens[i];
        if (isDeclaration$1(token)) {
          const exportName = this.tokens.identifierNameAtIndex(i);
          this.identifierReplacements.set(exportName, `exports.${exportName}`);
        }
      }
    }
  }

  /**
   * Walk this export statement just in case it's an export...from statement.
   * If it is, combine it into the import info for that path. Otherwise, just
   * bail out; it'll be handled later.
   */
   preprocessNamedExportAtIndex(index) {
    // export {
    index += 2;
    const {newIndex, namedImports} = this.getNamedImports(index);
    index = newIndex;

    if (this.tokens.matchesContextualAtIndex(index, ContextualKeyword$1._from)) {
      index++;
    } else {
      // Reinterpret "a as b" to be local/exported rather than imported/local.
      for (const {importedName: localName, localName: exportedName} of namedImports) {
        this.addExportBinding(localName, exportedName);
      }
      return;
    }

    if (!this.tokens.matches1AtIndex(index, TokenType$1.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.namedExports.push(...namedImports);
  }

   preprocessExportStarAtIndex(index) {
    let exportedName = null;
    if (this.tokens.matches3AtIndex(index, TokenType$1._export, TokenType$1.star, TokenType$1._as)) {
      // export * as
      index += 3;
      exportedName = this.tokens.identifierNameAtIndex(index);
      // foo from
      index += 2;
    } else {
      // export * from
      index += 3;
    }
    if (!this.tokens.matches1AtIndex(index, TokenType$1.string)) {
      throw new Error("Expected string token at the end of star export statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    if (exportedName !== null) {
      importInfo.exportStarNames.push(exportedName);
    } else {
      importInfo.hasStarExport = true;
    }
  }

   getNamedImports(index) {
    const namedImports = [];
    while (true) {
      if (this.tokens.matches1AtIndex(index, TokenType$1.braceR)) {
        index++;
        break;
      }

      const specifierInfo = getImportExportSpecifierInfo$2(this.tokens, index);
      index = specifierInfo.endIndex;
      if (!specifierInfo.isType) {
        namedImports.push({
          importedName: specifierInfo.leftName,
          localName: specifierInfo.rightName,
        });
      }

      if (this.tokens.matches2AtIndex(index, TokenType$1.comma, TokenType$1.braceR)) {
        index += 2;
        break;
      } else if (this.tokens.matches1AtIndex(index, TokenType$1.braceR)) {
        index++;
        break;
      } else if (this.tokens.matches1AtIndex(index, TokenType$1.comma)) {
        index++;
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[index])}`);
      }
    }
    return {newIndex: index, namedImports};
  }

  /**
   * Get a mutable import info object for this path, creating one if it doesn't
   * exist yet.
   */
   getImportInfo(path) {
    const existingInfo = this.importInfoByPath.get(path);
    if (existingInfo) {
      return existingInfo;
    }
    const newInfo = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: false,
      exportStarNames: [],
      hasStarExport: false,
    };
    this.importInfoByPath.set(path, newInfo);
    return newInfo;
  }

   addExportBinding(localName, exportedName) {
    if (!this.exportBindingsByLocalName.has(localName)) {
      this.exportBindingsByLocalName.set(localName, []);
    }
    this.exportBindingsByLocalName.get(localName).push(exportedName);
  }

  /**
   * Return the code to use for the import for this path, or the empty string if
   * the code has already been "claimed" by a previous import.
   */
  claimImportCode(importPath) {
    const result = this.importsToReplace.get(importPath);
    this.importsToReplace.set(importPath, "");
    return result || "";
  }

  getIdentifierReplacement(identifierName) {
    return this.identifierReplacements.get(identifierName) || null;
  }

  /**
   * Return a string like `exports.foo = exports.bar`.
   */
  resolveExportBinding(assignedName) {
    const exportedNames = this.exportBindingsByLocalName.get(assignedName);
    if (!exportedNames || exportedNames.length === 0) {
      return null;
    }
    return exportedNames.map((exportedName) => `exports.${exportedName}`).join(" = ");
  }

  /**
   * Return all imported/exported names where we might be interested in whether usages of those
   * names are shadowed.
   */
  getGlobalNames() {
    return new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys(),
    ]);
  }
}

/**
 * SetArray acts like a `Set` (allowing only one occurrence of a string `key`), but provides the
 * index of the `key` in the backing array.
 *
 * This is designed to allow synchronizing a second array with the contents of the backing array,
 * like how in a sourcemap `sourcesContent[i]` is the source content associated with `source[i]`,
 * and there are never duplicates.
 */
class SetArray {
    constructor() {
        this._indexes = { __proto__: null };
        this.array = [];
    }
}
/**
 * Typescript doesn't allow friend access to private fields, so this just casts the set into a type
 * with public access modifiers.
 */
function cast$1(set) {
    return set;
}
/**
 * Gets the index associated with `key` in the backing array, if it is already present.
 */
function get(setarr, key) {
    return cast$1(setarr)._indexes[key];
}
/**
 * Puts `key` into the backing array, if it is not already present. Returns
 * the index of the `key` in the backing array.
 */
function put(setarr, key) {
    // The key may or may not be present. If it is present, it's a number.
    const index = get(setarr, key);
    if (index !== undefined)
        return index;
    const { array, _indexes: indexes } = cast$1(setarr);
    const length = array.push(key);
    return (indexes[key] = length - 1);
}

const comma = ','.charCodeAt(0);
const semicolon$1 = ';'.charCodeAt(0);
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const intToChar = new Uint8Array(64); // 64 possible chars.
const charToInt = new Uint8Array(128); // z is 122 in ASCII
for (let i = 0; i < chars.length; i++) {
    const c = chars.charCodeAt(i);
    intToChar[i] = c;
    charToInt[c] = i;
}
// Provide a fallback for older environments.
const td = typeof TextDecoder !== 'undefined'
    ? /* #__PURE__ */ new TextDecoder()
    : typeof Buffer !== 'undefined'
        ? {
            decode(buf) {
                const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
                return out.toString();
            },
        }
        : {
            decode(buf) {
                let out = '';
                for (let i = 0; i < buf.length; i++) {
                    out += String.fromCharCode(buf[i]);
                }
                return out;
            },
        };
function encode(decoded) {
    const state = new Int32Array(5);
    const bufLength = 1024 * 16;
    const subLength = bufLength - 36;
    const buf = new Uint8Array(bufLength);
    const sub = buf.subarray(0, subLength);
    let pos = 0;
    let out = '';
    for (let i = 0; i < decoded.length; i++) {
        const line = decoded[i];
        if (i > 0) {
            if (pos === bufLength) {
                out += td.decode(buf);
                pos = 0;
            }
            buf[pos++] = semicolon$1;
        }
        if (line.length === 0)
            continue;
        state[0] = 0;
        for (let j = 0; j < line.length; j++) {
            const segment = line[j];
            // We can push up to 5 ints, each int can take at most 7 chars, and we
            // may push a comma.
            if (pos > subLength) {
                out += td.decode(sub);
                buf.copyWithin(0, subLength, pos);
                pos -= subLength;
            }
            if (j > 0)
                buf[pos++] = comma;
            pos = encodeInteger(buf, pos, state, segment, 0); // genColumn
            if (segment.length === 1)
                continue;
            pos = encodeInteger(buf, pos, state, segment, 1); // sourcesIndex
            pos = encodeInteger(buf, pos, state, segment, 2); // sourceLine
            pos = encodeInteger(buf, pos, state, segment, 3); // sourceColumn
            if (segment.length === 4)
                continue;
            pos = encodeInteger(buf, pos, state, segment, 4); // namesIndex
        }
    }
    return out + td.decode(buf.subarray(0, pos));
}
function encodeInteger(buf, pos, state, segment, j) {
    const next = segment[j];
    let num = next - state[j];
    state[j] = next;
    num = num < 0 ? (-num << 1) | 1 : num << 1;
    do {
        let clamped = num & 0b011111;
        num >>>= 5;
        if (num > 0)
            clamped |= 0b100000;
        buf[pos++] = intToChar[clamped];
    } while (num > 0);
    return pos;
}

const COLUMN = 0;
const SOURCES_INDEX = 1;
const SOURCE_LINE = 2;
const SOURCE_COLUMN = 3;
const NAMES_INDEX = 4;

const NO_NAME = -1;
/**
 * Provides the state to generate a sourcemap.
 */
class GenMapping {
    constructor({ file, sourceRoot } = {}) {
        this._names = new SetArray();
        this._sources = new SetArray();
        this._sourcesContent = [];
        this._mappings = [];
        this.file = file;
        this.sourceRoot = sourceRoot;
        this._ignoreList = new SetArray();
    }
}
/**
 * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
 * with public access modifiers.
 */
function cast(map) {
    return map;
}
/**
 * Same as `addSegment`, but will only add the segment if it generates useful information in the
 * resulting map. This only works correctly if segments are added **in order**, meaning you should
 * not add a segment with a lower generated line/column than one that came before.
 */
const maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
    return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
};
/**
 * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
function toDecodedMap(map) {
    const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList, } = cast(map);
    removeEmptyFinalLines(mappings);
    return {
        version: 3,
        file: map.file || undefined,
        names: names.array,
        sourceRoot: map.sourceRoot || undefined,
        sources: sources.array,
        sourcesContent,
        mappings,
        ignoreList: ignoreList.array,
    };
}
/**
 * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
function toEncodedMap(map) {
    const decoded = toDecodedMap(map);
    return Object.assign(Object.assign({}, decoded), { mappings: encode(decoded.mappings) });
}
// This split declaration is only so that terser can elminiate the static initialization block.
function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
    const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, } = cast(map);
    const line = getLine(mappings, genLine);
    const index = getColumnIndex(line, genColumn);
    if (!source) {
        if (skipable && skipSourceless(line, index))
            return;
        return insert(line, index, [genColumn]);
    }
    const sourcesIndex = put(sources, source);
    const namesIndex = name ? put(names, name) : NO_NAME;
    if (sourcesIndex === sourcesContent.length)
        sourcesContent[sourcesIndex] = content !== null && content !== void 0 ? content : null;
    if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
        return;
    }
    return insert(line, index, name
        ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex]
        : [genColumn, sourcesIndex, sourceLine, sourceColumn]);
}
function getLine(mappings, index) {
    for (let i = mappings.length; i <= index; i++) {
        mappings[i] = [];
    }
    return mappings[index];
}
function getColumnIndex(line, genColumn) {
    let index = line.length;
    for (let i = index - 1; i >= 0; index = i--) {
        const current = line[i];
        if (genColumn >= current[COLUMN])
            break;
    }
    return index;
}
function insert(array, index, value) {
    for (let i = array.length; i > index; i--) {
        array[i] = array[i - 1];
    }
    array[index] = value;
}
function removeEmptyFinalLines(mappings) {
    const { length } = mappings;
    let len = length;
    for (let i = len - 1; i >= 0; len = i, i--) {
        if (mappings[i].length > 0)
            break;
    }
    if (len < length)
        mappings.length = len;
}
function skipSourceless(line, index) {
    // The start of a line is already sourceless, so adding a sourceless segment to the beginning
    // doesn't generate any useful information.
    if (index === 0)
        return true;
    const prev = line[index - 1];
    // If the previous segment is also sourceless, then adding another sourceless segment doesn't
    // genrate any new information. Else, this segment will end the source/named segment and point to
    // a sourceless position, which is useful.
    return prev.length === 1;
}
function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
    // A source/named segment at the start of a line gives position at that genColumn
    if (index === 0)
        return false;
    const prev = line[index - 1];
    // If the previous segment is sourceless, then we're transitioning to a source.
    if (prev.length === 1)
        return false;
    // If the previous segment maps to the exact same source position, then this segment doesn't
    // provide any new position information.
    return (sourcesIndex === prev[SOURCES_INDEX] &&
        sourceLine === prev[SOURCE_LINE] &&
        sourceColumn === prev[SOURCE_COLUMN] &&
        namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME));
}

/**
 * Generate a source map indicating that each line maps directly to the original line,
 * with the tokens in their new positions.
 */
function computeSourceMap$2(
  {code: generatedCode, mappings: rawMappings},
  filePath,
  options,
  source,
  tokens,
) {
  const sourceColumns = computeSourceColumns$1(source, tokens);
  const map = new GenMapping({file: options.compiledFilename});
  let tokenIndex = 0;
  // currentMapping is the output source index for the current input token being
  // considered.
  let currentMapping = rawMappings[0];
  while (currentMapping === undefined && tokenIndex < rawMappings.length - 1) {
    tokenIndex++;
    currentMapping = rawMappings[tokenIndex];
  }
  let line = 0;
  let lineStart = 0;
  if (currentMapping !== lineStart) {
    maybeAddSegment(map, line, 0, filePath, line, 0);
  }
  for (let i = 0; i < generatedCode.length; i++) {
    if (i === currentMapping) {
      const genColumn = currentMapping - lineStart;
      const sourceColumn = sourceColumns[tokenIndex];
      maybeAddSegment(map, line, genColumn, filePath, line, sourceColumn);
      while (
        (currentMapping === i || currentMapping === undefined) &&
        tokenIndex < rawMappings.length - 1
      ) {
        tokenIndex++;
        currentMapping = rawMappings[tokenIndex];
      }
    }
    if (generatedCode.charCodeAt(i) === charCodes$1.lineFeed) {
      line++;
      lineStart = i + 1;
      if (currentMapping !== lineStart) {
        maybeAddSegment(map, line, 0, filePath, line, 0);
      }
    }
  }
  const {sourceRoot, sourcesContent, ...sourceMap} = toEncodedMap(map);
  return sourceMap ;
}

/**
 * Create an array mapping each token index to the 0-based column of the start
 * position of the token.
 */
function computeSourceColumns$1(code, tokens) {
  const sourceColumns = new Array(tokens.length);
  let tokenIndex = 0;
  let currentMapping = tokens[tokenIndex].start;
  let lineStart = 0;
  for (let i = 0; i < code.length; i++) {
    if (i === currentMapping) {
      sourceColumns[tokenIndex] = currentMapping - lineStart;
      tokenIndex++;
      currentMapping = tokens[tokenIndex].start;
    }
    if (code.charCodeAt(i) === charCodes$1.lineFeed) {
      lineStart = i + 1;
    }
  }
  return sourceColumns;
}

const HELPERS = {
  require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
  interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
  interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
  createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
  // Note that TypeScript and Babel do this differently; TypeScript does a simple existence
  // check in the exports object and does a plain assignment, whereas Babel uses
  // defineProperty and builds an object of explicitly-exported names so that star exports can
  // always take lower precedence. For now, we do the easier TypeScript thing.
  createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
  nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
  asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
  optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
  asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
};

class HelperManager {
  __init() {this.helperNames = {};}
  __init2() {this.createRequireName = null;}
  constructor( nameManager) {this.nameManager = nameManager;HelperManager.prototype.__init.call(this);HelperManager.prototype.__init2.call(this);}

  getHelperName(baseName) {
    let helperName = this.helperNames[baseName];
    if (helperName) {
      return helperName;
    }
    helperName = this.nameManager.claimFreeName(`_${baseName}`);
    this.helperNames[baseName] = helperName;
    return helperName;
  }

  emitHelpers() {
    let resultCode = "";
    if (this.helperNames.optionalChainDelete) {
      this.getHelperName("optionalChain");
    }
    if (this.helperNames.asyncOptionalChainDelete) {
      this.getHelperName("asyncOptionalChain");
    }
    for (const [baseName, helperCodeTemplate] of Object.entries(HELPERS)) {
      const helperName = this.helperNames[baseName];
      let helperCode = helperCodeTemplate;
      if (baseName === "optionalChainDelete") {
        helperCode = helperCode.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain);
      } else if (baseName === "asyncOptionalChainDelete") {
        helperCode = helperCode.replace(
          "ASYNC_OPTIONAL_CHAIN_NAME",
          this.helperNames.asyncOptionalChain,
        );
      } else if (baseName === "require") {
        if (this.createRequireName === null) {
          this.createRequireName = this.nameManager.claimFreeName("_createRequire");
        }
        helperCode = helperCode.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName);
      }
      if (helperName) {
        resultCode += " ";
        resultCode += helperCode.replace(baseName, helperName).replace(/\s+/g, " ").trim();
      }
    }
    return resultCode;
  }
}

/**
 * Traverse the given tokens and modify them if necessary to indicate that some names shadow global
 * variables.
 */
function identifyShadowedGlobals(
  tokens,
  scopes,
  globalNames,
) {
  if (!hasShadowedGlobals(tokens, globalNames)) {
    return;
  }
  markShadowedGlobals(tokens, scopes, globalNames);
}

/**
 * We can do a fast up-front check to see if there are any declarations to global names. If not,
 * then there's no point in computing scope assignments.
 */
// Exported for testing.
function hasShadowedGlobals(tokens, globalNames) {
  for (const token of tokens.tokens) {
    if (
      token.type === TokenType$1.name &&
      !token.isType &&
      isNonTopLevelDeclaration$1(token) &&
      globalNames.has(tokens.identifierNameForToken(token))
    ) {
      return true;
    }
  }
  return false;
}

function markShadowedGlobals(
  tokens,
  scopes,
  globalNames,
) {
  const scopeStack = [];
  let scopeIndex = scopes.length - 1;
  // Scopes were generated at completion time, so they're sorted by end index, so we can maintain a
  // good stack by going backwards through them.
  for (let i = tokens.tokens.length - 1; ; i--) {
    while (scopeStack.length > 0 && scopeStack[scopeStack.length - 1].startTokenIndex === i + 1) {
      scopeStack.pop();
    }
    while (scopeIndex >= 0 && scopes[scopeIndex].endTokenIndex === i + 1) {
      scopeStack.push(scopes[scopeIndex]);
      scopeIndex--;
    }
    // Process scopes after the last iteration so we can make sure we pop all of them.
    if (i < 0) {
      break;
    }

    const token = tokens.tokens[i];
    const name = tokens.identifierNameForToken(token);
    if (scopeStack.length > 1 && !token.isType && token.type === TokenType$1.name && globalNames.has(name)) {
      if (isBlockScopedDeclaration$1(token)) {
        markShadowedForScope(scopeStack[scopeStack.length - 1], tokens, name);
      } else if (isFunctionScopedDeclaration$1(token)) {
        let stackIndex = scopeStack.length - 1;
        while (stackIndex > 0 && !scopeStack[stackIndex].isFunctionScope) {
          stackIndex--;
        }
        if (stackIndex < 0) {
          throw new Error("Did not find parent function scope.");
        }
        markShadowedForScope(scopeStack[stackIndex], tokens, name);
      }
    }
  }
  if (scopeStack.length > 0) {
    throw new Error("Expected empty scope stack after processing file.");
  }
}

function markShadowedForScope(scope, tokens, name) {
  for (let i = scope.startTokenIndex; i < scope.endTokenIndex; i++) {
    const token = tokens.tokens[i];
    if (
      (token.type === TokenType$1.name || token.type === TokenType$1.jsxName) &&
      tokens.identifierNameForToken(token) === name
    ) {
      token.shadowsGlobal = true;
    }
  }
}

/**
 * Get all identifier names in the code, in order, including duplicates.
 */
function getIdentifierNames(code, tokens) {
  const names = [];
  for (const token of tokens) {
    if (token.type === TokenType$1.name) {
      names.push(code.slice(token.start, token.end));
    }
  }
  return names;
}

class NameManager {
    __init() {this.usedNames = new Set();}

  constructor(code, tokens) {NameManager.prototype.__init.call(this);
    this.usedNames = new Set(getIdentifierNames(code, tokens));
  }

  claimFreeName(name) {
    const newName = this.findFreeName(name);
    this.usedNames.add(newName);
    return newName;
  }

  findFreeName(name) {
    if (!this.usedNames.has(name)) {
      return name;
    }
    let suffixNum = 2;
    while (this.usedNames.has(name + String(suffixNum))) {
      suffixNum++;
    }
    return name + String(suffixNum);
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dist = {};

var types$1 = {};

var util$1 = {};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(util$1, "__esModule", { value: true });
util$1.DetailContext = util$1.NoopContext = util$1.VError = void 0;
/**
 * Error thrown by validation. Besides an informative message, it includes the path to the
 * property which triggered the failure.
 */
var VError = /** @class */ (function (_super) {
    __extends(VError, _super);
    function VError(path, message) {
        var _this = _super.call(this, message) || this;
        _this.path = path;
        // See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work for info about this workaround.
        Object.setPrototypeOf(_this, VError.prototype);
        return _this;
    }
    return VError;
}(Error));
util$1.VError = VError;
/**
 * Fast implementation of IContext used for first-pass validation. If that fails, we can validate
 * using DetailContext to collect error messages. That's faster for the common case when messages
 * normally pass validation.
 */
var NoopContext = /** @class */ (function () {
    function NoopContext() {
    }
    NoopContext.prototype.fail = function (relPath, message, score) {
        return false;
    };
    NoopContext.prototype.unionResolver = function () { return this; };
    NoopContext.prototype.createContext = function () { return this; };
    NoopContext.prototype.resolveUnion = function (ur) { };
    return NoopContext;
}());
util$1.NoopContext = NoopContext;
/**
 * Complete implementation of IContext that collects meaningfull errors.
 */
var DetailContext = /** @class */ (function () {
    function DetailContext() {
        // Stack of property names and associated messages for reporting helpful error messages.
        this._propNames = [""];
        this._messages = [null];
        // Score is used to choose the best union member whose DetailContext to use for reporting.
        // Higher score means better match (or rather less severe mismatch).
        this._score = 0;
    }
    DetailContext.prototype.fail = function (relPath, message, score) {
        this._propNames.push(relPath);
        this._messages.push(message);
        this._score += score;
        return false;
    };
    DetailContext.prototype.unionResolver = function () {
        return new DetailUnionResolver();
    };
    DetailContext.prototype.resolveUnion = function (unionResolver) {
        var _a, _b;
        var u = unionResolver;
        var best = null;
        for (var _i = 0, _c = u.contexts; _i < _c.length; _i++) {
            var ctx = _c[_i];
            if (!best || ctx._score >= best._score) {
                best = ctx;
            }
        }
        if (best && best._score > 0) {
            (_a = this._propNames).push.apply(_a, best._propNames);
            (_b = this._messages).push.apply(_b, best._messages);
        }
    };
    DetailContext.prototype.getError = function (path) {
        var msgParts = [];
        for (var i = this._propNames.length - 1; i >= 0; i--) {
            var p = this._propNames[i];
            path += (typeof p === "number") ? "[" + p + "]" : (p ? "." + p : "");
            var m = this._messages[i];
            if (m) {
                msgParts.push(path + " " + m);
            }
        }
        return new VError(path, msgParts.join("; "));
    };
    DetailContext.prototype.getErrorDetail = function (path) {
        var details = [];
        for (var i = this._propNames.length - 1; i >= 0; i--) {
            var p = this._propNames[i];
            path += (typeof p === "number") ? "[" + p + "]" : (p ? "." + p : "");
            var message = this._messages[i];
            if (message) {
                details.push({ path: path, message: message });
            }
        }
        var detail = null;
        for (var i = details.length - 1; i >= 0; i--) {
            if (detail) {
                details[i].nested = [detail];
            }
            detail = details[i];
        }
        return detail;
    };
    return DetailContext;
}());
util$1.DetailContext = DetailContext;
var DetailUnionResolver = /** @class */ (function () {
    function DetailUnionResolver() {
        this.contexts = [];
    }
    DetailUnionResolver.prototype.createContext = function () {
        var ctx = new DetailContext();
        this.contexts.push(ctx);
        return ctx;
    };
    return DetailUnionResolver;
}());

(function (exports) {
/**
 * This module defines nodes used to define types and validations for objects and interfaces.
 */
// tslint:disable:no-shadowed-variable prefer-for-of
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicTypes = exports.BasicType = exports.TParamList = exports.TParam = exports.param = exports.TFunc = exports.func = exports.TProp = exports.TOptional = exports.opt = exports.TIface = exports.iface = exports.TEnumLiteral = exports.enumlit = exports.TEnumType = exports.enumtype = exports.TIntersection = exports.intersection = exports.TUnion = exports.union = exports.TTuple = exports.tuple = exports.TArray = exports.array = exports.TLiteral = exports.lit = exports.TName = exports.name = exports.TType = void 0;
var util_1 = util$1;
/** Node that represents a type. */
var TType = /** @class */ (function () {
    function TType() {
    }
    return TType;
}());
exports.TType = TType;
/** Parses a type spec into a TType node. */
function parseSpec(typeSpec) {
    return typeof typeSpec === "string" ? name(typeSpec) : typeSpec;
}
function getNamedType(suite, name) {
    var ttype = suite[name];
    if (!ttype) {
        throw new Error("Unknown type " + name);
    }
    return ttype;
}
/**
 * Defines a type name, either built-in, or defined in this suite. It can typically be included in
 * the specs as just a plain string.
 */
function name(value) { return new TName(value); }
exports.name = name;
var TName = /** @class */ (function (_super) {
    __extends(TName, _super);
    function TName(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this._failMsg = "is not a " + name;
        return _this;
    }
    TName.prototype.getChecker = function (suite, strict, allowedProps) {
        var _this = this;
        var ttype = getNamedType(suite, this.name);
        var checker = ttype.getChecker(suite, strict, allowedProps);
        if (ttype instanceof BasicType || ttype instanceof TName) {
            return checker;
        }
        // For complex types, add an additional "is not a <Type>" message on failure.
        return function (value, ctx) { return checker(value, ctx) ? true : ctx.fail(null, _this._failMsg, 0); };
    };
    return TName;
}(TType));
exports.TName = TName;
/**
 * Defines a literal value, e.g. lit('hello') or lit(123).
 */
function lit(value) { return new TLiteral(value); }
exports.lit = lit;
var TLiteral = /** @class */ (function (_super) {
    __extends(TLiteral, _super);
    function TLiteral(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.name = JSON.stringify(value);
        _this._failMsg = "is not " + _this.name;
        return _this;
    }
    TLiteral.prototype.getChecker = function (suite, strict) {
        var _this = this;
        return function (value, ctx) { return (value === _this.value) ? true : ctx.fail(null, _this._failMsg, -1); };
    };
    return TLiteral;
}(TType));
exports.TLiteral = TLiteral;
/**
 * Defines an array type, e.g. array('number').
 */
function array(typeSpec) { return new TArray(parseSpec(typeSpec)); }
exports.array = array;
var TArray = /** @class */ (function (_super) {
    __extends(TArray, _super);
    function TArray(ttype) {
        var _this = _super.call(this) || this;
        _this.ttype = ttype;
        return _this;
    }
    TArray.prototype.getChecker = function (suite, strict) {
        var itemChecker = this.ttype.getChecker(suite, strict);
        return function (value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for (var i = 0; i < value.length; i++) {
                var ok = itemChecker(value[i], ctx);
                if (!ok) {
                    return ctx.fail(i, null, 1);
                }
            }
            return true;
        };
    };
    return TArray;
}(TType));
exports.TArray = TArray;
/**
 * Defines a tuple type, e.g. tuple('string', 'number').
 */
function tuple() {
    var typeSpec = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSpec[_i] = arguments[_i];
    }
    return new TTuple(typeSpec.map(function (t) { return parseSpec(t); }));
}
exports.tuple = tuple;
var TTuple = /** @class */ (function (_super) {
    __extends(TTuple, _super);
    function TTuple(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        return _this;
    }
    TTuple.prototype.getChecker = function (suite, strict) {
        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict); });
        var checker = function (value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for (var i = 0; i < itemCheckers.length; i++) {
                var ok = itemCheckers[i](value[i], ctx);
                if (!ok) {
                    return ctx.fail(i, null, 1);
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        return function (value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            return value.length <= itemCheckers.length ? true :
                ctx.fail(itemCheckers.length, "is extraneous", 2);
        };
    };
    return TTuple;
}(TType));
exports.TTuple = TTuple;
/**
 * Defines a union type, e.g. union('number', 'null').
 */
function union() {
    var typeSpec = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSpec[_i] = arguments[_i];
    }
    return new TUnion(typeSpec.map(function (t) { return parseSpec(t); }));
}
exports.union = union;
var TUnion = /** @class */ (function (_super) {
    __extends(TUnion, _super);
    function TUnion(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        var names = ttypes.map(function (t) { return t instanceof TName || t instanceof TLiteral ? t.name : null; })
            .filter(function (n) { return n; });
        var otherTypes = ttypes.length - names.length;
        if (names.length) {
            if (otherTypes > 0) {
                names.push(otherTypes + " more");
            }
            _this._failMsg = "is none of " + names.join(", ");
        }
        else {
            _this._failMsg = "is none of " + otherTypes + " types";
        }
        return _this;
    }
    TUnion.prototype.getChecker = function (suite, strict) {
        var _this = this;
        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict); });
        return function (value, ctx) {
            var ur = ctx.unionResolver();
            for (var i = 0; i < itemCheckers.length; i++) {
                var ok = itemCheckers[i](value, ur.createContext());
                if (ok) {
                    return true;
                }
            }
            ctx.resolveUnion(ur);
            return ctx.fail(null, _this._failMsg, 0);
        };
    };
    return TUnion;
}(TType));
exports.TUnion = TUnion;
/**
 * Defines an intersection type, e.g. intersection('number', 'null').
 */
function intersection() {
    var typeSpec = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSpec[_i] = arguments[_i];
    }
    return new TIntersection(typeSpec.map(function (t) { return parseSpec(t); }));
}
exports.intersection = intersection;
var TIntersection = /** @class */ (function (_super) {
    __extends(TIntersection, _super);
    function TIntersection(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        return _this;
    }
    TIntersection.prototype.getChecker = function (suite, strict) {
        var allowedProps = new Set();
        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict, allowedProps); });
        return function (value, ctx) {
            var ok = itemCheckers.every(function (checker) { return checker(value, ctx); });
            if (ok) {
                return true;
            }
            return ctx.fail(null, null, 0);
        };
    };
    return TIntersection;
}(TType));
exports.TIntersection = TIntersection;
/**
 * Defines an enum type, e.g. enum({'A': 1, 'B': 2}).
 */
function enumtype(values) {
    return new TEnumType(values);
}
exports.enumtype = enumtype;
var TEnumType = /** @class */ (function (_super) {
    __extends(TEnumType, _super);
    function TEnumType(members) {
        var _this = _super.call(this) || this;
        _this.members = members;
        _this.validValues = new Set();
        _this._failMsg = "is not a valid enum value";
        _this.validValues = new Set(Object.keys(members).map(function (name) { return members[name]; }));
        return _this;
    }
    TEnumType.prototype.getChecker = function (suite, strict) {
        var _this = this;
        return function (value, ctx) {
            return (_this.validValues.has(value) ? true : ctx.fail(null, _this._failMsg, 0));
        };
    };
    return TEnumType;
}(TType));
exports.TEnumType = TEnumType;
/**
 * Defines a literal enum value, such as Direction.Up, specified as enumlit("Direction", "Up").
 */
function enumlit(name, prop) {
    return new TEnumLiteral(name, prop);
}
exports.enumlit = enumlit;
var TEnumLiteral = /** @class */ (function (_super) {
    __extends(TEnumLiteral, _super);
    function TEnumLiteral(enumName, prop) {
        var _this = _super.call(this) || this;
        _this.enumName = enumName;
        _this.prop = prop;
        _this._failMsg = "is not " + enumName + "." + prop;
        return _this;
    }
    TEnumLiteral.prototype.getChecker = function (suite, strict) {
        var _this = this;
        var ttype = getNamedType(suite, this.enumName);
        if (!(ttype instanceof TEnumType)) {
            throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
        }
        var val = ttype.members[this.prop];
        if (!ttype.members.hasOwnProperty(this.prop)) {
            throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
        }
        return function (value, ctx) { return (value === val) ? true : ctx.fail(null, _this._failMsg, -1); };
    };
    return TEnumLiteral;
}(TType));
exports.TEnumLiteral = TEnumLiteral;
function makeIfaceProps(props) {
    return Object.keys(props).map(function (name) { return makeIfaceProp(name, props[name]); });
}
function makeIfaceProp(name, prop) {
    return prop instanceof TOptional ?
        new TProp(name, prop.ttype, true) :
        new TProp(name, parseSpec(prop), false);
}
/**
 * Defines an interface. The first argument is an array of interfaces that it extends, and the
 * second is an array of properties.
 */
function iface(bases, props) {
    return new TIface(bases, makeIfaceProps(props));
}
exports.iface = iface;
var TIface = /** @class */ (function (_super) {
    __extends(TIface, _super);
    function TIface(bases, props) {
        var _this = _super.call(this) || this;
        _this.bases = bases;
        _this.props = props;
        _this.propSet = new Set(props.map(function (p) { return p.name; }));
        return _this;
    }
    TIface.prototype.getChecker = function (suite, strict, allowedProps) {
        var _this = this;
        var baseCheckers = this.bases.map(function (b) { return getNamedType(suite, b).getChecker(suite, strict); });
        var propCheckers = this.props.map(function (prop) { return prop.ttype.getChecker(suite, strict); });
        var testCtx = new util_1.NoopContext();
        // Consider a prop required if it's not optional AND does not allow for undefined as a value.
        var isPropRequired = this.props.map(function (prop, i) {
            return !prop.isOpt && !propCheckers[i](undefined, testCtx);
        });
        var checker = function (value, ctx) {
            if (typeof value !== "object" || value === null) {
                return ctx.fail(null, "is not an object", 0);
            }
            for (var i = 0; i < baseCheckers.length; i++) {
                if (!baseCheckers[i](value, ctx)) {
                    return false;
                }
            }
            for (var i = 0; i < propCheckers.length; i++) {
                var name_1 = _this.props[i].name;
                var v = value[name_1];
                if (v === undefined) {
                    if (isPropRequired[i]) {
                        return ctx.fail(name_1, "is missing", 1);
                    }
                }
                else {
                    var ok = propCheckers[i](v, ctx);
                    if (!ok) {
                        return ctx.fail(name_1, null, 1);
                    }
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        var propSet = this.propSet;
        if (allowedProps) {
            this.propSet.forEach(function (prop) { return allowedProps.add(prop); });
            propSet = allowedProps;
        }
        // In strict mode, check also for unknown enumerable properties.
        return function (value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            for (var prop in value) {
                if (!propSet.has(prop)) {
                    return ctx.fail(prop, "is extraneous", 2);
                }
            }
            return true;
        };
    };
    return TIface;
}(TType));
exports.TIface = TIface;
/**
 * Defines an optional property on an interface.
 */
function opt(typeSpec) { return new TOptional(parseSpec(typeSpec)); }
exports.opt = opt;
var TOptional = /** @class */ (function (_super) {
    __extends(TOptional, _super);
    function TOptional(ttype) {
        var _this = _super.call(this) || this;
        _this.ttype = ttype;
        return _this;
    }
    TOptional.prototype.getChecker = function (suite, strict) {
        var itemChecker = this.ttype.getChecker(suite, strict);
        return function (value, ctx) {
            return value === undefined || itemChecker(value, ctx);
        };
    };
    return TOptional;
}(TType));
exports.TOptional = TOptional;
/**
 * Defines a property in an interface.
 */
var TProp = /** @class */ (function () {
    function TProp(name, ttype, isOpt) {
        this.name = name;
        this.ttype = ttype;
        this.isOpt = isOpt;
    }
    return TProp;
}());
exports.TProp = TProp;
/**
 * Defines a function. The first argument declares the function's return type, the rest declare
 * its parameters.
 */
function func(resultSpec) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return new TFunc(new TParamList(params), parseSpec(resultSpec));
}
exports.func = func;
var TFunc = /** @class */ (function (_super) {
    __extends(TFunc, _super);
    function TFunc(paramList, result) {
        var _this = _super.call(this) || this;
        _this.paramList = paramList;
        _this.result = result;
        return _this;
    }
    TFunc.prototype.getChecker = function (suite, strict) {
        return function (value, ctx) {
            return typeof value === "function" ? true : ctx.fail(null, "is not a function", 0);
        };
    };
    return TFunc;
}(TType));
exports.TFunc = TFunc;
/**
 * Defines a function parameter.
 */
function param(name, typeSpec, isOpt) {
    return new TParam(name, parseSpec(typeSpec), Boolean(isOpt));
}
exports.param = param;
var TParam = /** @class */ (function () {
    function TParam(name, ttype, isOpt) {
        this.name = name;
        this.ttype = ttype;
        this.isOpt = isOpt;
    }
    return TParam;
}());
exports.TParam = TParam;
/**
 * Defines a function parameter list.
 */
var TParamList = /** @class */ (function (_super) {
    __extends(TParamList, _super);
    function TParamList(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        return _this;
    }
    TParamList.prototype.getChecker = function (suite, strict) {
        var _this = this;
        var itemCheckers = this.params.map(function (t) { return t.ttype.getChecker(suite, strict); });
        var testCtx = new util_1.NoopContext();
        var isParamRequired = this.params.map(function (param, i) {
            return !param.isOpt && !itemCheckers[i](undefined, testCtx);
        });
        var checker = function (value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for (var i = 0; i < itemCheckers.length; i++) {
                var p = _this.params[i];
                if (value[i] === undefined) {
                    if (isParamRequired[i]) {
                        return ctx.fail(p.name, "is missing", 1);
                    }
                }
                else {
                    var ok = itemCheckers[i](value[i], ctx);
                    if (!ok) {
                        return ctx.fail(p.name, null, 1);
                    }
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        return function (value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            return value.length <= itemCheckers.length ? true :
                ctx.fail(itemCheckers.length, "is extraneous", 2);
        };
    };
    return TParamList;
}(TType));
exports.TParamList = TParamList;
/**
 * Single TType implementation for all basic built-in types.
 */
var BasicType = /** @class */ (function (_super) {
    __extends(BasicType, _super);
    function BasicType(validator, message) {
        var _this = _super.call(this) || this;
        _this.validator = validator;
        _this.message = message;
        return _this;
    }
    BasicType.prototype.getChecker = function (suite, strict) {
        var _this = this;
        return function (value, ctx) { return _this.validator(value) ? true : ctx.fail(null, _this.message, 0); };
    };
    return BasicType;
}(TType));
exports.BasicType = BasicType;
/**
 * Defines the suite of basic types.
 */
exports.basicTypes = {
    any: new BasicType(function (v) { return true; }, "is invalid"),
    number: new BasicType(function (v) { return (typeof v === "number"); }, "is not a number"),
    object: new BasicType(function (v) { return (typeof v === "object" && v); }, "is not an object"),
    boolean: new BasicType(function (v) { return (typeof v === "boolean"); }, "is not a boolean"),
    string: new BasicType(function (v) { return (typeof v === "string"); }, "is not a string"),
    symbol: new BasicType(function (v) { return (typeof v === "symbol"); }, "is not a symbol"),
    void: new BasicType(function (v) { return (v == null); }, "is not void"),
    undefined: new BasicType(function (v) { return (v === undefined); }, "is not undefined"),
    null: new BasicType(function (v) { return (v === null); }, "is not null"),
    never: new BasicType(function (v) { return false; }, "is unexpected"),
    Date: new BasicType(getIsNativeChecker("[object Date]"), "is not a Date"),
    RegExp: new BasicType(getIsNativeChecker("[object RegExp]"), "is not a RegExp"),
};
// This approach for checking native object types mirrors that of lodash. Its advantage over
// `isinstance` is that it can still return true for native objects created in different JS
// execution environments.
var nativeToString = Object.prototype.toString;
function getIsNativeChecker(tag) {
    return function (v) { return typeof v === "object" && v && nativeToString.call(v) === tag; };
}
if (typeof Buffer !== "undefined") {
    exports.basicTypes.Buffer = new BasicType(function (v) { return Buffer.isBuffer(v); }, "is not a Buffer");
}
var _loop_1 = function (array_1) {
    exports.basicTypes[array_1.name] = new BasicType(function (v) { return (v instanceof array_1); }, "is not a " + array_1.name);
};
// Support typed arrays of various flavors
for (var _i = 0, _a = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
    Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]; _i < _a.length; _i++) {
    var array_1 = _a[_i];
    _loop_1(array_1);
}
}(types$1));

(function (exports) {
var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checker = exports.createCheckers = void 0;
var types_1 = types$1;
var util_1 = util$1;
/**
 * Export functions used to define interfaces.
 */
var types_2 = types$1;
Object.defineProperty(exports, "TArray", { enumerable: true, get: function () { return types_2.TArray; } });
Object.defineProperty(exports, "TEnumType", { enumerable: true, get: function () { return types_2.TEnumType; } });
Object.defineProperty(exports, "TEnumLiteral", { enumerable: true, get: function () { return types_2.TEnumLiteral; } });
Object.defineProperty(exports, "TFunc", { enumerable: true, get: function () { return types_2.TFunc; } });
Object.defineProperty(exports, "TIface", { enumerable: true, get: function () { return types_2.TIface; } });
Object.defineProperty(exports, "TLiteral", { enumerable: true, get: function () { return types_2.TLiteral; } });
Object.defineProperty(exports, "TName", { enumerable: true, get: function () { return types_2.TName; } });
Object.defineProperty(exports, "TOptional", { enumerable: true, get: function () { return types_2.TOptional; } });
Object.defineProperty(exports, "TParam", { enumerable: true, get: function () { return types_2.TParam; } });
Object.defineProperty(exports, "TParamList", { enumerable: true, get: function () { return types_2.TParamList; } });
Object.defineProperty(exports, "TProp", { enumerable: true, get: function () { return types_2.TProp; } });
Object.defineProperty(exports, "TTuple", { enumerable: true, get: function () { return types_2.TTuple; } });
Object.defineProperty(exports, "TType", { enumerable: true, get: function () { return types_2.TType; } });
Object.defineProperty(exports, "TUnion", { enumerable: true, get: function () { return types_2.TUnion; } });
Object.defineProperty(exports, "TIntersection", { enumerable: true, get: function () { return types_2.TIntersection; } });
Object.defineProperty(exports, "array", { enumerable: true, get: function () { return types_2.array; } });
Object.defineProperty(exports, "enumlit", { enumerable: true, get: function () { return types_2.enumlit; } });
Object.defineProperty(exports, "enumtype", { enumerable: true, get: function () { return types_2.enumtype; } });
Object.defineProperty(exports, "func", { enumerable: true, get: function () { return types_2.func; } });
Object.defineProperty(exports, "iface", { enumerable: true, get: function () { return types_2.iface; } });
Object.defineProperty(exports, "lit", { enumerable: true, get: function () { return types_2.lit; } });
Object.defineProperty(exports, "name", { enumerable: true, get: function () { return types_2.name; } });
Object.defineProperty(exports, "opt", { enumerable: true, get: function () { return types_2.opt; } });
Object.defineProperty(exports, "param", { enumerable: true, get: function () { return types_2.param; } });
Object.defineProperty(exports, "tuple", { enumerable: true, get: function () { return types_2.tuple; } });
Object.defineProperty(exports, "union", { enumerable: true, get: function () { return types_2.union; } });
Object.defineProperty(exports, "intersection", { enumerable: true, get: function () { return types_2.intersection; } });
Object.defineProperty(exports, "BasicType", { enumerable: true, get: function () { return types_2.BasicType; } });
var util_2 = util$1;
Object.defineProperty(exports, "VError", { enumerable: true, get: function () { return util_2.VError; } });
/**
 * Takes one of more type suites (e.g. a module generated by `ts-interface-builder`), and combines
 * them into a suite of interface checkers. If a type is used by name, that name should be present
 * among the passed-in type suites.
 *
 * The returned object maps type names to Checker objects.
 */
function createCheckers() {
    var typeSuite = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typeSuite[_i] = arguments[_i];
    }
    var fullSuite = Object.assign.apply(Object, __spreadArrays([{}, types_1.basicTypes], typeSuite));
    var checkers = {};
    for (var _a = 0, typeSuite_1 = typeSuite; _a < typeSuite_1.length; _a++) {
        var suite_1 = typeSuite_1[_a];
        for (var _b = 0, _c = Object.keys(suite_1); _b < _c.length; _b++) {
            var name = _c[_b];
            checkers[name] = new Checker(fullSuite, suite_1[name]);
        }
    }
    return checkers;
}
exports.createCheckers = createCheckers;
/**
 * Checker implements validation of objects, and also includes accessors to validate method calls.
 * Checkers should be created using `createCheckers()`.
 */
var Checker = /** @class */ (function () {
    // Create checkers by using `createCheckers()` function.
    function Checker(suite, ttype, _path) {
        if (_path === void 0) { _path = 'value'; }
        this.suite = suite;
        this.ttype = ttype;
        this._path = _path;
        this.props = new Map();
        if (ttype instanceof types_1.TIface) {
            for (var _i = 0, _a = ttype.props; _i < _a.length; _i++) {
                var p = _a[_i];
                this.props.set(p.name, p.ttype);
            }
        }
        this.checkerPlain = this.ttype.getChecker(suite, false);
        this.checkerStrict = this.ttype.getChecker(suite, true);
    }
    /**
     * Set the path to report in errors, instead of the default "value". (E.g. if the Checker is for
     * a "person" interface, set path to "person" to report e.g. "person.name is not a string".)
     */
    Checker.prototype.setReportedPath = function (path) {
        this._path = path;
    };
    /**
     * Check that the given value satisfies this checker's type, or throw Error.
     */
    Checker.prototype.check = function (value) { return this._doCheck(this.checkerPlain, value); };
    /**
     * A fast check for whether or not the given value satisfies this Checker's type. This returns
     * true or false, does not produce an error message, and is fast both on success and on failure.
     */
    Checker.prototype.test = function (value) {
        return this.checkerPlain(value, new util_1.NoopContext());
    };
    /**
     * Returns an error object describing the errors if the given value does not satisfy this
     * Checker's type, or null if it does.
     */
    Checker.prototype.validate = function (value) {
        return this._doValidate(this.checkerPlain, value);
    };
    /**
     * Check that the given value satisfies this checker's type strictly. This checks that objects
     * and tuples have no extra members. Note that this prevents backward compatibility, so usually
     * a plain check() is more appropriate.
     */
    Checker.prototype.strictCheck = function (value) { return this._doCheck(this.checkerStrict, value); };
    /**
     * A fast strict check for whether or not the given value satisfies this Checker's type. Returns
     * true or false, does not produce an error message, and is fast both on success and on failure.
     */
    Checker.prototype.strictTest = function (value) {
        return this.checkerStrict(value, new util_1.NoopContext());
    };
    /**
     * Returns an error object describing the errors if the given value does not satisfy this
     * Checker's type strictly, or null if it does.
     */
    Checker.prototype.strictValidate = function (value) {
        return this._doValidate(this.checkerStrict, value);
    };
    /**
     * If this checker is for an interface, returns a Checker for the type required for the given
     * property of this interface.
     */
    Checker.prototype.getProp = function (prop) {
        var ttype = this.props.get(prop);
        if (!ttype) {
            throw new Error("Type has no property " + prop);
        }
        return new Checker(this.suite, ttype, this._path + "." + prop);
    };
    /**
     * If this checker is for an interface, returns a Checker for the argument-list required to call
     * the given method of this interface. E.g. if this Checker is for the interface:
     *    interface Foo {
     *      find(s: string, pos?: number): number;
     *    }
     * Then methodArgs("find").check(...) will succeed for ["foo"] and ["foo", 3], but not for [17].
     */
    Checker.prototype.methodArgs = function (methodName) {
        var tfunc = this._getMethod(methodName);
        return new Checker(this.suite, tfunc.paramList);
    };
    /**
     * If this checker is for an interface, returns a Checker for the return value of the given
     * method of this interface.
     */
    Checker.prototype.methodResult = function (methodName) {
        var tfunc = this._getMethod(methodName);
        return new Checker(this.suite, tfunc.result);
    };
    /**
     * If this checker is for a function, returns a Checker for its argument-list.
     */
    Checker.prototype.getArgs = function () {
        if (!(this.ttype instanceof types_1.TFunc)) {
            throw new Error("getArgs() applied to non-function");
        }
        return new Checker(this.suite, this.ttype.paramList);
    };
    /**
     * If this checker is for a function, returns a Checker for its result.
     */
    Checker.prototype.getResult = function () {
        if (!(this.ttype instanceof types_1.TFunc)) {
            throw new Error("getResult() applied to non-function");
        }
        return new Checker(this.suite, this.ttype.result);
    };
    /**
     * Return the type for which this is a checker.
     */
    Checker.prototype.getType = function () {
        return this.ttype;
    };
    /**
     * Actual implementation of check() and strictCheck().
     */
    Checker.prototype._doCheck = function (checkerFunc, value) {
        var noopCtx = new util_1.NoopContext();
        if (!checkerFunc(value, noopCtx)) {
            var detailCtx = new util_1.DetailContext();
            checkerFunc(value, detailCtx);
            throw detailCtx.getError(this._path);
        }
    };
    Checker.prototype._doValidate = function (checkerFunc, value) {
        var noopCtx = new util_1.NoopContext();
        if (checkerFunc(value, noopCtx)) {
            return null;
        }
        var detailCtx = new util_1.DetailContext();
        checkerFunc(value, detailCtx);
        return detailCtx.getErrorDetail(this._path);
    };
    Checker.prototype._getMethod = function (methodName) {
        var ttype = this.props.get(methodName);
        if (!ttype) {
            throw new Error("Type has no property " + methodName);
        }
        if (!(ttype instanceof types_1.TFunc)) {
            throw new Error("Property " + methodName + " is not a method");
        }
        return ttype;
    };
    return Checker;
}());
exports.Checker = Checker;
}(dist));

/**
 * This module was automatically generated by `ts-interface-builder`
 */
// tslint:disable:object-literal-key-quotes

const Transform = dist.union(
  dist.lit("jsx"),
  dist.lit("typescript"),
  dist.lit("flow"),
  dist.lit("imports"),
  dist.lit("react-hot-loader"),
  dist.lit("jest"),
);

const SourceMapOptions = dist.iface([], {
  compiledFilename: "string",
});

const Options = dist.iface([], {
  transforms: dist.array("Transform"),
  disableESTransforms: dist.opt("boolean"),
  jsxRuntime: dist.opt(dist.union(dist.lit("classic"), dist.lit("automatic"), dist.lit("preserve"))),
  production: dist.opt("boolean"),
  jsxImportSource: dist.opt("string"),
  jsxPragma: dist.opt("string"),
  jsxFragmentPragma: dist.opt("string"),
  keepUnusedImports: dist.opt("boolean"),
  preserveDynamicImport: dist.opt("boolean"),
  injectCreateRequireForImportRequire: dist.opt("boolean"),
  enableLegacyTypeScriptModuleInterop: dist.opt("boolean"),
  enableLegacyBabel5ModuleInterop: dist.opt("boolean"),
  sourceMapOptions: dist.opt("SourceMapOptions"),
  filePath: dist.opt("string"),
});

const exportedTypeSuite = {
  Transform,
  SourceMapOptions,
  Options,
};

const {Options: OptionsChecker} = dist.createCheckers(exportedTypeSuite);

 



























































































function validateOptions(options) {
  OptionsChecker.strictCheck(options);
}

function parseSpread() {
  next$1();
  parseMaybeAssign(false);
}

function parseRest(isBlockScope) {
  next$1();
  parseBindingAtom(isBlockScope);
}

function parseBindingIdentifier(isBlockScope) {
  parseIdentifier();
  markPriorBindingIdentifier(isBlockScope);
}

function parseImportedIdentifier() {
  parseIdentifier();
  state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ImportDeclaration;
}

function markPriorBindingIdentifier(isBlockScope) {
  let identifierRole;
  if (state$1.scopeDepth === 0) {
    identifierRole = IdentifierRole$1.TopLevelDeclaration;
  } else if (isBlockScope) {
    identifierRole = IdentifierRole$1.BlockScopedDeclaration;
  } else {
    identifierRole = IdentifierRole$1.FunctionScopedDeclaration;
  }
  state$1.tokens[state$1.tokens.length - 1].identifierRole = identifierRole;
}

// Parses lvalue (assignable) atom.
function parseBindingAtom(isBlockScope) {
  switch (state$1.type) {
    case TokenType$1._this: {
      // In TypeScript, "this" may be the name of a parameter, so allow it.
      const oldIsType = pushTypeContext$1(0);
      next$1();
      popTypeContext$1(oldIsType);
      return;
    }

    case TokenType$1._yield:
    case TokenType$1.name: {
      state$1.type = TokenType$1.name;
      parseBindingIdentifier(isBlockScope);
      return;
    }

    case TokenType$1.bracketL: {
      next$1();
      parseBindingList(TokenType$1.bracketR, isBlockScope, true /* allowEmpty */);
      return;
    }

    case TokenType$1.braceL:
      parseObj(true, isBlockScope);
      return;

    default:
      unexpected$1();
  }
}

function parseBindingList(
  close,
  isBlockScope,
  allowEmpty = false,
  allowModifiers = false,
  contextId = 0,
) {
  let first = true;

  let hasRemovedComma = false;
  const firstItemTokenIndex = state$1.tokens.length;

  while (!eat$1(close) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      expect$1(TokenType$1.comma);
      state$1.tokens[state$1.tokens.length - 1].contextId = contextId;
      // After a "this" type in TypeScript, we need to set the following comma (if any) to also be
      // a type token so that it will be removed.
      if (!hasRemovedComma && state$1.tokens[firstItemTokenIndex].isType) {
        state$1.tokens[state$1.tokens.length - 1].isType = true;
        hasRemovedComma = true;
      }
    }
    if (allowEmpty && match$1(TokenType$1.comma)) ; else if (eat$1(close)) {
      break;
    } else if (match$1(TokenType$1.ellipsis)) {
      parseRest(isBlockScope);
      parseAssignableListItemTypes();
      // Support rest element trailing commas allowed by TypeScript <2.9.
      eat$1(TokenType$1.comma);
      expect$1(close);
      break;
    } else {
      parseAssignableListItem(allowModifiers, isBlockScope);
    }
  }
}

function parseAssignableListItem(allowModifiers, isBlockScope) {
  if (allowModifiers) {
    tsParseModifiers([
      ContextualKeyword$1._public,
      ContextualKeyword$1._protected,
      ContextualKeyword$1._private,
      ContextualKeyword$1._readonly,
      ContextualKeyword$1._override,
    ]);
  }

  parseMaybeDefault(isBlockScope);
  parseAssignableListItemTypes();
  parseMaybeDefault(isBlockScope, true /* leftAlreadyParsed */);
}

function parseAssignableListItemTypes() {
  if (isFlowEnabled) {
    flowParseAssignableListItemTypes();
  } else if (isTypeScriptEnabled) {
    tsParseAssignableListItemTypes();
  }
}

// Parses assignment pattern around given atom if possible.
function parseMaybeDefault(isBlockScope, leftAlreadyParsed = false) {
  if (!leftAlreadyParsed) {
    parseBindingAtom(isBlockScope);
  }
  if (!eat$1(TokenType$1.eq)) {
    return;
  }
  const eqIndex = state$1.tokens.length - 1;
  parseMaybeAssign();
  state$1.tokens[eqIndex].rhsEndIndex = state$1.tokens.length;
}

function tsIsIdentifier() {
  // TODO: actually a bit more complex in TypeScript, but shouldn't matter.
  // See https://github.com/Microsoft/TypeScript/issues/15008
  return match$1(TokenType$1.name);
}

function isLiteralPropertyName() {
  return (
    match$1(TokenType$1.name) ||
    Boolean(state$1.type & TokenType$1.IS_KEYWORD) ||
    match$1(TokenType$1.string) ||
    match$1(TokenType$1.num) ||
    match$1(TokenType$1.bigint) ||
    match$1(TokenType$1.decimal)
  );
}

function tsNextTokenCanFollowModifier() {
  // Note: TypeScript's implementation is much more complicated because
  // more things are considered modifiers there.
  // This implementation only handles modifiers not handled by babylon itself. And "static".
  // TODO: Would be nice to avoid lookahead. Want a hasLineBreakUpNext() method...
  const snapshot = state$1.snapshot();

  next$1();
  const canFollowModifier =
    (match$1(TokenType$1.bracketL) ||
      match$1(TokenType$1.braceL) ||
      match$1(TokenType$1.star) ||
      match$1(TokenType$1.ellipsis) ||
      match$1(TokenType$1.hash) ||
      isLiteralPropertyName()) &&
    !hasPrecedingLineBreak$1();

  if (canFollowModifier) {
    return true;
  } else {
    state$1.restoreFromSnapshot(snapshot);
    return false;
  }
}

function tsParseModifiers(allowedModifiers) {
  while (true) {
    const modifier = tsParseModifier(allowedModifiers);
    if (modifier === null) {
      break;
    }
  }
}

/** Parses a modifier matching one the given modifier names. */
function tsParseModifier(
  allowedModifiers,
) {
  if (!match$1(TokenType$1.name)) {
    return null;
  }

  const modifier = state$1.contextualKeyword;
  if (allowedModifiers.indexOf(modifier) !== -1 && tsNextTokenCanFollowModifier()) {
    switch (modifier) {
      case ContextualKeyword$1._readonly:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._readonly;
        break;
      case ContextualKeyword$1._abstract:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._abstract;
        break;
      case ContextualKeyword$1._static:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._static;
        break;
      case ContextualKeyword$1._public:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._public;
        break;
      case ContextualKeyword$1._private:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._private;
        break;
      case ContextualKeyword$1._protected:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._protected;
        break;
      case ContextualKeyword$1._override:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._override;
        break;
      case ContextualKeyword$1._declare:
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._declare;
        break;
    }
    return modifier;
  }
  return null;
}

function tsParseEntityName() {
  parseIdentifier();
  while (eat$1(TokenType$1.dot)) {
    parseIdentifier();
  }
}

function tsParseTypeReference() {
  tsParseEntityName();
  if (!hasPrecedingLineBreak$1() && match$1(TokenType$1.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseThisTypePredicate() {
  next$1();
  tsParseTypeAnnotation();
}

function tsParseThisTypeNode() {
  next$1();
}

function tsParseTypeQuery() {
  expect$1(TokenType$1._typeof);
  if (match$1(TokenType$1._import)) {
    tsParseImportType();
  } else {
    tsParseEntityName();
  }
  if (!hasPrecedingLineBreak$1() && match$1(TokenType$1.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseImportType() {
  expect$1(TokenType$1._import);
  expect$1(TokenType$1.parenL);
  expect$1(TokenType$1.string);
  expect$1(TokenType$1.parenR);
  if (eat$1(TokenType$1.dot)) {
    tsParseEntityName();
  }
  if (match$1(TokenType$1.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseTypeParameter() {
  eat$1(TokenType$1._const);
  const hadIn = eat$1(TokenType$1._in);
  const hadOut = eatContextual$1(ContextualKeyword$1._out);
  eat$1(TokenType$1._const);
  if ((hadIn || hadOut) && !match$1(TokenType$1.name)) {
    // The "in" or "out" keyword must have actually been the type parameter
    // name, so set it as the name.
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.name;
  } else {
    parseIdentifier();
  }

  if (eat$1(TokenType$1._extends)) {
    tsParseType();
  }
  if (eat$1(TokenType$1.eq)) {
    tsParseType();
  }
}

function tsTryParseTypeParameters() {
  if (match$1(TokenType$1.lessThan)) {
    tsParseTypeParameters();
  }
}

function tsParseTypeParameters() {
  const oldIsType = pushTypeContext$1(0);
  if (match$1(TokenType$1.lessThan) || match$1(TokenType$1.typeParameterStart)) {
    next$1();
  } else {
    unexpected$1();
  }

  while (!eat$1(TokenType$1.greaterThan) && !state$1.error) {
    tsParseTypeParameter();
    eat$1(TokenType$1.comma);
  }
  popTypeContext$1(oldIsType);
}

// Note: In TypeScript implementation we must provide `yieldContext` and `awaitContext`,
// but here it's always false, because this is only used for types.
function tsFillSignature(returnToken) {
  // Arrow fns *must* have return token (`=>`). Normal functions can omit it.
  const returnTokenRequired = returnToken === TokenType$1.arrow;
  tsTryParseTypeParameters();
  expect$1(TokenType$1.parenL);
  // Create a scope even though we're doing type parsing so we don't accidentally
  // treat params as top-level bindings.
  state$1.scopeDepth++;
  tsParseBindingListForSignature(false /* isBlockScope */);
  state$1.scopeDepth--;
  if (returnTokenRequired) {
    tsParseTypeOrTypePredicateAnnotation(returnToken);
  } else if (match$1(returnToken)) {
    tsParseTypeOrTypePredicateAnnotation(returnToken);
  }
}

function tsParseBindingListForSignature(isBlockScope) {
  parseBindingList(TokenType$1.parenR, isBlockScope);
}

function tsParseTypeMemberSemicolon() {
  if (!eat$1(TokenType$1.comma)) {
    semicolon$2();
  }
}

function tsParseSignatureMember() {
  tsFillSignature(TokenType$1.colon);
  tsParseTypeMemberSemicolon();
}

function tsIsUnambiguouslyIndexSignature() {
  const snapshot = state$1.snapshot();
  next$1(); // Skip '{'
  const isIndexSignature = eat$1(TokenType$1.name) && match$1(TokenType$1.colon);
  state$1.restoreFromSnapshot(snapshot);
  return isIndexSignature;
}

function tsTryParseIndexSignature() {
  if (!(match$1(TokenType$1.bracketL) && tsIsUnambiguouslyIndexSignature())) {
    return false;
  }

  const oldIsType = pushTypeContext$1(0);

  expect$1(TokenType$1.bracketL);
  parseIdentifier();
  tsParseTypeAnnotation();
  expect$1(TokenType$1.bracketR);

  tsTryParseTypeAnnotation();
  tsParseTypeMemberSemicolon();

  popTypeContext$1(oldIsType);
  return true;
}

function tsParsePropertyOrMethodSignature(isReadonly) {
  eat$1(TokenType$1.question);

  if (!isReadonly && (match$1(TokenType$1.parenL) || match$1(TokenType$1.lessThan))) {
    tsFillSignature(TokenType$1.colon);
    tsParseTypeMemberSemicolon();
  } else {
    tsTryParseTypeAnnotation();
    tsParseTypeMemberSemicolon();
  }
}

function tsParseTypeMember() {
  if (match$1(TokenType$1.parenL) || match$1(TokenType$1.lessThan)) {
    // call signature
    tsParseSignatureMember();
    return;
  }
  if (match$1(TokenType$1._new)) {
    next$1();
    if (match$1(TokenType$1.parenL) || match$1(TokenType$1.lessThan)) {
      // constructor signature
      tsParseSignatureMember();
    } else {
      tsParsePropertyOrMethodSignature(false);
    }
    return;
  }
  const readonly = !!tsParseModifier([ContextualKeyword$1._readonly]);

  const found = tsTryParseIndexSignature();
  if (found) {
    return;
  }
  if (
    (isContextual$1(ContextualKeyword$1._get) || isContextual$1(ContextualKeyword$1._set)) &&
    tsNextTokenCanFollowModifier()
  ) ;
  parsePropertyName(-1 /* Types don't need context IDs. */);
  tsParsePropertyOrMethodSignature(readonly);
}

function tsParseTypeLiteral() {
  tsParseObjectTypeMembers();
}

function tsParseObjectTypeMembers() {
  expect$1(TokenType$1.braceL);
  while (!eat$1(TokenType$1.braceR) && !state$1.error) {
    tsParseTypeMember();
  }
}

function tsLookaheadIsStartOfMappedType() {
  const snapshot = state$1.snapshot();
  const isStartOfMappedType = tsIsStartOfMappedType();
  state$1.restoreFromSnapshot(snapshot);
  return isStartOfMappedType;
}

function tsIsStartOfMappedType() {
  next$1();
  if (eat$1(TokenType$1.plus) || eat$1(TokenType$1.minus)) {
    return isContextual$1(ContextualKeyword$1._readonly);
  }
  if (isContextual$1(ContextualKeyword$1._readonly)) {
    next$1();
  }
  if (!match$1(TokenType$1.bracketL)) {
    return false;
  }
  next$1();
  if (!tsIsIdentifier()) {
    return false;
  }
  next$1();
  return match$1(TokenType$1._in);
}

function tsParseMappedTypeParameter() {
  parseIdentifier();
  expect$1(TokenType$1._in);
  tsParseType();
}

function tsParseMappedType() {
  expect$1(TokenType$1.braceL);
  if (match$1(TokenType$1.plus) || match$1(TokenType$1.minus)) {
    next$1();
    expectContextual$1(ContextualKeyword$1._readonly);
  } else {
    eatContextual$1(ContextualKeyword$1._readonly);
  }
  expect$1(TokenType$1.bracketL);
  tsParseMappedTypeParameter();
  if (eatContextual$1(ContextualKeyword$1._as)) {
    tsParseType();
  }
  expect$1(TokenType$1.bracketR);
  if (match$1(TokenType$1.plus) || match$1(TokenType$1.minus)) {
    next$1();
    expect$1(TokenType$1.question);
  } else {
    eat$1(TokenType$1.question);
  }
  tsTryParseType();
  semicolon$2();
  expect$1(TokenType$1.braceR);
}

function tsParseTupleType() {
  expect$1(TokenType$1.bracketL);
  while (!eat$1(TokenType$1.bracketR) && !state$1.error) {
    // Do not validate presence of either none or only labeled elements
    tsParseTupleElementType();
    eat$1(TokenType$1.comma);
  }
}

function tsParseTupleElementType() {
  // parses `...TsType[]`
  if (eat$1(TokenType$1.ellipsis)) {
    tsParseType();
  } else {
    // parses `TsType?`
    tsParseType();
    eat$1(TokenType$1.question);
  }

  // The type we parsed above was actually a label
  if (eat$1(TokenType$1.colon)) {
    // Labeled tuple types must affix the label with `...` or `?`, so no need to handle those here
    tsParseType();
  }
}

function tsParseParenthesizedType() {
  expect$1(TokenType$1.parenL);
  tsParseType();
  expect$1(TokenType$1.parenR);
}

function tsParseTemplateLiteralType() {
  // Finish `, read quasi
  nextTemplateToken$1();
  // Finish quasi, read ${
  nextTemplateToken$1();
  while (!match$1(TokenType$1.backQuote) && !state$1.error) {
    expect$1(TokenType$1.dollarBraceL);
    tsParseType();
    // Finish }, read quasi
    nextTemplateToken$1();
    // Finish quasi, read either ${ or `
    nextTemplateToken$1();
  }
  next$1();
}

var FunctionType; (function (FunctionType) {
  const TSFunctionType = 0; FunctionType[FunctionType["TSFunctionType"] = TSFunctionType] = "TSFunctionType";
  const TSConstructorType = TSFunctionType + 1; FunctionType[FunctionType["TSConstructorType"] = TSConstructorType] = "TSConstructorType";
  const TSAbstractConstructorType = TSConstructorType + 1; FunctionType[FunctionType["TSAbstractConstructorType"] = TSAbstractConstructorType] = "TSAbstractConstructorType";
})(FunctionType || (FunctionType = {}));

function tsParseFunctionOrConstructorType(type) {
  if (type === FunctionType.TSAbstractConstructorType) {
    expectContextual$1(ContextualKeyword$1._abstract);
  }
  if (type === FunctionType.TSConstructorType || type === FunctionType.TSAbstractConstructorType) {
    expect$1(TokenType$1._new);
  }
  const oldInDisallowConditionalTypesContext = state$1.inDisallowConditionalTypesContext;
  state$1.inDisallowConditionalTypesContext = false;
  tsFillSignature(TokenType$1.arrow);
  state$1.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
}

function tsParseNonArrayType() {
  switch (state$1.type) {
    case TokenType$1.name:
      tsParseTypeReference();
      return;
    case TokenType$1._void:
    case TokenType$1._null:
      next$1();
      return;
    case TokenType$1.string:
    case TokenType$1.num:
    case TokenType$1.bigint:
    case TokenType$1.decimal:
    case TokenType$1._true:
    case TokenType$1._false:
      parseLiteral();
      return;
    case TokenType$1.minus:
      next$1();
      parseLiteral();
      return;
    case TokenType$1._this: {
      tsParseThisTypeNode();
      if (isContextual$1(ContextualKeyword$1._is) && !hasPrecedingLineBreak$1()) {
        tsParseThisTypePredicate();
      }
      return;
    }
    case TokenType$1._typeof:
      tsParseTypeQuery();
      return;
    case TokenType$1._import:
      tsParseImportType();
      return;
    case TokenType$1.braceL:
      if (tsLookaheadIsStartOfMappedType()) {
        tsParseMappedType();
      } else {
        tsParseTypeLiteral();
      }
      return;
    case TokenType$1.bracketL:
      tsParseTupleType();
      return;
    case TokenType$1.parenL:
      tsParseParenthesizedType();
      return;
    case TokenType$1.backQuote:
      tsParseTemplateLiteralType();
      return;
    default:
      if (state$1.type & TokenType$1.IS_KEYWORD) {
        next$1();
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.name;
        return;
      }
      break;
  }

  unexpected$1();
}

function tsParseArrayTypeOrHigher() {
  tsParseNonArrayType();
  while (!hasPrecedingLineBreak$1() && eat$1(TokenType$1.bracketL)) {
    if (!eat$1(TokenType$1.bracketR)) {
      // If we hit ] immediately, this is an array type, otherwise it's an indexed access type.
      tsParseType();
      expect$1(TokenType$1.bracketR);
    }
  }
}

function tsParseInferType() {
  expectContextual$1(ContextualKeyword$1._infer);
  parseIdentifier();
  if (match$1(TokenType$1._extends)) {
    // Infer type constraints introduce an ambiguity about whether the "extends"
    // is a constraint for this infer type or is another conditional type.
    const snapshot = state$1.snapshot();
    expect$1(TokenType$1._extends);
    const oldInDisallowConditionalTypesContext = state$1.inDisallowConditionalTypesContext;
    state$1.inDisallowConditionalTypesContext = true;
    tsParseType();
    state$1.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
    if (state$1.error || (!state$1.inDisallowConditionalTypesContext && match$1(TokenType$1.question))) {
      state$1.restoreFromSnapshot(snapshot);
    }
  }
}

function tsParseTypeOperatorOrHigher() {
  if (
    isContextual$1(ContextualKeyword$1._keyof) ||
    isContextual$1(ContextualKeyword$1._unique) ||
    isContextual$1(ContextualKeyword$1._readonly)
  ) {
    next$1();
    tsParseTypeOperatorOrHigher();
  } else if (isContextual$1(ContextualKeyword$1._infer)) {
    tsParseInferType();
  } else {
    const oldInDisallowConditionalTypesContext = state$1.inDisallowConditionalTypesContext;
    state$1.inDisallowConditionalTypesContext = false;
    tsParseArrayTypeOrHigher();
    state$1.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
  }
}

function tsParseIntersectionTypeOrHigher() {
  eat$1(TokenType$1.bitwiseAND);
  tsParseTypeOperatorOrHigher();
  if (match$1(TokenType$1.bitwiseAND)) {
    while (eat$1(TokenType$1.bitwiseAND)) {
      tsParseTypeOperatorOrHigher();
    }
  }
}

function tsParseUnionTypeOrHigher() {
  eat$1(TokenType$1.bitwiseOR);
  tsParseIntersectionTypeOrHigher();
  if (match$1(TokenType$1.bitwiseOR)) {
    while (eat$1(TokenType$1.bitwiseOR)) {
      tsParseIntersectionTypeOrHigher();
    }
  }
}

function tsIsStartOfFunctionType() {
  if (match$1(TokenType$1.lessThan)) {
    return true;
  }
  return match$1(TokenType$1.parenL) && tsLookaheadIsUnambiguouslyStartOfFunctionType();
}

function tsSkipParameterStart() {
  if (match$1(TokenType$1.name) || match$1(TokenType$1._this)) {
    next$1();
    return true;
  }
  // If this is a possible array/object destructure, walk to the matching bracket/brace.
  // The next token after will tell us definitively whether this is a function param.
  if (match$1(TokenType$1.braceL) || match$1(TokenType$1.bracketL)) {
    let depth = 1;
    next$1();
    while (depth > 0 && !state$1.error) {
      if (match$1(TokenType$1.braceL) || match$1(TokenType$1.bracketL)) {
        depth++;
      } else if (match$1(TokenType$1.braceR) || match$1(TokenType$1.bracketR)) {
        depth--;
      }
      next$1();
    }
    return true;
  }
  return false;
}

function tsLookaheadIsUnambiguouslyStartOfFunctionType() {
  const snapshot = state$1.snapshot();
  const isUnambiguouslyStartOfFunctionType = tsIsUnambiguouslyStartOfFunctionType();
  state$1.restoreFromSnapshot(snapshot);
  return isUnambiguouslyStartOfFunctionType;
}

function tsIsUnambiguouslyStartOfFunctionType() {
  next$1();
  if (match$1(TokenType$1.parenR) || match$1(TokenType$1.ellipsis)) {
    // ( )
    // ( ...
    return true;
  }
  if (tsSkipParameterStart()) {
    if (match$1(TokenType$1.colon) || match$1(TokenType$1.comma) || match$1(TokenType$1.question) || match$1(TokenType$1.eq)) {
      // ( xxx :
      // ( xxx ,
      // ( xxx ?
      // ( xxx =
      return true;
    }
    if (match$1(TokenType$1.parenR)) {
      next$1();
      if (match$1(TokenType$1.arrow)) {
        // ( xxx ) =>
        return true;
      }
    }
  }
  return false;
}

function tsParseTypeOrTypePredicateAnnotation(returnToken) {
  const oldIsType = pushTypeContext$1(0);
  expect$1(returnToken);
  const finishedReturn = tsParseTypePredicateOrAssertsPrefix();
  if (!finishedReturn) {
    tsParseType();
  }
  popTypeContext$1(oldIsType);
}

function tsTryParseTypeOrTypePredicateAnnotation() {
  if (match$1(TokenType$1.colon)) {
    tsParseTypeOrTypePredicateAnnotation(TokenType$1.colon);
  }
}

function tsTryParseTypeAnnotation() {
  if (match$1(TokenType$1.colon)) {
    tsParseTypeAnnotation();
  }
}

function tsTryParseType() {
  if (eat$1(TokenType$1.colon)) {
    tsParseType();
  }
}

/**
 * Detect a few special return syntax cases: `x is T`, `asserts x`, `asserts x is T`,
 * `asserts this is T`.
 *
 * Returns true if we parsed the return type, false if there's still a type to be parsed.
 */
function tsParseTypePredicateOrAssertsPrefix() {
  const snapshot = state$1.snapshot();
  if (isContextual$1(ContextualKeyword$1._asserts)) {
    // Normally this is `asserts x is T`, but at this point, it might be `asserts is T` (a user-
    // defined type guard on the `asserts` variable) or just a type called `asserts`.
    next$1();
    if (eatContextual$1(ContextualKeyword$1._is)) {
      // If we see `asserts is`, then this must be of the form `asserts is T`, since
      // `asserts is is T` isn't valid.
      tsParseType();
      return true;
    } else if (tsIsIdentifier() || match$1(TokenType$1._this)) {
      next$1();
      if (eatContextual$1(ContextualKeyword$1._is)) {
        // If we see `is`, then this is `asserts x is T`. Otherwise, it's `asserts x`.
        tsParseType();
      }
      return true;
    } else {
      // Regular type, so bail out and start type parsing from scratch.
      state$1.restoreFromSnapshot(snapshot);
      return false;
    }
  } else if (tsIsIdentifier() || match$1(TokenType$1._this)) {
    // This is a regular identifier, which may or may not have "is" after it.
    next$1();
    if (isContextual$1(ContextualKeyword$1._is) && !hasPrecedingLineBreak$1()) {
      next$1();
      tsParseType();
      return true;
    } else {
      // Regular type, so bail out and start type parsing from scratch.
      state$1.restoreFromSnapshot(snapshot);
      return false;
    }
  }
  return false;
}

function tsParseTypeAnnotation() {
  const oldIsType = pushTypeContext$1(0);
  expect$1(TokenType$1.colon);
  tsParseType();
  popTypeContext$1(oldIsType);
}

function tsParseType() {
  tsParseNonConditionalType();
  if (state$1.inDisallowConditionalTypesContext || hasPrecedingLineBreak$1() || !eat$1(TokenType$1._extends)) {
    return;
  }
  // extends type
  const oldInDisallowConditionalTypesContext = state$1.inDisallowConditionalTypesContext;
  state$1.inDisallowConditionalTypesContext = true;
  tsParseNonConditionalType();
  state$1.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;

  expect$1(TokenType$1.question);
  // true type
  tsParseType();
  expect$1(TokenType$1.colon);
  // false type
  tsParseType();
}

function isAbstractConstructorSignature() {
  return isContextual$1(ContextualKeyword$1._abstract) && lookaheadType$1() === TokenType$1._new;
}

function tsParseNonConditionalType() {
  if (tsIsStartOfFunctionType()) {
    tsParseFunctionOrConstructorType(FunctionType.TSFunctionType);
    return;
  }
  if (match$1(TokenType$1._new)) {
    // As in `new () => Date`
    tsParseFunctionOrConstructorType(FunctionType.TSConstructorType);
    return;
  } else if (isAbstractConstructorSignature()) {
    // As in `abstract new () => Date`
    tsParseFunctionOrConstructorType(FunctionType.TSAbstractConstructorType);
    return;
  }
  tsParseUnionTypeOrHigher();
}

function tsParseTypeAssertion() {
  const oldIsType = pushTypeContext$1(1);
  tsParseType();
  expect$1(TokenType$1.greaterThan);
  popTypeContext$1(oldIsType);
  parseMaybeUnary();
}

function tsTryParseJSXTypeArgument() {
  if (eat$1(TokenType$1.jsxTagStart)) {
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.typeParameterStart;
    const oldIsType = pushTypeContext$1(1);
    while (!match$1(TokenType$1.greaterThan) && !state$1.error) {
      tsParseType();
      eat$1(TokenType$1.comma);
    }
    // Process >, but the one after needs to be parsed JSX-style.
    nextJSXTagToken();
    popTypeContext$1(oldIsType);
  }
}

function tsParseHeritageClause() {
  while (!match$1(TokenType$1.braceL) && !state$1.error) {
    tsParseExpressionWithTypeArguments();
    eat$1(TokenType$1.comma);
  }
}

function tsParseExpressionWithTypeArguments() {
  // Note: TS uses parseLeftHandSideExpressionOrHigher,
  // then has grammar errors later if it's not an EntityName.
  tsParseEntityName();
  if (match$1(TokenType$1.lessThan)) {
    tsParseTypeArguments();
  }
}

function tsParseInterfaceDeclaration() {
  parseBindingIdentifier(false);
  tsTryParseTypeParameters();
  if (eat$1(TokenType$1._extends)) {
    tsParseHeritageClause();
  }
  tsParseObjectTypeMembers();
}

function tsParseTypeAliasDeclaration() {
  parseBindingIdentifier(false);
  tsTryParseTypeParameters();
  expect$1(TokenType$1.eq);
  tsParseType();
  semicolon$2();
}

function tsParseEnumMember() {
  // Computed property names are grammar errors in an enum, so accept just string literal or identifier.
  if (match$1(TokenType$1.string)) {
    parseLiteral();
  } else {
    parseIdentifier();
  }
  if (eat$1(TokenType$1.eq)) {
    const eqIndex = state$1.tokens.length - 1;
    parseMaybeAssign();
    state$1.tokens[eqIndex].rhsEndIndex = state$1.tokens.length;
  }
}

function tsParseEnumDeclaration() {
  parseBindingIdentifier(false);
  expect$1(TokenType$1.braceL);
  while (!eat$1(TokenType$1.braceR) && !state$1.error) {
    tsParseEnumMember();
    eat$1(TokenType$1.comma);
  }
}

function tsParseModuleBlock() {
  expect$1(TokenType$1.braceL);
  parseBlockBody(/* end */ TokenType$1.braceR);
}

function tsParseModuleOrNamespaceDeclaration() {
  parseBindingIdentifier(false);
  if (eat$1(TokenType$1.dot)) {
    tsParseModuleOrNamespaceDeclaration();
  } else {
    tsParseModuleBlock();
  }
}

function tsParseAmbientExternalModuleDeclaration() {
  if (isContextual$1(ContextualKeyword$1._global)) {
    parseIdentifier();
  } else if (match$1(TokenType$1.string)) {
    parseExprAtom();
  } else {
    unexpected$1();
  }

  if (match$1(TokenType$1.braceL)) {
    tsParseModuleBlock();
  } else {
    semicolon$2();
  }
}

function tsParseImportEqualsDeclaration() {
  parseImportedIdentifier();
  expect$1(TokenType$1.eq);
  tsParseModuleReference();
  semicolon$2();
}

function tsIsExternalModuleReference() {
  return isContextual$1(ContextualKeyword$1._require) && lookaheadType$1() === TokenType$1.parenL;
}

function tsParseModuleReference() {
  if (tsIsExternalModuleReference()) {
    tsParseExternalModuleReference();
  } else {
    tsParseEntityName();
  }
}

function tsParseExternalModuleReference() {
  expectContextual$1(ContextualKeyword$1._require);
  expect$1(TokenType$1.parenL);
  if (!match$1(TokenType$1.string)) {
    unexpected$1();
  }
  parseLiteral();
  expect$1(TokenType$1.parenR);
}

// Utilities

// Returns true if a statement matched.
function tsTryParseDeclare() {
  if (isLineTerminator$1()) {
    return false;
  }
  switch (state$1.type) {
    case TokenType$1._function: {
      const oldIsType = pushTypeContext$1(1);
      next$1();
      // We don't need to precisely get the function start here, since it's only used to mark
      // the function as a type if it's bodiless, and it's already a type here.
      const functionStart = state$1.start;
      parseFunction(functionStart, /* isStatement */ true);
      popTypeContext$1(oldIsType);
      return true;
    }
    case TokenType$1._class: {
      const oldIsType = pushTypeContext$1(1);
      parseClass(/* isStatement */ true, /* optionalId */ false);
      popTypeContext$1(oldIsType);
      return true;
    }
    case TokenType$1._const: {
      if (match$1(TokenType$1._const) && isLookaheadContextual$1(ContextualKeyword$1._enum)) {
        const oldIsType = pushTypeContext$1(1);
        // `const enum = 0;` not allowed because "enum" is a strict mode reserved word.
        expect$1(TokenType$1._const);
        expectContextual$1(ContextualKeyword$1._enum);
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._enum;
        tsParseEnumDeclaration();
        popTypeContext$1(oldIsType);
        return true;
      }
    }
    // falls through
    case TokenType$1._var:
    case TokenType$1._let: {
      const oldIsType = pushTypeContext$1(1);
      parseVarStatement(state$1.type !== TokenType$1._var);
      popTypeContext$1(oldIsType);
      return true;
    }
    case TokenType$1.name: {
      const oldIsType = pushTypeContext$1(1);
      const contextualKeyword = state$1.contextualKeyword;
      let matched = false;
      if (contextualKeyword === ContextualKeyword$1._global) {
        tsParseAmbientExternalModuleDeclaration();
        matched = true;
      } else {
        matched = tsParseDeclaration(contextualKeyword, /* isBeforeToken */ true);
      }
      popTypeContext$1(oldIsType);
      return matched;
    }
    default:
      return false;
  }
}

// Note: this won't be called unless the keyword is allowed in `shouldParseExportDeclaration`.
// Returns true if it matched a declaration.
function tsTryParseExportDeclaration() {
  return tsParseDeclaration(state$1.contextualKeyword, /* isBeforeToken */ true);
}

// Returns true if it matched a statement.
function tsParseExpressionStatement(contextualKeyword) {
  switch (contextualKeyword) {
    case ContextualKeyword$1._declare: {
      const declareTokenIndex = state$1.tokens.length - 1;
      const matched = tsTryParseDeclare();
      if (matched) {
        state$1.tokens[declareTokenIndex].type = TokenType$1._declare;
        return true;
      }
      break;
    }
    case ContextualKeyword$1._global:
      // `global { }` (with no `declare`) may appear inside an ambient module declaration.
      // Would like to use tsParseAmbientExternalModuleDeclaration here, but already ran past "global".
      if (match$1(TokenType$1.braceL)) {
        tsParseModuleBlock();
        return true;
      }
      break;

    default:
      return tsParseDeclaration(contextualKeyword, /* isBeforeToken */ false);
  }
  return false;
}

/**
 * Common code for parsing a declaration.
 *
 * isBeforeToken indicates that the current parser state is at the contextual
 * keyword (and that it is not yet emitted) rather than reading the token after
 * it. When isBeforeToken is true, we may be preceded by an `export` token and
 * should include that token in a type context we create, e.g. to handle
 * `export interface` or `export type`. (This is a bit of a hack and should be
 * cleaned up at some point.)
 *
 * Returns true if it matched a declaration.
 */
function tsParseDeclaration(contextualKeyword, isBeforeToken) {
  switch (contextualKeyword) {
    case ContextualKeyword$1._abstract:
      if (tsCheckLineTerminator(isBeforeToken) && match$1(TokenType$1._class)) {
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._abstract;
        parseClass(/* isStatement */ true, /* optionalId */ false);
        return true;
      }
      break;

    case ContextualKeyword$1._enum:
      if (tsCheckLineTerminator(isBeforeToken) && match$1(TokenType$1.name)) {
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._enum;
        tsParseEnumDeclaration();
        return true;
      }
      break;

    case ContextualKeyword$1._interface:
      if (tsCheckLineTerminator(isBeforeToken) && match$1(TokenType$1.name)) {
        // `next` is true in "export" and "declare" contexts, so we want to remove that token
        // as well.
        const oldIsType = pushTypeContext$1(isBeforeToken ? 2 : 1);
        tsParseInterfaceDeclaration();
        popTypeContext$1(oldIsType);
        return true;
      }
      break;

    case ContextualKeyword$1._module:
      if (tsCheckLineTerminator(isBeforeToken)) {
        if (match$1(TokenType$1.string)) {
          const oldIsType = pushTypeContext$1(isBeforeToken ? 2 : 1);
          tsParseAmbientExternalModuleDeclaration();
          popTypeContext$1(oldIsType);
          return true;
        } else if (match$1(TokenType$1.name)) {
          const oldIsType = pushTypeContext$1(isBeforeToken ? 2 : 1);
          tsParseModuleOrNamespaceDeclaration();
          popTypeContext$1(oldIsType);
          return true;
        }
      }
      break;

    case ContextualKeyword$1._namespace:
      if (tsCheckLineTerminator(isBeforeToken) && match$1(TokenType$1.name)) {
        const oldIsType = pushTypeContext$1(isBeforeToken ? 2 : 1);
        tsParseModuleOrNamespaceDeclaration();
        popTypeContext$1(oldIsType);
        return true;
      }
      break;

    case ContextualKeyword$1._type:
      if (tsCheckLineTerminator(isBeforeToken) && match$1(TokenType$1.name)) {
        const oldIsType = pushTypeContext$1(isBeforeToken ? 2 : 1);
        tsParseTypeAliasDeclaration();
        popTypeContext$1(oldIsType);
        return true;
      }
      break;
  }
  return false;
}

function tsCheckLineTerminator(isBeforeToken) {
  if (isBeforeToken) {
    // Babel checks hasFollowingLineBreak here and returns false, but this
    // doesn't actually come up, e.g. `export interface` can never be on its own
    // line in valid code.
    next$1();
    return true;
  } else {
    return !isLineTerminator$1();
  }
}

// Returns true if there was a generic async arrow function.
function tsTryParseGenericAsyncArrowFunction() {
  const snapshot = state$1.snapshot();

  tsParseTypeParameters();
  parseFunctionParams();
  tsTryParseTypeOrTypePredicateAnnotation();
  expect$1(TokenType$1.arrow);

  if (state$1.error) {
    state$1.restoreFromSnapshot(snapshot);
    return false;
  }

  parseFunctionBody(true);
  return true;
}

/**
 * If necessary, hack the tokenizer state so that this bitshift was actually a
 * less-than token, then keep parsing. This should only be used in situations
 * where we restore from snapshot on error (which reverts this change) or
 * where bitshift would be illegal anyway (e.g. in a class "extends" clause).
 *
 * This hack is useful to handle situations like foo<<T>() => void>() where
 * there can legitimately be two open-angle-brackets in a row in TS.
 */
function tsParseTypeArgumentsWithPossibleBitshift() {
  if (state$1.type === TokenType$1.bitShiftL) {
    state$1.pos -= 1;
    finishToken$1(TokenType$1.lessThan);
  }
  tsParseTypeArguments();
}

function tsParseTypeArguments() {
  const oldIsType = pushTypeContext$1(0);
  expect$1(TokenType$1.lessThan);
  while (!match$1(TokenType$1.greaterThan) && !state$1.error) {
    tsParseType();
    eat$1(TokenType$1.comma);
  }
  if (!oldIsType) {
    // If the type arguments are present in an expression context, e.g.
    // f<number>(), then the > sign should be tokenized as a non-type token.
    // In particular, f(a < b, c >= d) should parse the >= as a single token,
    // resulting in a syntax error and fallback to the non-type-args
    // interpretation. In the success case, even though the > is tokenized as a
    // non-type token, it still must be marked as a type token so that it is
    // erased.
    popTypeContext$1(oldIsType);
    rescan_gt$1();
    expect$1(TokenType$1.greaterThan);
    state$1.tokens[state$1.tokens.length - 1].isType = true;
  } else {
    expect$1(TokenType$1.greaterThan);
    popTypeContext$1(oldIsType);
  }
}

function tsIsDeclarationStart() {
  if (match$1(TokenType$1.name)) {
    switch (state$1.contextualKeyword) {
      case ContextualKeyword$1._abstract:
      case ContextualKeyword$1._declare:
      case ContextualKeyword$1._enum:
      case ContextualKeyword$1._interface:
      case ContextualKeyword$1._module:
      case ContextualKeyword$1._namespace:
      case ContextualKeyword$1._type:
        return true;
    }
  }

  return false;
}

// ======================================================
// OVERRIDES
// ======================================================

function tsParseFunctionBodyAndFinish(functionStart, funcContextId) {
  // For arrow functions, `parseArrow` handles the return type itself.
  if (match$1(TokenType$1.colon)) {
    tsParseTypeOrTypePredicateAnnotation(TokenType$1.colon);
  }

  // The original code checked the node type to make sure this function type allows a missing
  // body, but we skip that to avoid sending around the node type. We instead just use the
  // allowExpressionBody boolean to make sure it's not an arrow function.
  if (!match$1(TokenType$1.braceL) && isLineTerminator$1()) {
    // Retroactively mark the function declaration as a type.
    let i = state$1.tokens.length - 1;
    while (
      i >= 0 &&
      (state$1.tokens[i].start >= functionStart ||
        state$1.tokens[i].type === TokenType$1._default ||
        state$1.tokens[i].type === TokenType$1._export)
    ) {
      state$1.tokens[i].isType = true;
      i--;
    }
    return;
  }

  parseFunctionBody(false, funcContextId);
}

function tsParseSubscript(
  startTokenIndex,
  noCalls,
  stopState,
) {
  if (!hasPrecedingLineBreak$1() && eat$1(TokenType$1.bang)) {
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.nonNullAssertion;
    return;
  }

  if (match$1(TokenType$1.lessThan) || match$1(TokenType$1.bitShiftL)) {
    // There are number of things we are going to "maybe" parse, like type arguments on
    // tagged template expressions. If any of them fail, walk it back and continue.
    const snapshot = state$1.snapshot();

    if (!noCalls && atPossibleAsync()) {
      // Almost certainly this is a generic async function `async <T>() => ...
      // But it might be a call with a type argument `async<T>();`
      const asyncArrowFn = tsTryParseGenericAsyncArrowFunction();
      if (asyncArrowFn) {
        return;
      }
    }
    tsParseTypeArgumentsWithPossibleBitshift();
    if (!noCalls && eat$1(TokenType$1.parenL)) {
      // With f<T>(), the subscriptStartIndex marker is on the ( token.
      state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      parseCallExpressionArguments();
    } else if (match$1(TokenType$1.backQuote)) {
      // Tagged template with a type argument.
      parseTemplate();
    } else if (
      // The remaining possible case is an instantiation expression, e.g.
      // Array<number> . Check for a few cases that would disqualify it and
      // cause us to bail out.
      // a<b>>c is not (a<b>)>c, but a<(b>>c)
      state$1.type === TokenType$1.greaterThan ||
      // a<b>c is (a<b)>c
      (state$1.type !== TokenType$1.parenL &&
        Boolean(state$1.type & TokenType$1.IS_EXPRESSION_START) &&
        !hasPrecedingLineBreak$1())
    ) {
      // Bail out. We have something like a<b>c, which is not an expression with
      // type arguments but an (a < b) > c comparison.
      unexpected$1();
    }

    if (state$1.error) {
      state$1.restoreFromSnapshot(snapshot);
    } else {
      return;
    }
  } else if (!noCalls && match$1(TokenType$1.questionDot) && lookaheadType$1() === TokenType$1.lessThan) {
    // If we see f?.<, then this must be an optional call with a type argument.
    next$1();
    state$1.tokens[startTokenIndex].isOptionalChainStart = true;
    // With f?.<T>(), the subscriptStartIndex marker is on the ?. token.
    state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;

    tsParseTypeArguments();
    expect$1(TokenType$1.parenL);
    parseCallExpressionArguments();
  }
  baseParseSubscript(startTokenIndex, noCalls, stopState);
}

function tsTryParseExport() {
  if (eat$1(TokenType$1._import)) {
    // One of these cases:
    // export import A = B;
    // export import type A = require("A");
    if (isContextual$1(ContextualKeyword$1._type) && lookaheadType$1() !== TokenType$1.eq) {
      // Eat a `type` token, unless it's actually an identifier name.
      expectContextual$1(ContextualKeyword$1._type);
    }
    tsParseImportEqualsDeclaration();
    return true;
  } else if (eat$1(TokenType$1.eq)) {
    // `export = x;`
    parseExpression();
    semicolon$2();
    return true;
  } else if (eatContextual$1(ContextualKeyword$1._as)) {
    // `export as namespace A;`
    // See `parseNamespaceExportDeclaration` in TypeScript's own parser
    expectContextual$1(ContextualKeyword$1._namespace);
    parseIdentifier();
    semicolon$2();
    return true;
  } else {
    if (isContextual$1(ContextualKeyword$1._type)) {
      const nextType = lookaheadType$1();
      // export type {foo} from 'a';
      // export type * from 'a';'
      // export type * as ns from 'a';'
      if (nextType === TokenType$1.braceL || nextType === TokenType$1.star) {
        next$1();
      }
    }
    return false;
  }
}

/**
 * Parse a TS import specifier, which may be prefixed with "type" and may be of
 * the form `foo as bar`.
 *
 * The number of identifier-like tokens we see happens to be enough to uniquely
 * identify the form, so simply count the number of identifiers rather than
 * matching the words `type` or `as`. This is particularly important because
 * `type` and `as` could each actually be plain identifiers rather than
 * keywords.
 */
function tsParseImportSpecifier() {
  parseIdentifier();
  if (match$1(TokenType$1.comma) || match$1(TokenType$1.braceR)) {
    // import {foo}
    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ImportDeclaration;
    return;
  }
  parseIdentifier();
  if (match$1(TokenType$1.comma) || match$1(TokenType$1.braceR)) {
    // import {type foo}
    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ImportDeclaration;
    state$1.tokens[state$1.tokens.length - 2].isType = true;
    state$1.tokens[state$1.tokens.length - 1].isType = true;
    return;
  }
  parseIdentifier();
  if (match$1(TokenType$1.comma) || match$1(TokenType$1.braceR)) {
    // import {foo as bar}
    state$1.tokens[state$1.tokens.length - 3].identifierRole = IdentifierRole$1.ImportAccess;
    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ImportDeclaration;
    return;
  }
  parseIdentifier();
  // import {type foo as bar}
  state$1.tokens[state$1.tokens.length - 3].identifierRole = IdentifierRole$1.ImportAccess;
  state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ImportDeclaration;
  state$1.tokens[state$1.tokens.length - 4].isType = true;
  state$1.tokens[state$1.tokens.length - 3].isType = true;
  state$1.tokens[state$1.tokens.length - 2].isType = true;
  state$1.tokens[state$1.tokens.length - 1].isType = true;
}

/**
 * Just like named import specifiers, export specifiers can have from 1 to 4
 * tokens, inclusive, and the number of tokens determines the role of each token.
 */
function tsParseExportSpecifier() {
  parseIdentifier();
  if (match$1(TokenType$1.comma) || match$1(TokenType$1.braceR)) {
    // export {foo}
    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ExportAccess;
    return;
  }
  parseIdentifier();
  if (match$1(TokenType$1.comma) || match$1(TokenType$1.braceR)) {
    // export {type foo}
    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ExportAccess;
    state$1.tokens[state$1.tokens.length - 2].isType = true;
    state$1.tokens[state$1.tokens.length - 1].isType = true;
    return;
  }
  parseIdentifier();
  if (match$1(TokenType$1.comma) || match$1(TokenType$1.braceR)) {
    // export {foo as bar}
    state$1.tokens[state$1.tokens.length - 3].identifierRole = IdentifierRole$1.ExportAccess;
    return;
  }
  parseIdentifier();
  // export {type foo as bar}
  state$1.tokens[state$1.tokens.length - 3].identifierRole = IdentifierRole$1.ExportAccess;
  state$1.tokens[state$1.tokens.length - 4].isType = true;
  state$1.tokens[state$1.tokens.length - 3].isType = true;
  state$1.tokens[state$1.tokens.length - 2].isType = true;
  state$1.tokens[state$1.tokens.length - 1].isType = true;
}

function tsTryParseExportDefaultExpression() {
  if (isContextual$1(ContextualKeyword$1._abstract) && lookaheadType$1() === TokenType$1._class) {
    state$1.type = TokenType$1._abstract;
    next$1(); // Skip "abstract"
    parseClass(true, true);
    return true;
  }
  if (isContextual$1(ContextualKeyword$1._interface)) {
    // Make sure "export default" are considered type tokens so the whole thing is removed.
    const oldIsType = pushTypeContext$1(2);
    tsParseDeclaration(ContextualKeyword$1._interface, true);
    popTypeContext$1(oldIsType);
    return true;
  }
  return false;
}

function tsTryParseStatementContent() {
  if (state$1.type === TokenType$1._const) {
    const ahead = lookaheadTypeAndKeyword$1();
    if (ahead.type === TokenType$1.name && ahead.contextualKeyword === ContextualKeyword$1._enum) {
      expect$1(TokenType$1._const);
      expectContextual$1(ContextualKeyword$1._enum);
      state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._enum;
      tsParseEnumDeclaration();
      return true;
    }
  }
  return false;
}

function tsTryParseClassMemberWithIsStatic(isStatic) {
  const memberStartIndexAfterStatic = state$1.tokens.length;
  tsParseModifiers([
    ContextualKeyword$1._abstract,
    ContextualKeyword$1._readonly,
    ContextualKeyword$1._declare,
    ContextualKeyword$1._static,
    ContextualKeyword$1._override,
  ]);

  const modifiersEndIndex = state$1.tokens.length;
  const found = tsTryParseIndexSignature();
  if (found) {
    // Index signatures are type declarations, so set the modifier tokens as
    // type tokens. Most tokens could be assumed to be type tokens, but `static`
    // is ambiguous unless we set it explicitly here.
    const memberStartIndex = isStatic
      ? memberStartIndexAfterStatic - 1
      : memberStartIndexAfterStatic;
    for (let i = memberStartIndex; i < modifiersEndIndex; i++) {
      state$1.tokens[i].isType = true;
    }
    return true;
  }
  return false;
}

// Note: The reason we do this in `parseIdentifierStatement` and not `parseStatement`
// is that e.g. `type()` is valid JS, so we must try parsing that first.
// If it's really a type, we will parse `type` as the statement, and can correct it here
// by parsing the rest.
function tsParseIdentifierStatement(contextualKeyword) {
  const matched = tsParseExpressionStatement(contextualKeyword);
  if (!matched) {
    semicolon$2();
  }
}

function tsParseExportDeclaration() {
  // "export declare" is equivalent to just "export".
  const isDeclare = eatContextual$1(ContextualKeyword$1._declare);
  if (isDeclare) {
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._declare;
  }

  let matchedDeclaration = false;
  if (match$1(TokenType$1.name)) {
    if (isDeclare) {
      const oldIsType = pushTypeContext$1(2);
      matchedDeclaration = tsTryParseExportDeclaration();
      popTypeContext$1(oldIsType);
    } else {
      matchedDeclaration = tsTryParseExportDeclaration();
    }
  }
  if (!matchedDeclaration) {
    if (isDeclare) {
      const oldIsType = pushTypeContext$1(2);
      parseStatement(true);
      popTypeContext$1(oldIsType);
    } else {
      parseStatement(true);
    }
  }
}

function tsAfterParseClassSuper(hasSuper) {
  if (hasSuper && (match$1(TokenType$1.lessThan) || match$1(TokenType$1.bitShiftL))) {
    tsParseTypeArgumentsWithPossibleBitshift();
  }
  if (eatContextual$1(ContextualKeyword$1._implements)) {
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._implements;
    const oldIsType = pushTypeContext$1(1);
    tsParseHeritageClause();
    popTypeContext$1(oldIsType);
  }
}

function tsStartParseObjPropValue() {
  tsTryParseTypeParameters();
}

function tsStartParseFunctionParams() {
  tsTryParseTypeParameters();
}

// `let x: number;`
function tsAfterParseVarHead() {
  const oldIsType = pushTypeContext$1(0);
  if (!hasPrecedingLineBreak$1()) {
    eat$1(TokenType$1.bang);
  }
  tsTryParseTypeAnnotation();
  popTypeContext$1(oldIsType);
}

// parse the return type of an async arrow function - let foo = (async (): number => {});
function tsStartParseAsyncArrowFromCallExpression() {
  if (match$1(TokenType$1.colon)) {
    tsParseTypeAnnotation();
  }
}

// Returns true if the expression was an arrow function.
function tsParseMaybeAssign(noIn, isWithinParens) {
  // Note: When the JSX plugin is on, type assertions (`<T> x`) aren't valid syntax.
  if (isJSXEnabled) {
    return tsParseMaybeAssignWithJSX(noIn, isWithinParens);
  } else {
    return tsParseMaybeAssignWithoutJSX(noIn, isWithinParens);
  }
}

function tsParseMaybeAssignWithJSX(noIn, isWithinParens) {
  if (!match$1(TokenType$1.lessThan)) {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }

  // Prefer to parse JSX if possible. But may be an arrow fn.
  const snapshot = state$1.snapshot();
  let wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (state$1.error) {
    state$1.restoreFromSnapshot(snapshot);
  } else {
    return wasArrow;
  }

  // Otherwise, try as type-parameterized arrow function.
  state$1.type = TokenType$1.typeParameterStart;
  // This is similar to TypeScript's `tryParseParenthesizedArrowFunctionExpression`.
  tsParseTypeParameters();
  wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (!wasArrow) {
    unexpected$1();
  }

  return wasArrow;
}

function tsParseMaybeAssignWithoutJSX(noIn, isWithinParens) {
  if (!match$1(TokenType$1.lessThan)) {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }

  const snapshot = state$1.snapshot();
  // This is similar to TypeScript's `tryParseParenthesizedArrowFunctionExpression`.
  tsParseTypeParameters();
  const wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
  if (!wasArrow) {
    unexpected$1();
  }
  if (state$1.error) {
    state$1.restoreFromSnapshot(snapshot);
  } else {
    return wasArrow;
  }

  // Try parsing a type cast instead of an arrow function.
  // This will start with a type assertion (via parseMaybeUnary).
  // But don't directly call `tsParseTypeAssertion` because we want to handle any binary after it.
  return baseParseMaybeAssign(noIn, isWithinParens);
}

function tsParseArrow() {
  if (match$1(TokenType$1.colon)) {
    // This is different from how the TS parser does it.
    // TS uses lookahead. Babylon parses it as a parenthesized expression and converts.
    const snapshot = state$1.snapshot();

    tsParseTypeOrTypePredicateAnnotation(TokenType$1.colon);
    if (canInsertSemicolon$1()) unexpected$1();
    if (!match$1(TokenType$1.arrow)) unexpected$1();

    if (state$1.error) {
      state$1.restoreFromSnapshot(snapshot);
    }
  }
  return eat$1(TokenType$1.arrow);
}

// Allow type annotations inside of a parameter list.
function tsParseAssignableListItemTypes() {
  const oldIsType = pushTypeContext$1(0);
  eat$1(TokenType$1.question);
  tsTryParseTypeAnnotation();
  popTypeContext$1(oldIsType);
}

function tsParseMaybeDecoratorArguments() {
  if (match$1(TokenType$1.lessThan) || match$1(TokenType$1.bitShiftL)) {
    tsParseTypeArgumentsWithPossibleBitshift();
  }
  baseParseMaybeDecoratorArguments();
}

/**
 * Read token with JSX contents.
 *
 * In addition to detecting jsxTagStart and also regular tokens that might be
 * part of an expression, this code detects the start and end of text ranges
 * within JSX children. In order to properly count the number of children, we
 * distinguish jsxText from jsxEmptyText, which is a text range that simplifies
 * to the empty string after JSX whitespace trimming.
 *
 * It turns out that a JSX text range will simplify to the empty string if and
 * only if both of these conditions hold:
 * - The range consists entirely of whitespace characters (only counting space,
 *   tab, \r, and \n).
 * - The range has at least one newline.
 * This can be proven by analyzing any implementation of whitespace trimming,
 * e.g. formatJSXTextLiteral in Sucrase or cleanJSXElementLiteralChild in Babel.
 */
function jsxReadToken() {
  let sawNewline = false;
  let sawNonWhitespace = false;
  while (true) {
    if (state$1.pos >= input.length) {
      unexpected$1("Unterminated JSX contents");
      return;
    }

    const ch = input.charCodeAt(state$1.pos);
    if (ch === charCodes$1.lessThan || ch === charCodes$1.leftCurlyBrace) {
      if (state$1.pos === state$1.start) {
        if (ch === charCodes$1.lessThan) {
          state$1.pos++;
          finishToken$1(TokenType$1.jsxTagStart);
          return;
        }
        getTokenFromCode$1(ch);
        return;
      }
      if (sawNewline && !sawNonWhitespace) {
        finishToken$1(TokenType$1.jsxEmptyText);
      } else {
        finishToken$1(TokenType$1.jsxText);
      }
      return;
    }

    // This is part of JSX text.
    if (ch === charCodes$1.lineFeed) {
      sawNewline = true;
    } else if (ch !== charCodes$1.space && ch !== charCodes$1.carriageReturn && ch !== charCodes$1.tab) {
      sawNonWhitespace = true;
    }
    state$1.pos++;
  }
}

function jsxReadString(quote) {
  state$1.pos++;
  for (;;) {
    if (state$1.pos >= input.length) {
      unexpected$1("Unterminated string constant");
      return;
    }

    const ch = input.charCodeAt(state$1.pos);
    if (ch === quote) {
      state$1.pos++;
      break;
    }
    state$1.pos++;
  }
  finishToken$1(TokenType$1.string);
}

// Read a JSX identifier (valid tag or attribute name).
//
// Optimized version since JSX identifiers can't contain
// escape characters and so can be read as single slice.
// Also assumes that first character was already checked
// by isIdentifierStart in readToken.

function jsxReadWord() {
  let ch;
  do {
    if (state$1.pos > input.length) {
      unexpected$1("Unexpectedly reached the end of input.");
      return;
    }
    ch = input.charCodeAt(++state$1.pos);
  } while (IS_IDENTIFIER_CHAR[ch] || ch === charCodes$1.dash);
  finishToken$1(TokenType$1.jsxName);
}

// Parse next token as JSX identifier
function jsxParseIdentifier() {
  nextJSXTagToken();
}

// Parse namespaced identifier.
function jsxParseNamespacedName(identifierRole) {
  jsxParseIdentifier();
  if (!eat$1(TokenType$1.colon)) {
    // Plain identifier, so this is an access.
    state$1.tokens[state$1.tokens.length - 1].identifierRole = identifierRole;
    return;
  }
  // Process the second half of the namespaced name.
  jsxParseIdentifier();
}

// Parses element name in any form - namespaced, member
// or single identifier.
function jsxParseElementName() {
  const firstTokenIndex = state$1.tokens.length;
  jsxParseNamespacedName(IdentifierRole$1.Access);
  let hadDot = false;
  while (match$1(TokenType$1.dot)) {
    hadDot = true;
    nextJSXTagToken();
    jsxParseIdentifier();
  }
  // For tags like <div> with a lowercase letter and no dots, the name is
  // actually *not* an identifier access, since it's referring to a built-in
  // tag name. Remove the identifier role in this case so that it's not
  // accidentally transformed by the imports transform when preserving JSX.
  if (!hadDot) {
    const firstToken = state$1.tokens[firstTokenIndex];
    const firstChar = input.charCodeAt(firstToken.start);
    if (firstChar >= charCodes$1.lowercaseA && firstChar <= charCodes$1.lowercaseZ) {
      firstToken.identifierRole = null;
    }
  }
}

// Parses any type of JSX attribute value.
function jsxParseAttributeValue() {
  switch (state$1.type) {
    case TokenType$1.braceL:
      next$1();
      parseExpression();
      nextJSXTagToken();
      return;

    case TokenType$1.jsxTagStart:
      jsxParseElement();
      nextJSXTagToken();
      return;

    case TokenType$1.string:
      nextJSXTagToken();
      return;

    default:
      unexpected$1("JSX value should be either an expression or a quoted JSX text");
  }
}

// Parse JSX spread child, after already processing the {
// Does not parse the closing }
function jsxParseSpreadChild() {
  expect$1(TokenType$1.ellipsis);
  parseExpression();
}

// Parses JSX opening tag starting after "<".
// Returns true if the tag was self-closing.
// Does not parse the last token.
function jsxParseOpeningElement(initialTokenIndex) {
  if (match$1(TokenType$1.jsxTagEnd)) {
    // This is an open-fragment.
    return false;
  }
  jsxParseElementName();
  if (isTypeScriptEnabled) {
    tsTryParseJSXTypeArgument();
  }
  let hasSeenPropSpread = false;
  while (!match$1(TokenType$1.slash) && !match$1(TokenType$1.jsxTagEnd) && !state$1.error) {
    if (eat$1(TokenType$1.braceL)) {
      hasSeenPropSpread = true;
      expect$1(TokenType$1.ellipsis);
      parseMaybeAssign();
      // }
      nextJSXTagToken();
      continue;
    }
    if (
      hasSeenPropSpread &&
      state$1.end - state$1.start === 3 &&
      input.charCodeAt(state$1.start) === charCodes$1.lowercaseK &&
      input.charCodeAt(state$1.start + 1) === charCodes$1.lowercaseE &&
      input.charCodeAt(state$1.start + 2) === charCodes$1.lowercaseY
    ) {
      state$1.tokens[initialTokenIndex].jsxRole = JSXRole$1.KeyAfterPropSpread;
    }
    jsxParseNamespacedName(IdentifierRole$1.ObjectKey);
    if (match$1(TokenType$1.eq)) {
      nextJSXTagToken();
      jsxParseAttributeValue();
    }
  }
  const isSelfClosing = match$1(TokenType$1.slash);
  if (isSelfClosing) {
    // /
    nextJSXTagToken();
  }
  return isSelfClosing;
}

// Parses JSX closing tag starting after "</".
// Does not parse the last token.
function jsxParseClosingElement() {
  if (match$1(TokenType$1.jsxTagEnd)) {
    // Fragment syntax, so we immediately have a tag end.
    return;
  }
  jsxParseElementName();
}

// Parses entire JSX element, including its opening tag
// (starting after "<"), attributes, contents and closing tag.
// Does not parse the last token.
function jsxParseElementAt() {
  const initialTokenIndex = state$1.tokens.length - 1;
  state$1.tokens[initialTokenIndex].jsxRole = JSXRole$1.NoChildren;
  let numExplicitChildren = 0;
  const isSelfClosing = jsxParseOpeningElement(initialTokenIndex);
  if (!isSelfClosing) {
    nextJSXExprToken();
    while (true) {
      switch (state$1.type) {
        case TokenType$1.jsxTagStart:
          nextJSXTagToken();
          if (match$1(TokenType$1.slash)) {
            nextJSXTagToken();
            jsxParseClosingElement();
            // Key after prop spread takes precedence over number of children,
            // since it means we switch to createElement, which doesn't care
            // about number of children.
            if (state$1.tokens[initialTokenIndex].jsxRole !== JSXRole$1.KeyAfterPropSpread) {
              if (numExplicitChildren === 1) {
                state$1.tokens[initialTokenIndex].jsxRole = JSXRole$1.OneChild;
              } else if (numExplicitChildren > 1) {
                state$1.tokens[initialTokenIndex].jsxRole = JSXRole$1.StaticChildren;
              }
            }
            return;
          }
          numExplicitChildren++;
          jsxParseElementAt();
          nextJSXExprToken();
          break;

        case TokenType$1.jsxText:
          numExplicitChildren++;
          nextJSXExprToken();
          break;

        case TokenType$1.jsxEmptyText:
          nextJSXExprToken();
          break;

        case TokenType$1.braceL:
          next$1();
          if (match$1(TokenType$1.ellipsis)) {
            jsxParseSpreadChild();
            nextJSXExprToken();
            // Spread children are a mechanism to explicitly mark children as
            // static, so count it as 2 children to satisfy the "more than one
            // child" condition.
            numExplicitChildren += 2;
          } else {
            // If we see {}, this is an empty pseudo-expression that doesn't
            // count as a child.
            if (!match$1(TokenType$1.braceR)) {
              numExplicitChildren++;
              parseExpression();
            }
            nextJSXExprToken();
          }

          break;

        // istanbul ignore next - should never happen
        default:
          unexpected$1();
          return;
      }
    }
  }
}

// Parses entire JSX element from current position.
// Does not parse the last token.
function jsxParseElement() {
  nextJSXTagToken();
  jsxParseElementAt();
}

// ==================================
// Overrides
// ==================================

function nextJSXTagToken() {
  state$1.tokens.push(new Token$1());
  skipSpace$1();
  state$1.start = state$1.pos;
  const code = input.charCodeAt(state$1.pos);

  if (IS_IDENTIFIER_START[code]) {
    jsxReadWord();
  } else if (code === charCodes$1.quotationMark || code === charCodes$1.apostrophe) {
    jsxReadString(code);
  } else {
    // The following tokens are just one character each.
    ++state$1.pos;
    switch (code) {
      case charCodes$1.greaterThan:
        finishToken$1(TokenType$1.jsxTagEnd);
        break;
      case charCodes$1.lessThan:
        finishToken$1(TokenType$1.jsxTagStart);
        break;
      case charCodes$1.slash:
        finishToken$1(TokenType$1.slash);
        break;
      case charCodes$1.equalsTo:
        finishToken$1(TokenType$1.eq);
        break;
      case charCodes$1.leftCurlyBrace:
        finishToken$1(TokenType$1.braceL);
        break;
      case charCodes$1.dot:
        finishToken$1(TokenType$1.dot);
        break;
      case charCodes$1.colon:
        finishToken$1(TokenType$1.colon);
        break;
      default:
        unexpected$1();
    }
  }
}

function nextJSXExprToken() {
  state$1.tokens.push(new Token$1());
  state$1.start = state$1.pos;
  jsxReadToken();
}

/**
 * Common parser code for TypeScript and Flow.
 */

// An apparent conditional expression could actually be an optional parameter in an arrow function.
function typedParseConditional(noIn) {
  // If we see ?:, this can't possibly be a valid conditional. typedParseParenItem will be called
  // later to finish off the arrow parameter. We also need to handle bare ? tokens for optional
  // parameters without type annotations, i.e. ?, and ?) .
  if (match$1(TokenType$1.question)) {
    const nextType = lookaheadType$1();
    if (nextType === TokenType$1.colon || nextType === TokenType$1.comma || nextType === TokenType$1.parenR) {
      return;
    }
  }
  baseParseConditional(noIn);
}

// Note: These "type casts" are *not* valid TS expressions.
// But we parse them here and change them when completing the arrow function.
function typedParseParenItem() {
  eatTypeToken$1(TokenType$1.question);
  if (match$1(TokenType$1.colon)) {
    if (isTypeScriptEnabled) {
      tsParseTypeAnnotation();
    } else if (isFlowEnabled) {
      flowParseTypeAnnotation();
    }
  }
}

/* eslint max-len: 0 */

class StopState {
  
  constructor(stop) {
    this.stop = stop;
  }
}

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function (s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.
function parseExpression(noIn = false) {
  parseMaybeAssign(noIn);
  if (match$1(TokenType$1.comma)) {
    while (eat$1(TokenType$1.comma)) {
      parseMaybeAssign(noIn);
    }
  }
}

/**
 * noIn is used when parsing a for loop so that we don't interpret a following "in" as the binary
 * operatior.
 * isWithinParens is used to indicate that we're parsing something that might be a comma expression
 * or might be an arrow function or might be a Flow type assertion (which requires explicit parens).
 * In these cases, we should allow : and ?: after the initial "left" part.
 */
function parseMaybeAssign(noIn = false, isWithinParens = false) {
  if (isTypeScriptEnabled) {
    return tsParseMaybeAssign(noIn, isWithinParens);
  } else if (isFlowEnabled) {
    return flowParseMaybeAssign(noIn, isWithinParens);
  } else {
    return baseParseMaybeAssign(noIn, isWithinParens);
  }
}

// Parse an assignment expression. This includes applications of
// operators like `+=`.
// Returns true if the expression was an arrow function.
function baseParseMaybeAssign(noIn, isWithinParens) {
  if (match$1(TokenType$1._yield)) {
    parseYield();
    return false;
  }

  if (match$1(TokenType$1.parenL) || match$1(TokenType$1.name) || match$1(TokenType$1._yield)) {
    state$1.potentialArrowAt = state$1.start;
  }

  const wasArrow = parseMaybeConditional(noIn);
  if (isWithinParens) {
    parseParenItem();
  }
  if (state$1.type & TokenType$1.IS_ASSIGN) {
    next$1();
    parseMaybeAssign(noIn);
    return false;
  }
  return wasArrow;
}

// Parse a ternary conditional (`?:`) operator.
// Returns true if the expression was an arrow function.
function parseMaybeConditional(noIn) {
  const wasArrow = parseExprOps(noIn);
  if (wasArrow) {
    return true;
  }
  parseConditional(noIn);
  return false;
}

function parseConditional(noIn) {
  if (isTypeScriptEnabled || isFlowEnabled) {
    typedParseConditional(noIn);
  } else {
    baseParseConditional(noIn);
  }
}

function baseParseConditional(noIn) {
  if (eat$1(TokenType$1.question)) {
    parseMaybeAssign();
    expect$1(TokenType$1.colon);
    parseMaybeAssign(noIn);
  }
}

// Start the precedence parser.
// Returns true if this was an arrow function
function parseExprOps(noIn) {
  const startTokenIndex = state$1.tokens.length;
  const wasArrow = parseMaybeUnary();
  if (wasArrow) {
    return true;
  }
  parseExprOp(startTokenIndex, -1, noIn);
  return false;
}

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.
function parseExprOp(startTokenIndex, minPrec, noIn) {
  if (
    isTypeScriptEnabled &&
    (TokenType$1._in & TokenType$1.PRECEDENCE_MASK) > minPrec &&
    !hasPrecedingLineBreak$1() &&
    (eatContextual$1(ContextualKeyword$1._as) || eatContextual$1(ContextualKeyword$1._satisfies))
  ) {
    const oldIsType = pushTypeContext$1(1);
    tsParseType();
    popTypeContext$1(oldIsType);
    rescan_gt$1();
    parseExprOp(startTokenIndex, minPrec, noIn);
    return;
  }

  const prec = state$1.type & TokenType$1.PRECEDENCE_MASK;
  if (prec > 0 && (!noIn || !match$1(TokenType$1._in))) {
    if (prec > minPrec) {
      const op = state$1.type;
      next$1();
      if (op === TokenType$1.nullishCoalescing) {
        state$1.tokens[state$1.tokens.length - 1].nullishStartIndex = startTokenIndex;
      }

      const rhsStartTokenIndex = state$1.tokens.length;
      parseMaybeUnary();
      // Extend the right operand of this operator if possible.
      parseExprOp(rhsStartTokenIndex, op & TokenType$1.IS_RIGHT_ASSOCIATIVE ? prec - 1 : prec, noIn);
      if (op === TokenType$1.nullishCoalescing) {
        state$1.tokens[startTokenIndex].numNullishCoalesceStarts++;
        state$1.tokens[state$1.tokens.length - 1].numNullishCoalesceEnds++;
      }
      // Continue with any future operator holding this expression as the left operand.
      parseExprOp(startTokenIndex, minPrec, noIn);
    }
  }
}

// Parse unary operators, both prefix and postfix.
// Returns true if this was an arrow function.
function parseMaybeUnary() {
  if (isTypeScriptEnabled && !isJSXEnabled && eat$1(TokenType$1.lessThan)) {
    tsParseTypeAssertion();
    return false;
  }
  if (
    isContextual$1(ContextualKeyword$1._module) &&
    lookaheadCharCode$1() === charCodes$1.leftCurlyBrace &&
    !hasFollowingLineBreak$1()
  ) {
    parseModuleExpression();
    return false;
  }
  if (state$1.type & TokenType$1.IS_PREFIX) {
    next$1();
    parseMaybeUnary();
    return false;
  }

  const wasArrow = parseExprSubscripts();
  if (wasArrow) {
    return true;
  }
  while (state$1.type & TokenType$1.IS_POSTFIX && !canInsertSemicolon$1()) {
    // The tokenizer calls everything a preincrement, so make it a postincrement when
    // we see it in that context.
    if (state$1.type === TokenType$1.preIncDec) {
      state$1.type = TokenType$1.postIncDec;
    }
    next$1();
  }
  return false;
}

// Parse call, dot, and `[]`-subscript expressions.
// Returns true if this was an arrow function.
function parseExprSubscripts() {
  const startTokenIndex = state$1.tokens.length;
  const wasArrow = parseExprAtom();
  if (wasArrow) {
    return true;
  }
  parseSubscripts(startTokenIndex);
  // If there was any optional chain operation, the start token would be marked
  // as such, so also mark the end now.
  if (state$1.tokens.length > startTokenIndex && state$1.tokens[startTokenIndex].isOptionalChainStart) {
    state$1.tokens[state$1.tokens.length - 1].isOptionalChainEnd = true;
  }
  return false;
}

function parseSubscripts(startTokenIndex, noCalls = false) {
  if (isFlowEnabled) {
    flowParseSubscripts(startTokenIndex, noCalls);
  } else {
    baseParseSubscripts(startTokenIndex, noCalls);
  }
}

function baseParseSubscripts(startTokenIndex, noCalls = false) {
  const stopState = new StopState(false);
  do {
    parseSubscript(startTokenIndex, noCalls, stopState);
  } while (!stopState.stop && !state$1.error);
}

function parseSubscript(startTokenIndex, noCalls, stopState) {
  if (isTypeScriptEnabled) {
    tsParseSubscript(startTokenIndex, noCalls, stopState);
  } else if (isFlowEnabled) {
    flowParseSubscript(startTokenIndex, noCalls, stopState);
  } else {
    baseParseSubscript(startTokenIndex, noCalls, stopState);
  }
}

/** Set 'state.stop = true' to indicate that we should stop parsing subscripts. */
function baseParseSubscript(
  startTokenIndex,
  noCalls,
  stopState,
) {
  if (!noCalls && eat$1(TokenType$1.doubleColon)) {
    parseNoCallExpr();
    stopState.stop = true;
    // Propagate startTokenIndex so that `a::b?.()` will keep `a` as the first token. We may want
    // to revisit this in the future when fully supporting bind syntax.
    parseSubscripts(startTokenIndex, noCalls);
  } else if (match$1(TokenType$1.questionDot)) {
    state$1.tokens[startTokenIndex].isOptionalChainStart = true;
    if (noCalls && lookaheadType$1() === TokenType$1.parenL) {
      stopState.stop = true;
      return;
    }
    next$1();
    state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;

    if (eat$1(TokenType$1.bracketL)) {
      parseExpression();
      expect$1(TokenType$1.bracketR);
    } else if (eat$1(TokenType$1.parenL)) {
      parseCallExpressionArguments();
    } else {
      parseMaybePrivateName();
    }
  } else if (eat$1(TokenType$1.dot)) {
    state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    parseMaybePrivateName();
  } else if (eat$1(TokenType$1.bracketL)) {
    state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;
    parseExpression();
    expect$1(TokenType$1.bracketR);
  } else if (!noCalls && match$1(TokenType$1.parenL)) {
    if (atPossibleAsync()) {
      // We see "async", but it's possible it's a usage of the name "async". Parse as if it's a
      // function call, and if we see an arrow later, backtrack and re-parse as a parameter list.
      const snapshot = state$1.snapshot();
      const asyncStartTokenIndex = state$1.tokens.length;
      next$1();
      state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;

      const callContextId = getNextContextId();

      state$1.tokens[state$1.tokens.length - 1].contextId = callContextId;
      parseCallExpressionArguments();
      state$1.tokens[state$1.tokens.length - 1].contextId = callContextId;

      if (shouldParseAsyncArrow()) {
        // We hit an arrow, so backtrack and start again parsing function parameters.
        state$1.restoreFromSnapshot(snapshot);
        stopState.stop = true;
        state$1.scopeDepth++;

        parseFunctionParams();
        parseAsyncArrowFromCallExpression(asyncStartTokenIndex);
      }
    } else {
      next$1();
      state$1.tokens[state$1.tokens.length - 1].subscriptStartIndex = startTokenIndex;
      const callContextId = getNextContextId();
      state$1.tokens[state$1.tokens.length - 1].contextId = callContextId;
      parseCallExpressionArguments();
      state$1.tokens[state$1.tokens.length - 1].contextId = callContextId;
    }
  } else if (match$1(TokenType$1.backQuote)) {
    // Tagged template expression.
    parseTemplate();
  } else {
    stopState.stop = true;
  }
}

function atPossibleAsync() {
  // This was made less strict than the original version to avoid passing around nodes, but it
  // should be safe to have rare false positives here.
  return (
    state$1.tokens[state$1.tokens.length - 1].contextualKeyword === ContextualKeyword$1._async &&
    !canInsertSemicolon$1()
  );
}

function parseCallExpressionArguments() {
  let first = true;
  while (!eat$1(TokenType$1.parenR) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      expect$1(TokenType$1.comma);
      if (eat$1(TokenType$1.parenR)) {
        break;
      }
    }

    parseExprListItem(false);
  }
}

function shouldParseAsyncArrow() {
  return match$1(TokenType$1.colon) || match$1(TokenType$1.arrow);
}

function parseAsyncArrowFromCallExpression(startTokenIndex) {
  if (isTypeScriptEnabled) {
    tsStartParseAsyncArrowFromCallExpression();
  } else if (isFlowEnabled) {
    flowStartParseAsyncArrowFromCallExpression();
  }
  expect$1(TokenType$1.arrow);
  parseArrowExpression(startTokenIndex);
}

// Parse a no-call expression (like argument of `new` or `::` operators).

function parseNoCallExpr() {
  const startTokenIndex = state$1.tokens.length;
  parseExprAtom();
  parseSubscripts(startTokenIndex, true);
}

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.
// Returns true if the parsed expression was an arrow function.
function parseExprAtom() {
  if (eat$1(TokenType$1.modulo)) {
    // V8 intrinsic expression. Just parse the identifier, and the function invocation is parsed
    // naturally.
    parseIdentifier();
    return false;
  }

  if (match$1(TokenType$1.jsxText) || match$1(TokenType$1.jsxEmptyText)) {
    parseLiteral();
    return false;
  } else if (match$1(TokenType$1.lessThan) && isJSXEnabled) {
    state$1.type = TokenType$1.jsxTagStart;
    jsxParseElement();
    next$1();
    return false;
  }

  const canBeArrow = state$1.potentialArrowAt === state$1.start;
  switch (state$1.type) {
    case TokenType$1.slash:
    case TokenType$1.assign:
      retokenizeSlashAsRegex$1();
    // Fall through.

    case TokenType$1._super:
    case TokenType$1._this:
    case TokenType$1.regexp:
    case TokenType$1.num:
    case TokenType$1.bigint:
    case TokenType$1.decimal:
    case TokenType$1.string:
    case TokenType$1._null:
    case TokenType$1._true:
    case TokenType$1._false:
      next$1();
      return false;

    case TokenType$1._import:
      next$1();
      if (match$1(TokenType$1.dot)) {
        // import.meta
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.name;
        next$1();
        parseIdentifier();
      }
      return false;

    case TokenType$1.name: {
      const startTokenIndex = state$1.tokens.length;
      const functionStart = state$1.start;
      const contextualKeyword = state$1.contextualKeyword;
      parseIdentifier();
      if (contextualKeyword === ContextualKeyword$1._await) {
        parseAwait();
        return false;
      } else if (
        contextualKeyword === ContextualKeyword$1._async &&
        match$1(TokenType$1._function) &&
        !canInsertSemicolon$1()
      ) {
        next$1();
        parseFunction(functionStart, false);
        return false;
      } else if (
        canBeArrow &&
        contextualKeyword === ContextualKeyword$1._async &&
        !canInsertSemicolon$1() &&
        match$1(TokenType$1.name)
      ) {
        state$1.scopeDepth++;
        parseBindingIdentifier(false);
        expect$1(TokenType$1.arrow);
        // let foo = async bar => {};
        parseArrowExpression(startTokenIndex);
        return true;
      } else if (match$1(TokenType$1._do) && !canInsertSemicolon$1()) {
        next$1();
        parseBlock();
        return false;
      }

      if (canBeArrow && !canInsertSemicolon$1() && match$1(TokenType$1.arrow)) {
        state$1.scopeDepth++;
        markPriorBindingIdentifier(false);
        expect$1(TokenType$1.arrow);
        parseArrowExpression(startTokenIndex);
        return true;
      }

      state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.Access;
      return false;
    }

    case TokenType$1._do: {
      next$1();
      parseBlock();
      return false;
    }

    case TokenType$1.parenL: {
      const wasArrow = parseParenAndDistinguishExpression(canBeArrow);
      return wasArrow;
    }

    case TokenType$1.bracketL:
      next$1();
      parseExprList(TokenType$1.bracketR, true);
      return false;

    case TokenType$1.braceL:
      parseObj(false, false);
      return false;

    case TokenType$1._function:
      parseFunctionExpression();
      return false;

    case TokenType$1.at:
      parseDecorators();
    // Fall through.

    case TokenType$1._class:
      parseClass(false);
      return false;

    case TokenType$1._new:
      parseNew();
      return false;

    case TokenType$1.backQuote:
      parseTemplate();
      return false;

    case TokenType$1.doubleColon: {
      next$1();
      parseNoCallExpr();
      return false;
    }

    case TokenType$1.hash: {
      const code = lookaheadCharCode$1();
      if (IS_IDENTIFIER_START[code] || code === charCodes$1.backslash) {
        parseMaybePrivateName();
      } else {
        next$1();
      }
      // Smart pipeline topic reference.
      return false;
    }

    default:
      unexpected$1();
      return false;
  }
}

function parseMaybePrivateName() {
  eat$1(TokenType$1.hash);
  parseIdentifier();
}

function parseFunctionExpression() {
  const functionStart = state$1.start;
  parseIdentifier();
  if (eat$1(TokenType$1.dot)) {
    // function.sent
    parseIdentifier();
  }
  parseFunction(functionStart, false);
}

function parseLiteral() {
  next$1();
}

function parseParenExpression() {
  expect$1(TokenType$1.parenL);
  parseExpression();
  expect$1(TokenType$1.parenR);
}

// Returns true if this was an arrow expression.
function parseParenAndDistinguishExpression(canBeArrow) {
  // Assume this is a normal parenthesized expression, but if we see an arrow, we'll bail and
  // start over as a parameter list.
  const snapshot = state$1.snapshot();

  const startTokenIndex = state$1.tokens.length;
  expect$1(TokenType$1.parenL);

  let first = true;

  while (!match$1(TokenType$1.parenR) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      expect$1(TokenType$1.comma);
      if (match$1(TokenType$1.parenR)) {
        break;
      }
    }

    if (match$1(TokenType$1.ellipsis)) {
      parseRest(false /* isBlockScope */);
      parseParenItem();
      break;
    } else {
      parseMaybeAssign(false, true);
    }
  }

  expect$1(TokenType$1.parenR);

  if (canBeArrow && shouldParseArrow()) {
    const wasArrow = parseArrow();
    if (wasArrow) {
      // It was an arrow function this whole time, so start over and parse it as params so that we
      // get proper token annotations.
      state$1.restoreFromSnapshot(snapshot);
      state$1.scopeDepth++;
      // Don't specify a context ID because arrow functions don't need a context ID.
      parseFunctionParams();
      parseArrow();
      parseArrowExpression(startTokenIndex);
      if (state$1.error) {
        // Nevermind! This must have been something that looks very much like an
        // arrow function but where its "parameter list" isn't actually a valid
        // parameter list. Force non-arrow parsing.
        // See https://github.com/alangpierce/sucrase/issues/666 for an example.
        state$1.restoreFromSnapshot(snapshot);
        parseParenAndDistinguishExpression(false);
        return false;
      }
      return true;
    }
  }

  return false;
}

function shouldParseArrow() {
  return match$1(TokenType$1.colon) || !canInsertSemicolon$1();
}

// Returns whether there was an arrow token.
function parseArrow() {
  if (isTypeScriptEnabled) {
    return tsParseArrow();
  } else if (isFlowEnabled) {
    return flowParseArrow();
  } else {
    return eat$1(TokenType$1.arrow);
  }
}

function parseParenItem() {
  if (isTypeScriptEnabled || isFlowEnabled) {
    typedParseParenItem();
  }
}

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.
function parseNew() {
  expect$1(TokenType$1._new);
  if (eat$1(TokenType$1.dot)) {
    // new.target
    parseIdentifier();
    return;
  }
  parseNewCallee();
  if (isFlowEnabled) {
    flowStartParseNewArguments();
  }
  if (eat$1(TokenType$1.parenL)) {
    parseExprList(TokenType$1.parenR);
  }
}

function parseNewCallee() {
  parseNoCallExpr();
  eat$1(TokenType$1.questionDot);
}

function parseTemplate() {
  // Finish `, read quasi
  nextTemplateToken$1();
  // Finish quasi, read ${
  nextTemplateToken$1();
  while (!match$1(TokenType$1.backQuote) && !state$1.error) {
    expect$1(TokenType$1.dollarBraceL);
    parseExpression();
    // Finish }, read quasi
    nextTemplateToken$1();
    // Finish quasi, read either ${ or `
    nextTemplateToken$1();
  }
  next$1();
}

// Parse an object literal or binding pattern.
function parseObj(isPattern, isBlockScope) {
  // Attach a context ID to the object open and close brace and each object key.
  const contextId = getNextContextId();
  let first = true;

  next$1();
  state$1.tokens[state$1.tokens.length - 1].contextId = contextId;

  while (!eat$1(TokenType$1.braceR) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      expect$1(TokenType$1.comma);
      if (eat$1(TokenType$1.braceR)) {
        break;
      }
    }

    let isGenerator = false;
    if (match$1(TokenType$1.ellipsis)) {
      const previousIndex = state$1.tokens.length;
      parseSpread();
      if (isPattern) {
        // Mark role when the only thing being spread over is an identifier.
        if (state$1.tokens.length === previousIndex + 2) {
          markPriorBindingIdentifier(isBlockScope);
        }
        if (eat$1(TokenType$1.braceR)) {
          break;
        }
      }
      continue;
    }

    if (!isPattern) {
      isGenerator = eat$1(TokenType$1.star);
    }

    if (!isPattern && isContextual$1(ContextualKeyword$1._async)) {
      if (isGenerator) unexpected$1();

      parseIdentifier();
      if (
        match$1(TokenType$1.colon) ||
        match$1(TokenType$1.parenL) ||
        match$1(TokenType$1.braceR) ||
        match$1(TokenType$1.eq) ||
        match$1(TokenType$1.comma)
      ) ; else {
        if (match$1(TokenType$1.star)) {
          next$1();
          isGenerator = true;
        }
        parsePropertyName(contextId);
      }
    } else {
      parsePropertyName(contextId);
    }

    parseObjPropValue(isPattern, isBlockScope, contextId);
  }

  state$1.tokens[state$1.tokens.length - 1].contextId = contextId;
}

function isGetterOrSetterMethod(isPattern) {
  // We go off of the next and don't bother checking if the node key is actually "get" or "set".
  // This lets us avoid generating a node, and should only make the validation worse.
  return (
    !isPattern &&
    (match$1(TokenType$1.string) || // get "string"() {}
      match$1(TokenType$1.num) || // get 1() {}
      match$1(TokenType$1.bracketL) || // get ["string"]() {}
      match$1(TokenType$1.name) || // get foo() {}
      !!(state$1.type & TokenType$1.IS_KEYWORD)) // get debugger() {}
  );
}

// Returns true if this was a method.
function parseObjectMethod(isPattern, objectContextId) {
  // We don't need to worry about modifiers because object methods can't have optional bodies, so
  // the start will never be used.
  const functionStart = state$1.start;
  if (match$1(TokenType$1.parenL)) {
    if (isPattern) unexpected$1();
    parseMethod(functionStart, /* isConstructor */ false);
    return true;
  }

  if (isGetterOrSetterMethod(isPattern)) {
    parsePropertyName(objectContextId);
    parseMethod(functionStart, /* isConstructor */ false);
    return true;
  }
  return false;
}

function parseObjectProperty(isPattern, isBlockScope) {
  if (eat$1(TokenType$1.colon)) {
    if (isPattern) {
      parseMaybeDefault(isBlockScope);
    } else {
      parseMaybeAssign(false);
    }
    return;
  }

  // Since there's no colon, we assume this is an object shorthand.

  // If we're in a destructuring, we've now discovered that the key was actually an assignee, so
  // we need to tag it as a declaration with the appropriate scope. Otherwise, we might need to
  // transform it on access, so mark it as a normal object shorthand.
  let identifierRole;
  if (isPattern) {
    if (state$1.scopeDepth === 0) {
      identifierRole = IdentifierRole$1.ObjectShorthandTopLevelDeclaration;
    } else if (isBlockScope) {
      identifierRole = IdentifierRole$1.ObjectShorthandBlockScopedDeclaration;
    } else {
      identifierRole = IdentifierRole$1.ObjectShorthandFunctionScopedDeclaration;
    }
  } else {
    identifierRole = IdentifierRole$1.ObjectShorthand;
  }
  state$1.tokens[state$1.tokens.length - 1].identifierRole = identifierRole;

  // Regardless of whether we know this to be a pattern or if we're in an ambiguous context, allow
  // parsing as if there's a default value.
  parseMaybeDefault(isBlockScope, true);
}

function parseObjPropValue(
  isPattern,
  isBlockScope,
  objectContextId,
) {
  if (isTypeScriptEnabled) {
    tsStartParseObjPropValue();
  } else if (isFlowEnabled) {
    flowStartParseObjPropValue();
  }
  const wasMethod = parseObjectMethod(isPattern, objectContextId);
  if (!wasMethod) {
    parseObjectProperty(isPattern, isBlockScope);
  }
}

function parsePropertyName(objectContextId) {
  if (isFlowEnabled) {
    flowParseVariance();
  }
  if (eat$1(TokenType$1.bracketL)) {
    state$1.tokens[state$1.tokens.length - 1].contextId = objectContextId;
    parseMaybeAssign();
    expect$1(TokenType$1.bracketR);
    state$1.tokens[state$1.tokens.length - 1].contextId = objectContextId;
  } else {
    if (match$1(TokenType$1.num) || match$1(TokenType$1.string) || match$1(TokenType$1.bigint) || match$1(TokenType$1.decimal)) {
      parseExprAtom();
    } else {
      parseMaybePrivateName();
    }

    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ObjectKey;
    state$1.tokens[state$1.tokens.length - 1].contextId = objectContextId;
  }
}

// Parse object or class method.
function parseMethod(functionStart, isConstructor) {
  const funcContextId = getNextContextId();

  state$1.scopeDepth++;
  const startTokenIndex = state$1.tokens.length;
  const allowModifiers = isConstructor; // For TypeScript parameter properties
  parseFunctionParams(allowModifiers, funcContextId);
  parseFunctionBodyAndFinish(functionStart, funcContextId);
  const endTokenIndex = state$1.tokens.length;
  state$1.scopes.push(new Scope$1(startTokenIndex, endTokenIndex, true));
  state$1.scopeDepth--;
}

// Parse arrow function expression.
// If the parameters are provided, they will be converted to an
// assignable list.
function parseArrowExpression(startTokenIndex) {
  parseFunctionBody(true);
  const endTokenIndex = state$1.tokens.length;
  state$1.scopes.push(new Scope$1(startTokenIndex, endTokenIndex, true));
  state$1.scopeDepth--;
}

function parseFunctionBodyAndFinish(functionStart, funcContextId = 0) {
  if (isTypeScriptEnabled) {
    tsParseFunctionBodyAndFinish(functionStart, funcContextId);
  } else if (isFlowEnabled) {
    flowParseFunctionBodyAndFinish(funcContextId);
  } else {
    parseFunctionBody(false, funcContextId);
  }
}

function parseFunctionBody(allowExpression, funcContextId = 0) {
  const isExpression = allowExpression && !match$1(TokenType$1.braceL);

  if (isExpression) {
    parseMaybeAssign();
  } else {
    parseBlock(true /* isFunctionScope */, funcContextId);
  }
}

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

function parseExprList(close, allowEmpty = false) {
  let first = true;
  while (!eat$1(close) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      expect$1(TokenType$1.comma);
      if (eat$1(close)) break;
    }
    parseExprListItem(allowEmpty);
  }
}

function parseExprListItem(allowEmpty) {
  if (allowEmpty && match$1(TokenType$1.comma)) ; else if (match$1(TokenType$1.ellipsis)) {
    parseSpread();
    parseParenItem();
  } else if (match$1(TokenType$1.question)) {
    // Partial function application proposal.
    next$1();
  } else {
    parseMaybeAssign(false, true);
  }
}

// Parse the next token as an identifier.
function parseIdentifier() {
  next$1();
  state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.name;
}

// Parses await expression inside async function.
function parseAwait() {
  parseMaybeUnary();
}

// Parses yield expression inside generator.
function parseYield() {
  next$1();
  if (!match$1(TokenType$1.semi) && !canInsertSemicolon$1()) {
    eat$1(TokenType$1.star);
    parseMaybeAssign();
  }
}

// https://github.com/tc39/proposal-js-module-blocks
function parseModuleExpression() {
  expectContextual$1(ContextualKeyword$1._module);
  expect$1(TokenType$1.braceL);
  // For now, just call parseBlockBody to parse the block. In the future when we
  // implement full support, we'll want to emit scopes and possibly other
  // information.
  parseBlockBody(TokenType$1.braceR);
}

/* eslint max-len: 0 */

function isMaybeDefaultImport(lookahead) {
  return (
    (lookahead.type === TokenType$1.name || !!(lookahead.type & TokenType$1.IS_KEYWORD)) &&
    lookahead.contextualKeyword !== ContextualKeyword$1._from
  );
}

function flowParseTypeInitialiser(tok) {
  const oldIsType = pushTypeContext$1(0);
  expect$1(tok || TokenType$1.colon);
  flowParseType();
  popTypeContext$1(oldIsType);
}

function flowParsePredicate() {
  expect$1(TokenType$1.modulo);
  expectContextual$1(ContextualKeyword$1._checks);
  if (eat$1(TokenType$1.parenL)) {
    parseExpression();
    expect$1(TokenType$1.parenR);
  }
}

function flowParseTypeAndPredicateInitialiser() {
  const oldIsType = pushTypeContext$1(0);
  expect$1(TokenType$1.colon);
  if (match$1(TokenType$1.modulo)) {
    flowParsePredicate();
  } else {
    flowParseType();
    if (match$1(TokenType$1.modulo)) {
      flowParsePredicate();
    }
  }
  popTypeContext$1(oldIsType);
}

function flowParseDeclareClass() {
  next$1();
  flowParseInterfaceish(/* isClass */ true);
}

function flowParseDeclareFunction() {
  next$1();
  parseIdentifier();

  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  expect$1(TokenType$1.parenL);
  flowParseFunctionTypeParams();
  expect$1(TokenType$1.parenR);

  flowParseTypeAndPredicateInitialiser();

  semicolon$2();
}

function flowParseDeclare() {
  if (match$1(TokenType$1._class)) {
    flowParseDeclareClass();
  } else if (match$1(TokenType$1._function)) {
    flowParseDeclareFunction();
  } else if (match$1(TokenType$1._var)) {
    flowParseDeclareVariable();
  } else if (eatContextual$1(ContextualKeyword$1._module)) {
    if (eat$1(TokenType$1.dot)) {
      flowParseDeclareModuleExports();
    } else {
      flowParseDeclareModule();
    }
  } else if (isContextual$1(ContextualKeyword$1._type)) {
    flowParseDeclareTypeAlias();
  } else if (isContextual$1(ContextualKeyword$1._opaque)) {
    flowParseDeclareOpaqueType();
  } else if (isContextual$1(ContextualKeyword$1._interface)) {
    flowParseDeclareInterface();
  } else if (match$1(TokenType$1._export)) {
    flowParseDeclareExportDeclaration();
  } else {
    unexpected$1();
  }
}

function flowParseDeclareVariable() {
  next$1();
  flowParseTypeAnnotatableIdentifier();
  semicolon$2();
}

function flowParseDeclareModule() {
  if (match$1(TokenType$1.string)) {
    parseExprAtom();
  } else {
    parseIdentifier();
  }

  expect$1(TokenType$1.braceL);
  while (!match$1(TokenType$1.braceR) && !state$1.error) {
    if (match$1(TokenType$1._import)) {
      next$1();
      parseImport();
    } else {
      unexpected$1();
    }
  }
  expect$1(TokenType$1.braceR);
}

function flowParseDeclareExportDeclaration() {
  expect$1(TokenType$1._export);

  if (eat$1(TokenType$1._default)) {
    if (match$1(TokenType$1._function) || match$1(TokenType$1._class)) {
      // declare export default class ...
      // declare export default function ...
      flowParseDeclare();
    } else {
      // declare export default [type];
      flowParseType();
      semicolon$2();
    }
  } else if (
    match$1(TokenType$1._var) || // declare export var ...
    match$1(TokenType$1._function) || // declare export function ...
    match$1(TokenType$1._class) || // declare export class ...
    isContextual$1(ContextualKeyword$1._opaque) // declare export opaque ..
  ) {
    flowParseDeclare();
  } else if (
    match$1(TokenType$1.star) || // declare export * from ''
    match$1(TokenType$1.braceL) || // declare export {} ...
    isContextual$1(ContextualKeyword$1._interface) || // declare export interface ...
    isContextual$1(ContextualKeyword$1._type) || // declare export type ...
    isContextual$1(ContextualKeyword$1._opaque) // declare export opaque type ...
  ) {
    parseExport();
  } else {
    unexpected$1();
  }
}

function flowParseDeclareModuleExports() {
  expectContextual$1(ContextualKeyword$1._exports);
  flowParseTypeAnnotation();
  semicolon$2();
}

function flowParseDeclareTypeAlias() {
  next$1();
  flowParseTypeAlias();
}

function flowParseDeclareOpaqueType() {
  next$1();
  flowParseOpaqueType(true);
}

function flowParseDeclareInterface() {
  next$1();
  flowParseInterfaceish();
}

// Interfaces

function flowParseInterfaceish(isClass = false) {
  flowParseRestrictedIdentifier();

  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  if (eat$1(TokenType$1._extends)) {
    do {
      flowParseInterfaceExtends();
    } while (!isClass && eat$1(TokenType$1.comma));
  }

  if (isContextual$1(ContextualKeyword$1._mixins)) {
    next$1();
    do {
      flowParseInterfaceExtends();
    } while (eat$1(TokenType$1.comma));
  }

  if (isContextual$1(ContextualKeyword$1._implements)) {
    next$1();
    do {
      flowParseInterfaceExtends();
    } while (eat$1(TokenType$1.comma));
  }

  flowParseObjectType(isClass, false, isClass);
}

function flowParseInterfaceExtends() {
  flowParseQualifiedTypeIdentifier(false);
  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
}

function flowParseInterface() {
  flowParseInterfaceish();
}

function flowParseRestrictedIdentifier() {
  parseIdentifier();
}

function flowParseTypeAlias() {
  flowParseRestrictedIdentifier();

  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  flowParseTypeInitialiser(TokenType$1.eq);
  semicolon$2();
}

function flowParseOpaqueType(declare) {
  expectContextual$1(ContextualKeyword$1._type);
  flowParseRestrictedIdentifier();

  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  // Parse the supertype
  if (match$1(TokenType$1.colon)) {
    flowParseTypeInitialiser(TokenType$1.colon);
  }

  if (!declare) {
    flowParseTypeInitialiser(TokenType$1.eq);
  }
  semicolon$2();
}

function flowParseTypeParameter() {
  flowParseVariance();
  flowParseTypeAnnotatableIdentifier();

  if (eat$1(TokenType$1.eq)) {
    flowParseType();
  }
}

function flowParseTypeParameterDeclaration() {
  const oldIsType = pushTypeContext$1(0);
  // istanbul ignore else: this condition is already checked at all call sites
  if (match$1(TokenType$1.lessThan) || match$1(TokenType$1.typeParameterStart)) {
    next$1();
  } else {
    unexpected$1();
  }

  do {
    flowParseTypeParameter();
    if (!match$1(TokenType$1.greaterThan)) {
      expect$1(TokenType$1.comma);
    }
  } while (!match$1(TokenType$1.greaterThan) && !state$1.error);
  expect$1(TokenType$1.greaterThan);
  popTypeContext$1(oldIsType);
}

function flowParseTypeParameterInstantiation() {
  const oldIsType = pushTypeContext$1(0);
  expect$1(TokenType$1.lessThan);
  while (!match$1(TokenType$1.greaterThan) && !state$1.error) {
    flowParseType();
    if (!match$1(TokenType$1.greaterThan)) {
      expect$1(TokenType$1.comma);
    }
  }
  expect$1(TokenType$1.greaterThan);
  popTypeContext$1(oldIsType);
}

function flowParseInterfaceType() {
  expectContextual$1(ContextualKeyword$1._interface);
  if (eat$1(TokenType$1._extends)) {
    do {
      flowParseInterfaceExtends();
    } while (eat$1(TokenType$1.comma));
  }
  flowParseObjectType(false, false, false);
}

function flowParseObjectPropertyKey() {
  if (match$1(TokenType$1.num) || match$1(TokenType$1.string)) {
    parseExprAtom();
  } else {
    parseIdentifier();
  }
}

function flowParseObjectTypeIndexer() {
  // Note: bracketL has already been consumed
  if (lookaheadType$1() === TokenType$1.colon) {
    flowParseObjectPropertyKey();
    flowParseTypeInitialiser();
  } else {
    flowParseType();
  }
  expect$1(TokenType$1.bracketR);
  flowParseTypeInitialiser();
}

function flowParseObjectTypeInternalSlot() {
  // Note: both bracketL have already been consumed
  flowParseObjectPropertyKey();
  expect$1(TokenType$1.bracketR);
  expect$1(TokenType$1.bracketR);
  if (match$1(TokenType$1.lessThan) || match$1(TokenType$1.parenL)) {
    flowParseObjectTypeMethodish();
  } else {
    eat$1(TokenType$1.question);
    flowParseTypeInitialiser();
  }
}

function flowParseObjectTypeMethodish() {
  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterDeclaration();
  }

  expect$1(TokenType$1.parenL);
  while (!match$1(TokenType$1.parenR) && !match$1(TokenType$1.ellipsis) && !state$1.error) {
    flowParseFunctionTypeParam();
    if (!match$1(TokenType$1.parenR)) {
      expect$1(TokenType$1.comma);
    }
  }

  if (eat$1(TokenType$1.ellipsis)) {
    flowParseFunctionTypeParam();
  }
  expect$1(TokenType$1.parenR);
  flowParseTypeInitialiser();
}

function flowParseObjectTypeCallProperty() {
  flowParseObjectTypeMethodish();
}

function flowParseObjectType(allowStatic, allowExact, allowProto) {
  let endDelim;
  if (allowExact && match$1(TokenType$1.braceBarL)) {
    expect$1(TokenType$1.braceBarL);
    endDelim = TokenType$1.braceBarR;
  } else {
    expect$1(TokenType$1.braceL);
    endDelim = TokenType$1.braceR;
  }

  while (!match$1(endDelim) && !state$1.error) {
    if (allowProto && isContextual$1(ContextualKeyword$1._proto)) {
      const lookahead = lookaheadType$1();
      if (lookahead !== TokenType$1.colon && lookahead !== TokenType$1.question) {
        next$1();
        allowStatic = false;
      }
    }
    if (allowStatic && isContextual$1(ContextualKeyword$1._static)) {
      const lookahead = lookaheadType$1();
      if (lookahead !== TokenType$1.colon && lookahead !== TokenType$1.question) {
        next$1();
      }
    }

    flowParseVariance();

    if (eat$1(TokenType$1.bracketL)) {
      if (eat$1(TokenType$1.bracketL)) {
        flowParseObjectTypeInternalSlot();
      } else {
        flowParseObjectTypeIndexer();
      }
    } else if (match$1(TokenType$1.parenL) || match$1(TokenType$1.lessThan)) {
      flowParseObjectTypeCallProperty();
    } else {
      if (isContextual$1(ContextualKeyword$1._get) || isContextual$1(ContextualKeyword$1._set)) {
        const lookahead = lookaheadType$1();
        if (lookahead === TokenType$1.name || lookahead === TokenType$1.string || lookahead === TokenType$1.num) {
          next$1();
        }
      }

      flowParseObjectTypeProperty();
    }

    flowObjectTypeSemicolon();
  }

  expect$1(endDelim);
}

function flowParseObjectTypeProperty() {
  if (match$1(TokenType$1.ellipsis)) {
    expect$1(TokenType$1.ellipsis);
    if (!eat$1(TokenType$1.comma)) {
      eat$1(TokenType$1.semi);
    }
    // Explicit inexact object syntax.
    if (match$1(TokenType$1.braceR)) {
      return;
    }
    flowParseType();
  } else {
    flowParseObjectPropertyKey();
    if (match$1(TokenType$1.lessThan) || match$1(TokenType$1.parenL)) {
      // This is a method property
      flowParseObjectTypeMethodish();
    } else {
      eat$1(TokenType$1.question);
      flowParseTypeInitialiser();
    }
  }
}

function flowObjectTypeSemicolon() {
  if (!eat$1(TokenType$1.semi) && !eat$1(TokenType$1.comma) && !match$1(TokenType$1.braceR) && !match$1(TokenType$1.braceBarR)) {
    unexpected$1();
  }
}

function flowParseQualifiedTypeIdentifier(initialIdAlreadyParsed) {
  if (!initialIdAlreadyParsed) {
    parseIdentifier();
  }
  while (eat$1(TokenType$1.dot)) {
    parseIdentifier();
  }
}

function flowParseGenericType() {
  flowParseQualifiedTypeIdentifier(true);
  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
}

function flowParseTypeofType() {
  expect$1(TokenType$1._typeof);
  flowParsePrimaryType();
}

function flowParseTupleType() {
  expect$1(TokenType$1.bracketL);
  // We allow trailing commas
  while (state$1.pos < input.length && !match$1(TokenType$1.bracketR)) {
    flowParseType();
    if (match$1(TokenType$1.bracketR)) {
      break;
    }
    expect$1(TokenType$1.comma);
  }
  expect$1(TokenType$1.bracketR);
}

function flowParseFunctionTypeParam() {
  const lookahead = lookaheadType$1();
  if (lookahead === TokenType$1.colon || lookahead === TokenType$1.question) {
    parseIdentifier();
    eat$1(TokenType$1.question);
    flowParseTypeInitialiser();
  } else {
    flowParseType();
  }
}

function flowParseFunctionTypeParams() {
  while (!match$1(TokenType$1.parenR) && !match$1(TokenType$1.ellipsis) && !state$1.error) {
    flowParseFunctionTypeParam();
    if (!match$1(TokenType$1.parenR)) {
      expect$1(TokenType$1.comma);
    }
  }
  if (eat$1(TokenType$1.ellipsis)) {
    flowParseFunctionTypeParam();
  }
}

// The parsing of types roughly parallels the parsing of expressions, and
// primary types are kind of like primary expressions...they're the
// primitives with which other types are constructed.
function flowParsePrimaryType() {
  let isGroupedType = false;
  const oldNoAnonFunctionType = state$1.noAnonFunctionType;

  switch (state$1.type) {
    case TokenType$1.name: {
      if (isContextual$1(ContextualKeyword$1._interface)) {
        flowParseInterfaceType();
        return;
      }
      parseIdentifier();
      flowParseGenericType();
      return;
    }

    case TokenType$1.braceL:
      flowParseObjectType(false, false, false);
      return;

    case TokenType$1.braceBarL:
      flowParseObjectType(false, true, false);
      return;

    case TokenType$1.bracketL:
      flowParseTupleType();
      return;

    case TokenType$1.lessThan:
      flowParseTypeParameterDeclaration();
      expect$1(TokenType$1.parenL);
      flowParseFunctionTypeParams();
      expect$1(TokenType$1.parenR);
      expect$1(TokenType$1.arrow);
      flowParseType();
      return;

    case TokenType$1.parenL:
      next$1();

      // Check to see if this is actually a grouped type
      if (!match$1(TokenType$1.parenR) && !match$1(TokenType$1.ellipsis)) {
        if (match$1(TokenType$1.name)) {
          const token = lookaheadType$1();
          isGroupedType = token !== TokenType$1.question && token !== TokenType$1.colon;
        } else {
          isGroupedType = true;
        }
      }

      if (isGroupedType) {
        state$1.noAnonFunctionType = false;
        flowParseType();
        state$1.noAnonFunctionType = oldNoAnonFunctionType;

        // A `,` or a `) =>` means this is an anonymous function type
        if (
          state$1.noAnonFunctionType ||
          !(match$1(TokenType$1.comma) || (match$1(TokenType$1.parenR) && lookaheadType$1() === TokenType$1.arrow))
        ) {
          expect$1(TokenType$1.parenR);
          return;
        } else {
          // Eat a comma if there is one
          eat$1(TokenType$1.comma);
        }
      }

      flowParseFunctionTypeParams();

      expect$1(TokenType$1.parenR);
      expect$1(TokenType$1.arrow);
      flowParseType();
      return;

    case TokenType$1.minus:
      next$1();
      parseLiteral();
      return;

    case TokenType$1.string:
    case TokenType$1.num:
    case TokenType$1._true:
    case TokenType$1._false:
    case TokenType$1._null:
    case TokenType$1._this:
    case TokenType$1._void:
    case TokenType$1.star:
      next$1();
      return;

    default:
      if (state$1.type === TokenType$1._typeof) {
        flowParseTypeofType();
        return;
      } else if (state$1.type & TokenType$1.IS_KEYWORD) {
        next$1();
        state$1.tokens[state$1.tokens.length - 1].type = TokenType$1.name;
        return;
      }
  }

  unexpected$1();
}

function flowParsePostfixType() {
  flowParsePrimaryType();
  while (!canInsertSemicolon$1() && (match$1(TokenType$1.bracketL) || match$1(TokenType$1.questionDot))) {
    eat$1(TokenType$1.questionDot);
    expect$1(TokenType$1.bracketL);
    if (eat$1(TokenType$1.bracketR)) ; else {
      // Indexed access type
      flowParseType();
      expect$1(TokenType$1.bracketR);
    }
  }
}

function flowParsePrefixType() {
  if (eat$1(TokenType$1.question)) {
    flowParsePrefixType();
  } else {
    flowParsePostfixType();
  }
}

function flowParseAnonFunctionWithoutParens() {
  flowParsePrefixType();
  if (!state$1.noAnonFunctionType && eat$1(TokenType$1.arrow)) {
    flowParseType();
  }
}

function flowParseIntersectionType() {
  eat$1(TokenType$1.bitwiseAND);
  flowParseAnonFunctionWithoutParens();
  while (eat$1(TokenType$1.bitwiseAND)) {
    flowParseAnonFunctionWithoutParens();
  }
}

function flowParseUnionType() {
  eat$1(TokenType$1.bitwiseOR);
  flowParseIntersectionType();
  while (eat$1(TokenType$1.bitwiseOR)) {
    flowParseIntersectionType();
  }
}

function flowParseType() {
  flowParseUnionType();
}

function flowParseTypeAnnotation() {
  flowParseTypeInitialiser();
}

function flowParseTypeAnnotatableIdentifier() {
  parseIdentifier();
  if (match$1(TokenType$1.colon)) {
    flowParseTypeAnnotation();
  }
}

function flowParseVariance() {
  if (match$1(TokenType$1.plus) || match$1(TokenType$1.minus)) {
    next$1();
    state$1.tokens[state$1.tokens.length - 1].isType = true;
  }
}

// ==================================
// Overrides
// ==================================

function flowParseFunctionBodyAndFinish(funcContextId) {
  // For arrow functions, `parseArrow` handles the return type itself.
  if (match$1(TokenType$1.colon)) {
    flowParseTypeAndPredicateInitialiser();
  }

  parseFunctionBody(false, funcContextId);
}

function flowParseSubscript(
  startTokenIndex,
  noCalls,
  stopState,
) {
  if (match$1(TokenType$1.questionDot) && lookaheadType$1() === TokenType$1.lessThan) {
    if (noCalls) {
      stopState.stop = true;
      return;
    }
    next$1();
    flowParseTypeParameterInstantiation();
    expect$1(TokenType$1.parenL);
    parseCallExpressionArguments();
    return;
  } else if (!noCalls && match$1(TokenType$1.lessThan)) {
    const snapshot = state$1.snapshot();
    flowParseTypeParameterInstantiation();
    expect$1(TokenType$1.parenL);
    parseCallExpressionArguments();
    if (state$1.error) {
      state$1.restoreFromSnapshot(snapshot);
    } else {
      return;
    }
  }
  baseParseSubscript(startTokenIndex, noCalls, stopState);
}

function flowStartParseNewArguments() {
  if (match$1(TokenType$1.lessThan)) {
    const snapshot = state$1.snapshot();
    flowParseTypeParameterInstantiation();
    if (state$1.error) {
      state$1.restoreFromSnapshot(snapshot);
    }
  }
}

// interfaces
function flowTryParseStatement() {
  if (match$1(TokenType$1.name) && state$1.contextualKeyword === ContextualKeyword$1._interface) {
    const oldIsType = pushTypeContext$1(0);
    next$1();
    flowParseInterface();
    popTypeContext$1(oldIsType);
    return true;
  } else if (isContextual$1(ContextualKeyword$1._enum)) {
    flowParseEnumDeclaration();
    return true;
  }
  return false;
}

function flowTryParseExportDefaultExpression() {
  if (isContextual$1(ContextualKeyword$1._enum)) {
    flowParseEnumDeclaration();
    return true;
  }
  return false;
}

// declares, interfaces and type aliases
function flowParseIdentifierStatement(contextualKeyword) {
  if (contextualKeyword === ContextualKeyword$1._declare) {
    if (
      match$1(TokenType$1._class) ||
      match$1(TokenType$1.name) ||
      match$1(TokenType$1._function) ||
      match$1(TokenType$1._var) ||
      match$1(TokenType$1._export)
    ) {
      const oldIsType = pushTypeContext$1(1);
      flowParseDeclare();
      popTypeContext$1(oldIsType);
    }
  } else if (match$1(TokenType$1.name)) {
    if (contextualKeyword === ContextualKeyword$1._interface) {
      const oldIsType = pushTypeContext$1(1);
      flowParseInterface();
      popTypeContext$1(oldIsType);
    } else if (contextualKeyword === ContextualKeyword$1._type) {
      const oldIsType = pushTypeContext$1(1);
      flowParseTypeAlias();
      popTypeContext$1(oldIsType);
    } else if (contextualKeyword === ContextualKeyword$1._opaque) {
      const oldIsType = pushTypeContext$1(1);
      flowParseOpaqueType(false);
      popTypeContext$1(oldIsType);
    }
  }
  semicolon$2();
}

// export type
function flowShouldParseExportDeclaration() {
  return (
    isContextual$1(ContextualKeyword$1._type) ||
    isContextual$1(ContextualKeyword$1._interface) ||
    isContextual$1(ContextualKeyword$1._opaque) ||
    isContextual$1(ContextualKeyword$1._enum)
  );
}

function flowShouldDisallowExportDefaultSpecifier() {
  return (
    match$1(TokenType$1.name) &&
    (state$1.contextualKeyword === ContextualKeyword$1._type ||
      state$1.contextualKeyword === ContextualKeyword$1._interface ||
      state$1.contextualKeyword === ContextualKeyword$1._opaque ||
      state$1.contextualKeyword === ContextualKeyword$1._enum)
  );
}

function flowParseExportDeclaration() {
  if (isContextual$1(ContextualKeyword$1._type)) {
    const oldIsType = pushTypeContext$1(1);
    next$1();

    if (match$1(TokenType$1.braceL)) {
      // export type { foo, bar };
      parseExportSpecifiers();
      parseExportFrom();
    } else {
      // export type Foo = Bar;
      flowParseTypeAlias();
    }
    popTypeContext$1(oldIsType);
  } else if (isContextual$1(ContextualKeyword$1._opaque)) {
    const oldIsType = pushTypeContext$1(1);
    next$1();
    // export opaque type Foo = Bar;
    flowParseOpaqueType(false);
    popTypeContext$1(oldIsType);
  } else if (isContextual$1(ContextualKeyword$1._interface)) {
    const oldIsType = pushTypeContext$1(1);
    next$1();
    flowParseInterface();
    popTypeContext$1(oldIsType);
  } else {
    parseStatement(true);
  }
}

function flowShouldParseExportStar() {
  return match$1(TokenType$1.star) || (isContextual$1(ContextualKeyword$1._type) && lookaheadType$1() === TokenType$1.star);
}

function flowParseExportStar() {
  if (eatContextual$1(ContextualKeyword$1._type)) {
    const oldIsType = pushTypeContext$1(2);
    baseParseExportStar();
    popTypeContext$1(oldIsType);
  } else {
    baseParseExportStar();
  }
}

// parse a the super class type parameters and implements
function flowAfterParseClassSuper(hasSuper) {
  if (hasSuper && match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterInstantiation();
  }
  if (isContextual$1(ContextualKeyword$1._implements)) {
    const oldIsType = pushTypeContext$1(0);
    next$1();
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._implements;
    do {
      flowParseRestrictedIdentifier();
      if (match$1(TokenType$1.lessThan)) {
        flowParseTypeParameterInstantiation();
      }
    } while (eat$1(TokenType$1.comma));
    popTypeContext$1(oldIsType);
  }
}

// parse type parameters for object method shorthand
function flowStartParseObjPropValue() {
  // method shorthand
  if (match$1(TokenType$1.lessThan)) {
    flowParseTypeParameterDeclaration();
    if (!match$1(TokenType$1.parenL)) unexpected$1();
  }
}

function flowParseAssignableListItemTypes() {
  const oldIsType = pushTypeContext$1(0);
  eat$1(TokenType$1.question);
  if (match$1(TokenType$1.colon)) {
    flowParseTypeAnnotation();
  }
  popTypeContext$1(oldIsType);
}

// parse typeof and type imports
function flowStartParseImportSpecifiers() {
  if (match$1(TokenType$1._typeof) || isContextual$1(ContextualKeyword$1._type)) {
    const lh = lookaheadTypeAndKeyword$1();
    if (isMaybeDefaultImport(lh) || lh.type === TokenType$1.braceL || lh.type === TokenType$1.star) {
      next$1();
    }
  }
}

// parse import-type/typeof shorthand
function flowParseImportSpecifier() {
  const isTypeKeyword =
    state$1.contextualKeyword === ContextualKeyword$1._type || state$1.type === TokenType$1._typeof;
  if (isTypeKeyword) {
    next$1();
  } else {
    parseIdentifier();
  }

  if (isContextual$1(ContextualKeyword$1._as) && !isLookaheadContextual$1(ContextualKeyword$1._as)) {
    parseIdentifier();
    if (isTypeKeyword && !match$1(TokenType$1.name) && !(state$1.type & TokenType$1.IS_KEYWORD)) ; else {
      // `import {type as foo`
      parseIdentifier();
    }
  } else {
    if (isTypeKeyword && (match$1(TokenType$1.name) || !!(state$1.type & TokenType$1.IS_KEYWORD))) {
      // `import {type foo`
      parseIdentifier();
    }
    if (eatContextual$1(ContextualKeyword$1._as)) {
      parseIdentifier();
    }
  }
}

// parse function type parameters - function foo<T>() {}
function flowStartParseFunctionParams() {
  // Originally this checked if the method is a getter/setter, but if it was, we'd crash soon
  // anyway, so don't try to propagate that information.
  if (match$1(TokenType$1.lessThan)) {
    const oldIsType = pushTypeContext$1(0);
    flowParseTypeParameterDeclaration();
    popTypeContext$1(oldIsType);
  }
}

// parse flow type annotations on variable declarator heads - let foo: string = bar
function flowAfterParseVarHead() {
  if (match$1(TokenType$1.colon)) {
    flowParseTypeAnnotation();
  }
}

// parse the return type of an async arrow function - let foo = (async (): number => {});
function flowStartParseAsyncArrowFromCallExpression() {
  if (match$1(TokenType$1.colon)) {
    const oldNoAnonFunctionType = state$1.noAnonFunctionType;
    state$1.noAnonFunctionType = true;
    flowParseTypeAnnotation();
    state$1.noAnonFunctionType = oldNoAnonFunctionType;
  }
}

// We need to support type parameter declarations for arrow functions. This
// is tricky. There are three situations we need to handle
//
// 1. This is either JSX or an arrow function. We'll try JSX first. If that
//    fails, we'll try an arrow function. If that fails, we'll throw the JSX
//    error.
// 2. This is an arrow function. We'll parse the type parameter declaration,
//    parse the rest, make sure the rest is an arrow function, and go from
//    there
// 3. This is neither. Just call the super method
function flowParseMaybeAssign(noIn, isWithinParens) {
  if (match$1(TokenType$1.lessThan)) {
    const snapshot = state$1.snapshot();
    let wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
    if (state$1.error) {
      state$1.restoreFromSnapshot(snapshot);
      state$1.type = TokenType$1.typeParameterStart;
    } else {
      return wasArrow;
    }

    const oldIsType = pushTypeContext$1(0);
    flowParseTypeParameterDeclaration();
    popTypeContext$1(oldIsType);
    wasArrow = baseParseMaybeAssign(noIn, isWithinParens);
    if (wasArrow) {
      return true;
    }
    unexpected$1();
  }

  return baseParseMaybeAssign(noIn, isWithinParens);
}

// handle return types for arrow functions
function flowParseArrow() {
  if (match$1(TokenType$1.colon)) {
    const oldIsType = pushTypeContext$1(0);
    const snapshot = state$1.snapshot();

    const oldNoAnonFunctionType = state$1.noAnonFunctionType;
    state$1.noAnonFunctionType = true;
    flowParseTypeAndPredicateInitialiser();
    state$1.noAnonFunctionType = oldNoAnonFunctionType;

    if (canInsertSemicolon$1()) unexpected$1();
    if (!match$1(TokenType$1.arrow)) unexpected$1();

    if (state$1.error) {
      state$1.restoreFromSnapshot(snapshot);
    }
    popTypeContext$1(oldIsType);
  }
  return eat$1(TokenType$1.arrow);
}

function flowParseSubscripts(startTokenIndex, noCalls = false) {
  if (
    state$1.tokens[state$1.tokens.length - 1].contextualKeyword === ContextualKeyword$1._async &&
    match$1(TokenType$1.lessThan)
  ) {
    const snapshot = state$1.snapshot();
    const wasArrow = parseAsyncArrowWithTypeParameters();
    if (wasArrow && !state$1.error) {
      return;
    }
    state$1.restoreFromSnapshot(snapshot);
  }

  baseParseSubscripts(startTokenIndex, noCalls);
}

// Returns true if there was an arrow function here.
function parseAsyncArrowWithTypeParameters() {
  state$1.scopeDepth++;
  const startTokenIndex = state$1.tokens.length;
  parseFunctionParams();
  if (!parseArrow()) {
    return false;
  }
  parseArrowExpression(startTokenIndex);
  return true;
}

function flowParseEnumDeclaration() {
  expectContextual$1(ContextualKeyword$1._enum);
  state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._enum;
  parseIdentifier();
  flowParseEnumBody();
}

function flowParseEnumBody() {
  if (eatContextual$1(ContextualKeyword$1._of)) {
    next$1();
  }
  expect$1(TokenType$1.braceL);
  flowParseEnumMembers();
  expect$1(TokenType$1.braceR);
}

function flowParseEnumMembers() {
  while (!match$1(TokenType$1.braceR) && !state$1.error) {
    if (eat$1(TokenType$1.ellipsis)) {
      break;
    }
    flowParseEnumMember();
    if (!match$1(TokenType$1.braceR)) {
      expect$1(TokenType$1.comma);
    }
  }
}

function flowParseEnumMember() {
  parseIdentifier();
  if (eat$1(TokenType$1.eq)) {
    // Flow enum values are always just one token (a string, number, or boolean literal).
    next$1();
  }
}

/* eslint max-len: 0 */

function parseTopLevel() {
  parseBlockBody(TokenType$1.eof, true);
  state$1.scopes.push(new Scope$1(0, state$1.tokens.length, true));
  if (state$1.scopeDepth !== 0) {
    throw new Error(`Invalid scope depth at end of file: ${state$1.scopeDepth}`);
  }
  return new File(state$1.tokens, state$1.scopes);
}

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

function parseStatement(declaration, isTopLevel) {
  if (isFlowEnabled) {
    if (flowTryParseStatement()) {
      return;
    }
  }
  if (match$1(TokenType$1.at)) {
    parseDecorators();
  }
  parseStatementContent(declaration, isTopLevel);
}

function parseStatementContent(declaration, isTopLevel) {
  if (isTypeScriptEnabled) {
    if (tsTryParseStatementContent()) {
      return;
    }
  }

  const starttype = state$1.type;
  const startTokenIndex = state$1.tokens.length;

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
    case TokenType$1._break:
    case TokenType$1._continue:
      parseBreakContinueStatement();
      return;
    case TokenType$1._debugger:
      parseDebuggerStatement();
      return;
    case TokenType$1._do:
      parseDoStatement();
      return;
    case TokenType$1._for:
      parseForStatement();
      return;
    case TokenType$1._function:
      if (lookaheadType$1() === TokenType$1.dot) break;
      if (!declaration) unexpected$1();
      parseFunctionStatement();
      state$1.tokens[startTokenIndex].isTopLevel = isTopLevel;
      return;

    case TokenType$1._class:
      if (!declaration) unexpected$1();
      parseClass(true);
      state$1.tokens[startTokenIndex].isTopLevel = isTopLevel;
      return;

    case TokenType$1._if:
      parseIfStatement();
      return;
    case TokenType$1._return:
      parseReturnStatement();
      state$1.tokens[startTokenIndex].isTopLevel = isTopLevel;
      return;
    case TokenType$1._switch:
      parseSwitchStatement();
      state$1.tokens[startTokenIndex].isTopLevel = isTopLevel;
      return;
    case TokenType$1._throw:
      parseThrowStatement();
      return;
    case TokenType$1._try:
      parseTryStatement();
      return;

    case TokenType$1._let:
    case TokenType$1._const:
      if (!declaration) unexpected$1(); // NOTE: falls through to _var

    case TokenType$1._var:
      parseVarStatement(starttype !== TokenType$1._var);
      return;

    case TokenType$1._while:
      parseWhileStatement();
      return;
    case TokenType$1.braceL:
      parseBlock();
      return;
    case TokenType$1.semi:
      parseEmptyStatement();
      return;
    case TokenType$1._export:
    case TokenType$1._import: {
      const nextType = lookaheadType$1();
      if (nextType === TokenType$1.parenL || nextType === TokenType$1.dot) {
        break;
      }
      next$1();
      if (starttype === TokenType$1._import) {
        parseImport();
      } else {
        parseExport();
      }
      return;
    }
    case TokenType$1.name:
      if (state$1.contextualKeyword === ContextualKeyword$1._async) {
        const functionStart = state$1.start;
        // peek ahead and see if next token is a function
        const snapshot = state$1.snapshot();
        next$1();
        if (match$1(TokenType$1._function) && !canInsertSemicolon$1()) {
          expect$1(TokenType$1._function);
          parseFunction(functionStart, true);
          return;
        } else {
          state$1.restoreFromSnapshot(snapshot);
        }
      } else if (
        state$1.contextualKeyword === ContextualKeyword$1._using &&
        !hasFollowingLineBreak$1() &&
        // Statements like `using[0]` and `using in foo` aren't actual using
        // declarations.
        lookaheadType$1() === TokenType$1.name
      ) {
        parseVarStatement(true);
        return;
      } else if (startsAwaitUsing()) {
        expectContextual$1(ContextualKeyword$1._await);
        parseVarStatement(true);
        return;
      }
  }

  // If the statement does not start with a statement keyword or a
  // brace, it's an ExpressionStatement or LabeledStatement. We
  // simply start parsing an expression, and afterwards, if the
  // next token is a colon and the expression was a simple
  // Identifier node, we switch to interpreting it as a label.
  const initialTokensLength = state$1.tokens.length;
  parseExpression();
  let simpleName = null;
  if (state$1.tokens.length === initialTokensLength + 1) {
    const token = state$1.tokens[state$1.tokens.length - 1];
    if (token.type === TokenType$1.name) {
      simpleName = token.contextualKeyword;
    }
  }
  
  state$1.tokens[startTokenIndex].isTopLevel = isTopLevel;

  if (simpleName == null) {
    semicolon$2();
    return;
  }
  if (eat$1(TokenType$1.colon)) {
    state$1.tokens[startTokenIndex].isTopLevel = isTopLevel;
    parseLabeledStatement();
  } else {
    // This was an identifier, so we might want to handle flow/typescript-specific cases.
    parseIdentifierStatement(simpleName);
  }
}

/**
 * Determine if we're positioned at an `await using` declaration.
 *
 * Note that this can happen either in place of a regular variable declaration
 * or in a loop body, and in both places, there are similar-looking cases where
 * we need to return false.
 *
 * Examples returning true:
 * await using foo = bar();
 * for (await using a of b) {}
 *
 * Examples returning false:
 * await using
 * await using + 1
 * await using instanceof T
 * for (await using;;) {}
 *
 * For now, we early return if we don't see `await`, then do a simple
 * backtracking-based lookahead for the `using` and identifier tokens. In the
 * future, this could be optimized with a character-based approach.
 */
function startsAwaitUsing() {
  if (!isContextual$1(ContextualKeyword$1._await)) {
    return false;
  }
  const snapshot = state$1.snapshot();
  // await
  next$1();
  if (!isContextual$1(ContextualKeyword$1._using) || hasPrecedingLineBreak$1()) {
    state$1.restoreFromSnapshot(snapshot);
    return false;
  }
  // using
  next$1();
  if (!match$1(TokenType$1.name) || hasPrecedingLineBreak$1()) {
    state$1.restoreFromSnapshot(snapshot);
    return false;
  }
  state$1.restoreFromSnapshot(snapshot);
  return true;
}

function parseDecorators() {
  while (match$1(TokenType$1.at)) {
    parseDecorator();
  }
}

function parseDecorator() {
  next$1();
  if (eat$1(TokenType$1.parenL)) {
    parseExpression();
    expect$1(TokenType$1.parenR);
  } else {
    parseIdentifier();
    while (eat$1(TokenType$1.dot)) {
      parseIdentifier();
    }
    parseMaybeDecoratorArguments();
  }
}

function parseMaybeDecoratorArguments() {
  if (isTypeScriptEnabled) {
    tsParseMaybeDecoratorArguments();
  } else {
    baseParseMaybeDecoratorArguments();
  }
}

function baseParseMaybeDecoratorArguments() {
  if (eat$1(TokenType$1.parenL)) {
    parseCallExpressionArguments();
  }
}

function parseBreakContinueStatement() {
  next$1();
  if (!isLineTerminator$1()) {
    parseIdentifier();
    semicolon$2();
  }
}

function parseDebuggerStatement() {
  next$1();
  semicolon$2();
}

function parseDoStatement() {
  next$1();
  parseStatement(false);
  expect$1(TokenType$1._while);
  parseParenExpression();
  eat$1(TokenType$1.semi);
}

function parseForStatement() {
  state$1.scopeDepth++;
  const startTokenIndex = state$1.tokens.length;
  parseAmbiguousForStatement();
  const endTokenIndex = state$1.tokens.length;
  state$1.scopes.push(new Scope$1(startTokenIndex, endTokenIndex, false));
  state$1.scopeDepth--;
}

/**
 * Determine if this token is a `using` declaration (explicit resource
 * management) as part of a loop.
 * https://github.com/tc39/proposal-explicit-resource-management
 */
function isUsingInLoop() {
  if (!isContextual$1(ContextualKeyword$1._using)) {
    return false;
  }
  // This must be `for (using of`, where `using` is the name of the loop
  // variable.
  if (isLookaheadContextual$1(ContextualKeyword$1._of)) {
    return false;
  }
  return true;
}

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.
function parseAmbiguousForStatement() {
  next$1();

  let forAwait = false;
  if (isContextual$1(ContextualKeyword$1._await)) {
    forAwait = true;
    next$1();
  }
  expect$1(TokenType$1.parenL);

  if (match$1(TokenType$1.semi)) {
    if (forAwait) {
      unexpected$1();
    }
    parseFor();
    return;
  }

  const isAwaitUsing = startsAwaitUsing();
  if (isAwaitUsing || match$1(TokenType$1._var) || match$1(TokenType$1._let) || match$1(TokenType$1._const) || isUsingInLoop()) {
    if (isAwaitUsing) {
      expectContextual$1(ContextualKeyword$1._await);
    }
    next$1();
    parseVar(true, state$1.type !== TokenType$1._var);
    if (match$1(TokenType$1._in) || isContextual$1(ContextualKeyword$1._of)) {
      parseForIn(forAwait);
      return;
    }
    parseFor();
    return;
  }

  parseExpression(true);
  if (match$1(TokenType$1._in) || isContextual$1(ContextualKeyword$1._of)) {
    parseForIn(forAwait);
    return;
  }
  if (forAwait) {
    unexpected$1();
  }
  parseFor();
}

function parseFunctionStatement() {
  const functionStart = state$1.start;
  next$1();
  parseFunction(functionStart, true);
}

function parseIfStatement() {
  next$1();
  parseParenExpression();
  parseStatement(false);
  if (eat$1(TokenType$1._else)) {
    parseStatement(false);
  }
}

function parseReturnStatement() {
  next$1();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (!isLineTerminator$1()) {
    parseExpression();
    semicolon$2();
  }
}

function parseSwitchStatement() {
  next$1();
  parseParenExpression();
  state$1.scopeDepth++;
  const startTokenIndex = state$1.tokens.length;
  expect$1(TokenType$1.braceL);

  // Don't bother validation; just go through any sequence of cases, defaults, and statements.
  while (!match$1(TokenType$1.braceR) && !state$1.error) {
    if (match$1(TokenType$1._case) || match$1(TokenType$1._default)) {
      const isCase = match$1(TokenType$1._case);
      next$1();
      if (isCase) {
        parseExpression();
      }
      expect$1(TokenType$1.colon);
    } else {
      parseStatement(true);
    }
  }
  next$1(); // Closing brace
  const endTokenIndex = state$1.tokens.length;
  state$1.scopes.push(new Scope$1(startTokenIndex, endTokenIndex, false));
  state$1.scopeDepth--;
}

function parseThrowStatement() {
  next$1();
  parseExpression();
  semicolon$2();
}

function parseCatchClauseParam() {
  parseBindingAtom(true /* isBlockScope */);

  if (isTypeScriptEnabled) {
    tsTryParseTypeAnnotation();
  }
}

function parseTryStatement() {
  next$1();

  parseBlock();

  if (match$1(TokenType$1._catch)) {
    next$1();
    let catchBindingStartTokenIndex = null;
    if (match$1(TokenType$1.parenL)) {
      state$1.scopeDepth++;
      catchBindingStartTokenIndex = state$1.tokens.length;
      expect$1(TokenType$1.parenL);
      parseCatchClauseParam();
      expect$1(TokenType$1.parenR);
    }
    parseBlock();
    if (catchBindingStartTokenIndex != null) {
      // We need a special scope for the catch binding which includes the binding itself and the
      // catch block.
      const endTokenIndex = state$1.tokens.length;
      state$1.scopes.push(new Scope$1(catchBindingStartTokenIndex, endTokenIndex, false));
      state$1.scopeDepth--;
    }
  }
  if (eat$1(TokenType$1._finally)) {
    parseBlock();
  }
}

function parseVarStatement(isBlockScope) {
  next$1();
  parseVar(false, isBlockScope);
  semicolon$2();
}

function parseWhileStatement() {
  next$1();
  parseParenExpression();
  parseStatement(false);
}

function parseEmptyStatement() {
  next$1();
}

function parseLabeledStatement() {
  parseStatement(true);
}

/**
 * Parse a statement starting with an identifier of the given name. Subclasses match on the name
 * to handle statements like "declare".
 */
function parseIdentifierStatement(contextualKeyword) {
  if (isTypeScriptEnabled) {
    tsParseIdentifierStatement(contextualKeyword);
  } else if (isFlowEnabled) {
    flowParseIdentifierStatement(contextualKeyword);
  } else {
    semicolon$2();
  }
}

// Parse a semicolon-enclosed block of statements.
function parseBlock(isFunctionScope = false, contextId = 0) {
  const startTokenIndex = state$1.tokens.length;
  state$1.scopeDepth++;
  expect$1(TokenType$1.braceL);
  if (contextId) {
    state$1.tokens[state$1.tokens.length - 1].contextId = contextId;
  }
  parseBlockBody(TokenType$1.braceR);
  if (contextId) {
    state$1.tokens[state$1.tokens.length - 1].contextId = contextId;
  }
  const endTokenIndex = state$1.tokens.length;
  state$1.scopes.push(new Scope$1(startTokenIndex, endTokenIndex, isFunctionScope));
  state$1.scopeDepth--;
}

function parseBlockBody(end, isTopLevel) {
  while (!eat$1(end) && !state$1.error) {
    parseStatement(true, isTopLevel);
  }
}

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

function parseFor() {
  expect$1(TokenType$1.semi);
  if (!match$1(TokenType$1.semi)) {
    parseExpression();
  }
  expect$1(TokenType$1.semi);
  if (!match$1(TokenType$1.parenR)) {
    parseExpression();
  }
  expect$1(TokenType$1.parenR);
  parseStatement(false);
}

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

function parseForIn(forAwait) {
  if (forAwait) {
    eatContextual$1(ContextualKeyword$1._of);
  } else {
    next$1();
  }
  parseExpression();
  expect$1(TokenType$1.parenR);
  parseStatement(false);
}

// Parse a list of variable declarations.

function parseVar(isFor, isBlockScope) {
  while (true) {
    parseVarHead(isBlockScope);
    if (eat$1(TokenType$1.eq)) {
      const eqIndex = state$1.tokens.length - 1;
      parseMaybeAssign(isFor);
      state$1.tokens[eqIndex].rhsEndIndex = state$1.tokens.length;
    }
    if (!eat$1(TokenType$1.comma)) {
      break;
    }
  }
}

function parseVarHead(isBlockScope) {
  parseBindingAtom(isBlockScope);
  if (isTypeScriptEnabled) {
    tsAfterParseVarHead();
  } else if (isFlowEnabled) {
    flowAfterParseVarHead();
  }
}

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

function parseFunction(
  functionStart,
  isStatement,
  optionalId = false,
) {
  if (match$1(TokenType$1.star)) {
    next$1();
  }

  if (isStatement && !optionalId && !match$1(TokenType$1.name) && !match$1(TokenType$1._yield)) {
    unexpected$1();
  }

  let nameScopeStartTokenIndex = null;

  if (match$1(TokenType$1.name)) {
    // Expression-style functions should limit their name's scope to the function body, so we make
    // a new function scope to enforce that.
    if (!isStatement) {
      nameScopeStartTokenIndex = state$1.tokens.length;
      state$1.scopeDepth++;
    }
    parseBindingIdentifier(false);
  }

  const startTokenIndex = state$1.tokens.length;
  state$1.scopeDepth++;
  parseFunctionParams();
  parseFunctionBodyAndFinish(functionStart);
  const endTokenIndex = state$1.tokens.length;
  // In addition to the block scope of the function body, we need a separate function-style scope
  // that includes the params.
  state$1.scopes.push(new Scope$1(startTokenIndex, endTokenIndex, true));
  state$1.scopeDepth--;
  if (nameScopeStartTokenIndex !== null) {
    state$1.scopes.push(new Scope$1(nameScopeStartTokenIndex, endTokenIndex, true));
    state$1.scopeDepth--;
  }
}

function parseFunctionParams(
  allowModifiers = false,
  funcContextId = 0,
) {
  if (isTypeScriptEnabled) {
    tsStartParseFunctionParams();
  } else if (isFlowEnabled) {
    flowStartParseFunctionParams();
  }

  expect$1(TokenType$1.parenL);
  if (funcContextId) {
    state$1.tokens[state$1.tokens.length - 1].contextId = funcContextId;
  }
  parseBindingList(
    TokenType$1.parenR,
    false /* isBlockScope */,
    false /* allowEmpty */,
    allowModifiers,
    funcContextId,
  );
  if (funcContextId) {
    state$1.tokens[state$1.tokens.length - 1].contextId = funcContextId;
  }
}

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

function parseClass(isStatement, optionalId = false) {
  // Put a context ID on the class keyword, the open-brace, and the close-brace, so that later
  // code can easily navigate to meaningful points on the class.
  const contextId = getNextContextId();

  next$1();
  state$1.tokens[state$1.tokens.length - 1].contextId = contextId;
  state$1.tokens[state$1.tokens.length - 1].isExpression = !isStatement;
  // Like with functions, we declare a special "name scope" from the start of the name to the end
  // of the class, but only with expression-style classes, to represent the fact that the name is
  // available to the body of the class but not an outer declaration.
  let nameScopeStartTokenIndex = null;
  if (!isStatement) {
    nameScopeStartTokenIndex = state$1.tokens.length;
    state$1.scopeDepth++;
  }
  parseClassId(isStatement, optionalId);
  parseClassSuper();
  const openBraceIndex = state$1.tokens.length;
  parseClassBody(contextId);
  if (state$1.error) {
    return;
  }
  state$1.tokens[openBraceIndex].contextId = contextId;
  state$1.tokens[state$1.tokens.length - 1].contextId = contextId;
  if (nameScopeStartTokenIndex !== null) {
    const endTokenIndex = state$1.tokens.length;
    state$1.scopes.push(new Scope$1(nameScopeStartTokenIndex, endTokenIndex, false));
    state$1.scopeDepth--;
  }
}

function isClassProperty() {
  return match$1(TokenType$1.eq) || match$1(TokenType$1.semi) || match$1(TokenType$1.braceR) || match$1(TokenType$1.bang) || match$1(TokenType$1.colon);
}

function isClassMethod() {
  return match$1(TokenType$1.parenL) || match$1(TokenType$1.lessThan);
}

function parseClassBody(classContextId) {
  expect$1(TokenType$1.braceL);

  while (!eat$1(TokenType$1.braceR) && !state$1.error) {
    if (eat$1(TokenType$1.semi)) {
      continue;
    }

    if (match$1(TokenType$1.at)) {
      parseDecorator();
      continue;
    }
    const memberStart = state$1.start;
    parseClassMember(memberStart, classContextId);
  }
}

function parseClassMember(memberStart, classContextId) {
  if (isTypeScriptEnabled) {
    tsParseModifiers([
      ContextualKeyword$1._declare,
      ContextualKeyword$1._public,
      ContextualKeyword$1._protected,
      ContextualKeyword$1._private,
      ContextualKeyword$1._override,
    ]);
  }
  let isStatic = false;
  if (match$1(TokenType$1.name) && state$1.contextualKeyword === ContextualKeyword$1._static) {
    parseIdentifier(); // eats 'static'
    if (isClassMethod()) {
      parseClassMethod(memberStart, /* isConstructor */ false);
      return;
    } else if (isClassProperty()) {
      parseClassProperty();
      return;
    }
    // otherwise something static
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._static;
    isStatic = true;

    if (match$1(TokenType$1.braceL)) {
      // This is a static block. Mark the word "static" with the class context ID for class element
      // detection and parse as a regular block.
      state$1.tokens[state$1.tokens.length - 1].contextId = classContextId;
      parseBlock();
      return;
    }
  }

  parseClassMemberWithIsStatic(memberStart, isStatic, classContextId);
}

function parseClassMemberWithIsStatic(
  memberStart,
  isStatic,
  classContextId,
) {
  if (isTypeScriptEnabled) {
    if (tsTryParseClassMemberWithIsStatic(isStatic)) {
      return;
    }
  }
  if (eat$1(TokenType$1.star)) {
    // a generator
    parseClassPropertyName(classContextId);
    parseClassMethod(memberStart, /* isConstructor */ false);
    return;
  }

  // Get the identifier name so we can tell if it's actually a keyword like "async", "get", or
  // "set".
  parseClassPropertyName(classContextId);
  let isConstructor = false;
  const token = state$1.tokens[state$1.tokens.length - 1];
  // We allow "constructor" as either an identifier or a string.
  if (token.contextualKeyword === ContextualKeyword$1._constructor) {
    isConstructor = true;
  }
  parsePostMemberNameModifiers();

  if (isClassMethod()) {
    parseClassMethod(memberStart, isConstructor);
  } else if (isClassProperty()) {
    parseClassProperty();
  } else if (token.contextualKeyword === ContextualKeyword$1._async && !isLineTerminator$1()) {
    state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._async;
    // an async method
    const isGenerator = match$1(TokenType$1.star);
    if (isGenerator) {
      next$1();
    }

    // The so-called parsed name would have been "async": get the real name.
    parseClassPropertyName(classContextId);
    parsePostMemberNameModifiers();
    parseClassMethod(memberStart, false /* isConstructor */);
  } else if (
    (token.contextualKeyword === ContextualKeyword$1._get ||
      token.contextualKeyword === ContextualKeyword$1._set) &&
    !(isLineTerminator$1() && match$1(TokenType$1.star))
  ) {
    if (token.contextualKeyword === ContextualKeyword$1._get) {
      state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._get;
    } else {
      state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._set;
    }
    // `get\n*` is an uninitialized property named 'get' followed by a generator.
    // a getter or setter
    // The so-called parsed name would have been "get/set": get the real name.
    parseClassPropertyName(classContextId);
    parseClassMethod(memberStart, /* isConstructor */ false);
  } else if (token.contextualKeyword === ContextualKeyword$1._accessor && !isLineTerminator$1()) {
    parseClassPropertyName(classContextId);
    parseClassProperty();
  } else if (isLineTerminator$1()) {
    // an uninitialized class property (due to ASI, since we don't otherwise recognize the next token)
    parseClassProperty();
  } else {
    unexpected$1();
  }
}

function parseClassMethod(functionStart, isConstructor) {
  if (isTypeScriptEnabled) {
    tsTryParseTypeParameters();
  } else if (isFlowEnabled) {
    if (match$1(TokenType$1.lessThan)) {
      flowParseTypeParameterDeclaration();
    }
  }
  parseMethod(functionStart, isConstructor);
}

// Return the name of the class property, if it is a simple identifier.
function parseClassPropertyName(classContextId) {
  parsePropertyName(classContextId);
}

function parsePostMemberNameModifiers() {
  if (isTypeScriptEnabled) {
    const oldIsType = pushTypeContext$1(0);
    eat$1(TokenType$1.question);
    popTypeContext$1(oldIsType);
  }
}

function parseClassProperty() {
  if (isTypeScriptEnabled) {
    eatTypeToken$1(TokenType$1.bang);
    tsTryParseTypeAnnotation();
  } else if (isFlowEnabled) {
    if (match$1(TokenType$1.colon)) {
      flowParseTypeAnnotation();
    }
  }

  if (match$1(TokenType$1.eq)) {
    const equalsTokenIndex = state$1.tokens.length;
    next$1();
    parseMaybeAssign();
    state$1.tokens[equalsTokenIndex].rhsEndIndex = state$1.tokens.length;
  }
  semicolon$2();
}

function parseClassId(isStatement, optionalId = false) {
  if (
    isTypeScriptEnabled &&
    (!isStatement || optionalId) &&
    isContextual$1(ContextualKeyword$1._implements)
  ) {
    return;
  }

  if (match$1(TokenType$1.name)) {
    parseBindingIdentifier(true);
  }

  if (isTypeScriptEnabled) {
    tsTryParseTypeParameters();
  } else if (isFlowEnabled) {
    if (match$1(TokenType$1.lessThan)) {
      flowParseTypeParameterDeclaration();
    }
  }
}

// Returns true if there was a superclass.
function parseClassSuper() {
  let hasSuper = false;
  if (eat$1(TokenType$1._extends)) {
    parseExprSubscripts();
    hasSuper = true;
  } else {
    hasSuper = false;
  }
  if (isTypeScriptEnabled) {
    tsAfterParseClassSuper(hasSuper);
  } else if (isFlowEnabled) {
    flowAfterParseClassSuper(hasSuper);
  }
}

// Parses module export declaration.

function parseExport() {
  const exportIndex = state$1.tokens.length - 1;
  if (isTypeScriptEnabled) {
    if (tsTryParseExport()) {
      return;
    }
  }
  // export * from '...'
  if (shouldParseExportStar()) {
    parseExportStar();
  } else if (isExportDefaultSpecifier()) {
    // export default from
    parseIdentifier();
    if (match$1(TokenType$1.comma) && lookaheadType$1() === TokenType$1.star) {
      expect$1(TokenType$1.comma);
      expect$1(TokenType$1.star);
      expectContextual$1(ContextualKeyword$1._as);
      parseIdentifier();
    } else {
      parseExportSpecifiersMaybe();
    }
    parseExportFrom();
  } else if (eat$1(TokenType$1._default)) {
    // export default ...
    parseExportDefaultExpression();
  } else if (shouldParseExportDeclaration()) {
    parseExportDeclaration();
  } else {
    // export { x, y as z } [from '...']
    parseExportSpecifiers();
    parseExportFrom();
  }
  state$1.tokens[exportIndex].rhsEndIndex = state$1.tokens.length;
}

function parseExportDefaultExpression() {
  if (isTypeScriptEnabled) {
    if (tsTryParseExportDefaultExpression()) {
      return;
    }
  }
  if (isFlowEnabled) {
    if (flowTryParseExportDefaultExpression()) {
      return;
    }
  }
  const functionStart = state$1.start;
  if (eat$1(TokenType$1._function)) {
    parseFunction(functionStart, true, true);
  } else if (isContextual$1(ContextualKeyword$1._async) && lookaheadType$1() === TokenType$1._function) {
    // async function declaration
    eatContextual$1(ContextualKeyword$1._async);
    eat$1(TokenType$1._function);
    parseFunction(functionStart, true, true);
  } else if (match$1(TokenType$1._class)) {
    parseClass(true, true);
  } else if (match$1(TokenType$1.at)) {
    parseDecorators();
    parseClass(true, true);
  } else {
    parseMaybeAssign();
    semicolon$2();
  }
}

function parseExportDeclaration() {
  if (isTypeScriptEnabled) {
    tsParseExportDeclaration();
  } else if (isFlowEnabled) {
    flowParseExportDeclaration();
  } else {
    parseStatement(true);
  }
}

function isExportDefaultSpecifier() {
  if (isTypeScriptEnabled && tsIsDeclarationStart()) {
    return false;
  } else if (isFlowEnabled && flowShouldDisallowExportDefaultSpecifier()) {
    return false;
  }
  if (match$1(TokenType$1.name)) {
    return state$1.contextualKeyword !== ContextualKeyword$1._async;
  }

  if (!match$1(TokenType$1._default)) {
    return false;
  }

  const _next = nextTokenStart$1();
  const lookahead = lookaheadTypeAndKeyword$1();
  const hasFrom =
    lookahead.type === TokenType$1.name && lookahead.contextualKeyword === ContextualKeyword$1._from;
  if (lookahead.type === TokenType$1.comma) {
    return true;
  }
  // lookahead again when `export default from` is seen
  if (hasFrom) {
    const nextAfterFrom = input.charCodeAt(nextTokenStartSince$1(_next + 4));
    return nextAfterFrom === charCodes$1.quotationMark || nextAfterFrom === charCodes$1.apostrophe;
  }
  return false;
}

function parseExportSpecifiersMaybe() {
  if (eat$1(TokenType$1.comma)) {
    parseExportSpecifiers();
  }
}

function parseExportFrom() {
  if (eatContextual$1(ContextualKeyword$1._from)) {
    parseExprAtom();
    maybeParseImportAttributes();
  }
  semicolon$2();
}

function shouldParseExportStar() {
  if (isFlowEnabled) {
    return flowShouldParseExportStar();
  } else {
    return match$1(TokenType$1.star);
  }
}

function parseExportStar() {
  if (isFlowEnabled) {
    flowParseExportStar();
  } else {
    baseParseExportStar();
  }
}

function baseParseExportStar() {
  expect$1(TokenType$1.star);

  if (isContextual$1(ContextualKeyword$1._as)) {
    parseExportNamespace();
  } else {
    parseExportFrom();
  }
}

function parseExportNamespace() {
  next$1();
  state$1.tokens[state$1.tokens.length - 1].type = TokenType$1._as;
  parseIdentifier();
  parseExportSpecifiersMaybe();
  parseExportFrom();
}

function shouldParseExportDeclaration() {
  return (
    (isTypeScriptEnabled && tsIsDeclarationStart()) ||
    (isFlowEnabled && flowShouldParseExportDeclaration()) ||
    state$1.type === TokenType$1._var ||
    state$1.type === TokenType$1._const ||
    state$1.type === TokenType$1._let ||
    state$1.type === TokenType$1._function ||
    state$1.type === TokenType$1._class ||
    isContextual$1(ContextualKeyword$1._async) ||
    match$1(TokenType$1.at)
  );
}

// Parses a comma-separated list of module exports.
function parseExportSpecifiers() {
  let first = true;

  // export { x, y as z } [from '...']
  expect$1(TokenType$1.braceL);

  while (!eat$1(TokenType$1.braceR) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      expect$1(TokenType$1.comma);
      if (eat$1(TokenType$1.braceR)) {
        break;
      }
    }
    parseExportSpecifier();
  }
}

function parseExportSpecifier() {
  if (isTypeScriptEnabled) {
    tsParseExportSpecifier();
    return;
  }
  parseIdentifier();
  state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ExportAccess;
  if (eatContextual$1(ContextualKeyword$1._as)) {
    parseIdentifier();
  }
}

/**
 * Starting at the `module` token in an import, determine if it was truly an
 * import reflection token or just looks like one.
 *
 * Returns true for:
 * import module foo from "foo";
 * import module from from "foo";
 *
 * Returns false for:
 * import module from "foo";
 * import module, {bar} from "foo";
 */
function isImportReflection() {
  const snapshot = state$1.snapshot();
  expectContextual$1(ContextualKeyword$1._module);
  if (eatContextual$1(ContextualKeyword$1._from)) {
    if (isContextual$1(ContextualKeyword$1._from)) {
      state$1.restoreFromSnapshot(snapshot);
      return true;
    } else {
      state$1.restoreFromSnapshot(snapshot);
      return false;
    }
  } else if (match$1(TokenType$1.comma)) {
    state$1.restoreFromSnapshot(snapshot);
    return false;
  } else {
    state$1.restoreFromSnapshot(snapshot);
    return true;
  }
}

/**
 * Eat the "module" token from the import reflection proposal.
 * https://github.com/tc39/proposal-import-reflection
 */
function parseMaybeImportReflection() {
  // isImportReflection does snapshot/restore, so only run it if we see the word
  // "module".
  if (isContextual$1(ContextualKeyword$1._module) && isImportReflection()) {
    next$1();
  }
}

// Parses import declaration.

function parseImport() {
  if (isTypeScriptEnabled && match$1(TokenType$1.name) && lookaheadType$1() === TokenType$1.eq) {
    tsParseImportEqualsDeclaration();
    return;
  }
  if (isTypeScriptEnabled && isContextual$1(ContextualKeyword$1._type)) {
    const lookahead = lookaheadTypeAndKeyword$1();
    if (lookahead.type === TokenType$1.name && lookahead.contextualKeyword !== ContextualKeyword$1._from) {
      // One of these `import type` cases:
      // import type T = require('T');
      // import type A from 'A';
      expectContextual$1(ContextualKeyword$1._type);
      if (lookaheadType$1() === TokenType$1.eq) {
        tsParseImportEqualsDeclaration();
        return;
      }
      // If this is an `import type...from` statement, then we already ate the
      // type token, so proceed to the regular import parser.
    } else if (lookahead.type === TokenType$1.star || lookahead.type === TokenType$1.braceL) {
      // One of these `import type` cases, in which case we can eat the type token
      // and proceed as normal:
      // import type * as A from 'A';
      // import type {a} from 'A';
      expectContextual$1(ContextualKeyword$1._type);
    }
    // Otherwise, we are importing the name "type".
  }

  // import '...'
  if (match$1(TokenType$1.string)) {
    parseExprAtom();
  } else {
    parseMaybeImportReflection();
    parseImportSpecifiers();
    expectContextual$1(ContextualKeyword$1._from);
    parseExprAtom();
  }
  maybeParseImportAttributes();
  semicolon$2();
}

// eslint-disable-next-line no-unused-vars
function shouldParseDefaultImport() {
  return match$1(TokenType$1.name);
}

function parseImportSpecifierLocal() {
  parseImportedIdentifier();
}

// Parses a comma-separated list of module imports.
function parseImportSpecifiers() {
  if (isFlowEnabled) {
    flowStartParseImportSpecifiers();
  }

  let first = true;
  if (shouldParseDefaultImport()) {
    // import defaultObj, { x, y as z } from '...'
    parseImportSpecifierLocal();

    if (!eat$1(TokenType$1.comma)) return;
  }

  if (match$1(TokenType$1.star)) {
    next$1();
    expectContextual$1(ContextualKeyword$1._as);

    parseImportSpecifierLocal();

    return;
  }

  expect$1(TokenType$1.braceL);
  while (!eat$1(TokenType$1.braceR) && !state$1.error) {
    if (first) {
      first = false;
    } else {
      // Detect an attempt to deep destructure
      if (eat$1(TokenType$1.colon)) {
        unexpected$1(
          "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
        );
      }

      expect$1(TokenType$1.comma);
      if (eat$1(TokenType$1.braceR)) {
        break;
      }
    }

    parseImportSpecifier();
  }
}

function parseImportSpecifier() {
  if (isTypeScriptEnabled) {
    tsParseImportSpecifier();
    return;
  }
  if (isFlowEnabled) {
    flowParseImportSpecifier();
    return;
  }
  parseImportedIdentifier();
  if (isContextual$1(ContextualKeyword$1._as)) {
    state$1.tokens[state$1.tokens.length - 1].identifierRole = IdentifierRole$1.ImportAccess;
    next$1();
    parseImportedIdentifier();
  }
}

/**
 * Parse import attributes like `with {type: "json"}`, or the legacy form
 * `assert {type: "json"}`.
 *
 * Import attributes technically have their own syntax, but are always parseable
 * as a plain JS object, so just do that for simplicity.
 */
function maybeParseImportAttributes() {
  if (match$1(TokenType$1._with) || (isContextual$1(ContextualKeyword$1._assert) && !hasPrecedingLineBreak$1())) {
    next$1();
    parseObj(false, false);
  }
}

function parseFile() {
  // If enabled, skip leading hashbang line.
  if (
    state$1.pos === 0 &&
    input.charCodeAt(0) === charCodes$1.numberSign &&
    input.charCodeAt(1) === charCodes$1.exclamationMark
  ) {
    skipLineComment$1(2);
  }
  nextToken$1();
  return parseTopLevel();
}

class File {
  
  

  constructor(tokens, scopes) {
    this.tokens = tokens;
    this.scopes = scopes;
  }
}

function parse(
  input,
  isJSXEnabled,
  isTypeScriptEnabled,
  isFlowEnabled,
) {
  if (isFlowEnabled && isTypeScriptEnabled) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }
  initParser(input, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled);
  const result = parseFile();
  if (state$1.error) {
    throw augmentError(state$1.error);
  }
  return result;
}

/**
 * Determine whether this optional chain or nullish coalescing operation has any await statements in
 * it. If so, we'll need to transpile to an async operation.
 *
 * We compute this by walking the length of the operation and returning true if we see an await
 * keyword used as a real await (rather than an object key or property access). Nested optional
 * chain/nullish operations need to be tracked but don't silence await, but a nested async function
 * (or any other nested scope) will make the await not count.
 */
function isAsyncOperation(tokens) {
  let index = tokens.currentIndex();
  let depth = 0;
  const startToken = tokens.currentToken();
  do {
    const token = tokens.tokens[index];
    if (token.isOptionalChainStart) {
      depth++;
    }
    if (token.isOptionalChainEnd) {
      depth--;
    }
    depth += token.numNullishCoalesceStarts;
    depth -= token.numNullishCoalesceEnds;

    if (
      token.contextualKeyword === ContextualKeyword$1._await &&
      token.identifierRole == null &&
      token.scopeDepth === startToken.scopeDepth
    ) {
      return true;
    }
    index += 1;
  } while (depth > 0 && index < tokens.tokens.length);
  return false;
}

class TokenProcessor {
   __init() {this.resultCode = "";}
  // Array mapping input token index to optional string index position in the
  // output code.
   __init2() {this.resultMappings = new Array(this.tokens.length);}
   __init3() {this.tokenIndex = 0;}

  constructor(
     code,
     tokens,
     isFlowEnabled,
     disableESTransforms,
     helperManager,
  ) {this.code = code;this.tokens = tokens;this.isFlowEnabled = isFlowEnabled;this.disableESTransforms = disableESTransforms;this.helperManager = helperManager;TokenProcessor.prototype.__init.call(this);TokenProcessor.prototype.__init2.call(this);TokenProcessor.prototype.__init3.call(this);}

  /**
   * Snapshot the token state in a way that can be restored later, useful for
   * things like lookahead.
   *
   * resultMappings do not need to be copied since in all use cases, they will
   * be overwritten anyway after restore.
   */
  snapshot() {
    return {
      resultCode: this.resultCode,
      tokenIndex: this.tokenIndex,
    };
  }

  restoreToSnapshot(snapshot) {
    this.resultCode = snapshot.resultCode;
    this.tokenIndex = snapshot.tokenIndex;
  }

  /**
   * Remove and return the code generated since the snapshot, leaving the
   * current token position in-place. Unlike most TokenProcessor operations,
   * this operation can result in input/output line number mismatches because
   * the removed code may contain newlines, so this operation should be used
   * sparingly.
   */
  dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot) {
    const result = this.resultCode.slice(snapshot.resultCode.length);
    this.resultCode = snapshot.resultCode;
    return result;
  }

  reset() {
    this.resultCode = "";
    this.resultMappings = new Array(this.tokens.length);
    this.tokenIndex = 0;
  }

  matchesContextualAtIndex(index, contextualKeyword) {
    return (
      this.matches1AtIndex(index, TokenType$1.name) &&
      this.tokens[index].contextualKeyword === contextualKeyword
    );
  }

  identifierNameAtIndex(index) {
    // TODO: We need to process escapes since technically you can have unicode escapes in variable
    // names.
    return this.identifierNameForToken(this.tokens[index]);
  }

  identifierNameAtRelativeIndex(relativeIndex) {
    return this.identifierNameForToken(this.tokenAtRelativeIndex(relativeIndex));
  }

  identifierName() {
    return this.identifierNameForToken(this.currentToken());
  }

  identifierNameForToken(token) {
    return this.code.slice(token.start, token.end);
  }

  rawCodeForToken(token) {
    return this.code.slice(token.start, token.end);
  }

  stringValueAtIndex(index) {
    return this.stringValueForToken(this.tokens[index]);
  }

  stringValue() {
    return this.stringValueForToken(this.currentToken());
  }

  stringValueForToken(token) {
    // This is used to identify when two imports are the same and to resolve TypeScript enum keys.
    // Ideally we'd process escapes within the strings, but for now we pretty much take the raw
    // code.
    return this.code.slice(token.start + 1, token.end - 1);
  }

  matches1AtIndex(index, t1) {
    return this.tokens[index].type === t1;
  }

  matches2AtIndex(index, t1, t2) {
    return this.tokens[index].type === t1 && this.tokens[index + 1].type === t2;
  }

  matches3AtIndex(index, t1, t2, t3) {
    return (
      this.tokens[index].type === t1 &&
      this.tokens[index + 1].type === t2 &&
      this.tokens[index + 2].type === t3
    );
  }

  matches1(t1) {
    return this.tokens[this.tokenIndex].type === t1;
  }

  matches2(t1, t2) {
    return this.tokens[this.tokenIndex].type === t1 && this.tokens[this.tokenIndex + 1].type === t2;
  }

  matches3(t1, t2, t3) {
    return (
      this.tokens[this.tokenIndex].type === t1 &&
      this.tokens[this.tokenIndex + 1].type === t2 &&
      this.tokens[this.tokenIndex + 2].type === t3
    );
  }

  matches4(t1, t2, t3, t4) {
    return (
      this.tokens[this.tokenIndex].type === t1 &&
      this.tokens[this.tokenIndex + 1].type === t2 &&
      this.tokens[this.tokenIndex + 2].type === t3 &&
      this.tokens[this.tokenIndex + 3].type === t4
    );
  }

  matches5(t1, t2, t3, t4, t5) {
    return (
      this.tokens[this.tokenIndex].type === t1 &&
      this.tokens[this.tokenIndex + 1].type === t2 &&
      this.tokens[this.tokenIndex + 2].type === t3 &&
      this.tokens[this.tokenIndex + 3].type === t4 &&
      this.tokens[this.tokenIndex + 4].type === t5
    );
  }

  matchesContextual(contextualKeyword) {
    return this.matchesContextualAtIndex(this.tokenIndex, contextualKeyword);
  }

  matchesContextIdAndLabel(type, contextId) {
    return this.matches1(type) && this.currentToken().contextId === contextId;
  }

  previousWhitespaceAndComments() {
    let whitespaceAndComments = this.code.slice(
      this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
      this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length,
    );
    if (this.isFlowEnabled) {
      whitespaceAndComments = whitespaceAndComments.replace(/@flow/g, "");
    }
    return whitespaceAndComments;
  }

  replaceToken(newCode) {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += newCode;
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

  replaceTokenTrimmingLeftWhitespace(newCode) {
    this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, "");
    this.appendTokenPrefix();
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += newCode;
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

  removeInitialToken() {
    this.replaceToken("");
  }

  removeToken() {
    this.replaceTokenTrimmingLeftWhitespace("");
  }

  /**
   * Remove all code until the next }, accounting for balanced braces.
   */
  removeBalancedCode() {
    let braceDepth = 0;
    while (!this.isAtEnd()) {
      if (this.matches1(TokenType$1.braceL)) {
        braceDepth++;
      } else if (this.matches1(TokenType$1.braceR)) {
        if (braceDepth === 0) {
          return;
        }
        braceDepth--;
      }
      this.removeToken();
    }
  }

  copyExpectedToken(tokenType) {
    if (this.tokens[this.tokenIndex].type !== tokenType) {
      throw new Error(`Expected token ${tokenType}`);
    }
    this.copyToken();
  }

  copyToken() {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end,
    );
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

  copyTokenWithPrefix(prefix) {
    this.resultCode += this.previousWhitespaceAndComments();
    this.appendTokenPrefix();
    this.resultCode += prefix;
    this.resultMappings[this.tokenIndex] = this.resultCode.length;
    this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end,
    );
    this.appendTokenSuffix();
    this.tokenIndex++;
  }

   appendTokenPrefix() {
    const token = this.currentToken();
    if (token.numNullishCoalesceStarts || token.isOptionalChainStart) {
      token.isAsyncOperation = isAsyncOperation(this);
    }
    if (this.disableESTransforms) {
      return;
    }
    if (token.numNullishCoalesceStarts) {
      for (let i = 0; i < token.numNullishCoalesceStarts; i++) {
        if (token.isAsyncOperation) {
          this.resultCode += "await ";
          this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce");
        } else {
          this.resultCode += this.helperManager.getHelperName("nullishCoalesce");
        }
        this.resultCode += "(";
      }
    }
    if (token.isOptionalChainStart) {
      if (token.isAsyncOperation) {
        this.resultCode += "await ";
      }
      if (this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === TokenType$1._delete) {
        if (token.isAsyncOperation) {
          this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete");
        } else {
          this.resultCode += this.helperManager.getHelperName("optionalChainDelete");
        }
      } else if (token.isAsyncOperation) {
        this.resultCode += this.helperManager.getHelperName("asyncOptionalChain");
      } else {
        this.resultCode += this.helperManager.getHelperName("optionalChain");
      }
      this.resultCode += "([";
    }
  }

   appendTokenSuffix() {
    const token = this.currentToken();
    if (token.isOptionalChainEnd && !this.disableESTransforms) {
      this.resultCode += "])";
    }
    if (token.numNullishCoalesceEnds && !this.disableESTransforms) {
      for (let i = 0; i < token.numNullishCoalesceEnds; i++) {
        this.resultCode += "))";
      }
    }
  }

  appendCode(code) {
    this.resultCode += code;
  }

  currentToken() {
    return this.tokens[this.tokenIndex];
  }

  currentTokenCode() {
    const token = this.currentToken();
    return this.code.slice(token.start, token.end);
  }

  tokenAtRelativeIndex(relativeIndex) {
    return this.tokens[this.tokenIndex + relativeIndex];
  }

  currentIndex() {
    return this.tokenIndex;
  }

  /**
   * Move to the next token. Only suitable in preprocessing steps. When
   * generating new code, you should use copyToken or removeToken.
   */
  nextToken() {
    if (this.tokenIndex === this.tokens.length) {
      throw new Error("Unexpectedly reached end of input.");
    }
    this.tokenIndex++;
  }

  previousToken() {
    this.tokenIndex--;
  }

  finish() {
    if (this.tokenIndex !== this.tokens.length) {
      throw new Error("Tried to finish processing tokens before reaching the end.");
    }
    this.resultCode += this.previousWhitespaceAndComments();
    return {code: this.resultCode, mappings: this.resultMappings};
  }

  isAtEnd() {
    return this.tokenIndex === this.tokens.length;
  }
}

/**
 * Get information about the class fields for this class, given a token processor pointing to the
 * open-brace at the start of the class.
 */
function getClassInfo(
  rootTransformer,
  tokens,
  nameManager,
  disableESTransforms,
) {
  const snapshot = tokens.snapshot();

  const headerInfo = processClassHeader(tokens);

  let constructorInitializerStatements = [];
  const instanceInitializerNames = [];
  const staticInitializerNames = [];
  let constructorInsertPos = null;
  const fields = [];
  const rangesToRemove = [];

  const classContextId = tokens.currentToken().contextId;
  if (classContextId == null) {
    throw new Error("Expected non-null class context ID on class open-brace.");
  }

  tokens.nextToken();
  while (!tokens.matchesContextIdAndLabel(TokenType$1.braceR, classContextId)) {
    if (tokens.matchesContextual(ContextualKeyword$1._constructor) && !tokens.currentToken().isType) {
      ({constructorInitializerStatements, constructorInsertPos} = processConstructor(tokens));
    } else if (tokens.matches1(TokenType$1.semi)) {
      if (!disableESTransforms) {
        rangesToRemove.push({start: tokens.currentIndex(), end: tokens.currentIndex() + 1});
      }
      tokens.nextToken();
    } else if (tokens.currentToken().isType) {
      tokens.nextToken();
    } else {
      // Either a method or a field. Skip to the identifier part.
      const statementStartIndex = tokens.currentIndex();
      let isStatic = false;
      let isESPrivate = false;
      let isDeclareOrAbstract = false;
      while (isAccessModifier(tokens.currentToken())) {
        if (tokens.matches1(TokenType$1._static)) {
          isStatic = true;
        }
        if (tokens.matches1(TokenType$1.hash)) {
          isESPrivate = true;
        }
        if (tokens.matches1(TokenType$1._declare) || tokens.matches1(TokenType$1._abstract)) {
          isDeclareOrAbstract = true;
        }
        tokens.nextToken();
      }
      if (isStatic && tokens.matches1(TokenType$1.braceL)) {
        // This is a static block, so don't process it in any special way.
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      if (isESPrivate) {
        // Sucrase doesn't attempt to transpile private fields; just leave them as-is.
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      if (
        tokens.matchesContextual(ContextualKeyword$1._constructor) &&
        !tokens.currentToken().isType
      ) {
        ({constructorInitializerStatements, constructorInsertPos} = processConstructor(tokens));
        continue;
      }

      const nameStartIndex = tokens.currentIndex();
      skipFieldName(tokens);
      if (tokens.matches1(TokenType$1.lessThan) || tokens.matches1(TokenType$1.parenL)) {
        // This is a method, so nothing to process.
        skipToNextClassElement(tokens, classContextId);
        continue;
      }
      // There might be a type annotation that we need to skip.
      while (tokens.currentToken().isType) {
        tokens.nextToken();
      }
      if (tokens.matches1(TokenType$1.eq)) {
        const equalsIndex = tokens.currentIndex();
        // This is an initializer, so we need to wrap in an initializer method.
        const valueEnd = tokens.currentToken().rhsEndIndex;
        if (valueEnd == null) {
          throw new Error("Expected rhsEndIndex on class field assignment.");
        }
        tokens.nextToken();
        while (tokens.currentIndex() < valueEnd) {
          rootTransformer.processToken();
        }
        let initializerName;
        if (isStatic) {
          initializerName = nameManager.claimFreeName("__initStatic");
          staticInitializerNames.push(initializerName);
        } else {
          initializerName = nameManager.claimFreeName("__init");
          instanceInitializerNames.push(initializerName);
        }
        // Fields start at the name, so `static x = 1;` has a field range of `x = 1;`.
        fields.push({
          initializerName,
          equalsIndex,
          start: nameStartIndex,
          end: tokens.currentIndex(),
        });
      } else if (!disableESTransforms || isDeclareOrAbstract) {
        // This is a regular field declaration, like `x;`. With the class transform enabled, we just
        // remove the line so that no output is produced. With the class transform disabled, we
        // usually want to preserve the declaration (but still strip types), but if the `declare`
        // or `abstract` keyword is specified, we should remove the line to avoid initializing the
        // value to undefined.
        rangesToRemove.push({start: statementStartIndex, end: tokens.currentIndex()});
      }
    }
  }

  tokens.restoreToSnapshot(snapshot);
  if (disableESTransforms) {
    // With ES transforms disabled, we don't want to transform regular class
    // field declarations, and we don't need to do any additional tricks to
    // reference the constructor for static init, but we still need to transform
    // TypeScript field initializers defined as constructor parameters and we
    // still need to remove `declare` fields. For now, we run the same code
    // path but omit any field information, as if the class had no field
    // declarations. In the future, when we fully drop the class fields
    // transform, we can simplify this code significantly.
    return {
      headerInfo,
      constructorInitializerStatements,
      instanceInitializerNames: [],
      staticInitializerNames: [],
      constructorInsertPos,
      fields: [],
      rangesToRemove,
    };
  } else {
    return {
      headerInfo,
      constructorInitializerStatements,
      instanceInitializerNames,
      staticInitializerNames,
      constructorInsertPos,
      fields,
      rangesToRemove,
    };
  }
}

/**
 * Move the token processor to the next method/field in the class.
 *
 * To do that, we seek forward to the next start of a class name (either an open
 * bracket or an identifier, or the closing curly brace), then seek backward to
 * include any access modifiers.
 */
function skipToNextClassElement(tokens, classContextId) {
  tokens.nextToken();
  while (tokens.currentToken().contextId !== classContextId) {
    tokens.nextToken();
  }
  while (isAccessModifier(tokens.tokenAtRelativeIndex(-1))) {
    tokens.previousToken();
  }
}

function processClassHeader(tokens) {
  const classToken = tokens.currentToken();
  const contextId = classToken.contextId;
  if (contextId == null) {
    throw new Error("Expected context ID on class token.");
  }
  const isExpression = classToken.isExpression;
  if (isExpression == null) {
    throw new Error("Expected isExpression on class token.");
  }
  let className = null;
  let hasSuperclass = false;
  tokens.nextToken();
  if (tokens.matches1(TokenType$1.name)) {
    className = tokens.identifierName();
  }
  while (!tokens.matchesContextIdAndLabel(TokenType$1.braceL, contextId)) {
    // If this has a superclass, there will always be an `extends` token. If it doesn't have a
    // superclass, only type parameters and `implements` clauses can show up here, all of which
    // consist only of type tokens. A declaration like `class A<B extends C> {` should *not* count
    // as having a superclass.
    if (tokens.matches1(TokenType$1._extends) && !tokens.currentToken().isType) {
      hasSuperclass = true;
    }
    tokens.nextToken();
  }
  return {isExpression, className, hasSuperclass};
}

/**
 * Extract useful information out of a constructor, starting at the "constructor" name.
 */
function processConstructor(tokens)


 {
  const constructorInitializerStatements = [];

  tokens.nextToken();
  const constructorContextId = tokens.currentToken().contextId;
  if (constructorContextId == null) {
    throw new Error("Expected context ID on open-paren starting constructor params.");
  }
  // Advance through parameters looking for access modifiers.
  while (!tokens.matchesContextIdAndLabel(TokenType$1.parenR, constructorContextId)) {
    if (tokens.currentToken().contextId === constructorContextId) {
      // Current token is an open paren or comma just before a param, so check
      // that param for access modifiers.
      tokens.nextToken();
      if (isAccessModifier(tokens.currentToken())) {
        tokens.nextToken();
        while (isAccessModifier(tokens.currentToken())) {
          tokens.nextToken();
        }
        const token = tokens.currentToken();
        if (token.type !== TokenType$1.name) {
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        }
        const name = tokens.identifierNameForToken(token);
        constructorInitializerStatements.push(`this.${name} = ${name}`);
      }
    } else {
      tokens.nextToken();
    }
  }
  // )
  tokens.nextToken();
  // Constructor type annotations are invalid, but skip them anyway since
  // they're easy to skip.
  while (tokens.currentToken().isType) {
    tokens.nextToken();
  }
  let constructorInsertPos = tokens.currentIndex();

  // Advance through body looking for a super call.
  let foundSuperCall = false;
  while (!tokens.matchesContextIdAndLabel(TokenType$1.braceR, constructorContextId)) {
    if (!foundSuperCall && tokens.matches2(TokenType$1._super, TokenType$1.parenL)) {
      tokens.nextToken();
      const superCallContextId = tokens.currentToken().contextId;
      if (superCallContextId == null) {
        throw new Error("Expected a context ID on the super call");
      }
      while (!tokens.matchesContextIdAndLabel(TokenType$1.parenR, superCallContextId)) {
        tokens.nextToken();
      }
      constructorInsertPos = tokens.currentIndex();
      foundSuperCall = true;
    }
    tokens.nextToken();
  }
  // }
  tokens.nextToken();

  return {constructorInitializerStatements, constructorInsertPos};
}

/**
 * Determine if this is any token that can go before the name in a method/field.
 */
function isAccessModifier(token) {
  return [
    TokenType$1._async,
    TokenType$1._get,
    TokenType$1._set,
    TokenType$1.plus,
    TokenType$1.minus,
    TokenType$1._readonly,
    TokenType$1._static,
    TokenType$1._public,
    TokenType$1._private,
    TokenType$1._protected,
    TokenType$1._override,
    TokenType$1._abstract,
    TokenType$1.star,
    TokenType$1._declare,
    TokenType$1.hash,
  ].includes(token.type);
}

/**
 * The next token or set of tokens is either an identifier or an expression in square brackets, for
 * a method or field name.
 */
function skipFieldName(tokens) {
  if (tokens.matches1(TokenType$1.bracketL)) {
    const startToken = tokens.currentToken();
    const classContextId = startToken.contextId;
    if (classContextId == null) {
      throw new Error("Expected class context ID on computed name open bracket.");
    }
    while (!tokens.matchesContextIdAndLabel(TokenType$1.bracketR, classContextId)) {
      tokens.nextToken();
    }
    tokens.nextToken();
  } else {
    tokens.nextToken();
  }
}

function elideImportEquals(tokens) {
  // import
  tokens.removeInitialToken();
  // name
  tokens.removeToken();
  // =
  tokens.removeToken();
  // name or require
  tokens.removeToken();
  // Handle either `import A = require('A')` or `import A = B.C.D`.
  if (tokens.matches1(TokenType$1.parenL)) {
    // (
    tokens.removeToken();
    // path string
    tokens.removeToken();
    // )
    tokens.removeToken();
  } else {
    while (tokens.matches1(TokenType$1.dot)) {
      // .
      tokens.removeToken();
      // name
      tokens.removeToken();
    }
  }
}

const EMPTY_DECLARATION_INFO = {
  typeDeclarations: new Set(),
  valueDeclarations: new Set(),
};

/**
 * Get all top-level identifiers that should be preserved when exported in TypeScript.
 *
 * Examples:
 * - If an identifier is declared as `const x`, then `export {x}` should be preserved.
 * - If it's declared as `type x`, then `export {x}` should be removed.
 * - If it's declared as both `const x` and `type x`, then the export should be preserved.
 * - Classes and enums should be preserved (even though they also introduce types).
 * - Imported identifiers should be preserved since we don't have enough information to
 *   rule them out. --isolatedModules disallows re-exports, which catches errors here.
 */
function getDeclarationInfo(tokens) {
  const typeDeclarations = new Set();
  const valueDeclarations = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (token.type === TokenType$1.name && isTopLevelDeclaration$1(token)) {
      if (token.isType) {
        typeDeclarations.add(tokens.identifierNameForToken(token));
      } else {
        valueDeclarations.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return {typeDeclarations, valueDeclarations};
}

/**
 * Starting at `export {`, look ahead and return `true` if this is an
 * `export {...} from` statement and `false` if this is a plain multi-export.
 */
function isExportFrom(tokens) {
  let closeBraceIndex = tokens.currentIndex();
  while (!tokens.matches1AtIndex(closeBraceIndex, TokenType$1.braceR)) {
    closeBraceIndex++;
  }
  return (
    tokens.matchesContextualAtIndex(closeBraceIndex + 1, ContextualKeyword$1._from) &&
    tokens.matches1AtIndex(closeBraceIndex + 2, TokenType$1.string)
  );
}

/**
 * Starting at a potential `with` or (legacy) `assert` token, remove the import
 * attributes if they exist.
 */
function removeMaybeImportAttributes(tokens) {
  if (
    tokens.matches2(TokenType$1._with, TokenType$1.braceL) ||
    (tokens.matches2(TokenType$1.name, TokenType$1.braceL) && tokens.matchesContextual(ContextualKeyword$1._assert))
  ) {
    // assert
    tokens.removeToken();
    // {
    tokens.removeToken();
    tokens.removeBalancedCode();
    // }
    tokens.removeToken();
  }
}

/**
 * Common method sharing code between CJS and ESM cases, since they're the same here.
 */
function shouldElideDefaultExport(
  isTypeScriptTransformEnabled,
  keepUnusedImports,
  tokens,
  declarationInfo,
) {
  if (!isTypeScriptTransformEnabled || keepUnusedImports) {
    return false;
  }
  const exportToken = tokens.currentToken();
  if (exportToken.rhsEndIndex == null) {
    throw new Error("Expected non-null rhsEndIndex on export token.");
  }
  // The export must be of the form `export default a` or `export default a;`.
  const numTokens = exportToken.rhsEndIndex - tokens.currentIndex();
  if (
    numTokens !== 3 &&
    !(numTokens === 4 && tokens.matches1AtIndex(exportToken.rhsEndIndex - 1, TokenType$1.semi))
  ) {
    return false;
  }
  const identifierToken = tokens.tokenAtRelativeIndex(2);
  if (identifierToken.type !== TokenType$1.name) {
    return false;
  }
  const exportedName = tokens.identifierNameForToken(identifierToken);
  return (
    declarationInfo.typeDeclarations.has(exportedName) &&
    !declarationInfo.valueDeclarations.has(exportedName)
  );
}

/**
 * Class for editing import statements when we are transforming to commonjs.
 */
class CJSImportTransformer extends Transformer$2 {
   __init() {this.hadExport = false;}
   __init2() {this.hadNamedExport = false;}
   __init3() {this.hadDefaultExport = false;}
  

  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     nameManager,
     helperManager,
     reactHotLoaderTransformer,
     enableLegacyBabel5ModuleInterop,
     enableLegacyTypeScriptModuleInterop,
     isTypeScriptTransformEnabled,
     isFlowTransformEnabled,
     preserveDynamicImport,
     keepUnusedImports,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.nameManager = nameManager;this.helperManager = helperManager;this.reactHotLoaderTransformer = reactHotLoaderTransformer;this.enableLegacyBabel5ModuleInterop = enableLegacyBabel5ModuleInterop;this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.isFlowTransformEnabled = isFlowTransformEnabled;this.preserveDynamicImport = preserveDynamicImport;this.keepUnusedImports = keepUnusedImports;CJSImportTransformer.prototype.__init.call(this);CJSImportTransformer.prototype.__init2.call(this);CJSImportTransformer.prototype.__init3.call(this);    this.declarationInfo = isTypeScriptTransformEnabled
      ? getDeclarationInfo(tokens)
      : EMPTY_DECLARATION_INFO;
  }

  getPrefixCode() {
    let prefix = "";
    if (this.hadExport) {
      prefix += 'Object.defineProperty(exports, "__esModule", {value: true});';
    }
    return prefix;
  }

  getSuffixCode() {
    if (this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport) {
      return "\nmodule.exports = exports.default;\n";
    }
    return "";
  }

  process() {
    // TypeScript `import foo = require('foo');` should always just be translated to plain require.
    if (this.tokens.matches3(TokenType$1._import, TokenType$1.name, TokenType$1.eq)) {
      return this.processImportEquals();
    }
    if (this.tokens.matches1(TokenType$1._import)) {
      this.processImport();
      return true;
    }
    if (this.tokens.matches2(TokenType$1._export, TokenType$1.eq)) {
      this.tokens.replaceToken("module.exports");
      return true;
    }
    if (this.tokens.matches1(TokenType$1._export) && !this.tokens.currentToken().isType) {
      this.hadExport = true;
      return this.processExport();
    }
    if (this.tokens.matches2(TokenType$1.name, TokenType$1.postIncDec)) {
      // Fall through to normal identifier matching if this doesn't apply.
      if (this.processPostIncDec()) {
        return true;
      }
    }
    if (this.tokens.matches1(TokenType$1.name) || this.tokens.matches1(TokenType$1.jsxName)) {
      return this.processIdentifier();
    }
    if (this.tokens.matches1(TokenType$1.eq)) {
      return this.processAssignment();
    }
    if (this.tokens.matches1(TokenType$1.assign)) {
      return this.processComplexAssignment();
    }
    if (this.tokens.matches1(TokenType$1.preIncDec)) {
      return this.processPreIncDec();
    }
    return false;
  }

   processImportEquals() {
    const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    if (this.importProcessor.shouldAutomaticallyElideImportedName(importName)) {
      // If this name is only used as a type, elide the whole import.
      elideImportEquals(this.tokens);
    } else {
      // Otherwise, switch `import` to `const`.
      this.tokens.replaceToken("const");
    }
    return true;
  }

  /**
   * Transform this:
   * import foo, {bar} from 'baz';
   * into
   * var _baz = require('baz'); var _baz2 = _interopRequireDefault(_baz);
   *
   * The import code was already generated in the import preprocessing step, so
   * we just need to look it up.
   */
   processImport() {
    if (this.tokens.matches2(TokenType$1._import, TokenType$1.parenL)) {
      if (this.preserveDynamicImport) {
        // Bail out, only making progress for this one token.
        this.tokens.copyToken();
        return;
      }
      const requireWrapper = this.enableLegacyTypeScriptModuleInterop
        ? ""
        : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
      this.tokens.replaceToken(`Promise.resolve().then(() => ${requireWrapper}require`);
      const contextId = this.tokens.currentToken().contextId;
      if (contextId == null) {
        throw new Error("Expected context ID on dynamic import invocation.");
      }
      this.tokens.copyToken();
      while (!this.tokens.matchesContextIdAndLabel(TokenType$1.parenR, contextId)) {
        this.rootTransformer.processToken();
      }
      this.tokens.replaceToken(requireWrapper ? ")))" : "))");
      return;
    }

    const shouldElideImport = this.removeImportAndDetectIfShouldElide();
    if (shouldElideImport) {
      this.tokens.removeToken();
    } else {
      const path = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
      this.tokens.appendCode(this.importProcessor.claimImportCode(path));
    }
    removeMaybeImportAttributes(this.tokens);
    if (this.tokens.matches1(TokenType$1.semi)) {
      this.tokens.removeToken();
    }
  }

  /**
   * Erase this import (since any CJS output would be completely different), and
   * return true if this import is should be elided due to being a type-only
   * import. Such imports will not be emitted at all to avoid side effects.
   *
   * Import elision only happens with the TypeScript or Flow transforms enabled.
   *
   * TODO: This function has some awkward overlap with
   *  CJSImportProcessor.pruneTypeOnlyImports , and the two should be unified.
   *  That function handles TypeScript implicit import name elision, and removes
   *  an import if all typical imported names (without `type`) are removed due
   *  to being type-only imports. This function handles Flow import removal and
   *  properly distinguishes `import 'foo'` from `import {} from 'foo'` for TS
   *  purposes.
   *
   * The position should end at the import string.
   */
   removeImportAndDetectIfShouldElide() {
    this.tokens.removeInitialToken();
    if (
      this.tokens.matchesContextual(ContextualKeyword$1._type) &&
      !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType$1.comma) &&
      !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword$1._from)
    ) {
      // This is an "import type" statement, so exit early.
      this.removeRemainingImport();
      return true;
    }

    if (this.tokens.matches1(TokenType$1.name) || this.tokens.matches1(TokenType$1.star)) {
      // We have a default import or namespace import, so there must be some
      // non-type import.
      this.removeRemainingImport();
      return false;
    }

    if (this.tokens.matches1(TokenType$1.string)) {
      // This is a bare import, so we should proceed with the import.
      return false;
    }

    let foundNonTypeImport = false;
    let foundAnyNamedImport = false;
    while (!this.tokens.matches1(TokenType$1.string)) {
      // Check if any named imports are of the form "foo" or "foo as bar", with
      // no leading "type".
      if (
        (!foundNonTypeImport && this.tokens.matches1(TokenType$1.braceL)) ||
        this.tokens.matches1(TokenType$1.comma)
      ) {
        this.tokens.removeToken();
        if (!this.tokens.matches1(TokenType$1.braceR)) {
          foundAnyNamedImport = true;
        }
        if (
          this.tokens.matches2(TokenType$1.name, TokenType$1.comma) ||
          this.tokens.matches2(TokenType$1.name, TokenType$1.braceR) ||
          this.tokens.matches4(TokenType$1.name, TokenType$1.name, TokenType$1.name, TokenType$1.comma) ||
          this.tokens.matches4(TokenType$1.name, TokenType$1.name, TokenType$1.name, TokenType$1.braceR)
        ) {
          foundNonTypeImport = true;
        }
      }
      this.tokens.removeToken();
    }
    if (this.keepUnusedImports) {
      return false;
    }
    if (this.isTypeScriptTransformEnabled) {
      return !foundNonTypeImport;
    } else if (this.isFlowTransformEnabled) {
      // In Flow, unlike TS, `import {} from 'foo';` preserves the import.
      return foundAnyNamedImport && !foundNonTypeImport;
    } else {
      return false;
    }
  }

   removeRemainingImport() {
    while (!this.tokens.matches1(TokenType$1.string)) {
      this.tokens.removeToken();
    }
  }

   processIdentifier() {
    const token = this.tokens.currentToken();
    if (token.shadowsGlobal) {
      return false;
    }

    if (token.identifierRole === IdentifierRole$1.ObjectShorthand) {
      return this.processObjectShorthand();
    }

    if (token.identifierRole !== IdentifierRole$1.Access) {
      return false;
    }
    const replacement = this.importProcessor.getIdentifierReplacement(
      this.tokens.identifierNameForToken(token),
    );
    if (!replacement) {
      return false;
    }
    // Tolerate any number of closing parens while looking for an opening paren
    // that indicates a function call.
    let possibleOpenParenIndex = this.tokens.currentIndex() + 1;
    while (
      possibleOpenParenIndex < this.tokens.tokens.length &&
      this.tokens.tokens[possibleOpenParenIndex].type === TokenType$1.parenR
    ) {
      possibleOpenParenIndex++;
    }
    // Avoid treating imported functions as methods of their `exports` object
    // by using `(0, f)` when the identifier is in a paren expression. Else
    // use `Function.prototype.call` when the identifier is a guaranteed
    // function call. When using `call`, pass undefined as the context.
    if (this.tokens.tokens[possibleOpenParenIndex].type === TokenType$1.parenL) {
      if (
        this.tokens.tokenAtRelativeIndex(1).type === TokenType$1.parenL &&
        this.tokens.tokenAtRelativeIndex(-1).type !== TokenType$1._new
      ) {
        this.tokens.replaceToken(`${replacement}.call(void 0, `);
        // Remove the old paren.
        this.tokens.removeToken();
        // Balance out the new paren.
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType$1.parenR);
      } else {
        // See here: http://2ality.com/2015/12/references.html
        this.tokens.replaceToken(`(0, ${replacement})`);
      }
    } else {
      this.tokens.replaceToken(replacement);
    }
    return true;
  }

  processObjectShorthand() {
    const identifier = this.tokens.identifierName();
    const replacement = this.importProcessor.getIdentifierReplacement(identifier);
    if (!replacement) {
      return false;
    }
    this.tokens.replaceToken(`${identifier}: ${replacement}`);
    return true;
  }

  processExport() {
    if (
      this.tokens.matches2(TokenType$1._export, TokenType$1._enum) ||
      this.tokens.matches3(TokenType$1._export, TokenType$1._const, TokenType$1._enum)
    ) {
      this.hadNamedExport = true;
      // Let the TypeScript transform handle it.
      return false;
    }
    if (this.tokens.matches2(TokenType$1._export, TokenType$1._default)) {
      if (this.tokens.matches3(TokenType$1._export, TokenType$1._default, TokenType$1._enum)) {
        this.hadDefaultExport = true;
        // Flow export default enums need some special handling, so handle them
        // in that tranform rather than this one.
        return false;
      }
      this.processExportDefault();
      return true;
    } else if (this.tokens.matches2(TokenType$1._export, TokenType$1.braceL)) {
      this.processExportBindings();
      return true;
    } else if (
      this.tokens.matches2(TokenType$1._export, TokenType$1.name) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword$1._type)
    ) {
      // export type {a};
      // export type {a as b};
      // export type {a} from './b';
      // export type * from './b';
      // export type * as ns from './b';
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      if (this.tokens.matches1(TokenType$1.braceL)) {
        while (!this.tokens.matches1(TokenType$1.braceR)) {
          this.tokens.removeToken();
        }
        this.tokens.removeToken();
      } else {
        // *
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType$1._as)) {
          // as
          this.tokens.removeToken();
          // ns
          this.tokens.removeToken();
        }
      }
      // Remove type re-export `... } from './T'`
      if (
        this.tokens.matchesContextual(ContextualKeyword$1._from) &&
        this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType$1.string)
      ) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        removeMaybeImportAttributes(this.tokens);
      }
      return true;
    }
    this.hadNamedExport = true;
    if (
      this.tokens.matches2(TokenType$1._export, TokenType$1._var) ||
      this.tokens.matches2(TokenType$1._export, TokenType$1._let) ||
      this.tokens.matches2(TokenType$1._export, TokenType$1._const)
    ) {
      this.processExportVar();
      return true;
    } else if (
      this.tokens.matches2(TokenType$1._export, TokenType$1._function) ||
      // export async function
      this.tokens.matches3(TokenType$1._export, TokenType$1.name, TokenType$1._function)
    ) {
      this.processExportFunction();
      return true;
    } else if (
      this.tokens.matches2(TokenType$1._export, TokenType$1._class) ||
      this.tokens.matches3(TokenType$1._export, TokenType$1._abstract, TokenType$1._class) ||
      this.tokens.matches2(TokenType$1._export, TokenType$1.at)
    ) {
      this.processExportClass();
      return true;
    } else if (this.tokens.matches2(TokenType$1._export, TokenType$1.star)) {
      this.processExportStar();
      return true;
    } else {
      throw new Error("Unrecognized export syntax.");
    }
  }

   processAssignment() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index - 1];
    // If the LHS is a type identifier, this must be a declaration like `let a: b = c;`,
    // with `b` as the identifier, so nothing needs to be done in that case.
    if (identifierToken.isType || identifierToken.type !== TokenType$1.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 2 && this.tokens.matches1AtIndex(index - 2, TokenType$1.dot)) {
      return false;
    }
    if (index >= 2 && [TokenType$1._var, TokenType$1._let, TokenType$1._const].includes(this.tokens.tokens[index - 2].type)) {
      // Declarations don't need an extra assignment. This doesn't avoid the
      // assignment for comma-separated declarations, but it's still correct
      // since the assignment is just redundant.
      return false;
    }
    const assignmentSnippet = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(identifierToken),
    );
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.copyToken();
    this.tokens.appendCode(` ${assignmentSnippet} =`);
    return true;
  }

  /**
   * Process something like `a += 3`, where `a` might be an exported value.
   */
   processComplexAssignment() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index - 1];
    if (identifierToken.type !== TokenType$1.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 2 && this.tokens.matches1AtIndex(index - 2, TokenType$1.dot)) {
      return false;
    }
    const assignmentSnippet = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(identifierToken),
    );
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.appendCode(` = ${assignmentSnippet}`);
    this.tokens.copyToken();
    return true;
  }

  /**
   * Process something like `++a`, where `a` might be an exported value.
   */
   processPreIncDec() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index + 1];
    if (identifierToken.type !== TokenType$1.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    // Ignore things like ++a.b and ++a[b] and ++a().b.
    if (
      index + 2 < this.tokens.tokens.length &&
      (this.tokens.matches1AtIndex(index + 2, TokenType$1.dot) ||
        this.tokens.matches1AtIndex(index + 2, TokenType$1.bracketL) ||
        this.tokens.matches1AtIndex(index + 2, TokenType$1.parenL))
    ) {
      return false;
    }
    const identifierName = this.tokens.identifierNameForToken(identifierToken);
    const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
    if (!assignmentSnippet) {
      return false;
    }
    this.tokens.appendCode(`${assignmentSnippet} = `);
    this.tokens.copyToken();
    return true;
  }

  /**
   * Process something like `a++`, where `a` might be an exported value.
   * This starts at the `a`, not at the `++`.
   */
   processPostIncDec() {
    const index = this.tokens.currentIndex();
    const identifierToken = this.tokens.tokens[index];
    const operatorToken = this.tokens.tokens[index + 1];
    if (identifierToken.type !== TokenType$1.name) {
      return false;
    }
    if (identifierToken.shadowsGlobal) {
      return false;
    }
    if (index >= 1 && this.tokens.matches1AtIndex(index - 1, TokenType$1.dot)) {
      return false;
    }
    const identifierName = this.tokens.identifierNameForToken(identifierToken);
    const assignmentSnippet = this.importProcessor.resolveExportBinding(identifierName);
    if (!assignmentSnippet) {
      return false;
    }
    const operatorCode = this.tokens.rawCodeForToken(operatorToken);
    // We might also replace the identifier with something like exports.x, so
    // do that replacement here as well.
    const base = this.importProcessor.getIdentifierReplacement(identifierName) || identifierName;
    if (operatorCode === "++") {
      this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} + 1, ${base} - 1)`);
    } else if (operatorCode === "--") {
      this.tokens.replaceToken(`(${base} = ${assignmentSnippet} = ${base} - 1, ${base} + 1)`);
    } else {
      throw new Error(`Unexpected operator: ${operatorCode}`);
    }
    this.tokens.removeToken();
    return true;
  }

   processExportDefault() {
    let exportedRuntimeValue = true;
    if (
      this.tokens.matches4(TokenType$1._export, TokenType$1._default, TokenType$1._function, TokenType$1.name) ||
      // export default async function
      (this.tokens.matches5(TokenType$1._export, TokenType$1._default, TokenType$1.name, TokenType$1._function, TokenType$1.name) &&
        this.tokens.matchesContextualAtIndex(
          this.tokens.currentIndex() + 2,
          ContextualKeyword$1._async,
        ))
    ) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      // Named function export case: change it to a top-level function
      // declaration followed by exports statement.
      const name = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${name};`);
    } else if (
      this.tokens.matches4(TokenType$1._export, TokenType$1._default, TokenType$1._class, TokenType$1.name) ||
      this.tokens.matches5(TokenType$1._export, TokenType$1._default, TokenType$1._abstract, TokenType$1._class, TokenType$1.name) ||
      this.tokens.matches3(TokenType$1._export, TokenType$1._default, TokenType$1.at)
    ) {
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.copyDecorators();
      if (this.tokens.matches1(TokenType$1._abstract)) {
        this.tokens.removeToken();
      }
      const name = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${name};`);
      // After this point, this is a plain "export default E" statement.
    } else if (
      shouldElideDefaultExport(
        this.isTypeScriptTransformEnabled,
        this.keepUnusedImports,
        this.tokens,
        this.declarationInfo,
      )
    ) {
      // If the exported value is just an identifier and should be elided by TypeScript
      // rules, then remove it entirely. It will always have the form `export default e`,
      // where `e` is an identifier.
      exportedRuntimeValue = false;
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.tokens.removeToken();
    } else if (this.reactHotLoaderTransformer) {
      // We need to assign E to a variable. Change "export default E" to
      // "let _default; exports.default = _default = E"
      const defaultVarName = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${defaultVarName}; exports.`);
      this.tokens.copyToken();
      this.tokens.appendCode(` = ${defaultVarName} =`);
      this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
    } else {
      // Change "export default E" to "exports.default = E"
      this.tokens.replaceToken("exports.");
      this.tokens.copyToken();
      this.tokens.appendCode(" =");
    }
    if (exportedRuntimeValue) {
      this.hadDefaultExport = true;
    }
  }

   copyDecorators() {
    while (this.tokens.matches1(TokenType$1.at)) {
      this.tokens.copyToken();
      if (this.tokens.matches1(TokenType$1.parenL)) {
        this.tokens.copyExpectedToken(TokenType$1.parenL);
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType$1.parenR);
      } else {
        this.tokens.copyExpectedToken(TokenType$1.name);
        while (this.tokens.matches1(TokenType$1.dot)) {
          this.tokens.copyExpectedToken(TokenType$1.dot);
          this.tokens.copyExpectedToken(TokenType$1.name);
        }
        if (this.tokens.matches1(TokenType$1.parenL)) {
          this.tokens.copyExpectedToken(TokenType$1.parenL);
          this.rootTransformer.processBalancedCode();
          this.tokens.copyExpectedToken(TokenType$1.parenR);
        }
      }
    }
  }

  /**
   * Transform a declaration like `export var`, `export let`, or `export const`.
   */
   processExportVar() {
    if (this.isSimpleExportVar()) {
      this.processSimpleExportVar();
    } else {
      this.processComplexExportVar();
    }
  }

  /**
   * Determine if the export is of the form:
   * export var/let/const [varName] = [expr];
   * In other words, determine if function name inference might apply.
   */
   isSimpleExportVar() {
    let tokenIndex = this.tokens.currentIndex();
    // export
    tokenIndex++;
    // var/let/const
    tokenIndex++;
    if (!this.tokens.matches1AtIndex(tokenIndex, TokenType$1.name)) {
      return false;
    }
    tokenIndex++;
    while (tokenIndex < this.tokens.tokens.length && this.tokens.tokens[tokenIndex].isType) {
      tokenIndex++;
    }
    if (!this.tokens.matches1AtIndex(tokenIndex, TokenType$1.eq)) {
      return false;
    }
    return true;
  }

  /**
   * Transform an `export var` declaration initializing a single variable.
   *
   * For example, this:
   * export const f = () => {};
   * becomes this:
   * const f = () => {}; exports.f = f;
   *
   * The variable is unused (e.g. exports.f has the true value of the export).
   * We need to produce an assignment of this form so that the function will
   * have an inferred name of "f", which wouldn't happen in the more general
   * case below.
   */
   processSimpleExportVar() {
    // export
    this.tokens.removeInitialToken();
    // var/let/const
    this.tokens.copyToken();
    const varName = this.tokens.identifierName();
    // x: number  ->  x
    while (!this.tokens.matches1(TokenType$1.eq)) {
      this.rootTransformer.processToken();
    }
    const endIndex = this.tokens.currentToken().rhsEndIndex;
    if (endIndex == null) {
      throw new Error("Expected = token with an end index.");
    }
    while (this.tokens.currentIndex() < endIndex) {
      this.rootTransformer.processToken();
    }
    this.tokens.appendCode(`; exports.${varName} = ${varName}`);
  }

  /**
   * Transform normal declaration exports, including handling destructuring.
   * For example, this:
   * export const {x: [a = 2, b], c} = d;
   * becomes this:
   * ({x: [exports.a = 2, exports.b], c: exports.c} = d;)
   */
   processComplexExportVar() {
    this.tokens.removeInitialToken();
    this.tokens.removeToken();
    const needsParens = this.tokens.matches1(TokenType$1.braceL);
    if (needsParens) {
      this.tokens.appendCode("(");
    }

    let depth = 0;
    while (true) {
      if (
        this.tokens.matches1(TokenType$1.braceL) ||
        this.tokens.matches1(TokenType$1.dollarBraceL) ||
        this.tokens.matches1(TokenType$1.bracketL)
      ) {
        depth++;
        this.tokens.copyToken();
      } else if (this.tokens.matches1(TokenType$1.braceR) || this.tokens.matches1(TokenType$1.bracketR)) {
        depth--;
        this.tokens.copyToken();
      } else if (
        depth === 0 &&
        !this.tokens.matches1(TokenType$1.name) &&
        !this.tokens.currentToken().isType
      ) {
        break;
      } else if (this.tokens.matches1(TokenType$1.eq)) {
        // Default values might have assignments in the RHS that we want to ignore, so skip past
        // them.
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        while (this.tokens.currentIndex() < endIndex) {
          this.rootTransformer.processToken();
        }
      } else {
        const token = this.tokens.currentToken();
        if (isDeclaration$1(token)) {
          const name = this.tokens.identifierName();
          let replacement = this.importProcessor.getIdentifierReplacement(name);
          if (replacement === null) {
            throw new Error(`Expected a replacement for ${name} in \`export var\` syntax.`);
          }
          if (isObjectShorthandDeclaration$1(token)) {
            replacement = `${name}: ${replacement}`;
          }
          this.tokens.replaceToken(replacement);
        } else {
          this.rootTransformer.processToken();
        }
      }
    }

    if (needsParens) {
      // Seek to the end of the RHS.
      const endIndex = this.tokens.currentToken().rhsEndIndex;
      if (endIndex == null) {
        throw new Error("Expected = token with an end index.");
      }
      while (this.tokens.currentIndex() < endIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(")");
    }
  }

  /**
   * Transform this:
   * export function foo() {}
   * into this:
   * function foo() {} exports.foo = foo;
   */
   processExportFunction() {
    this.tokens.replaceToken("");
    const name = this.processNamedFunction();
    this.tokens.appendCode(` exports.${name} = ${name};`);
  }

  /**
   * Skip past a function with a name and return that name.
   */
   processNamedFunction() {
    if (this.tokens.matches1(TokenType$1._function)) {
      this.tokens.copyToken();
    } else if (this.tokens.matches2(TokenType$1.name, TokenType$1._function)) {
      if (!this.tokens.matchesContextual(ContextualKeyword$1._async)) {
        throw new Error("Expected async keyword in function export.");
      }
      this.tokens.copyToken();
      this.tokens.copyToken();
    }
    if (this.tokens.matches1(TokenType$1.star)) {
      this.tokens.copyToken();
    }
    if (!this.tokens.matches1(TokenType$1.name)) {
      throw new Error("Expected identifier for exported function name.");
    }
    const name = this.tokens.identifierName();
    this.tokens.copyToken();
    if (this.tokens.currentToken().isType) {
      this.tokens.removeInitialToken();
      while (this.tokens.currentToken().isType) {
        this.tokens.removeToken();
      }
    }
    this.tokens.copyExpectedToken(TokenType$1.parenL);
    this.rootTransformer.processBalancedCode();
    this.tokens.copyExpectedToken(TokenType$1.parenR);
    this.rootTransformer.processPossibleTypeRange();
    this.tokens.copyExpectedToken(TokenType$1.braceL);
    this.rootTransformer.processBalancedCode();
    this.tokens.copyExpectedToken(TokenType$1.braceR);
    return name;
  }

  /**
   * Transform this:
   * export class A {}
   * into this:
   * class A {} exports.A = A;
   */
   processExportClass() {
    this.tokens.removeInitialToken();
    this.copyDecorators();
    if (this.tokens.matches1(TokenType$1._abstract)) {
      this.tokens.removeToken();
    }
    const name = this.rootTransformer.processNamedClass();
    this.tokens.appendCode(` exports.${name} = ${name};`);
  }

  /**
   * Transform this:
   * export {a, b as c};
   * into this:
   * exports.a = a; exports.c = b;
   *
   * OR
   *
   * Transform this:
   * export {a, b as c} from './foo';
   * into the pre-generated Object.defineProperty code from the ImportProcessor.
   *
   * For the first case, if the TypeScript transform is enabled, we need to skip
   * exports that are only defined as types.
   */
   processExportBindings() {
    this.tokens.removeInitialToken();
    this.tokens.removeToken();

    const isReExport = isExportFrom(this.tokens);

    const exportStatements = [];
    while (true) {
      if (this.tokens.matches1(TokenType$1.braceR)) {
        this.tokens.removeToken();
        break;
      }

      const specifierInfo = getImportExportSpecifierInfo$2(this.tokens);

      while (this.tokens.currentIndex() < specifierInfo.endIndex) {
        this.tokens.removeToken();
      }

      const shouldRemoveExport =
        specifierInfo.isType ||
        (!isReExport && this.shouldElideExportedIdentifier(specifierInfo.leftName));
      if (!shouldRemoveExport) {
        const exportedName = specifierInfo.rightName;
        if (exportedName === "default") {
          this.hadDefaultExport = true;
        } else {
          this.hadNamedExport = true;
        }
        const localName = specifierInfo.leftName;
        const newLocalName = this.importProcessor.getIdentifierReplacement(localName);
        exportStatements.push(`exports.${exportedName} = ${newLocalName || localName};`);
      }

      if (this.tokens.matches1(TokenType$1.braceR)) {
        this.tokens.removeToken();
        break;
      }
      if (this.tokens.matches2(TokenType$1.comma, TokenType$1.braceR)) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        break;
      } else if (this.tokens.matches1(TokenType$1.comma)) {
        this.tokens.removeToken();
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
      }
    }

    if (this.tokens.matchesContextual(ContextualKeyword$1._from)) {
      // This is an export...from, so throw away the normal named export code
      // and use the Object.defineProperty code from ImportProcessor.
      this.tokens.removeToken();
      const path = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
      removeMaybeImportAttributes(this.tokens);
    } else {
      // This is a normal named export, so use that.
      this.tokens.appendCode(exportStatements.join(" "));
    }

    if (this.tokens.matches1(TokenType$1.semi)) {
      this.tokens.removeToken();
    }
  }

   processExportStar() {
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(TokenType$1.string)) {
      this.tokens.removeToken();
    }
    const path = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(path));
    removeMaybeImportAttributes(this.tokens);
    if (this.tokens.matches1(TokenType$1.semi)) {
      this.tokens.removeToken();
    }
  }

   shouldElideExportedIdentifier(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.declarationInfo.valueDeclarations.has(name)
    );
  }
}

/**
 * Class for editing import statements when we are keeping the code as ESM. We still need to remove
 * type-only imports in TypeScript and Flow.
 */
class ESMImportTransformer extends Transformer$2 {
  
  
  

  constructor(
     tokens,
     nameManager,
     helperManager,
     reactHotLoaderTransformer,
     isTypeScriptTransformEnabled,
     isFlowTransformEnabled,
     keepUnusedImports,
    options,
  ) {
    super();this.tokens = tokens;this.nameManager = nameManager;this.helperManager = helperManager;this.reactHotLoaderTransformer = reactHotLoaderTransformer;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.isFlowTransformEnabled = isFlowTransformEnabled;this.keepUnusedImports = keepUnusedImports;    this.nonTypeIdentifiers =
      isTypeScriptTransformEnabled && !keepUnusedImports
        ? getNonTypeIdentifiers$2(tokens, options)
        : new Set();
    this.declarationInfo =
      isTypeScriptTransformEnabled && !keepUnusedImports
        ? getDeclarationInfo(tokens)
        : EMPTY_DECLARATION_INFO;
    this.injectCreateRequireForImportRequire = Boolean(options.injectCreateRequireForImportRequire);
  }

  process() {
    // TypeScript `import foo = require('foo');` should always just be translated to plain require.
    if (this.tokens.matches3(TokenType$1._import, TokenType$1.name, TokenType$1.eq)) {
      return this.processImportEquals();
    }
    if (
      this.tokens.matches4(TokenType$1._import, TokenType$1.name, TokenType$1.name, TokenType$1.eq) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword$1._type)
    ) {
      // import type T = require('T')
      this.tokens.removeInitialToken();
      // This construct is always exactly 8 tokens long, so remove the 7 remaining tokens.
      for (let i = 0; i < 7; i++) {
        this.tokens.removeToken();
      }
      return true;
    }
    if (this.tokens.matches2(TokenType$1._export, TokenType$1.eq)) {
      this.tokens.replaceToken("module.exports");
      return true;
    }
    if (
      this.tokens.matches5(TokenType$1._export, TokenType$1._import, TokenType$1.name, TokenType$1.name, TokenType$1.eq) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword$1._type)
    ) {
      // export import type T = require('T')
      this.tokens.removeInitialToken();
      // This construct is always exactly 9 tokens long, so remove the 8 remaining tokens.
      for (let i = 0; i < 8; i++) {
        this.tokens.removeToken();
      }
      return true;
    }
    if (this.tokens.matches1(TokenType$1._import)) {
      return this.processImport();
    }
    if (this.tokens.matches2(TokenType$1._export, TokenType$1._default)) {
      return this.processExportDefault();
    }
    if (this.tokens.matches2(TokenType$1._export, TokenType$1.braceL)) {
      return this.processNamedExports();
    }
    if (
      this.tokens.matches2(TokenType$1._export, TokenType$1.name) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword$1._type)
    ) {
      // export type {a};
      // export type {a as b};
      // export type {a} from './b';
      // export type * from './b';
      // export type * as ns from './b';
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      if (this.tokens.matches1(TokenType$1.braceL)) {
        while (!this.tokens.matches1(TokenType$1.braceR)) {
          this.tokens.removeToken();
        }
        this.tokens.removeToken();
      } else {
        // *
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType$1._as)) {
          // as
          this.tokens.removeToken();
          // ns
          this.tokens.removeToken();
        }
      }
      // Remove type re-export `... } from './T'`
      if (
        this.tokens.matchesContextual(ContextualKeyword$1._from) &&
        this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType$1.string)
      ) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        removeMaybeImportAttributes(this.tokens);
      }
      return true;
    }
    return false;
  }

   processImportEquals() {
    const importName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    if (this.shouldAutomaticallyElideImportedName(importName)) {
      // If this name is only used as a type, elide the whole import.
      elideImportEquals(this.tokens);
    } else if (this.injectCreateRequireForImportRequire) {
      // We're using require in an environment (Node ESM) that doesn't provide
      // it as a global, so generate a helper to import it.
      // import -> const
      this.tokens.replaceToken("const");
      // Foo
      this.tokens.copyToken();
      // =
      this.tokens.copyToken();
      // require
      this.tokens.replaceToken(this.helperManager.getHelperName("require"));
    } else {
      // Otherwise, just switch `import` to `const`.
      this.tokens.replaceToken("const");
    }
    return true;
  }

   processImport() {
    if (this.tokens.matches2(TokenType$1._import, TokenType$1.parenL)) {
      // Dynamic imports don't need to be transformed.
      return false;
    }

    const snapshot = this.tokens.snapshot();
    const allImportsRemoved = this.removeImportTypeBindings();
    if (allImportsRemoved) {
      this.tokens.restoreToSnapshot(snapshot);
      while (!this.tokens.matches1(TokenType$1.string)) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      removeMaybeImportAttributes(this.tokens);
      if (this.tokens.matches1(TokenType$1.semi)) {
        this.tokens.removeToken();
      }
    }
    return true;
  }

  /**
   * Remove type bindings from this import, leaving the rest of the import intact.
   *
   * Return true if this import was ONLY types, and thus is eligible for removal. This will bail out
   * of the replacement operation, so we can return early here.
   */
   removeImportTypeBindings() {
    this.tokens.copyExpectedToken(TokenType$1._import);
    if (
      this.tokens.matchesContextual(ContextualKeyword$1._type) &&
      !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, TokenType$1.comma) &&
      !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, ContextualKeyword$1._from)
    ) {
      // This is an "import type" statement, so exit early.
      return true;
    }

    if (this.tokens.matches1(TokenType$1.string)) {
      // This is a bare import, so we should proceed with the import.
      this.tokens.copyToken();
      return false;
    }

    // Skip the "module" token in import reflection.
    if (
      this.tokens.matchesContextual(ContextualKeyword$1._module) &&
      this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, ContextualKeyword$1._from)
    ) {
      this.tokens.copyToken();
    }

    let foundNonTypeImport = false;
    let foundAnyNamedImport = false;
    let needsComma = false;

    // Handle default import.
    if (this.tokens.matches1(TokenType$1.name)) {
      if (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())) {
        this.tokens.removeToken();
        if (this.tokens.matches1(TokenType$1.comma)) {
          this.tokens.removeToken();
        }
      } else {
        foundNonTypeImport = true;
        this.tokens.copyToken();
        if (this.tokens.matches1(TokenType$1.comma)) {
          // We're in a statement like:
          // import A, * as B from './A';
          // or
          // import A, {foo} from './A';
          // where the `A` is being kept. The comma should be removed if an only
          // if the next part of the import statement is elided, but that's hard
          // to determine at this point in the code. Instead, always remove it
          // and set a flag to add it back if necessary.
          needsComma = true;
          this.tokens.removeToken();
        }
      }
    }

    if (this.tokens.matches1(TokenType$1.star)) {
      if (this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))) {
        this.tokens.removeToken();
        this.tokens.removeToken();
        this.tokens.removeToken();
      } else {
        if (needsComma) {
          this.tokens.appendCode(",");
        }
        foundNonTypeImport = true;
        this.tokens.copyExpectedToken(TokenType$1.star);
        this.tokens.copyExpectedToken(TokenType$1.name);
        this.tokens.copyExpectedToken(TokenType$1.name);
      }
    } else if (this.tokens.matches1(TokenType$1.braceL)) {
      if (needsComma) {
        this.tokens.appendCode(",");
      }
      this.tokens.copyToken();
      while (!this.tokens.matches1(TokenType$1.braceR)) {
        foundAnyNamedImport = true;
        const specifierInfo = getImportExportSpecifierInfo$2(this.tokens);
        if (
          specifierInfo.isType ||
          this.shouldAutomaticallyElideImportedName(specifierInfo.rightName)
        ) {
          while (this.tokens.currentIndex() < specifierInfo.endIndex) {
            this.tokens.removeToken();
          }
          if (this.tokens.matches1(TokenType$1.comma)) {
            this.tokens.removeToken();
          }
        } else {
          foundNonTypeImport = true;
          while (this.tokens.currentIndex() < specifierInfo.endIndex) {
            this.tokens.copyToken();
          }
          if (this.tokens.matches1(TokenType$1.comma)) {
            this.tokens.copyToken();
          }
        }
      }
      this.tokens.copyExpectedToken(TokenType$1.braceR);
    }

    if (this.keepUnusedImports) {
      return false;
    }
    if (this.isTypeScriptTransformEnabled) {
      return !foundNonTypeImport;
    } else if (this.isFlowTransformEnabled) {
      // In Flow, unlike TS, `import {} from 'foo';` preserves the import.
      return foundAnyNamedImport && !foundNonTypeImport;
    } else {
      return false;
    }
  }

   shouldAutomaticallyElideImportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.nonTypeIdentifiers.has(name)
    );
  }

   processExportDefault() {
    if (
      shouldElideDefaultExport(
        this.isTypeScriptTransformEnabled,
        this.keepUnusedImports,
        this.tokens,
        this.declarationInfo,
      )
    ) {
      // If the exported value is just an identifier and should be elided by TypeScript
      // rules, then remove it entirely. It will always have the form `export default e`,
      // where `e` is an identifier.
      this.tokens.removeInitialToken();
      this.tokens.removeToken();
      this.tokens.removeToken();
      return true;
    }

    const alreadyHasName =
      this.tokens.matches4(TokenType$1._export, TokenType$1._default, TokenType$1._function, TokenType$1.name) ||
      // export default async function
      (this.tokens.matches5(TokenType$1._export, TokenType$1._default, TokenType$1.name, TokenType$1._function, TokenType$1.name) &&
        this.tokens.matchesContextualAtIndex(
          this.tokens.currentIndex() + 2,
          ContextualKeyword$1._async,
        )) ||
      this.tokens.matches4(TokenType$1._export, TokenType$1._default, TokenType$1._class, TokenType$1.name) ||
      this.tokens.matches5(TokenType$1._export, TokenType$1._default, TokenType$1._abstract, TokenType$1._class, TokenType$1.name);

    if (!alreadyHasName && this.reactHotLoaderTransformer) {
      // This is a plain "export default E" statement and we need to assign E to a variable.
      // Change "export default E" to "let _default; export default _default = E"
      const defaultVarName = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${defaultVarName}; export`);
      this.tokens.copyToken();
      this.tokens.appendCode(` ${defaultVarName} =`);
      this.reactHotLoaderTransformer.setExtractedDefaultExportName(defaultVarName);
      return true;
    }
    return false;
  }

  /**
   * Handle a statement with one of these forms:
   * export {a, type b};
   * export {c, type d} from 'foo';
   *
   * In both cases, any explicit type exports should be removed. In the first
   * case, we also need to handle implicit export elision for names declared as
   * types. In the second case, we must NOT do implicit named export elision,
   * but we must remove the runtime import if all exports are type exports.
   */
   processNamedExports() {
    if (!this.isTypeScriptTransformEnabled) {
      return false;
    }
    this.tokens.copyExpectedToken(TokenType$1._export);
    this.tokens.copyExpectedToken(TokenType$1.braceL);

    const isReExport = isExportFrom(this.tokens);
    let foundNonTypeExport = false;
    while (!this.tokens.matches1(TokenType$1.braceR)) {
      const specifierInfo = getImportExportSpecifierInfo$2(this.tokens);
      if (
        specifierInfo.isType ||
        (!isReExport && this.shouldElideExportedName(specifierInfo.leftName))
      ) {
        // Type export, so remove all tokens, including any comma.
        while (this.tokens.currentIndex() < specifierInfo.endIndex) {
          this.tokens.removeToken();
        }
        if (this.tokens.matches1(TokenType$1.comma)) {
          this.tokens.removeToken();
        }
      } else {
        // Non-type export, so copy all tokens, including any comma.
        foundNonTypeExport = true;
        while (this.tokens.currentIndex() < specifierInfo.endIndex) {
          this.tokens.copyToken();
        }
        if (this.tokens.matches1(TokenType$1.comma)) {
          this.tokens.copyToken();
        }
      }
    }
    this.tokens.copyExpectedToken(TokenType$1.braceR);

    if (!this.keepUnusedImports && isReExport && !foundNonTypeExport) {
      // This is a type-only re-export, so skip evaluating the other module. Technically this
      // leaves the statement as `export {}`, but that's ok since that's a no-op.
      this.tokens.removeToken();
      this.tokens.removeToken();
      removeMaybeImportAttributes(this.tokens);
    }

    return true;
  }

  /**
   * ESM elides all imports with the rule that we only elide if we see that it's
   * a type and never see it as a value. This is in contrast to CJS, which
   * elides imports that are completely unknown.
   */
   shouldElideExportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      this.declarationInfo.typeDeclarations.has(name) &&
      !this.declarationInfo.valueDeclarations.has(name)
    );
  }
}

class FlowTransformer extends Transformer$2 {
  constructor(
     rootTransformer,
     tokens,
     isImportsTransformEnabled,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.isImportsTransformEnabled = isImportsTransformEnabled;  }

  process() {
    if (
      this.rootTransformer.processPossibleArrowParamEnd() ||
      this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
      this.rootTransformer.processPossibleTypeRange()
    ) {
      return true;
    }
    if (this.tokens.matches1(TokenType$1._enum)) {
      this.processEnum();
      return true;
    }
    if (this.tokens.matches2(TokenType$1._export, TokenType$1._enum)) {
      this.processNamedExportEnum();
      return true;
    }
    if (this.tokens.matches3(TokenType$1._export, TokenType$1._default, TokenType$1._enum)) {
      this.processDefaultExportEnum();
      return true;
    }
    return false;
  }

  /**
   * Handle a declaration like:
   * export enum E ...
   *
   * With this imports transform, this becomes:
   * const E = [[enum]]; exports.E = E;
   *
   * otherwise, it becomes:
   * export const E = [[enum]];
   */
  processNamedExportEnum() {
    if (this.isImportsTransformEnabled) {
      // export
      this.tokens.removeInitialToken();
      const enumName = this.tokens.identifierNameAtRelativeIndex(1);
      this.processEnum();
      this.tokens.appendCode(` exports.${enumName} = ${enumName};`);
    } else {
      this.tokens.copyToken();
      this.processEnum();
    }
  }

  /**
   * Handle a declaration like:
   * export default enum E
   *
   * With the imports transform, this becomes:
   * const E = [[enum]]; exports.default = E;
   *
   * otherwise, it becomes:
   * const E = [[enum]]; export default E;
   */
  processDefaultExportEnum() {
    // export
    this.tokens.removeInitialToken();
    // default
    this.tokens.removeToken();
    const enumName = this.tokens.identifierNameAtRelativeIndex(1);
    this.processEnum();
    if (this.isImportsTransformEnabled) {
      this.tokens.appendCode(` exports.default = ${enumName};`);
    } else {
      this.tokens.appendCode(` export default ${enumName};`);
    }
  }

  /**
   * Transpile flow enums to invoke the "flow-enums-runtime" library.
   *
   * Currently, the transpiled code always uses `require("flow-enums-runtime")`,
   * but if future flexibility is needed, we could expose a config option for
   * this string (similar to configurable JSX). Even when targeting ESM, the
   * default behavior of babel-plugin-transform-flow-enums is to use require
   * rather than injecting an import.
   *
   * Flow enums are quite a bit simpler than TS enums and have some convenient
   * constraints:
   * - Element initializers must be either always present or always absent. That
   *   means that we can use fixed lookahead on the first element (if any) and
   *   assume that all elements are like that.
   * - The right-hand side of an element initializer must be a literal value,
   *   not a complex expression and not referencing other elements. That means
   *   we can simply copy a single token.
   *
   * Enums can be broken up into three basic cases:
   *
   * Mirrored enums:
   * enum E {A, B}
   *   ->
   * const E = require("flow-enums-runtime").Mirrored(["A", "B"]);
   *
   * Initializer enums:
   * enum E {A = 1, B = 2}
   *   ->
   * const E = require("flow-enums-runtime")({A: 1, B: 2});
   *
   * Symbol enums:
   * enum E of symbol {A, B}
   *   ->
   * const E = require("flow-enums-runtime")({A: Symbol("A"), B: Symbol("B")});
   *
   * We can statically detect which of the three cases this is by looking at the
   * "of" declaration (if any) and seeing if the first element has an initializer.
   * Since the other transform details are so similar between the three cases, we
   * use a single implementation and vary the transform within processEnumElement
   * based on case.
   */
  processEnum() {
    // enum E -> const E
    this.tokens.replaceToken("const");
    this.tokens.copyExpectedToken(TokenType$1.name);

    let isSymbolEnum = false;
    if (this.tokens.matchesContextual(ContextualKeyword$1._of)) {
      this.tokens.removeToken();
      isSymbolEnum = this.tokens.matchesContextual(ContextualKeyword$1._symbol);
      this.tokens.removeToken();
    }
    const hasInitializers = this.tokens.matches3(TokenType$1.braceL, TokenType$1.name, TokenType$1.eq);
    this.tokens.appendCode(' = require("flow-enums-runtime")');

    const isMirrored = !isSymbolEnum && !hasInitializers;
    this.tokens.replaceTokenTrimmingLeftWhitespace(isMirrored ? ".Mirrored([" : "({");

    while (!this.tokens.matches1(TokenType$1.braceR)) {
      // ... is allowed at the end and has no runtime behavior.
      if (this.tokens.matches1(TokenType$1.ellipsis)) {
        this.tokens.removeToken();
        break;
      }
      this.processEnumElement(isSymbolEnum, hasInitializers);
      if (this.tokens.matches1(TokenType$1.comma)) {
        this.tokens.copyToken();
      }
    }

    this.tokens.replaceToken(isMirrored ? "]);" : "});");
  }

  /**
   * Process an individual enum element, producing either an array element or an
   * object element based on what type of enum this is.
   */
  processEnumElement(isSymbolEnum, hasInitializers) {
    if (isSymbolEnum) {
      // Symbol enums never have initializers and are expanded to object elements.
      // A, -> A: Symbol("A"),
      const elementName = this.tokens.identifierName();
      this.tokens.copyToken();
      this.tokens.appendCode(`: Symbol("${elementName}")`);
    } else if (hasInitializers) {
      // Initializers are expanded to object elements.
      // A = 1, -> A: 1,
      this.tokens.copyToken();
      this.tokens.replaceTokenTrimmingLeftWhitespace(":");
      this.tokens.copyToken();
    } else {
      // Enum elements without initializers become string literal array elements.
      // A, -> "A",
      this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
    }
  }
}

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

const JEST_GLOBAL_NAME = "jest";
const HOISTED_METHODS = ["mock", "unmock", "enableAutomock", "disableAutomock"];

/**
 * Implementation of babel-plugin-jest-hoist, which hoists up some jest method
 * calls above the imports to allow them to override other imports.
 *
 * To preserve line numbers, rather than directly moving the jest.mock code, we
 * wrap each invocation in a function statement and then call the function from
 * the top of the file.
 */
class JestHoistTransformer extends Transformer$2 {
    __init() {this.hoistedFunctionNames = [];}

  constructor(
     rootTransformer,
     tokens,
     nameManager,
     importProcessor,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.nameManager = nameManager;this.importProcessor = importProcessor;JestHoistTransformer.prototype.__init.call(this);  }

  process() {
    if (
      this.tokens.currentToken().scopeDepth === 0 &&
      this.tokens.matches4(TokenType$1.name, TokenType$1.dot, TokenType$1.name, TokenType$1.parenL) &&
      this.tokens.identifierName() === JEST_GLOBAL_NAME
    ) {
      // TODO: This only works if imports transform is active, which it will be for jest.
      //       But if jest adds module support and we no longer need the import transform, this needs fixing.
      if (_optionalChain([this, 'access', _ => _.importProcessor, 'optionalAccess', _2 => _2.getGlobalNames, 'call', _3 => _3(), 'optionalAccess', _4 => _4.has, 'call', _5 => _5(JEST_GLOBAL_NAME)])) {
        return false;
      }
      return this.extractHoistedCalls();
    }

    return false;
  }

  getHoistedCode() {
    if (this.hoistedFunctionNames.length > 0) {
      // This will be placed before module interop code, but that's fine since
      // imports aren't allowed in module mock factories.
      return this.hoistedFunctionNames.map((name) => `${name}();`).join("");
    }
    return "";
  }

  /**
   * Extracts any methods calls on the jest-object that should be hoisted.
   *
   * According to the jest docs, https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options,
   * mock, unmock, enableAutomock, disableAutomock, are the methods that should be hoisted.
   *
   * We do not apply the same checks of the arguments as babel-plugin-jest-hoist does.
   */
   extractHoistedCalls() {
    // We're handling a chain of calls where `jest` may or may not need to be inserted for each call
    // in the chain, so remove the initial `jest` to make the loop implementation cleaner.
    this.tokens.removeToken();
    // Track some state so that multiple non-hoisted chained calls in a row keep their chaining
    // syntax.
    let followsNonHoistedJestCall = false;

    // Iterate through all chained calls on the jest object.
    while (this.tokens.matches3(TokenType$1.dot, TokenType$1.name, TokenType$1.parenL)) {
      const methodName = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
      const shouldHoist = HOISTED_METHODS.includes(methodName);
      if (shouldHoist) {
        // We've matched e.g. `.mock(...)` or similar call.
        // Replace the initial `.` with `function __jestHoist(){jest.`
        const hoistedFunctionName = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(hoistedFunctionName);
        this.tokens.replaceToken(`function ${hoistedFunctionName}(){${JEST_GLOBAL_NAME}.`);
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType$1.parenR);
        this.tokens.appendCode(";}");
        followsNonHoistedJestCall = false;
      } else {
        // This is a non-hoisted method, so just transform the code as usual.
        if (followsNonHoistedJestCall) {
          // If we didn't hoist the previous call, we can leave the code as-is to chain off of the
          // previous method call. It's important to preserve the code here because we don't know
          // for sure that the method actually returned the jest object for chaining.
          this.tokens.copyToken();
        } else {
          // If we hoisted the previous call, we know it returns the jest object back, so we insert
          // the identifier `jest` to continue the chain.
          this.tokens.replaceToken(`${JEST_GLOBAL_NAME}.`);
        }
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.rootTransformer.processBalancedCode();
        this.tokens.copyExpectedToken(TokenType$1.parenR);
        followsNonHoistedJestCall = true;
      }
    }

    return true;
  }
}

class NumericSeparatorTransformer extends Transformer$2 {
  constructor( tokens) {
    super();this.tokens = tokens;  }

  process() {
    if (this.tokens.matches1(TokenType$1.num)) {
      const code = this.tokens.currentTokenCode();
      if (code.includes("_")) {
        this.tokens.replaceToken(code.replace(/_/g, ""));
        return true;
      }
    }
    return false;
  }
}

class OptionalCatchBindingTransformer extends Transformer$2 {
  constructor( tokens,  nameManager) {
    super();this.tokens = tokens;this.nameManager = nameManager;  }

  process() {
    if (this.tokens.matches2(TokenType$1._catch, TokenType$1.braceL)) {
      this.tokens.copyToken();
      this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`);
      return true;
    }
    return false;
  }
}

/**
 * Transformer supporting the optional chaining and nullish coalescing operators.
 *
 * Tech plan here:
 * https://github.com/alangpierce/sucrase/wiki/Sucrase-Optional-Chaining-and-Nullish-Coalescing-Technical-Plan
 *
 * The prefix and suffix code snippets are handled by TokenProcessor, and this transformer handles
 * the operators themselves.
 */
class OptionalChainingNullishTransformer extends Transformer$2 {
  constructor( tokens,  nameManager) {
    super();this.tokens = tokens;this.nameManager = nameManager;  }

  process() {
    if (this.tokens.matches1(TokenType$1.nullishCoalescing)) {
      const token = this.tokens.currentToken();
      if (this.tokens.tokens[token.nullishStartIndex].isAsyncOperation) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (");
      } else {
        this.tokens.replaceTokenTrimmingLeftWhitespace(", () => (");
      }
      return true;
    }
    if (this.tokens.matches1(TokenType$1._delete)) {
      const nextToken = this.tokens.tokenAtRelativeIndex(1);
      if (nextToken.isOptionalChainStart) {
        this.tokens.removeInitialToken();
        return true;
      }
    }
    const token = this.tokens.currentToken();
    const chainStart = token.subscriptStartIndex;
    if (
      chainStart != null &&
      this.tokens.tokens[chainStart].isOptionalChainStart &&
      // Super subscripts can't be optional (since super is never null/undefined), and the syntax
      // relies on the subscript being intact, so leave this token alone.
      this.tokens.tokenAtRelativeIndex(-1).type !== TokenType$1._super
    ) {
      const param = this.nameManager.claimFreeName("_");
      let arrowStartSnippet;
      if (
        chainStart > 0 &&
        this.tokens.matches1AtIndex(chainStart - 1, TokenType$1._delete) &&
        this.isLastSubscriptInChain()
      ) {
        // Delete operations are special: we already removed the delete keyword, and to still
        // perform a delete, we need to insert a delete in the very last part of the chain, which
        // in correct code will always be a property access.
        arrowStartSnippet = `${param} => delete ${param}`;
      } else {
        arrowStartSnippet = `${param} => ${param}`;
      }
      if (this.tokens.tokens[chainStart].isAsyncOperation) {
        arrowStartSnippet = `async ${arrowStartSnippet}`;
      }
      if (
        this.tokens.matches2(TokenType$1.questionDot, TokenType$1.parenL) ||
        this.tokens.matches2(TokenType$1.questionDot, TokenType$1.lessThan)
      ) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${arrowStartSnippet}`);
      } else if (this.tokens.matches2(TokenType$1.questionDot, TokenType$1.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}`);
      } else if (this.tokens.matches1(TokenType$1.questionDot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(TokenType$1.dot)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}.`);
      } else if (this.tokens.matches1(TokenType$1.bracketL)) {
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${arrowStartSnippet}[`);
      } else if (this.tokens.matches1(TokenType$1.parenL)) {
        if (this.justSkippedSuper()) {
          this.tokens.appendCode(".bind(this)");
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${arrowStartSnippet}(`);
      } else {
        throw new Error("Unexpected subscript operator in optional chain.");
      }
      return true;
    }
    return false;
  }

  /**
   * Determine if the current token is the last of its chain, so that we know whether it's eligible
   * to have a delete op inserted.
   *
   * We can do this by walking forward until we determine one way or another. Each
   * isOptionalChainStart token must be paired with exactly one isOptionalChainEnd token after it in
   * a nesting way, so we can track depth and walk to the end of the chain (the point where the
   * depth goes negative) and see if any other subscript token is after us in the chain.
   */
  isLastSubscriptInChain() {
    let depth = 0;
    for (let i = this.tokens.currentIndex() + 1; ; i++) {
      if (i >= this.tokens.tokens.length) {
        throw new Error("Reached the end of the code while finding the end of the access chain.");
      }
      if (this.tokens.tokens[i].isOptionalChainStart) {
        depth++;
      } else if (this.tokens.tokens[i].isOptionalChainEnd) {
        depth--;
      }
      if (depth < 0) {
        return true;
      }

      // This subscript token is a later one in the same chain.
      if (depth === 0 && this.tokens.tokens[i].subscriptStartIndex != null) {
        return false;
      }
    }
  }

  /**
   * Determine if we are the open-paren in an expression like super.a()?.b.
   *
   * We can do this by walking backward to find the previous subscript. If that subscript was
   * preceded by a super, then we must be the subscript after it, so if this is a call expression,
   * we'll need to attach the right context.
   */
  justSkippedSuper() {
    let depth = 0;
    let index = this.tokens.currentIndex() - 1;
    while (true) {
      if (index < 0) {
        throw new Error(
          "Reached the start of the code while finding the start of the access chain.",
        );
      }
      if (this.tokens.tokens[index].isOptionalChainStart) {
        depth--;
      } else if (this.tokens.tokens[index].isOptionalChainEnd) {
        depth++;
      }
      if (depth < 0) {
        return false;
      }

      // This subscript token is a later one in the same chain.
      if (depth === 0 && this.tokens.tokens[index].subscriptStartIndex != null) {
        return this.tokens.tokens[index - 1].type === TokenType$1._super;
      }
      index--;
    }
  }
}

/**
 * Implementation of babel-plugin-transform-react-display-name, which adds a
 * display name to usages of React.createClass and createReactClass.
 */
class ReactDisplayNameTransformer extends Transformer$2 {
  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     options,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.options = options;  }

  process() {
    const startIndex = this.tokens.currentIndex();
    if (this.tokens.identifierName() === "createReactClass") {
      const newName =
        this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
      if (newName) {
        this.tokens.replaceToken(`(0, ${newName})`);
      } else {
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    if (
      this.tokens.matches3(TokenType$1.name, TokenType$1.dot, TokenType$1.name) &&
      this.tokens.identifierName() === "React" &&
      this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass"
    ) {
      const newName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement("React") || "React"
        : "React";
      if (newName) {
        this.tokens.replaceToken(newName);
        this.tokens.copyToken();
        this.tokens.copyToken();
      } else {
        this.tokens.copyToken();
        this.tokens.copyToken();
        this.tokens.copyToken();
      }
      this.tryProcessCreateClassCall(startIndex);
      return true;
    }
    return false;
  }

  /**
   * This is called with the token position at the open-paren.
   */
   tryProcessCreateClassCall(startIndex) {
    const displayName = this.findDisplayName(startIndex);
    if (!displayName) {
      return;
    }

    if (this.classNeedsDisplayName()) {
      this.tokens.copyExpectedToken(TokenType$1.parenL);
      this.tokens.copyExpectedToken(TokenType$1.braceL);
      this.tokens.appendCode(`displayName: '${displayName}',`);
      this.rootTransformer.processBalancedCode();
      this.tokens.copyExpectedToken(TokenType$1.braceR);
      this.tokens.copyExpectedToken(TokenType$1.parenR);
    }
  }

   findDisplayName(startIndex) {
    if (startIndex < 2) {
      return null;
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, TokenType$1.name, TokenType$1.eq)) {
      // This is an assignment (or declaration) and the LHS is either an identifier or a member
      // expression ending in an identifier, so use that identifier name.
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (
      startIndex >= 2 &&
      this.tokens.tokens[startIndex - 2].identifierRole === IdentifierRole$1.ObjectKey
    ) {
      // This is an object literal value.
      return this.tokens.identifierNameAtIndex(startIndex - 2);
    }
    if (this.tokens.matches2AtIndex(startIndex - 2, TokenType$1._export, TokenType$1._default)) {
      return this.getDisplayNameFromFilename();
    }
    return null;
  }

   getDisplayNameFromFilename() {
    const filePath = this.options.filePath || "unknown";
    const pathSegments = filePath.split("/");
    const filename = pathSegments[pathSegments.length - 1];
    const dotIndex = filename.lastIndexOf(".");
    const baseFilename = dotIndex === -1 ? filename : filename.slice(0, dotIndex);
    if (baseFilename === "index" && pathSegments[pathSegments.length - 2]) {
      return pathSegments[pathSegments.length - 2];
    } else {
      return baseFilename;
    }
  }

  /**
   * We only want to add a display name when this is a function call containing
   * one argument, which is an object literal without `displayName` as an
   * existing key.
   */
   classNeedsDisplayName() {
    let index = this.tokens.currentIndex();
    if (!this.tokens.matches2(TokenType$1.parenL, TokenType$1.braceL)) {
      return false;
    }
    // The block starts on the {, and we expect any displayName key to be in
    // that context. We need to ignore other other contexts to avoid matching
    // nested displayName keys.
    const objectStartIndex = index + 1;
    const objectContextId = this.tokens.tokens[objectStartIndex].contextId;
    if (objectContextId == null) {
      throw new Error("Expected non-null context ID on object open-brace.");
    }

    for (; index < this.tokens.tokens.length; index++) {
      const token = this.tokens.tokens[index];
      if (token.type === TokenType$1.braceR && token.contextId === objectContextId) {
        index++;
        break;
      }

      if (
        this.tokens.identifierNameAtIndex(index) === "displayName" &&
        this.tokens.tokens[index].identifierRole === IdentifierRole$1.ObjectKey &&
        token.contextId === objectContextId
      ) {
        // We found a displayName key, so bail out.
        return false;
      }
    }

    if (index === this.tokens.tokens.length) {
      throw new Error("Unexpected end of input when processing React class.");
    }

    // If we got this far, we know we have createClass with an object with no
    // display name, so we want to proceed as long as that was the only argument.
    return (
      this.tokens.matches1AtIndex(index, TokenType$1.parenR) ||
      this.tokens.matches2AtIndex(index, TokenType$1.comma, TokenType$1.parenR)
    );
  }
}

class ReactHotLoaderTransformer extends Transformer$2 {
   __init() {this.extractedDefaultExportName = null;}

  constructor( tokens,  filePath) {
    super();this.tokens = tokens;this.filePath = filePath;ReactHotLoaderTransformer.prototype.__init.call(this);  }

  setExtractedDefaultExportName(extractedDefaultExportName) {
    this.extractedDefaultExportName = extractedDefaultExportName;
  }

  getPrefixCode() {
    return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`
      .replace(/\s+/g, " ")
      .trim();
  }

  getSuffixCode() {
    const topLevelNames = new Set();
    for (const token of this.tokens.tokens) {
      if (
        !token.isType &&
        isTopLevelDeclaration$1(token) &&
        token.identifierRole !== IdentifierRole$1.ImportDeclaration
      ) {
        topLevelNames.add(this.tokens.identifierNameForToken(token));
      }
    }
    const namesToRegister = Array.from(topLevelNames).map((name) => ({
      variableName: name,
      uniqueLocalName: name,
    }));
    if (this.extractedDefaultExportName) {
      namesToRegister.push({
        variableName: this.extractedDefaultExportName,
        uniqueLocalName: "default",
      });
    }
    return `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${namesToRegister
  .map(
    ({variableName, uniqueLocalName}) =>
      `  reactHotLoader.register(${variableName}, "${uniqueLocalName}", ${JSON.stringify(
        this.filePath || "",
      )});`,
  )
  .join("\n")}
  leaveModule(module);
})();`;
  }

  process() {
    return false;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
// Hard-code a list of reserved words rather than trying to use keywords or contextual keywords
// from the parser, since currently there are various exceptions, like `package` being reserved
// but unused and various contextual keywords being reserved. Note that we assume that all code
// compiled by Sucrase is in a module, so strict mode words and await are all considered reserved
// here.
const RESERVED_WORDS = new Set([
  // Reserved keywords as of ECMAScript 2015
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  // Future reserved keywords
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await",
  // Literals that cannot be used as identifiers
  "false",
  "null",
  "true",
]);

/**
 * Determine if the given name is a legal variable name.
 *
 * This is needed when transforming TypeScript enums; if an enum key is a valid
 * variable name, it might be referenced later in the enum, so we need to
 * declare a variable.
 */
function isIdentifier(name) {
  if (name.length === 0) {
    return false;
  }
  if (!IS_IDENTIFIER_START[name.charCodeAt(0)]) {
    return false;
  }
  for (let i = 1; i < name.length; i++) {
    if (!IS_IDENTIFIER_CHAR[name.charCodeAt(i)]) {
      return false;
    }
  }
  return !RESERVED_WORDS.has(name);
}

class TypeScriptTransformer extends Transformer$2 {
  constructor(
     rootTransformer,
     tokens,
     isImportsTransformEnabled,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.isImportsTransformEnabled = isImportsTransformEnabled;  }

  process() {
    if (
      this.rootTransformer.processPossibleArrowParamEnd() ||
      this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
      this.rootTransformer.processPossibleTypeRange()
    ) {
      return true;
    }
    if (
      this.tokens.matches1(TokenType$1._public) ||
      this.tokens.matches1(TokenType$1._protected) ||
      this.tokens.matches1(TokenType$1._private) ||
      this.tokens.matches1(TokenType$1._abstract) ||
      this.tokens.matches1(TokenType$1._readonly) ||
      this.tokens.matches1(TokenType$1._override) ||
      this.tokens.matches1(TokenType$1.nonNullAssertion)
    ) {
      this.tokens.removeInitialToken();
      return true;
    }
    if (this.tokens.matches1(TokenType$1._enum) || this.tokens.matches2(TokenType$1._const, TokenType$1._enum)) {
      this.processEnum();
      return true;
    }
    if (
      this.tokens.matches2(TokenType$1._export, TokenType$1._enum) ||
      this.tokens.matches3(TokenType$1._export, TokenType$1._const, TokenType$1._enum)
    ) {
      this.processEnum(true);
      return true;
    }
    return false;
  }

  processEnum(isExport = false) {
    // We might have "export const enum", so just remove all relevant tokens.
    this.tokens.removeInitialToken();
    while (this.tokens.matches1(TokenType$1._const) || this.tokens.matches1(TokenType$1._enum)) {
      this.tokens.removeToken();
    }
    const enumName = this.tokens.identifierName();
    this.tokens.removeToken();
    if (isExport && !this.isImportsTransformEnabled) {
      this.tokens.appendCode("export ");
    }
    this.tokens.appendCode(`var ${enumName}; (function (${enumName})`);
    this.tokens.copyExpectedToken(TokenType$1.braceL);
    this.processEnumBody(enumName);
    this.tokens.copyExpectedToken(TokenType$1.braceR);
    if (isExport && this.isImportsTransformEnabled) {
      this.tokens.appendCode(`)(${enumName} || (exports.${enumName} = ${enumName} = {}));`);
    } else {
      this.tokens.appendCode(`)(${enumName} || (${enumName} = {}));`);
    }
  }

  /**
   * Transform an enum into equivalent JS. This has complexity in a few places:
   * - TS allows string enums, numeric enums, and a mix of the two styles within an enum.
   * - Enum keys are allowed to be referenced in later enum values.
   * - Enum keys are allowed to be strings.
   * - When enum values are omitted, they should follow an auto-increment behavior.
   */
  processEnumBody(enumName) {
    // Code that can be used to reference the previous enum member, or null if this is the first
    // enum member.
    let previousValueCode = null;
    while (true) {
      if (this.tokens.matches1(TokenType$1.braceR)) {
        break;
      }
      const {nameStringCode, variableName} = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken();

      if (
        this.tokens.matches3(TokenType$1.eq, TokenType$1.string, TokenType$1.comma) ||
        this.tokens.matches3(TokenType$1.eq, TokenType$1.string, TokenType$1.braceR)
      ) {
        this.processStringLiteralEnumMember(enumName, nameStringCode, variableName);
      } else if (this.tokens.matches1(TokenType$1.eq)) {
        this.processExplicitValueEnumMember(enumName, nameStringCode, variableName);
      } else {
        this.processImplicitValueEnumMember(
          enumName,
          nameStringCode,
          variableName,
          previousValueCode,
        );
      }
      if (this.tokens.matches1(TokenType$1.comma)) {
        this.tokens.removeToken();
      }

      if (variableName != null) {
        previousValueCode = variableName;
      } else {
        previousValueCode = `${enumName}[${nameStringCode}]`;
      }
    }
  }

  /**
   * Detect name information about this enum key, which will be used to determine which code to emit
   * and whether we should declare a variable as part of this declaration.
   *
   * Some cases to keep in mind:
   * - Enum keys can be implicitly referenced later, e.g. `X = 1, Y = X`. In Sucrase, we implement
   *   this by declaring a variable `X` so that later expressions can use it.
   * - In addition to the usual identifier key syntax, enum keys are allowed to be string literals,
   *   e.g. `"hello world" = 3,`. Template literal syntax is NOT allowed.
   * - Even if the enum key is defined as a string literal, it may still be referenced by identifier
   *   later, e.g. `"X" = 1, Y = X`. That means that we need to detect whether or not a string
   *   literal is identifier-like and emit a variable if so, even if the declaration did not use an
   *   identifier.
   * - Reserved keywords like `break` are valid enum keys, but are not valid to be referenced later
   *   and would be a syntax error if we emitted a variable, so we need to skip the variable
   *   declaration in those cases.
   *
   * The variableName return value captures these nuances: if non-null, we can and must emit a
   * variable declaration, and if null, we can't and shouldn't.
   */
  extractEnumKeyInfo(nameToken) {
    if (nameToken.type === TokenType$1.name) {
      const name = this.tokens.identifierNameForToken(nameToken);
      return {
        nameStringCode: `"${name}"`,
        variableName: isIdentifier(name) ? name : null,
      };
    } else if (nameToken.type === TokenType$1.string) {
      const name = this.tokens.stringValueForToken(nameToken);
      return {
        nameStringCode: this.tokens.code.slice(nameToken.start, nameToken.end),
        variableName: isIdentifier(name) ? name : null,
      };
    } else {
      throw new Error("Expected name or string at beginning of enum element.");
    }
  }

  /**
   * Handle an enum member where the RHS is just a string literal (not omitted, not a number, and
   * not a complex expression). This is the typical form for TS string enums, and in this case, we
   * do *not* create a reverse mapping.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = "some value"
   * ->
   * const someKey = "some value"; MyEnum["someKey"] = someKey;
   *
   * Example 2:
   * "some key" = "some value"
   * ->
   * MyEnum["some key"] = "some value";
   */
  processStringLiteralEnumMember(
    enumName,
    nameStringCode,
    variableName,
  ) {
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName}`);
      // =
      this.tokens.copyToken();
      // value string
      this.tokens.copyToken();
      this.tokens.appendCode(`; ${enumName}[${nameStringCode}] = ${variableName};`);
    } else {
      this.tokens.appendCode(`${enumName}[${nameStringCode}]`);
      // =
      this.tokens.copyToken();
      // value string
      this.tokens.copyToken();
      this.tokens.appendCode(";");
    }
  }

  /**
   * Handle an enum member initialized with an expression on the right-hand side (other than a
   * string literal). In these cases, we should transform the expression and emit code that sets up
   * a reverse mapping.
   *
   * The TypeScript implementation of this operation distinguishes between expressions that can be
   * "constant folded" at compile time (i.e. consist of number literals and simple math operations
   * on those numbers) and ones that are dynamic. For constant expressions, it emits the resolved
   * numeric value, and auto-incrementing is only allowed in that case. Evaluating expressions at
   * compile time would add significant complexity to Sucrase, so Sucrase instead leaves the
   * expression as-is, and will later emit something like `MyEnum["previousKey"] + 1` to implement
   * auto-incrementing.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = 1 + 1
   * ->
   * const someKey = 1 + 1; MyEnum[MyEnum["someKey"] = someKey] = "someKey";
   *
   * Example 2:
   * "some key" = 1 + 1
   * ->
   * MyEnum[MyEnum["some key"] = 1 + 1] = "some key";
   */
  processExplicitValueEnumMember(
    enumName,
    nameStringCode,
    variableName,
  ) {
    const rhsEndIndex = this.tokens.currentToken().rhsEndIndex;
    if (rhsEndIndex == null) {
      throw new Error("Expected rhsEndIndex on enum assign.");
    }

    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName}`);
      this.tokens.copyToken();
      while (this.tokens.currentIndex() < rhsEndIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(
        `; ${enumName}[${enumName}[${nameStringCode}] = ${variableName}] = ${nameStringCode};`,
      );
    } else {
      this.tokens.appendCode(`${enumName}[${enumName}[${nameStringCode}]`);
      this.tokens.copyToken();
      while (this.tokens.currentIndex() < rhsEndIndex) {
        this.rootTransformer.processToken();
      }
      this.tokens.appendCode(`] = ${nameStringCode};`);
    }
  }

  /**
   * Handle an enum member with no right-hand side expression. In this case, the value is the
   * previous value plus 1, or 0 if there was no previous value. We should also always emit a
   * reverse mapping.
   *
   * Example 1:
   * someKey2
   * ->
   * const someKey2 = someKey1 + 1; MyEnum[MyEnum["someKey2"] = someKey2] = "someKey2";
   *
   * Example 2:
   * "some key 2"
   * ->
   * MyEnum[MyEnum["some key 2"] = someKey1 + 1] = "some key 2";
   */
  processImplicitValueEnumMember(
    enumName,
    nameStringCode,
    variableName,
    previousValueCode,
  ) {
    let valueCode = previousValueCode != null ? `${previousValueCode} + 1` : "0";
    if (variableName != null) {
      this.tokens.appendCode(`const ${variableName} = ${valueCode}; `);
      valueCode = variableName;
    }
    this.tokens.appendCode(
      `${enumName}[${enumName}[${nameStringCode}] = ${valueCode}] = ${nameStringCode};`,
    );
  }
}

class RootTransformer {
   __init() {this.transformers = [];}
  
  
   __init2() {this.generatedVariables = [];}
  
  
  
  

  constructor(
    sucraseContext,
    transforms,
    enableLegacyBabel5ModuleInterop,
    options,
  ) {RootTransformer.prototype.__init.call(this);RootTransformer.prototype.__init2.call(this);
    this.nameManager = sucraseContext.nameManager;
    this.helperManager = sucraseContext.helperManager;
    const {tokenProcessor, importProcessor} = sucraseContext;
    this.tokens = tokenProcessor;
    this.isImportsTransformEnabled = transforms.includes("imports");
    this.isReactHotLoaderTransformEnabled = transforms.includes("react-hot-loader");
    this.disableESTransforms = Boolean(options.disableESTransforms);

    if (!options.disableESTransforms) {
      this.transformers.push(
        new OptionalChainingNullishTransformer(tokenProcessor, this.nameManager),
      );
      this.transformers.push(new NumericSeparatorTransformer(tokenProcessor));
      this.transformers.push(new OptionalCatchBindingTransformer(tokenProcessor, this.nameManager));
    }

    if (transforms.includes("jsx")) {
      if (options.jsxRuntime !== "preserve") {
        this.transformers.push(
          new JSXTransformer$2(this, tokenProcessor, importProcessor, this.nameManager, options),
        );
      }
      this.transformers.push(
        new ReactDisplayNameTransformer(this, tokenProcessor, importProcessor, options),
      );
    }

    let reactHotLoaderTransformer = null;
    if (transforms.includes("react-hot-loader")) {
      if (!options.filePath) {
        throw new Error("filePath is required when using the react-hot-loader transform.");
      }
      reactHotLoaderTransformer = new ReactHotLoaderTransformer(tokenProcessor, options.filePath);
      this.transformers.push(reactHotLoaderTransformer);
    }

    // Note that we always want to enable the imports transformer, even when the import transform
    // itself isn't enabled, since we need to do type-only import pruning for both Flow and
    // TypeScript.
    if (transforms.includes("imports")) {
      if (importProcessor === null) {
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      }
      this.transformers.push(
        new CJSImportTransformer(
          this,
          tokenProcessor,
          importProcessor,
          this.nameManager,
          this.helperManager,
          reactHotLoaderTransformer,
          enableLegacyBabel5ModuleInterop,
          Boolean(options.enableLegacyTypeScriptModuleInterop),
          transforms.includes("typescript"),
          transforms.includes("flow"),
          Boolean(options.preserveDynamicImport),
          Boolean(options.keepUnusedImports),
        ),
      );
    } else {
      this.transformers.push(
        new ESMImportTransformer(
          tokenProcessor,
          this.nameManager,
          this.helperManager,
          reactHotLoaderTransformer,
          transforms.includes("typescript"),
          transforms.includes("flow"),
          Boolean(options.keepUnusedImports),
          options,
        ),
      );
    }

    if (transforms.includes("flow")) {
      this.transformers.push(
        new FlowTransformer(this, tokenProcessor, transforms.includes("imports")),
      );
    }
    if (transforms.includes("typescript")) {
      this.transformers.push(
        new TypeScriptTransformer(this, tokenProcessor, transforms.includes("imports")),
      );
    }
    if (transforms.includes("jest")) {
      this.transformers.push(
        new JestHoistTransformer(this, tokenProcessor, this.nameManager, importProcessor),
      );
    }
  }

  transform() {
    this.tokens.reset();
    this.processBalancedCode();
    const shouldAddUseStrict = this.isImportsTransformEnabled;
    // "use strict" always needs to be first, so override the normal transformer order.
    let prefix = shouldAddUseStrict ? '"use strict";' : "";
    for (const transformer of this.transformers) {
      prefix += transformer.getPrefixCode();
    }
    prefix += this.helperManager.emitHelpers();
    prefix += this.generatedVariables.map((v) => ` var ${v};`).join("");
    for (const transformer of this.transformers) {
      prefix += transformer.getHoistedCode();
    }
    let suffix = "";
    for (const transformer of this.transformers) {
      suffix += transformer.getSuffixCode();
    }
    const result = this.tokens.finish();
    let {code} = result;
    if (code.startsWith("#!")) {
      let newlineIndex = code.indexOf("\n");
      if (newlineIndex === -1) {
        newlineIndex = code.length;
        code += "\n";
      }
      return {
        code: code.slice(0, newlineIndex + 1) + prefix + code.slice(newlineIndex + 1) + suffix,
        // The hashbang line has no tokens, so shifting the tokens to account
        // for prefix can happen normally.
        mappings: this.shiftMappings(result.mappings, prefix.length),
      };
    } else {
      return {
        code: prefix + code + suffix,
        mappings: this.shiftMappings(result.mappings, prefix.length),
      };
    }
  }

  processBalancedCode() {
    let braceDepth = 0;
    let parenDepth = 0;
    while (!this.tokens.isAtEnd()) {
      if (this.tokens.matches1(TokenType$1.braceL) || this.tokens.matches1(TokenType$1.dollarBraceL)) {
        braceDepth++;
      } else if (this.tokens.matches1(TokenType$1.braceR)) {
        if (braceDepth === 0) {
          return;
        }
        braceDepth--;
      }
      if (this.tokens.matches1(TokenType$1.parenL)) {
        parenDepth++;
      } else if (this.tokens.matches1(TokenType$1.parenR)) {
        if (parenDepth === 0) {
          return;
        }
        parenDepth--;
      }
      this.processToken();
    }
  }

  processToken() {
    if (this.tokens.matches1(TokenType$1._class)) {
      this.processClass();
      return;
    }
    for (const transformer of this.transformers) {
      const wasProcessed = transformer.process();
      if (wasProcessed) {
        return;
      }
    }
    this.tokens.copyToken();
  }

  /**
   * Skip past a class with a name and return that name.
   */
  processNamedClass() {
    if (!this.tokens.matches2(TokenType$1._class, TokenType$1.name)) {
      throw new Error("Expected identifier for exported class name.");
    }
    const name = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    this.processClass();
    return name;
  }

  processClass() {
    const classInfo = getClassInfo(this, this.tokens, this.nameManager, this.disableESTransforms);

    // Both static and instance initializers need a class name to use to invoke the initializer, so
    // assign to one if necessary.
    const needsCommaExpression =
      (classInfo.headerInfo.isExpression || !classInfo.headerInfo.className) &&
      classInfo.staticInitializerNames.length + classInfo.instanceInitializerNames.length > 0;

    let className = classInfo.headerInfo.className;
    if (needsCommaExpression) {
      className = this.nameManager.claimFreeName("_class");
      this.generatedVariables.push(className);
      this.tokens.appendCode(` (${className} =`);
    }

    const classToken = this.tokens.currentToken();
    const contextId = classToken.contextId;
    if (contextId == null) {
      throw new Error("Expected class to have a context ID.");
    }
    this.tokens.copyExpectedToken(TokenType$1._class);
    while (!this.tokens.matchesContextIdAndLabel(TokenType$1.braceL, contextId)) {
      this.processToken();
    }

    this.processClassBody(classInfo, className);

    const staticInitializerStatements = classInfo.staticInitializerNames.map(
      (name) => `${className}.${name}()`,
    );
    if (needsCommaExpression) {
      this.tokens.appendCode(
        `, ${staticInitializerStatements.map((s) => `${s}, `).join("")}${className})`,
      );
    } else if (classInfo.staticInitializerNames.length > 0) {
      this.tokens.appendCode(` ${staticInitializerStatements.map((s) => `${s};`).join(" ")}`);
    }
  }

  /**
   * We want to just handle class fields in all contexts, since TypeScript supports them. Later,
   * when some JS implementations support class fields, this should be made optional.
   */
  processClassBody(classInfo, className) {
    const {
      headerInfo,
      constructorInsertPos,
      constructorInitializerStatements,
      fields,
      instanceInitializerNames,
      rangesToRemove,
    } = classInfo;
    let fieldIndex = 0;
    let rangeToRemoveIndex = 0;
    const classContextId = this.tokens.currentToken().contextId;
    if (classContextId == null) {
      throw new Error("Expected non-null context ID on class.");
    }
    this.tokens.copyExpectedToken(TokenType$1.braceL);
    if (this.isReactHotLoaderTransformEnabled) {
      this.tokens.appendCode(
        "__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}",
      );
    }

    const needsConstructorInit =
      constructorInitializerStatements.length + instanceInitializerNames.length > 0;

    if (constructorInsertPos === null && needsConstructorInit) {
      const constructorInitializersCode = this.makeConstructorInitCode(
        constructorInitializerStatements,
        instanceInitializerNames,
        className,
      );
      if (headerInfo.hasSuperclass) {
        const argsName = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(
          `constructor(...${argsName}) { super(...${argsName}); ${constructorInitializersCode}; }`,
        );
      } else {
        this.tokens.appendCode(`constructor() { ${constructorInitializersCode}; }`);
      }
    }

    while (!this.tokens.matchesContextIdAndLabel(TokenType$1.braceR, classContextId)) {
      if (fieldIndex < fields.length && this.tokens.currentIndex() === fields[fieldIndex].start) {
        let needsCloseBrace = false;
        if (this.tokens.matches1(TokenType$1.bracketL)) {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this`);
        } else if (this.tokens.matches1(TokenType$1.string) || this.tokens.matches1(TokenType$1.num)) {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this[`);
          needsCloseBrace = true;
        } else {
          this.tokens.copyTokenWithPrefix(`${fields[fieldIndex].initializerName}() {this.`);
        }
        while (this.tokens.currentIndex() < fields[fieldIndex].end) {
          if (needsCloseBrace && this.tokens.currentIndex() === fields[fieldIndex].equalsIndex) {
            this.tokens.appendCode("]");
          }
          this.processToken();
        }
        this.tokens.appendCode("}");
        fieldIndex++;
      } else if (
        rangeToRemoveIndex < rangesToRemove.length &&
        this.tokens.currentIndex() >= rangesToRemove[rangeToRemoveIndex].start
      ) {
        if (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
          this.tokens.removeInitialToken();
        }
        while (this.tokens.currentIndex() < rangesToRemove[rangeToRemoveIndex].end) {
          this.tokens.removeToken();
        }
        rangeToRemoveIndex++;
      } else if (this.tokens.currentIndex() === constructorInsertPos) {
        this.tokens.copyToken();
        if (needsConstructorInit) {
          this.tokens.appendCode(
            `;${this.makeConstructorInitCode(
              constructorInitializerStatements,
              instanceInitializerNames,
              className,
            )};`,
          );
        }
        this.processToken();
      } else {
        this.processToken();
      }
    }
    this.tokens.copyExpectedToken(TokenType$1.braceR);
  }

  makeConstructorInitCode(
    constructorInitializerStatements,
    instanceInitializerNames,
    className,
  ) {
    return [
      ...constructorInitializerStatements,
      ...instanceInitializerNames.map((name) => `${className}.prototype.${name}.call(this)`),
    ].join(";");
  }

  /**
   * Normally it's ok to simply remove type tokens, but we need to be more careful when dealing with
   * arrow function return types since they can confuse the parser. In that case, we want to move
   * the close-paren to the same line as the arrow.
   *
   * See https://github.com/alangpierce/sucrase/issues/391 for more details.
   */
  processPossibleArrowParamEnd() {
    if (this.tokens.matches2(TokenType$1.parenR, TokenType$1.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
      let nextNonTypeIndex = this.tokens.currentIndex() + 1;
      // Look ahead to see if this is an arrow function or something else.
      while (this.tokens.tokens[nextNonTypeIndex].isType) {
        nextNonTypeIndex++;
      }
      if (this.tokens.matches1AtIndex(nextNonTypeIndex, TokenType$1.arrow)) {
        this.tokens.removeInitialToken();
        while (this.tokens.currentIndex() < nextNonTypeIndex) {
          this.tokens.removeToken();
        }
        this.tokens.replaceTokenTrimmingLeftWhitespace(") =>");
        return true;
      }
    }
    return false;
  }

  /**
   * An async arrow function might be of the form:
   *
   * async <
   *   T
   * >() => {}
   *
   * in which case, removing the type parameters will cause a syntax error. Detect this case and
   * move the open-paren earlier.
   */
  processPossibleAsyncArrowWithTypeParams() {
    if (
      !this.tokens.matchesContextual(ContextualKeyword$1._async) &&
      !this.tokens.matches1(TokenType$1._async)
    ) {
      return false;
    }
    const nextToken = this.tokens.tokenAtRelativeIndex(1);
    if (nextToken.type !== TokenType$1.lessThan || !nextToken.isType) {
      return false;
    }

    let nextNonTypeIndex = this.tokens.currentIndex() + 1;
    // Look ahead to see if this is an arrow function or something else.
    while (this.tokens.tokens[nextNonTypeIndex].isType) {
      nextNonTypeIndex++;
    }
    if (this.tokens.matches1AtIndex(nextNonTypeIndex, TokenType$1.parenL)) {
      this.tokens.replaceToken("async (");
      this.tokens.removeInitialToken();
      while (this.tokens.currentIndex() < nextNonTypeIndex) {
        this.tokens.removeToken();
      }
      this.tokens.removeToken();
      // We ate a ( token, so we need to process the tokens in between and then the ) token so that
      // we remain balanced.
      this.processBalancedCode();
      this.processToken();
      return true;
    }
    return false;
  }

  processPossibleTypeRange() {
    if (this.tokens.currentToken().isType) {
      this.tokens.removeInitialToken();
      while (this.tokens.currentToken().isType) {
        this.tokens.removeToken();
      }
      return true;
    }
    return false;
  }

  shiftMappings(
    mappings,
    prefixLength,
  ) {
    for (let i = 0; i < mappings.length; i++) {
      const mapping = mappings[i];
      if (mapping !== undefined) {
        mappings[i] = mapping + prefixLength;
      }
    }
    return mappings;
  }
}

/**
 * Special case code to scan for imported names in ESM TypeScript. We need to do this so we can
 * properly get globals so we can compute shadowed globals.
 *
 * This is similar to logic in CJSImportProcessor, but trimmed down to avoid logic with CJS
 * replacement and flow type imports.
 */
function getTSImportedNames(tokens) {
  const importedNames = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    if (
      tokens.matches1AtIndex(i, TokenType$1._import) &&
      !tokens.matches3AtIndex(i, TokenType$1._import, TokenType$1.name, TokenType$1.eq)
    ) {
      collectNamesForImport(tokens, i, importedNames);
    }
  }
  return importedNames;
}

function collectNamesForImport(
  tokens,
  index,
  importedNames,
) {
  index++;

  if (tokens.matches1AtIndex(index, TokenType$1.parenL)) {
    // Dynamic import, so nothing to do
    return;
  }

  if (tokens.matches1AtIndex(index, TokenType$1.name)) {
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
    if (tokens.matches1AtIndex(index, TokenType$1.comma)) {
      index++;
    }
  }

  if (tokens.matches1AtIndex(index, TokenType$1.star)) {
    // * as
    index += 2;
    importedNames.add(tokens.identifierNameAtIndex(index));
    index++;
  }

  if (tokens.matches1AtIndex(index, TokenType$1.braceL)) {
    index++;
    collectNamesForNamedImport(tokens, index, importedNames);
  }
}

function collectNamesForNamedImport(
  tokens,
  index,
  importedNames,
) {
  while (true) {
    if (tokens.matches1AtIndex(index, TokenType$1.braceR)) {
      return;
    }

    const specifierInfo = getImportExportSpecifierInfo$2(tokens, index);
    index = specifierInfo.endIndex;
    if (!specifierInfo.isType) {
      importedNames.add(specifierInfo.rightName);
    }

    if (tokens.matches2AtIndex(index, TokenType$1.comma, TokenType$1.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, TokenType$1.braceR)) {
      return;
    } else if (tokens.matches1AtIndex(index, TokenType$1.comma)) {
      index++;
    } else {
      throw new Error(`Unexpected token: ${JSON.stringify(tokens.tokens[index])}`);
    }
  }
}

function transform(code, options) {
  validateOptions(options);
  try {
    const sucraseContext = getSucraseContext(code, options);
    const transformer = new RootTransformer(
      sucraseContext,
      options.transforms,
      Boolean(options.enableLegacyBabel5ModuleInterop),
      options,
    );
    const transformerResult = transformer.transform();
    let result = {code: transformerResult.code};
    if (options.sourceMapOptions) {
      if (!options.filePath) {
        throw new Error("filePath must be specified when generating a source map.");
      }
      result = {
        ...result,
        sourceMap: computeSourceMap$2(
          transformerResult,
          options.filePath,
          options.sourceMapOptions,
          code,
          sucraseContext.tokenProcessor.tokens,
        ),
      };
    }
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e) {
    if (options.filePath) {
      e.message = `Error transforming ${options.filePath}: ${e.message}`;
    }
    throw e;
  }
}

/**
 * Call into the parser/tokenizer and do some further preprocessing:
 * - Come up with a set of used names so that we can assign new names.
 * - Preprocess all import/export statements so we know which globals we are interested in.
 * - Compute situations where any of those globals are shadowed.
 *
 * In the future, some of these preprocessing steps can be skipped based on what actual work is
 * being done.
 */
function getSucraseContext(code, options) {
  const isJSXEnabled = options.transforms.includes("jsx");
  const isTypeScriptEnabled = options.transforms.includes("typescript");
  const isFlowEnabled = options.transforms.includes("flow");
  const disableESTransforms = options.disableESTransforms === true;
  const file = parse(code, isJSXEnabled, isTypeScriptEnabled, isFlowEnabled);
  const tokens = file.tokens;
  const scopes = file.scopes;

  const nameManager = new NameManager(code, tokens);
  const helperManager = new HelperManager(nameManager);
  const tokenProcessor = new TokenProcessor(
    code,
    tokens,
    isFlowEnabled,
    disableESTransforms,
    helperManager,
  );
  const enableLegacyTypeScriptModuleInterop = Boolean(options.enableLegacyTypeScriptModuleInterop);

  let importProcessor = null;
  if (options.transforms.includes("imports")) {
    importProcessor = new CJSImportProcessor$2(
      nameManager,
      tokenProcessor,
      enableLegacyTypeScriptModuleInterop,
      options,
      options.transforms.includes("typescript"),
      Boolean(options.keepUnusedImports),
      helperManager,
    );
    importProcessor.preprocessTokens();
    // We need to mark shadowed globals after processing imports so we know that the globals are,
    // but before type-only import pruning, since that relies on shadowing information.
    identifyShadowedGlobals(tokenProcessor, scopes, importProcessor.getGlobalNames());
    if (options.transforms.includes("typescript") && !options.keepUnusedImports) {
      importProcessor.pruneTypeOnlyImports();
    }
  } else if (options.transforms.includes("typescript") && !options.keepUnusedImports) {
    // Shadowed global detection is needed for TS implicit elision of imported names.
    identifyShadowedGlobals(tokenProcessor, scopes, getTSImportedNames(tokenProcessor));
  }
  return {tokenProcessor, scopes, nameManager, importProcessor, helperManager};
}

var types = {};

var TokenType_1;
Object.defineProperty(types, "__esModule", {value: true});// Generated file, do not edit! Run "yarn generate" to re-generate this file.
/* istanbul ignore file */
/**
 * Enum of all token types, with bit fields to signify meaningful properties.
 */
var TokenType; (function (TokenType) {
  // Precedence 0 means not an operator; otherwise it is a positive number up to 12.
  const PRECEDENCE_MASK = 0xf; TokenType[TokenType["PRECEDENCE_MASK"] = PRECEDENCE_MASK] = "PRECEDENCE_MASK";
  const IS_KEYWORD = 1 << 4; TokenType[TokenType["IS_KEYWORD"] = IS_KEYWORD] = "IS_KEYWORD";
  const IS_ASSIGN = 1 << 5; TokenType[TokenType["IS_ASSIGN"] = IS_ASSIGN] = "IS_ASSIGN";
  const IS_RIGHT_ASSOCIATIVE = 1 << 6; TokenType[TokenType["IS_RIGHT_ASSOCIATIVE"] = IS_RIGHT_ASSOCIATIVE] = "IS_RIGHT_ASSOCIATIVE";
  const IS_PREFIX = 1 << 7; TokenType[TokenType["IS_PREFIX"] = IS_PREFIX] = "IS_PREFIX";
  const IS_POSTFIX = 1 << 8; TokenType[TokenType["IS_POSTFIX"] = IS_POSTFIX] = "IS_POSTFIX";
  const IS_EXPRESSION_START = 1 << 9; TokenType[TokenType["IS_EXPRESSION_START"] = IS_EXPRESSION_START] = "IS_EXPRESSION_START";

  const num = 512; TokenType[TokenType["num"] = num] = "num"; // num startsExpr
  const bigint = 1536; TokenType[TokenType["bigint"] = bigint] = "bigint"; // bigint startsExpr
  const decimal = 2560; TokenType[TokenType["decimal"] = decimal] = "decimal"; // decimal startsExpr
  const regexp = 3584; TokenType[TokenType["regexp"] = regexp] = "regexp"; // regexp startsExpr
  const string = 4608; TokenType[TokenType["string"] = string] = "string"; // string startsExpr
  const name = 5632; TokenType[TokenType["name"] = name] = "name"; // name startsExpr
  const eof = 6144; TokenType[TokenType["eof"] = eof] = "eof"; // eof
  const bracketL = 7680; TokenType[TokenType["bracketL"] = bracketL] = "bracketL"; // [ startsExpr
  const bracketR = 8192; TokenType[TokenType["bracketR"] = bracketR] = "bracketR"; // ]
  const braceL = 9728; TokenType[TokenType["braceL"] = braceL] = "braceL"; // { startsExpr
  const braceBarL = 10752; TokenType[TokenType["braceBarL"] = braceBarL] = "braceBarL"; // {| startsExpr
  const braceR = 11264; TokenType[TokenType["braceR"] = braceR] = "braceR"; // }
  const braceBarR = 12288; TokenType[TokenType["braceBarR"] = braceBarR] = "braceBarR"; // |}
  const parenL = 13824; TokenType[TokenType["parenL"] = parenL] = "parenL"; // ( startsExpr
  const parenR = 14336; TokenType[TokenType["parenR"] = parenR] = "parenR"; // )
  const comma = 15360; TokenType[TokenType["comma"] = comma] = "comma"; // ,
  const semi = 16384; TokenType[TokenType["semi"] = semi] = "semi"; // ;
  const colon = 17408; TokenType[TokenType["colon"] = colon] = "colon"; // :
  const doubleColon = 18432; TokenType[TokenType["doubleColon"] = doubleColon] = "doubleColon"; // ::
  const dot = 19456; TokenType[TokenType["dot"] = dot] = "dot"; // .
  const question = 20480; TokenType[TokenType["question"] = question] = "question"; // ?
  const questionDot = 21504; TokenType[TokenType["questionDot"] = questionDot] = "questionDot"; // ?.
  const arrow = 22528; TokenType[TokenType["arrow"] = arrow] = "arrow"; // =>
  const template = 23552; TokenType[TokenType["template"] = template] = "template"; // template
  const ellipsis = 24576; TokenType[TokenType["ellipsis"] = ellipsis] = "ellipsis"; // ...
  const backQuote = 25600; TokenType[TokenType["backQuote"] = backQuote] = "backQuote"; // `
  const dollarBraceL = 27136; TokenType[TokenType["dollarBraceL"] = dollarBraceL] = "dollarBraceL"; // ${ startsExpr
  const at = 27648; TokenType[TokenType["at"] = at] = "at"; // @
  const hash = 29184; TokenType[TokenType["hash"] = hash] = "hash"; // # startsExpr
  const eq = 29728; TokenType[TokenType["eq"] = eq] = "eq"; // = isAssign
  const assign = 30752; TokenType[TokenType["assign"] = assign] = "assign"; // _= isAssign
  const preIncDec = 32640; TokenType[TokenType["preIncDec"] = preIncDec] = "preIncDec"; // ++/-- prefix postfix startsExpr
  const postIncDec = 33664; TokenType[TokenType["postIncDec"] = postIncDec] = "postIncDec"; // ++/-- prefix postfix startsExpr
  const bang = 34432; TokenType[TokenType["bang"] = bang] = "bang"; // ! prefix startsExpr
  const tilde = 35456; TokenType[TokenType["tilde"] = tilde] = "tilde"; // ~ prefix startsExpr
  const pipeline = 35841; TokenType[TokenType["pipeline"] = pipeline] = "pipeline"; // |> prec:1
  const nullishCoalescing = 36866; TokenType[TokenType["nullishCoalescing"] = nullishCoalescing] = "nullishCoalescing"; // ?? prec:2
  const logicalOR = 37890; TokenType[TokenType["logicalOR"] = logicalOR] = "logicalOR"; // || prec:2
  const logicalAND = 38915; TokenType[TokenType["logicalAND"] = logicalAND] = "logicalAND"; // && prec:3
  const bitwiseOR = 39940; TokenType[TokenType["bitwiseOR"] = bitwiseOR] = "bitwiseOR"; // | prec:4
  const bitwiseXOR = 40965; TokenType[TokenType["bitwiseXOR"] = bitwiseXOR] = "bitwiseXOR"; // ^ prec:5
  const bitwiseAND = 41990; TokenType[TokenType["bitwiseAND"] = bitwiseAND] = "bitwiseAND"; // & prec:6
  const equality = 43015; TokenType[TokenType["equality"] = equality] = "equality"; // ==/!= prec:7
  const lessThan = 44040; TokenType[TokenType["lessThan"] = lessThan] = "lessThan"; // < prec:8
  const greaterThan = 45064; TokenType[TokenType["greaterThan"] = greaterThan] = "greaterThan"; // > prec:8
  const relationalOrEqual = 46088; TokenType[TokenType["relationalOrEqual"] = relationalOrEqual] = "relationalOrEqual"; // <=/>= prec:8
  const bitShiftL = 47113; TokenType[TokenType["bitShiftL"] = bitShiftL] = "bitShiftL"; // << prec:9
  const bitShiftR = 48137; TokenType[TokenType["bitShiftR"] = bitShiftR] = "bitShiftR"; // >>/>>> prec:9
  const plus = 49802; TokenType[TokenType["plus"] = plus] = "plus"; // + prec:10 prefix startsExpr
  const minus = 50826; TokenType[TokenType["minus"] = minus] = "minus"; // - prec:10 prefix startsExpr
  const modulo = 51723; TokenType[TokenType["modulo"] = modulo] = "modulo"; // % prec:11 startsExpr
  const star = 52235; TokenType[TokenType["star"] = star] = "star"; // * prec:11
  const slash = 53259; TokenType[TokenType["slash"] = slash] = "slash"; // / prec:11
  const exponent = 54348; TokenType[TokenType["exponent"] = exponent] = "exponent"; // ** prec:12 rightAssociative
  const jsxName = 55296; TokenType[TokenType["jsxName"] = jsxName] = "jsxName"; // jsxName
  const jsxText = 56320; TokenType[TokenType["jsxText"] = jsxText] = "jsxText"; // jsxText
  const jsxEmptyText = 57344; TokenType[TokenType["jsxEmptyText"] = jsxEmptyText] = "jsxEmptyText"; // jsxEmptyText
  const jsxTagStart = 58880; TokenType[TokenType["jsxTagStart"] = jsxTagStart] = "jsxTagStart"; // jsxTagStart startsExpr
  const jsxTagEnd = 59392; TokenType[TokenType["jsxTagEnd"] = jsxTagEnd] = "jsxTagEnd"; // jsxTagEnd
  const typeParameterStart = 60928; TokenType[TokenType["typeParameterStart"] = typeParameterStart] = "typeParameterStart"; // typeParameterStart startsExpr
  const nonNullAssertion = 61440; TokenType[TokenType["nonNullAssertion"] = nonNullAssertion] = "nonNullAssertion"; // nonNullAssertion
  const _break = 62480; TokenType[TokenType["_break"] = _break] = "_break"; // break keyword
  const _case = 63504; TokenType[TokenType["_case"] = _case] = "_case"; // case keyword
  const _catch = 64528; TokenType[TokenType["_catch"] = _catch] = "_catch"; // catch keyword
  const _continue = 65552; TokenType[TokenType["_continue"] = _continue] = "_continue"; // continue keyword
  const _debugger = 66576; TokenType[TokenType["_debugger"] = _debugger] = "_debugger"; // debugger keyword
  const _default = 67600; TokenType[TokenType["_default"] = _default] = "_default"; // default keyword
  const _do = 68624; TokenType[TokenType["_do"] = _do] = "_do"; // do keyword
  const _else = 69648; TokenType[TokenType["_else"] = _else] = "_else"; // else keyword
  const _finally = 70672; TokenType[TokenType["_finally"] = _finally] = "_finally"; // finally keyword
  const _for = 71696; TokenType[TokenType["_for"] = _for] = "_for"; // for keyword
  const _function = 73232; TokenType[TokenType["_function"] = _function] = "_function"; // function keyword startsExpr
  const _if = 73744; TokenType[TokenType["_if"] = _if] = "_if"; // if keyword
  const _return = 74768; TokenType[TokenType["_return"] = _return] = "_return"; // return keyword
  const _switch = 75792; TokenType[TokenType["_switch"] = _switch] = "_switch"; // switch keyword
  const _throw = 77456; TokenType[TokenType["_throw"] = _throw] = "_throw"; // throw keyword prefix startsExpr
  const _try = 77840; TokenType[TokenType["_try"] = _try] = "_try"; // try keyword
  const _var = 78864; TokenType[TokenType["_var"] = _var] = "_var"; // var keyword
  const _let = 79888; TokenType[TokenType["_let"] = _let] = "_let"; // let keyword
  const _const = 80912; TokenType[TokenType["_const"] = _const] = "_const"; // const keyword
  const _while = 81936; TokenType[TokenType["_while"] = _while] = "_while"; // while keyword
  const _with = 82960; TokenType[TokenType["_with"] = _with] = "_with"; // with keyword
  const _new = 84496; TokenType[TokenType["_new"] = _new] = "_new"; // new keyword startsExpr
  const _this = 85520; TokenType[TokenType["_this"] = _this] = "_this"; // this keyword startsExpr
  const _super = 86544; TokenType[TokenType["_super"] = _super] = "_super"; // super keyword startsExpr
  const _class = 87568; TokenType[TokenType["_class"] = _class] = "_class"; // class keyword startsExpr
  const _extends = 88080; TokenType[TokenType["_extends"] = _extends] = "_extends"; // extends keyword
  const _export = 89104; TokenType[TokenType["_export"] = _export] = "_export"; // export keyword
  const _import = 90640; TokenType[TokenType["_import"] = _import] = "_import"; // import keyword startsExpr
  const _yield = 91664; TokenType[TokenType["_yield"] = _yield] = "_yield"; // yield keyword startsExpr
  const _null = 92688; TokenType[TokenType["_null"] = _null] = "_null"; // null keyword startsExpr
  const _true = 93712; TokenType[TokenType["_true"] = _true] = "_true"; // true keyword startsExpr
  const _false = 94736; TokenType[TokenType["_false"] = _false] = "_false"; // false keyword startsExpr
  const _in = 95256; TokenType[TokenType["_in"] = _in] = "_in"; // in prec:8 keyword
  const _instanceof = 96280; TokenType[TokenType["_instanceof"] = _instanceof] = "_instanceof"; // instanceof prec:8 keyword
  const _typeof = 97936; TokenType[TokenType["_typeof"] = _typeof] = "_typeof"; // typeof keyword prefix startsExpr
  const _void = 98960; TokenType[TokenType["_void"] = _void] = "_void"; // void keyword prefix startsExpr
  const _delete = 99984; TokenType[TokenType["_delete"] = _delete] = "_delete"; // delete keyword prefix startsExpr
  const _async = 100880; TokenType[TokenType["_async"] = _async] = "_async"; // async keyword startsExpr
  const _get = 101904; TokenType[TokenType["_get"] = _get] = "_get"; // get keyword startsExpr
  const _set = 102928; TokenType[TokenType["_set"] = _set] = "_set"; // set keyword startsExpr
  const _declare = 103952; TokenType[TokenType["_declare"] = _declare] = "_declare"; // declare keyword startsExpr
  const _readonly = 104976; TokenType[TokenType["_readonly"] = _readonly] = "_readonly"; // readonly keyword startsExpr
  const _abstract = 106000; TokenType[TokenType["_abstract"] = _abstract] = "_abstract"; // abstract keyword startsExpr
  const _static = 107024; TokenType[TokenType["_static"] = _static] = "_static"; // static keyword startsExpr
  const _public = 107536; TokenType[TokenType["_public"] = _public] = "_public"; // public keyword
  const _private = 108560; TokenType[TokenType["_private"] = _private] = "_private"; // private keyword
  const _protected = 109584; TokenType[TokenType["_protected"] = _protected] = "_protected"; // protected keyword
  const _override = 110608; TokenType[TokenType["_override"] = _override] = "_override"; // override keyword
  const _as = 112144; TokenType[TokenType["_as"] = _as] = "_as"; // as keyword startsExpr
  const _enum = 113168; TokenType[TokenType["_enum"] = _enum] = "_enum"; // enum keyword startsExpr
  const _type = 114192; TokenType[TokenType["_type"] = _type] = "_type"; // type keyword startsExpr
  const _implements = 115216; TokenType[TokenType["_implements"] = _implements] = "_implements"; // implements keyword startsExpr
})(TokenType || (TokenType_1 = types.TokenType = TokenType = {}));
 function formatTokenType(tokenType) {
  switch (tokenType) {
    case TokenType.num:
      return "num";
    case TokenType.bigint:
      return "bigint";
    case TokenType.decimal:
      return "decimal";
    case TokenType.regexp:
      return "regexp";
    case TokenType.string:
      return "string";
    case TokenType.name:
      return "name";
    case TokenType.eof:
      return "eof";
    case TokenType.bracketL:
      return "[";
    case TokenType.bracketR:
      return "]";
    case TokenType.braceL:
      return "{";
    case TokenType.braceBarL:
      return "{|";
    case TokenType.braceR:
      return "}";
    case TokenType.braceBarR:
      return "|}";
    case TokenType.parenL:
      return "(";
    case TokenType.parenR:
      return ")";
    case TokenType.comma:
      return ",";
    case TokenType.semi:
      return ";";
    case TokenType.colon:
      return ":";
    case TokenType.doubleColon:
      return "::";
    case TokenType.dot:
      return ".";
    case TokenType.question:
      return "?";
    case TokenType.questionDot:
      return "?.";
    case TokenType.arrow:
      return "=>";
    case TokenType.template:
      return "template";
    case TokenType.ellipsis:
      return "...";
    case TokenType.backQuote:
      return "`";
    case TokenType.dollarBraceL:
      return "${";
    case TokenType.at:
      return "@";
    case TokenType.hash:
      return "#";
    case TokenType.eq:
      return "=";
    case TokenType.assign:
      return "_=";
    case TokenType.preIncDec:
      return "++/--";
    case TokenType.postIncDec:
      return "++/--";
    case TokenType.bang:
      return "!";
    case TokenType.tilde:
      return "~";
    case TokenType.pipeline:
      return "|>";
    case TokenType.nullishCoalescing:
      return "??";
    case TokenType.logicalOR:
      return "||";
    case TokenType.logicalAND:
      return "&&";
    case TokenType.bitwiseOR:
      return "|";
    case TokenType.bitwiseXOR:
      return "^";
    case TokenType.bitwiseAND:
      return "&";
    case TokenType.equality:
      return "==/!=";
    case TokenType.lessThan:
      return "<";
    case TokenType.greaterThan:
      return ">";
    case TokenType.relationalOrEqual:
      return "<=/>=";
    case TokenType.bitShiftL:
      return "<<";
    case TokenType.bitShiftR:
      return ">>/>>>";
    case TokenType.plus:
      return "+";
    case TokenType.minus:
      return "-";
    case TokenType.modulo:
      return "%";
    case TokenType.star:
      return "*";
    case TokenType.slash:
      return "/";
    case TokenType.exponent:
      return "**";
    case TokenType.jsxName:
      return "jsxName";
    case TokenType.jsxText:
      return "jsxText";
    case TokenType.jsxEmptyText:
      return "jsxEmptyText";
    case TokenType.jsxTagStart:
      return "jsxTagStart";
    case TokenType.jsxTagEnd:
      return "jsxTagEnd";
    case TokenType.typeParameterStart:
      return "typeParameterStart";
    case TokenType.nonNullAssertion:
      return "nonNullAssertion";
    case TokenType._break:
      return "break";
    case TokenType._case:
      return "case";
    case TokenType._catch:
      return "catch";
    case TokenType._continue:
      return "continue";
    case TokenType._debugger:
      return "debugger";
    case TokenType._default:
      return "default";
    case TokenType._do:
      return "do";
    case TokenType._else:
      return "else";
    case TokenType._finally:
      return "finally";
    case TokenType._for:
      return "for";
    case TokenType._function:
      return "function";
    case TokenType._if:
      return "if";
    case TokenType._return:
      return "return";
    case TokenType._switch:
      return "switch";
    case TokenType._throw:
      return "throw";
    case TokenType._try:
      return "try";
    case TokenType._var:
      return "var";
    case TokenType._let:
      return "let";
    case TokenType._const:
      return "const";
    case TokenType._while:
      return "while";
    case TokenType._with:
      return "with";
    case TokenType._new:
      return "new";
    case TokenType._this:
      return "this";
    case TokenType._super:
      return "super";
    case TokenType._class:
      return "class";
    case TokenType._extends:
      return "extends";
    case TokenType._export:
      return "export";
    case TokenType._import:
      return "import";
    case TokenType._yield:
      return "yield";
    case TokenType._null:
      return "null";
    case TokenType._true:
      return "true";
    case TokenType._false:
      return "false";
    case TokenType._in:
      return "in";
    case TokenType._instanceof:
      return "instanceof";
    case TokenType._typeof:
      return "typeof";
    case TokenType._void:
      return "void";
    case TokenType._delete:
      return "delete";
    case TokenType._async:
      return "async";
    case TokenType._get:
      return "get";
    case TokenType._set:
      return "set";
    case TokenType._declare:
      return "declare";
    case TokenType._readonly:
      return "readonly";
    case TokenType._abstract:
      return "abstract";
    case TokenType._static:
      return "static";
    case TokenType._public:
      return "public";
    case TokenType._private:
      return "private";
    case TokenType._protected:
      return "protected";
    case TokenType._override:
      return "override";
    case TokenType._as:
      return "as";
    case TokenType._enum:
      return "enum";
    case TokenType._type:
      return "type";
    case TokenType._implements:
      return "implements";
    default:
      return "";
  }
} types.formatTokenType = formatTokenType;

var CJSImportProcessor$1 = {};

var tokenizer = {};

var base = {};

var state = {};

var keywords = {};

Object.defineProperty(keywords, "__esModule", {value: true});var ContextualKeyword; (function (ContextualKeyword) {
  const NONE = 0; ContextualKeyword[ContextualKeyword["NONE"] = NONE] = "NONE";
  const _abstract = NONE + 1; ContextualKeyword[ContextualKeyword["_abstract"] = _abstract] = "_abstract";
  const _accessor = _abstract + 1; ContextualKeyword[ContextualKeyword["_accessor"] = _accessor] = "_accessor";
  const _as = _accessor + 1; ContextualKeyword[ContextualKeyword["_as"] = _as] = "_as";
  const _assert = _as + 1; ContextualKeyword[ContextualKeyword["_assert"] = _assert] = "_assert";
  const _asserts = _assert + 1; ContextualKeyword[ContextualKeyword["_asserts"] = _asserts] = "_asserts";
  const _async = _asserts + 1; ContextualKeyword[ContextualKeyword["_async"] = _async] = "_async";
  const _await = _async + 1; ContextualKeyword[ContextualKeyword["_await"] = _await] = "_await";
  const _checks = _await + 1; ContextualKeyword[ContextualKeyword["_checks"] = _checks] = "_checks";
  const _constructor = _checks + 1; ContextualKeyword[ContextualKeyword["_constructor"] = _constructor] = "_constructor";
  const _declare = _constructor + 1; ContextualKeyword[ContextualKeyword["_declare"] = _declare] = "_declare";
  const _enum = _declare + 1; ContextualKeyword[ContextualKeyword["_enum"] = _enum] = "_enum";
  const _exports = _enum + 1; ContextualKeyword[ContextualKeyword["_exports"] = _exports] = "_exports";
  const _from = _exports + 1; ContextualKeyword[ContextualKeyword["_from"] = _from] = "_from";
  const _get = _from + 1; ContextualKeyword[ContextualKeyword["_get"] = _get] = "_get";
  const _global = _get + 1; ContextualKeyword[ContextualKeyword["_global"] = _global] = "_global";
  const _implements = _global + 1; ContextualKeyword[ContextualKeyword["_implements"] = _implements] = "_implements";
  const _infer = _implements + 1; ContextualKeyword[ContextualKeyword["_infer"] = _infer] = "_infer";
  const _interface = _infer + 1; ContextualKeyword[ContextualKeyword["_interface"] = _interface] = "_interface";
  const _is = _interface + 1; ContextualKeyword[ContextualKeyword["_is"] = _is] = "_is";
  const _keyof = _is + 1; ContextualKeyword[ContextualKeyword["_keyof"] = _keyof] = "_keyof";
  const _mixins = _keyof + 1; ContextualKeyword[ContextualKeyword["_mixins"] = _mixins] = "_mixins";
  const _module = _mixins + 1; ContextualKeyword[ContextualKeyword["_module"] = _module] = "_module";
  const _namespace = _module + 1; ContextualKeyword[ContextualKeyword["_namespace"] = _namespace] = "_namespace";
  const _of = _namespace + 1; ContextualKeyword[ContextualKeyword["_of"] = _of] = "_of";
  const _opaque = _of + 1; ContextualKeyword[ContextualKeyword["_opaque"] = _opaque] = "_opaque";
  const _out = _opaque + 1; ContextualKeyword[ContextualKeyword["_out"] = _out] = "_out";
  const _override = _out + 1; ContextualKeyword[ContextualKeyword["_override"] = _override] = "_override";
  const _private = _override + 1; ContextualKeyword[ContextualKeyword["_private"] = _private] = "_private";
  const _protected = _private + 1; ContextualKeyword[ContextualKeyword["_protected"] = _protected] = "_protected";
  const _proto = _protected + 1; ContextualKeyword[ContextualKeyword["_proto"] = _proto] = "_proto";
  const _public = _proto + 1; ContextualKeyword[ContextualKeyword["_public"] = _public] = "_public";
  const _readonly = _public + 1; ContextualKeyword[ContextualKeyword["_readonly"] = _readonly] = "_readonly";
  const _require = _readonly + 1; ContextualKeyword[ContextualKeyword["_require"] = _require] = "_require";
  const _satisfies = _require + 1; ContextualKeyword[ContextualKeyword["_satisfies"] = _satisfies] = "_satisfies";
  const _set = _satisfies + 1; ContextualKeyword[ContextualKeyword["_set"] = _set] = "_set";
  const _static = _set + 1; ContextualKeyword[ContextualKeyword["_static"] = _static] = "_static";
  const _symbol = _static + 1; ContextualKeyword[ContextualKeyword["_symbol"] = _symbol] = "_symbol";
  const _type = _symbol + 1; ContextualKeyword[ContextualKeyword["_type"] = _type] = "_type";
  const _unique = _type + 1; ContextualKeyword[ContextualKeyword["_unique"] = _unique] = "_unique";
  const _using = _unique + 1; ContextualKeyword[ContextualKeyword["_using"] = _using] = "_using";
})(ContextualKeyword || (keywords.ContextualKeyword = ContextualKeyword = {}));

Object.defineProperty(state, "__esModule", {value: true});
var _keywords$3 = keywords;
var _types$8 = types;

 class Scope {
  
  
  

  constructor(startTokenIndex, endTokenIndex, isFunctionScope) {
    this.startTokenIndex = startTokenIndex;
    this.endTokenIndex = endTokenIndex;
    this.isFunctionScope = isFunctionScope;
  }
} state.Scope = Scope;

 class StateSnapshot {
  constructor(
     potentialArrowAt,
     noAnonFunctionType,
     inDisallowConditionalTypesContext,
     tokensLength,
     scopesLength,
     pos,
     type,
     contextualKeyword,
     start,
     end,
     isType,
     scopeDepth,
     error,
  ) {this.potentialArrowAt = potentialArrowAt;this.noAnonFunctionType = noAnonFunctionType;this.inDisallowConditionalTypesContext = inDisallowConditionalTypesContext;this.tokensLength = tokensLength;this.scopesLength = scopesLength;this.pos = pos;this.type = type;this.contextualKeyword = contextualKeyword;this.start = start;this.end = end;this.isType = isType;this.scopeDepth = scopeDepth;this.error = error;}
} state.StateSnapshot = StateSnapshot;

 class State {constructor() { State.prototype.__init.call(this);State.prototype.__init2.call(this);State.prototype.__init3.call(this);State.prototype.__init4.call(this);State.prototype.__init5.call(this);State.prototype.__init6.call(this);State.prototype.__init7.call(this);State.prototype.__init8.call(this);State.prototype.__init9.call(this);State.prototype.__init10.call(this);State.prototype.__init11.call(this);State.prototype.__init12.call(this);State.prototype.__init13.call(this); }
  // Used to signify the start of a potential arrow function
  __init() {this.potentialArrowAt = -1;}

  // Used by Flow to handle an edge case involving function type parsing.
  __init2() {this.noAnonFunctionType = false;}

  // Used by TypeScript to handle ambiguities when parsing conditional types.
  __init3() {this.inDisallowConditionalTypesContext = false;}

  // Token store.
  __init4() {this.tokens = [];}

  // Array of all observed scopes, ordered by their ending position.
  __init5() {this.scopes = [];}

  // The current position of the tokenizer in the input.
  __init6() {this.pos = 0;}

  // Information about the current token.
  __init7() {this.type = _types$8.TokenType.eof;}
  __init8() {this.contextualKeyword = _keywords$3.ContextualKeyword.NONE;}
  __init9() {this.start = 0;}
  __init10() {this.end = 0;}

  __init11() {this.isType = false;}
  __init12() {this.scopeDepth = 0;}

  /**
   * If the parser is in an error state, then the token is always tt.eof and all functions can
   * keep executing but should be written so they don't get into an infinite loop in this situation.
   *
   * This approach, combined with the ability to snapshot and restore state, allows us to implement
   * backtracking without exceptions and without needing to explicitly propagate error states
   * everywhere.
   */
  __init13() {this.error = null;}

  snapshot() {
    return new StateSnapshot(
      this.potentialArrowAt,
      this.noAnonFunctionType,
      this.inDisallowConditionalTypesContext,
      this.tokens.length,
      this.scopes.length,
      this.pos,
      this.type,
      this.contextualKeyword,
      this.start,
      this.end,
      this.isType,
      this.scopeDepth,
      this.error,
    );
  }

  restoreFromSnapshot(snapshot) {
    this.potentialArrowAt = snapshot.potentialArrowAt;
    this.noAnonFunctionType = snapshot.noAnonFunctionType;
    this.inDisallowConditionalTypesContext = snapshot.inDisallowConditionalTypesContext;
    this.tokens.length = snapshot.tokensLength;
    this.scopes.length = snapshot.scopesLength;
    this.pos = snapshot.pos;
    this.type = snapshot.type;
    this.contextualKeyword = snapshot.contextualKeyword;
    this.start = snapshot.start;
    this.end = snapshot.end;
    this.isType = snapshot.isType;
    this.scopeDepth = snapshot.scopeDepth;
    this.error = snapshot.error;
  }
} state.default = State;

var charcodes = {};

Object.defineProperty(charcodes, "__esModule", {value: true});var charCodes; (function (charCodes) {
  const backSpace = 8; charCodes[charCodes["backSpace"] = backSpace] = "backSpace";
  const lineFeed = 10; charCodes[charCodes["lineFeed"] = lineFeed] = "lineFeed"; //  '\n'
  const tab = 9; charCodes[charCodes["tab"] = tab] = "tab"; //  '\t'
  const carriageReturn = 13; charCodes[charCodes["carriageReturn"] = carriageReturn] = "carriageReturn"; //  '\r'
  const shiftOut = 14; charCodes[charCodes["shiftOut"] = shiftOut] = "shiftOut";
  const space = 32; charCodes[charCodes["space"] = space] = "space";
  const exclamationMark = 33; charCodes[charCodes["exclamationMark"] = exclamationMark] = "exclamationMark"; //  '!'
  const quotationMark = 34; charCodes[charCodes["quotationMark"] = quotationMark] = "quotationMark"; //  '"'
  const numberSign = 35; charCodes[charCodes["numberSign"] = numberSign] = "numberSign"; //  '#'
  const dollarSign = 36; charCodes[charCodes["dollarSign"] = dollarSign] = "dollarSign"; //  '$'
  const percentSign = 37; charCodes[charCodes["percentSign"] = percentSign] = "percentSign"; //  '%'
  const ampersand = 38; charCodes[charCodes["ampersand"] = ampersand] = "ampersand"; //  '&'
  const apostrophe = 39; charCodes[charCodes["apostrophe"] = apostrophe] = "apostrophe"; //  '''
  const leftParenthesis = 40; charCodes[charCodes["leftParenthesis"] = leftParenthesis] = "leftParenthesis"; //  '('
  const rightParenthesis = 41; charCodes[charCodes["rightParenthesis"] = rightParenthesis] = "rightParenthesis"; //  ')'
  const asterisk = 42; charCodes[charCodes["asterisk"] = asterisk] = "asterisk"; //  '*'
  const plusSign = 43; charCodes[charCodes["plusSign"] = plusSign] = "plusSign"; //  '+'
  const comma = 44; charCodes[charCodes["comma"] = comma] = "comma"; //  ','
  const dash = 45; charCodes[charCodes["dash"] = dash] = "dash"; //  '-'
  const dot = 46; charCodes[charCodes["dot"] = dot] = "dot"; //  '.'
  const slash = 47; charCodes[charCodes["slash"] = slash] = "slash"; //  '/'
  const digit0 = 48; charCodes[charCodes["digit0"] = digit0] = "digit0"; //  '0'
  const digit1 = 49; charCodes[charCodes["digit1"] = digit1] = "digit1"; //  '1'
  const digit2 = 50; charCodes[charCodes["digit2"] = digit2] = "digit2"; //  '2'
  const digit3 = 51; charCodes[charCodes["digit3"] = digit3] = "digit3"; //  '3'
  const digit4 = 52; charCodes[charCodes["digit4"] = digit4] = "digit4"; //  '4'
  const digit5 = 53; charCodes[charCodes["digit5"] = digit5] = "digit5"; //  '5'
  const digit6 = 54; charCodes[charCodes["digit6"] = digit6] = "digit6"; //  '6'
  const digit7 = 55; charCodes[charCodes["digit7"] = digit7] = "digit7"; //  '7'
  const digit8 = 56; charCodes[charCodes["digit8"] = digit8] = "digit8"; //  '8'
  const digit9 = 57; charCodes[charCodes["digit9"] = digit9] = "digit9"; //  '9'
  const colon = 58; charCodes[charCodes["colon"] = colon] = "colon"; //  ':'
  const semicolon = 59; charCodes[charCodes["semicolon"] = semicolon] = "semicolon"; //  ';'
  const lessThan = 60; charCodes[charCodes["lessThan"] = lessThan] = "lessThan"; //  '<'
  const equalsTo = 61; charCodes[charCodes["equalsTo"] = equalsTo] = "equalsTo"; //  '='
  const greaterThan = 62; charCodes[charCodes["greaterThan"] = greaterThan] = "greaterThan"; //  '>'
  const questionMark = 63; charCodes[charCodes["questionMark"] = questionMark] = "questionMark"; //  '?'
  const atSign = 64; charCodes[charCodes["atSign"] = atSign] = "atSign"; //  '@'
  const uppercaseA = 65; charCodes[charCodes["uppercaseA"] = uppercaseA] = "uppercaseA"; //  'A'
  const uppercaseB = 66; charCodes[charCodes["uppercaseB"] = uppercaseB] = "uppercaseB"; //  'B'
  const uppercaseC = 67; charCodes[charCodes["uppercaseC"] = uppercaseC] = "uppercaseC"; //  'C'
  const uppercaseD = 68; charCodes[charCodes["uppercaseD"] = uppercaseD] = "uppercaseD"; //  'D'
  const uppercaseE = 69; charCodes[charCodes["uppercaseE"] = uppercaseE] = "uppercaseE"; //  'E'
  const uppercaseF = 70; charCodes[charCodes["uppercaseF"] = uppercaseF] = "uppercaseF"; //  'F'
  const uppercaseG = 71; charCodes[charCodes["uppercaseG"] = uppercaseG] = "uppercaseG"; //  'G'
  const uppercaseH = 72; charCodes[charCodes["uppercaseH"] = uppercaseH] = "uppercaseH"; //  'H'
  const uppercaseI = 73; charCodes[charCodes["uppercaseI"] = uppercaseI] = "uppercaseI"; //  'I'
  const uppercaseJ = 74; charCodes[charCodes["uppercaseJ"] = uppercaseJ] = "uppercaseJ"; //  'J'
  const uppercaseK = 75; charCodes[charCodes["uppercaseK"] = uppercaseK] = "uppercaseK"; //  'K'
  const uppercaseL = 76; charCodes[charCodes["uppercaseL"] = uppercaseL] = "uppercaseL"; //  'L'
  const uppercaseM = 77; charCodes[charCodes["uppercaseM"] = uppercaseM] = "uppercaseM"; //  'M'
  const uppercaseN = 78; charCodes[charCodes["uppercaseN"] = uppercaseN] = "uppercaseN"; //  'N'
  const uppercaseO = 79; charCodes[charCodes["uppercaseO"] = uppercaseO] = "uppercaseO"; //  'O'
  const uppercaseP = 80; charCodes[charCodes["uppercaseP"] = uppercaseP] = "uppercaseP"; //  'P'
  const uppercaseQ = 81; charCodes[charCodes["uppercaseQ"] = uppercaseQ] = "uppercaseQ"; //  'Q'
  const uppercaseR = 82; charCodes[charCodes["uppercaseR"] = uppercaseR] = "uppercaseR"; //  'R'
  const uppercaseS = 83; charCodes[charCodes["uppercaseS"] = uppercaseS] = "uppercaseS"; //  'S'
  const uppercaseT = 84; charCodes[charCodes["uppercaseT"] = uppercaseT] = "uppercaseT"; //  'T'
  const uppercaseU = 85; charCodes[charCodes["uppercaseU"] = uppercaseU] = "uppercaseU"; //  'U'
  const uppercaseV = 86; charCodes[charCodes["uppercaseV"] = uppercaseV] = "uppercaseV"; //  'V'
  const uppercaseW = 87; charCodes[charCodes["uppercaseW"] = uppercaseW] = "uppercaseW"; //  'W'
  const uppercaseX = 88; charCodes[charCodes["uppercaseX"] = uppercaseX] = "uppercaseX"; //  'X'
  const uppercaseY = 89; charCodes[charCodes["uppercaseY"] = uppercaseY] = "uppercaseY"; //  'Y'
  const uppercaseZ = 90; charCodes[charCodes["uppercaseZ"] = uppercaseZ] = "uppercaseZ"; //  'Z'
  const leftSquareBracket = 91; charCodes[charCodes["leftSquareBracket"] = leftSquareBracket] = "leftSquareBracket"; //  '['
  const backslash = 92; charCodes[charCodes["backslash"] = backslash] = "backslash"; //  '\    '
  const rightSquareBracket = 93; charCodes[charCodes["rightSquareBracket"] = rightSquareBracket] = "rightSquareBracket"; //  ']'
  const caret = 94; charCodes[charCodes["caret"] = caret] = "caret"; //  '^'
  const underscore = 95; charCodes[charCodes["underscore"] = underscore] = "underscore"; //  '_'
  const graveAccent = 96; charCodes[charCodes["graveAccent"] = graveAccent] = "graveAccent"; //  '`'
  const lowercaseA = 97; charCodes[charCodes["lowercaseA"] = lowercaseA] = "lowercaseA"; //  'a'
  const lowercaseB = 98; charCodes[charCodes["lowercaseB"] = lowercaseB] = "lowercaseB"; //  'b'
  const lowercaseC = 99; charCodes[charCodes["lowercaseC"] = lowercaseC] = "lowercaseC"; //  'c'
  const lowercaseD = 100; charCodes[charCodes["lowercaseD"] = lowercaseD] = "lowercaseD"; //  'd'
  const lowercaseE = 101; charCodes[charCodes["lowercaseE"] = lowercaseE] = "lowercaseE"; //  'e'
  const lowercaseF = 102; charCodes[charCodes["lowercaseF"] = lowercaseF] = "lowercaseF"; //  'f'
  const lowercaseG = 103; charCodes[charCodes["lowercaseG"] = lowercaseG] = "lowercaseG"; //  'g'
  const lowercaseH = 104; charCodes[charCodes["lowercaseH"] = lowercaseH] = "lowercaseH"; //  'h'
  const lowercaseI = 105; charCodes[charCodes["lowercaseI"] = lowercaseI] = "lowercaseI"; //  'i'
  const lowercaseJ = 106; charCodes[charCodes["lowercaseJ"] = lowercaseJ] = "lowercaseJ"; //  'j'
  const lowercaseK = 107; charCodes[charCodes["lowercaseK"] = lowercaseK] = "lowercaseK"; //  'k'
  const lowercaseL = 108; charCodes[charCodes["lowercaseL"] = lowercaseL] = "lowercaseL"; //  'l'
  const lowercaseM = 109; charCodes[charCodes["lowercaseM"] = lowercaseM] = "lowercaseM"; //  'm'
  const lowercaseN = 110; charCodes[charCodes["lowercaseN"] = lowercaseN] = "lowercaseN"; //  'n'
  const lowercaseO = 111; charCodes[charCodes["lowercaseO"] = lowercaseO] = "lowercaseO"; //  'o'
  const lowercaseP = 112; charCodes[charCodes["lowercaseP"] = lowercaseP] = "lowercaseP"; //  'p'
  const lowercaseQ = 113; charCodes[charCodes["lowercaseQ"] = lowercaseQ] = "lowercaseQ"; //  'q'
  const lowercaseR = 114; charCodes[charCodes["lowercaseR"] = lowercaseR] = "lowercaseR"; //  'r'
  const lowercaseS = 115; charCodes[charCodes["lowercaseS"] = lowercaseS] = "lowercaseS"; //  's'
  const lowercaseT = 116; charCodes[charCodes["lowercaseT"] = lowercaseT] = "lowercaseT"; //  't'
  const lowercaseU = 117; charCodes[charCodes["lowercaseU"] = lowercaseU] = "lowercaseU"; //  'u'
  const lowercaseV = 118; charCodes[charCodes["lowercaseV"] = lowercaseV] = "lowercaseV"; //  'v'
  const lowercaseW = 119; charCodes[charCodes["lowercaseW"] = lowercaseW] = "lowercaseW"; //  'w'
  const lowercaseX = 120; charCodes[charCodes["lowercaseX"] = lowercaseX] = "lowercaseX"; //  'x'
  const lowercaseY = 121; charCodes[charCodes["lowercaseY"] = lowercaseY] = "lowercaseY"; //  'y'
  const lowercaseZ = 122; charCodes[charCodes["lowercaseZ"] = lowercaseZ] = "lowercaseZ"; //  'z'
  const leftCurlyBrace = 123; charCodes[charCodes["leftCurlyBrace"] = leftCurlyBrace] = "leftCurlyBrace"; //  '{'
  const verticalBar = 124; charCodes[charCodes["verticalBar"] = verticalBar] = "verticalBar"; //  '|'
  const rightCurlyBrace = 125; charCodes[charCodes["rightCurlyBrace"] = rightCurlyBrace] = "rightCurlyBrace"; //  '}'
  const tilde = 126; charCodes[charCodes["tilde"] = tilde] = "tilde"; //  '~'
  const nonBreakingSpace = 160; charCodes[charCodes["nonBreakingSpace"] = nonBreakingSpace] = "nonBreakingSpace";
  // eslint-disable-next-line no-irregular-whitespace
  const oghamSpaceMark = 5760; charCodes[charCodes["oghamSpaceMark"] = oghamSpaceMark] = "oghamSpaceMark"; // ' '
  const lineSeparator = 8232; charCodes[charCodes["lineSeparator"] = lineSeparator] = "lineSeparator";
  const paragraphSeparator = 8233; charCodes[charCodes["paragraphSeparator"] = paragraphSeparator] = "paragraphSeparator";
})(charCodes || (charcodes.charCodes = charCodes = {}));

 function isDigit(code) {
  return (
    (code >= charCodes.digit0 && code <= charCodes.digit9) ||
    (code >= charCodes.lowercaseA && code <= charCodes.lowercaseF) ||
    (code >= charCodes.uppercaseA && code <= charCodes.uppercaseF)
  );
} charcodes.isDigit = isDigit;

(function (exports) {
Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _state = state; var _state2 = _interopRequireDefault(_state);
var _charcodes = charcodes;

 exports.isJSXEnabled;
 exports.isTypeScriptEnabled;
 exports.isFlowEnabled;
 exports.state;
 exports.input;
 exports.nextContextId;

 function getNextContextId() {
  return exports.nextContextId++;
} exports.getNextContextId = getNextContextId;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
 function augmentError(error) {
  if ("pos" in error) {
    const loc = locationForIndex(error.pos);
    error.message += ` (${loc.line}:${loc.column})`;
    error.loc = loc;
  }
  return error;
} exports.augmentError = augmentError;

 class Loc {
  
  
  constructor(line, column) {
    this.line = line;
    this.column = column;
  }
} exports.Loc = Loc;

 function locationForIndex(pos) {
  let line = 1;
  let column = 1;
  for (let i = 0; i < pos; i++) {
    if (exports.input.charCodeAt(i) === _charcodes.charCodes.lineFeed) {
      line++;
      column = 1;
    } else {
      column++;
    }
  }
  return new Loc(line, column);
} exports.locationForIndex = locationForIndex;

 function initParser(
  inputCode,
  isJSXEnabledArg,
  isTypeScriptEnabledArg,
  isFlowEnabledArg,
) {
  exports.input = inputCode;
  exports.state = new (_state2.default)();
  exports.nextContextId = 1;
  exports.isJSXEnabled = isJSXEnabledArg;
  exports.isTypeScriptEnabled = isTypeScriptEnabledArg;
  exports.isFlowEnabled = isFlowEnabledArg;
} exports.initParser = initParser;
}(base));

var util = {};

Object.defineProperty(util, "__esModule", {value: true});var _index$1 = tokenizer;

var _types$7 = types;
var _charcodes$4 = charcodes;
var _base$2 = base;

// ## Parser utilities

// Tests whether parsed token is a contextual keyword.
 function isContextual(contextualKeyword) {
  return _base$2.state.contextualKeyword === contextualKeyword;
} util.isContextual = isContextual;

 function isLookaheadContextual(contextualKeyword) {
  const l = _index$1.lookaheadTypeAndKeyword.call(void 0, );
  return l.type === _types$7.TokenType.name && l.contextualKeyword === contextualKeyword;
} util.isLookaheadContextual = isLookaheadContextual;

// Consumes contextual keyword if possible.
 function eatContextual(contextualKeyword) {
  return _base$2.state.contextualKeyword === contextualKeyword && _index$1.eat.call(void 0, _types$7.TokenType.name);
} util.eatContextual = eatContextual;

// Asserts that following token is given contextual keyword.
 function expectContextual(contextualKeyword) {
  if (!eatContextual(contextualKeyword)) {
    unexpected();
  }
} util.expectContextual = expectContextual;

// Test whether a semicolon can be inserted at the current position.
 function canInsertSemicolon() {
  return _index$1.match.call(void 0, _types$7.TokenType.eof) || _index$1.match.call(void 0, _types$7.TokenType.braceR) || hasPrecedingLineBreak();
} util.canInsertSemicolon = canInsertSemicolon;

 function hasPrecedingLineBreak() {
  const prevToken = _base$2.state.tokens[_base$2.state.tokens.length - 1];
  const lastTokEnd = prevToken ? prevToken.end : 0;
  for (let i = lastTokEnd; i < _base$2.state.start; i++) {
    const code = _base$2.input.charCodeAt(i);
    if (
      code === _charcodes$4.charCodes.lineFeed ||
      code === _charcodes$4.charCodes.carriageReturn ||
      code === 0x2028 ||
      code === 0x2029
    ) {
      return true;
    }
  }
  return false;
} util.hasPrecedingLineBreak = hasPrecedingLineBreak;

 function hasFollowingLineBreak() {
  const nextStart = _index$1.nextTokenStart.call(void 0, );
  for (let i = _base$2.state.end; i < nextStart; i++) {
    const code = _base$2.input.charCodeAt(i);
    if (
      code === _charcodes$4.charCodes.lineFeed ||
      code === _charcodes$4.charCodes.carriageReturn ||
      code === 0x2028 ||
      code === 0x2029
    ) {
      return true;
    }
  }
  return false;
} util.hasFollowingLineBreak = hasFollowingLineBreak;

 function isLineTerminator() {
  return _index$1.eat.call(void 0, _types$7.TokenType.semi) || canInsertSemicolon();
} util.isLineTerminator = isLineTerminator;

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.
 function semicolon() {
  if (!isLineTerminator()) {
    unexpected('Unexpected token, expected ";"');
  }
} util.semicolon = semicolon;

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error at given pos.
 function expect(type) {
  const matched = _index$1.eat.call(void 0, type);
  if (!matched) {
    unexpected(`Unexpected token, expected "${_types$7.formatTokenType.call(void 0, type)}"`);
  }
} util.expect = expect;

/**
 * Transition the parser to an error state. All code needs to be written to naturally unwind in this
 * state, which allows us to backtrack without exceptions and without error plumbing everywhere.
 */
 function unexpected(message = "Unexpected token", pos = _base$2.state.start) {
  if (_base$2.state.error) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const err = new SyntaxError(message);
  err.pos = pos;
  _base$2.state.error = err;
  _base$2.state.pos = _base$2.input.length;
  _index$1.finishToken.call(void 0, _types$7.TokenType.eof);
} util.unexpected = unexpected;

var identifier = {};

var whitespace = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", {value: true});var _charcodes = charcodes;

// https://tc39.github.io/ecma262/#sec-white-space
 const WHITESPACE_CHARS = [
  0x0009,
  0x000b,
  0x000c,
  _charcodes.charCodes.space,
  _charcodes.charCodes.nonBreakingSpace,
  _charcodes.charCodes.oghamSpaceMark,
  0x2000, // EN QUAD
  0x2001, // EM QUAD
  0x2002, // EN SPACE
  0x2003, // EM SPACE
  0x2004, // THREE-PER-EM SPACE
  0x2005, // FOUR-PER-EM SPACE
  0x2006, // SIX-PER-EM SPACE
  0x2007, // FIGURE SPACE
  0x2008, // PUNCTUATION SPACE
  0x2009, // THIN SPACE
  0x200a, // HAIR SPACE
  0x202f, // NARROW NO-BREAK SPACE
  0x205f, // MEDIUM MATHEMATICAL SPACE
  0x3000, // IDEOGRAPHIC SPACE
  0xfeff, // ZERO WIDTH NO-BREAK SPACE
]; exports.WHITESPACE_CHARS = WHITESPACE_CHARS;

 const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g; exports.skipWhiteSpace = skipWhiteSpace;

 const IS_WHITESPACE = new Uint8Array(65536); exports.IS_WHITESPACE = IS_WHITESPACE;
for (const char of exports.WHITESPACE_CHARS) {
  exports.IS_WHITESPACE[char] = 1;
}
}(whitespace));

(function (exports) {
Object.defineProperty(exports, "__esModule", {value: true});var _charcodes = charcodes;
var _whitespace = whitespace;

function computeIsIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code < 91) return true;
  if (code < 97) return code === 95;
  if (code < 123) return true;
  if (code < 128) return false;
  throw new Error("Should not be called with non-ASCII char code.");
}

 const IS_IDENTIFIER_CHAR = new Uint8Array(65536); exports.IS_IDENTIFIER_CHAR = IS_IDENTIFIER_CHAR;
for (let i = 0; i < 128; i++) {
  exports.IS_IDENTIFIER_CHAR[i] = computeIsIdentifierChar(i) ? 1 : 0;
}
for (let i = 128; i < 65536; i++) {
  exports.IS_IDENTIFIER_CHAR[i] = 1;
}
// Aside from whitespace and newlines, all characters outside the ASCII space are either
// identifier characters or invalid. Since we're not performing code validation, we can just
// treat all invalid characters as identifier characters.
for (const whitespaceChar of _whitespace.WHITESPACE_CHARS) {
  exports.IS_IDENTIFIER_CHAR[whitespaceChar] = 0;
}
exports.IS_IDENTIFIER_CHAR[0x2028] = 0;
exports.IS_IDENTIFIER_CHAR[0x2029] = 0;

 const IS_IDENTIFIER_START = exports.IS_IDENTIFIER_CHAR.slice(); exports.IS_IDENTIFIER_START = IS_IDENTIFIER_START;
for (let numChar = _charcodes.charCodes.digit0; numChar <= _charcodes.charCodes.digit9; numChar++) {
  exports.IS_IDENTIFIER_START[numChar] = 0;
}
}(identifier));

var readWord$1 = {};

var readWordTree = {};

Object.defineProperty(readWordTree, "__esModule", {value: true});// Generated file, do not edit! Run "yarn generate" to re-generate this file.
var _keywords$2 = keywords;
var _types$6 = types;

// prettier-ignore
 const READ_WORD_TREE = new Int32Array([
  // ""
  -1, 27, 783, 918, 1755, 2376, 2862, 3483, -1, 3699, -1, 4617, 4752, 4833, 5130, 5508, 5940, -1, 6480, 6939, 7749, 8181, 8451, 8613, -1, 8829, -1,
  // "a"
  -1, -1, 54, 243, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 432, -1, -1, -1, 675, -1, -1, -1,
  // "ab"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 81, -1, -1, -1, -1, -1, -1, -1,
  // "abs"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 108, -1, -1, -1, -1, -1, -1,
  // "abst"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 135, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstr"
  -1, 162, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstra"
  -1, -1, -1, 189, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "abstrac"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 216, -1, -1, -1, -1, -1, -1,
  // "abstract"
  _keywords$2.ContextualKeyword._abstract << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ac"
  -1, -1, -1, 270, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "acc"
  -1, -1, -1, -1, -1, 297, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "acce"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 324, -1, -1, -1, -1, -1, -1, -1,
  // "acces"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 351, -1, -1, -1, -1, -1, -1, -1,
  // "access"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 378, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "accesso"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 405, -1, -1, -1, -1, -1, -1, -1, -1,
  // "accessor"
  _keywords$2.ContextualKeyword._accessor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "as"
  _keywords$2.ContextualKeyword._as << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 459, -1, -1, -1, -1, -1, 594, -1,
  // "ass"
  -1, -1, -1, -1, -1, 486, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asse"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 513, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asser"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 540, -1, -1, -1, -1, -1, -1,
  // "assert"
  _keywords$2.ContextualKeyword._assert << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 567, -1, -1, -1, -1, -1, -1, -1,
  // "asserts"
  _keywords$2.ContextualKeyword._asserts << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asy"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 621, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "asyn"
  -1, -1, -1, 648, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "async"
  _keywords$2.ContextualKeyword._async << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "aw"
  -1, 702, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "awa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 729, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "awai"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 756, -1, -1, -1, -1, -1, -1,
  // "await"
  _keywords$2.ContextualKeyword._await << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "b"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 810, -1, -1, -1, -1, -1, -1, -1, -1,
  // "br"
  -1, -1, -1, -1, -1, 837, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "bre"
  -1, 864, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "brea"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 891, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "break"
  (_types$6.TokenType._break << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "c"
  -1, 945, -1, -1, -1, -1, -1, -1, 1107, -1, -1, -1, 1242, -1, -1, 1350, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ca"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 972, 1026, -1, -1, -1, -1, -1, -1,
  // "cas"
  -1, -1, -1, -1, -1, 999, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "case"
  (_types$6.TokenType._case << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cat"
  -1, -1, -1, 1053, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "catc"
  -1, -1, -1, -1, -1, -1, -1, -1, 1080, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "catch"
  (_types$6.TokenType._catch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ch"
  -1, -1, -1, -1, -1, 1134, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "che"
  -1, -1, -1, 1161, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "chec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1188, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "check"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1215, -1, -1, -1, -1, -1, -1, -1,
  // "checks"
  _keywords$2.ContextualKeyword._checks << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cl"
  -1, 1269, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cla"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1296, -1, -1, -1, -1, -1, -1, -1,
  // "clas"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1323, -1, -1, -1, -1, -1, -1, -1,
  // "class"
  (_types$6.TokenType._class << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "co"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1377, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "con"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1404, 1620, -1, -1, -1, -1, -1, -1,
  // "cons"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1431, -1, -1, -1, -1, -1, -1,
  // "const"
  (_types$6.TokenType._const << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1458, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1485, -1, -1, -1, -1, -1,
  // "constru"
  -1, -1, -1, 1512, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "construc"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1539, -1, -1, -1, -1, -1, -1,
  // "construct"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1566, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constructo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1593, -1, -1, -1, -1, -1, -1, -1, -1,
  // "constructor"
  _keywords$2.ContextualKeyword._constructor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "cont"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1647, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "conti"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1674, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "contin"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1701, -1, -1, -1, -1, -1,
  // "continu"
  -1, -1, -1, -1, -1, 1728, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "continue"
  (_types$6.TokenType._continue << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "d"
  -1, -1, -1, -1, -1, 1782, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2349, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "de"
  -1, -1, 1809, 1971, -1, -1, 2106, -1, -1, -1, -1, -1, 2241, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "deb"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1836, -1, -1, -1, -1, -1,
  // "debu"
  -1, -1, -1, -1, -1, -1, -1, 1863, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debug"
  -1, -1, -1, -1, -1, -1, -1, 1890, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugg"
  -1, -1, -1, -1, -1, 1917, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugge"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1944, -1, -1, -1, -1, -1, -1, -1, -1,
  // "debugger"
  (_types$6.TokenType._debugger << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "dec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1998, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "decl"
  -1, 2025, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "decla"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2052, -1, -1, -1, -1, -1, -1, -1, -1,
  // "declar"
  -1, -1, -1, -1, -1, 2079, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "declare"
  _keywords$2.ContextualKeyword._declare << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "def"
  -1, 2133, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "defa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2160, -1, -1, -1, -1, -1,
  // "defau"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2187, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "defaul"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2214, -1, -1, -1, -1, -1, -1,
  // "default"
  (_types$6.TokenType._default << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "del"
  -1, -1, -1, -1, -1, 2268, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "dele"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2295, -1, -1, -1, -1, -1, -1,
  // "delet"
  -1, -1, -1, -1, -1, 2322, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "delete"
  (_types$6.TokenType._delete << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "do"
  (_types$6.TokenType._do << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "e"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2403, -1, 2484, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2565, -1, -1,
  // "el"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2430, -1, -1, -1, -1, -1, -1, -1,
  // "els"
  -1, -1, -1, -1, -1, 2457, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "else"
  (_types$6.TokenType._else << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "en"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2511, -1, -1, -1, -1, -1,
  // "enu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2538, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "enum"
  _keywords$2.ContextualKeyword._enum << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ex"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2592, -1, -1, -1, 2727, -1, -1, -1, -1, -1, -1,
  // "exp"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2619, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "expo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2646, -1, -1, -1, -1, -1, -1, -1, -1,
  // "expor"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2673, -1, -1, -1, -1, -1, -1,
  // "export"
  (_types$6.TokenType._export << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2700, -1, -1, -1, -1, -1, -1, -1,
  // "exports"
  _keywords$2.ContextualKeyword._exports << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ext"
  -1, -1, -1, -1, -1, 2754, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "exte"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2781, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "exten"
  -1, -1, -1, -1, 2808, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "extend"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2835, -1, -1, -1, -1, -1, -1, -1,
  // "extends"
  (_types$6.TokenType._extends << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "f"
  -1, 2889, -1, -1, -1, -1, -1, -1, -1, 2997, -1, -1, -1, -1, -1, 3159, -1, -1, 3213, -1, -1, 3294, -1, -1, -1, -1, -1,
  // "fa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2916, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fal"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2943, -1, -1, -1, -1, -1, -1, -1,
  // "fals"
  -1, -1, -1, -1, -1, 2970, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "false"
  (_types$6.TokenType._false << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3024, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fin"
  -1, 3051, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fina"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3078, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "final"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3105, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "finall"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3132, -1,
  // "finally"
  (_types$6.TokenType._finally << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3186, -1, -1, -1, -1, -1, -1, -1, -1,
  // "for"
  (_types$6.TokenType._for << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3240, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3267, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "from"
  _keywords$2.ContextualKeyword._from << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "fun"
  -1, -1, -1, 3348, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "func"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3375, -1, -1, -1, -1, -1, -1,
  // "funct"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 3402, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "functi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3429, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "functio"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3456, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "function"
  (_types$6.TokenType._function << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "g"
  -1, -1, -1, -1, -1, 3510, -1, -1, -1, -1, -1, -1, 3564, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ge"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3537, -1, -1, -1, -1, -1, -1,
  // "get"
  _keywords$2.ContextualKeyword._get << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "gl"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3591, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "glo"
  -1, -1, 3618, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "glob"
  -1, 3645, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "globa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3672, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "global"
  _keywords$2.ContextualKeyword._global << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "i"
  -1, -1, -1, -1, -1, -1, 3726, -1, -1, -1, -1, -1, -1, 3753, 4077, -1, -1, -1, -1, 4590, -1, -1, -1, -1, -1, -1, -1,
  // "if"
  (_types$6.TokenType._if << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "im"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3780, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "imp"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3807, -1, -1, 3996, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impl"
  -1, -1, -1, -1, -1, 3834, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "imple"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3861, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "implem"
  -1, -1, -1, -1, -1, 3888, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impleme"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3915, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "implemen"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3942, -1, -1, -1, -1, -1, -1,
  // "implement"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3969, -1, -1, -1, -1, -1, -1, -1,
  // "implements"
  _keywords$2.ContextualKeyword._implements << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4023, -1, -1, -1, -1, -1, -1, -1, -1,
  // "impor"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4050, -1, -1, -1, -1, -1, -1,
  // "import"
  (_types$6.TokenType._import << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "in"
  (_types$6.TokenType._in << 1) + 1, -1, -1, -1, -1, -1, 4104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4185, 4401, -1, -1, -1, -1, -1, -1,
  // "inf"
  -1, -1, -1, -1, -1, 4131, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "infe"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4158, -1, -1, -1, -1, -1, -1, -1, -1,
  // "infer"
  _keywords$2.ContextualKeyword._infer << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ins"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4212, -1, -1, -1, -1, -1, -1,
  // "inst"
  -1, 4239, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "insta"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4266, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instan"
  -1, -1, -1, 4293, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanc"
  -1, -1, -1, -1, -1, 4320, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instance"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4347, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanceo"
  -1, -1, -1, -1, -1, -1, 4374, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "instanceof"
  (_types$6.TokenType._instanceof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "int"
  -1, -1, -1, -1, -1, 4428, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "inte"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4455, -1, -1, -1, -1, -1, -1, -1, -1,
  // "inter"
  -1, -1, -1, -1, -1, -1, 4482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interf"
  -1, 4509, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interfa"
  -1, -1, -1, 4536, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interfac"
  -1, -1, -1, -1, -1, 4563, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "interface"
  _keywords$2.ContextualKeyword._interface << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "is"
  _keywords$2.ContextualKeyword._is << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "k"
  -1, -1, -1, -1, -1, 4644, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ke"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4671, -1,
  // "key"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4698, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "keyo"
  -1, -1, -1, -1, -1, -1, 4725, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "keyof"
  _keywords$2.ContextualKeyword._keyof << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "l"
  -1, -1, -1, -1, -1, 4779, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "le"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4806, -1, -1, -1, -1, -1, -1,
  // "let"
  (_types$6.TokenType._let << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "m"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 4860, -1, -1, -1, -1, -1, 4995, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4887, -1, -1,
  // "mix"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 4914, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mixi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4941, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mixin"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4968, -1, -1, -1, -1, -1, -1, -1,
  // "mixins"
  _keywords$2.ContextualKeyword._mixins << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mo"
  -1, -1, -1, -1, 5022, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "mod"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5049, -1, -1, -1, -1, -1,
  // "modu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5076, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "modul"
  -1, -1, -1, -1, -1, 5103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "module"
  _keywords$2.ContextualKeyword._module << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "n"
  -1, 5157, -1, -1, -1, 5373, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5427, -1, -1, -1, -1, -1,
  // "na"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nam"
  -1, -1, -1, -1, -1, 5211, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "name"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5238, -1, -1, -1, -1, -1, -1, -1,
  // "names"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5265, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namesp"
  -1, 5292, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespa"
  -1, -1, -1, 5319, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespac"
  -1, -1, -1, -1, -1, 5346, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "namespace"
  _keywords$2.ContextualKeyword._namespace << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ne"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5400, -1, -1, -1,
  // "new"
  (_types$6.TokenType._new << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5454, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "nul"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5481, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "null"
  (_types$6.TokenType._null << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "o"
  -1, -1, -1, -1, -1, -1, 5535, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5562, -1, -1, -1, -1, 5697, 5751, -1, -1, -1, -1,
  // "of"
  _keywords$2.ContextualKeyword._of << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "op"
  -1, 5589, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5616, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opaq"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5643, -1, -1, -1, -1, -1,
  // "opaqu"
  -1, -1, -1, -1, -1, 5670, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "opaque"
  _keywords$2.ContextualKeyword._opaque << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ou"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5724, -1, -1, -1, -1, -1, -1,
  // "out"
  _keywords$2.ContextualKeyword._out << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ov"
  -1, -1, -1, -1, -1, 5778, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ove"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5805, -1, -1, -1, -1, -1, -1, -1, -1,
  // "over"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5832, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 5859, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overri"
  -1, -1, -1, -1, 5886, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "overrid"
  -1, -1, -1, -1, -1, 5913, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "override"
  _keywords$2.ContextualKeyword._override << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "p"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5967, -1, -1, 6345, -1, -1, -1, -1, -1,
  // "pr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 5994, -1, -1, -1, -1, -1, 6129, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pri"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6021, -1, -1, -1, -1,
  // "priv"
  -1, 6048, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "priva"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6075, -1, -1, -1, -1, -1, -1,
  // "privat"
  -1, -1, -1, -1, -1, 6102, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "private"
  _keywords$2.ContextualKeyword._private << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6156, -1, -1, -1, -1, -1, -1,
  // "prot"
  -1, -1, -1, -1, -1, 6183, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6318, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "prote"
  -1, -1, -1, 6210, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protec"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6237, -1, -1, -1, -1, -1, -1,
  // "protect"
  -1, -1, -1, -1, -1, 6264, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protecte"
  -1, -1, -1, -1, 6291, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "protected"
  _keywords$2.ContextualKeyword._protected << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "proto"
  _keywords$2.ContextualKeyword._proto << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pu"
  -1, -1, 6372, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "pub"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6399, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "publ"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 6426, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "publi"
  -1, -1, -1, 6453, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "public"
  _keywords$2.ContextualKeyword._public << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "r"
  -1, -1, -1, -1, -1, 6507, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "re"
  -1, 6534, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6696, -1, -1, 6831, -1, -1, -1, -1, -1, -1,
  // "rea"
  -1, -1, -1, -1, 6561, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "read"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6588, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "reado"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6615, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "readon"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6642, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "readonl"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6669, -1,
  // "readonly"
  _keywords$2.ContextualKeyword._readonly << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "req"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6723, -1, -1, -1, -1, -1,
  // "requ"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 6750, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "requi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6777, -1, -1, -1, -1, -1, -1, -1, -1,
  // "requir"
  -1, -1, -1, -1, -1, 6804, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "require"
  _keywords$2.ContextualKeyword._require << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ret"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6858, -1, -1, -1, -1, -1,
  // "retu"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6885, -1, -1, -1, -1, -1, -1, -1, -1,
  // "retur"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6912, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "return"
  (_types$6.TokenType._return << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "s"
  -1, 6966, -1, -1, -1, 7182, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7236, 7371, -1, 7479, -1, 7614, -1,
  // "sa"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6993, -1, -1, -1, -1, -1, -1,
  // "sat"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7020, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sati"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7047, -1, -1, -1, -1, -1, -1, -1,
  // "satis"
  -1, -1, -1, -1, -1, -1, 7074, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisf"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisfi"
  -1, -1, -1, -1, -1, 7128, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "satisfie"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7155, -1, -1, -1, -1, -1, -1, -1,
  // "satisfies"
  _keywords$2.ContextualKeyword._satisfies << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "se"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7209, -1, -1, -1, -1, -1, -1,
  // "set"
  _keywords$2.ContextualKeyword._set << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "st"
  -1, 7263, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sta"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7290, -1, -1, -1, -1, -1, -1,
  // "stat"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7317, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "stati"
  -1, -1, -1, 7344, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "static"
  _keywords$2.ContextualKeyword._static << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "su"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7398, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sup"
  -1, -1, -1, -1, -1, 7425, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "supe"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7452, -1, -1, -1, -1, -1, -1, -1, -1,
  // "super"
  (_types$6.TokenType._super << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sw"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7506, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "swi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7533, -1, -1, -1, -1, -1, -1,
  // "swit"
  -1, -1, -1, 7560, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "switc"
  -1, -1, -1, -1, -1, -1, -1, -1, 7587, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "switch"
  (_types$6.TokenType._switch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sy"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7641, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "sym"
  -1, -1, 7668, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symb"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7695, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symbo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7722, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "symbol"
  _keywords$2.ContextualKeyword._symbol << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "t"
  -1, -1, -1, -1, -1, -1, -1, -1, 7776, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7938, -1, -1, -1, -1, -1, -1, 8046, -1,
  // "th"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 7803, -1, -1, -1, -1, -1, -1, -1, -1, 7857, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7830, -1, -1, -1, -1, -1, -1, -1,
  // "this"
  (_types$6.TokenType._this << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7884, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "thro"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7911, -1, -1, -1,
  // "throw"
  (_types$6.TokenType._throw << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "tr"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7965, -1, -1, -1, 8019, -1,
  // "tru"
  -1, -1, -1, -1, -1, 7992, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "true"
  (_types$6.TokenType._true << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "try"
  (_types$6.TokenType._try << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "ty"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8073, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typ"
  -1, -1, -1, -1, -1, 8100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "type"
  _keywords$2.ContextualKeyword._type << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8127, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typeo"
  -1, -1, -1, -1, -1, -1, 8154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "typeof"
  (_types$6.TokenType._typeof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "u"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8208, -1, -1, -1, -1, 8343, -1, -1, -1, -1, -1, -1, -1,
  // "un"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8235, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "uni"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8262, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "uniq"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8289, -1, -1, -1, -1, -1,
  // "uniqu"
  -1, -1, -1, -1, -1, 8316, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "unique"
  _keywords$2.ContextualKeyword._unique << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "us"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8370, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "usi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8397, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "usin"
  -1, -1, -1, -1, -1, -1, -1, 8424, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "using"
  _keywords$2.ContextualKeyword._using << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "v"
  -1, 8478, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8532, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "va"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8505, -1, -1, -1, -1, -1, -1, -1, -1,
  // "var"
  (_types$6.TokenType._var << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "vo"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8559, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "voi"
  -1, -1, -1, -1, 8586, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "void"
  (_types$6.TokenType._void << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "w"
  -1, -1, -1, -1, -1, -1, -1, -1, 8640, 8748, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "wh"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8667, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "whi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8694, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "whil"
  -1, -1, -1, -1, -1, 8721, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "while"
  (_types$6.TokenType._while << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "wi"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8775, -1, -1, -1, -1, -1, -1,
  // "wit"
  -1, -1, -1, -1, -1, -1, -1, -1, 8802, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "with"
  (_types$6.TokenType._with << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "y"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, 8856, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yi"
  -1, -1, -1, -1, -1, 8883, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yie"
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8910, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yiel"
  -1, -1, -1, -1, 8937, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  // "yield"
  (_types$6.TokenType._yield << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
]); readWordTree.READ_WORD_TREE = READ_WORD_TREE;

Object.defineProperty(readWord$1, "__esModule", {value: true});var _base$1 = base;
var _charcodes$3 = charcodes;
var _identifier$1 = identifier;
var _index = tokenizer;
var _readWordTree = readWordTree;
var _types$5 = types;

/**
 * Read an identifier, producing either a name token or matching on one of the existing keywords.
 * For performance, we pre-generate big decision tree that we traverse. Each node represents a
 * prefix and has 27 values, where the first value is the token or contextual token, if any (-1 if
 * not), and the other 26 values are the transitions to other nodes, or -1 to stop.
 */
 function readWord() {
  let treePos = 0;
  let code = 0;
  let pos = _base$1.state.pos;
  while (pos < _base$1.input.length) {
    code = _base$1.input.charCodeAt(pos);
    if (code < _charcodes$3.charCodes.lowercaseA || code > _charcodes$3.charCodes.lowercaseZ) {
      break;
    }
    const next = _readWordTree.READ_WORD_TREE[treePos + (code - _charcodes$3.charCodes.lowercaseA) + 1];
    if (next === -1) {
      break;
    } else {
      treePos = next;
      pos++;
    }
  }

  const keywordValue = _readWordTree.READ_WORD_TREE[treePos];
  if (keywordValue > -1 && !_identifier$1.IS_IDENTIFIER_CHAR[code]) {
    _base$1.state.pos = pos;
    if (keywordValue & 1) {
      _index.finishToken.call(void 0, keywordValue >>> 1);
    } else {
      _index.finishToken.call(void 0, _types$5.TokenType.name, keywordValue >>> 1);
    }
    return;
  }

  while (pos < _base$1.input.length) {
    const ch = _base$1.input.charCodeAt(pos);
    if (_identifier$1.IS_IDENTIFIER_CHAR[ch]) {
      pos++;
    } else if (ch === _charcodes$3.charCodes.backslash) {
      // \u
      pos += 2;
      if (_base$1.input.charCodeAt(pos) === _charcodes$3.charCodes.leftCurlyBrace) {
        while (pos < _base$1.input.length && _base$1.input.charCodeAt(pos) !== _charcodes$3.charCodes.rightCurlyBrace) {
          pos++;
        }
        pos++;
      }
    } else if (ch === _charcodes$3.charCodes.atSign && _base$1.input.charCodeAt(pos + 1) === _charcodes$3.charCodes.atSign) {
      pos += 2;
    } else {
      break;
    }
  }
  _base$1.state.pos = pos;
  _index.finishToken.call(void 0, _types$5.TokenType.name);
} readWord$1.default = readWord;

Object.defineProperty(tokenizer, "__esModule", {value: true}); function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint max-len: 0 */

var _base = base;
var _util = util;
var _charcodes$2 = charcodes;
var _identifier = identifier;
var _whitespace = whitespace;
var _keywords$1 = keywords;
var _readWord = readWord$1; var _readWord2 = _interopRequireDefault$3(_readWord);
var _types$4 = types;

var IdentifierRole; (function (IdentifierRole) {
  const Access = 0; IdentifierRole[IdentifierRole["Access"] = Access] = "Access";
  const ExportAccess = Access + 1; IdentifierRole[IdentifierRole["ExportAccess"] = ExportAccess] = "ExportAccess";
  const TopLevelDeclaration = ExportAccess + 1; IdentifierRole[IdentifierRole["TopLevelDeclaration"] = TopLevelDeclaration] = "TopLevelDeclaration";
  const FunctionScopedDeclaration = TopLevelDeclaration + 1; IdentifierRole[IdentifierRole["FunctionScopedDeclaration"] = FunctionScopedDeclaration] = "FunctionScopedDeclaration";
  const BlockScopedDeclaration = FunctionScopedDeclaration + 1; IdentifierRole[IdentifierRole["BlockScopedDeclaration"] = BlockScopedDeclaration] = "BlockScopedDeclaration";
  const ObjectShorthandTopLevelDeclaration = BlockScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandTopLevelDeclaration"] = ObjectShorthandTopLevelDeclaration] = "ObjectShorthandTopLevelDeclaration";
  const ObjectShorthandFunctionScopedDeclaration = ObjectShorthandTopLevelDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandFunctionScopedDeclaration"] = ObjectShorthandFunctionScopedDeclaration] = "ObjectShorthandFunctionScopedDeclaration";
  const ObjectShorthandBlockScopedDeclaration = ObjectShorthandFunctionScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthandBlockScopedDeclaration"] = ObjectShorthandBlockScopedDeclaration] = "ObjectShorthandBlockScopedDeclaration";
  const ObjectShorthand = ObjectShorthandBlockScopedDeclaration + 1; IdentifierRole[IdentifierRole["ObjectShorthand"] = ObjectShorthand] = "ObjectShorthand";
  // Any identifier bound in an import statement, e.g. both A and b from
  // `import A, * as b from 'A';`
  const ImportDeclaration = ObjectShorthand + 1; IdentifierRole[IdentifierRole["ImportDeclaration"] = ImportDeclaration] = "ImportDeclaration";
  const ObjectKey = ImportDeclaration + 1; IdentifierRole[IdentifierRole["ObjectKey"] = ObjectKey] = "ObjectKey";
  // The `foo` in `import {foo as bar} from "./abc";`.
  const ImportAccess = ObjectKey + 1; IdentifierRole[IdentifierRole["ImportAccess"] = ImportAccess] = "ImportAccess";
})(IdentifierRole || (tokenizer.IdentifierRole = IdentifierRole = {}));

/**
 * Extra information on jsxTagStart tokens, used to determine which of the three
 * jsx functions are called in the automatic transform.
 */
var JSXRole; (function (JSXRole) {
  // The element is self-closing or has a body that resolves to empty. We
  // shouldn't emit children at all in this case.
  const NoChildren = 0; JSXRole[JSXRole["NoChildren"] = NoChildren] = "NoChildren";
  // The element has a single explicit child, which might still be an arbitrary
  // expression like an array. We should emit that expression as the children.
  const OneChild = NoChildren + 1; JSXRole[JSXRole["OneChild"] = OneChild] = "OneChild";
  // The element has at least two explicitly-specified children or has spread
  // children, so child positions are assumed to be "static". We should wrap
  // these children in an array.
  const StaticChildren = OneChild + 1; JSXRole[JSXRole["StaticChildren"] = StaticChildren] = "StaticChildren";
  // The element has a prop named "key" after a prop spread, so we should fall
  // back to the createElement function.
  const KeyAfterPropSpread = StaticChildren + 1; JSXRole[JSXRole["KeyAfterPropSpread"] = KeyAfterPropSpread] = "KeyAfterPropSpread";
})(JSXRole || (tokenizer.JSXRole = JSXRole = {}));

 function isDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.TopLevelDeclaration ||
    role === IdentifierRole.FunctionScopedDeclaration ||
    role === IdentifierRole.BlockScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandBlockScopedDeclaration
  );
} tokenizer.isDeclaration = isDeclaration;

 function isNonTopLevelDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.FunctionScopedDeclaration ||
    role === IdentifierRole.BlockScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandBlockScopedDeclaration
  );
} tokenizer.isNonTopLevelDeclaration = isNonTopLevelDeclaration;

 function isTopLevelDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.TopLevelDeclaration ||
    role === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole.ImportDeclaration
  );
} tokenizer.isTopLevelDeclaration = isTopLevelDeclaration;

 function isBlockScopedDeclaration(token) {
  const role = token.identifierRole;
  // Treat top-level declarations as block scope since the distinction doesn't matter here.
  return (
    role === IdentifierRole.TopLevelDeclaration ||
    role === IdentifierRole.BlockScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    role === IdentifierRole.ObjectShorthandBlockScopedDeclaration
  );
} tokenizer.isBlockScopedDeclaration = isBlockScopedDeclaration;

 function isFunctionScopedDeclaration(token) {
  const role = token.identifierRole;
  return (
    role === IdentifierRole.FunctionScopedDeclaration ||
    role === IdentifierRole.ObjectShorthandFunctionScopedDeclaration
  );
} tokenizer.isFunctionScopedDeclaration = isFunctionScopedDeclaration;

 function isObjectShorthandDeclaration(token) {
  return (
    token.identifierRole === IdentifierRole.ObjectShorthandTopLevelDeclaration ||
    token.identifierRole === IdentifierRole.ObjectShorthandBlockScopedDeclaration ||
    token.identifierRole === IdentifierRole.ObjectShorthandFunctionScopedDeclaration
  );
} tokenizer.isObjectShorthandDeclaration = isObjectShorthandDeclaration;

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.
 class Token {
  constructor() {
    this.type = _base.state.type;
    this.contextualKeyword = _base.state.contextualKeyword;
    this.start = _base.state.start;
    this.end = _base.state.end;
    this.scopeDepth = _base.state.scopeDepth;
    this.isType = _base.state.isType;
    this.identifierRole = null;
    this.jsxRole = null;
    this.shadowsGlobal = false;
    this.isAsyncOperation = false;
    this.contextId = null;
    this.rhsEndIndex = null;
    this.isExpression = false;
    this.numNullishCoalesceStarts = 0;
    this.numNullishCoalesceEnds = 0;
    this.isOptionalChainStart = false;
    this.isOptionalChainEnd = false;
    this.subscriptStartIndex = null;
    this.nullishStartIndex = null;
  }

  
  
  
  
  
  
  
  
  // Initially false for all tokens, then may be computed in a follow-up step that does scope
  // analysis.
  
  // Initially false for all tokens, but may be set during transform to mark it as containing an
  // await operation.
  
  
  // For assignments, the index of the RHS. For export tokens, the end of the export.
  
  // For class tokens, records if the class is a class expression or a class statement.
  
  // Number of times to insert a `nullishCoalesce(` snippet before this token.
  
  // Number of times to insert a `)` snippet after this token.
  
  // If true, insert an `optionalChain([` snippet before this token.
  
  // If true, insert a `])` snippet after this token.
  
  // Tag for `.`, `?.`, `[`, `?.[`, `(`, and `?.(` to denote the "root" token for this
  // subscript chain. This can be used to determine if this chain is an optional chain.
  
  // Tag for `??` operators to denote the root token for this nullish coalescing call.
  
} tokenizer.Token = Token;

// ## Tokenizer

// Move to the next token
 function next() {
  _base.state.tokens.push(new Token());
  nextToken();
} tokenizer.next = next;

// Call instead of next when inside a template, since that needs to be handled differently.
 function nextTemplateToken() {
  _base.state.tokens.push(new Token());
  _base.state.start = _base.state.pos;
  readTmplToken();
} tokenizer.nextTemplateToken = nextTemplateToken;

// The tokenizer never parses regexes by default. Instead, the parser is responsible for
// instructing it to parse a regex when we see a slash at the start of an expression.
 function retokenizeSlashAsRegex() {
  if (_base.state.type === _types$4.TokenType.assign) {
    --_base.state.pos;
  }
  readRegexp();
} tokenizer.retokenizeSlashAsRegex = retokenizeSlashAsRegex;

 function pushTypeContext(existingTokensInType) {
  for (let i = _base.state.tokens.length - existingTokensInType; i < _base.state.tokens.length; i++) {
    _base.state.tokens[i].isType = true;
  }
  const oldIsType = _base.state.isType;
  _base.state.isType = true;
  return oldIsType;
} tokenizer.pushTypeContext = pushTypeContext;

 function popTypeContext(oldIsType) {
  _base.state.isType = oldIsType;
} tokenizer.popTypeContext = popTypeContext;

 function eat(type) {
  if (match(type)) {
    next();
    return true;
  } else {
    return false;
  }
} tokenizer.eat = eat;

 function eatTypeToken(tokenType) {
  const oldIsType = _base.state.isType;
  _base.state.isType = true;
  eat(tokenType);
  _base.state.isType = oldIsType;
} tokenizer.eatTypeToken = eatTypeToken;

 function match(type) {
  return _base.state.type === type;
} tokenizer.match = match;

 function lookaheadType() {
  const snapshot = _base.state.snapshot();
  next();
  const type = _base.state.type;
  _base.state.restoreFromSnapshot(snapshot);
  return type;
} tokenizer.lookaheadType = lookaheadType;

 class TypeAndKeyword {
  
  
  constructor(type, contextualKeyword) {
    this.type = type;
    this.contextualKeyword = contextualKeyword;
  }
} tokenizer.TypeAndKeyword = TypeAndKeyword;

 function lookaheadTypeAndKeyword() {
  const snapshot = _base.state.snapshot();
  next();
  const type = _base.state.type;
  const contextualKeyword = _base.state.contextualKeyword;
  _base.state.restoreFromSnapshot(snapshot);
  return new TypeAndKeyword(type, contextualKeyword);
} tokenizer.lookaheadTypeAndKeyword = lookaheadTypeAndKeyword;

 function nextTokenStart() {
  return nextTokenStartSince(_base.state.pos);
} tokenizer.nextTokenStart = nextTokenStart;

 function nextTokenStartSince(pos) {
  _whitespace.skipWhiteSpace.lastIndex = pos;
  const skip = _whitespace.skipWhiteSpace.exec(_base.input);
  return pos + skip[0].length;
} tokenizer.nextTokenStartSince = nextTokenStartSince;

 function lookaheadCharCode() {
  return _base.input.charCodeAt(nextTokenStart());
} tokenizer.lookaheadCharCode = lookaheadCharCode;

// Read a single token, updating the parser object's token-related
// properties.
 function nextToken() {
  skipSpace();
  _base.state.start = _base.state.pos;
  if (_base.state.pos >= _base.input.length) {
    const tokens = _base.state.tokens;
    // We normally run past the end a bit, but if we're way past the end, avoid an infinite loop.
    // Also check the token positions rather than the types since sometimes we rewrite the token
    // type to something else.
    if (
      tokens.length >= 2 &&
      tokens[tokens.length - 1].start >= _base.input.length &&
      tokens[tokens.length - 2].start >= _base.input.length
    ) {
      _util.unexpected.call(void 0, "Unexpectedly reached the end of input.");
    }
    finishToken(_types$4.TokenType.eof);
    return;
  }
  readToken(_base.input.charCodeAt(_base.state.pos));
} tokenizer.nextToken = nextToken;

function readToken(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (
    _identifier.IS_IDENTIFIER_START[code] ||
    code === _charcodes$2.charCodes.backslash ||
    (code === _charcodes$2.charCodes.atSign && _base.input.charCodeAt(_base.state.pos + 1) === _charcodes$2.charCodes.atSign)
  ) {
    _readWord2.default.call(void 0, );
  } else {
    getTokenFromCode(code);
  }
}

function skipBlockComment() {
  while (
    _base.input.charCodeAt(_base.state.pos) !== _charcodes$2.charCodes.asterisk ||
    _base.input.charCodeAt(_base.state.pos + 1) !== _charcodes$2.charCodes.slash
  ) {
    _base.state.pos++;
    if (_base.state.pos > _base.input.length) {
      _util.unexpected.call(void 0, "Unterminated comment", _base.state.pos - 2);
      return;
    }
  }
  _base.state.pos += 2;
}

 function skipLineComment(startSkip) {
  let ch = _base.input.charCodeAt((_base.state.pos += startSkip));
  if (_base.state.pos < _base.input.length) {
    while (
      ch !== _charcodes$2.charCodes.lineFeed &&
      ch !== _charcodes$2.charCodes.carriageReturn &&
      ch !== _charcodes$2.charCodes.lineSeparator &&
      ch !== _charcodes$2.charCodes.paragraphSeparator &&
      ++_base.state.pos < _base.input.length
    ) {
      ch = _base.input.charCodeAt(_base.state.pos);
    }
  }
} tokenizer.skipLineComment = skipLineComment;

// Called at the start of the parse and after every token. Skips
// whitespace and comments.
 function skipSpace() {
  while (_base.state.pos < _base.input.length) {
    const ch = _base.input.charCodeAt(_base.state.pos);
    switch (ch) {
      case _charcodes$2.charCodes.carriageReturn:
        if (_base.input.charCodeAt(_base.state.pos + 1) === _charcodes$2.charCodes.lineFeed) {
          ++_base.state.pos;
        }

      case _charcodes$2.charCodes.lineFeed:
      case _charcodes$2.charCodes.lineSeparator:
      case _charcodes$2.charCodes.paragraphSeparator:
        ++_base.state.pos;
        break;

      case _charcodes$2.charCodes.slash:
        switch (_base.input.charCodeAt(_base.state.pos + 1)) {
          case _charcodes$2.charCodes.asterisk:
            _base.state.pos += 2;
            skipBlockComment();
            break;

          case _charcodes$2.charCodes.slash:
            skipLineComment(2);
            break;

          default:
            return;
        }
        break;

      default:
        if (_whitespace.IS_WHITESPACE[ch]) {
          ++_base.state.pos;
        } else {
          return;
        }
    }
  }
} tokenizer.skipSpace = skipSpace;

// Called at the end of every token. Sets various fields, and skips the space after the token, so
// that the next one's `start` will point at the right position.
 function finishToken(
  type,
  contextualKeyword = _keywords$1.ContextualKeyword.NONE,
) {
  _base.state.end = _base.state.pos;
  _base.state.type = type;
  _base.state.contextualKeyword = contextualKeyword;
} tokenizer.finishToken = finishToken;

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
function readToken_dot() {
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);
  if (nextChar >= _charcodes$2.charCodes.digit0 && nextChar <= _charcodes$2.charCodes.digit9) {
    readNumber(true);
    return;
  }

  if (nextChar === _charcodes$2.charCodes.dot && _base.input.charCodeAt(_base.state.pos + 2) === _charcodes$2.charCodes.dot) {
    _base.state.pos += 3;
    finishToken(_types$4.TokenType.ellipsis);
  } else {
    ++_base.state.pos;
    finishToken(_types$4.TokenType.dot);
  }
}

function readToken_slash() {
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);
  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    finishOp(_types$4.TokenType.assign, 2);
  } else {
    finishOp(_types$4.TokenType.slash, 1);
  }
}

function readToken_mult_modulo(code) {
  // '%*'
  let tokenType = code === _charcodes$2.charCodes.asterisk ? _types$4.TokenType.star : _types$4.TokenType.modulo;
  let width = 1;
  let nextChar = _base.input.charCodeAt(_base.state.pos + 1);

  // Exponentiation operator **
  if (code === _charcodes$2.charCodes.asterisk && nextChar === _charcodes$2.charCodes.asterisk) {
    width++;
    nextChar = _base.input.charCodeAt(_base.state.pos + 2);
    tokenType = _types$4.TokenType.exponent;
  }

  // Match *= or %=, disallowing *=> which can be valid in flow.
  if (
    nextChar === _charcodes$2.charCodes.equalsTo &&
    _base.input.charCodeAt(_base.state.pos + 2) !== _charcodes$2.charCodes.greaterThan
  ) {
    width++;
    tokenType = _types$4.TokenType.assign;
  }

  finishOp(tokenType, width);
}

function readToken_pipe_amp(code) {
  // '|&'
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);

  if (nextChar === code) {
    if (_base.input.charCodeAt(_base.state.pos + 2) === _charcodes$2.charCodes.equalsTo) {
      // ||= or &&=
      finishOp(_types$4.TokenType.assign, 3);
    } else {
      // || or &&
      finishOp(code === _charcodes$2.charCodes.verticalBar ? _types$4.TokenType.logicalOR : _types$4.TokenType.logicalAND, 2);
    }
    return;
  }

  if (code === _charcodes$2.charCodes.verticalBar) {
    // '|>'
    if (nextChar === _charcodes$2.charCodes.greaterThan) {
      finishOp(_types$4.TokenType.pipeline, 2);
      return;
    } else if (nextChar === _charcodes$2.charCodes.rightCurlyBrace && _base.isFlowEnabled) {
      // '|}'
      finishOp(_types$4.TokenType.braceBarR, 2);
      return;
    }
  }

  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    finishOp(_types$4.TokenType.assign, 2);
    return;
  }

  finishOp(code === _charcodes$2.charCodes.verticalBar ? _types$4.TokenType.bitwiseOR : _types$4.TokenType.bitwiseAND, 1);
}

function readToken_caret() {
  // '^'
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);
  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    finishOp(_types$4.TokenType.assign, 2);
  } else {
    finishOp(_types$4.TokenType.bitwiseXOR, 1);
  }
}

function readToken_plus_min(code) {
  // '+-'
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);

  if (nextChar === code) {
    // Tentatively call this a prefix operator, but it might be changed to postfix later.
    finishOp(_types$4.TokenType.preIncDec, 2);
    return;
  }

  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    finishOp(_types$4.TokenType.assign, 2);
  } else if (code === _charcodes$2.charCodes.plusSign) {
    finishOp(_types$4.TokenType.plus, 1);
  } else {
    finishOp(_types$4.TokenType.minus, 1);
  }
}

function readToken_lt() {
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);

  if (nextChar === _charcodes$2.charCodes.lessThan) {
    if (_base.input.charCodeAt(_base.state.pos + 2) === _charcodes$2.charCodes.equalsTo) {
      finishOp(_types$4.TokenType.assign, 3);
      return;
    }
    // We see <<, but need to be really careful about whether to treat it as a
    // true left-shift or as two < tokens.
    if (_base.state.isType) {
      // Within a type, << might come up in a snippet like `Array<<T>() => void>`,
      // so treat it as two < tokens. Importantly, this should only override <<
      // rather than other tokens like <= . If we treated <= as < in a type
      // context, then the snippet `a as T <= 1` would incorrectly start parsing
      // a type argument on T. We don't need to worry about `a as T << 1`
      // because TypeScript disallows that syntax.
      finishOp(_types$4.TokenType.lessThan, 1);
    } else {
      // Outside a type, this might be a true left-shift operator, or it might
      // still be two open-type-arg tokens, such as in `f<<T>() => void>()`. We
      // look at the token while considering the `f`, so we don't yet know that
      // we're in a type context. In this case, we initially tokenize as a
      // left-shift and correct after-the-fact as necessary in
      // tsParseTypeArgumentsWithPossibleBitshift .
      finishOp(_types$4.TokenType.bitShiftL, 2);
    }
    return;
  }

  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    // <=
    finishOp(_types$4.TokenType.relationalOrEqual, 2);
  } else {
    finishOp(_types$4.TokenType.lessThan, 1);
  }
}

function readToken_gt() {
  if (_base.state.isType) {
    // Avoid right-shift for things like `Array<Array<string>>` and
    // greater-than-or-equal for things like `const a: Array<number>=[];`.
    finishOp(_types$4.TokenType.greaterThan, 1);
    return;
  }

  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);

  if (nextChar === _charcodes$2.charCodes.greaterThan) {
    const size = _base.input.charCodeAt(_base.state.pos + 2) === _charcodes$2.charCodes.greaterThan ? 3 : 2;
    if (_base.input.charCodeAt(_base.state.pos + size) === _charcodes$2.charCodes.equalsTo) {
      finishOp(_types$4.TokenType.assign, size + 1);
      return;
    }
    finishOp(_types$4.TokenType.bitShiftR, size);
    return;
  }

  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    // >=
    finishOp(_types$4.TokenType.relationalOrEqual, 2);
  } else {
    finishOp(_types$4.TokenType.greaterThan, 1);
  }
}

/**
 * Reinterpret a possible > token when transitioning from a type to a non-type
 * context.
 *
 * This comes up in two situations where >= needs to be treated as one token:
 * - After an `as` expression, like in the code `a as T >= 1`.
 * - In a type argument in an expression context, e.g. `f(a < b, c >= d)`, we
 *   need to see the token as >= so that we get an error and backtrack to
 *   normal expression parsing.
 *
 * Other situations require >= to be seen as two tokens, e.g.
 * `const x: Array<T>=[];`, so it's important to treat > as its own token in
 * typical type parsing situations.
 */
 function rescan_gt() {
  if (_base.state.type === _types$4.TokenType.greaterThan) {
    _base.state.pos -= 1;
    readToken_gt();
  }
} tokenizer.rescan_gt = rescan_gt;

function readToken_eq_excl(code) {
  // '=!'
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);
  if (nextChar === _charcodes$2.charCodes.equalsTo) {
    finishOp(_types$4.TokenType.equality, _base.input.charCodeAt(_base.state.pos + 2) === _charcodes$2.charCodes.equalsTo ? 3 : 2);
    return;
  }
  if (code === _charcodes$2.charCodes.equalsTo && nextChar === _charcodes$2.charCodes.greaterThan) {
    // '=>'
    _base.state.pos += 2;
    finishToken(_types$4.TokenType.arrow);
    return;
  }
  finishOp(code === _charcodes$2.charCodes.equalsTo ? _types$4.TokenType.eq : _types$4.TokenType.bang, 1);
}

function readToken_question() {
  // '?'
  const nextChar = _base.input.charCodeAt(_base.state.pos + 1);
  const nextChar2 = _base.input.charCodeAt(_base.state.pos + 2);
  if (
    nextChar === _charcodes$2.charCodes.questionMark &&
    // In Flow (but not TypeScript), ??string is a valid type that should be
    // tokenized as two individual ? tokens.
    !(_base.isFlowEnabled && _base.state.isType)
  ) {
    if (nextChar2 === _charcodes$2.charCodes.equalsTo) {
      // '??='
      finishOp(_types$4.TokenType.assign, 3);
    } else {
      // '??'
      finishOp(_types$4.TokenType.nullishCoalescing, 2);
    }
  } else if (
    nextChar === _charcodes$2.charCodes.dot &&
    !(nextChar2 >= _charcodes$2.charCodes.digit0 && nextChar2 <= _charcodes$2.charCodes.digit9)
  ) {
    // '.' not followed by a number
    _base.state.pos += 2;
    finishToken(_types$4.TokenType.questionDot);
  } else {
    ++_base.state.pos;
    finishToken(_types$4.TokenType.question);
  }
}

 function getTokenFromCode(code) {
  switch (code) {
    case _charcodes$2.charCodes.numberSign:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.hash);
      return;

    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.

    case _charcodes$2.charCodes.dot:
      readToken_dot();
      return;

    // Punctuation tokens.
    case _charcodes$2.charCodes.leftParenthesis:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.parenL);
      return;
    case _charcodes$2.charCodes.rightParenthesis:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.parenR);
      return;
    case _charcodes$2.charCodes.semicolon:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.semi);
      return;
    case _charcodes$2.charCodes.comma:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.comma);
      return;
    case _charcodes$2.charCodes.leftSquareBracket:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.bracketL);
      return;
    case _charcodes$2.charCodes.rightSquareBracket:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.bracketR);
      return;

    case _charcodes$2.charCodes.leftCurlyBrace:
      if (_base.isFlowEnabled && _base.input.charCodeAt(_base.state.pos + 1) === _charcodes$2.charCodes.verticalBar) {
        finishOp(_types$4.TokenType.braceBarL, 2);
      } else {
        ++_base.state.pos;
        finishToken(_types$4.TokenType.braceL);
      }
      return;

    case _charcodes$2.charCodes.rightCurlyBrace:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.braceR);
      return;

    case _charcodes$2.charCodes.colon:
      if (_base.input.charCodeAt(_base.state.pos + 1) === _charcodes$2.charCodes.colon) {
        finishOp(_types$4.TokenType.doubleColon, 2);
      } else {
        ++_base.state.pos;
        finishToken(_types$4.TokenType.colon);
      }
      return;

    case _charcodes$2.charCodes.questionMark:
      readToken_question();
      return;
    case _charcodes$2.charCodes.atSign:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.at);
      return;

    case _charcodes$2.charCodes.graveAccent:
      ++_base.state.pos;
      finishToken(_types$4.TokenType.backQuote);
      return;

    case _charcodes$2.charCodes.digit0: {
      const nextChar = _base.input.charCodeAt(_base.state.pos + 1);
      // '0x', '0X', '0o', '0O', '0b', '0B'
      if (
        nextChar === _charcodes$2.charCodes.lowercaseX ||
        nextChar === _charcodes$2.charCodes.uppercaseX ||
        nextChar === _charcodes$2.charCodes.lowercaseO ||
        nextChar === _charcodes$2.charCodes.uppercaseO ||
        nextChar === _charcodes$2.charCodes.lowercaseB ||
        nextChar === _charcodes$2.charCodes.uppercaseB
      ) {
        readRadixNumber();
        return;
      }
    }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case _charcodes$2.charCodes.digit1:
    case _charcodes$2.charCodes.digit2:
    case _charcodes$2.charCodes.digit3:
    case _charcodes$2.charCodes.digit4:
    case _charcodes$2.charCodes.digit5:
    case _charcodes$2.charCodes.digit6:
    case _charcodes$2.charCodes.digit7:
    case _charcodes$2.charCodes.digit8:
    case _charcodes$2.charCodes.digit9:
      readNumber(false);
      return;

    // Quotes produce strings.
    case _charcodes$2.charCodes.quotationMark:
    case _charcodes$2.charCodes.apostrophe:
      readString(code);
      return;

    // Operators are parsed inline in tiny state machines. '=' (charCodes.equalsTo) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case _charcodes$2.charCodes.slash:
      readToken_slash();
      return;

    case _charcodes$2.charCodes.percentSign:
    case _charcodes$2.charCodes.asterisk:
      readToken_mult_modulo(code);
      return;

    case _charcodes$2.charCodes.verticalBar:
    case _charcodes$2.charCodes.ampersand:
      readToken_pipe_amp(code);
      return;

    case _charcodes$2.charCodes.caret:
      readToken_caret();
      return;

    case _charcodes$2.charCodes.plusSign:
    case _charcodes$2.charCodes.dash:
      readToken_plus_min(code);
      return;

    case _charcodes$2.charCodes.lessThan:
      readToken_lt();
      return;

    case _charcodes$2.charCodes.greaterThan:
      readToken_gt();
      return;

    case _charcodes$2.charCodes.equalsTo:
    case _charcodes$2.charCodes.exclamationMark:
      readToken_eq_excl(code);
      return;

    case _charcodes$2.charCodes.tilde:
      finishOp(_types$4.TokenType.tilde, 1);
      return;
  }

  _util.unexpected.call(void 0, `Unexpected character '${String.fromCharCode(code)}'`, _base.state.pos);
} tokenizer.getTokenFromCode = getTokenFromCode;

function finishOp(type, size) {
  _base.state.pos += size;
  finishToken(type);
}

function readRegexp() {
  const start = _base.state.pos;
  let escaped = false;
  let inClass = false;
  for (;;) {
    if (_base.state.pos >= _base.input.length) {
      _util.unexpected.call(void 0, "Unterminated regular expression", start);
      return;
    }
    const code = _base.input.charCodeAt(_base.state.pos);
    if (escaped) {
      escaped = false;
    } else {
      if (code === _charcodes$2.charCodes.leftSquareBracket) {
        inClass = true;
      } else if (code === _charcodes$2.charCodes.rightSquareBracket && inClass) {
        inClass = false;
      } else if (code === _charcodes$2.charCodes.slash && !inClass) {
        break;
      }
      escaped = code === _charcodes$2.charCodes.backslash;
    }
    ++_base.state.pos;
  }
  ++_base.state.pos;
  // Need to use `skipWord` because '\uXXXX' sequences are allowed here (don't ask).
  skipWord();

  finishToken(_types$4.TokenType.regexp);
}

/**
 * Read a decimal integer. Note that this can't be unified with the similar code
 * in readRadixNumber (which also handles hex digits) because "e" needs to be
 * the end of the integer so that we can properly handle scientific notation.
 */
function readInt() {
  while (true) {
    const code = _base.input.charCodeAt(_base.state.pos);
    if ((code >= _charcodes$2.charCodes.digit0 && code <= _charcodes$2.charCodes.digit9) || code === _charcodes$2.charCodes.underscore) {
      _base.state.pos++;
    } else {
      break;
    }
  }
}

function readRadixNumber() {
  _base.state.pos += 2; // 0x

  // Walk to the end of the number, allowing hex digits.
  while (true) {
    const code = _base.input.charCodeAt(_base.state.pos);
    if (
      (code >= _charcodes$2.charCodes.digit0 && code <= _charcodes$2.charCodes.digit9) ||
      (code >= _charcodes$2.charCodes.lowercaseA && code <= _charcodes$2.charCodes.lowercaseF) ||
      (code >= _charcodes$2.charCodes.uppercaseA && code <= _charcodes$2.charCodes.uppercaseF) ||
      code === _charcodes$2.charCodes.underscore
    ) {
      _base.state.pos++;
    } else {
      break;
    }
  }

  const nextChar = _base.input.charCodeAt(_base.state.pos);
  if (nextChar === _charcodes$2.charCodes.lowercaseN) {
    ++_base.state.pos;
    finishToken(_types$4.TokenType.bigint);
  } else {
    finishToken(_types$4.TokenType.num);
  }
}

// Read an integer, octal integer, or floating-point number.
function readNumber(startsWithDot) {
  let isBigInt = false;
  let isDecimal = false;

  if (!startsWithDot) {
    readInt();
  }

  let nextChar = _base.input.charCodeAt(_base.state.pos);
  if (nextChar === _charcodes$2.charCodes.dot) {
    ++_base.state.pos;
    readInt();
    nextChar = _base.input.charCodeAt(_base.state.pos);
  }

  if (nextChar === _charcodes$2.charCodes.uppercaseE || nextChar === _charcodes$2.charCodes.lowercaseE) {
    nextChar = _base.input.charCodeAt(++_base.state.pos);
    if (nextChar === _charcodes$2.charCodes.plusSign || nextChar === _charcodes$2.charCodes.dash) {
      ++_base.state.pos;
    }
    readInt();
    nextChar = _base.input.charCodeAt(_base.state.pos);
  }

  if (nextChar === _charcodes$2.charCodes.lowercaseN) {
    ++_base.state.pos;
    isBigInt = true;
  } else if (nextChar === _charcodes$2.charCodes.lowercaseM) {
    ++_base.state.pos;
    isDecimal = true;
  }

  if (isBigInt) {
    finishToken(_types$4.TokenType.bigint);
    return;
  }

  if (isDecimal) {
    finishToken(_types$4.TokenType.decimal);
    return;
  }

  finishToken(_types$4.TokenType.num);
}

function readString(quote) {
  _base.state.pos++;
  for (;;) {
    if (_base.state.pos >= _base.input.length) {
      _util.unexpected.call(void 0, "Unterminated string constant");
      return;
    }
    const ch = _base.input.charCodeAt(_base.state.pos);
    if (ch === _charcodes$2.charCodes.backslash) {
      _base.state.pos++;
    } else if (ch === quote) {
      break;
    }
    _base.state.pos++;
  }
  _base.state.pos++;
  finishToken(_types$4.TokenType.string);
}

// Reads template string tokens.
function readTmplToken() {
  for (;;) {
    if (_base.state.pos >= _base.input.length) {
      _util.unexpected.call(void 0, "Unterminated template");
      return;
    }
    const ch = _base.input.charCodeAt(_base.state.pos);
    if (
      ch === _charcodes$2.charCodes.graveAccent ||
      (ch === _charcodes$2.charCodes.dollarSign && _base.input.charCodeAt(_base.state.pos + 1) === _charcodes$2.charCodes.leftCurlyBrace)
    ) {
      if (_base.state.pos === _base.state.start && match(_types$4.TokenType.template)) {
        if (ch === _charcodes$2.charCodes.dollarSign) {
          _base.state.pos += 2;
          finishToken(_types$4.TokenType.dollarBraceL);
          return;
        } else {
          ++_base.state.pos;
          finishToken(_types$4.TokenType.backQuote);
          return;
        }
      }
      finishToken(_types$4.TokenType.template);
      return;
    }
    if (ch === _charcodes$2.charCodes.backslash) {
      _base.state.pos++;
    }
    _base.state.pos++;
  }
}

// Skip to the end of the current word. Note that this is the same as the snippet at the end of
// readWord, but calling skipWord from readWord seems to slightly hurt performance from some rough
// measurements.
 function skipWord() {
  while (_base.state.pos < _base.input.length) {
    const ch = _base.input.charCodeAt(_base.state.pos);
    if (_identifier.IS_IDENTIFIER_CHAR[ch]) {
      _base.state.pos++;
    } else if (ch === _charcodes$2.charCodes.backslash) {
      // \u
      _base.state.pos += 2;
      if (_base.input.charCodeAt(_base.state.pos) === _charcodes$2.charCodes.leftCurlyBrace) {
        while (
          _base.state.pos < _base.input.length &&
          _base.input.charCodeAt(_base.state.pos) !== _charcodes$2.charCodes.rightCurlyBrace
        ) {
          _base.state.pos++;
        }
        _base.state.pos++;
      }
    } else {
      break;
    }
  }
} tokenizer.skipWord = skipWord;

var getImportExportSpecifierInfo$1 = {};

Object.defineProperty(getImportExportSpecifierInfo$1, "__esModule", {value: true});var _types$3 = types;
















/**
 * Determine information about this named import or named export specifier.
 *
 * This syntax is the `a` from statements like these:
 * import {A} from "./foo";
 * export {A};
 * export {A} from "./foo";
 *
 * As it turns out, we can exactly characterize the syntax meaning by simply
 * counting the number of tokens, which can be from 1 to 4:
 * {A}
 * {type A}
 * {A as B}
 * {type A as B}
 *
 * In the type case, we never actually need the names in practice, so don't get
 * them.
 *
 * TODO: There's some redundancy with the type detection here and the isType
 * flag that's already present on tokens in TS mode. This function could
 * potentially be simplified and/or pushed to the call sites to avoid the object
 * allocation.
 */
 function getImportExportSpecifierInfo(
  tokens,
  index = tokens.currentIndex(),
) {
  let endIndex = index + 1;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {A}
    const name = tokens.identifierNameAtIndex(index);
    return {
      isType: false,
      leftName: name,
      rightName: name,
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {type A}
    return {
      isType: true,
      leftName: null,
      rightName: null,
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {A as B}
    return {
      isType: false,
      leftName: tokens.identifierNameAtIndex(index),
      rightName: tokens.identifierNameAtIndex(index + 2),
      endIndex,
    };
  }
  endIndex++;
  if (isSpecifierEnd(tokens, endIndex)) {
    // import {type A as B}
    return {
      isType: true,
      leftName: null,
      rightName: null,
      endIndex,
    };
  }
  throw new Error(`Unexpected import/export specifier at ${index}`);
} getImportExportSpecifierInfo$1.default = getImportExportSpecifierInfo;

function isSpecifierEnd(tokens, index) {
  const token = tokens.tokens[index];
  return token.type === _types$3.TokenType.braceR || token.type === _types$3.TokenType.comma;
}

var getNonTypeIdentifiers$1 = {};

var JSXTransformer$1 = {};

var xhtml = {};

Object.defineProperty(xhtml, "__esModule", {value: true});// Use a Map rather than object to avoid unexpected __proto__ access.
xhtml.default = new Map([
  ["quot", "\u0022"],
  ["amp", "&"],
  ["apos", "\u0027"],
  ["lt", "<"],
  ["gt", ">"],
  ["nbsp", "\u00A0"],
  ["iexcl", "\u00A1"],
  ["cent", "\u00A2"],
  ["pound", "\u00A3"],
  ["curren", "\u00A4"],
  ["yen", "\u00A5"],
  ["brvbar", "\u00A6"],
  ["sect", "\u00A7"],
  ["uml", "\u00A8"],
  ["copy", "\u00A9"],
  ["ordf", "\u00AA"],
  ["laquo", "\u00AB"],
  ["not", "\u00AC"],
  ["shy", "\u00AD"],
  ["reg", "\u00AE"],
  ["macr", "\u00AF"],
  ["deg", "\u00B0"],
  ["plusmn", "\u00B1"],
  ["sup2", "\u00B2"],
  ["sup3", "\u00B3"],
  ["acute", "\u00B4"],
  ["micro", "\u00B5"],
  ["para", "\u00B6"],
  ["middot", "\u00B7"],
  ["cedil", "\u00B8"],
  ["sup1", "\u00B9"],
  ["ordm", "\u00BA"],
  ["raquo", "\u00BB"],
  ["frac14", "\u00BC"],
  ["frac12", "\u00BD"],
  ["frac34", "\u00BE"],
  ["iquest", "\u00BF"],
  ["Agrave", "\u00C0"],
  ["Aacute", "\u00C1"],
  ["Acirc", "\u00C2"],
  ["Atilde", "\u00C3"],
  ["Auml", "\u00C4"],
  ["Aring", "\u00C5"],
  ["AElig", "\u00C6"],
  ["Ccedil", "\u00C7"],
  ["Egrave", "\u00C8"],
  ["Eacute", "\u00C9"],
  ["Ecirc", "\u00CA"],
  ["Euml", "\u00CB"],
  ["Igrave", "\u00CC"],
  ["Iacute", "\u00CD"],
  ["Icirc", "\u00CE"],
  ["Iuml", "\u00CF"],
  ["ETH", "\u00D0"],
  ["Ntilde", "\u00D1"],
  ["Ograve", "\u00D2"],
  ["Oacute", "\u00D3"],
  ["Ocirc", "\u00D4"],
  ["Otilde", "\u00D5"],
  ["Ouml", "\u00D6"],
  ["times", "\u00D7"],
  ["Oslash", "\u00D8"],
  ["Ugrave", "\u00D9"],
  ["Uacute", "\u00DA"],
  ["Ucirc", "\u00DB"],
  ["Uuml", "\u00DC"],
  ["Yacute", "\u00DD"],
  ["THORN", "\u00DE"],
  ["szlig", "\u00DF"],
  ["agrave", "\u00E0"],
  ["aacute", "\u00E1"],
  ["acirc", "\u00E2"],
  ["atilde", "\u00E3"],
  ["auml", "\u00E4"],
  ["aring", "\u00E5"],
  ["aelig", "\u00E6"],
  ["ccedil", "\u00E7"],
  ["egrave", "\u00E8"],
  ["eacute", "\u00E9"],
  ["ecirc", "\u00EA"],
  ["euml", "\u00EB"],
  ["igrave", "\u00EC"],
  ["iacute", "\u00ED"],
  ["icirc", "\u00EE"],
  ["iuml", "\u00EF"],
  ["eth", "\u00F0"],
  ["ntilde", "\u00F1"],
  ["ograve", "\u00F2"],
  ["oacute", "\u00F3"],
  ["ocirc", "\u00F4"],
  ["otilde", "\u00F5"],
  ["ouml", "\u00F6"],
  ["divide", "\u00F7"],
  ["oslash", "\u00F8"],
  ["ugrave", "\u00F9"],
  ["uacute", "\u00FA"],
  ["ucirc", "\u00FB"],
  ["uuml", "\u00FC"],
  ["yacute", "\u00FD"],
  ["thorn", "\u00FE"],
  ["yuml", "\u00FF"],
  ["OElig", "\u0152"],
  ["oelig", "\u0153"],
  ["Scaron", "\u0160"],
  ["scaron", "\u0161"],
  ["Yuml", "\u0178"],
  ["fnof", "\u0192"],
  ["circ", "\u02C6"],
  ["tilde", "\u02DC"],
  ["Alpha", "\u0391"],
  ["Beta", "\u0392"],
  ["Gamma", "\u0393"],
  ["Delta", "\u0394"],
  ["Epsilon", "\u0395"],
  ["Zeta", "\u0396"],
  ["Eta", "\u0397"],
  ["Theta", "\u0398"],
  ["Iota", "\u0399"],
  ["Kappa", "\u039A"],
  ["Lambda", "\u039B"],
  ["Mu", "\u039C"],
  ["Nu", "\u039D"],
  ["Xi", "\u039E"],
  ["Omicron", "\u039F"],
  ["Pi", "\u03A0"],
  ["Rho", "\u03A1"],
  ["Sigma", "\u03A3"],
  ["Tau", "\u03A4"],
  ["Upsilon", "\u03A5"],
  ["Phi", "\u03A6"],
  ["Chi", "\u03A7"],
  ["Psi", "\u03A8"],
  ["Omega", "\u03A9"],
  ["alpha", "\u03B1"],
  ["beta", "\u03B2"],
  ["gamma", "\u03B3"],
  ["delta", "\u03B4"],
  ["epsilon", "\u03B5"],
  ["zeta", "\u03B6"],
  ["eta", "\u03B7"],
  ["theta", "\u03B8"],
  ["iota", "\u03B9"],
  ["kappa", "\u03BA"],
  ["lambda", "\u03BB"],
  ["mu", "\u03BC"],
  ["nu", "\u03BD"],
  ["xi", "\u03BE"],
  ["omicron", "\u03BF"],
  ["pi", "\u03C0"],
  ["rho", "\u03C1"],
  ["sigmaf", "\u03C2"],
  ["sigma", "\u03C3"],
  ["tau", "\u03C4"],
  ["upsilon", "\u03C5"],
  ["phi", "\u03C6"],
  ["chi", "\u03C7"],
  ["psi", "\u03C8"],
  ["omega", "\u03C9"],
  ["thetasym", "\u03D1"],
  ["upsih", "\u03D2"],
  ["piv", "\u03D6"],
  ["ensp", "\u2002"],
  ["emsp", "\u2003"],
  ["thinsp", "\u2009"],
  ["zwnj", "\u200C"],
  ["zwj", "\u200D"],
  ["lrm", "\u200E"],
  ["rlm", "\u200F"],
  ["ndash", "\u2013"],
  ["mdash", "\u2014"],
  ["lsquo", "\u2018"],
  ["rsquo", "\u2019"],
  ["sbquo", "\u201A"],
  ["ldquo", "\u201C"],
  ["rdquo", "\u201D"],
  ["bdquo", "\u201E"],
  ["dagger", "\u2020"],
  ["Dagger", "\u2021"],
  ["bull", "\u2022"],
  ["hellip", "\u2026"],
  ["permil", "\u2030"],
  ["prime", "\u2032"],
  ["Prime", "\u2033"],
  ["lsaquo", "\u2039"],
  ["rsaquo", "\u203A"],
  ["oline", "\u203E"],
  ["frasl", "\u2044"],
  ["euro", "\u20AC"],
  ["image", "\u2111"],
  ["weierp", "\u2118"],
  ["real", "\u211C"],
  ["trade", "\u2122"],
  ["alefsym", "\u2135"],
  ["larr", "\u2190"],
  ["uarr", "\u2191"],
  ["rarr", "\u2192"],
  ["darr", "\u2193"],
  ["harr", "\u2194"],
  ["crarr", "\u21B5"],
  ["lArr", "\u21D0"],
  ["uArr", "\u21D1"],
  ["rArr", "\u21D2"],
  ["dArr", "\u21D3"],
  ["hArr", "\u21D4"],
  ["forall", "\u2200"],
  ["part", "\u2202"],
  ["exist", "\u2203"],
  ["empty", "\u2205"],
  ["nabla", "\u2207"],
  ["isin", "\u2208"],
  ["notin", "\u2209"],
  ["ni", "\u220B"],
  ["prod", "\u220F"],
  ["sum", "\u2211"],
  ["minus", "\u2212"],
  ["lowast", "\u2217"],
  ["radic", "\u221A"],
  ["prop", "\u221D"],
  ["infin", "\u221E"],
  ["ang", "\u2220"],
  ["and", "\u2227"],
  ["or", "\u2228"],
  ["cap", "\u2229"],
  ["cup", "\u222A"],
  ["int", "\u222B"],
  ["there4", "\u2234"],
  ["sim", "\u223C"],
  ["cong", "\u2245"],
  ["asymp", "\u2248"],
  ["ne", "\u2260"],
  ["equiv", "\u2261"],
  ["le", "\u2264"],
  ["ge", "\u2265"],
  ["sub", "\u2282"],
  ["sup", "\u2283"],
  ["nsub", "\u2284"],
  ["sube", "\u2286"],
  ["supe", "\u2287"],
  ["oplus", "\u2295"],
  ["otimes", "\u2297"],
  ["perp", "\u22A5"],
  ["sdot", "\u22C5"],
  ["lceil", "\u2308"],
  ["rceil", "\u2309"],
  ["lfloor", "\u230A"],
  ["rfloor", "\u230B"],
  ["lang", "\u2329"],
  ["rang", "\u232A"],
  ["loz", "\u25CA"],
  ["spades", "\u2660"],
  ["clubs", "\u2663"],
  ["hearts", "\u2665"],
  ["diams", "\u2666"],
]);

var getJSXPragmaInfo$1 = {};

Object.defineProperty(getJSXPragmaInfo$1, "__esModule", {value: true});








 function getJSXPragmaInfo(options) {
  const [base, suffix] = splitPragma(options.jsxPragma || "React.createElement");
  const [fragmentBase, fragmentSuffix] = splitPragma(options.jsxFragmentPragma || "React.Fragment");
  return {base, suffix, fragmentBase, fragmentSuffix};
} getJSXPragmaInfo$1.default = getJSXPragmaInfo;

function splitPragma(pragma) {
  let dotIndex = pragma.indexOf(".");
  if (dotIndex === -1) {
    dotIndex = pragma.length;
  }
  return [pragma.slice(0, dotIndex), pragma.slice(dotIndex)];
}

var Transformer$1 = {};

Object.defineProperty(Transformer$1, "__esModule", {value: true}); class Transformer {
  // Return true if anything was processed, false otherwise.
  

  getPrefixCode() {
    return "";
  }

  getHoistedCode() {
    return "";
  }

  getSuffixCode() {
    return "";
  }
} Transformer$1.default = Transformer;

Object.defineProperty(JSXTransformer$1, "__esModule", {value: true}); function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _xhtml = xhtml; var _xhtml2 = _interopRequireDefault$2(_xhtml);
var _tokenizer$2 = tokenizer;
var _types$2 = types;
var _charcodes$1 = charcodes;

var _getJSXPragmaInfo$1 = getJSXPragmaInfo$1; var _getJSXPragmaInfo2$1 = _interopRequireDefault$2(_getJSXPragmaInfo$1);

var _Transformer = Transformer$1; var _Transformer2 = _interopRequireDefault$2(_Transformer);

 class JSXTransformer extends _Transformer2.default {
  
  
  

  // State for calculating the line number of each JSX tag in development.
  __init() {this.lastLineNumber = 1;}
  __init2() {this.lastIndex = 0;}

  // In development, variable name holding the name of the current file.
  __init3() {this.filenameVarName = null;}
  // Mapping of claimed names for imports in the automatic transform, e,g.
  // {jsx: "_jsx"}. This determines which imports to generate in the prefix.
  __init4() {this.esmAutomaticImportNameResolutions = {};}
  // When automatically adding imports in CJS mode, we store the variable name
  // holding the imported CJS module so we can require it in the prefix.
  __init5() {this.cjsAutomaticModuleNameResolutions = {};}

  constructor(
     rootTransformer,
     tokens,
     importProcessor,
     nameManager,
     options,
  ) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;this.importProcessor = importProcessor;this.nameManager = nameManager;this.options = options;JSXTransformer.prototype.__init.call(this);JSXTransformer.prototype.__init2.call(this);JSXTransformer.prototype.__init3.call(this);JSXTransformer.prototype.__init4.call(this);JSXTransformer.prototype.__init5.call(this);    this.jsxPragmaInfo = _getJSXPragmaInfo2$1.default.call(void 0, options);
    this.isAutomaticRuntime = options.jsxRuntime === "automatic";
    this.jsxImportSource = options.jsxImportSource || "react";
  }

  process() {
    if (this.tokens.matches1(_types$2.TokenType.jsxTagStart)) {
      this.processJSXTag();
      return true;
    }
    return false;
  }

  getPrefixCode() {
    let prefix = "";
    if (this.filenameVarName) {
      prefix += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`;
    }
    if (this.isAutomaticRuntime) {
      if (this.importProcessor) {
        // CJS mode: emit require statements for all modules that were referenced.
        for (const [path, resolvedName] of Object.entries(this.cjsAutomaticModuleNameResolutions)) {
          prefix += `var ${resolvedName} = require("${path}");`;
        }
      } else {
        // ESM mode: consolidate and emit import statements for referenced names.
        const {createElement: createElementResolution, ...otherResolutions} =
          this.esmAutomaticImportNameResolutions;
        if (createElementResolution) {
          prefix += `import {createElement as ${createElementResolution}} from "${this.jsxImportSource}";`;
        }
        const importSpecifiers = Object.entries(otherResolutions)
          .map(([name, resolvedName]) => `${name} as ${resolvedName}`)
          .join(", ");
        if (importSpecifiers) {
          const importPath =
            this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
          prefix += `import {${importSpecifiers}} from "${importPath}";`;
        }
      }
    }
    return prefix;
  }

  processJSXTag() {
    const {jsxRole, start} = this.tokens.currentToken();
    // Calculate line number information at the very start (if in development
    // mode) so that the information is guaranteed to be queried in token order.
    const elementLocationCode = this.options.production ? null : this.getElementLocationCode(start);
    if (this.isAutomaticRuntime && jsxRole !== _tokenizer$2.JSXRole.KeyAfterPropSpread) {
      this.transformTagToJSXFunc(elementLocationCode, jsxRole);
    } else {
      this.transformTagToCreateElement(elementLocationCode);
    }
  }

  getElementLocationCode(firstTokenStart) {
    const lineNumber = this.getLineNumberForIndex(firstTokenStart);
    return `lineNumber: ${lineNumber}`;
  }

  /**
   * Get the line number for this source position. This is calculated lazily and
   * must be called in increasing order by index.
   */
  getLineNumberForIndex(index) {
    const code = this.tokens.code;
    while (this.lastIndex < index && this.lastIndex < code.length) {
      if (code[this.lastIndex] === "\n") {
        this.lastLineNumber++;
      }
      this.lastIndex++;
    }
    return this.lastLineNumber;
  }

  /**
   * Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is
   * the primary transformation for the automatic transform.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * jsxs('div', {a: 1, children: ["Hello", x]}, 2)
   */
  transformTagToJSXFunc(elementLocationCode, jsxRole) {
    const isStatic = jsxRole === _tokenizer$2.JSXRole.StaticChildren;
    // First tag is always jsxTagStart.
    this.tokens.replaceToken(this.getJSXFuncInvocationCode(isStatic));

    let keyCode = null;
    if (this.tokens.matches1(_types$2.TokenType.jsxTagEnd)) {
      // Fragment syntax.
      this.tokens.replaceToken(`${this.getFragmentCode()}, {`);
      this.processAutomaticChildrenAndEndProps(jsxRole);
    } else {
      // Normal open tag or self-closing tag.
      this.processTagIntro();
      this.tokens.appendCode(", {");
      keyCode = this.processProps(true);

      if (this.tokens.matches2(_types$2.TokenType.slash, _types$2.TokenType.jsxTagEnd)) {
        // Self-closing tag, no children to add, so close the props.
        this.tokens.appendCode("}");
      } else if (this.tokens.matches1(_types$2.TokenType.jsxTagEnd)) {
        // Tag with children.
        this.tokens.removeToken();
        this.processAutomaticChildrenAndEndProps(jsxRole);
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
      // If a key was present, move it to its own arg. Note that moving code
      // like this will cause line numbers to get out of sync within the JSX
      // element if the key expression has a newline in it. This is unfortunate,
      // but hopefully should be rare.
      if (keyCode) {
        this.tokens.appendCode(`, ${keyCode}`);
      }
    }
    if (!this.options.production) {
      // If the key wasn't already added, add it now so we can correctly set
      // positional args for jsxDEV.
      if (keyCode === null) {
        this.tokens.appendCode(", void 0");
      }
      this.tokens.appendCode(`, ${isStatic}, ${this.getDevSource(elementLocationCode)}, this`);
    }
    // We're at the close-tag or the end of a self-closing tag, so remove
    // everything else and close the function call.
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(_types$2.TokenType.jsxTagEnd)) {
      this.tokens.removeToken();
    }
    this.tokens.replaceToken(")");
  }

  /**
   * Convert the current JSX element to a createElement call. In the classic
   * runtime, this is the only case. In the automatic runtime, this is called
   * as a fallback in some situations.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * React.createElement('div', {a: 1, key: 2}, "Hello", x)
   */
  transformTagToCreateElement(elementLocationCode) {
    // First tag is always jsxTagStart.
    this.tokens.replaceToken(this.getCreateElementInvocationCode());

    if (this.tokens.matches1(_types$2.TokenType.jsxTagEnd)) {
      // Fragment syntax.
      this.tokens.replaceToken(`${this.getFragmentCode()}, null`);
      this.processChildren(true);
    } else {
      // Normal open tag or self-closing tag.
      this.processTagIntro();
      this.processPropsObjectWithDevInfo(elementLocationCode);

      if (this.tokens.matches2(_types$2.TokenType.slash, _types$2.TokenType.jsxTagEnd)) ; else if (this.tokens.matches1(_types$2.TokenType.jsxTagEnd)) {
        // Tag with children and a close-tag; process the children as args.
        this.tokens.removeToken();
        this.processChildren(true);
      } else {
        throw new Error("Expected either /> or > at the end of the tag.");
      }
    }
    // We're at the close-tag or the end of a self-closing tag, so remove
    // everything else and close the function call.
    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(_types$2.TokenType.jsxTagEnd)) {
      this.tokens.removeToken();
    }
    this.tokens.replaceToken(")");
  }

  /**
   * Get the code for the relevant function for this context: jsx, jsxs,
   * or jsxDEV. The following open-paren is included as well.
   *
   * These functions are only used for the automatic runtime, so they are always
   * auto-imported, but the auto-import will be either CJS or ESM based on the
   * target module format.
   */
  getJSXFuncInvocationCode(isStatic) {
    if (this.options.production) {
      if (isStatic) {
        return this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime");
      } else {
        return this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime");
      }
    } else {
      return this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
    }
  }

  /**
   * Return the code to use for the createElement function, e.g.
   * `React.createElement`, including the following open-paren.
   *
   * This is the main function to use for the classic runtime. For the
   * automatic runtime, this function is used as a fallback function to
   * preserve behavior when there is a prop spread followed by an explicit
   * key. In that automatic runtime case, the function should be automatically
   * imported.
   */
  getCreateElementInvocationCode() {
    if (this.isAutomaticRuntime) {
      return this.claimAutoImportedFuncInvocation("createElement", "");
    } else {
      const {jsxPragmaInfo} = this;
      const resolvedPragmaBaseName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.base) || jsxPragmaInfo.base
        : jsxPragmaInfo.base;
      return `${resolvedPragmaBaseName}${jsxPragmaInfo.suffix}(`;
    }
  }

  /**
   * Return the code to use as the component when compiling a shorthand
   * fragment, e.g. `React.Fragment`.
   *
   * This may be called from either the classic or automatic runtime, and
   * the value should be auto-imported for the automatic runtime.
   */
  getFragmentCode() {
    if (this.isAutomaticRuntime) {
      return this.claimAutoImportedName(
        "Fragment",
        this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime",
      );
    } else {
      const {jsxPragmaInfo} = this;
      const resolvedFragmentPragmaBaseName = this.importProcessor
        ? this.importProcessor.getIdentifierReplacement(jsxPragmaInfo.fragmentBase) ||
          jsxPragmaInfo.fragmentBase
        : jsxPragmaInfo.fragmentBase;
      return resolvedFragmentPragmaBaseName + jsxPragmaInfo.fragmentSuffix;
    }
  }

  /**
   * Return code that invokes the given function.
   *
   * When the imports transform is enabled, use the CJSImportTransformer
   * strategy of using `.call(void 0, ...` to avoid passing a `this` value in a
   * situation that would otherwise look like a method call.
   */
  claimAutoImportedFuncInvocation(funcName, importPathSuffix) {
    const funcCode = this.claimAutoImportedName(funcName, importPathSuffix);
    if (this.importProcessor) {
      return `${funcCode}.call(void 0, `;
    } else {
      return `${funcCode}(`;
    }
  }

  claimAutoImportedName(funcName, importPathSuffix) {
    if (this.importProcessor) {
      // CJS mode: claim a name for the module and mark it for import.
      const path = this.jsxImportSource + importPathSuffix;
      if (!this.cjsAutomaticModuleNameResolutions[path]) {
        this.cjsAutomaticModuleNameResolutions[path] =
          this.importProcessor.getFreeIdentifierForPath(path);
      }
      return `${this.cjsAutomaticModuleNameResolutions[path]}.${funcName}`;
    } else {
      // ESM mode: claim a name for this function and add it to the names that
      // should be auto-imported when the prefix is generated.
      if (!this.esmAutomaticImportNameResolutions[funcName]) {
        this.esmAutomaticImportNameResolutions[funcName] = this.nameManager.claimFreeName(
          `_${funcName}`,
        );
      }
      return this.esmAutomaticImportNameResolutions[funcName];
    }
  }

  /**
   * Process the first part of a tag, before any props.
   */
  processTagIntro() {
    // Walk forward until we see one of these patterns:
    // jsxName to start the first prop, preceded by another jsxName to end the tag name.
    // jsxName to start the first prop, preceded by greaterThan to end the type argument.
    // [open brace] to start the first prop.
    // [jsxTagEnd] to end the open-tag.
    // [slash, jsxTagEnd] to end the self-closing tag.
    let introEnd = this.tokens.currentIndex() + 1;
    while (
      this.tokens.tokens[introEnd].isType ||
      (!this.tokens.matches2AtIndex(introEnd - 1, _types$2.TokenType.jsxName, _types$2.TokenType.jsxName) &&
        !this.tokens.matches2AtIndex(introEnd - 1, _types$2.TokenType.greaterThan, _types$2.TokenType.jsxName) &&
        !this.tokens.matches1AtIndex(introEnd, _types$2.TokenType.braceL) &&
        !this.tokens.matches1AtIndex(introEnd, _types$2.TokenType.jsxTagEnd) &&
        !this.tokens.matches2AtIndex(introEnd, _types$2.TokenType.slash, _types$2.TokenType.jsxTagEnd))
    ) {
      introEnd++;
    }
    if (introEnd === this.tokens.currentIndex() + 1) {
      const tagName = this.tokens.identifierName();
      if (startsWithLowerCase(tagName)) {
        this.tokens.replaceToken(`'${tagName}'`);
      }
    }
    while (this.tokens.currentIndex() < introEnd) {
      this.rootTransformer.processToken();
    }
  }

  /**
   * Starting at the beginning of the props, add the props argument to
   * React.createElement, including the comma before it.
   */
  processPropsObjectWithDevInfo(elementLocationCode) {
    const devProps = this.options.production
      ? ""
      : `__self: this, __source: ${this.getDevSource(elementLocationCode)}`;
    if (!this.tokens.matches1(_types$2.TokenType.jsxName) && !this.tokens.matches1(_types$2.TokenType.braceL)) {
      if (devProps) {
        this.tokens.appendCode(`, {${devProps}}`);
      } else {
        this.tokens.appendCode(`, null`);
      }
      return;
    }
    this.tokens.appendCode(`, {`);
    this.processProps(false);
    if (devProps) {
      this.tokens.appendCode(` ${devProps}}`);
    } else {
      this.tokens.appendCode("}");
    }
  }

  /**
   * Transform the core part of the props, assuming that a { has already been
   * inserted before us and that a } will be inserted after us.
   *
   * If extractKeyCode is true (i.e. when using any jsx... function), any prop
   * named "key" has its code captured and returned rather than being emitted to
   * the output code. This shifts line numbers, and emitting the code later will
   * correct line numbers again. If no key is found or if extractKeyCode is
   * false, this function returns null.
   */
  processProps(extractKeyCode) {
    let keyCode = null;
    while (true) {
      if (this.tokens.matches2(_types$2.TokenType.jsxName, _types$2.TokenType.eq)) {
        // This is a regular key={value} or key="value" prop.
        const propName = this.tokens.identifierName();
        if (extractKeyCode && propName === "key") {
          if (keyCode !== null) {
            // The props list has multiple keys. Different implementations are
            // inconsistent about what to do here: as of this writing, Babel and
            // swc keep the *last* key and completely remove the rest, while
            // TypeScript uses the *first* key and leaves the others as regular
            // props. The React team collaborated with Babel on the
            // implementation of this behavior, so presumably the Babel behavior
            // is the one to use.
            // Since we won't ever be emitting the previous key code, we need to
            // at least emit its newlines here so that the line numbers match up
            // in the long run.
            this.tokens.appendCode(keyCode.replace(/[^\n]/g, ""));
          }
          // key
          this.tokens.removeToken();
          // =
          this.tokens.removeToken();
          const snapshot = this.tokens.snapshot();
          this.processPropValue();
          keyCode = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(snapshot);
          // Don't add a comma
          continue;
        } else {
          this.processPropName(propName);
          this.tokens.replaceToken(": ");
          this.processPropValue();
        }
      } else if (this.tokens.matches1(_types$2.TokenType.jsxName)) {
        // This is a shorthand prop like <input disabled />.
        const propName = this.tokens.identifierName();
        this.processPropName(propName);
        this.tokens.appendCode(": true");
      } else if (this.tokens.matches1(_types$2.TokenType.braceL)) {
        // This is prop spread, like <div {...getProps()}>, which we can pass
        // through fairly directly as an object spread.
        this.tokens.replaceToken("");
        this.rootTransformer.processBalancedCode();
        this.tokens.replaceToken("");
      } else {
        break;
      }
      this.tokens.appendCode(",");
    }
    return keyCode;
  }

  processPropName(propName) {
    if (propName.includes("-")) {
      this.tokens.replaceToken(`'${propName}'`);
    } else {
      this.tokens.copyToken();
    }
  }

  processPropValue() {
    if (this.tokens.matches1(_types$2.TokenType.braceL)) {
      this.tokens.replaceToken("");
      this.rootTransformer.processBalancedCode();
      this.tokens.replaceToken("");
    } else if (this.tokens.matches1(_types$2.TokenType.jsxTagStart)) {
      this.processJSXTag();
    } else {
      this.processStringPropValue();
    }
  }

  processStringPropValue() {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start + 1, token.end - 1);
    const replacementCode = formatJSXTextReplacement(valueCode);
    const literalCode = formatJSXStringValueLiteral(valueCode);
    this.tokens.replaceToken(literalCode + replacementCode);
  }

  /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */
  processAutomaticChildrenAndEndProps(jsxRole) {
    if (jsxRole === _tokenizer$2.JSXRole.StaticChildren) {
      this.tokens.appendCode(" children: [");
      this.processChildren(false);
      this.tokens.appendCode("]}");
    } else {
      // The parser information tells us whether we will see a real child or if
      // all remaining children (if any) will resolve to empty. If there are no
      // non-empty children, don't emit a children prop at all, but still
      // process children so that we properly transform the code into nothing.
      if (jsxRole === _tokenizer$2.JSXRole.OneChild) {
        this.tokens.appendCode(" children: ");
      }
      this.processChildren(false);
      this.tokens.appendCode("}");
    }
  }

  /**
   * Transform children into a comma-separated list, which will be either
   * arguments to createElement or array elements of a children prop.
   */
  processChildren(needsInitialComma) {
    let needsComma = needsInitialComma;
    while (true) {
      if (this.tokens.matches2(_types$2.TokenType.jsxTagStart, _types$2.TokenType.slash)) {
        // Closing tag, so no more children.
        return;
      }
      let didEmitElement = false;
      if (this.tokens.matches1(_types$2.TokenType.braceL)) {
        if (this.tokens.matches2(_types$2.TokenType.braceL, _types$2.TokenType.braceR)) {
          // Empty interpolations and comment-only interpolations are allowed
          // and don't create an extra child arg.
          this.tokens.replaceToken("");
          this.tokens.replaceToken("");
        } else {
          // Interpolated expression.
          this.tokens.replaceToken(needsComma ? ", " : "");
          this.rootTransformer.processBalancedCode();
          this.tokens.replaceToken("");
          didEmitElement = true;
        }
      } else if (this.tokens.matches1(_types$2.TokenType.jsxTagStart)) {
        // Child JSX element
        this.tokens.appendCode(needsComma ? ", " : "");
        this.processJSXTag();
        didEmitElement = true;
      } else if (this.tokens.matches1(_types$2.TokenType.jsxText) || this.tokens.matches1(_types$2.TokenType.jsxEmptyText)) {
        didEmitElement = this.processChildTextElement(needsComma);
      } else {
        throw new Error("Unexpected token when processing JSX children.");
      }
      if (didEmitElement) {
        needsComma = true;
      }
    }
  }

  /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */
  processChildTextElement(needsComma) {
    const token = this.tokens.currentToken();
    const valueCode = this.tokens.code.slice(token.start, token.end);
    const replacementCode = formatJSXTextReplacement(valueCode);
    const literalCode = formatJSXTextLiteral(valueCode);
    if (literalCode === '""') {
      this.tokens.replaceToken(replacementCode);
      return false;
    } else {
      this.tokens.replaceToken(`${needsComma ? ", " : ""}${literalCode}${replacementCode}`);
      return true;
    }
  }

  getDevSource(elementLocationCode) {
    return `{fileName: ${this.getFilenameVarName()}, ${elementLocationCode}}`;
  }

  getFilenameVarName() {
    if (!this.filenameVarName) {
      this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName");
    }
    return this.filenameVarName;
  }
} JSXTransformer$1.default = JSXTransformer;

/**
 * Spec for identifiers: https://tc39.github.io/ecma262/#prod-IdentifierStart.
 *
 * Really only treat anything starting with a-z as tag names.  `_`, `$`, `é`
 * should be treated as component names
 */
 function startsWithLowerCase(s) {
  const firstChar = s.charCodeAt(0);
  return firstChar >= _charcodes$1.charCodes.lowercaseA && firstChar <= _charcodes$1.charCodes.lowercaseZ;
} JSXTransformer$1.startsWithLowerCase = startsWithLowerCase;

/**
 * Turn the given jsxText string into a JS string literal. Leading and trailing
 * whitespace on lines is removed, except immediately after the open-tag and
 * before the close-tag. Empty lines are completely removed, and spaces are
 * added between lines after that.
 *
 * We use JSON.stringify to introduce escape characters as necessary, and trim
 * the start and end of each line and remove blank lines.
 */
function formatJSXTextLiteral(text) {
  let result = "";
  let whitespace = "";

  let isInInitialLineWhitespace = false;
  let seenNonWhitespace = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === " " || c === "\t" || c === "\r") {
      if (!isInInitialLineWhitespace) {
        whitespace += c;
      }
    } else if (c === "\n") {
      whitespace = "";
      isInInitialLineWhitespace = true;
    } else {
      if (seenNonWhitespace && isInInitialLineWhitespace) {
        result += " ";
      }
      result += whitespace;
      whitespace = "";
      if (c === "&") {
        const {entity, newI} = processEntity(text, i + 1);
        i = newI - 1;
        result += entity;
      } else {
        result += c;
      }
      seenNonWhitespace = true;
      isInInitialLineWhitespace = false;
    }
  }
  if (!isInInitialLineWhitespace) {
    result += whitespace;
  }
  return JSON.stringify(result);
}

/**
 * Produce the code that should be printed after the JSX text string literal,
 * with most content removed, but all newlines preserved and all spacing at the
 * end preserved.
 */
function formatJSXTextReplacement(text) {
  let numNewlines = 0;
  let numSpaces = 0;
  for (const c of text) {
    if (c === "\n") {
      numNewlines++;
      numSpaces = 0;
    } else if (c === " ") {
      numSpaces++;
    }
  }
  return "\n".repeat(numNewlines) + " ".repeat(numSpaces);
}

/**
 * Format a string in the value position of a JSX prop.
 *
 * Use the same implementation as convertAttribute from
 * babel-helper-builder-react-jsx.
 */
function formatJSXStringValueLiteral(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "\n") {
      if (/\s/.test(text[i + 1])) {
        result += " ";
        while (i < text.length && /\s/.test(text[i + 1])) {
          i++;
        }
      } else {
        result += "\n";
      }
    } else if (c === "&") {
      const {entity, newI} = processEntity(text, i + 1);
      result += entity;
      i = newI - 1;
    } else {
      result += c;
    }
  }
  return JSON.stringify(result);
}

/**
 * Starting at a &, see if there's an HTML entity (specified by name, decimal
 * char code, or hex char code) and return it if so.
 *
 * Modified from jsxReadString in babel-parser.
 */
function processEntity(text, indexAfterAmpersand) {
  let str = "";
  let count = 0;
  let entity;
  let i = indexAfterAmpersand;

  if (text[i] === "#") {
    let radix = 10;
    i++;
    let numStart;
    if (text[i] === "x") {
      radix = 16;
      i++;
      numStart = i;
      while (i < text.length && isHexDigit(text.charCodeAt(i))) {
        i++;
      }
    } else {
      numStart = i;
      while (i < text.length && isDecimalDigit(text.charCodeAt(i))) {
        i++;
      }
    }
    if (text[i] === ";") {
      const numStr = text.slice(numStart, i);
      if (numStr) {
        i++;
        entity = String.fromCodePoint(parseInt(numStr, radix));
      }
    }
  } else {
    while (i < text.length && count++ < 10) {
      const ch = text[i];
      i++;
      if (ch === ";") {
        entity = _xhtml2.default.get(str);
        break;
      }
      str += ch;
    }
  }

  if (!entity) {
    return {entity: "&", newI: indexAfterAmpersand};
  }
  return {entity, newI: i};
}

function isDecimalDigit(code) {
  return code >= _charcodes$1.charCodes.digit0 && code <= _charcodes$1.charCodes.digit9;
}

function isHexDigit(code) {
  return (
    (code >= _charcodes$1.charCodes.digit0 && code <= _charcodes$1.charCodes.digit9) ||
    (code >= _charcodes$1.charCodes.lowercaseA && code <= _charcodes$1.charCodes.lowercaseF) ||
    (code >= _charcodes$1.charCodes.uppercaseA && code <= _charcodes$1.charCodes.uppercaseF)
  );
}

Object.defineProperty(getNonTypeIdentifiers$1, "__esModule", {value: true}); function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _tokenizer$1 = tokenizer;
var _types$1 = types;

var _JSXTransformer = JSXTransformer$1;
var _getJSXPragmaInfo = getJSXPragmaInfo$1; var _getJSXPragmaInfo2 = _interopRequireDefault$1(_getJSXPragmaInfo);

 function getNonTypeIdentifiers(tokens, options) {
  const jsxPragmaInfo = _getJSXPragmaInfo2.default.call(void 0, options);
  const nonTypeIdentifiers = new Set();
  for (let i = 0; i < tokens.tokens.length; i++) {
    const token = tokens.tokens[i];
    if (
      token.type === _types$1.TokenType.name &&
      !token.isType &&
      (token.identifierRole === _tokenizer$1.IdentifierRole.Access ||
        token.identifierRole === _tokenizer$1.IdentifierRole.ObjectShorthand ||
        token.identifierRole === _tokenizer$1.IdentifierRole.ExportAccess) &&
      !token.shadowsGlobal
    ) {
      nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
    }
    if (token.type === _types$1.TokenType.jsxTagStart) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
    }
    if (
      token.type === _types$1.TokenType.jsxTagStart &&
      i + 1 < tokens.tokens.length &&
      tokens.tokens[i + 1].type === _types$1.TokenType.jsxTagEnd
    ) {
      nonTypeIdentifiers.add(jsxPragmaInfo.base);
      nonTypeIdentifiers.add(jsxPragmaInfo.fragmentBase);
    }
    if (token.type === _types$1.TokenType.jsxName && token.identifierRole === _tokenizer$1.IdentifierRole.Access) {
      const identifierName = tokens.identifierNameForToken(token);
      // Lower-case single-component tag names like "div" don't count.
      if (!_JSXTransformer.startsWithLowerCase.call(void 0, identifierName) || tokens.tokens[i + 1].type === _types$1.TokenType.dot) {
        nonTypeIdentifiers.add(tokens.identifierNameForToken(token));
      }
    }
  }
  return nonTypeIdentifiers;
} getNonTypeIdentifiers$1.getNonTypeIdentifiers = getNonTypeIdentifiers;

Object.defineProperty(CJSImportProcessor$1, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


var _tokenizer = tokenizer;
var _keywords = keywords;
var _types = types;

var _getImportExportSpecifierInfo = getImportExportSpecifierInfo$1; var _getImportExportSpecifierInfo2 = _interopRequireDefault(_getImportExportSpecifierInfo);
var _getNonTypeIdentifiers = getNonTypeIdentifiers$1;
















/**
 * Class responsible for preprocessing and bookkeeping import and export declarations within the
 * file.
 *
 * TypeScript uses a simpler mechanism that does not use functions like interopRequireDefault and
 * interopRequireWildcard, so we also allow that mode for compatibility.
 */
 class CJSImportProcessor {
   __init() {this.nonTypeIdentifiers = new Set();}
   __init2() {this.importInfoByPath = new Map();}
   __init3() {this.importsToReplace = new Map();}
   __init4() {this.identifierReplacements = new Map();}
   __init5() {this.exportBindingsByLocalName = new Map();}

  constructor(
     nameManager,
     tokens,
     enableLegacyTypeScriptModuleInterop,
     options,
     isTypeScriptTransformEnabled,
     keepUnusedImports,
     helperManager,
  ) {this.nameManager = nameManager;this.tokens = tokens;this.enableLegacyTypeScriptModuleInterop = enableLegacyTypeScriptModuleInterop;this.options = options;this.isTypeScriptTransformEnabled = isTypeScriptTransformEnabled;this.keepUnusedImports = keepUnusedImports;this.helperManager = helperManager;CJSImportProcessor.prototype.__init.call(this);CJSImportProcessor.prototype.__init2.call(this);CJSImportProcessor.prototype.__init3.call(this);CJSImportProcessor.prototype.__init4.call(this);CJSImportProcessor.prototype.__init5.call(this);}

  preprocessTokens() {
    for (let i = 0; i < this.tokens.tokens.length; i++) {
      if (
        this.tokens.matches1AtIndex(i, _types.TokenType._import) &&
        !this.tokens.matches3AtIndex(i, _types.TokenType._import, _types.TokenType.name, _types.TokenType.eq)
      ) {
        this.preprocessImportAtIndex(i);
      }
      if (
        this.tokens.matches1AtIndex(i, _types.TokenType._export) &&
        !this.tokens.matches2AtIndex(i, _types.TokenType._export, _types.TokenType.eq)
      ) {
        this.preprocessExportAtIndex(i);
      }
    }
    this.generateImportReplacements();
  }

  /**
   * In TypeScript, import statements that only import types should be removed.
   * This includes `import {} from 'foo';`, but not `import 'foo';`.
   */
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = _getNonTypeIdentifiers.getNonTypeIdentifiers.call(void 0, this.tokens, this.options);
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      if (
        importInfo.hasBareImport ||
        importInfo.hasStarExport ||
        importInfo.exportStarNames.length > 0 ||
        importInfo.namedExports.length > 0
      ) {
        continue;
      }
      const names = [
        ...importInfo.defaultNames,
        ...importInfo.wildcardNames,
        ...importInfo.namedImports.map(({localName}) => localName),
      ];
      if (names.every((name) => this.shouldAutomaticallyElideImportedName(name))) {
        this.importsToReplace.set(path, "");
      }
    }
  }

  shouldAutomaticallyElideImportedName(name) {
    return (
      this.isTypeScriptTransformEnabled &&
      !this.keepUnusedImports &&
      !this.nonTypeIdentifiers.has(name)
    );
  }

   generateImportReplacements() {
    for (const [path, importInfo] of this.importInfoByPath.entries()) {
      const {
        defaultNames,
        wildcardNames,
        namedImports,
        namedExports,
        exportStarNames,
        hasStarExport,
      } = importInfo;

      if (
        defaultNames.length === 0 &&
        wildcardNames.length === 0 &&
        namedImports.length === 0 &&
        namedExports.length === 0 &&
        exportStarNames.length === 0 &&
        !hasStarExport
      ) {
        // Import is never used, so don't even assign a name.
        this.importsToReplace.set(path, `require('${path}');`);
        continue;
      }

      const primaryImportName = this.getFreeIdentifierForPath(path);
      let secondaryImportName;
      if (this.enableLegacyTypeScriptModuleInterop) {
        secondaryImportName = primaryImportName;
      } else {
        secondaryImportName =
          wildcardNames.length > 0 ? wildcardNames[0] : this.getFreeIdentifierForPath(path);
      }
      let requireCode = `var ${primaryImportName} = require('${path}');`;
      if (wildcardNames.length > 0) {
        for (const wildcardName of wildcardNames) {
          const moduleExpr = this.enableLegacyTypeScriptModuleInterop
            ? primaryImportName
            : `${this.helperManager.getHelperName("interopRequireWildcard")}(${primaryImportName})`;
          requireCode += ` var ${wildcardName} = ${moduleExpr};`;
        }
      } else if (exportStarNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName(
          "interopRequireWildcard",
        )}(${primaryImportName});`;
      } else if (defaultNames.length > 0 && secondaryImportName !== primaryImportName) {
        requireCode += ` var ${secondaryImportName} = ${this.helperManager.getHelperName(
          "interopRequireDefault",
        )}(${primaryImportName});`;
      }

      for (const {importedName, localName} of namedExports) {
        requireCode += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom",
        )}(${primaryImportName}, '${localName}', '${importedName}');`;
      }
      for (const exportStarName of exportStarNames) {
        requireCode += ` exports.${exportStarName} = ${secondaryImportName};`;
      }
      if (hasStarExport) {
        requireCode += ` ${this.helperManager.getHelperName(
          "createStarExport",
        )}(${primaryImportName});`;
      }

      this.importsToReplace.set(path, requireCode);

      for (const defaultName of defaultNames) {
        this.identifierReplacements.set(defaultName, `${secondaryImportName}.default`);
      }
      for (const {importedName, localName} of namedImports) {
        this.identifierReplacements.set(localName, `${primaryImportName}.${importedName}`);
      }
    }
  }

  getFreeIdentifierForPath(path) {
    const components = path.split("/");
    const lastComponent = components[components.length - 1];
    const baseName = lastComponent.replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${baseName}`);
  }

   preprocessImportAtIndex(index) {
    const defaultNames = [];
    const wildcardNames = [];
    const namedImports = [];

    index++;
    if (
      (this.tokens.matchesContextualAtIndex(index, _keywords.ContextualKeyword._type) ||
        this.tokens.matches1AtIndex(index, _types.TokenType._typeof)) &&
      !this.tokens.matches1AtIndex(index + 1, _types.TokenType.comma) &&
      !this.tokens.matchesContextualAtIndex(index + 1, _keywords.ContextualKeyword._from)
    ) {
      // import type declaration, so no need to process anything.
      return;
    }

    if (this.tokens.matches1AtIndex(index, _types.TokenType.parenL)) {
      // Dynamic import, so nothing to do
      return;
    }

    if (this.tokens.matches1AtIndex(index, _types.TokenType.name)) {
      defaultNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
      if (this.tokens.matches1AtIndex(index, _types.TokenType.comma)) {
        index++;
      }
    }

    if (this.tokens.matches1AtIndex(index, _types.TokenType.star)) {
      // * as
      index += 2;
      wildcardNames.push(this.tokens.identifierNameAtIndex(index));
      index++;
    }

    if (this.tokens.matches1AtIndex(index, _types.TokenType.braceL)) {
      const result = this.getNamedImports(index + 1);
      index = result.newIndex;

      for (const namedImport of result.namedImports) {
        // Treat {default as X} as a default import to ensure usage of require interop helper
        if (namedImport.importedName === "default") {
          defaultNames.push(namedImport.localName);
        } else {
          namedImports.push(namedImport);
        }
      }
    }

    if (this.tokens.matchesContextualAtIndex(index, _keywords.ContextualKeyword._from)) {
      index++;
    }

    if (!this.tokens.matches1AtIndex(index, _types.TokenType.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.defaultNames.push(...defaultNames);
    importInfo.wildcardNames.push(...wildcardNames);
    importInfo.namedImports.push(...namedImports);
    if (defaultNames.length === 0 && wildcardNames.length === 0 && namedImports.length === 0) {
      importInfo.hasBareImport = true;
    }
  }

   preprocessExportAtIndex(index) {
    if (
      this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType._var) ||
      this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType._let) ||
      this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType._const)
    ) {
      this.preprocessVarExportAtIndex(index);
    } else if (
      this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType._function) ||
      this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType._class)
    ) {
      const exportName = this.tokens.identifierNameAtIndex(index + 2);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches3AtIndex(index, _types.TokenType._export, _types.TokenType.name, _types.TokenType._function)) {
      const exportName = this.tokens.identifierNameAtIndex(index + 3);
      this.addExportBinding(exportName, exportName);
    } else if (this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType.braceL)) {
      this.preprocessNamedExportAtIndex(index);
    } else if (this.tokens.matches2AtIndex(index, _types.TokenType._export, _types.TokenType.star)) {
      this.preprocessExportStarAtIndex(index);
    }
  }

   preprocessVarExportAtIndex(index) {
    let depth = 0;
    // Handle cases like `export let {x} = y;`, starting at the open-brace in that case.
    for (let i = index + 2; ; i++) {
      if (
        this.tokens.matches1AtIndex(i, _types.TokenType.braceL) ||
        this.tokens.matches1AtIndex(i, _types.TokenType.dollarBraceL) ||
        this.tokens.matches1AtIndex(i, _types.TokenType.bracketL)
      ) {
        depth++;
      } else if (
        this.tokens.matches1AtIndex(i, _types.TokenType.braceR) ||
        this.tokens.matches1AtIndex(i, _types.TokenType.bracketR)
      ) {
        depth--;
      } else if (depth === 0 && !this.tokens.matches1AtIndex(i, _types.TokenType.name)) {
        break;
      } else if (this.tokens.matches1AtIndex(1, _types.TokenType.eq)) {
        const endIndex = this.tokens.currentToken().rhsEndIndex;
        if (endIndex == null) {
          throw new Error("Expected = token with an end index.");
        }
        i = endIndex - 1;
      } else {
        const token = this.tokens.tokens[i];
        if (_tokenizer.isDeclaration.call(void 0, token)) {
          const exportName = this.tokens.identifierNameAtIndex(i);
          this.identifierReplacements.set(exportName, `exports.${exportName}`);
        }
      }
    }
  }

  /**
   * Walk this export statement just in case it's an export...from statement.
   * If it is, combine it into the import info for that path. Otherwise, just
   * bail out; it'll be handled later.
   */
   preprocessNamedExportAtIndex(index) {
    // export {
    index += 2;
    const {newIndex, namedImports} = this.getNamedImports(index);
    index = newIndex;

    if (this.tokens.matchesContextualAtIndex(index, _keywords.ContextualKeyword._from)) {
      index++;
    } else {
      // Reinterpret "a as b" to be local/exported rather than imported/local.
      for (const {importedName: localName, localName: exportedName} of namedImports) {
        this.addExportBinding(localName, exportedName);
      }
      return;
    }

    if (!this.tokens.matches1AtIndex(index, _types.TokenType.string)) {
      throw new Error("Expected string token at the end of import statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    importInfo.namedExports.push(...namedImports);
  }

   preprocessExportStarAtIndex(index) {
    let exportedName = null;
    if (this.tokens.matches3AtIndex(index, _types.TokenType._export, _types.TokenType.star, _types.TokenType._as)) {
      // export * as
      index += 3;
      exportedName = this.tokens.identifierNameAtIndex(index);
      // foo from
      index += 2;
    } else {
      // export * from
      index += 3;
    }
    if (!this.tokens.matches1AtIndex(index, _types.TokenType.string)) {
      throw new Error("Expected string token at the end of star export statement.");
    }
    const path = this.tokens.stringValueAtIndex(index);
    const importInfo = this.getImportInfo(path);
    if (exportedName !== null) {
      importInfo.exportStarNames.push(exportedName);
    } else {
      importInfo.hasStarExport = true;
    }
  }

   getNamedImports(index) {
    const namedImports = [];
    while (true) {
      if (this.tokens.matches1AtIndex(index, _types.TokenType.braceR)) {
        index++;
        break;
      }

      const specifierInfo = _getImportExportSpecifierInfo2.default.call(void 0, this.tokens, index);
      index = specifierInfo.endIndex;
      if (!specifierInfo.isType) {
        namedImports.push({
          importedName: specifierInfo.leftName,
          localName: specifierInfo.rightName,
        });
      }

      if (this.tokens.matches2AtIndex(index, _types.TokenType.comma, _types.TokenType.braceR)) {
        index += 2;
        break;
      } else if (this.tokens.matches1AtIndex(index, _types.TokenType.braceR)) {
        index++;
        break;
      } else if (this.tokens.matches1AtIndex(index, _types.TokenType.comma)) {
        index++;
      } else {
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[index])}`);
      }
    }
    return {newIndex: index, namedImports};
  }

  /**
   * Get a mutable import info object for this path, creating one if it doesn't
   * exist yet.
   */
   getImportInfo(path) {
    const existingInfo = this.importInfoByPath.get(path);
    if (existingInfo) {
      return existingInfo;
    }
    const newInfo = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: false,
      exportStarNames: [],
      hasStarExport: false,
    };
    this.importInfoByPath.set(path, newInfo);
    return newInfo;
  }

   addExportBinding(localName, exportedName) {
    if (!this.exportBindingsByLocalName.has(localName)) {
      this.exportBindingsByLocalName.set(localName, []);
    }
    this.exportBindingsByLocalName.get(localName).push(exportedName);
  }

  /**
   * Return the code to use for the import for this path, or the empty string if
   * the code has already been "claimed" by a previous import.
   */
  claimImportCode(importPath) {
    const result = this.importsToReplace.get(importPath);
    this.importsToReplace.set(importPath, "");
    return result || "";
  }

  getIdentifierReplacement(identifierName) {
    return this.identifierReplacements.get(identifierName) || null;
  }

  /**
   * Return a string like `exports.foo = exports.bar`.
   */
  resolveExportBinding(assignedName) {
    const exportedNames = this.exportBindingsByLocalName.get(assignedName);
    if (!exportedNames || exportedNames.length === 0) {
      return null;
    }
    return exportedNames.map((exportedName) => `exports.${exportedName}`).join(" = ");
  }

  /**
   * Return all imported/exported names where we might be interested in whether usages of those
   * names are shadowed.
   */
  getGlobalNames() {
    return new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys(),
    ]);
  }
} var _default$1 = CJSImportProcessor$1.default = CJSImportProcessor;

var computeSourceMap$1 = {};

var genMapping_umd = {exports: {}};

var setArray_umd = {exports: {}};

(function (module, exports) {
(function (global, factory) {
    factory(exports) ;
})(commonjsGlobal, (function (exports) {
    /**
     * SetArray acts like a `Set` (allowing only one occurrence of a string `key`), but provides the
     * index of the `key` in the backing array.
     *
     * This is designed to allow synchronizing a second array with the contents of the backing array,
     * like how in a sourcemap `sourcesContent[i]` is the source content associated with `source[i]`,
     * and there are never duplicates.
     */
    class SetArray {
        constructor() {
            this._indexes = { __proto__: null };
            this.array = [];
        }
    }
    /**
     * Typescript doesn't allow friend access to private fields, so this just casts the set into a type
     * with public access modifiers.
     */
    function cast(set) {
        return set;
    }
    /**
     * Gets the index associated with `key` in the backing array, if it is already present.
     */
    function get(setarr, key) {
        return cast(setarr)._indexes[key];
    }
    /**
     * Puts `key` into the backing array, if it is not already present. Returns
     * the index of the `key` in the backing array.
     */
    function put(setarr, key) {
        // The key may or may not be present. If it is present, it's a number.
        const index = get(setarr, key);
        if (index !== undefined)
            return index;
        const { array, _indexes: indexes } = cast(setarr);
        const length = array.push(key);
        return (indexes[key] = length - 1);
    }
    /**
     * Pops the last added item out of the SetArray.
     */
    function pop(setarr) {
        const { array, _indexes: indexes } = cast(setarr);
        if (array.length === 0)
            return;
        const last = array.pop();
        indexes[last] = undefined;
    }
    /**
     * Removes the key, if it exists in the set.
     */
    function remove(setarr, key) {
        const index = get(setarr, key);
        if (index === undefined)
            return;
        const { array, _indexes: indexes } = cast(setarr);
        for (let i = index + 1; i < array.length; i++) {
            const k = array[i];
            array[i - 1] = k;
            indexes[k]--;
        }
        indexes[key] = undefined;
        array.pop();
    }

    exports.SetArray = SetArray;
    exports.get = get;
    exports.pop = pop;
    exports.put = put;
    exports.remove = remove;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

}(setArray_umd, setArray_umd.exports));

var sourcemapCodec_umd = {exports: {}};

(function (module, exports) {
(function (global, factory) {
    factory(exports) ;
})(commonjsGlobal, (function (exports) {
    const comma = ','.charCodeAt(0);
    const semicolon = ';'.charCodeAt(0);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const intToChar = new Uint8Array(64); // 64 possible chars.
    const charToInt = new Uint8Array(128); // z is 122 in ASCII
    for (let i = 0; i < chars.length; i++) {
        const c = chars.charCodeAt(i);
        intToChar[i] = c;
        charToInt[c] = i;
    }
    // Provide a fallback for older environments.
    const td = typeof TextDecoder !== 'undefined'
        ? /* #__PURE__ */ new TextDecoder()
        : typeof Buffer !== 'undefined'
            ? {
                decode(buf) {
                    const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
                    return out.toString();
                },
            }
            : {
                decode(buf) {
                    let out = '';
                    for (let i = 0; i < buf.length; i++) {
                        out += String.fromCharCode(buf[i]);
                    }
                    return out;
                },
            };
    function decode(mappings) {
        const state = new Int32Array(5);
        const decoded = [];
        let index = 0;
        do {
            const semi = indexOf(mappings, index);
            const line = [];
            let sorted = true;
            let lastCol = 0;
            state[0] = 0;
            for (let i = index; i < semi; i++) {
                let seg;
                i = decodeInteger(mappings, i, state, 0); // genColumn
                const col = state[0];
                if (col < lastCol)
                    sorted = false;
                lastCol = col;
                if (hasMoreVlq(mappings, i, semi)) {
                    i = decodeInteger(mappings, i, state, 1); // sourcesIndex
                    i = decodeInteger(mappings, i, state, 2); // sourceLine
                    i = decodeInteger(mappings, i, state, 3); // sourceColumn
                    if (hasMoreVlq(mappings, i, semi)) {
                        i = decodeInteger(mappings, i, state, 4); // namesIndex
                        seg = [col, state[1], state[2], state[3], state[4]];
                    }
                    else {
                        seg = [col, state[1], state[2], state[3]];
                    }
                }
                else {
                    seg = [col];
                }
                line.push(seg);
            }
            if (!sorted)
                sort(line);
            decoded.push(line);
            index = semi + 1;
        } while (index <= mappings.length);
        return decoded;
    }
    function indexOf(mappings, index) {
        const idx = mappings.indexOf(';', index);
        return idx === -1 ? mappings.length : idx;
    }
    function decodeInteger(mappings, pos, state, j) {
        let value = 0;
        let shift = 0;
        let integer = 0;
        do {
            const c = mappings.charCodeAt(pos++);
            integer = charToInt[c];
            value |= (integer & 31) << shift;
            shift += 5;
        } while (integer & 32);
        const shouldNegate = value & 1;
        value >>>= 1;
        if (shouldNegate) {
            value = -0x80000000 | -value;
        }
        state[j] += value;
        return pos;
    }
    function hasMoreVlq(mappings, i, length) {
        if (i >= length)
            return false;
        return mappings.charCodeAt(i) !== comma;
    }
    function sort(line) {
        line.sort(sortComparator);
    }
    function sortComparator(a, b) {
        return a[0] - b[0];
    }
    function encode(decoded) {
        const state = new Int32Array(5);
        const bufLength = 1024 * 16;
        const subLength = bufLength - 36;
        const buf = new Uint8Array(bufLength);
        const sub = buf.subarray(0, subLength);
        let pos = 0;
        let out = '';
        for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            if (i > 0) {
                if (pos === bufLength) {
                    out += td.decode(buf);
                    pos = 0;
                }
                buf[pos++] = semicolon;
            }
            if (line.length === 0)
                continue;
            state[0] = 0;
            for (let j = 0; j < line.length; j++) {
                const segment = line[j];
                // We can push up to 5 ints, each int can take at most 7 chars, and we
                // may push a comma.
                if (pos > subLength) {
                    out += td.decode(sub);
                    buf.copyWithin(0, subLength, pos);
                    pos -= subLength;
                }
                if (j > 0)
                    buf[pos++] = comma;
                pos = encodeInteger(buf, pos, state, segment, 0); // genColumn
                if (segment.length === 1)
                    continue;
                pos = encodeInteger(buf, pos, state, segment, 1); // sourcesIndex
                pos = encodeInteger(buf, pos, state, segment, 2); // sourceLine
                pos = encodeInteger(buf, pos, state, segment, 3); // sourceColumn
                if (segment.length === 4)
                    continue;
                pos = encodeInteger(buf, pos, state, segment, 4); // namesIndex
            }
        }
        return out + td.decode(buf.subarray(0, pos));
    }
    function encodeInteger(buf, pos, state, segment, j) {
        const next = segment[j];
        let num = next - state[j];
        state[j] = next;
        num = num < 0 ? (-num << 1) | 1 : num << 1;
        do {
            let clamped = num & 0b011111;
            num >>>= 5;
            if (num > 0)
                clamped |= 0b100000;
            buf[pos++] = intToChar[clamped];
        } while (num > 0);
        return pos;
    }

    exports.decode = decode;
    exports.encode = encode;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

}(sourcemapCodec_umd, sourcemapCodec_umd.exports));

var traceMapping_umd = {exports: {}};

var resolveUri_umd = {exports: {}};

(function (module, exports) {
(function (global, factory) {
    module.exports = factory() ;
})(commonjsGlobal, (function () {
    // Matches the scheme of a URL, eg "http://"
    const schemeRegex = /^[\w+.-]+:\/\//;
    /**
     * Matches the parts of a URL:
     * 1. Scheme, including ":", guaranteed.
     * 2. User/password, including "@", optional.
     * 3. Host, guaranteed.
     * 4. Port, including ":", optional.
     * 5. Path, including "/", optional.
     * 6. Query, including "?", optional.
     * 7. Hash, including "#", optional.
     */
    const urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
    /**
     * File URLs are weird. They dont' need the regular `//` in the scheme, they may or may not start
     * with a leading `/`, they can have a domain (but only if they don't start with a Windows drive).
     *
     * 1. Host, optional.
     * 2. Path, which may include "/", guaranteed.
     * 3. Query, including "?", optional.
     * 4. Hash, including "#", optional.
     */
    const fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    function isAbsoluteUrl(input) {
        return schemeRegex.test(input);
    }
    function isSchemeRelativeUrl(input) {
        return input.startsWith('//');
    }
    function isAbsolutePath(input) {
        return input.startsWith('/');
    }
    function isFileUrl(input) {
        return input.startsWith('file:');
    }
    function isRelative(input) {
        return /^[.?#]/.test(input);
    }
    function parseAbsoluteUrl(input) {
        const match = urlRegex.exec(input);
        return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
    }
    function parseFileUrl(input) {
        const match = fileRegex.exec(input);
        const path = match[2];
        return makeUrl('file:', '', match[1] || '', '', isAbsolutePath(path) ? path : '/' + path, match[3] || '', match[4] || '');
    }
    function makeUrl(scheme, user, host, port, path, query, hash) {
        return {
            scheme,
            user,
            host,
            port,
            path,
            query,
            hash,
            type: 7 /* Absolute */,
        };
    }
    function parseUrl(input) {
        if (isSchemeRelativeUrl(input)) {
            const url = parseAbsoluteUrl('http:' + input);
            url.scheme = '';
            url.type = 6 /* SchemeRelative */;
            return url;
        }
        if (isAbsolutePath(input)) {
            const url = parseAbsoluteUrl('http://foo.com' + input);
            url.scheme = '';
            url.host = '';
            url.type = 5 /* AbsolutePath */;
            return url;
        }
        if (isFileUrl(input))
            return parseFileUrl(input);
        if (isAbsoluteUrl(input))
            return parseAbsoluteUrl(input);
        const url = parseAbsoluteUrl('http://foo.com/' + input);
        url.scheme = '';
        url.host = '';
        url.type = input
            ? input.startsWith('?')
                ? 3 /* Query */
                : input.startsWith('#')
                    ? 2 /* Hash */
                    : 4 /* RelativePath */
            : 1 /* Empty */;
        return url;
    }
    function stripPathFilename(path) {
        // If a path ends with a parent directory "..", then it's a relative path with excess parent
        // paths. It's not a file, so we can't strip it.
        if (path.endsWith('/..'))
            return path;
        const index = path.lastIndexOf('/');
        return path.slice(0, index + 1);
    }
    function mergePaths(url, base) {
        normalizePath(base, base.type);
        // If the path is just a "/", then it was an empty path to begin with (remember, we're a relative
        // path).
        if (url.path === '/') {
            url.path = base.path;
        }
        else {
            // Resolution happens relative to the base path's directory, not the file.
            url.path = stripPathFilename(base.path) + url.path;
        }
    }
    /**
     * The path can have empty directories "//", unneeded parents "foo/..", or current directory
     * "foo/.". We need to normalize to a standard representation.
     */
    function normalizePath(url, type) {
        const rel = type <= 4 /* RelativePath */;
        const pieces = url.path.split('/');
        // We need to preserve the first piece always, so that we output a leading slash. The item at
        // pieces[0] is an empty string.
        let pointer = 1;
        // Positive is the number of real directories we've output, used for popping a parent directory.
        // Eg, "foo/bar/.." will have a positive 2, and we can decrement to be left with just "foo".
        let positive = 0;
        // We need to keep a trailing slash if we encounter an empty directory (eg, splitting "foo/" will
        // generate `["foo", ""]` pieces). And, if we pop a parent directory. But once we encounter a
        // real directory, we won't need to append, unless the other conditions happen again.
        let addTrailingSlash = false;
        for (let i = 1; i < pieces.length; i++) {
            const piece = pieces[i];
            // An empty directory, could be a trailing slash, or just a double "//" in the path.
            if (!piece) {
                addTrailingSlash = true;
                continue;
            }
            // If we encounter a real directory, then we don't need to append anymore.
            addTrailingSlash = false;
            // A current directory, which we can always drop.
            if (piece === '.')
                continue;
            // A parent directory, we need to see if there are any real directories we can pop. Else, we
            // have an excess of parents, and we'll need to keep the "..".
            if (piece === '..') {
                if (positive) {
                    addTrailingSlash = true;
                    positive--;
                    pointer--;
                }
                else if (rel) {
                    // If we're in a relativePath, then we need to keep the excess parents. Else, in an absolute
                    // URL, protocol relative URL, or an absolute path, we don't need to keep excess.
                    pieces[pointer++] = piece;
                }
                continue;
            }
            // We've encountered a real directory. Move it to the next insertion pointer, which accounts for
            // any popped or dropped directories.
            pieces[pointer++] = piece;
            positive++;
        }
        let path = '';
        for (let i = 1; i < pointer; i++) {
            path += '/' + pieces[i];
        }
        if (!path || (addTrailingSlash && !path.endsWith('/..'))) {
            path += '/';
        }
        url.path = path;
    }
    /**
     * Attempts to resolve `input` URL/path relative to `base`.
     */
    function resolve(input, base) {
        if (!input && !base)
            return '';
        const url = parseUrl(input);
        let inputType = url.type;
        if (base && inputType !== 7 /* Absolute */) {
            const baseUrl = parseUrl(base);
            const baseType = baseUrl.type;
            switch (inputType) {
                case 1 /* Empty */:
                    url.hash = baseUrl.hash;
                // fall through
                case 2 /* Hash */:
                    url.query = baseUrl.query;
                // fall through
                case 3 /* Query */:
                case 4 /* RelativePath */:
                    mergePaths(url, baseUrl);
                // fall through
                case 5 /* AbsolutePath */:
                    // The host, user, and port are joined, you can't copy one without the others.
                    url.user = baseUrl.user;
                    url.host = baseUrl.host;
                    url.port = baseUrl.port;
                // fall through
                case 6 /* SchemeRelative */:
                    // The input doesn't have a schema at least, so we need to copy at least that over.
                    url.scheme = baseUrl.scheme;
            }
            if (baseType > inputType)
                inputType = baseType;
        }
        normalizePath(url, inputType);
        const queryHash = url.query + url.hash;
        switch (inputType) {
            // This is impossible, because of the empty checks at the start of the function.
            // case UrlType.Empty:
            case 2 /* Hash */:
            case 3 /* Query */:
                return queryHash;
            case 4 /* RelativePath */: {
                // The first char is always a "/", and we need it to be relative.
                const path = url.path.slice(1);
                if (!path)
                    return queryHash || '.';
                if (isRelative(base || input) && !isRelative(path)) {
                    // If base started with a leading ".", or there is no base and input started with a ".",
                    // then we need to ensure that the relative path starts with a ".". We don't know if
                    // relative starts with a "..", though, so check before prepending.
                    return './' + path + queryHash;
                }
                return path + queryHash;
            }
            case 5 /* AbsolutePath */:
                return url.path + queryHash;
            default:
                return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
        }
    }

    return resolve;

}));

}(resolveUri_umd));

(function (module, exports) {
(function (global, factory) {
    factory(exports, sourcemapCodec_umd.exports, resolveUri_umd.exports) ;
})(commonjsGlobal, (function (exports, sourcemapCodec, resolveUri) {
    function resolve(input, base) {
        // The base is always treated as a directory, if it's not empty.
        // https://github.com/mozilla/source-map/blob/8cb3ee57/lib/util.js#L327
        // https://github.com/chromium/chromium/blob/da4adbb3/third_party/blink/renderer/devtools/front_end/sdk/SourceMap.js#L400-L401
        if (base && !base.endsWith('/'))
            base += '/';
        return resolveUri(input, base);
    }

    /**
     * Removes everything after the last "/", but leaves the slash.
     */
    function stripFilename(path) {
        if (!path)
            return '';
        const index = path.lastIndexOf('/');
        return path.slice(0, index + 1);
    }

    const COLUMN = 0;
    const SOURCES_INDEX = 1;
    const SOURCE_LINE = 2;
    const SOURCE_COLUMN = 3;
    const NAMES_INDEX = 4;
    const REV_GENERATED_LINE = 1;
    const REV_GENERATED_COLUMN = 2;

    function maybeSort(mappings, owned) {
        const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
        if (unsortedIndex === mappings.length)
            return mappings;
        // If we own the array (meaning we parsed it from JSON), then we're free to directly mutate it. If
        // not, we do not want to modify the consumer's input array.
        if (!owned)
            mappings = mappings.slice();
        for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
            mappings[i] = sortSegments(mappings[i], owned);
        }
        return mappings;
    }
    function nextUnsortedSegmentLine(mappings, start) {
        for (let i = start; i < mappings.length; i++) {
            if (!isSorted(mappings[i]))
                return i;
        }
        return mappings.length;
    }
    function isSorted(line) {
        for (let j = 1; j < line.length; j++) {
            if (line[j][COLUMN] < line[j - 1][COLUMN]) {
                return false;
            }
        }
        return true;
    }
    function sortSegments(line, owned) {
        if (!owned)
            line = line.slice();
        return line.sort(sortComparator);
    }
    function sortComparator(a, b) {
        return a[COLUMN] - b[COLUMN];
    }

    let found = false;
    /**
     * A binary search implementation that returns the index if a match is found.
     * If no match is found, then the left-index (the index associated with the item that comes just
     * before the desired index) is returned. To maintain proper sort order, a splice would happen at
     * the next index:
     *
     * ```js
     * const array = [1, 3];
     * const needle = 2;
     * const index = binarySearch(array, needle, (item, needle) => item - needle);
     *
     * assert.equal(index, 0);
     * array.splice(index + 1, 0, needle);
     * assert.deepEqual(array, [1, 2, 3]);
     * ```
     */
    function binarySearch(haystack, needle, low, high) {
        while (low <= high) {
            const mid = low + ((high - low) >> 1);
            const cmp = haystack[mid][COLUMN] - needle;
            if (cmp === 0) {
                found = true;
                return mid;
            }
            if (cmp < 0) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        found = false;
        return low - 1;
    }
    function upperBound(haystack, needle, index) {
        for (let i = index + 1; i < haystack.length; index = i++) {
            if (haystack[i][COLUMN] !== needle)
                break;
        }
        return index;
    }
    function lowerBound(haystack, needle, index) {
        for (let i = index - 1; i >= 0; index = i--) {
            if (haystack[i][COLUMN] !== needle)
                break;
        }
        return index;
    }
    function memoizedState() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1,
        };
    }
    /**
     * This overly complicated beast is just to record the last tested line/column and the resulting
     * index, allowing us to skip a few tests if mappings are monotonically increasing.
     */
    function memoizedBinarySearch(haystack, needle, state, key) {
        const { lastKey, lastNeedle, lastIndex } = state;
        let low = 0;
        let high = haystack.length - 1;
        if (key === lastKey) {
            if (needle === lastNeedle) {
                found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
                return lastIndex;
            }
            if (needle >= lastNeedle) {
                // lastIndex may be -1 if the previous needle was not found.
                low = lastIndex === -1 ? 0 : lastIndex;
            }
            else {
                high = lastIndex;
            }
        }
        state.lastKey = key;
        state.lastNeedle = needle;
        return (state.lastIndex = binarySearch(haystack, needle, low, high));
    }

    // Rebuilds the original source files, with mappings that are ordered by source line/column instead
    // of generated line/column.
    function buildBySources(decoded, memos) {
        const sources = memos.map(buildNullArray);
        for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                if (seg.length === 1)
                    continue;
                const sourceIndex = seg[SOURCES_INDEX];
                const sourceLine = seg[SOURCE_LINE];
                const sourceColumn = seg[SOURCE_COLUMN];
                const originalSource = sources[sourceIndex];
                const originalLine = (originalSource[sourceLine] || (originalSource[sourceLine] = []));
                const memo = memos[sourceIndex];
                // The binary search either found a match, or it found the left-index just before where the
                // segment should go. Either way, we want to insert after that. And there may be multiple
                // generated segments associated with an original location, so there may need to move several
                // indexes before we find where we need to insert.
                let index = upperBound(originalLine, sourceColumn, memoizedBinarySearch(originalLine, sourceColumn, memo, sourceLine));
                memo.lastIndex = ++index;
                insert(originalLine, index, [sourceColumn, i, seg[COLUMN]]);
            }
        }
        return sources;
    }
    function insert(array, index, value) {
        for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1];
        }
        array[index] = value;
    }
    // Null arrays allow us to use ordered index keys without actually allocating contiguous memory like
    // a real array. We use a null-prototype object to avoid prototype pollution and deoptimizations.
    // Numeric properties on objects are magically sorted in ascending order by the engine regardless of
    // the insertion order. So, by setting any numeric keys, even out of order, we'll get ascending
    // order when iterating with for-in.
    function buildNullArray() {
        return { __proto__: null };
    }

    const AnyMap = function (map, mapUrl) {
        const parsed = parse(map);
        if (!('sections' in parsed)) {
            return new TraceMap(parsed, mapUrl);
        }
        const mappings = [];
        const sources = [];
        const sourcesContent = [];
        const names = [];
        const ignoreList = [];
        recurse(parsed, mapUrl, mappings, sources, sourcesContent, names, ignoreList, 0, 0, Infinity, Infinity);
        const joined = {
            version: 3,
            file: parsed.file,
            names,
            sources,
            sourcesContent,
            mappings,
            ignoreList,
        };
        return presortedDecodedMap(joined);
    };
    function parse(map) {
        return typeof map === 'string' ? JSON.parse(map) : map;
    }
    function recurse(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
        const { sections } = input;
        for (let i = 0; i < sections.length; i++) {
            const { map, offset } = sections[i];
            let sl = stopLine;
            let sc = stopColumn;
            if (i + 1 < sections.length) {
                const nextOffset = sections[i + 1].offset;
                sl = Math.min(stopLine, lineOffset + nextOffset.line);
                if (sl === stopLine) {
                    sc = Math.min(stopColumn, columnOffset + nextOffset.column);
                }
                else if (sl < stopLine) {
                    sc = columnOffset + nextOffset.column;
                }
            }
            addSection(map, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset + offset.line, columnOffset + offset.column, sl, sc);
        }
    }
    function addSection(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
        const parsed = parse(input);
        if ('sections' in parsed)
            return recurse(...arguments);
        const map = new TraceMap(parsed, mapUrl);
        const sourcesOffset = sources.length;
        const namesOffset = names.length;
        const decoded = decodedMappings(map);
        const { resolvedSources, sourcesContent: contents, ignoreList: ignores } = map;
        append(sources, resolvedSources);
        append(names, map.names);
        if (contents)
            append(sourcesContent, contents);
        else
            for (let i = 0; i < resolvedSources.length; i++)
                sourcesContent.push(null);
        if (ignores)
            for (let i = 0; i < ignores.length; i++)
                ignoreList.push(ignores[i] + sourcesOffset);
        for (let i = 0; i < decoded.length; i++) {
            const lineI = lineOffset + i;
            // We can only add so many lines before we step into the range that the next section's map
            // controls. When we get to the last line, then we'll start checking the segments to see if
            // they've crossed into the column range. But it may not have any columns that overstep, so we
            // still need to check that we don't overstep lines, too.
            if (lineI > stopLine)
                return;
            // The out line may already exist in mappings (if we're continuing the line started by a
            // previous section). Or, we may have jumped ahead several lines to start this section.
            const out = getLine(mappings, lineI);
            // On the 0th loop, the section's column offset shifts us forward. On all other lines (since the
            // map can be multiple lines), it doesn't.
            const cOffset = i === 0 ? columnOffset : 0;
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const column = cOffset + seg[COLUMN];
                // If this segment steps into the column range that the next section's map controls, we need
                // to stop early.
                if (lineI === stopLine && column >= stopColumn)
                    return;
                if (seg.length === 1) {
                    out.push([column]);
                    continue;
                }
                const sourcesIndex = sourcesOffset + seg[SOURCES_INDEX];
                const sourceLine = seg[SOURCE_LINE];
                const sourceColumn = seg[SOURCE_COLUMN];
                out.push(seg.length === 4
                    ? [column, sourcesIndex, sourceLine, sourceColumn]
                    : [column, sourcesIndex, sourceLine, sourceColumn, namesOffset + seg[NAMES_INDEX]]);
            }
        }
    }
    function append(arr, other) {
        for (let i = 0; i < other.length; i++)
            arr.push(other[i]);
    }
    function getLine(arr, index) {
        for (let i = arr.length; i <= index; i++)
            arr[i] = [];
        return arr[index];
    }

    const LINE_GTR_ZERO = '`line` must be greater than 0 (lines start at line 1)';
    const COL_GTR_EQ_ZERO = '`column` must be greater than or equal to 0 (columns start at column 0)';
    const LEAST_UPPER_BOUND = -1;
    const GREATEST_LOWER_BOUND = 1;
    class TraceMap {
        constructor(map, mapUrl) {
            const isString = typeof map === 'string';
            if (!isString && map._decodedMemo)
                return map;
            const parsed = (isString ? JSON.parse(map) : map);
            const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
            this.version = version;
            this.file = file;
            this.names = names || [];
            this.sourceRoot = sourceRoot;
            this.sources = sources;
            this.sourcesContent = sourcesContent;
            this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || undefined;
            const from = resolve(sourceRoot || '', stripFilename(mapUrl));
            this.resolvedSources = sources.map((s) => resolve(s || '', from));
            const { mappings } = parsed;
            if (typeof mappings === 'string') {
                this._encoded = mappings;
                this._decoded = undefined;
            }
            else {
                this._encoded = undefined;
                this._decoded = maybeSort(mappings, isString);
            }
            this._decodedMemo = memoizedState();
            this._bySources = undefined;
            this._bySourceMemos = undefined;
        }
    }
    /**
     * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
     * with public access modifiers.
     */
    function cast(map) {
        return map;
    }
    /**
     * Returns the encoded (VLQ string) form of the SourceMap's mappings field.
     */
    function encodedMappings(map) {
        var _a;
        var _b;
        return ((_a = (_b = cast(map))._encoded) !== null && _a !== void 0 ? _a : (_b._encoded = sourcemapCodec.encode(cast(map)._decoded)));
    }
    /**
     * Returns the decoded (array of lines of segments) form of the SourceMap's mappings field.
     */
    function decodedMappings(map) {
        var _a;
        return ((_a = cast(map))._decoded || (_a._decoded = sourcemapCodec.decode(cast(map)._encoded)));
    }
    /**
     * A low-level API to find the segment associated with a generated line/column (think, from a
     * stack trace). Line and column here are 0-based, unlike `originalPositionFor`.
     */
    function traceSegment(map, line, column) {
        const decoded = decodedMappings(map);
        // It's common for parent source maps to have pointers to lines that have no
        // mapping (like a "//# sourceMappingURL=") at the end of the child file.
        if (line >= decoded.length)
            return null;
        const segments = decoded[line];
        const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, GREATEST_LOWER_BOUND);
        return index === -1 ? null : segments[index];
    }
    /**
     * A higher-level API to find the source/line/column associated with a generated line/column
     * (think, from a stack trace). Line is 1-based, but column is 0-based, due to legacy behavior in
     * `source-map` library.
     */
    function originalPositionFor(map, needle) {
        let { line, column, bias } = needle;
        line--;
        if (line < 0)
            throw new Error(LINE_GTR_ZERO);
        if (column < 0)
            throw new Error(COL_GTR_EQ_ZERO);
        const decoded = decodedMappings(map);
        // It's common for parent source maps to have pointers to lines that have no
        // mapping (like a "//# sourceMappingURL=") at the end of the child file.
        if (line >= decoded.length)
            return OMapping(null, null, null, null);
        const segments = decoded[line];
        const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
        if (index === -1)
            return OMapping(null, null, null, null);
        const segment = segments[index];
        if (segment.length === 1)
            return OMapping(null, null, null, null);
        const { names, resolvedSources } = map;
        return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
    }
    /**
     * Finds the generated line/column position of the provided source/line/column source position.
     */
    function generatedPositionFor(map, needle) {
        const { source, line, column, bias } = needle;
        return generatedPosition(map, source, line, column, bias || GREATEST_LOWER_BOUND, false);
    }
    /**
     * Finds all generated line/column positions of the provided source/line/column source position.
     */
    function allGeneratedPositionsFor(map, needle) {
        const { source, line, column, bias } = needle;
        // SourceMapConsumer uses LEAST_UPPER_BOUND for some reason, so we follow suit.
        return generatedPosition(map, source, line, column, bias || LEAST_UPPER_BOUND, true);
    }
    /**
     * Iterates each mapping in generated position order.
     */
    function eachMapping(map, cb) {
        const decoded = decodedMappings(map);
        const { names, resolvedSources } = map;
        for (let i = 0; i < decoded.length; i++) {
            const line = decoded[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const generatedLine = i + 1;
                const generatedColumn = seg[0];
                let source = null;
                let originalLine = null;
                let originalColumn = null;
                let name = null;
                if (seg.length !== 1) {
                    source = resolvedSources[seg[1]];
                    originalLine = seg[2] + 1;
                    originalColumn = seg[3];
                }
                if (seg.length === 5)
                    name = names[seg[4]];
                cb({
                    generatedLine,
                    generatedColumn,
                    source,
                    originalLine,
                    originalColumn,
                    name,
                });
            }
        }
    }
    function sourceIndex(map, source) {
        const { sources, resolvedSources } = map;
        let index = sources.indexOf(source);
        if (index === -1)
            index = resolvedSources.indexOf(source);
        return index;
    }
    /**
     * Retrieves the source content for a particular source, if its found. Returns null if not.
     */
    function sourceContentFor(map, source) {
        const { sourcesContent } = map;
        if (sourcesContent == null)
            return null;
        const index = sourceIndex(map, source);
        return index === -1 ? null : sourcesContent[index];
    }
    /**
     * Determines if the source is marked to ignore by the source map.
     */
    function isIgnored(map, source) {
        const { ignoreList } = map;
        if (ignoreList == null)
            return false;
        const index = sourceIndex(map, source);
        return index === -1 ? false : ignoreList.includes(index);
    }
    /**
     * A helper that skips sorting of the input map's mappings array, which can be expensive for larger
     * maps.
     */
    function presortedDecodedMap(map, mapUrl) {
        const tracer = new TraceMap(clone(map, []), mapUrl);
        cast(tracer)._decoded = map.mappings;
        return tracer;
    }
    /**
     * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function decodedMap(map) {
        return clone(map, decodedMappings(map));
    }
    /**
     * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function encodedMap(map) {
        return clone(map, encodedMappings(map));
    }
    function clone(map, mappings) {
        return {
            version: map.version,
            file: map.file,
            names: map.names,
            sourceRoot: map.sourceRoot,
            sources: map.sources,
            sourcesContent: map.sourcesContent,
            mappings,
            ignoreList: map.ignoreList || map.x_google_ignoreList,
        };
    }
    function OMapping(source, line, column, name) {
        return { source, line, column, name };
    }
    function GMapping(line, column) {
        return { line, column };
    }
    function traceSegmentInternal(segments, memo, line, column, bias) {
        let index = memoizedBinarySearch(segments, column, memo, line);
        if (found) {
            index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
        }
        else if (bias === LEAST_UPPER_BOUND)
            index++;
        if (index === -1 || index === segments.length)
            return -1;
        return index;
    }
    function sliceGeneratedPositions(segments, memo, line, column, bias) {
        let min = traceSegmentInternal(segments, memo, line, column, GREATEST_LOWER_BOUND);
        // We ignored the bias when tracing the segment so that we're guarnateed to find the first (in
        // insertion order) segment that matched. Even if we did respect the bias when tracing, we would
        // still need to call `lowerBound()` to find the first segment, which is slower than just looking
        // for the GREATEST_LOWER_BOUND to begin with. The only difference that matters for us is when the
        // binary search didn't match, in which case GREATEST_LOWER_BOUND just needs to increment to
        // match LEAST_UPPER_BOUND.
        if (!found && bias === LEAST_UPPER_BOUND)
            min++;
        if (min === -1 || min === segments.length)
            return [];
        // We may have found the segment that started at an earlier column. If this is the case, then we
        // need to slice all generated segments that match _that_ column, because all such segments span
        // to our desired column.
        const matchedColumn = found ? column : segments[min][COLUMN];
        // The binary search is not guaranteed to find the lower bound when a match wasn't found.
        if (!found)
            min = lowerBound(segments, matchedColumn, min);
        const max = upperBound(segments, matchedColumn, min);
        const result = [];
        for (; min <= max; min++) {
            const segment = segments[min];
            result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
        }
        return result;
    }
    function generatedPosition(map, source, line, column, bias, all) {
        var _a;
        line--;
        if (line < 0)
            throw new Error(LINE_GTR_ZERO);
        if (column < 0)
            throw new Error(COL_GTR_EQ_ZERO);
        const { sources, resolvedSources } = map;
        let sourceIndex = sources.indexOf(source);
        if (sourceIndex === -1)
            sourceIndex = resolvedSources.indexOf(source);
        if (sourceIndex === -1)
            return all ? [] : GMapping(null, null);
        const generated = ((_a = cast(map))._bySources || (_a._bySources = buildBySources(decodedMappings(map), (cast(map)._bySourceMemos = sources.map(memoizedState)))));
        const segments = generated[sourceIndex][line];
        if (segments == null)
            return all ? [] : GMapping(null, null);
        const memo = cast(map)._bySourceMemos[sourceIndex];
        if (all)
            return sliceGeneratedPositions(segments, memo, line, column, bias);
        const index = traceSegmentInternal(segments, memo, line, column, bias);
        if (index === -1)
            return GMapping(null, null);
        const segment = segments[index];
        return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
    }

    exports.AnyMap = AnyMap;
    exports.GREATEST_LOWER_BOUND = GREATEST_LOWER_BOUND;
    exports.LEAST_UPPER_BOUND = LEAST_UPPER_BOUND;
    exports.TraceMap = TraceMap;
    exports.allGeneratedPositionsFor = allGeneratedPositionsFor;
    exports.decodedMap = decodedMap;
    exports.decodedMappings = decodedMappings;
    exports.eachMapping = eachMapping;
    exports.encodedMap = encodedMap;
    exports.encodedMappings = encodedMappings;
    exports.generatedPositionFor = generatedPositionFor;
    exports.isIgnored = isIgnored;
    exports.originalPositionFor = originalPositionFor;
    exports.presortedDecodedMap = presortedDecodedMap;
    exports.sourceContentFor = sourceContentFor;
    exports.traceSegment = traceSegment;

}));

}(traceMapping_umd, traceMapping_umd.exports));

(function (module, exports) {
(function (global, factory) {
    factory(exports, setArray_umd.exports, sourcemapCodec_umd.exports, traceMapping_umd.exports) ;
})(commonjsGlobal, (function (exports, setArray, sourcemapCodec, traceMapping) {
    const COLUMN = 0;
    const SOURCES_INDEX = 1;
    const SOURCE_LINE = 2;
    const SOURCE_COLUMN = 3;
    const NAMES_INDEX = 4;

    const NO_NAME = -1;
    /**
     * Provides the state to generate a sourcemap.
     */
    class GenMapping {
        constructor({ file, sourceRoot } = {}) {
            this._names = new setArray.SetArray();
            this._sources = new setArray.SetArray();
            this._sourcesContent = [];
            this._mappings = [];
            this.file = file;
            this.sourceRoot = sourceRoot;
            this._ignoreList = new setArray.SetArray();
        }
    }
    /**
     * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
     * with public access modifiers.
     */
    function cast(map) {
        return map;
    }
    function addSegment(map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
        return addSegmentInternal(false, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
    }
    function addMapping(map, mapping) {
        return addMappingInternal(false, map, mapping);
    }
    /**
     * Same as `addSegment`, but will only add the segment if it generates useful information in the
     * resulting map. This only works correctly if segments are added **in order**, meaning you should
     * not add a segment with a lower generated line/column than one that came before.
     */
    const maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
        return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
    };
    /**
     * Same as `addMapping`, but will only add the mapping if it generates useful information in the
     * resulting map. This only works correctly if mappings are added **in order**, meaning you should
     * not add a mapping with a lower generated line/column than one that came before.
     */
    const maybeAddMapping = (map, mapping) => {
        return addMappingInternal(true, map, mapping);
    };
    /**
     * Adds/removes the content of the source file to the source map.
     */
    function setSourceContent(map, source, content) {
        const { _sources: sources, _sourcesContent: sourcesContent } = cast(map);
        const index = setArray.put(sources, source);
        sourcesContent[index] = content;
    }
    function setIgnore(map, source, ignore = true) {
        const { _sources: sources, _sourcesContent: sourcesContent, _ignoreList: ignoreList } = cast(map);
        const index = setArray.put(sources, source);
        if (index === sourcesContent.length)
            sourcesContent[index] = null;
        if (ignore)
            setArray.put(ignoreList, index);
        else
            setArray.remove(ignoreList, index);
    }
    /**
     * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function toDecodedMap(map) {
        const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList, } = cast(map);
        removeEmptyFinalLines(mappings);
        return {
            version: 3,
            file: map.file || undefined,
            names: names.array,
            sourceRoot: map.sourceRoot || undefined,
            sources: sources.array,
            sourcesContent,
            mappings,
            ignoreList: ignoreList.array,
        };
    }
    /**
     * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    function toEncodedMap(map) {
        const decoded = toDecodedMap(map);
        return Object.assign(Object.assign({}, decoded), { mappings: sourcemapCodec.encode(decoded.mappings) });
    }
    /**
     * Constructs a new GenMapping, using the already present mappings of the input.
     */
    function fromMap(input) {
        const map = new traceMapping.TraceMap(input);
        const gen = new GenMapping({ file: map.file, sourceRoot: map.sourceRoot });
        putAll(cast(gen)._names, map.names);
        putAll(cast(gen)._sources, map.sources);
        cast(gen)._sourcesContent = map.sourcesContent || map.sources.map(() => null);
        cast(gen)._mappings = traceMapping.decodedMappings(map);
        if (map.ignoreList)
            putAll(cast(gen)._ignoreList, map.ignoreList);
        return gen;
    }
    /**
     * Returns an array of high-level mapping objects for every recorded segment, which could then be
     * passed to the `source-map` library.
     */
    function allMappings(map) {
        const out = [];
        const { _mappings: mappings, _sources: sources, _names: names } = cast(map);
        for (let i = 0; i < mappings.length; i++) {
            const line = mappings[i];
            for (let j = 0; j < line.length; j++) {
                const seg = line[j];
                const generated = { line: i + 1, column: seg[COLUMN] };
                let source = undefined;
                let original = undefined;
                let name = undefined;
                if (seg.length !== 1) {
                    source = sources.array[seg[SOURCES_INDEX]];
                    original = { line: seg[SOURCE_LINE] + 1, column: seg[SOURCE_COLUMN] };
                    if (seg.length === 5)
                        name = names.array[seg[NAMES_INDEX]];
                }
                out.push({ generated, source, original, name });
            }
        }
        return out;
    }
    // This split declaration is only so that terser can elminiate the static initialization block.
    function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
        const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, } = cast(map);
        const line = getLine(mappings, genLine);
        const index = getColumnIndex(line, genColumn);
        if (!source) {
            if (skipable && skipSourceless(line, index))
                return;
            return insert(line, index, [genColumn]);
        }
        const sourcesIndex = setArray.put(sources, source);
        const namesIndex = name ? setArray.put(names, name) : NO_NAME;
        if (sourcesIndex === sourcesContent.length)
            sourcesContent[sourcesIndex] = content !== null && content !== void 0 ? content : null;
        if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
            return;
        }
        return insert(line, index, name
            ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex]
            : [genColumn, sourcesIndex, sourceLine, sourceColumn]);
    }
    function getLine(mappings, index) {
        for (let i = mappings.length; i <= index; i++) {
            mappings[i] = [];
        }
        return mappings[index];
    }
    function getColumnIndex(line, genColumn) {
        let index = line.length;
        for (let i = index - 1; i >= 0; index = i--) {
            const current = line[i];
            if (genColumn >= current[COLUMN])
                break;
        }
        return index;
    }
    function insert(array, index, value) {
        for (let i = array.length; i > index; i--) {
            array[i] = array[i - 1];
        }
        array[index] = value;
    }
    function removeEmptyFinalLines(mappings) {
        const { length } = mappings;
        let len = length;
        for (let i = len - 1; i >= 0; len = i, i--) {
            if (mappings[i].length > 0)
                break;
        }
        if (len < length)
            mappings.length = len;
    }
    function putAll(setarr, array) {
        for (let i = 0; i < array.length; i++)
            setArray.put(setarr, array[i]);
    }
    function skipSourceless(line, index) {
        // The start of a line is already sourceless, so adding a sourceless segment to the beginning
        // doesn't generate any useful information.
        if (index === 0)
            return true;
        const prev = line[index - 1];
        // If the previous segment is also sourceless, then adding another sourceless segment doesn't
        // genrate any new information. Else, this segment will end the source/named segment and point to
        // a sourceless position, which is useful.
        return prev.length === 1;
    }
    function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
        // A source/named segment at the start of a line gives position at that genColumn
        if (index === 0)
            return false;
        const prev = line[index - 1];
        // If the previous segment is sourceless, then we're transitioning to a source.
        if (prev.length === 1)
            return false;
        // If the previous segment maps to the exact same source position, then this segment doesn't
        // provide any new position information.
        return (sourcesIndex === prev[SOURCES_INDEX] &&
            sourceLine === prev[SOURCE_LINE] &&
            sourceColumn === prev[SOURCE_COLUMN] &&
            namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME));
    }
    function addMappingInternal(skipable, map, mapping) {
        const { generated, source, original, name, content } = mapping;
        if (!source) {
            return addSegmentInternal(skipable, map, generated.line - 1, generated.column, null, null, null, null, null);
        }
        return addSegmentInternal(skipable, map, generated.line - 1, generated.column, source, original.line - 1, original.column, name, content);
    }

    exports.GenMapping = GenMapping;
    exports.addMapping = addMapping;
    exports.addSegment = addSegment;
    exports.allMappings = allMappings;
    exports.fromMap = fromMap;
    exports.maybeAddMapping = maybeAddMapping;
    exports.maybeAddSegment = maybeAddSegment;
    exports.setIgnore = setIgnore;
    exports.setSourceContent = setSourceContent;
    exports.toDecodedMap = toDecodedMap;
    exports.toEncodedMap = toEncodedMap;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

}(genMapping_umd, genMapping_umd.exports));

Object.defineProperty(computeSourceMap$1, "__esModule", {value: true});var _genmapping = genMapping_umd.exports;



var _charcodes = charcodes;












/**
 * Generate a source map indicating that each line maps directly to the original line,
 * with the tokens in their new positions.
 */
 function computeSourceMap(
  {code: generatedCode, mappings: rawMappings},
  filePath,
  options,
  source,
  tokens,
) {
  const sourceColumns = computeSourceColumns(source, tokens);
  const map = new (_genmapping.GenMapping)({file: options.compiledFilename});
  let tokenIndex = 0;
  // currentMapping is the output source index for the current input token being
  // considered.
  let currentMapping = rawMappings[0];
  while (currentMapping === undefined && tokenIndex < rawMappings.length - 1) {
    tokenIndex++;
    currentMapping = rawMappings[tokenIndex];
  }
  let line = 0;
  let lineStart = 0;
  if (currentMapping !== lineStart) {
    _genmapping.maybeAddSegment.call(void 0, map, line, 0, filePath, line, 0);
  }
  for (let i = 0; i < generatedCode.length; i++) {
    if (i === currentMapping) {
      const genColumn = currentMapping - lineStart;
      const sourceColumn = sourceColumns[tokenIndex];
      _genmapping.maybeAddSegment.call(void 0, map, line, genColumn, filePath, line, sourceColumn);
      while (
        (currentMapping === i || currentMapping === undefined) &&
        tokenIndex < rawMappings.length - 1
      ) {
        tokenIndex++;
        currentMapping = rawMappings[tokenIndex];
      }
    }
    if (generatedCode.charCodeAt(i) === _charcodes.charCodes.lineFeed) {
      line++;
      lineStart = i + 1;
      if (currentMapping !== lineStart) {
        _genmapping.maybeAddSegment.call(void 0, map, line, 0, filePath, line, 0);
      }
    }
  }
  const {sourceRoot, sourcesContent, ...sourceMap} = _genmapping.toEncodedMap.call(void 0, map);
  return sourceMap ;
} var _default = computeSourceMap$1.default = computeSourceMap;

/**
 * Create an array mapping each token index to the 0-based column of the start
 * position of the token.
 */
function computeSourceColumns(code, tokens) {
  const sourceColumns = new Array(tokens.length);
  let tokenIndex = 0;
  let currentMapping = tokens[tokenIndex].start;
  let lineStart = 0;
  for (let i = 0; i < code.length; i++) {
    if (i === currentMapping) {
      sourceColumns[tokenIndex] = currentMapping - lineStart;
      tokenIndex++;
      currentMapping = tokens[tokenIndex].start;
    }
    if (code.charCodeAt(i) === _charcodes.charCodes.lineFeed) {
      lineStart = i + 1;
    }
  }
  return sourceColumns;
}

export { _default$1 as CJSImportProcessor, RootTransformer, _default as computeSourceMap, getSucraseContext, parse, transform, TokenType_1 as tt };
