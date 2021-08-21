Với đồ thị ~G = (V, E)~ ta xây dựng đồ thị mới ~G' = (E, V')~ cũng gồm các đỉnh của ~V~ nhưng các cạnh thì được xây dựng như sau:
Giữa hai đỉnh ~u, v~ của ~G'~ có cạnh nối ~⇔~ có đường đi từ ~u~ đến ~v~ trong ~G~. Đồ thị ~G' = (E, V')~ gọi là bao đóng của đồ thị ~G = (V, E)~.
<center><img src="/images/problems/537/BAODONG.jpg" width="400px" /></center>

**Bài toán:** Cho đơn đồ thị ~G(V, E)~ có ~n~ đỉnh được biểu diễn vởi ma trận kề ~A=(a_{ij})~. Hãy tìm bao đóng của ~G(V, E)~.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~n~ là số đỉnh của đồ thị ~G~;
- ~n~ dòng tiếp theo, dòng thứ ghi ~n~ số nguyên ~0~ hoặc ~1~ là dòng ~i~ của ma trận kề ~A~.

## Dữ liệu ra:
- Ghi ra ma trận kề ~A’~ của đồ thị ~G’ = (E, V’)~.

## Ví dụ:
#### Dữ liệu vào:
```
5
0 1 0 0 0
1 0 1 0 0
0 1 0 1 0
0 0 1 0 1
0 0 0 1 0
```

#### Dữ liệu ra:
```
0 1 1 1 1
1 0 1 1 1
1 1 0 1 1
1 1 1 0 1
1 1 1 1 0
```

## Giới hạn:
- ~1 ≤ n ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)