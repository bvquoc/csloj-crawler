**<center>NGUỒN: Contest tháng 12/2017 Day 2 (Hiếu Hưng Yên - Second Round of Hải phòng)</center>**
<br>

Một đồ thị dạng “sao” có $2$ loại đỉnh: $1$ đỉnh tâm và $𝐾$ đỉnh cánh, và có đúng $𝐾$ cạnh nối đỉnh tâm với mỗi đỉnh cánh $(1 ≤ 𝐾 ≤ 𝑇$, $𝑇$ là một số cho trước).

Cho một đồ thị vô hướng, bạn phải tìm một số đồ thị con, mỗi đồ thị con là một đồ thị “sao” mà không có $2$ đồ thị con nào có đỉnh chung. Mục tiêu là chọn các đồ thị con sao cho số đỉnh được phủ là nhiều nhất.

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên $𝐶$ là số bộ test $(1 ≤ 𝐶 ≤ 10)$; 
- $𝐶$ bộ test tiếp theo, mỗi bộ gồm ba số $𝑁, 𝑇, 𝑀$ (số đỉnh, số cánh nhiều nhất của một sao và số cạnh) $(2 ≤ 𝑁 ≤ 100; 2 ≤ 𝑇 ≤ 100; 0 ≤ 𝑀 ≤ \frac{𝑁\times (𝑁−1)}{2})$;
- $𝑀$ dòng tiếp theo, mỗi dòng gồm hai số $𝑢, 𝑣$ thể hiện có cạnh nối hai chiều giữa đỉnh $𝑢$ và $𝑣\ (1 ≤ 𝑢, 𝑣 ≤ 𝑁)$. Chú ý rằng đồ thị không có cạnh trùng và không có đỉnh tự nối với chính nó. 
Các số trên một dòng được ghi cách nhau bởi dấu cách. 

## Dữ liệu ra:
- Ghi ra $𝐶$ dòng, mỗi dòng gồm một số nguyên duy nhất là số đỉnh tối đa được phủ bởi các đồ thị sao.

## Ví dụ:
#### Dữ liệu vào:
```
2
8 2 7
1 4
2 4
3 4
5 4
5 8
5 7
5 6
6 3 8
1 2
2 3
3 4
4 5
5 6
6 1
1 4
2 5
```
#### Dữ liệu ra:
```
6
6
```

#### Giải thích:
- Test $\#1$: Hình vẽ cho đồ thị của test này bên dưới. Bởi $𝑇 = 2$, mỗi đồ thị sao có tối đa $2$ cánh nên mỗi sao có thể phủ tối đa $3$ nút. Ta có thể phủ $6$ nút của đồ thị này với $2$ sao: một sao có tâm là $4$ và $2$ cánh là $1$ và $3$, sao kia có tâm là $5$ với $7$ và $8$ là cánh. Không có sao nào khác được tạo thêm. Mỗi test case có thể có nhiều cách kết hợp sao khác nhau.
<center><img src="/images/problems/1148/star1.png" width=350px></center>
<center>Hình minh họa</center>

- Test $\#2$: Hình vẽ cho test này phía dưới. Ta có thể phủ $6$ đỉnh với $2$ sao. Một sao có tâm là $2$ với cánh là $1$ và $3$, sao còn lại có tâm là $5$ và $2$ cánh là $4$ và $6$.
<center><img src="/images/problems/1148/star1.png" width=350px></center>
<center>Hình minh họa</center>

## Giới hạn:
- $50\%$ số điểm có $𝑁 ≤ 10$. 