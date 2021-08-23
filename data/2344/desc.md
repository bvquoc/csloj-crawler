Có $M$ viên gạch có kích thước $1 × 1 × 1$, cần xếp chúng thành $N$ chồng liên tiếp nhau với số gạch các chồng là $A_1, A_2, \dots, A_N$ thỏa mãn các điều kiện sau:
- $A_i ≥ 1 (\forall 1 ≤ i ≤ N)$;
- Tồn tại $i\ (1 ≤ i ≤ N)$ thoả mãn: $A_1 ≥ A_2 ≥ \dots ≥ A_i ≤ A_{i + 1} ≤ \dots ≤ A_N$.

**Yêu cầu:** Tính số cách xếp (lấy phần dư theo modulo $10^9 + 7$).

## Dữ liệu vào:
- Một dòng gồm hai số nguyên dương $N$ và $M$.

## Dữ liệu ra:
- Một dòng duy nhất là số cách xếp lấy phần dư cho $10^9 + 7$.

## Ví dụ:
### Dữ liệu vào:
```
3 6
```

### Dữ liệu ra:
```
7
```

### Giải thích:
- Các cách xếp được như hình dưới đây:
<center><img src="/images/problems/2344/TURTLEPOOL.png" width="500px" /></center>

## Giới hạn:
- Trong tất cả các test có $1 ≤ N ≤ M ≤ 5000$.