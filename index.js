require("dotenv").config();

const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const { BOT_TOKEN } = process.env;
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

const yandex = "https://ya.ru";
const resto = "https://restofront.vercel.app";
const getApi = require("./src/helpers/getApi");

getApi().then((data) => {
  bot.context.currency = data;
  bot.sendMessage(chatId, "Привет!");
  {
    console.log("Запущено");
  }
});

const request = getApi();

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text == "Получить ответ с API") {
    await bot.sendMessage(
      chatId,
      request.then((data) => {
        console.log(data);
        // bot.sendMessage(chatId, data);
      })
    );
  } else if (msg.text == "Привет") {
    await bot.sendMessage(chatId, "Привет!");
    {
      console.log("Запущено");
    }
  } else if (msg.text == "Начать") {
    console.log("Запущено");
    await bot.sendMessage(
      chatId,
      "Нажав на нужную кнопку вы можете открыть сайт, который вы хотите посетить!",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Открыть яндекс", web_app: { url: yandex } }],
            [{ text: "Открыть наш сайт", web_app: { url: resto } }],
          ],
        },
      }
    );
  } else {
    await bot.sendMessage(
      chatId,
      "Напишите 'Начать', чтобы выбрать сайт, который хотите открыть или 'Привет', чтобы поздороваться"
    );
    {
      console.log("Ответ на рандомное текстовое сообшение");
    }
  }
});

bot.on("voice", async (msg) => {
  const chatId = msg.chat.id;
  await bot.sendMessage(chatId, "У тебя прикольный голос!");
  {
    console.log("Ответ на голосовое");
  }
});
