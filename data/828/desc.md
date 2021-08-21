Cho dãy gồm ~L~ số ~C[1..L]~, cần chia dãy này thành ~G~ đoạn liên tiếp. Với phần tử thứ ~i~, ta định nghĩa chi phí của nó là tích của ~C_i~ và số lượng các số nằm cùng đoạn liên tiếp với ~C_i~. Chi phí của dãy số ứng với một cách phân hoạch là tổng các chi phí của các phần tử của G đoạn đã chia.

**Yêu cầu:** Hãy xác định cách phân hoạch dãy số để chi phí là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số ~L~ và ~G~;
- ~L~ dòng tiếp theo, chứa giá trị của dãy ~C_1, C_2, …, C_n~.

## Dữ liệu ra:
- Ghi ra một dòng duy nhất là chi phí nhỏ nhất.

## Giới hạn:
- ~1 ≤  L ≤ 8000, 1 ≤ G  ≤ 800; 1 ≤ C_i ≤ 10^9~.

## Ví dụ:
#### Dữ liệu vào:
```
6 3
11 11 11 24 26 100
```

#### Dữ liệu ra:
```
299
```

#### Giải thích:
- Cách tối ưu là ~C[]=(11,11,11), (24,26), (100)~, chi phí là ~11\times 3 + 11\times 3 + 11\times 3 + 24\times 2 + 26\times 2 + 100\times 1=299~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)