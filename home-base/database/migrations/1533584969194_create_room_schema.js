'use strict';

const Schema = use('Schema');

class CreateRoomSchema extends Schema {
    up() {
        this.create('rooms', (table) => {
            table.increments();

            table.integer('user_id');

            // table.foreign('user_id').references('id').inTable('users');

            const rooms = [
                `Alchemist\\'s lab`,
                'Animal Pen',
                `Arcanist\\'s Study`,
                'Armoury',
                'Bank',
                'Baths',
                'Battle Ring',
                'Boutique',
                'Caravansary',
                'Catacombs',
                'Chapel',
                'Clock Tower',
                'Dining Hall',
                'Docks, Air',
                'Docks, Water',
                'Escape Tunnel',
                'Garden',
                'Jails',
                'Library',
                'Lodgings',
                'Magical Enchanter',
                'Market Stalls',
                'Mill',
                `Poisoner\\'s Grotto`,
                'Ritual Circle',
                'Sewers',
                'Smithy',
                'Stables',
                'Tavern',
                'Theater',
                'War Room'
            ];
            table.enu('room_type', rooms);
            table.integer('room_level');

            table.timestamps();
        });
    }

    down() {
        this.drop('rooms');
    }
}

module.exports = CreateRoomSchema;
