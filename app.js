

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
    console.log('Here are your ' + dogs.length + ' things');
    for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].weight < 25) {
            console.log('small dogs')
            console.log(dogs[i]);
        }  else {
            console.log('fat dogs')
            console.log(dogs[i]);
    }

       
    }
}

logOutThings(dogs);







