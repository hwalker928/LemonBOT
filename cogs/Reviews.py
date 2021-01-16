import discord
from discord.ext import commands
from discord.utils import get
import datetime

class Reviews(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def review(self,ctx,freelancer:discord.User,rating:int,*,reviewMSG:str):
        embed=discord.Embed(color=0xFBF514)
        embed.add_field(name=f"Review", value=reviewMSG, inline=False)
        embed.add_field(name=f"Freelancer", value=freelancer.mention, inline=False)
        embed.add_field(name=f"Customer", value=ctx.author.mention, inline=False)
        embed.add_field(name=f"Rating", value=f"{rating}/10", inline=False)
        current_time = datetime.datetime.now()
        embed.set_footer(text=str(current_time.day) + "/" + str(current_time.month) + "/" + str(current_time.year))
        reviewCHNL = self.bot.get_channel(775659716142694430)
        await reviewCHNL.send(embed=embed)

    @commands.command()
    async def how2review(self,ctx):
        embed=discord.Embed(title=f"How to submit a review.", description=f"To leave a review for your freelancer, you can use `!review`.", color=0xFBF514)
        embed.add_field(name=f"__Format:__", value=f"**!review <@Freelancer> <1-10> <Review Message>**", inline=False)
        embed.add_field(name=f"__Here is an example:__", value=f"**!review <@590651977034366976> 10 They did a great job!**", inline=True)
        embed.set_footer(text=f"Lemon Studios")
        await ctx.send(embed=embed)

def setup(bot):
    bot.add_cog(Reviews(bot))