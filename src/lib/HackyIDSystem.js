class HackyIDSystem {
  counter = 0;
  getNext = () => this.counter;
  getLast = () => this.counter - 1;
  register = () => this.counter++;
}

const IDs = new HackyIDSystem();

export default IDs;
