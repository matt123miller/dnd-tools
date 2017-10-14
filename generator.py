import json


class Generator(object):

    def directory(self, file):
        import os
        return os.path.dirname(os.path.realpath(file))

    def load_json(self, filepath):
        return_json = ''
        with open(filepath) as json_file:
            return_json = json.loads(json_file.read())
        return return_json

    def setup(self):
        raise NotImplementedError

    def generate(self):
        raise NotImplementedError
