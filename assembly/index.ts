// The entry file of your WebAssembly module.

export class Rgb {
  constructor(public r: i32, public g: i32, public b: i32) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

export class Options {
  constructor(
    public threshold: f32,
    public includeAA: bool,
    public alpha: f32,
    public aaColor: Rgb,
    public diffColor: Rgb,
    public diffMask: bool
  ) {
    this.threshold = threshold;
    this.includeAA = includeAA;
    this.alpha = alpha;
    this.aaColor = aaColor;
    this.diffColor = diffColor;
    this.diffMask = diffMask;
  }
}

const defaultOptions = new Options(
  0.1, // matching threshold (0 to 1); smaller is more sensitive
  false, // whether to skip anti-aliasing detection
  0.1, // opacity of original image in diff ouput
  new Rgb(255, 255, 0), // color of anti-aliased pixels in diff output
  new Rgb(255, 0, 0), // color of different pixels in diff output
  false // draw the diff over a transparent background (a mask)
);

export function arrayDiffer(img1: Uint32Array, img2: Uint32Array): string {
  const me = 90;
  const debugValue =
    "IMG1: " +
    img1.length.toString() +
    "IMG2:" +
    img2.length.toString() +
    "sum:" +
    img1
      .reduce((a: u32, b: u32): u32 => {
        return a + b;
      }, 0 as u32)
      .toString() +
    "mestring:" +
    me.toString();
  return debugValue;
}
