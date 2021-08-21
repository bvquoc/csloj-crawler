Để nhân hai ma trận ~A~ cấp ~m×n~ và ~B~ cấp ~n×p~ ta mất ~m\times n\times p~ phép nhân. Phép nhân ma trận không có tính chất giao hoán nhưng có tính chất kết hợp, tức là ~(A\times B)\times C = A\times (B\times C)~. Như vậy để nhân một dãy các ma trận liên tiếp (ma trận sau có số hàng bằng số cột của ma trận trước) chúng ta có thể thực hiện theo thứ tự khác nhau và do đó số phép nhân cần tính cũng khác nhau.

Chẳng hạn ta có ~3~ ma trận ~A, B, C~ có số chiều lần lượt là: ~4×3, 3×5, 5×3~.
- Nếu thực hiện theo thứ tự ~(A\times B)\times C~ thì số phép nhân cần tính là: ~4\times 3\times 5 + 4\times 5\times 3 = 120~
- Nếu thực hiện theo thứ tự ~A\times (B\times C)~ thì số phép nhân cần tính là : ~3\times 5\times 3 + 4\times 5\times 3 = 81~

****Yêu cầu:**** Cho dãy ~n~ ma trận (ma trận sau có số dòng bằng số cột của ma trận trước, theo thứ tự). Hãy tính số phép nhân tối thiểu cần tính để thực hiện nhân dãy các ma trận đó.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~;
- Dòng sau chứa ~n + 1~ số nguyên dương ~a_1, a_2, …, a_{n+1}~ (ma trận thứ ~i~ có ~a_i~ dòng và ~a_{i + 1}~ cột).

## Dữ liệu ra:
- Một số nguyên duy nhất là số phép nhân ít nhất cần tính.

## Ví dụ:
#### Dữ liệu vào:
```
3
4 3 5 3
```

#### Dữ liệu ra:
```
81
```

## Giới hạn:
- ~1 ≤ n ≤ 500; 1 ≤ a_i ≤ 1000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)