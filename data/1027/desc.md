**<center>NGUỒN: Ôn HN tháng 11/2017, Thầy Nguyễn Đức Nghĩa, Ngày 1</center>**
<br>

Cho đồ thị có hướng $G$ với tập đỉnh $V$ gồm $n$ đỉnh và tập cung $E$ gồm $m_1$ cung. Các đỉnh của đồ thị được đánh số từ $1$ đến $n$. Biết rằng đồ thị $G$ chứa hai đỉnh đặc biệt $s$ và $t$: Từ $s$ có đường đi đến tất cả các đỉnh thuộc tập $V \backslash \{s\}$ và từ các đỉnh $V \backslash \{t\}$ luôn có đường đi đến $t$. Cũng trên tập đỉnh $V$ ta có tập $U$ gồm $m_2$ cung. Mỗi cung $u \in U$ được gán một số nguyên được gọi là trọng số của nó.
Vấn đề đặt ra là cần tìm cách bổ sung vào đồ thị $G$ một số cung từ tập $U$ sao cho:
- Đồ thị $G^*$ thu được từ việc bổ sung các cung này vào đồ thị $G$ là đồ thị liên thông mạnh (nghĩa là luôn có đường đi nối hai đỉnh bất kỳ của đồ thị $G^*$).
- Tổng trọng số của các cạnh bổ sung là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n\ (1 ≤ n ≤ 10^5)$.
- Dòng thứ hai chứa số nguyên không âm $m_1$.
- Tiếp đến là $m_1$ dòng, mỗi dòng mô tả một cung. Mỗi cung được xác định bởi đỉnh đầu và đỉnh cuối của nó.
- Tiếp đến là số nguyên không âm $m_2$.
- Tiếp đến là $m_2$ dòng, mỗi dòng mô tả thông tin về một cung của tập $U$ gồm chỉ số đỉnh đầu, chỉ số đỉnh cuối và trọng số của cung. Trọng số của cung là số nguyên nằm trong khoảng từ $-10^9$ đến $10^9$. Giả thiết là $m_1 + m_2 ≤ 5.10^5$.
Các số trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Dòng đầu tiên ghi `YES` nếu như có cách bổ sung các cung thỏa mãn yêu cầu đặt ra; ghi `NO` nếu trái ngược lại.
- Nếu dòng đầu tiên là `YES` thì dòng thứ hai chứa số nguyên là tổng trọng số của các cạnh được bổ sung.

## Ví dụ:
#### Dữ liệu vào:
```
2
1
1 2
1
2 1 40
```

#### Dữ liệu ra:
```
YES
40
```

#### Dữ liệu vào:
```
2
1
1 2
0
```

#### Dữ liệu ra:
```
NO
```
