const Discord = require("discord.js"); // eslint-disable-line no-unused-vars

module.exports = class {
    constructor (client) {
        this.client = client;
    }

    async run (oldMember, newMember) {
        if(this.client.player.get(oldMember.guild.id)) {
            let voiceChannel = this.client.channels.cache.get(this.client.player.get(oldMember.guild.id).player.channel)
            if (voiceChannel.members.size === 1) {
                await this.client.lavalinkManager.manager.leave(oldMember.guild.id)
                this.client.lavalinkManager.manager.delete(oldMember.guild.id)
                this.client.player.delete(oldMember.guild.id)
            }
        }
    }
};
