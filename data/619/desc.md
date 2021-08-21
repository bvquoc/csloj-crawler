**<center>Nguồn: Beginner Free Contest 4</center>**

Cho một dãy số $A$ độ dài $N$. Ta gọi một vị trí $i$ $(1 ≤ i < N)$ là một vị trí tăng nếu $A_i > A_{i+1}$.

Cho $Q$ truy vấn, mỗi truy vấn được cho bởi ba số nguyên $l, r, x$, yêu cầu cộng thêm giá trị $x$ vào tất cả các phần tử có vị trí từ $l$ đến $r$. Hãy đếm số vị trí tăng sau khi thực hiện xong mỗi truy vấn.

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên $N, Q$ $(1 ≤ N, Q ≤ 200000)$ - độ dài dãy $A$ và số truy vấn;
- Dòng tiếp theo gồm $N$ số nguyên $A_1, A_2, ..., A_N$ $(1 ≤ A_i ≤ 10^9)$ mô tả dãy $A$;
- $Q$ dòng tiếp theo, dòng thứ $i$ gồm ba số nguyên $l_i, r_i, x_i$ $(1 ≤ l_i ≤ r_i ≤ N, |x_i| ≤ 10^9)$ mô tả truy vấn thứ $i$.

## Dữ liệu ra:
- In ra $Q$ dòng, dòng thứ $i$ cho biết số vị trí tăng sau khi thực hiện xong truy vấn thứ $i$.

## Ví dụ:
#### Dữ liệu vào:
```
7 3
3 5 4 2 4 6 7
4 6 2
1 4 3
2 2 -5
```

## Dữ liệu ra:
```
2
3
3
```

#### Giải thích:
- Sau khi thực hiện xong truy vấn thứ nhất, dãy số trở thành $3, 5, 4, 4, 6, 8, 7$, các vị trí tăng là $2, 6$;
- Sau khi thực hiện xong truy vấn thứ hai, dãy số trở thành $6, 8, 7, 7, 6, 8, 7$, các vị trí tăng là $2, 4, 6$;
- Sau khi thực hiện xong truy vấn thứ ba, dãy số trở thành $6, 3, 7, 7, 6, 8, 7$, các vị trí tăng là $1, 4, 6$.

## Giới hạn:
- **Subtask** $\#1$ $(40\%\text{ số điểm}): N, Q ≤ 2000$;
- **Subtask** $\#2$ $(60\%\text{ số điểm}):$ Không có ràng buộc gì thêm.