import discord
from discord.ext import commands
from discord.ext.commands.cooldowns import BucketType
from pathlib import Path
import datetime
import psutil
import aiohttp


class Administration(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(aliases=["r", "rl"])
    @commands.is_owner()
    async def reload(self, ctx):
        statusOfReload = ""
        cogs = [x.stem for x in Path('cogs').glob('*.py')]
        for extension in cogs:
            try:
                self.bot.reload_extension(f'cogs.{extension}')
                statusOfReload = statusOfReload + f"<:lemontick:789500300976586802> {extension}\n"
            except Exception as e:
                self.bot.reload_extension(f'cogs.{extension}')
                statusOfReload = statusOfReload + f"<:lemoncross:789500300993495060> {extension}\n{e}\n"
        await ctx.send(statusOfReload)

def setup(bot):
    bot.add_cog(Administration(bot))