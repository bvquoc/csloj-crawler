Cho đơn đồ thị có hướng (không có khuyên) trọng số dương ~G~ có ~N~ đỉnh. Đồ thị ~G~ được cho bởi ma trận kề ~A = (a_{ij})~, trong đó:
- ~a_{ij} > 0~ là trọng số của cung đi từ đỉnh ~i~ đến đỉnh ~j~
- ~a_{ij} = 0~ nếu không có cung đi từ đỉnh ~i~ đến đỉnh ~j~.

**Yêu cầu:** Hãy tìm đường đi ngắn nhất qua đúng ~K~ cạnh của đồ thị. Tức là tìm ma trận ~C = (c_{ij})~, trong đó:

- ~c_{ij} = 0~ nếu không có đường đi từ ~i~ đến ~j~ qua đúng ~K~ cạnh của đồ thị
- ~c_{ij} > 0~ là độ dài đường đi ngắn nhất từ ~i~ đến ~j~ qua đúng ~K~ cạnh của đồ thị.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N, K~;
- ~N~ dòng sau, dòng thứ ~i~ chứa ~N~ số nguyên không âm ~a_{i1}, a_{i2}, …, a_{iN}~.

Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Gồm ~N~ dòng, dòng thứ ~i~ chứa ~N~ số nguyên không âm ~c_{i1}, c_{i2}, …, c_{iN}~. Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
4 2
0 1 0 0
0 0 1 3
3 0 0 1
1 0 0 0
```

#### Dữ liệu ra:
```
0 0 2 4
4 0 0 2
2 4 0 0
0 2 0 0
```

## Giới hạn:
- ~1 ≤ K ≤ N ≤ 200; 0 ≤ a_{ij} ≤ 1000~.