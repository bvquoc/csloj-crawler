Cho mạng ~G = (V, E, c, s, t)~ với ~G = (V, E)~ là một đồ thị có hướng, không khuyên, có ~n~ đỉnh và ~m~ cung. Hai đỉnh ~s, t~ phân biệt lần lượt là đỉnh phát và đỉnh thu. Khả năng thông qua của cung ~(u, v)~ là ~c(u, v)~. Từ ~s~ chỉ có cung đi ra và từ ~t~ chỉ có cung đi vào. Hãy tìm một luồng cực đại trêng mạng đã cho.

## Dữ liệu vào:
- Dòng đầu chứa bốn số nguyên ~n, m, s, t~ là số đỉnh và số cung của ~G~, đỉnh phát và đỉnh thu;
- ~m~ dòng tiếp theo, mỗi dòng chứa ba số số ~u, v, c~ cho biết một cạnh nối hai đỉnh ~u~ và ~v~ trong ~G~ và khả năng thông qua ~c = w(u, v)~ tương ứng.

## Dữ liệu ra:
- Dòng đầu ghi một số nguyên là giá trị của luồng;
- Những dong tiếp theo, mỗi dòng ghi ba số nguyên dương ~u, v, f~ với ~(u, v)~ là một cung và ~f~ là giá trị của luồng trên cung đó (chỉ liệt kê những cung ~(u, v)~ có ~f(u, v) > 0~).

## Ví dụ:
<center><img src="/images/problems/556/HMAXFLOW.png" width="800px" /></center>

#### Dữ liệu vào:
```
6 8 1 6
1 2 5
1 3 5
2 4 6
2 5 3
3 4 3
3 5 1
4 6 6
5 6 6
```

#### Dữ liệu ra:
```
9
1 2 5
1 3 4
2 4 3
2 5 2
3 4 3
3 5 1
4 6 6
5 6 3
```

## Giới hạn:
- ~1 ≤ n ≤ 1000; m ≤ 10^5; 1 ≤ c ≤ 10000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)