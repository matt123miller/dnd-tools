'use strict';

const Schema = use('Schema');

class CreateRoomSchema extends Schema {
    up() {
        this.create('create_rooms', (table) => {
            table.increments();

            table.integer('user_id').references('id').inTable('users');

            table.timestamps();
        });
    }

    down() {
        this.drop('create_rooms');
    }
}

module.exports = CreateRoomSchema;
