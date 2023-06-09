```js
const obj = {}
for(let i =0; i < 10000; i++){ //1000000 // 5000000
    obj['t' + i] = i
}

const test = () => {
  console.time("values");
  Object.values(obj);
  console.timeEnd("values");

  console.time("keys");
  Object.keys(obj);
  console.timeEnd("keys");

  console.time("keys+map");
  Object.keys(obj).map((key) => obj[key]);
  console.timeEnd("keys+map");


  console.time("keys+map-arr");
  Object.keys(obj).map((key) => [key, obj[key]]);
  console.timeEnd("keys+map-arr");

  console.time("entries");
  Object.entries(obj);
  console.timeEnd("entries");

  console.time("hasOwnProperty");
  Object.prototype.hasOwnProperty(obj, "t7");
  console.timeEnd("hasOwnProperty");

  console.time("is");
  const t = obj["t7"];
  console.timeEnd("is");

  console.time("forIn");
  for (let key in obj) {
    const value = obj[key];
  }
  console.timeEnd("forIn");

  const arr = Object.keys(obj);

  console.time("forOf");
  for (let key of arr) {
    const value = obj[key];
  }
  console.timeEnd("forOf");


  console.time("forEach");
  arr.forEach((key) => {
    const v = obj[key];
  });
  console.timeEnd("forEach");

  console.time("for");
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const v = obj[key]
  }
  console.timeEnd("for");
};
test()
```

Result:
- values:          3.602783203125 ms  565.6630859375 ms    3855.447021484375 ms
- keys:            1.0400390625 ms    236.793212890625 ms  1439.033203125 ms
- keys+map:        1.571044921875 ms  337.56396484375 ms   1878.81884765625 ms
- keys+map-arr:    2.3701171875 ms    518.314208984375 ms  3639.506103515625 ms
- entries:         2.87890625 ms      1417.2490234375 ms   19497.90283203125 ms

- hasOwnProperty:  0.007080078125 ms  34.61083984375 ms     257.613037109375 ms
- is:              0.000732421875 ms  0.003173828125 ms     0.003173828125 ms

- forIn:           1.8232421875 ms    275.508056640625 ms   1640.68701171875 ms
- forOf:           0.401123046875 ms  109.1201171875 ms     612.98681640625 ms

- forEach:         0.4990234375 ms    66.9619140625 ms      367.650146484375 ms
- for:             0.385009765625 ms    56.57421875 ms      310.1142578125 ms




