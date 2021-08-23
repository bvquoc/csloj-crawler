**<center>NGUỒN: BÀI TẬP THẦY HIẾU HƯNG YÊN ÔN TẠI HƯNG YÊN NGÀY 13/11/2019</center>**
<br>

Cho đồ thị có hướng gồm $N$ đỉnh, $M$ cung (có trọng số là độ dài cung). Bạn hãy tìm độ dài đường đi ngắn thứ **nhì** từ $1$ đến $N$.

## Dữ liệu vào:
- Dòng đầu chứa hai số $N, M\ (2≤N≤2.10^4;0≤M≤10^5)$
- $M$ dòng tiếp theo, mỗi dòng ghi $3$ số nguyên dương $a,b,d$ tương ứng là có đường đi một chiều từ $a$ đến $b$ và độ dài bằng $d\ (1≤d≤ 10^5)$.

## Dữ liệu ra:
- Một số duy nhất là độ dài đường đi ngắn nhì, nếu không có thì ghi $-1$


## Ví dụ:
### Dữ liệu vào:
```
4 6
1 2 5
1 3 5
2 3 1
2 4 5
3 4 5
1 4 13
```

### Dữ liệu ra:
```
11
```

### Giải thích:
- Đường đi ngắn nhất: $1→2→4$ hoặc $1→3→4$ độ dài $10$
- Đường đi ngắn nhì: $1→2→3→4$  độ dài 11