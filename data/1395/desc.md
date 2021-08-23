**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Cho một cây $n$ đỉnh, các đỉnh được đánh số từ $1$ đến $n$ với gốc là đỉnh $1$. Các đỉnh nằm trên đường đi từ $x$ đến $1$ được gọi là các đỉnh tổ tiên của $x$. Tập các đỉnh nhận $r$ làm tổ tiên cùng với các cạnh tương ứng sẽ tạo thành một cây, gọi là cây con gốc $r$. Ta nói cây con gốc $a$ đẳng cấu với cây con gốc $b$ nếu có thể đánh số lại các đỉnh của cây con gốc $a$ sao cho hai cây giống hệt nhau, đồng thời số $b$ được dùng để đánh cho đỉnh $a$.

**Yêu cầu:** Đếm số cặp $(x, y)$ với $x < y$ sao cho cây con gốc $x$ đẳng cấu với cây con gốc $y$.

## Dữ liệu vào:
- Dòng đầu chứa $n$;
- $n − 1$ dòng tiếp theo ghi các cạnh của cây $u, v$.

## Dữ liệu ra:
- Một số nguyên là số cặp cây con đẳng cấu.

## Ví dụ:
### Dữ liệu vào:
```
5
1 2
1 3
2 4
2 5
```

### Dữ liệu ra:
```
3
```
## Giới hạn:
- $50\%$ số test có $1 ≤ n ≤ 500$;
- $50\%$ số test có $501 ≤ n ≤ 5000$.
