Cho đồ thị hai phía ~G = (X U Y, E)~. Các đỉnh của ~X~ ký hiệu là ~x_1, x_2, …, x_p~; các đỉnh của ~Y~ ký hiệu là ~y_1, y_2, …, y_q~.

Một bộ ghép trên ~G~ là một tập các cạnh của ~E~ đôi một không có đỉnh chung.

**Bài toán:** Hãy tìm một bộ ghép cực đại (bộ ghép có nhiều cạnh nhất) trên ~G~.

## Dữ liệu vào:
- Dòng đầu ghi ba số nguyên dương ~p, q, n~ là số đỉnh của ~X~, số đỉnh của ~Y~ và số cạnh của ~G~;
- ~n~ dòng tiếp theo, mỗi dòng chứa hai số ~u, v~ cho biết một cạnh ~(x_u, y_v)~ thuộc ~E~.

## Dữ liệu ra:
- Dòng đầu ghi một số nguyên ~m~ là số cạnh của bộ ghép;
- ~m~ dòng tiếp theo, mỗi dòng ghi hai số nguyên ~u, v~ là một cạnh ~(x_u, y_v)~ của bộ ghép.

## Ví dụ:
<center><img src="/images/problems/557/BMATCH.png" width="250px" /></center>

#### Dữ liệu vào:
```
3 3 5
1 1
1 3
2 1
2 2
3 2
```

#### Dữ liệu ra:
```
3
1 3
2 1
3 2
```

## Giới hạn:
- ~1 ≤ p, q ≤ 1000; n ≤ 10^6~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)