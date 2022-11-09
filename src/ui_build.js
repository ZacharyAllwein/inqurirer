const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const R = require('rambda');

const toButtons = (l) => new ActionRowBuilder().addComponents(R.map(makeButton, l))

const makeButton = (s) => new ButtonBuilder().setCustomId(s).setLabel(s).setStyle(ButtonStyle.Primary)

module.exports = {toButtons, makeButton}