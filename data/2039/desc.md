**<center>Nguồn:  Free Contest 06</center>**

Bila là trò chơi lăn bi trên lưới ô $M$ hàng $N$ cột. Mỗi ô trên lưới có một độ cao, các độ cao này phân biệt với nhau. Bao quanh lưới ô là một bức tường rất cao. Từ bất kì vị trí nào trên bảng, bi chỉ lăn đến một ô kề cạnh thấp hơn mà có độ cao thấp nhất. Hãy xác định độ dài quãng đường (số ô mà viên bi đi qua) lớn nhất mà viên bi có thể lăn qua được. Không chỉ thế, bạn còn phải cho biết ô thấp nhất mà từ đó, viên bi bắt đầu lăn với quãng đường dài nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số $M, N\ (1 ≤ M, N ≤ 125)$;
- $M$ dòng tiếp theo, mỗi dòng chứa $N$ số nguyên tương ứng với độ cao của các ô. Độ cao của ô nằm trong khoảng $1$ đến $65000$.

## Dữ liệu ra:
- In ra một dòng gồm hai số nguyên: Số đầu tiên là quãng đường tối đa mà viên bi có thể lăn, số thứ hai là chiều cao của ô thấp nhất mà nếu xuất phát từ đó, viên bi di chuyển với quãng đường lớn nhất.

## Ví dụ:
### Dữ liệu vào:
```
5 5
109 120 4 5 7
107 212 1 100 8
106 105 103 101 12
6 10 104 102 9
3 2 19 20 21
```

### Dữ liệu ra:
```
7 101
```

### Giải thích:
<center><img src="/images/problems/2039/bila.png" width=400px /></center>

- Đường đi dài nhất là $101, 12, 8, 7, 5, 4, 1$.