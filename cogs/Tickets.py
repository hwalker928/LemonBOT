import discord
from discord.ext import commands
from discord.ext.commands.cooldowns import BucketType
from datetime import datetime
from datetime import date
from discord.utils import get
import time

class Tickets(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(aliases=["open", "ticket", "support"])
    async def new(self, ctx):
        today = date.today()
        ticket_category = self.bot.get_channel(775660019554713611)
        channel_name = "ticket-" + str(ctx.author.name)
        ticket_channel = await ticket_category.create_text_channel(channel_name)
        d1 = today.strftime("%d/%m/%Y")
        await ticket_channel.edit(topic=f"Opened on {d1} by {ctx.author.name}")
        await ticket_channel.set_permissions(ctx.guild.default_role, send_messages=False, read_messages=False)
        await ticket_channel.set_permissions(ctx.author, send_messages=True, read_messages=True, read_message_history=True)
        embed=discord.Embed(description=f"Your ticket has been opened!\n<#{ticket_channel.id}>", color=0x4bdb48)
        await ctx.send(embed=embed)
        embed=discord.Embed(description=f"**Hey there {ctx.author.mention},**\nPlease select the reason for opening this ticket!\n:paintbrush: Art\n:video_camera: Video Editing\n:musical_note: Music\n:question: Other", color=0xeff42f)
        tmsg = await ticket_channel.send(embed=embed)
        await tmsg.add_reaction("\U0001f58c")
        await tmsg.add_reaction("\U0001f4f9")
        await tmsg.add_reaction("\U0001f3b5")
        await tmsg.add_reaction("\U00002753")
        def check(reaction, user):
            return user == ctx.author

        reaction, user = await self.bot.wait_for('reaction_add', check=check)

        if reaction.emoji == "🖌":
            role = get(ctx.guild.roles, name="Artist")
            await ticket_channel.set_permissions(role, send_messages=True, read_messages=True, read_message_history=True)
            await tmsg.clear_reactions()
            embed=discord.Embed(description=f"**Hey there {ctx.author.mention},**\nThanks for opening a ticket! An artist will be with you soon!", color=0xeff42f)
            await tmsg.edit(embed=embed)
        elif reaction.emoji == "📹":
            role = get(ctx.guild.roles, name="Video Editor")
            await ticket_channel.set_permissions(role, send_messages=True, read_messages=True, read_message_history=True)
            await tmsg.clear_reactions()
            embed=discord.Embed(description=f"**Hey there {ctx.author.mention},**\nThanks for opening a ticket! A video editor will be with you soon!", color=0xeff42f)
            await tmsg.edit(embed=embed)
        elif reaction.emoji == "🎵":
            role = get(ctx.guild.roles, name="Musician")
            await ticket_channel.set_permissions(role, send_messages=True, read_messages=True, read_message_history=True)
            await tmsg.clear_reactions()
            embed=discord.Embed(description=f"**Hey there {ctx.author.mention},**\nThanks for opening a ticket! A musician will be with you soon!", color=0xeff42f)
            await tmsg.edit(embed=embed)
        else:
            role = get(ctx.guild.roles, name="Freelancer")
            await ticket_channel.set_permissions(role, send_messages=True, read_messages=True, read_message_history=True)
            await tmsg.clear_reactions()
            embed=discord.Embed(description=f"**Hey there {ctx.author.mention},**\nThanks for opening a ticket! A freelancer will be with you soon!", color=0xeff42f)
            await tmsg.edit(embed=embed)


    @commands.command(aliases=["close", "end", "delete"])
    async def archive(self, ctx):
        a = ctx.channel
        a = str(a)
        splitt = a.split("-")
        if splitt[0] == "ticket":
            archival = self.bot.get_channel(775661816071061516)
            aa = self.bot.get_channel(775662821186469898)
            aaa = ctx.channel
            aaa = str(aaa)
            a = aaa.replace("ticket", "archived")
            await ctx.channel.edit(category=archival, name=a, topic="Archived ticket.", sync_permissions=True)
            embed=discord.Embed(description=f"Archived <#{ctx.channel.id}>.", color=0x4bdb48)
            embed.set_footer(text=f"Requested by {ctx.author.name}")
            await ctx.send(embed=embed)
            embed=discord.Embed(description=f"{ctx.channel.name} was archived.", color=0x4bdb48)
            embed.set_footer(text=f"Requested by {ctx.author.name}")
            await aa.send(embed=embed)
            # get message history for user channel
            messages = await ctx.channel.history().flatten()

            # create log filename using channel name and date
            log_file = f"logs/{ctx.channel.name}_{time.strftime('%m%d%Y_%H%M')}.txt"
            messages = messages[::-1]
            # write history to a file
            with open(log_file, "w+") as f:
                for message in messages:
                    try:
                        f.writelines(f"{message.author.name}: {message.content}\n")
                    except:
                        f.writelines("This line failed to write.")
            await aa.send(file=discord.File(log_file))

def setup(bot):
    bot.add_cog(Tickets(bot))