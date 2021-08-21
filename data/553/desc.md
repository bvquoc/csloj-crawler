Cho đồ thị vô hướng liên thông, có trọng số ~G = (V, E, w)~ có ~n~ đỉnh, ~m~ cạnh, cạnh ~(u, v)~ có trọng số ~w(u, v)~. Hãy tìm cây khung nhỏ nhất (cây khung có tổng trọng số trên các cạnh nhỏ nhất) của đồ thị ~G~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n~ và ~m~ là số đỉnh và số cạnh của ~G~;
- ~m~ dòng tiếp theo, mỗi dòng chứa ba số số ~u, v, c~ cho biết một cạnh nối hai đỉnh ~u~ và ~v~ trong ~G~ và trọng số ~c = w(u, v)~ tương ứng.

## Dữ liệu ra:
- Dòng đầu ghi một số nguyên là tổng trọng số của cây khung;
- ~n – 1~ dòng tiếp theo, mỗi dòng ghi hai số ~u, v~ mô tả một cạnh của cây khung. 

## Ví dụ:
<center><img src="/images/problems/553/MPANTREE.svg" width="300px" /></center>

#### Dữ liệu vào:
```
6 9
1 2 1
1 3 1
2 4 1
2 3 2
2 5 1
3 5 1
3 6 1
4 5 2
5 6 2
```

#### Dữ liệu ra:
```
5
2 1
3 1
4 2
5 2
6 3
```

## Giới hạn:
- ~1 ≤ n ≤ 100; n – 1 ≤ m ≤ \frac{n(n – 1)}{2} ;0 ≤ c ≤ 10000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)