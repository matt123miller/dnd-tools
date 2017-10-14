# Path wankery
import json
import random

from generator import Generator


class Simple_Name_Generator(Generator):

    json = ''

    def setup(self):
        # Get json with the filepath
        dir_path = self.directory(__file__)
        self.json = self.load_json(dir_path + '/simple_names.json')
        return self.json

    def generate(self):

        full_name = ''
        for key in self.json:
            full_name += random.choice(self.json[key]) + ' '
        return full_name.title()
