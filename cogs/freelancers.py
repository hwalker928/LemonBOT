import discord
from discord.ext import commands
from discord.ext.commands.cooldowns import BucketType
from datetime import datetime

class Freelancers(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def freelancers(self, ctx):
        content_array = []
        with open("data/freelancers.txt") as f:
            content_array = f.read().split("\n")


        lance = ""
        print(str(content_array))
        for freelancer in content_array:
            lance = lance + "<@" + freelancer + ">\n"

        embed=discord.Embed(description=lance, color=0x1dbaba)
        await ctx.send(embed=embed)
def setup(bot):
    bot.add_cog(Freelancers(bot))