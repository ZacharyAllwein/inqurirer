const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const R = require("rambda");

const makeRow = (l) => new ActionRowBuilder().addComponents(l);

const makeButton = (s) =>
  new ButtonBuilder().setCustomId(s).setLabel(s).setStyle(ButtonStyle.Primary);

module.exports = { makeRow, makeButton };
