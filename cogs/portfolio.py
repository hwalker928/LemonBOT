import discord
from discord.ext import commands
from discord.ext.commands.cooldowns import BucketType
from datetime import datetime
import json

class Portfolio(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def portfolio(self, ctx, portUser:discord.Member="ihdfsuib"):
        if portUser == "ihdfsuib":
            portUser = ctx.author
        try:
            with open('data/portfolio.json', 'r') as f:
                portfolioDB = json.load(f)
            embed=discord.Embed(description=portfolioDB[str(portUser.id)], color=0x1dbaba)
            await ctx.send(embed=embed)
        except:
            embed=discord.Embed(description="This user does not have a portfolio set!", color=0xc61111)
            await ctx.send(embed=embed)

    @commands.command()
    async def set_portfolio(self, ctx):

        embed=discord.Embed(description="Please enter your portfolio description:", color=0x1dbaba)
        await ctx.send(embed=embed)

        def check(m):
            return m.author == ctx.author and m.channel == ctx.channel

        msg = await self.bot.wait_for('message', check=check)
        portMSG = msg.content
        embed=discord.Embed(description="Portfolio successfully set.", color=0x37ca0d)
        await ctx.send(embed=embed)

        with open('data/portfolio.json', 'r') as f:
            webhooks = json.load(f)

        webhooks[str(ctx.author.id)] = str(portMSG)

        with open('data/portfolio.json', 'w') as f:
            json.dump(webhooks, f, indent=4)
        #await ctx.send(f"Successfully set your portfolio.")

def setup(bot):
    bot.add_cog(Portfolio(bot))