**<center>NGUỒN: Contest tháng 12/2017 Day 1 (Hiếu Hưng Yên - Second Round of Hải phòng)</center>**
<br>

Dãy số $e_1,e_2,…,e_{2k}\  (k≥2)$ được gọi là dãy “đặc biệt”  nếu thỏa mãn điều kiện: $e_1+e_{2k}>e_2+e_{2k-1}>⋯>e_k+e_{k+1}$

**Yêu cầu**: Cho dãy $N$ số nguyên dương phân biệt $A_1,A_2,…,A_N$, hãy đếm số lượng dãy con của dãy đã cho là “đặc biệt”,  biết rằng $A_{i_1},A_{i_2},…,A_{i_k}$ là dãy con của dãy A nếu tồn tại dãy chỉ số $i_1 < i_2 < ⋯ <i_k; (i_1,i_2,…,i_k∈[1;N])$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N\ (4≤N≤700)$
- $N$ dòng sau, dòng thứ $i$ chứa số nguyên dương $a_i\ (1≤a_i≤1000,a_i≠a_j∀i≠j)$

## Dữ liệu ra:
- Ghi một số nguyên duy nhất là số lượng dãy con là dãy “đặc biệt” theo `modulo` $30103$.

## Ví dụ:
### Dữ liệu vào:
```
5
1
2
3
5
6
```

### Dữ liệu ra:
```
2
```

### Giải thích:
- Có $2$ dãy thỏa mãn là $(1,2,3,5)$ và $(1,2,3,6)$. Do đó kết quả bằng $2 \mod 30103$.

## Giới hạn:
- $30\%$ số test tương ứng với $30\%$ số điểm có $N≤100$.