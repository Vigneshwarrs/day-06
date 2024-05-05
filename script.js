// Movie
class Movie {
    constructor(title, studio, rating='PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies) {
        return movies.filter(movie=> movie.rating==='PG');
    }
}

const casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG-13');

// Circle
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return `Radius of the circle: ${this.radius}`;
  }
  setRadius(radius) {
    this.radius = radius;
    return this.radius;
  }
  getColor() {
    return `Color of the circle: ${this.color}`;
  }
  setColor(_color) {
    this.color = color;
    return this.color;
  }
  toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }
  getArea() {
    return Math.round(Math.PI * this.radius * this.radius);
  }
  getCircumference() {
    return Math.round(2 * Math.PI * this.radius);
  }
}

var obj = new Circle(25,"red");
console.log(obj);
console.log(obj.getColor());
console.log(obj.getRadius());
console.log(obj.toString());
console.log(obj.setRadius(5));
console.log(obj.getArea());
console.log(obj.getCircumference());

// Person class
class Person {
    constructor(name, age, degree, gender, hobby) {
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.gender = gender;
        this.hobby = hobby;
    }
    getName() {
        return `Name of the person: ${this.name}`;
    }
    getAge() {
        return `Age of the person: ${this.age}`;
    }
    getDegree() {
        return `Degree of the person: ${this.degree}`;
    }
    getAge() {
        return `Gender of the person: ${this.gender}`;
    }
    getAge() {
        return `Hobby of the person: ${this.hobby}`;
    }
    setName(name){
        this.name = name;
        return this.name;
    }
    setAge(age){
        this.age = age;
        return this.age;
    }
    setDegree(degree){
        this.degree = degree;
        return this.degree;
    }
    setGender(gender){
        this.gender = gender;
        return this.gender;
    }
    setHobby(hobby){
        this.hobby = hobby;
        return this.hobby;
    }
}

// Uber

class Uber {
    constructor(distance) {
        this.distance = distance;
    }
    getPrice() {
        return this.distance*18;
    }
}

var obj1 = new Uber(10);
console.log(obj1.getPrice());