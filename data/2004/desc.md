**<center>Nguồn:  Free Contest 02</center>**

Một đất nước có $N$ thành phố được đánh số từ $0$ đến $N – 1$. Mỗi cặp thành phố được nối bằng một con đường hai chiều. Bờm muốn thực hiện một chuyến hành trình như sau:

Bờm xuất phát từ một thành phố bất kì và di chuyển qua mỗi thành phố khác đúng một lần (tất cả là $N – 1$ chặng).

Ngoài ra, có một số ràng buộc, được cho bởi ma trận $A$. Nếu $A(i, j)$ là
`Y`, Bờm buộc phải di chuyển qua con đường nối thành phố $i$ với thành
phố $j$. Dữ liệu đảm bảo $A(i, j) = A(j, i)$ và $A(i, i) =$ `N`.

Đếm số cách Bờm có thể thực hiện được hành trình.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N\ (1 ≤ N ≤ 50)$;
- $N$ dòng tiếp theo, mỗi dòng chứa một xâu gồm $N$ kí tự mô tả ma trận $A$.

## Dữ liệu ra:
- In ra số cách di chuyển có thể trong mô đun `1000000007`.

## Ví dụ:
### Dữ liệu vào:
```
3
NYN
YNN
NNN
```

### Dữ liệu ra:
```
4
```

### Dữ liệu vào:
```
4
NYYY
YNNN
YNNN
YNNN
```

### Dữ liệu ra:
```
0
```

### Dữ liệu vào:
```
6
NNNNNY
NNNNYN
NNNNYN
NNNNNN
NYYNNN
YNNNNN
```

### Dữ liệu ra:
```
24
```