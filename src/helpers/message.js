// module.exports = async (ctx, extra) => {
//   try {
//     if (ctx.updateType === "message") {
//       await ctx.reply(extra);
//     } else if (ctx.updateType === "callback_query") {
//       await ctx.answerCbQuery();
//       await ctx.editMessageText(extra);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };
