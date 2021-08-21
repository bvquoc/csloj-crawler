**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Dãy $X = x_1, x_2, …, x_k$ được gọi là núi nếu tồn tại số tự nhiên $i$ sao cho:
- $x_j < x_{j+1}\ ∀1 ≤ j < i$;
- $x_j > x{j+1}\ ∀i ≤ j < k$.

Cho dãy số nguyên $a$, hãy đếm số cách xóa đi một số phần tử của $a$ sao cho dãy còn lại là núi. Hai cách xóa được cho là khác nhau nếu tồn tại một vị trí được xóa trong cách này nhưng không được xóa trong cách kia.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$ là số phần tử của dãy $a$;
- Dòng tiếp theo chứa dãy $a$.

## Dữ liệu ra:
- In ra phần dư của số cách xóa khi chia cho $10^9 + 7$.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 2 3 2 1
```

#### Dữ liệu ra:
```
27
```

#### Giải thích
- Các cách xóa thỏa mãn là (dãy con sau khi xóa): $∅, 1, 2, 3, 2, 1, 12, 13, 12, 23, 21, 32, 31, 21, 123, 121, 132, 131, 121, 232, 231, 321, 1232, 1231, 1321, 2321, 12321$

## Giới hạn:
- $n ≤ 10^5; −10^9 ≤ a^i ≤ 10^9$;
- $30\%$ số test với $n ≤ 20$;
- $30\%$ test với $20 < n ≤ 1000$.