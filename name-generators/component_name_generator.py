# Path wankery
import json
import random

from generator import Generator


class Component_Name_Generator(Generator):

    json = ''

    def setup(self):
        # Get json with the filepath
        dir_path = self.directory(__file__)
        self.json = self.load_json(dir_path + '/name_components.json')
        return self.json

    def generate(self):

        composed_name = ''
        for key in self.json:
            composed_name += random.choice(self.json[key])
        return composed_name.title()
