Trong rạp chiếu phim có $N$ ghế dành cho $N$ vị khách. Mỗi người lần lượt vào rạp xem phim và phải ngồi vào đúng chỗ của mình (người vào thứ $i$ phải ngồi ghế thứ $i$). Tuy nhiên, có một ông khách **VIP** vào đầu tiên và được giành lấy một ghế bất kì. Mỗi người tiếp theo khi vào rạp thì ý thức hơn nên sẽ ngồi vào đúng chỗ (nếu ghế của họ chưa có người ngồi). Nhưng nếu chỗ của họ đã bị lấy mất thì họ được quyền chọn $1$ ghế khác bất kì.

Ta biết $C_{ij}$ là độ hài lòng của vị khách thứ $i$ khi ngồi vào ghế thứ $j$. Hãy tính giá trị lớn nhất có thể của tổng độ hài lòng của $N$ vị khách.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$;
- $N$ dòng tiếp theo, dòng thứ $i$ chứa $N$ số nguyên $C_{i1}, C_{i2}, …, C_{iN}$.

## Dữ liệu ra:
- Một số nguyên duy nhất là giá trị lớn nhất của tổng độ hài lòng có thể được.

## Ví dụ:
#### Dữ liệu vào:
```
4
2 6 8 6 
5 0 6 7 
8 0 1 9 
2 7 2 4
```

#### Dữ liệu ra:
```
24
```

#### Giải thích:
- Khách VIP (người thứ nhất) vào ghế số $2$, người thứ $2$ vào ghế số $3$, người số $3$ vào ghế số $1$, người thứ $4$ vào ghế số $4$, tổng độ hài lòng là $6 + 6 + 8 + 4 = 24$.

## Giới hạn:
- $1 ≤ N ≤ 1000, | a_i | ≤ 10^9$.