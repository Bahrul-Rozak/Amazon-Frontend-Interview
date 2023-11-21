const greeting = (name) => {
  const greetingMessage = "Hello, ";

  const displayGreeting = () => {
    console.log(greetingMessage + name);
  };

  return displayGreeting;
};

const sayHello = greeting("John");

sayHello(); // outputs "Hello, John"
