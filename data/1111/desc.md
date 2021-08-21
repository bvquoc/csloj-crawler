<!--
**<center>NGUỒN: VOI Training Camp 3H  (Ngày 02/11/2016)</center>**
-->

Cho $N$ dãy số không giảm $A_1, A_2, …, A_N$, mỗi dãy gồm $L$ số nguyên (dãy số được gọi là không giảm nếu mỗi phần tử đứng sau là lớn hơn hoặc bằng phần tử đứng trước). Xét hai dãy $A_i$ và $A_j$ $\left(1≤ i, j ≤ N\right)$, ta gọi dãy gộp (ký hiệu là $A_{ij}$) của hai dãy $A_i, A_j$  là dãy gồm tất cả $2L$ phần tử của hai dãy $A_i, A_j$ được sắp xếp theo thứ tự không giảm và phần tử đứng ở vị trí thứ $L$ trong dãy gộp được gọi là phần tử trung vị của nó.

**Ví dụ**: Xét hai dãy số $A_i = \left(1\ 3\ 4\ 5\ 6\right); A_j = \left(0\ 1\ 5\ 6\ 7\right)$. Khi đó dãy gộp $A_{ij}$ từ hai dãy đã cho là $0\ 1\ 1\ 3\ 4\ 5\ 5\ 6\ 6\ 7$ có phần tử trung vị là $4$.

**Yêu cầu**: Tính tổng của tất cả các phần tử trung vị của tất cả các dãy gộp $A_{ij}$ với $1≤i< j≤N$.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số $N$ và $L$ $\left(2 ≤ N ≤ 200, 1 ≤ L ≤ 20000\right)$;
- Dòng thứ $i$ trong số $N$ dòng tiếp theo chứa $L$ số nguyên là các phần tử của dãy thứ $i$ trong số $N$ dãy đã cho. Giả thiết là các phần tử của các dãy số là các số nguyên có trị tuyệt đối không vượt quá $10^9$.
Hai số liên tiếp trên cùng một dòng trong file dữ liệu được ghi cách nhau bởi ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi ra một số là  $\delta\ mod\ 10^9$ (là phần dư trong phép chia $\delta$ cho $10^9$), trong đó $\delta$  là tổng của tất cả các phần tử trung vị của tất cả các dãy gộp $A_{ij}$ với $1≤ i < j ≤ N$.

## Giới hạn:
- $50\%$ số test ứng với $50\%$ số điểm thoả mãn: $2 ≤ N ≤ 100, 1 ≤ L ≤ 300$.
- $50\%$ số test còn lại không có ràng buộc gì thêm.

## Ví dụ:
#### Dữ liệu vào:
```
3 6
1 2 3 4 5 6
3 4 5 6 7 8
0 0 1 1 2 2
```

#### Dữ liệu ra:
```
8
```