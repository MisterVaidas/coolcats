const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL)

const Cat = require('./modules/cat');

async function seed() {
    await Cat.create(
        {
            name: 'Felix',
            color: 'Grey and white',
            hasClaws: true,
            likes: ['sleeping', 'sipping milk', 'go for a walk', 'chasing pigeons'],
        }
    );

    await Cat.create(
        {
            name: 'Frederick',
            color: 'Black',
            hasClaws: false,
            likes: ['play', 'sleep in sunshine', 'extreme ironing', 'eating'],
        }
    )

    console.log('go kitty go');
    mongoose.disconnect()
}

seed();