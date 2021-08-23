<!--
**<center>NGUỒN: VOI Training Camp 3H  (Ngày 03/11/2016 Am)</center>**
-->

Cho số nguyên dương $K$ và $N$ tập hợp khác rỗng $S_1,S_2,..,S_N$. Tập $S_i\  (1≤i≤N)$ gồm các phần tử khác nhau $∈[0;9]$

Người ta định nghĩa phép toán $S_i-S_j$ là những phần tử chỉ thuộc tập $S_i$ và không thuộc tập $S_j$.

**Ví dụ**: $S_i=(1,3,8)$ và $S_j=(2,9,3)$ khi đó $S_i-S_j=(1,8)$.

Dễ dàng nhận thấy phép toán trên không có tính kết hợp, tức là $(S_i-S_j )-S_p≠S_i-(S_j-S_p)$ nên chúng ta quy ước thứ tự thực hiện phép toán $S_{i_1}-S_{i_2}-…-S_{i_m}$ là thực hiện từ phải qua trái.

**Ví dụ**: $(1,2,3)-(2,3)-(1,3)$=$(1,2,3)-(2)=(1,3)$.

**Yêu cầu**: Hãy xác định số cách chọn các tập $S_{i_1},S_{i_2},…,S_{i_m}\  (1≤i_1<i_2<⋯<i_m≤N)$ từ tập $S_1,S_2,..,S_N$ sao cho $S_{i_1}-S_{i_2}-…-S_{i_m}$ được kết quả là tập có ít nhất $K$ phần tử khác nhau.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $K\ (1≤K≤8)$ và $N\ (2≤N≤50000)$
- $N$ dòng tiếp theo, dòng thứ $i$ mô tả tập $S_i$ chứa các số $t, c_1,  c_2, \ldots, c_t$ trong đó $t$ là số lượng phần tử của tập $S_i$, $c_1  c_2 \ldots c_t$ là các phần tử của tập $S_i$.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kết quả bài toán (lấy theo modulo $123457$).

## Ví dụ:
### Dữ liệu vào:
```
3 3
5 5 6 7 8 9
3 4 5 6
3 7 8 9
```

### Dữ liệu ra:
```
6
```

### Giải thích:
- Có thể chọn: $s_1,s_1-s_2,s_1-s_2-s_3,s_2,s_2-s_3,s_3$