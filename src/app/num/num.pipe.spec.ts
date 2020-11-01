import { NumPipe } from "./num.pipe";

describe('NumPipe', () => {
  it('should display weak if strength is 5', () => {
    let pipe = new NumPipe();

    expect(pipe.transform(5)).toEqual('5 (positive)');
  })

  it('should display strong if strength is negative', () => {
    let pipe = new NumPipe();

    expect(pipe.transform(-1)).toEqual('-1 (negative)');
  })
})