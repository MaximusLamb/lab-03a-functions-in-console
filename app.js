

const timmy = { name: 'timmy', age: 222, weight: 40};
const tony = { name: 'tony', age: 1, weight: 39};
const sam = { name: 'sam', age: 18, weight: 300};
const phil = { name: 'phil', age: 3, weight: 25};
const chicken = { name: 'chicken', age: 45, weight: 1};
const buttHead = { name: 'buttHead', age: 16, weight: 12};

const dogs = [timmy, tony, sam, phil, chicken, buttHead];

for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
}

function logOutThings(dogs) {
    for (let i = 0; i < dogs.length; i++) {
        console.log(dogs[i]);
    }
}

logOutThings(dogs);


