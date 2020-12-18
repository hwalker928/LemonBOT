import discord
from discord.ext import commands
from discord.utils import get
import datetime

class Reviews(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def review(self,ctx,freelancer:discord.User,rating:int,*,reviewMSG:str):
        embed=discord.Embed(color=0x000000)
        embed.add_field(name=f"Review", value=reviewMSG, inline=False)
        embed.add_field(name=f"Freelancer", value=freelancer.mention, inline=False)
        embed.add_field(name=f"Customer", value=ctx.author.mention, inline=False)
        embed.add_field(name=f"Rating", value=f"{rating}/10", inline=False)
        current_time = datetime.datetime.now()
        embed.set_footer(text=str(current_time.day) + "/" + str(current_time.month) + "/" + str(current_time.year))
        reviewCHNL = self.bot.get_channel(775659716142694430)
        await reviewCHNL.send(embed=embed)


def setup(bot):
    bot.add_cog(Reviews(bot))