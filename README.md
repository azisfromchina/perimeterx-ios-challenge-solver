Example usage

var appName = "Chegg"
var appc2 = [
  2, 
  1736983811039, 
  "edff2c5ac806286a42520831ffd99a75dd84a479eba04f8617d3c2c335475970,edff2c5ac806286a42520831ffd99a75dd84a479eba04f8617d3c2c335475970", 
  2342, 
  2727,
  2866, 
  3314, 
  2593, 
  496
];

var chall_2 = sub_30dc4(sub_30dc4(appc2[5], appc2[6], appc2[3], appc2[8], appName).toString(),appc2[7], appc2[4], appc2[8],appName).toString();

const hexValue = "0x6950686f"; // translates to iPho if the device is iPhone, if the device is iPad it will be 0x69506164
const A = parseInt(hexValue, 16);
var chall_solved = A ^ chall_2;
