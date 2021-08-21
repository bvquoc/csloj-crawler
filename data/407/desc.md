Cho hai dãy số nguyên ~a_1, a_2, …, a_n~ và ~b_1, b_2, …, b_m~ trong đó dãy số ~a_1, a_2, …, a_n~ đã được sắp xếp không giảm (tức là ~a_1 ≤ a_2 ≤ … ≤ a_n~). Với mỗi chỉ số ~i~ ~(1 ≤ i ≤ m)~ hãy tìm sự xuất hiện của ~b_i~ trong dãy ~a_1, a_2, …, a_n~.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên dương ~n~ và ~m~;
- Dòng thứ hai ghi ~n~ số nguyên ~a_1, a_2, …, a_n~;
- Dòng thứ ba ghi ~m~ số nguyên ~b_1, b_2, …, b_m~.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một xâu nhị phân độ dài ~m~, trong đó ký tự thứ ~i~ ~(1 ≤ i ≤ m)~ là `1` nếu ~b_i~ có xuất hiện trong dãy ~a_1, a_2, …, a_n~, và là `0` nếu ngược lại.

## Ví dụ:
#### Dữ liệu vào:
```
7 5
1 2 3 4 4 6 7
3 1 5 4 8
```

#### Dữ liệu ra:
```
11010
```

## Giới hạn:
- ~1 ≤ n, m ≤ 10^5; |a_i|, |b_i| ≤ 10^9~.