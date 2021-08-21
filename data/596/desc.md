Một đế chế đang xây dựng mạng lưới cho các hành tinh trong nó. Đế chế gồm có $N$ hành tinh được biểu diễn như các điểm trong không gian $3$ chiều. Chi phí phải chi cho việc nối giữa hành tinh $A$ và hành tinh $B$ là $min\{|x_A - x_B|, |y_A - y_B|, |z_A - z_B|\}$ với $(x_A, y_A, z_A), (x_B, y_B, z_B)$ là tọa độ của hành tinh $A, B$ trong không gian $3$ chiều. Đế chế dự tính sẽ xây dựng $N – 1$ cầu nối như vậy để các hành tinh liên thông với nhau và và chi phí phải chi phải nhỏ nhất có thể.

## Dữ liệu vào:
- Dòng đầu là số hành tinh $N\ (N≤10^5)$;
- $N$ dòng sau mỗi dòng chứa ba số nguyên $x, y, z\ (|x|, |y|, |z| ≤ 10^9)$ là tọa độ của một hành tinh.

## Dữ liệu ra:
- Ghi trên một dòng một số duy nhất là chi phí nhỏ nhất có thể.

## Ví dụ:
#### Dữ liệu vào:
```
5
11 -15 -15
14 -5 -15
-1 -1 -5
10 -4 -1
19 -4 19
```

#### Dữ liệu ra:
```
4
```

#### Giải thích:
- Nối giữa hành tinh $1$ và $2$ chi phí bằng $0$;
- Nối giữa hành tinh $4$ và $5$ chi phí bằng $0$;
- Nối giữa hành tinh $4$ và $1$ chi phí bằng $1$;
- Nối giữa hành tinh $3$ và $4$ chi phí bằng $3$.

Tổng chi phí bằng $4$.