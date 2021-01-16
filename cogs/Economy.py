import discord
from discord.ext import commands
from discord.ext.commands.cooldowns import BucketType
from pathlib import Path
import datetime
import psutil
import aiohttp


class Economy(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(aliases=["lemons", "bal", "money", "bank"])
    async def balance(self, ctx):
        await ctx.send(":lemon: Coming Soon:tm:")

def setup(bot):
    bot.add_cog(Economy(bot))