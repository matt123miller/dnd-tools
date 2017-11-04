# dnd-tools

Working on some automation for my dnd games. Mostly generating the names of things, though I plan to eventually generate shops full of items and taverns full of people and some quest hooks.

## Requirements

 - Python 3.x

## Usage

For now you need to:
 - Open a terminal in the root of the project folder.
 - Enter `python main.py` followed by a variety of arguments

In the future I'll make it a proper CLI app available anywhere.

## Example usage

Generate 3 simple names

```
python main.py simple -n 3
>> Ignatius Lobb
>> Uriela Miller
>> Kyra Thaker
```

## Commands

The following commands can be entered after `python main.py`:

`[-h] [-n] {simple,compose,tavern}`

### Required arguments

 - `simple` will choose a first and second name from `{root}/name-generators/simple_names.json`
 - `compose` generates a first name from a random beginning, middle and end from `{root}/name-generators/name_components.json`
 - `tavern` generates the name of a tavern from a noun and an adjective. In future it will also generate patrons and some quest hooks.

### Optional arguments

 - `-h` or `--help` will show all the commands available.
 - `-n` or `--number` generates `n` different results of the chosen required argument, assuming n is an integer greater than 0.

## Contibution Guidelines

I'm happy to review pull requests and accept help for extra generators. Feel free to add more names or name components to the relevant JSON as well.

## License

 [MIT](./LICENSE)



