import asyncio
import datetime
import json
from datetime import datetime as dt
import logging
import sqlite3
from pathlib import Path

import discord
from discord.ext import commands





async def run():
    intents = discord.Intents.default()
    intents.members = True
    bot = Bot(description="a", intents=intents)
    bot.remove_command("help")

    try:
        await bot.start("Nzc3MjA2NjEwMzc5NTM4NDYy.X7AEDw.cIyrAV4M9CVt_A2u-VUhOeTS6js")
    except KeyboardInterrupt:
        await bot.logout()


class Bot(commands.Bot):
    def __init__(self, **kwargs):
        super().__init__(
            command_prefix= ["!"],
            description=kwargs.pop('description')
        )
        self.start_time = None
        self.app_info = None

        self.loop.create_task(self.track_start())
        self.loop.create_task(self.load_all_extensions())

    async def status_task(self):
        await self.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name="the tickets!"))

    async def track_start(self):
        await self.wait_until_ready()
        self.start_time = datetime.datetime.utcnow()


    async def load_all_extensions(self):
        await self.wait_until_ready()
        await asyncio.sleep(1)
        cogs = [x.stem for x in Path('cogs').glob('*.py')]
        for extension in cogs:
            try:
                self.load_extension(f'cogs.{extension}')
                print(f'loaded {extension}')
            except Exception as e:
                error = f'{extension}\n {type(e).__name__} : {e}'
                print(f'failed to load extension {error}')
            print('-' * 10)

    async def on_ready(self):
        print('-' * 10)
        self.app_info = await self.application_info()
        print(f'Logged in as: {self.user.name}\n'
              f'Using discord.py version: {discord.__version__}\n'
              f'Owner: {self.app_info.owner}')
        print('-' * 10)
        self.launch_time = dt.utcnow()
        self.loop.create_task(self.status_task())


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)

    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())