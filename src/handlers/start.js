// const { Markup, Extra } = require("telegraf");
// const message = require("../helpers/message");

// const wrap = (btn, index, currentRow) => currentRow.length >= index / 1;

// module.exports = (ctx) => {
//   try {
//     const markup = Markup.inlineKeyboard(
//       ctx.map((c) => Markup.callbackButton(c, `select::${c}`)),
//       { wrap }
//     );
//     message(ctx, ctx.i18n.t("start"), Extra.HTML().markup(markup));
//   } catch (err) {
//     console.error(err);
//   }
// };
