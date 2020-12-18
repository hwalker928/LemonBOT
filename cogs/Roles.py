import discord
from discord.ext import commands
from discord.utils import get

class Roles(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    @commands.has_role("Freelancer")
    async def artist(self, ctx):
        role = get(ctx.guild.roles, name="Artist")
        await ctx.author.add_roles(role)
        await ctx.send(f"{ctx.author.mention}, Welcome to the Art Team!")

    @commands.command()
    @commands.has_role("Freelancer")
    async def musician(self, ctx):
        role = get(ctx.guild.roles, name="Musician")
        await ctx.author.add_roles(role)
        await ctx.send(f"{ctx.author.mention}, Welcome to the Music Team!")

    @commands.command()
    @commands.has_role("Freelancer")
    async def videoeditor(self, ctx):
        role = get(ctx.guild.roles, name="Video Editor")
        await ctx.author.add_roles(role)
        await ctx.send(f"{ctx.author.mention}, Welcome to the Video Editing Team!")


def setup(bot):
    bot.add_cog(Roles(bot))