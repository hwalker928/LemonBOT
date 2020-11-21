import discord
from discord.ext import commands
from discord.ext.commands.cooldowns import BucketType
from datetime import datetime

class Guild(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def guildimage(self, ctx):
        await ctx.send(ctx.guild.icon_url)

def setup(bot):
    bot.add_cog(Guild(bot))