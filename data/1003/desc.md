**<center>NGUỒN: PreVNOI Ⅸ (BẮC GIANG 2019)</center>**
<br>

Trên đường phố sẽ được xây $n$ tòa nhà nằm cạnh nhau, nhìn từ trái qua phải, độ cao dự kiến của chúng lần lượt là $a_1, a_2,…., a_n$. Ban đầu, độ cao $h_i$ của các tòa nhà bằng $0$.

Giám đốc $H$ là tổng phụ trách. Ở mỗi giai đoạn, giám đốc $H$ chọn một đoạn $[L, R]$ để làm việc. Trong giai đoạn này, độ cao các tòa nhà $h_L, h_{L+1},…, h_R$ sẽ tăng lên $1$. Khi $h_i = a_i$ với mọi $1 ≤ i  ≤ n$ thì dự án sẽ dừng.

Kế hoạch xây dựng luôn thay đổi, có $m$ sự kiện thuộc hai kiểu sau:

- $1\ L\ R\ k\ (1 ≤ L ≤ R ≤ n,1 ≤ k ≤ 10^5)$ thay đổi $a_x$ thành $a_x + k$ với mọi $L ≤ x ≤ R$
- $2\ L\ R\ (1 ≤ L ≤ R ≤ n)$, giả sử $a_1,a_2,…,a_{L−1},a_{R+1},a_{R+2},…,a_n=0$, hỏi xem cần tối thiểu bao nhiêu giai đoạn để dự án hoàn thành.

## Dữ liệu vào:
- Dòng đầu ghi số test $T\ (1≤T≤1000)$. Ở mỗi test:
    - dòng đầu ghi hai số $n$ và $m\  (1≤n,m≤10^5)$ là số tòa nhà và số sự kiện.
    - Dòng thứ hai ghi $n$ số nguyên $a_1,a_2,...,a_n\ (1≤a_i≤1^5)$
    - Sau đó là $m$ dòng, mỗi dòng ghi $m$ sự kiện như mô tả ở trên.
- Đảm bảo $∑n≤10^6$ và $∑m≤10^6$

## Dữ liệu ra:
- Với mỗi truy vấn, in ra trên một dòng kết quả cần tìm

## Ví dụ:
#### Dữ liệu vào:
```
1
5 4
1 3 1 4 5
2 1 5
1 3 4 2
2 2 4
2 1 5
```

#### Dữ liệu ra:
```
7
6
6
```

## Giới hạn:
- Subtask $\#1$: $30\%$ số test có $∑n <=1000, ∑m <=1000$
- Subtask $\#2$: $30\%$ số test khác có $∑n <=1000, ∑m <=50000$
- Subtask $\#3$: $40\%$ số test còn lại không có giới hạn gì thêm.